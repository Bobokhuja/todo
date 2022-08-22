import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createTodo } from '../../features/todo/todoSlice'
import { ITodo } from '../../models/ITodo'

function TodoList() {
  const {todos} = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()

  const nextTodoId = (todos: ITodo[]) => {
    return todos.reduce((maxId: number, todo) =>
      Math.max(maxId, todo.id), 1)
  }

  return (
    <div>
    </div>
  )
}

export default TodoList