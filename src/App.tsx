import React, { useState } from 'react'
import classes from './App.module.scss'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'
import Button from './components/UI/Button/Button'
import Footer from './components/Footer/Footer'
import ModalCreate from './components/modals/ModalCreate/ModalCreate'

function App() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  return (
    <div className={classes.App}>
      <Header/>
      <Button
        className={classes.CreateButton}
        onClick={() => setIsShowModal(true)}
      >
        Создать задачу
      </Button>
      <TodoList/>
      <Footer/>
      <ModalCreate isShow={isShowModal} onHide={() => setIsShowModal(false)}/>
    </div>
  )
}

export default App
