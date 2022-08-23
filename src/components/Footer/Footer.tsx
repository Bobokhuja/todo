import classes from './Footer.module.scss'
import Input from '../UI/Input/Input'
import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react'
import Radio from '../UI/Radio/Radio'
import radio from '../UI/Radio/Radio'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeStatus, searchTodo, statusType } from '../../features/filter/filterSlice'

interface IRadio {
  label: string,
  name: string,
  value: statusType
  checked: boolean
}

function Footer() {
  const [search, setSearch] = useState<string>('')
  const [radioList, setRadioList] = useState<IRadio[]>([
    {
      label: 'Все',
      name: 'filter',
      value: 'all',
      checked: true
    },
    {
      label: 'Выполненные',
      name: 'filter',
      value: 'completed',
      checked: false
    },
    {
      label: 'Не выполненные',
      name: 'filter',
      value: 'active',
      checked: false
    },
  ])
  const dispatch = useAppDispatch()
  const {status} = useAppSelector(state => state.filter)

  const onChangeRadioHandler = (value: string) => {
    setRadioList(radioList.map(radio => {
      return {
        ...radio,
        checked: radio.value === value
      }
    }))
  }

  const onKeyUpHandler: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.code === 'Enter') {
      dispatch(searchTodo(search))
    }
  }

  return (
    <footer className={classes.Footer}>
      <div className={classes.Wrap}>
        <Input
          type="text"
          value={search}
          placeholder="Поиск..."
          onChange={
            (event) => setSearch(event.target.value)
          }
          className={classes.Input}
          onKeyUp={onKeyUpHandler}
        />
        <form>
          {radioList.map(radio =>
            <Radio
              key={radio.value}
              label={radio.label}
              name={radio.name}
              value={radio.value}
              onChange={() => dispatch(changeStatus(radio.value))}
              checked={status === radio.value}
            />
          )}
        </form>
      </div>
    </footer>
  )
}

export default Footer