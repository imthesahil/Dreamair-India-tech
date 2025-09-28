import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dreamair India - Your Gateway to Global Aviation Careers",
  description:
    "Professional aviation training institute offering globally recognized certifications in Commercial Pilot License, Flight Instructor, Type Rating, and Cabin Crew programs across USA, South Africa, New Zealand, and Canada.",
    icons: {
    icon: "/Dream Air Logo.jpeg", // Make sure this file exists inside your public/ folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
