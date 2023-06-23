import { ShowsProvider } from '@_context/ShowsContext'
import { ShowsHeader as Header } from '@_ui'

export const metadata = {
  title:
    'TV Shows - Your access to a variety of movies from genres, categories, and movies',
  description:
    'Get access to a variety of movies from genres, categories, and movies at TV Shows',
  themeColor: '#000',
}

export default function ShowsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ShowsProvider>
      <Header />
      {children}
    </ShowsProvider>
  )
}
