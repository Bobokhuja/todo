import classes from './Footer.module.scss'
import Input from '../UI/Input/Input'
import { KeyboardEventHandler, useState } from 'react'
import Radio from '../UI/Radio/Radio'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeStatus, searchTodo, statusType } from '../../features/filter/filterSlice'

interface IRadio {
  label: string,
  name: string,
  value: statusType
  checked: boolean
}

function Footer() {
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
  const {status, search} = useAppSelector(state => state.filter)

  return (
    <footer className={classes.Footer}>
      <div className={classes.Wrap}>
        <Input
          type="text"
          value={search}
          placeholder="Поиск..."
          onChange={
            (event) => dispatch(searchTodo(event.target.value))
          }
          className={classes.Input}
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