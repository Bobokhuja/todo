import classes from './Input.module.scss'
import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

interface IInput {
  type: HTMLInputTypeAttribute
  value: string
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  className: string
}

function Input({type, onChange, value, placeholder, className}: IInput) {
  const cls = [
    classes.Input,
    className || ''
  ]
  return (
    <div className={cls.join(' ')}>
      <label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    </div>
  )
}

export default Input