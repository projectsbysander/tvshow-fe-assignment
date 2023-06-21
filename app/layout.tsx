import './globals.css'
import { Montserrat } from '@next/font/google'

const primary = Montserrat({
  subsets: ['latin'],
  weight: ['200', '400'],
  variable: '--primary-font',
})

const secondary = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--secondary-font',
})

export const metadata = {
  title:
    'TV Shows - Your access to a variety of movies from genres, categories, and movies',
  description:
    'Get access to a variety of movies from genres, categories, and movies at TV Shows',
  themeColor: '#000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#fff' />
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#000' />
      </head>
      <body
        style={{
          ['--primary-font' as any]: primary.style.fontFamily,
          ['--secondary-font' as any]: secondary.style.fontFamily,
        }}
      >
        <main className={`h-full w-full ${secondary.className}`}>
          {children}
        </main>
      </body>
    </html>
  )
}
