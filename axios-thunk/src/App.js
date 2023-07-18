import React, { useEffect } from "react";
import { __getTodosThunk } from "./redux/modules/todoSlice";
import { Form, RTKForm } from "./styled";
import Todos from "./components/Todos";
import { useThunk } from "./hooks/useThunk";
import { useGetTodoRTKQuery } from "./api/todoRTKquery";
import TodosRTK from "./components/TodosRTK";

/* App.js ------------------------------------------------------------------- */

function App() {
  const { todoSlice, newtodos, newtodos2,dispatch, onSubmitHandler, onSubmitRTKHandler,onChangeInput } =
    useThunk();

  const query = useGetTodoRTKQuery()
  

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>JSON-Server 서버통신 연습하기</h1>
      <Form onSubmit={onSubmitHandler}>
        <input
          name="thunk"
          value={newtodos}
          type="text"
          onChange={onChangeInput}
          maxLength={10}
        />
      </Form>
      <RTKForm onSubmit={onSubmitRTKHandler}>
        <input
          value={newtodos2}
          name="RTK"
          type="text"
          onChange={onChangeInput}
          maxLength={10}
        />
      </RTKForm>
      <h2>createAsyncThunk</h2>
      {todoSlice &&
        todoSlice.map(({ id, title }) => (
          <Todos key={id} todoid={id} title={title} />
        ))}
      <h2>RTKquery</h2>
      {/* {query.isFetching && "데이터 패칭 중..."}
      {query.data &&
        query.data.map(({ id, title }) => (
          <TodosRTK key={id} todoid={id} title={title} />
        ))}   */}


    </div>
  );
}

export default App;
