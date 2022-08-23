import classes from './TodoList.module.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createTodo } from '../../features/todo/todoSlice'
import { ITodo } from '../../models/ITodo'
import TodoItem from './TodoItem/TodoItem'

function TodoList() {
  const {todos} = useAppSelector(state => state.todo)

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