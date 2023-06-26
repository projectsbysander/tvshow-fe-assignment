import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { redirect } from 'next/navigation'
import Search from './search'

const testId = 'search'

jest.mock('next/navigation', () => {
  return {
    redirect: jest.fn(),
  }
})

it('should navigate with search params to apply show filter', () => {
  const { getByRole } = render(<Search data-testid={testId} />)
  const inputField = screen.getByTestId(testId)
  fireEvent.change(inputField, { target: { value: 'Sander' } })

  fireEvent.click(getByRole('button'))
  expect(redirect).toHaveBeenCalledTimes(1)
  expect(redirect).toHaveBeenCalledWith('/shows?search=Sander')
})
