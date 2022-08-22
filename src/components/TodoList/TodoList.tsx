import classes from './TodoList.module.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createTodo } from '../../features/todo/todoSlice'
import { ITodo } from '../../models/ITodo'
import TodoItem from './TodoItem/TodoItem'

function TodoList() {
  const {todos} = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()

  const nextTodoId = (todos: ITodo[]) => {
    return todos.reduce((maxId: number, todo) =>
      Math.max(maxId, todo.id), 1)
  }

  return (
    <ul className={classes.List}>
      {todos.map(todo =>
        <TodoItem
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