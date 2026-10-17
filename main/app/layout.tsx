import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { person } from "@/data/profile"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })
const cabinet = localFont({
  src: [
    { path: "./fonts/CabinetGrotesk-Bold.woff2", weight: "700" },
    { path: "./fonts/CabinetGrotesk-Extrabold.woff2", weight: "800" },
  ],
  variable: "--font-cabinet",
  display: "swap",
})

const description =
  "Kenneth Atchon is a software engineer at Amazon working on web platform, authentication and mobile: CloudFront and Lambda@Edge, cross-site sessions, Module Federation performance and React Native."

export const metadata: Metadata = {
  metadataBase: new URL(person.site),
  title: {
    default: "Kenneth Atchon · Software Engineer",
    template: "%s · Kenneth Atchon",
  },
  description,
  keywords: [
    "Kenneth Atchon",
    "Software Engineer",
    "Amazon",
    "TypeScript",
    "React",
    "React Native",
    "AWS",
    "CloudFront",
    "Lambda@Edge",
    "Module Federation",
    "Webpack",
    "Authentication",
    "Seattle",
  ],
  authors: [{ name: person.name, url: person.site }],
  creator: person.name,
  openGraph: {
    title: "Kenneth Atchon · Software Engineer",
    description,
    url: person.site,
    siteName: "Kenneth Atchon",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Atchon · Software Engineer",
    description,
  },
}

export const viewport: Viewport = {
  themeColor: "#0b0c0f",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${cabinet.variable}`}>
      <body>{children}</body>
    </html>
  )
}
