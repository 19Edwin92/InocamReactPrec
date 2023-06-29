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
import todoList from '../modules/todoReducer'
import todoSlice from '../modules/todoSlice'
import velopertCounter from '../modules/velopertCounter'

const store = configureStore({
  reducer:{todoList, todoSlice, velopertCounter}
})

export default store

