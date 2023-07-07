import React, { useEffect } from "react";
import Form from "../components/organism/Form";
import TodoLists from "../components/organism/TodoLists";
import { useDispatch, useSelector } from "react-redux";
import { __getTodosThunk, selectTodoThunk } from "../redux/modules/thunkTodo";


function Home() {
  const dispatch = useDispatch()
  const {isLoading, error, todos, isErrorMsg} = useSelector(selectTodoThunk)
  
  useEffect(() => {
    dispatch(__getTodosThunk())  
  }, []) 

  if (isLoading) return <div>로딩중</div>
  if (error) return <div>{error.message}</div>
  if (isErrorMsg) return <div>서버에서 받아올 정보가 없습니다. {isErrorMsg}</div>

  return (
    <div>
      <Form />
      {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
      <TodoLists title="Working..🍟" type={false} />
      <TodoLists title="Done..🥑" type={true} />
    </div>
  );
}

export default Home;
