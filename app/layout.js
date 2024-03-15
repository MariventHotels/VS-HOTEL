import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {Open_Sans, Playfair_Display} from 'next/font/google'
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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

      <meta property="og:title" content="THIS IS A SHIT" />
      <meta property="og:description" content="Your Description" />
      <meta property="og:image" content="https://www.vshotel.com.ph/icons/VSH-GIF.gif" />

    </head>

      <body className='bg-gray'>
        <Navbar />
          <main className='relative overflow-hidden font-opensans' >
            {children}
          </main>
        <Footer />
        <div id="fb-root"></div>
        {/**Your Chat plugin code */}
        <div id="fb-customer-chat" className="fb-customerchat"></div>

          <Script id="fb-chat" strategy="lazyOnload">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page\_id", "112986857547753");
            chatbox.setAttribute("attribution", "biz\_inbox");

            window.fbAsyncInit = function() {
              FB.init({
              xfbml: true,
              version: 'v12.0'
              })
              };

              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)\[0\];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en\_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            `}
          </Script>

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-YV61V1YBEL"></script>
          <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-YV61V1YBEL');
          `}

          </Script>

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

        <script 
          src="https://cdn2.woxo.tech/a.js#6598af4e435a9a2183f6eb2c" 
          async data-usrc>
        </script>

        <Analytics />
        <SpeedInsights />

      </body>


    </html>
  )
}
