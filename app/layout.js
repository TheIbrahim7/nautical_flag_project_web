import Script from 'next/script';
import './globals.css'
import { Quicksand } from 'next/font/google';

const qs = Quicksand({ subsets: ['latin'], display:'swap' })

export const metadata = {
  title: 'Nautical Flag alphabet and meaning',
  description: 'Learn to identify the maritime signal flags, the letters & meaning. This app is built for learning, quick-referencing and practicing with various forms of quiz',
  manifest: "https://maritime-flag.vercel.app/manifest.json",
  alternates:{
    canonical: "https://maritime-flag.vercel.app"
  },
  openGraph:{
    title: "Learn to Identify the nautical flags and Meanings",
    description: "App for learning, quick-referencing and Quiz: Learn under 25 mins",
    url:"https://maritime-flag.vercel.app",
    "type": "website",    
  },
  twitter:{
    card:"summary_large_image",
    title: "Learn to Identify the nautical flags and Meanings",
    description: "App for learning, quick-referencing and Quiz: Learn under 25 mins",
    creator: "@ioweb_pro",
    site:"@ioweb_pro",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

{/* Google tag (gtag.js) */}
      <Script id='google_tag_manager' async={true} src='https://www.googletagmanager.com/gtag/js?id=G-CHM2441TYS'>
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-CHM2441TYS');
          `
        }

      </Script>

      <body className={qs.className}>
        {children}
        <noscript
            dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/gtag/js?id=G-CHM2441TYS" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
            }} 
        />
      </body>
    </html>
  )
}
