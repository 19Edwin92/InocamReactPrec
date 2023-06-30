// import { legacy_createStore as createStore } from "redux";
// import { combineReducers } from "redux";
// import todoSlice from '../modules/todoSlice'
// import todoList from '../modules/todoReducer'

// const rootReducers = combineReducers({
//   todoList,todoSlice
// })

// const store = createStore(rootReducers)

// export default store

import { configureStore } from "@reduxjs/toolkit";
import todoList from '../modules/reducerTodo'
import todoSlice from '../modules/sliceTodo'
import velopertColor from '../modules/velopertColor'
import velopertCounterReducer from '../modules/reducervelopertCounter'


const store = configureStore({
  reducer:{todoList, todoSlice, velopertColor, velopertCounterReducer},
  // devTools: process.env.NODE_ENV === "development" && true
  devTools:true
})

export default store

