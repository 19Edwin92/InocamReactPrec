import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../modules/todoSlice'
import { todoRTKquery } from "../../api/todoRTKquery";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer:{
    todoSlice,
    [todoRTKquery.reducerPath] : todoRTKquery.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoRTKquery.middleware)
})

setupListeners(store.dispatch)