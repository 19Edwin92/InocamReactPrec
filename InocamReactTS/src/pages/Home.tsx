import React, { useState } from 'react'
import * as type from '../components/types'
import { useSelector } from 'react-redux'
import { RootState } from '../components/types/redux'
import { useDispatch } from 'react-redux'
import { add_todoReducer, delete_todoReducer, update_todoReducer } from '../redux/modules/todoReducer'


const Home:React.FC = () => {
  const todoStore= useSelector((state:RootState) => state.todoReducer)
  const dispatch = useDispatch()
  const [formInput, setFormInput] = useState<type.FormInput>({
    title: '',
    content: ''
  })

  const onChangeInput = (e: type.InputChangeEvent) => {
    const { name, value } = e.target
    setFormInput((prevFormInput) => ({ ...prevFormInput, [name]: value }))
  }

  const onSubmitHandler = (e: type.FormSubmitEvent) => {
    e.preventDefault()
    const newTodo: type.TodoList = {
      id: Date.now(),
      title: formInput.title,
      content: formInput.content,
      state: false
    }
    dispatch(add_todoReducer(newTodo))
    setFormInput({...formInput, title: '', content: '' })
  }

  const onDelteHandler = (id: number) => {
    dispatch(delete_todoReducer(id))
  }

  const onToggleHandler = (id: number) => {
    dispatch(update_todoReducer(id))
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="title">
          할일 :{' '}
          <input
            className="title"
            value={formInput.title}
            name="title"
            type="text"
            onChange={onChangeInput}
          />
        </label>
        <label htmlFor="content">
          내용 :{' '}
          <input
            className="content"
            value={formInput.content}
            name="content"
            type="text"
            onChange={onChangeInput}
          />
        </label>
        <input type="submit" value="제출하기" />
      </form>
      <div>
        {todoStore.filter(item => item.state === false).map(({ id, title, content }) => (
          <div key={id}>
            <p>
              할일 : {title} : {content}
            </p>
            <button onClick={() => onDelteHandler(id)}>삭제하기</button>
            <button onClick={() => onToggleHandler(id)}>완료하기</button>
          </div>
        ))}
        <hr/>
        {todoStore.filter(item => item.state === true).map(({ id, title, content }) => (
          <div key={id}>
            <p>
              완료 : {title} : {content}
            </p>
            <button onClick={() => onDelteHandler(id)}>삭제하기</button>
            <button onClick={() => onToggleHandler(id)}>취소하기</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home