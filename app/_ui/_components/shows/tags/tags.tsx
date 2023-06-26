import { ShowType } from '@_types'
import { Bullet } from '@_ui/_components/common/bullet'
import { Rating } from '@_ui/_components/common/rating'
import React from 'react'

interface Tag {
  premiered: string
  rating: { average: number }
  genres: string[]
}

const tags = ({ rating, premiered, genres }: Tag) => {
  return (
    <div className='flex animate-fadeUpSm flex-wrap items-center animation-delay-200'>
      <Rating rate={rating.average} />
      <Bullet />
      <div className='whitespace-nowrap'>{genres.join(', ')}</div>
      <Bullet />
      {premiered.split('-')[0]}
    </div>
  )
}

export default tags
