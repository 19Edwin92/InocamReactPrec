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
export const selectfindIdx = (state, id) => state.todoSlice.findIndex(todo => todo.id === id) 
export const selectfindTodo = (state, id) => state.todoSlice.find(todo => todo.id === id) // (2)
export const {add_todo, update_todo, delete_todo} = todoSlice.actions; // (3)