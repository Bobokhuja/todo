import classes from './Footer.module.scss'
import Input from '../UI/Input/Input'
import { ChangeEventHandler, useState } from 'react'
import Radio, { IRadio } from '../UI/Radio/Radio'
import radio from '../UI/Radio/Radio'

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
      value: 'uncompleted',
      checked: false
    },
  ])

  const onChangeRadioHandler = (value: string) => {
    setRadioList(radioList.map(radio => {
      return {
        ...radio,
        checked: radio.value === value
      }
    }))
  }

  return (
    <footer className={classes.Footer}>
      <div className={classes.Wrap}>
        <Input
          type="text"
          value={search}
          placeholder="Поиск..."
          onChange={(event) => setSearch(event.target.value)}
          className={classes.Input}
        />
        <form>
          {radioList.map(radio =>
            <Radio
              key={radio.value}
              label={radio.label}
              name={radio.name}
              value={radio.value}
              onChange={() => onChangeRadioHandler(radio.value)}
              checked={radio.checked}
            />
          )}

        </form>
      </div>
    </footer>
  )
}

export default Footer