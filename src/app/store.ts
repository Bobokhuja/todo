import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { todosSlice } from '../features/todos/todosSlice'
import { filterSlice } from '../features/filters/filterSlice'
import { todoMiddleware } from '../features/todos/todosMiddleware'

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    filters: filterSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoMiddleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>
