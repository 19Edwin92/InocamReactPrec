import React, { useLayoutEffect } from "react";
import Form from "../components/organism/Form";
import TodoLists from "../components/organism/TodoLists";
import { useDispatch, useSelector } from "react-redux";
import { __getTodosThunk, selectTodo } from "../redux/modules/thunkTodo";
import { useGetTodoQuery } from "../api/getTodoApi";
// import { useGetTodosAxiosQuery } from "../api/getAxiosTodoApi";


function Home() {
  const dispatch = useDispatch()
  useLayoutEffect(() => {dispatch(__getTodosThunk())}, [dispatch]) 
  // const {isLoading:thunkLoading, todos, isError:thunkisError} = useSelector(selectTodo)
  const {isLoading:thunkLoading, isError:thunkisError} = useSelector(selectTodo)
  const {data, isLoading, isError} = useGetTodoQuery()
  // const {data:data2} = useGetTodosAxiosQuery()
  if (isLoading || thunkLoading) return <div>로딩중</div>
  if (!!thunkisError || isError) return <div>{thunkisError || "에러발생"}</div>

  return (
    <div>
      <Form />
      {data.map(todo => <div key={todo.id}>RTK :  {todo.title}</div>)}
      {/* {todos.map(todo => <div key={todo.id}>THUNK : {todo.title}</div>)} */}
      <TodoLists title="Working..🍟" type={false} />
      <TodoLists title="Done..🥑" type={true} />
    </div>
  );
}

export default Home;
