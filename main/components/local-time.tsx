"use client"

import { useEffect, useState } from "react"
import { person } from "@/data/profile"

export function LocalTime() {
  const [now, setNow] = useState<string | null>(null)
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: person.timeZone,
      timeZoneName: "short",
    })
    const tick = () => setNow(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [])
  return <span className="tabular-nums">{now ?? "Pacific time"}</span>
}
