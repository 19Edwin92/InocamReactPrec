import React from "react";
import Form from "../components/organism/Form";
import TodoLists from "../components/organism/TodoLists";

function Home() {

  return (
    <div>
      <Form />
      <TodoLists title="Working..🍟" type={false} />
      <TodoLists title="Done..🥑" type={true} />
    </div>
  );
}

export default Home;
