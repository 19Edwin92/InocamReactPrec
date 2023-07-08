import React, { useEffect } from "react";
import Form from "../components/organism/Form";
import TodoLists from "../components/organism/TodoLists";
import { useDispatch, useSelector } from "react-redux";
import { __getTodosThunk, selectTodoThunk } from "../redux/modules/thunkTodo";
import { useGetTodoQuery } from "../api/getTodoApi";
import { useGetTodosAxiosQuery } from "../api/getAxiosTodoApi";


function Home() {
  const dispatch = useDispatch()
  const {isLoading:thunkLoading, error, todos, isErrorMsg} = useSelector(selectTodoThunk)
  
  useEffect(() => {
    dispatch(__getTodosThunk())  
  }, [dispatch]) 

  const {data, isLoading, isError} = useGetTodoQuery()
  const {data:data2} = useGetTodosAxiosQuery()
  console.log(data2);

  if (isLoading || thunkLoading) return <div>로딩중</div>
  if (error) return <div>{error.message}</div>
  if (isErrorMsg) return <div>서버에서 받아올 정보가 없습니다. {isErrorMsg}</div>
  if (isError) return <div>"에러발생"</div>

  return (
    <div>
      <Form />
      {data.map(todo => <div key={todo.id}>RTK :  {todo.title}</div>)}
      {todos.map(todo => <div key={todo.id}>THUNK : {todo.title}</div>)}
      <TodoLists title="Working..🍟" type={false} />
      <TodoLists title="Done..🥑" type={true} />
    </div>
  );
}

export default Home;
