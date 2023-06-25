import React from 'react'
import { ShowsCard } from '../card'
import { ShowType } from '@_types'

interface Cast {
  person: ShowType
}

interface StarredActor {
  cast: Cast[]
}

const StarredActors = ({ cast }: StarredActor) => {
  return (
    <div>
      <h3 className='animate-fadeUpSm animation-delay-700'>Starring:</h3>
      <div className='mt-auto flex max-w-full gap-4 overflow-auto py-4'>
        {cast.map(({ person }: { person: ShowType }, i: number) => (
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
        ))}
      </div>
    </div>
  )
}

export default StarredActors
