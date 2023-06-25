import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({ rate }: { rate: number }) => (
  <div className='flex items-center whitespace-nowrap'>
    <FaStar className='mr-2 inline-block' />
    {rate} / 10
  </div>
)

export default Rating
