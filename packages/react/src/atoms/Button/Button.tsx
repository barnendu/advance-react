
import React from 'react'
import '@de.x/scss/lib/Button.css'


export interface ButtonProps {
  variant?: string,
  children: React.ReactNode
}
const Button: React.FunctionComponent<ButtonProps> = (props) =>{
  const { variant = 'primary', children, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button