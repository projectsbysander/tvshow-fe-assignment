import React from 'react'
import { render } from '@testing-library/react'
import List from './list'

describe('Test List Component', () => {
  it('should display the correct genre', async () => {
    const { getByText } = render(<List genre='Action' list={[]} />)
    expect(getByText('Action'))
  })
})
