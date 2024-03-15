import './globals.css'
import { Inter } from 'next/font/google'
import Header from "../components/header/Header"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aayusha Raut',
  description: 'Aayusha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-t from-purple-200 to-pink-100 via-blue-100 sm:pt-36`}>
        <Header/>
        {children}</body>
    </html>
  )
}
