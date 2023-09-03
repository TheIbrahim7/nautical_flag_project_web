import './globals.css'
import { Quicksand } from 'next/font/google';
import GoogleAnalytics from './google_analytics';
import { Suspense } from 'react';


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
  },
  verification:{
    google: "GZQq9PcarDV7WP42mmuSzpwMAVynE8zezLb4einE4m4",
    other:{
      "msvalidate.01":"05427D50BF02B96A69502C250290E7B8",
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={qs.className}>

        <Suspense>
        <GoogleAnalytics GA_MEASUREMENT_ID={"G-J2BEKDRXZR"}/>
        </Suspense>
        {children}
      </body>
    </html>
  )
}
