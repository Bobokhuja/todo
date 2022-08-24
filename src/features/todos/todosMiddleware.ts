import { ITodo } from '../../models/ITodo'

export const todoMiddleware = (storeAPI: any) => (next: any) => (action: any) => {

  switch (action.type) {
    case 'todos/todoAdded': {
      const localTodos = localStorage.getItem('todos')
      if (localTodos) {
        const copyTodos = JSON.parse(localTodos)
        copyTodos.push(action.payload)
        localStorage.setItem('todos', copyTodos)
      } else {
        localStorage.setItem('todos', JSON.stringify([action.payload]))
        console.log([action.payload])
      }
      return next(action)
    }
    case 'todos/todoDeleted': {
      const localTodos = localStorage.getItem('todos')
      const copyTodos: ITodo[] = JSON.parse(localTodos!)
      localStorage.setItem('todos', JSON.stringify(
        copyTodos.filter(todo => todo.id !== action.payload)
      ))
      return next(action)
    }
    case 'todos/changeStatus': {
      const localTodos = localStorage.getItem('todos')
      const copyTodos: ITodo[] = JSON.parse(localTodos!)
      localStorage.setItem('todos', JSON.stringify(
        copyTodos.map(todo => {
          if (todo.id === action.payload) return {...todo, status: !todo.status}
          return todo
        })
      ))
      return next(action)
    }
    case 'todos/todoRename': {
      const localTodos = localStorage.getItem('todos')
      const {id, name} = action.payload

      const copyTodos: ITodo[] = JSON.parse(localTodos!)
      localStorage.setItem('todos', JSON.stringify(
        copyTodos.map(todo => {
          if (todo.id === id) return {...todo, name}
          return todo
        })
      ))
      return next(action)
    }
    default:
      return next(action)
  }


}

// export const todosDeleteMiddleware = (storeAPI: any) => (next: any) => (action: PayloadAction<number>) => {
//
//   if (action.type === 'todos/todoDeleted') {
//
//     if (localTodos) {
//       const copyTodos: ITodo[] = JSON.parse('todos')
//       localStorage.setItem('todos', JSON.stringify(
//         copyTodos.filter(todo => todo.id !== action.payload)
//       ))
//     } else {
//       localStorage.setItem('todos', JSON.stringify([action.payload]))
//     }
//   }
//
//   return next(action)
// }