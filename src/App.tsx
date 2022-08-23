import React, { useState } from 'react'
import classes from './App.module.scss'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'
import Button from './components/UI/Button/Button'
import Footer from './components/Footer/Footer'
import ModalCreate from './components/modals/ModalCreate/ModalCreate'
import { CSSTransition } from 'react-transition-group'

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
      <CSSTransition
        in={isShowModal}
        timeout={500}
        unmountOnExit
        mountOnEnter
        classNames={{
          enterActive: classes.EnterActive,
          exitActive: classes.ExitActive
        }}
      >
        <ModalCreate isShow={isShowModal} onHide={() => setIsShowModal(false)} />
      </CSSTransition>
    </div>
  )
}

export default App
