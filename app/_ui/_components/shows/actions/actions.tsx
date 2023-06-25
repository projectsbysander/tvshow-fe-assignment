'use client'
import { getWishlist, updateWishlist } from '@_lib/storage'
import { Button } from '@_ui/_components/common/button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Actions = ({ href, showId }: { href: string; showId: number }) => {
  const [wishlist, setWishlist] = useState<number[]>([])

  useEffect(() => {
    const handleStorage = () => {
      setWishlist(getWishlist())
    }

    handleStorage()

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const WishlistIcon = wishlist.includes(showId) ? FaMinus : FaPlus
  return (
    <div>
      <Link href={href} target='_blank'>
        <Button className='animate-fadeUpSm animation-delay-500'>
          Show on TVmaze
        </Button>
      </Link>
      <Button
        variant='outline'
        onClick={() =>
          updateWishlist(
            wishlist.includes(showId)
              ? wishlist.filter((id: number) => id !== showId)
              : [...wishlist, showId]
          )
        }
        className='ml-3 inline-block animate-fadeUpSm animation-delay-600'
      >
        <WishlistIcon className='inline-block' /> My Wishlist
      </Button>
    </div>
  )
}

export default Actions
