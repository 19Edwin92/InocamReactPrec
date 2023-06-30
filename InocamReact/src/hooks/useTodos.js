import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { add_todoReducer, detele_todoReducer, update_todoReducer } from "../redux/modules/todoReducer"
import { add_todo, delete_todo, selectTodo, update_todo } from "../redux/modules/sliceTodo"

export const useTodos = () => {
  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")

  // Redux 
  const todoListStore = useSelector(state => state.todoList)
  const dispatch = useDispatch()

  // Redux toolkit Slicex
  const todoSlice = useSelector(selectTodo)

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
    // dispatch(add_todoReducer(createTodo)) // 기존 Redux
    dispatch(add_todo(createTodo)) // Redux - toolkit
    setInputTitle("")
    setInputContent("")
  }

  // DETELT
  const onDeteleHandler =  (id) => {
    // dispatch(detele_todoReducer(id)) // 기존 Redux
    dispatch(delete_todo(id)) // Redux - toolkit
  }

  // UPDATE
  const onDoneHandler = (id) => {
    // dispatch(update_todoReducer(id)) //기존 Redux
    dispatch(update_todo(id)) // Redux - toolkit
  } 

  return {inputTitle, inputContent, todoListStore, todoSlice, onChangeInput, onSubmitHandler, onDeteleHandler, onDoneHandler}   
}