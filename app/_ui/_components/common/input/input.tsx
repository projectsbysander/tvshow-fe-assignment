import * as React from 'react'
import { cn } from '@_lib'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        className={cn(
          'h-10 w-full border-b border-white bg-transparent text-base text-primary hover:shadow-lg focus:outline-none active:outline-none',
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
