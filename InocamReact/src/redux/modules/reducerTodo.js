// 01 Action-key
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// 02 Action-Create : {type, payload} 동작을 제작
export const add_todoReducer = (payload) => {
  return {
    type : ADD_TODO,
    payload
  }
}

export const update_todoReducer = (payload) => {
  return {
    type : UPDATE_TODO,
    payload
  }
}

export const detele_todoReducer = (payload) => {
  return {
    type : DELETE_TODO,
    payload
  }
}

// 03 initalState
const initalState = [
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

// 04 Reducers
const todoList = (state=initalState, actions) => {
  switch (actions.type) {
    case ADD_TODO:
      return state = [...state, actions.payload]
    case (UPDATE_TODO):
      return state.map(todo => {
        if (todo.id === actions.payload) {
          return { ...todo, state: !todo.state };
        }
        return todo;
      });
    case (DELETE_TODO):
      return state = [...state.filter(list => list.id !== actions.payload)]  
      
    default:
      return state
  }
} 

export default todoList;
export const selectTodo = (state) => state.todoList // (2)

// case (UPDATE_TODO):
  // const findIndex = state.findIndex(item => item.id === actions.payload)
  // const newTodos = [...state]
  // console.log(newTodos[findIndex].state)
  // newTodos[findIndex].state = !newTodos[findIndex].state
  // console.log(newTodos[findIndex].state)
  // return state = [...newTodos]
//   });