import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Fragments of Thought | A Personal Writing Space',
  description: 'A quiet corner of the internet for personal stories, reflections, and poetry.',
  generator: 'v0.app',
  icons: {
    icon:  '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased `}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
