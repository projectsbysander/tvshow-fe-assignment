import React from 'react'
import { ShowsList } from '../list'
import { ShowType } from '@_types'
import { Wishlist } from '../wishlist'
import { fetchData } from '@_lib'

const Shows = async ({ search }: { search: string }) => {
  const shows: ShowType[] = await fetchData(
    search ? `search/shows?q=${search}` : 'shows'
  )

  const listsByGenre = shows
    .map((show) => (search ? show.show.genres : show.genres))
    .flat()
    .filter((genre, i, arr) => i === arr.indexOf(genre))
    .map((genre) => {
      return {
        genre,
        list: (search ? shows.map(({ show }) => show) : shows).filter((show) =>
          show.genres?.includes(genre)
        ),
      }
    })

  return (
    <>
      <Wishlist shows={shows} />
      {listsByGenre.map((props) => (
        <ShowsList key={props.genre} {...props} />
      ))}
    </>
  )
}

export default Shows
