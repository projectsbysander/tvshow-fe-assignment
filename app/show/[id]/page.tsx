import { fetchData } from '@_lib'
import { ShowActions, ShowTag, StarredActors } from '@_ui'
import { ShowCover } from '@_ui/_components/shows/cover'

interface PageProps {
  params: {
    id: string
  }
}

const ShowPage = async ({ params }: PageProps): Promise<any> => {
  const show = await fetchData(`shows/${params.id}?embed=cast`)
  return (
    <div className='relative flex flex-col gap-6'>
      <ShowCover src={show.image.original} alt={show.name} />
      <h1 className='mt-10 animate-fadeUpSm'>{show.name}</h1>
      <ShowTag {...show} />
      <div
        className='animate-fadeUpSm animation-delay-300'
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
      <ShowActions href={show.url} showId={show.id} />
      <StarredActors cast={show._embedded.cast} />
    </div>
  )
}

export default ShowPage
