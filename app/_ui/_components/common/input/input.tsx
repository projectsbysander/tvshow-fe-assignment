import * as React from 'react'
import { cn } from '@_lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        className={cn(
          'h-[3.75rem] rounded-full border-none bg-transparent px-5 text-base text-primary hover:shadow-lg focus:outline-none active:outline-none',
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
