'use client'
import React, { useMemo } from 'react'
import { useShows } from '@_context/ShowsContext'
import { ShowsList } from '../list'

const Shows = () => {
  const { shows } = useShows()

  const listsByGenre = useMemo(() => {
    const genres = shows
      .map((show) => show.genres)
      .flat()
      .filter((genre, i, arr) => i === arr.indexOf(genre))

    return genres.map((genre) => {
      return {
        genre,
        list: shows.filter((show) => show.genres.includes(genre)),
      }
    })
  }, [shows])

  return (
    <>
      <div className='mt-20 flex flex-col gap-10'>
        {listsByGenre.map((props) => (
          <ShowsList key={props.genre} {...props} />
        ))}
      </div>
    </>
  )
}

export default Shows
