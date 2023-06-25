/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const cover = (props: { alt: string; src: string }) => {
  return (
    <>
      <img
        className='pointer-events-none fixed right-0 top-0 z-0 h-screen w-full animate-fadeInMd object-cover opacity-60 md:opacity-80 md:w-1/2'
        {...props}
      />
      <div className='fixed left-0 top-0 h-screen w-full bg-gradient-to-r from-main to-transparent md:left-1/2 md:w-1/3' />
    </>
  )
}

export default cover
