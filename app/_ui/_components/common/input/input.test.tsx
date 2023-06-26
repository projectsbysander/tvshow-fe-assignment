import React from 'react'
import { Input } from '.'
import { render, fireEvent, screen } from '@testing-library/react'

const testId = 'form-field-firstname'

describe('Test Input component', () => {
  it('should display the correct value after change', async () => {
    render(<Input data-testid={testId} />)

    const inputField = await screen.findByTestId(testId)
    fireEvent.change(inputField, { target: { value: 'Sander' } })

    expect(inputField).toHaveDisplayValue('Sander')
  })
})
