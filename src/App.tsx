import React from 'react'
import classes from './App.module.scss'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'
import Button from './components/UI/Button/Button'

function App() {
  return (
    <div className={classes.App}>
      <Header/>
      <Button
        className={classes.CreateButton}
      >
        Создать задачу
      </Button>
      <TodoList/>
    </div>
  )
}

export default App
