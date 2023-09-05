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
    title: "Learn to Identify the nautical flags and meanings",
    description: "App for learning, quick-referencing and Quiz: Learn under 25 mins", //Nautical flags -> know them, quickly check a flag and sometimes quiz yourself on this web app
    url:"https://maritime-flag.vercel.app",
    "type": "website",    
  },
  twitter:{
    card:"summary_large_image",
    title: "Learn to Identify the nautical flags and meanings",
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

  const jsonLd = {
    '@context': 'https://schema.org',
    "@type": "SoftwareApplication",
    "name": "nautical signal flags app",
    "alternateName": "Maritime Signal FLags",
    description: "Learn to identify the nautical signal flags, the alphabets and meanings. This web application is built for progressive learning, quick referencing and more.",
    "url": "https://maritime-flag.vercel.app/",
    "author": {
      "@type": "Person",
      "name": "Ibrahim Oduola",
      "image": "https://maritime-flag.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.c3618e5c.png&w=3840&q=75",
    },
    logo:"https://maritime-flag.vercel.app/icon-256x256.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "publisher": {
      "@type": "Organization",
      "name": "ioweb",
      "url": "https://www.ioweb.pro",
    },
    "applicationCategory": ["EducationalApplication", "WebApplication"],
    // "downloadUrl": "https://maritime-flag.vercel.app/",
    "operatingSystem": ["Android", "iOS", "Windows", "MacOS"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "6"
    }
  }


  return (
    <html lang="en">
      
      {/* Add JSON-LD to your page */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

      <body className={qs.className}>

        <Suspense>
        <GoogleAnalytics GA_MEASUREMENT_ID={"G-J2BEKDRXZR"}/>
        </Suspense>
        {children}
      </body>
    </html>
  )
}
