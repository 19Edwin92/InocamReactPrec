import React, { useEffect, useState } from 'react';
import {
  Button,
  InputContainer,
  PageWrapper,
  TodoCard,
  TodoContainer,
  TodoHeader,
  TodoListContainer,
} from './components/styles';
import nextId from 'react-id-generator';
import { useDispatch, useSelector } from 'react-redux';
import { __addToDo, __deleteTodo, __getToDo, selectTodos } from './redux/modules/todosSlice';

function App() {
  const id = nextId();
  const dispatch = useDispatch();
  const {todos, isLoading, isError, error} = useSelector(selectTodos);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(()=> {
    dispatch(__getToDo())
  },[dispatch])

  const onAddTodo = () => {
    // 시험 문제 1. 이곳에서 추가하기 기능을 구현해주세요.
    dispatch(__addToDo({id, title, body}))
    // 입력 값을 초기화하고 싶다면 사용하세요.
    setTitle('');
    setBody('');
  };

  const onDeleteTodo = (id) => () => {
    // 시험 문제 2. 이곳에서 삭제하기 기능을 구현해주세요.
    dispatch(__deleteTodo(id))
  };


  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeBody = (e) => setBody(e.target.value);

  if(isLoading) <div>Loading...</div>
  if(isError) <div>error...{error}</div>

  return (
    <PageWrapper>
      <TodoContainer>
        <TodoHeader>🐢 SLOW TODO LIST 🐢</TodoHeader>
        <InputContainer>
          <span>제목: </span>
          <input
            value={title}
            placeholder="할 일 제목"
            onChange={onChangeTitle}
          />
          <span>내용: </span>
          <input
            value={body}
            placeholder="할 일 내용"
            onChange={onChangeBody}
          />

          <Button onClick={onAddTodo}>+ 추가하기</Button>
        </InputContainer>
        <TodoListContainer>
          {todos.map((todo) => (
            <TodoCard key={todo.id}>
              <span>제목: {todo.title}</span>
              <span>할 일: {todo.body}</span>
              <Button onClick={onDeleteTodo(todo.id)}>삭제하기</Button>
            </TodoCard>
          ))}
        </TodoListContainer>
      </TodoContainer>
    </PageWrapper>
  );
}

export default App;
