import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdulsalam Sulaiman | Backend & Automation Engineer',
  description: 'Personal portfolio for Abdulsalam Sulaiman, a backend and automation engineer skilled in Python, FastAPI, and n8n workflow automation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}