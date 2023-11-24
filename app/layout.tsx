import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Theme Demo',
  description: 'Dark Theme Toggle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider value={{ light: 'garden', dark: 'night' }} defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
