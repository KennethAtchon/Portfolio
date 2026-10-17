import { ImageResponse } from "next/og"
import { headline, person } from "@/data/profile"

export const alt = "Kenneth Atchon, Software Engineer at Amazon"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0b0c0f",
          backgroundImage: "radial-gradient(circle at 50% -20%, rgba(242,239,233,0.12), rgba(11,12,15,0) 60%)",
          padding: "64px 72px",
          color: "#f2efe9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#a8a39a" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#3ddc84" }} />
          {person.status} · {person.location}
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 112, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>{person.name}</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 40, lineHeight: 1.2, color: "#a8a39a", maxWidth: 900 }}>{headline}</div>
        <div style={{ display: "flex", marginTop: "auto", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 28, color: "#f2efe9" }}>Software Engineer · Amazon · Web platform, auth, mobile</span>
          <span
            style={{
              display: "flex",
              padding: "14px 24px",
              borderRadius: 12,
              background: "linear-gradient(#ff8a45, #ff5c1a)",
              color: "#160904",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            atchonk.netlify.app
          </span>
        </div>
      </div>
    ),
    size,
  )
}
