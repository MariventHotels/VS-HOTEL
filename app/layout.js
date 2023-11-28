import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {Open_Sans, Playfair_Display} from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-openSans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata = {
  title: 'VS Hotel',
  description: 'Redefining travel by providing you with unlimited access to fitness classes, gym facilities, and sports facilities.',
}

export default function RootLayout({ children }) {

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  </style>

  return (
    <html lang="en"
      className={`${openSans.variable} ${playfair.variable}`}
    >

      <body className='bg-gray'>
        <Navbar />
          <main className='relative overflow-hidden font-opensans'>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
