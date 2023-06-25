import React from 'react'
import { Input } from '.'
import { render, fireEvent, screen } from '@testing-library/react'

describe('Test Input component', () => {
  it('displays the correct value after change', async () => {
    render(<Input data-testid='form-field-firstname' />)

    const inputField = await screen.findByTestId(`form-field-firstname`)
    fireEvent.change(inputField, { target: { value: 'Sander' } })

    expect(inputField).toHaveDisplayValue('Sander')
  })
})
