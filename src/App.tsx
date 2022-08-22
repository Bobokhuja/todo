import React from 'react'
import classes from './App.module.scss'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'

function App() {
  return (
    <div className={classes.App}>
      <Header/>
      <TodoList/>
    </div>
  )
}

export default App
