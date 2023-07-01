import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { selectTodo } from "../redux/modules/sliceTodo"

export const useRouter = () => {
  const id = +(useParams().id)
  const navigate = useNavigate()

  // const todoLists = useSelector(state => state.todoList)
  const todoLists = useSelector(selectTodo)
  const findIndex = todoLists.findIndex(item => item.id === id)
  const findTodo = todoLists.find(item => item.id === id)

  const goHome = () => {
    navigate('/')
  }
  const beforePage = () => {
    id === todoLists[0].id 
      ? alert("첫번째페이지") 
      : navigate(`/${todoLists[findIndex-1].id}`)
  }

  const nextPage = () => {
    id === todoLists[todoLists.length-1].id 
      ? alert("마지막페이지") 
      : navigate(`/${todoLists[findIndex+1].id}`)
  }

  const ButtonList = [
    {
      onClick:goHome,
      children:"홈으로"
    },
    {
      onClick:beforePage,
      children:"이전글"
    },
    {
      onClick:nextPage,
      children:"다음글"
    },

]
  
  return {todoLists, findTodo, navigate, ButtonList}
}