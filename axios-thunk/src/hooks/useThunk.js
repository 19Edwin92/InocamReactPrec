import { useDispatch, useSelector } from "react-redux"
import { __deleteTodosThunk, __poseTodosThunk, __updateTodosThunk, selecttodoSlice } from "../redux/modules/todoSlice"
import { useState } from "react"
import { useDeleteTodoRTKMutation, useSetTodoRTKMutation, useUpdateTodoRTKMutation } from "../api/todoRTKquery"

export const useThunk = (todoid, title) => {
  const dispatch = useDispatch()
  const {todos:todoSlice} = useSelector(selecttodoSlice)


  const [newtodos, setNewTodos] = useState("") // Thunk input
  const [newtodos2, setNewTodos2] = useState("") // RTK input

  const onChangeInput = (e) => {
    const {name, value} = e.target
    name === "thunk" && setNewTodos(value)
    name === "RTK" && setNewTodos2(value)
  }

  // AXIOS POST 기능구현 : CRUD (2) POST
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    dispatch(__poseTodosThunk({id:Date.now(), title:newtodos})) // THUNK // AXIOS GET 기능구현 : CRUD (1) READ // (3) 서버와 동기화 
    setNewTodos("")
  } // 리렌더링 발생

   // AXIOS DELETE 기능구현 : CRUD (3) DELETE
  const onDeleteHandler = async () => {
    dispatch(__deleteTodosThunk(todoid)); // THUNK // AXIOS GET 기능구현 : CRUD (1) READ // (3) 서버와 동기화
  }; // 리렌더링 발생

  // AXIOS UPDATE 기능구현 : CRUD (4) UPDATE
  const [update, setUpdate] = useState(false); // 조건부 렌더링
  const onUpdateHandler = () => {
    setUpdate((pre) => !pre);
  };

  const [updatetodos, setUpdateTodos] = useState(title); // 수정할 title의 valuse

  const onChangeupdate = (e) => {
    setUpdateTodos(e.target.value)
  }

  const onUpdateSubmitHandler = () => async (e) => {
    e.preventDefault();
    dispatch(
      __updateTodosThunk({ id: todoid, content: { title: updatetodos } })
    );
    setUpdate((pre) => !pre);
  }; // 리렌더링 발생

    // RTK-QUERY_AXIOS POST 기능구현 : CRUD (2) POST
    const [setTodoRTK] = useSetTodoRTKMutation()
    const onSubmitRTKHandler = async (e) => {
      e.preventDefault()
      setTodoRTK({id:Date.now(), title:newtodos2})
    } // 리렌더링 발생


    // RTK-QUERY_AXIOS DELETE 기능구현 : CRUD (3) DELETE
  const [deleteTodoRTK] = useDeleteTodoRTKMutation()
   const onDeleteRTKHandler = (todoid) => async () => {
    deleteTodoRTK(todoid); // THUNK // AXIOS GET 기능구현 : CRUD (1) READ // (3) 서버와 동기화
  }; // 리렌더링 발생


  // AXIOS UPDATE 기능구현 : CRUD (4) UPDATE
  const [updateTodoRTK] = useUpdateTodoRTKMutation()
  const onUpdateSubmitRTKHandler = (todoid) => async (e) => {
    e.preventDefault();
    updateTodoRTK({todoid, data:{title:updatetodos}})
    setUpdate((pre) => !pre);
  }; // 리렌더링 발생

  

  return {todoSlice, newtodos,newtodos2, dispatch, onSubmitHandler, onChangeInput, onDeleteHandler,onUpdateHandler, onChangeupdate,onUpdateSubmitHandler,updatetodos ,update ,onSubmitRTKHandler, onDeleteRTKHandler, onUpdateSubmitRTKHandler}
}