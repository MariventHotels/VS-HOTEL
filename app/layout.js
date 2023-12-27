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
      {/* data-aos animation */}
      <link rel="stylesheet" href="../styles.css" />
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />

      {/* light gallery style */}
      <link type="text/css" rel="stylesheet" href="css/lightgallery.css" />

      {/* lightgallery plugins */}
      <link type="text/css" rel="stylesheet" href="css/lg-zoom.css" />
      <link type="text/css" rel="stylesheet" href="css/lg-thumbnail.css" />

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

      {/* Light gallery script */}
      <script src="js/lightgallery.umd.js"></script>
      {/* <!-- Or use the minified version --> */}
      <script src="js/lightgallery.min.js"></script>

      {/* <!-- lightgallery plugins --> */}
      <script src="js/plugins/lg-thumbnail.umd.js"></script>
      <script src="js/plugins/lg-zoom.umd.js"></script>

      </body>


    </html>
  )
}
