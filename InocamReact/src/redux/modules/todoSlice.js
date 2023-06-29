// toolkit 의 강력한 도구 reducer => slice
import { createSlice } from "@reduxjs/toolkit";

// 01 initalState
const initialState = [
  {
    id : 1,
    title : "리액트 연습하기",
    content : "리액트트 말이지 ㅋㅋㅋ 재밌어(1)",
    state : false
  },
  {
    id : 2,
    title : "리액트 연습하기",
    content : "리액트트 말이지 ㅋㅋㅋ 재밌어(2)",
    state : false
  },
  {
    id : 3,
    title : "리액트 연습하기",
    content : "리액트트 말이지 ㅋㅋㅋ 재밌어(3)",
    state : false
  }
]

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    add_todo: (state, action) => {
      return [...state, action.payload]
    },
    update_todo: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, state: !todo.state };
        }
        return todo;
      });
    },
    delete_todo: (state, action) => {
      return [...state.filter(list => list.id !== action.payload)]  
    }
  }
})

export default todoSlice.reducer; // (1)
export const selectTodo = (state) => state.todoSlice // (2)
export const {add_todo, update_todo, delete_todo} = todoSlice.actions; // (3)


/*
    createSlice : 프로그램 모듈
    - Action Value와 Action Creator를 이제 직접 생성하지 않고 
    - Slice API를 사용하여 하나로 만들어낸다. 

    export
    (1) configStore에 등록하기 위해서
    (2) state.todoSlice의 상태를 컴포넌트에서 사용하도록 하기 위해서
        store에 등록된 리듀서모듈에 대한 선택기 함수를 미리 생선함으로, 간결한 재사용을 위한 준비 
    (3) Slice의 액션들을 컴포넌트에서 사용하도록 하기 위해서 

*/