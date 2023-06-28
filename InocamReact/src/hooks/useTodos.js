import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_todoReducer, detele_todoReducer, update_todoReducer } from "../redux/modules/todoReducer"

export const useTodos = () => {
  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")

  const todoListStore = useSelector(state => state.todoList)
  const dispatch = useDispatch()

    // CREATE - INPUT
    const onChangeInput = (e, type) => {
      switch (type) {
        case "title":
          setInputTitle(e.target.value);
          break;
        case "content":
          setInputContent(e.target.value);
          break;
        default:
      }
    }

  // CREATE - SUBMIT
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const createTodo = {
      id:Date.now(),
      title:inputTitle,
      content:inputContent,
      state : false
    }

    if(!inputTitle || !inputContent) {
      if(!inputTitle && !inputContent) {
        return alert("제목과 내용 모두 기록해주세요.")
      } else if(!inputTitle) {
        return alert("제목을 기록해주세요.")
      } else if(!inputContent) {
        return alert("내용을 기록해주세요.")
      }
    }

    inputTitle && inputContent && 
    dispatch(add_todoReducer(createTodo))
    setInputTitle("")
    setInputContent("")
  }

  // DETELT
  const onDeteleHandler =  (id) => {
    dispatch(detele_todoReducer(id))
  }

  // UPDATE
  const onDoneHandler = (id) => {
    dispatch(update_todoReducer(id))
  } 
  return {inputTitle, inputContent, todoListStore, onChangeInput, onSubmitHandler, onDeteleHandler, onDoneHandler}   
}