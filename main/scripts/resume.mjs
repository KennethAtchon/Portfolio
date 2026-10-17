// Résumé pipeline helpers. The steps that touch Overleaf run in Ken's Chrome through the Playwright MCP hub;
// this script prepares and checks everything on disk around them. The whole process is in /RESUME.md.
//
//   pnpm resume pull      pulled.json (editor text saved by browser_evaluate) -> main.tex + main.orig.tex
//   pnpm resume preview   compile main.tex locally with Tectonic and report the page count (approximate)
//   pnpm resume push      write push.js, which browser_run_code runs to replace the Overleaf text with main.tex
//   pnpm resume import    build.json (compile result saved by browser_evaluate) -> public/Kenneth-Atchon-Resume.pdf
//   pnpm resume check     verify the PDF: one Letter page, clean ATS text layer, and in sync with data/profile.ts

import { execFileSync } from "node:child_process"
import { createHash } from "node:crypto"
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { homedir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const PROJECT_ID = "6402857541203dfd475eb084"
const APP = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const PDF = join(APP, "public/Kenneth-Atchon-Resume.pdf")
// The Playwright hub only reads and writes files under its output folder, so the hand-off files live there.
const WORK = join(homedir(), ".playwright-hub/output/resume")
const file = (name) => join(WORK, name)

mkdirSync(WORK, { recursive: true })

// browser_evaluate saves its return value JSON-encoded, sometimes twice (a returned JSON string).
function decode(raw) {
  let value
  try {
    value = JSON.parse(raw)
  } catch {
    return raw
  }
  while (typeof value === "string" && /^[{["]/.test(value.trim())) {
    try {
      value = JSON.parse(value)
    } catch {
      break
    }
  }
  return value
}

function fail(message) {
  console.error(`✗ ${message}`)
  process.exit(1)
}

function need(path, hint) {
  if (!existsSync(path)) fail(`${path} is missing. ${hint}`)
  return readFileSync(path, "utf8")
}

const sha = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 16)

function pull() {
  const tex = decode(need(file("pulled.json"), "Save the Overleaf editor text with browser_evaluate first (RESUME.md, step 2)."))
  if (typeof tex !== "string" || !tex.includes("\\begin{document}")) fail("pulled.json does not hold the résumé's LaTeX.")
  writeFileSync(file("main.tex"), tex)
  writeFileSync(file("main.orig.tex"), tex)
  console.log(`✓ ${file("main.tex")} (${tex.length} chars). Edit this file; main.orig.tex guards against overwriting newer Overleaf edits.`)
}

function preview() {
  const tex = need(file("main.tex"), "Run `pnpm resume pull` first.")
  const dir = file("preview")
  mkdirSync(dir, { recursive: true })
  // Tectonic is XeTeX-based; these three lines are pdfTeX-only. Overleaf (pdfLaTeX) keeps them.
  const local = tex.replace(/^\\input\{glyphtounicode\}$|^\\pdfgentounicode=1$|^\\DisableLigatures.*$/gm, "")
  writeFileSync(join(dir, "main.tex"), local)
  try {
    execFileSync("tectonic", ["-X", "compile", "main.tex"], { cwd: dir, stdio: "pipe" })
  } catch (error) {
    fail(`Tectonic failed (brew install tectonic if missing):\n${error.stderr?.toString().slice(-1500) ?? error.message}`)
  }
  const pages = execFileSync("pdfinfo", [join(dir, "main.pdf")]).toString().match(/Pages:\s+(\d+)/)[1]
  console.log(`${pages === "1" ? "✓" : "✗"} preview ${join(dir, "main.pdf")}: ${pages} page(s). Overleaf's pdfLaTeX build is the one that counts.`)
}

// The hub echoes every script it runs, so push.js carries only the changed span plus a hash of each whole text.
function push() {
  const tex = need(file("main.tex"), "Run `pnpm resume pull` first.")
  const orig = need(file("main.orig.tex"), "Run `pnpm resume pull` first.")
  let start = 0
  while (start < orig.length && start < tex.length && orig[start] === tex[start]) start++
  let tail = 0
  while (tail < orig.length - start && tail < tex.length - start && orig[orig.length - 1 - tail] === tex[tex.length - 1 - tail]) tail++
  const hash = (s) => createHash("sha256").update(s, "utf8").digest("hex")
  const edit = { from: start, to: orig.length - tail, insert: tex.slice(start, tex.length - tail), origHash: hash(orig), newHash: hash(tex) }
  const code = `async (page) => {
  if (!page.url().includes(${JSON.stringify(PROJECT_ID)})) return { ok: false, error: "The current hub tab is not the Overleaf project: " + page.url() }
  return await page.evaluate(async (edit) => {
    const hash = async (s) => [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)))].map((b) => b.toString(16).padStart(2, "0")).join("")
    const view = document.querySelector(".cm-content")?.cmView?.view
    if (!view) return { ok: false, error: "No editor found. Open main.tex in the Overleaf file tree." }
    const current = await hash(view.state.doc.toString())
    if (current === edit.newHash) return { ok: true, unchanged: true }
    if (current !== edit.origHash) return { ok: false, error: "Overleaf changed since the pull. Pull again and redo the edit on the new text." }
    view.dispatch({ changes: { from: edit.from, to: edit.to, insert: edit.insert } })
    return { ok: (await hash(view.state.doc.toString())) === edit.newHash, length: view.state.doc.length }
  }, ${JSON.stringify(edit)})
}
`
  writeFileSync(file("push.js"), code)
  console.log(`✓ ${file("push.js")}. Run it with browser_run_code (filename) and expect { ok: true }.`)
}

function importPdf() {
  const build = decode(need(file("build.json"), "Compile and save the result with browser_evaluate first (RESUME.md, step 6)."))
  if (typeof build !== "object" || build === null) fail("build.json is not a compile result.")
  if (build.log) writeFileSync(file("output.log"), build.log)
  if (build.status !== "success" || !build.pdf) {
    const errors = (build.log ?? "").split("\n").filter((line) => line.startsWith("!")).slice(0, 10)
    fail(`Overleaf compile status "${build.status}".${errors.length ? `\n${errors.join("\n")}` : ""} Full log: ${file("output.log")}`)
  }
  const pdf = Buffer.from(build.pdf, "base64")
  if (pdf.subarray(0, 5).toString() !== "%PDF-") fail("build.json's pdf field is not a PDF.")
  writeFileSync(PDF, pdf)
  copyFileSync(PDF, file("output.pdf"))
  console.log(`✓ ${PDF} (${pdf.length} bytes, sha256 ${sha(pdf)})`)
}

async function check() {
  const problems = []
  const info = execFileSync("pdfinfo", [PDF]).toString()
  const field = (name) => info.match(new RegExp(`^${name}:\\s+(.*)$`, "m"))?.[1]?.trim()
  if (field("Pages") !== "1") problems.push(`${field("Pages")} pages; the résumé must be one page`)
  if (!field("Page size")?.startsWith("612 x 792")) problems.push(`page size ${field("Page size")}, expected US Letter`)
  if (!field("Title") || !field("Author")) problems.push("PDF title or author metadata is missing (\\hypersetup)")

  const raw = execFileSync("pdftotext", [PDF, "-"]).toString()
  const ligatures = [...new Set(raw.match(/[ﬀ-ﬆ�]/g) ?? [])]
  if (ligatures.length) problems.push(`ligature or replacement glyphs in the text layer (${ligatures.join(" ")}); keep \\DisableLigatures`)
  const other = [...new Set(raw.match(/[^\x00-\x7F–•]/g) ?? [])]
  if (other.length) console.log(`! non-ASCII characters besides – and •: ${other.join(" ")}. Fine if intended.`)

  // The site mirrors the résumé, so every fact the site shows for a résumé role must appear in the PDF verbatim.
  const norm = (s) => s.replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim()
  const text = norm(raw)
  const { roles, education, person } = await import(join(APP, "data/profile.ts"))
  const expect = (value, where) => {
    if (!text.includes(norm(value))) problems.push(`${where} not in the PDF: "${value}"`)
  }
  for (const role of roles) {
    if (!text.includes(norm(role.org))) {
      console.log(`· ${role.org} is site-only (not on the résumé)`)
      continue
    }
    expect(role.title, `${role.org} title`)
    expect(`${role.start} – ${role.end}`, `${role.org} dates`)
    role.points.forEach((point, i) => expect(point, `${role.org} bullet ${i + 1}`))
  }
  expect(education.school, "school")
  expect(`${education.start} – ${education.end}`, "education dates")
  expect(education.gpa, "GPA")
  expect(person.email, "email")
  expect(roles[0].title, "current title")
  if (roles[0].title !== person.title) problems.push(`person.title "${person.title}" differs from the current role "${roles[0].title}"`)

  if (problems.length) {
    problems.forEach((problem) => console.error(`✗ ${problem}`))
    process.exit(1)
  }
  console.log(`✓ ${PDF}: 1 Letter page, clean text layer, in sync with data/profile.ts (sha256 ${sha(readFileSync(PDF))})`)
}

const commands = { pull, preview, push, import: importPdf, check }
const command = commands[process.argv[2]]
if (!command) fail(`Usage: pnpm resume <${Object.keys(commands).join("|")}>`)
await command()
