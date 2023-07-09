import React, { useEffect } from "react";
import { __getTodosThunk } from "./redux/modules/todoSlice";
import { Form } from "./styled";
import Todos from "./components/Todos";
import { useThunk } from "./hooks/useThunk";

/* App.js ------------------------------------------------------------------- */

function App() {
  const { todoSlice, newtodos, dispatch, onSubmitHandler, onChangeInput } =
    useThunk();

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  return (
    <div>
      <p>JSON-Server-Thunk</p>
      <Form onSubmit={onSubmitHandler}>
        <input
          value={newtodos}
          type="text"
          onChange={onChangeInput}
          maxLength={10}
        />
      </Form>
      {todoSlice &&
        todoSlice.map(({ id, title }) => (
          <Todos key={id} todoid={id} title={title} />
        ))}
    </div>
  );
}

export default App;
