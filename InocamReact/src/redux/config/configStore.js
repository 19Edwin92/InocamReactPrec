// import { legacy_createStore as createStore } from "redux";
// import { combineReducers } from "redux";
// import todoSlice from '../modules/sliceTodo'
// import todoList from '../modules/reducerTodo'
// import velopertColor from '../modules/velopertColor'
// import velopertCounterReducer from '../modules/reducervelopertCounter'

// const rootReducers = combineReducers({
//   todoList,todoSlice, velopertColor, velopertCounterReducer
// })

// const store = createStore(rootReducers, composeWithDevTools())

// export default store

import { configureStore } from "@reduxjs/toolkit";
import todoList from '../modules/reducerTodo'
import todoSlice from '../modules/sliceTodo'
import todoThunk from '../modules/thunkTodo'
import velopertColor from '../modules/velopertColor'
import {getTodoApi} from '../../api/getTodoApi'
import {api} from '../../api/getAxiosTodoApi'
import velopertCounterReducer from '../modules/reducervelopertCounter'

import {setupListeners} from '@reduxjs/toolkit/query'

// @reduxjs/toolkit/query/react

const store = configureStore({
  reducer:{todoList, todoSlice, velopertColor,
    velopertCounterReducer, todoThunk, 
    [getTodoApi.reducerPath]: getTodoApi.reducer,
    [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getTodoApi.middleware, api.middleware),
  devTools: process.env.NODE_ENV === "development" && true
})

setupListeners(store.dispatch) // setupListeners 사용자의 행동이나 요소의 변화를 지켜보다가, 요청을 보낼 수 있도록, listener를 준비해놓기 위한 함수이며, 액션을 실행할 때인 store.dispatch로 설정했다. 

export default store

