# Updating the résumé

When Ken says "edit the résumé" (add a role, change a bullet, add a skill, or just "publish what's in
Overleaf"), the agent runs this whole process on its own: edit Overleaf, compile it, put the PDF on the site,
ship the site and confirm it is live. The one thing it may stop for is an Overleaf login (step 1).

## How the pieces fit

```
Ken's request
     │
     ▼
Overleaf main.tex ─────────────── source of truth (project 6402857541203dfd475eb084)
     │   read and written through Ken's Chrome (Playwright MCP hub)
     ▼
Overleaf compile (pdfLaTeX) ─────► main/public/Kenneth-Atchon-Resume.pdf
                                          │
main/data/profile.ts ◄── pnpm resume check (the site's roles must match the PDF word for word)
     │
     ▼
git push main ─► Netlify builds main/ ─► https://atchonk.netlify.app/Kenneth-Atchon-Resume.pdf
```

- **Overleaf** holds the only copy of the LaTeX: https://www.overleaf.com/project/6402857541203dfd475eb084.
  Never keep a `.tex` copy in this repo and never edit the PDF directly.
- **The PDF** is whatever Overleaf compiled, byte for byte. `/resume` and `/Resume.pdf` redirect to it
  (`main/next.config.mjs`), and the site's "View résumé" links use `person.resume`.
- **The site** shows the same facts. `roles` and `education` in `main/data/profile.ts` repeat the résumé's
  bullets verbatim, and `pnpm resume check` fails if they drift. Roles the résumé leaves out (Arpa-Cloud)
  stay on the site as site-only.
- **Hand-off files** live in `~/.playwright-hub/output/resume/`, because the Playwright hub can only read and
  write inside `~/.playwright-hub/output`. Nothing there is committed.

## Ground rules

**Facts.** Every fact traces to a source: Ken's own words, his LinkedIn
(linkedin.com/in/kenneth-atchon-488b81214), Overleaf's history, `KENNETH_ATCHON_INFO.md`, or the repos. Never
invent a number. When sources disagree on a title or a date, LinkedIn wins, and the report says what changed
and why. Write what Ken did: "owned" when he owned a part of something, "led" only when he led it.

**One page, US Letter.** If an edit overflows, tighten other bullets before dropping content. Each Technical
Skills line must fit on one line; a wrapped line with one orphan word looks careless.

**ATS (applicant tracking systems read the PDF's text layer before a person does).** Keep these preamble lines,
they are why the text layer is clean:

| Line | Why |
| --- | --- |
| `\input{glyphtounicode}` and `\pdfgentounicode=1` | glyphs map to real Unicode letters |
| `\DisableLigatures[f]{encoding = *, family = *}` | "traffic" stays plain text instead of the single `ﬀ` glyph some ATS can't match |
| `\hyphenpenalty=10000` and `\exhyphenpenalty=10000` | no word is split across lines |
| `\hypersetup{pdftitle=…, pdfauthor=…, pdfkeywords=…}` | file metadata for parsers and search |

Also keep one column, the standard headings (Experience, Projects, Education, Technical Skills), dates as
`Mon YYYY -- Mon YYYY`, and no icons, images or extra tables.

**Writing for technical recruiters.** Each bullet starts with a verb, names the technology, and ends on the
outcome. Bold the key technology or number (`\textbf{}`), at most two or three per bullet. A bullet runs to
three lines at most.

## One-time setup

- Ken's Chrome with the Playwright extension hub running (the `playwright` MCP server), logged in to Overleaf.
- `brew install poppler` (`pdfinfo`, `pdftotext`) for the checks.
- `brew install tectonic` (optional) for fast local previews.
- Node 24 and pnpm. Run every `pnpm resume …` command from `main/`.

## The process

### 1. Open the Overleaf project

List the hub's tabs (`browser_tabs` with `action: "list"`). Adopt the tab if the only one is `connect.html`;
otherwise open your own with `action: "new"`. Then `browser_navigate` to
`https://www.overleaf.com/project/6402857541203dfd475eb084`.

If the page title starts with "Restricted" or the page offers "Log in", Chrome isn't signed in. Send Ken a
`PushNotification` ("blocked: log into overleaf.com in Chrome so I can edit your résumé"), keep going on
anything that doesn't need Overleaf, and continue once he says he's in.

### 2. Pull the live LaTeX

Always start from what is in Overleaf now; Ken edits it directly. Call `browser_evaluate` with
`filename: ~/.playwright-hub/output/resume/pulled.json` (write the home path out in full) and this function:

```js
async () => { for (let i = 0; i < 60 && !document.querySelector('.cm-content')?.cmView?.view; i++) await new Promise(r => setTimeout(r, 250)); const view = document.querySelector('.cm-content')?.cmView?.view; if (!view) throw new Error('Overleaf editor did not load; are you logged in?'); return view.state.doc.toString(); }
```

Then run:

```sh
pnpm resume pull     # writes main.tex (to edit) and main.orig.tex (to detect concurrent Overleaf edits)
```

To see what Ken changed in Overleaf himself, the project history is one call away. Run this with
`browser_evaluate`, then fetch `/project/<id>/diff?pathname=main.tex&from=<fromV>&to=<toV>` for any entry:

```js
async () => { const id = location.pathname.split('/')[2]; const u = await (await fetch(`/project/${id}/updates?min_count=10`)).json(); return u.updates.slice(0, 10).map(x => ({ from: x.fromV, to: x.toV, at: new Date(x.meta.end_ts).toISOString() })) }
```

### 3. Edit

Edit `~/.playwright-hub/output/resume/main.tex` with the Edit tool. If Ken only asked to publish what's in
Overleaf, skip to step 6.

### 4. Preview locally (optional, about 5 seconds)

```sh
pnpm resume preview
pdftotext -layout ~/.playwright-hub/output/resume/preview/main.pdf - | sed -n '/Technical Skills/,$p'
```

Tectonic uses the same fonts as Overleaf, so line breaks match closely. It has to drop the three pdfTeX-only
lines, so only Overleaf's build is final.

### 5. Push to Overleaf

```sh
pnpm resume push     # writes push.js: only the changed span, plus SHA-256 hashes of the old and new text
```

Run it with `browser_run_code` using `filename: ~/.playwright-hub/output/resume/push.js`. Expect
`{ ok: true }`. If the result says "Overleaf changed since the pull", someone edited in between: go back to
step 2 and redo the edit on the new text. Never force it.

### 6. Compile on Overleaf and bring the PDF home

Call `browser_evaluate` with `filename: ~/.playwright-hub/output/resume/build.json` and this function. It
compiles through Overleaf's own compile endpoint and returns the PDF (base64) and the log:

```js
async () => { const id = location.pathname.split('/')[2]; const csrf = document.querySelector('meta[name="ol-csrfToken"]').content; const res = await fetch(`/project/${id}/compile?auto_compile=false`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json', 'X-Csrf-Token': csrf }, body: JSON.stringify({ check: 'silent', draft: false, incrementalCompilesEnabled: true, stopOnFirstError: false }) }); const j = await res.json(); const out = { http: res.status, status: j.status }; const q = `?compileGroup=${j.compileGroup || 'standard'}&clsiserverid=${j.clsiServerId || ''}`; const get = (p) => (j.outputFiles || []).find((f) => f.path === p); const log = get('output.log'); if (log) out.log = await (await fetch(log.url + q, { credentials: 'include' })).text(); const pdf = get('output.pdf'); if (pdf) { const buf = new Uint8Array(await (await fetch(pdf.url + q, { credentials: 'include' })).arrayBuffer()); let bin = ''; for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000)); out.pdf = btoa(bin); } return JSON.stringify(out); }
```

Then run:

```sh
pnpm resume import   # writes main/public/Kenneth-Atchon-Resume.pdf and prints its sha256
```

If the compile failed, `import` prints the LaTeX errors (`!` lines) and the log's path. Fix `main.tex`, then
go back to step 5.

### 7. Mirror the change on the site

- `main/data/profile.ts`
  - `roles`: title, start, end and `points`, copied word for word from the résumé as plain text
    (`--` becomes `–`, `\%` becomes `%`, drop `\textbf{}`).
  - `education`, and `person.title` (it must equal the current role's title).
  - Related copy when a fact changes: `toolbox`, `featuredProjects` stacks, the `work` case studies.
- `main/components/about.tsx`: the About paragraph if school, titles or history change.
- `KENNETH_ATCHON_INFO.md`: any corrected fact.

### 8. Verify

```sh
pnpm resume check    # 1 Letter page, title/author metadata, no ligature glyphs, every résumé fact on the site in the PDF
pnpm typecheck && pnpm build
pnpm start -p 3317   # in the background
curl -s -o /dev/null -w '%{http_code} -> %{redirect_url}\n' http://localhost:3317/resume   # 307 -> the PDF
```

Then open the changed sections in the hub browser (`#experience`, `#toolbox`, `#about`) and take a screenshot.
A site change isn't done until you have looked at it. Stop the server with `pkill -f next-server` (killing
`next start` leaves its child server running).

### 9. Ship

```sh
git add -A && git commit -m "Update the résumé: <what changed>" && git push origin main
```

Netlify builds `main/` from `main` (pnpm 9, frozen lockfile). Poll in the background until the live PDF
matches the sha256 `pnpm resume import` printed:

```sh
for i in $(seq 1 60); do [ "$(curl -s "https://atchonk.netlify.app/Kenneth-Atchon-Resume.pdf?v=$i" | shasum -a 256 | cut -c1-16)" = "<sha>" ] && echo live && exit 0; perl -e 'select(undef,undef,undef,10)'; done; exit 1
```

Then screenshot the live page's changed section.

### 10. Report and log

Tell Ken what changed and link https://atchonk.netlify.app/Kenneth-Atchon-Resume.pdf. Include every fact you
corrected with its source, and every judgment call as `Decision (autonomous): <choice> — <reason>`. Log the
run in Second Brain under the `portfolio` project.

## When something goes wrong

| Symptom | Cause and fix |
| --- | --- |
| Overleaf page is "Restricted" (403) | Chrome isn't logged in. Step 1. |
| `No editor found` | Another file is open. Click `main.tex` in the Overleaf file tree, then retry. |
| `Overleaf changed since the pull` | Someone edited Overleaf after step 2. Pull again and redo the edit. |
| `browser_evaluate` says the file is outside allowed roots | `filename` must be under `~/.playwright-hub/output/`. |
| `import` fails with compile status `failure` | LaTeX error. Read the `!` lines, fix `main.tex`, push again. |
| `check`: more than one page | Tighten bullets (three lines at most) or merge two; preview locally first. |
| `check`: a bullet "not in the PDF" | The site and résumé drifted. Copy the résumé's wording into `profile.ts`. |
| `check`: ligature glyphs | The `\DisableLigatures` line was removed. Put it back. |
| `pnpm build` fails on `.next/types/...` for a deleted route | Stale build cache. `rm -rf main/.next`, then build again. |
| The live PDF is still the old one | Netlify is still building, or the browser cached it. Keep polling with a fresh `?v=`. |

## Files

| Path | Role |
| --- | --- |
| `main/scripts/resume.mjs` | `pnpm resume pull \| preview \| push \| import \| check` |
| `main/public/Kenneth-Atchon-Resume.pdf` | the published résumé, as compiled by Overleaf |
| `main/data/profile.ts` | the site's copy of the résumé facts |
| `main/next.config.mjs` | redirects from `/resume` and `/Resume.pdf` |
| `~/.playwright-hub/output/resume/` | hand-off files: `pulled.json`, `main.tex`, `main.orig.tex`, `push.js`, `build.json`, `output.log` |
