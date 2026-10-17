import { ImageResponse } from "next/og"
import { hero, person } from "@/data/profile"

export const alt = "Kenneth Atchon, Software Engineer. Thoughtful code. Meaningful products."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  const ink = "#111111"
  const blue = "#0b3cb6"
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#fbf9f1", padding: "56px 64px", color: ink }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 28 }}>
          <span>{person.name}</span>
          <div style={{ flex: 1, height: 1, background: "#b0aeab", margin: "0 28px" }} />
          <div style={{ width: 14, height: 14, borderRadius: 999, background: blue }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 70, fontSize: 104, lineHeight: 1.02, letterSpacing: -4 }}>
          {hero.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: "auto", alignItems: "center", gap: 28, fontSize: 20, letterSpacing: 4, color: "#6b6865" }}>
          <span>SOFTWARE ENGINEER · AMAZON · SEATTLE, WA</span>
          <div style={{ width: 90, height: 2, background: blue }} />
        </div>
      </div>
    ),
    size,
  )
}
