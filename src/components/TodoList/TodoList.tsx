import classes from './TodoList.module.scss'
import { useAppSelector } from '../../app/hooks'
import TodoItem from './TodoItem/TodoItem'
import { StatusFilter } from '../../features/filters/filterSlice'

function TodoList() {
  const {status, search} = useAppSelector(state => state.filters)
  const todos = useAppSelector(state => {
    switch (status) {
      case StatusFilter.All: {
        if (search === '') {
          return state.todos.todos
        } else {
          return state.todos.todos.filter(todo => todo.name.startsWith(search))
        }
      }
      case StatusFilter.Active:
        return state.todos.todos.filter(todo => !todo.status)
      case StatusFilter.Completed:
        return state.todos.todos.filter(todo => todo.status)
      default:
        return state.todos.todos
    }
  })

  return (
    <ul className={classes.List}>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          description={todo.description}
          status={todo.status}
        />
      )}
    </ul>
  )
}

export default TodoList