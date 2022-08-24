import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../models/ITodo'

export interface ITodoSlice {
  todos: ITodo[]
}

const initialState: ITodoSlice = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]')
}

export const fetchPokemonByName = createAsyncThunk<any, string>(
  'todos/createTodo',
  async () => {
    const localTodoString = localStorage.getItem('todos')
    if (localTodoString) {
      const copyTodos = JSON.parse(localTodoString)
      copyTodos.push()
      return JSON.parse(localTodoString)
    }

    localStorage.setItem('todos', '[]')
  }
)

export const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    todoAdded(state, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload)
    },
    todoDeleted(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    changeStatus(state, action: PayloadAction<number>) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, status: !todo.status}
        }
        return todo
      })
    },
  }
})

export const {todoDeleted, todoAdded, changeStatus} = todosSlice.actions