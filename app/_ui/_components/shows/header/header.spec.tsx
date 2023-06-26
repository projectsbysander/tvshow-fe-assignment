import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, fireEvent } from '@testing-library/react'
import Header from './header'
import { createMockRouter } from '@_lib'

const testId = 'header'

describe('Testing header component', () => {
  let router = createMockRouter({})

  it('should navigate to / when clicking icon', async () => {
    const { getByRole } = render(
      <RouterContext.Provider value={router}>
        <Header data-testid={testId} />
      </RouterContext.Provider>
    )

    fireEvent.click(getByRole('link'))
    expect(router.push).toHaveBeenCalledWith(
      '/',
      expect.anything(),
      expect.anything()
    )
  })
})
