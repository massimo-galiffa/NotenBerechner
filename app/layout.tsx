import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Noten Berechner",
  description: "Calculate grades based on different country systems",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

