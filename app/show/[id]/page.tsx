import { fetchData } from '@_lib/fetch-data'
import { ShowType } from '@_types'
import { Button, Rating, ShowsCard } from '@_ui'
import { Bullet } from '@_ui/_components/common/bullet'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

interface PageProps {
  params: {
    id: string
  }
}

const ShowPage = async ({ params }: PageProps): Promise<any> => {
  const show = await fetchData(`shows/${params.id}?embed=cast`)
  console.log(show)

  return (
    <div className='relative flex flex-col gap-6'>
      <img
        src={show.image.original}
        alt={show.name}
        className='pointer-events-none fixed right-0 top-0 z-0 h-screen w-1/2 animate-fadeInMd object-cover opacity-80'
      />
      <div className='fixed left-1/2 top-0 h-screen w-1/3 bg-gradient-to-r from-main to-transparent'></div>
      <h1 className='mt-10 animate-fadeUpSm'>{show.name}</h1>
      <div className='flex animate-fadeUpSm items-center animation-delay-200'>
        <Rating rate={show.rating.average} />
        <Bullet />
        <div>{show.genres.join(', ')}</div>
        <Bullet />
        {show.premiered.split('-')[0]}
      </div>
      <div
        className='animate-fadeUpSm animation-delay-300'
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
      <p className='animate-fadeUpSm text-sm italic animation-delay-400'>
        Starring:{' '}
        {show._embedded.cast
          .map(({ person }: { person: ShowType }) => person.name)
          .join(', ')}
      </p>
      <div>
        <Link href={show.url}>
          <Button className='animate-fadeUpSm animation-delay-500'>
            Show on TVmaze
          </Button>
        </Link>
        <Button
          variant='outline'
          className='ml-3 inline-block animate-fadeUpSm animation-delay-600'
        >
          <FaPlus className='inline-block' /> My Wishlist
        </Button>
      </div>
      <div>
        <h3 className='animate-fadeUpSm animation-delay-700'>Cast</h3>
        <div className='mt-auto flex max-w-full gap-4 overflow-auto py-4'>
          {show._embedded.cast.map(
            ({ person }: { person: ShowType }, i: number) => (
              <div
                key={person.id}
                className='animate-fadeUpSm'
                style={{ animationDelay: `${700 + i * 40}ms` }}
              >
                <ShowsCard
                  href={person.url}
                  target='_blank'
                  disableHover
                  image={{ ...person.image, alt: person.name }}
                >
                  {person.name}
                </ShowsCard>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default ShowPage
