import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Covenant Care Services - Professional Home Care in Maine',
  description: 'Compassionate home care services in Maine. Personal care, companion care, respite care, and more. Contact us for a free consultation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
