import classes from './Input.module.scss'
import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

interface IInput {
  type: HTMLInputTypeAttribute
  value: string
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  className: string
  required?: boolean
}

function Input({type, onChange, value, placeholder, className, required}: IInput) {
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
          required={required}
        />
        {required && <span>*</span>}
      </label>
    </div>
  )
}

export default Input