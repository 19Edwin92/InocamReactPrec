import React, { useEffect, useRef } from "react";

import { TodosBox, UpdateForm } from "../styled";
import { useThunk } from "../hooks/useThunk";

const Todos = ({ todoid, title }) => {
  const inputRef = useRef(null);
  const {
    onDeleteHandler,
    onUpdateHandler,
    onChangeupdate,
    onUpdateSubmitHandler,
    updatetodos,
    update,
  } = useThunk(todoid, title);

  useEffect(() => {
    update && inputRef.current.focus();
  }, [update]);

  return (
    <TodosBox>
      <button onClick={onDeleteHandler}>삭제</button>
      <button onClick={onUpdateHandler}>수정</button>
      <p>{title}</p>
      {update && (
        <UpdateForm
          onSubmit={onUpdateSubmitHandler(todoid)}
          $state="update"
          $position={update}
        >
          <input
            ref={inputRef}
            value={updatetodos}
            type="text"
            onChange={onChangeupdate}
            maxLength={10}
          />
        </UpdateForm>
      )}
    </TodosBox>
  );
};

export default Todos;
