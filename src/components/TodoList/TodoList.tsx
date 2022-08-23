import classes from './TodoList.module.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createTodo } from '../../features/todo/todoSlice'
import { ITodo } from '../../models/ITodo'
import TodoItem from './TodoItem/TodoItem'
import { StatusFilter } from '../../features/filter/filterSlice'

function TodoList() {
  const {status, search} = useAppSelector(state => state.filter)
  const todos = useAppSelector(state => {
    switch (status) {
      case StatusFilter.All: {
        if (search === '') {
          return state.todo.todos
        } else {
          return state.todo.todos.filter(todo => todo.name.startsWith(search))
        }
      }
      case StatusFilter.Active:
        return state.todo.todos.filter(todo => !todo.status)
      case StatusFilter.Completed:
        return state.todo.todos.filter(todo => todo.status)
      default:
        return state.todo.todos
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