import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AadharX - Decentralized Identity Verification",
  description: "A decentralized identity verification system built with blockchain and zero-knowledge proofs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <ThemeProvider attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          {children}
        </ThemeProvider>
  )
}