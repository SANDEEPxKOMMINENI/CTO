"use client"

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Polyfill for :focus-visible
    import('focus-visible')
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
