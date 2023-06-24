'use client'
import React, { FormEvent, useRef } from 'react'
import { Input } from '@_ui'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const Search = () => {
  const ref = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push(
      ref.current?.value ? `/shows?search=${ref.current.value}` : '/shows'
    )
  }

  return (
    <form onSubmit={onSubmit} className='relative w-72 max-w-full'>
      <Input name='search' placeholder='Search your show' ref={ref} />
      <button type='submit'>
        <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-white' />
      </button>
    </form>
  )
}

Input.displayName = 'Search'

export default Search
