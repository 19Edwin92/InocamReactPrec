// import { legacy_createStore as createStore } from "redux";
// import { combineReducers } from "redux";

// const rootReducers = combineReducers({
//   todoList,
// })

// const store = createStore(rootReducers)

import todoList from '../modules/todoReducer'
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../modules/todoSlice'

const store = configureStore({
  reducer:{todoList, todoSlice}
})

export default store

