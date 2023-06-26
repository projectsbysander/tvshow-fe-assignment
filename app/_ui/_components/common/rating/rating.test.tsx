import React from 'react'
import { render } from '@testing-library/react'
import Rating from './rating'

describe('Test Rating Component', () => {
  it('should display the correct rate', async () => {
    const { getByText } = render(<Rating rate={5} />)
    expect(getByText('5 / 10'))
  })
})
