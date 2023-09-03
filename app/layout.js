import './globals.css'
import { Quicksand } from 'next/font/google'

const qs = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Nautical Flag alphabet and meaning',
  description: 'Learn to identify the maritime signal flags, the letters & meaning. This app is built for learning, quick-referencing and practicing with various forms of quiz',
  alternates:{
    canonical: "https://maritime-flag.vercel.app"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={qs.className}>{children}</body>
    </html>
  )
}
