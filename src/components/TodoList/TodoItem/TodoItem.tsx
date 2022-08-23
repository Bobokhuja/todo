import classes from './TodoItem.module.scss'
import { ITodo } from '../../../models/ITodo'
import { useState } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { changeStatus, deleteTodo } from '../../../features/todo/todoSlice'


function TodoItem({status, id, name, description}: ITodo) {
  const [isShow, setIsShow] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  return (
    <li className={classes.Item}>
      <header className={classes.Header}>
        <p className={`${classes.Name} ${status ? classes.Completed : ''}`}>{name}</p>

        <div className={classes.Right}>
          <button
            title="Удалить задачу"
            className={classes.Delete}
            onClick={() => dispatch(deleteTodo(id))}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1C15.1333 15.4 18.6667 19 18.6667 19" stroke="#777777" strokeWidth="2"/>
              <path d="M19 1C4.86667 15.4 1.33333 19 1.33333 19" stroke="#777777" strokeWidth="2"/>
            </svg>

          </button>
          <button
            title={status ? 'Снять галочку' : 'Выполнить'}
            className={classes.Complete}
            onClick={() => dispatch(changeStatus(id))}
          >
            {!status ? (
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5L6.12793 11L15.5 1" stroke="#149E6C" strokeWidth="2"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1C15.1333 15.4 18.6667 19 18.6667 19" stroke="#777777" strokeWidth="2"/>
                <path d="M19 1C4.86667 15.4 1.33333 19 1.33333 19" stroke="#777777" strokeWidth="2"/>
              </svg>
            )}
          </button>
          {description && (
            <button
              title="Описание задачи"
              className={`${classes.More} ${isShow ? classes.Active : ''}`}
              onClick={() => setIsShow(prevState => !prevState)}
            >
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9L17 1" stroke="#555555" strokeWidth="2"/>
              </svg>
            </button>
          )}
        </div>
      </header>
      {isShow && description && <div className={classes.Description}>{description}</div>}
    </li>
  )
}

export default TodoItem