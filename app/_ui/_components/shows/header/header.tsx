import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Search } from '@_ui'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex h-20 min-h-[5rem] items-center justify-between gap-4'>
      <Link href='/' aria-label='Logo'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={84}
          height={89}
          className='h-12 w-12'
        />
      </Link>
      <Search />
    </header>
  )
}

export default Header
