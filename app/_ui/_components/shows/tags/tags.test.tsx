import React from 'react'
import { render } from '@testing-library/react'
import Tags from './tags'

describe('Test Tags Component', () => {
  it('should display the correct genre', async () => {
    const { getByText } = render(
      <Tags
        premiered='2022-12-12'
        rating={{ average: 8 }}
        genres={['Action']}
      />
    )
    expect(getByText('Action'))
  })
})
