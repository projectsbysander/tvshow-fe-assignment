import { Shows } from '@_ui'
import React from 'react'

const ShowsPage = ({ searchParams }: { searchParams: { search: string } }) => {
  return (
    <div className='mt-20 flex flex-col gap-10'>
      {/* @ts-expect-error Server Component */}
      <Shows search={searchParams.search} />
    </div>
  )
}

export default ShowsPage
