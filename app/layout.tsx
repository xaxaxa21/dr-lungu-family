import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BetaBanner } from "@/components/beta-banner"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Dr. Lungu Family | Clinica Medicala Pitesti",
    template: "%s | Dr. Lungu Family",
  },
  description:
    "Clinica medicala multidisciplinara de excelenta in Pitesti. Specialisti de top din Bucuresti, acum in inima Pitestiului. Cardiologie, Pediatrie, Ginecologie si multe altele.",
  keywords: [
    "clinica medicala Pitesti",
    "Dr Lungu Family",
    "medici specialisti",
    "cardiologie",
    "pediatrie",
    "ginecologie",
  ],
}

export const viewport: Viewport = {
  themeColor: "#1a4a5e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <BetaBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
