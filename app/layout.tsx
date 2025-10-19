import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Shadae Ellmers',
  description: 'Shadae Ellmers Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🕸️</text></svg>"
        />
      </head>
      <body id="home" className={`antialiased`}>
        <header className="w-full z-50 fixed">
          <Navigation />
        </header>
        <main className="text-md">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
