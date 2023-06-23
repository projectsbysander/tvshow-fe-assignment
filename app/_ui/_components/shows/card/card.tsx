import { ImageProps } from '@_types'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

export interface CardProps {
  href: string
  image: {
    src: string
    alt: string
  }
}

const Card: FC<CardProps> = ({ image, href }) => {
  const { alt = '', ...otherImgProps } = image
  return (
    <Link href={href} className=''>
      <div className='group relative h-[295px] w-[210px] overflow-hidden'>
        <Image
          alt={alt}
          width={295}
          height={210}
          {...otherImgProps}
          className='object-contain opacity-90 duration-500 group-hover:scale-105 group-hover:opacity-100'
        />
      </div>
    </Link>
  )
}

export default Card
