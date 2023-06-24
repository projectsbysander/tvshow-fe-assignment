'use client'
import React, { FC } from 'react'
import { ShowsCard } from '../card'
import { ShowType } from '@_types'
import { Rating } from '@_ui/_components/common/rating'

interface ListProps {
  genre: string
  list: ShowType[]
}

const List: FC<ListProps> = ({ genre, list }) => {
  return (
    <div>
      <h3 className='h-10'>{genre}</h3>
      <div className='flex max-w-full gap-4 overflow-auto overflow-y-hidden py-4'>
        {list.map((show, i: number) => (
          <ShowsCard
            key={show.id}
            href={`/show/${show.id}`}
            image={{ ...show.image, alt: show.name }}
          >
            <Rating rate={show.rating.average} />
          </ShowsCard>
        ))}
      </div>
    </div>
  )
}

export default List
