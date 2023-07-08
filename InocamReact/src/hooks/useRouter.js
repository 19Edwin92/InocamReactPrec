import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
// import { selectTodo, selectfindIdx, selectfindTodo } from "../redux/modules/sliceTodo"
import { __getTodosThunk, selectTodo, selectfindIdx, selectfindTodo } from "../redux/modules/thunkTodo"
import { useLayoutEffect } from "react"

export const useRouter = () => {
  const id = +(useParams().id)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useLayoutEffect(() => {dispatch(__getTodosThunk())}, [dispatch]) 
  const {todos:todoLists} = useSelector(selectTodo)
  const findIndex = useSelector(selectfindIdx(id))
  const findTodo = useSelector(selectfindTodo(id))

  const goHome = () => {
    navigate('/')
  }
  const beforePage = () => {
    id === todoLists[0].id 
      ? alert("첫번째페이지") 
      : navigate(`/detail/${todoLists[findIndex-1].id}`)
  }

  const nextPage = () => {
    id === todoLists[todoLists.length-1].id 
      ? alert("마지막페이지") 
      : navigate(`/detail/${todoLists[findIndex+1].id}`)
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