import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, screen, fireEvent } from '@testing-library/react'
import Card from './card'
import { createMockRouter } from '@_lib'

const testId = 'card'

describe('Testing Card Component', () => {
  let router = createMockRouter({})

  it('should redirect correctly', async () => {
    render(
      <RouterContext.Provider value={router}>
        <Card
          data-testid={testId}
          href='/123'
          image={{
            alt: '',
            medium: '/apple-icon.png',
            original: '/apple-icon.png',
          }}
        />
      </RouterContext.Provider>
    )

    fireEvent.click(screen.getByTestId(testId))
    expect(router.push).toHaveBeenCalledWith(
      '/123',
      expect.anything(),
      expect.anything()
    )
  })
})
