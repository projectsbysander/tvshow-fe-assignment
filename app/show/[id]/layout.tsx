import { fetchData } from '@_lib'
import { NextRoute, WithChildren } from '@_types'
import { Metadata } from 'next'
import { ResolvingMetadata } from 'next/dist/lib/metadata/types/metadata-interface'

export async function generateMetadata(
  { params }: NextRoute,
  _: ResolvingMetadata
): Promise<Metadata> {
  const show = await fetchData(`shows/${params.id}`)
  if (!show) return {}

  return {
    title: `${show.name} - ${show.network.name} - TV Shows`,
    description: show.summary.replace(/(<([^>]+)>)/gi, ''),
    openGraph: {
      images: [show.image?.medium],
    },
  }
}

const ShowPage = ({ children }: WithChildren) => {
  return <>{children}</>
}

export default ShowPage
