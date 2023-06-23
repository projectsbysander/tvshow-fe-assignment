'use client'
import React, { useRef, useState } from 'react'
import { Input } from '@_ui'
import { cn } from '@_lib/utils'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [value, setValue] = useState('')

  const focusSearch = () => {
    ref.current?.focus()
    setShowSearchInput(true)
  }

  const reset = () => {
    setShowSearchInput(false)
  }

  return (
    <div
      className='flex h-12 rounded-full border-2 border-white'
      onMouseEnter={focusSearch}
      onMouseLeave={reset}
      onFocus={focusSearch}
      onClick={focusSearch}
      onBlur={(e) => !ref.current?.contains(e.target) && reset()}
    >
      <Input
        className={cn(
          'transition-all duration-300',
          showSearchInput ? 'h-12 w-72 border-2' : 'w-0 border-0 px-0'
        )}
        placeholder='Search on title'
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='flex h-full w-12 items-center justify-center'>
        <FaSearch className='text-white' />
      </div>
    </div>
  )
}

Input.displayName = 'Search'

export default Search
