import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arion Suites Hotel - 5-Star Luxury Hotel in Jakarta, Indonesia",
  description:
    "Experience unparalleled luxury at Arion Suites Hotel Jakarta. Premium accommodations, world-class dining, spa services, and exceptional hospitality in the heart of Indonesia's capital city.",
  keywords:
    "luxury hotel jakarta, 5 star hotel, arion suites, premium accommodation, business hotel, spa hotel, fine dining, meeting venues, wedding venue jakarta",
  authors: [{ name: "Arion Suites Hotel" }],
  creator: "Arion Suites Hotel",
  publisher: "Arion Suites Hotel",
  robots: "index, follow",
  openGraph: {
    title: "Arion Suites Hotel - 5-Star Luxury Experience",
    description: "Discover luxury redefined at Arion Suites Hotel Jakarta",
    url: "https://arionsuiteshotel.com",
    siteName: "Arion Suites Hotel",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
