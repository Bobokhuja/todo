import classes from './Button.module.scss'
import { ReactNode } from 'react'

interface IButton {
  onClick?: () => void
  children: ReactNode
  className?: string
}

function Button({onClick, children, className}: IButton) {
  const cls = [
    classes.Button,
    className ? className : ''
  ]
  return (
    <button
      type="button"
      className={cls.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button