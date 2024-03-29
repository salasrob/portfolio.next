import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robert Salas',
  description: 'Software Engineer - Robert Salas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"}>{children}</body>
    </html>
  )
}
