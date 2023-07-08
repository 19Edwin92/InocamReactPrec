import React from "react";
import * as Styled from "../../styled";
import { NavLink } from "react-router-dom";
import { useTodos } from '../../hooks/useTodos';
import { useSelector } from "react-redux";
import { selectTodo } from "../../redux/modules/thunkTodo";


function TodoLists({title, type}) {
  // const { todoSlice,onDeteleHandler,onDoneHandler} = useTodos();
  const {onDeteleHandler,onDoneHandler} = useTodos();
  const {isLoading, error, todos} = useSelector(selectTodo)

  if (isLoading || error) return <div>로딩중...</div>
  return (
    <>
      <Styled.TodoState>{title}</Styled.TodoState>
      <Styled.TodoBoxLayout>
        {/* {todoSlice */}
        {todos
          .filter((item) => item.state === type)
          .map((item) => (
            <Styled.TodoBox key={item.id}>
              <Styled.TodoTitle>{item.title}</Styled.TodoTitle>
              <NavLink to={`/detail/${item.id}`}>상세페이지</NavLink>
              <Styled.TodoContent>{item.content}</Styled.TodoContent>
              <Styled.TodobtnLayout>
                <Styled.TodoBtn
                  color="red"
                  onClick={onDeteleHandler(item.id)}
                >
                  삭제하기
                </Styled.TodoBtn>
                <Styled.TodoBtn
                  color="teal"
                  onClick={onDoneHandler(item.id)}>
                  {item.state ? "취소" : "완료"}
                </Styled.TodoBtn>
              </Styled.TodobtnLayout>
            </Styled.TodoBox>
          ))}
      </Styled.TodoBoxLayout>
    </>
  );
}

export default TodoLists;
