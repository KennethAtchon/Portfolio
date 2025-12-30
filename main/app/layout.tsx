import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" })

export const metadata: Metadata = {
  title: "Kenneth Atchon - Software Developer | Mobile Developer | Full Stack Developer",
  description:
    "Portfolio of Kenneth Atchon, a Software Developer at Amazon working on authentication systems for the AtoZ app. Specializing in React Native, mobile development, and full-stack solutions.",
  generator: "Next.js",
  keywords: [
    "Kenneth Atchon",
    "Software Developer",
    "Mobile Developer",
    "Full Stack Developer",
    "React Native",
    "Amazon",
    "Seattle",
    "Web Development",
    "Mobile App Development"
  ],
  authors: [{ name: "Kenneth Atchon" }],
  creator: "Kenneth Atchon",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Kenneth Atchon - Software Developer",
    description: "Software Developer at Amazon | Mobile Developer | Full Stack Developer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Atchon - Software Developer",
    description: "Software Developer at Amazon | Mobile Developer | Full Stack Developer",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
