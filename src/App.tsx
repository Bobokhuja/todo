import React from 'react'
import classes from './App.module.scss'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'
import Button from './components/UI/Button/Button'
import Footer from './components/Footer/Footer'

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
      <Footer/>
    </div>
  )
}

export default App
