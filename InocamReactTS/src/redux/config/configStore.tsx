// import { combineReducers, legacy_createStore as createStore } from "redux";
// import todoReducer from '../modules/todoReducer'

// const rootReducers = combineReducers({todoReducer})
// const store = createStore(rootReducers)

// export default store

// Redux Toolkit 으로 업하기 
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../modules/todoReducer'

const store = configureStore({
  reducer : {
    todoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store