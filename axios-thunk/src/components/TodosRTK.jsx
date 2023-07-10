import React, { useEffect, useRef } from "react";

import { TodosBox, UpdateRTKForm } from "../styled";
import { useThunk } from "../hooks/useThunk";

const TodosRTK = ({ todoid, title }) => {
  const inputRef = useRef(null);
  const {
    onDeleteRTKHandler,
    onUpdateHandler,
    onChangeupdate,
    onUpdateSubmitRTKHandler,
    updatetodos,
    update,
  } = useThunk(todoid, title);

  useEffect(() => {
    update && inputRef.current.focus();
  }, [update]);

  return (
    <TodosBox>
      <button onClick={onDeleteRTKHandler(todoid)}>삭제</button>
      <button onClick={onUpdateHandler}>수정</button>
      <p>{title}</p>
      {update && (
        <UpdateRTKForm
          onSubmit={onUpdateSubmitRTKHandler(todoid)}
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
        </UpdateRTKForm>
      )}
    </TodosBox>
  );
};

export default TodosRTK;
