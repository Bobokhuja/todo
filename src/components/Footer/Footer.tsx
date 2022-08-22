import classes from './Footer.module.scss'
import Input from '../UI/Input/Input'
import { ChangeEventHandler, useState } from 'react'

function Footer() {
  const [search, setSearch] = useState<string>('')

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
      </div>
    </footer>
  )
}

export default Footer