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
      <body className={inter.className + " bg-od-950 leading-relaxed text-stone-400 antialiased selection:bg-od-400 selection:text-od-950"}>{children}</body>
    </html>
  )
}
