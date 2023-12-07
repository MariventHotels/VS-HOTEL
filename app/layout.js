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

  return (
    <html lang="en"
      className={`${openSans.variable} ${playfair.variable}`}
    >

    <head>
      <link rel="stylesheet" href="../styles.css" />
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
    </head>

      <body className='bg-gray'>
        <Navbar />
          <main className='relative overflow-hidden font-opensans' >
            {children}
          </main>
        <Footer />

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <script>
        AOS.init();
      </script>

      </body>
    </html>
  )
}
