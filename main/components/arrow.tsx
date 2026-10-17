// The thin long arrow used beside "SEE MY WORK" and "VIEW PROJECT".
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 26 10" width="26" height="10" fill="none" stroke="currentColor" strokeWidth="1.3" className={className} aria-hidden>
      <path d="M0 5h24M19.5 0.8 24.2 5l-4.7 4.2" />
    </svg>
  )
}
