import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const getTodoApi = createApi({
  reducerPath: "getTodoApi",
  tagTypes: ["Todos"],
  baseQuery:fetchBaseQuery({
    baseUrl:"http://react.com"
  }),
  endpoints:(builder) => ({
    getTodo : builder.query({
      query: (todoId) => `todos`,
    })
  })
})

export const {
  useGetTodoQuery
} = getTodoApi


// initialState // 서버에서 받아올 거니까. 
// React-query 와 유사해요. 