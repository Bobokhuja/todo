import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../models/ITodo'

export interface ITodoSlice {
  todos: ITodo[]
}

const initialState: ITodoSlice = {
  todos: []
}

export const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {
    createTodo(state, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload)
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id === action.payload)
    },
    changeStatus(state, action: PayloadAction<{id: number, status: boolean}>) {
      state.todos = state.todos.map(todo => {
        const {id, status} = action.payload
        if (todo.id === id) {
          return {...todo, status}
        }
        return todo
      })
    },
  }
})

export const {createTodo, deleteTodo, changeStatus} = todoSlice.actions