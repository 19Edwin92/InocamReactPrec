import { configureStore } from '@reduxjs/toolkit'
import todortkquery from '../api/todortkquery'
import { setupListeners } from "@reduxjs/toolkit/dist/query";


const store = configureStore({
  reducer: {
    [todortkquery.reducerPath]:todortkquery.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todortkquery.middleware)
})

export default store
setupListeners(store.dispatch)