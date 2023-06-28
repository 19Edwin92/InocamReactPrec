// import { legacy_createStore as createStore } from "redux";
// import { combineReducers } from "redux";
import todoList from '../modules/todoReducer'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer:{todoList}
})

// rootReducers 모듈(거대한 클래스 - 속성(state)+메서드(action.type))
// const rootReducers = combineReducers({
//   todoList,
// })

// const store = createStore(rootReducers)

export default store

