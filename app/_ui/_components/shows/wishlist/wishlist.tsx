'use client'
import React, { useEffect, useState } from 'react'
import { ShowsList } from '../list'
import { getWishlist } from '@_lib/storage'
import { ShowType } from '@_types'

const Wishlist = ({ shows }: { shows: ShowType[] }) => {
  const [wishlist, setWishlist] = useState<number[]>([])

  useEffect(() => {
    setWishlist(getWishlist())
  }, [])

  return wishlist.length ? (
    <ShowsList
      genre='My wishlist'
      list={shows.filter(({ id }) => wishlist.includes(id))}
    />
  ) : null
}

export default Wishlist
