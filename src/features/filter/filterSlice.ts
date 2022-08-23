import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../models/ITodo'

export type statusType = 'all' | 'active' | 'completed'

export const StatusFilter = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
}

export interface IFilterSlice {
  status: string
  search: string
}

const initialState: IFilterSlice = {
  status: StatusFilter.All,
  search: ''
}

export const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    changeStatus(state, action: PayloadAction<statusType>) {
      state.status = action.payload
    },
    searchTodo(state, action: PayloadAction<string>) {
      state.search = action.payload
    }
  }
})

export const {searchTodo, changeStatus} = filterSlice.actions