import classes from './ModalCreate.module.scss'
import Modal from '../Modal'
import Input from '../../UI/Input/Input'
import { useState } from 'react'
import Textarea from '../../UI/Textarea/Textarea'
import Button from '../../UI/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { createTodo } from '../../../features/todo/todoSlice'
import { ITodo } from '../../../models/ITodo'

const nextTodoId = (todos: ITodo[]) => {
  console.log(todos)
  return todos.reduce((maxId: number, todo) =>
    Math.max(maxId, todo.id), 0) + 1
}

function ModalCreate({onHide, isShow}: { isShow: boolean, onHide: () => void }) {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const {todos} = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()

  const onCreateHandler = (event: any) => {
    event.preventDefault()

    if (name) {
      dispatch(createTodo({
        id: nextTodoId(todos),
        name,
        description,
        status: false
      }))
      onHide()
    }
  }

  return (
    <section className={classes.Modal}>
      <Modal isShow={isShow} onHide={onHide}>
        <h2 className={classes.Title}>Создать Todo</h2>

        <form>
          <Input
            type="text"
            value={name}
            placeholder="Название Todo"
            onChange={event => setName(event.target.value)}
            className={classes.Input}
            required={true}
          />
          <Textarea
            value={description}
            placeholder="Описание"
            onChange={event => setDescription(event.target.value)}
            className={classes.Textarea}
            required={false}
          />
          <Button
            type="submit"
            className={classes.Button}
            onClick={onCreateHandler}
          >Создать</Button>
        </form>
      </Modal>
    </section>
  )
}

export default ModalCreate