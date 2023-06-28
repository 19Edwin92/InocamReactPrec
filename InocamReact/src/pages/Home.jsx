import React from "react";
import Form from "../components/Form";
import TodoLists from "../components/TodoLists";
import { useTodos } from "../hooks/useTodos";


function Home() {
  const {
    inputTitle,
    inputContent,
    todoListStore,
    onChangeInput,
    onSubmitHandler,
    onDeteleHandler,
    onDoneHandler,
  } = useTodos();

  return (
    <div>
      <Form
        titlevalue={inputTitle}
        contentvalue={inputContent}
        onSubmit={onSubmitHandler}
        onChangeInput={onChangeInput}
      />
      <TodoLists
        title="Working..🍟"
        type={false}
        todoList={todoListStore}
        onDeteleHandler={onDeteleHandler}
        onDoneHandler={onDoneHandler}
      />
      <TodoLists
        title="Done..🥑"
        type={true}
        todoList={todoListStore}
        onDeteleHandler={onDeteleHandler}
        onDoneHandler={onDoneHandler}
      />
    </div>
  );
}

export default Home;
