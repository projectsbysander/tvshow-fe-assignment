import React from 'react'

const Loading = () => {
  return (
    <div className='mt-20 flex animate-pulse flex-col gap-10'>
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <div className='mb-2 h-10 w-72 rounded-xl bg-gray-600' />
            <div className='flex max-w-full gap-4 overflow-auto overflow-y-hidden py-4'>
              {Array(20)
                .fill(0)
                .map((_, idx: number) => (
                  <div
                    className='min-h-[295px] min-w-[210px] rounded-xl bg-gray-600'
                    key={idx}
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Loading
