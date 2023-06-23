'use client'
import React, { FC } from 'react'
import { ShowCard } from '../card'
import { ShowType } from '@_types'

interface ListProps {
  genre: string
  list: ShowType[]
}

const List: FC<ListProps> = ({ genre, list }) => {
  return (
    <div>
      <h3>{genre}</h3>
      <div className='flex max-w-full gap-4 overflow-auto py-4'>
        {list.map((show) => (
          <ShowCard
            key={show.id}
            href={`/show/${show.id}`}
            image={{ src: show.image.medium, alt: show.name }}
          />
        ))}
      </div>
    </div>
  )
}

export default List
