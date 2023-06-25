import React from 'react'

const loading = () => {
  return (
    <div className='relative flex flex-col gap-6'>
      <div className='mt-10 h-16 w-72 animate-pulse bg-gray-600' />
      <div className='h-8 w-full max-w-2xl animate-pulse bg-gray-600' />
      <div className='max-w-2xl'>
        <div className='mb-2 h-4 w-full animate-pulse bg-gray-600' />
        <div className='mb-2 h-4 w-full animate-pulse bg-gray-600' />
        <div className='mb-2 h-4 w-full animate-pulse bg-gray-600' />
        <div className='mb-2 h-4 w-full animate-pulse bg-gray-600' />
        <div className='mb-2 h-4 w-full animate-pulse bg-gray-600' />
        <div className='mb-2 h-4 w-full animate-pulse bg-gray-600' />
        <div className='mb-2 h-4 w-96 animate-pulse bg-gray-600' />
      </div>
      <div>
        <div className='mr-3 inline-block h-8 w-40 animate-pulse bg-gray-600' />
        <div className='inline-block h-8 w-40 animate-pulse bg-gray-600' />
      </div>
      <div>
        <div className='h-8 w-40 animate-pulse bg-gray-600' />
        <div className='flex max-w-full gap-4 overflow-auto overflow-y-hidden py-4'>
          {Array(20)
            .fill(0)
            .map((_, idx: number) => (
              <div
                className='min-h-[295px] min-w-[210px] bg-gray-600'
                key={idx}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default loading
