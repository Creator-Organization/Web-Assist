import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebAssist - Professional Web Development Services',
  description: 'Custom web development services offering modern full-stack solutions with React, Next.js, Node.js, and more. Get your project started today.',
  keywords: 'web development, React, Next.js, Node.js, full-stack, custom websites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
