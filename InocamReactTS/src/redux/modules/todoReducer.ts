import { TodoList } from "../../components/types";
import { TodoAction } from "../../components/types/redux";

const ADD_TODO = "ADD_TODO" as const;
const DELETE_TODO = "DELETE_TODO" as const;
const UPDATE_TODO = "UPDATE_TODO" as const;
// velopert 에 따르면 타입단언으로 액션키를 생성한다.

export const add_todoReducer = (payload:TodoList) => {
  return {
    type:ADD_TODO,
    payload
  }
}

export const delete_todoReducer = (payload:number) => {
  return {
    type:DELETE_TODO,
    payload
  }
}

export const update_todoReducer = (payload:number) => {
  return {
    type:UPDATE_TODO,
    payload
  }
}

const initialState:TodoList[] = [
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
    state : true
  }
]

const todoReducer = (state=initialState, action:TodoAction) => {
  switch (action.type) {
    case (ADD_TODO):
      return [...state, action.payload]
    case (DELETE_TODO):
      return state = [...state.filter((list) => list.id !== action.payload)]  
    case (UPDATE_TODO):
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, state: !todo.state};
        }
        return todo;
      });
    default:
      return state
  }
}  

export default todoReducer;
