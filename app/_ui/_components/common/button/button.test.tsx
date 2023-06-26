import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './button'

const defaultProps = {
  onClick: jest.fn(),
  children: 'Submit',
}

describe('Test Button component', () => {
  it('renders the component', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  it('renders the correct text', () => {
    const { getByRole } = render(<Button {...defaultProps}>Test button</Button>)
    expect(getByRole('button')).toHaveTextContent(/Test button/i)
  })
  it('calls correct function on click', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button {...defaultProps} onClick={onClick} />)
    fireEvent.click(getByText(defaultProps.children))
    expect(onClick).toHaveBeenCalled()
  })
})
