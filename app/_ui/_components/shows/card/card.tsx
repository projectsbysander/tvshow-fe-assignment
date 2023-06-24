import { ImageProps, WithChildren } from '@_types'
import { Rating } from '@_ui/_components/common/rating'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface ImageAlt extends ImageProps {
  alt: string
}

export interface CardProps extends WithChildren {
  href: string
  image: ImageAlt
  target?: '_blank'
  disableHover?: boolean
}

const Card: FC<CardProps> = ({
  image,
  children,
  disableHover,
  href,
  ...props
}) => {
  const { alt = '', original, medium } = image
  return (
    <Link href={href} {...props}>
      <div className='group relative h-[295px] w-[210px] overflow-hidden'>
        {disableHover ? null : (
          <img
            src={original}
            alt={alt}
            className='pointer-events-none fixed inset-0 z-0 h-screen w-screen object-cover opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-20'
          />
        )}
        <Image
          alt={alt}
          src={medium}
          priority
          width={295}
          height={210}
          className='relative z-10 h-full w-full overflow-hidden object-cover opacity-90 duration-500 group-hover:scale-105 group-hover:opacity-100'
        />
        <div className='absolute bottom-3 left-3 z-10 text-white'>
          {children}
        </div>
      </div>
    </Link>
  )
}

export default Card
