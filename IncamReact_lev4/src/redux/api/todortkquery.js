import { createApi } from '@reduxjs/toolkit/query/react'
import { instance } from './instance';

const axiosBaseQuery = () => async ({url, method, data}) => {
  try {
    const res = await instance({method,url,data})
    return {data:res.data}
  } catch (error) {
    return console.log("에러", error);
  }
}

const todortkquery = createApi({
  baseQuery : axiosBaseQuery(),
  tagTypes: ["TODOS"],
  endpoints : builder => ({
    getTodoRTK : builder.query({
      query: () => ({url:"/todos", method:"get"}),
      providesTags: ['TODOS'],
    }),
    postTodoRTK : builder.mutation({
      query: (payload) => ({url:"/todos", method:"post", data:payload}),
      invalidatesTags: ['TODOS']
    }),
    deleteTodoRTK : builder.mutation({
      query: (payload) => ({url:`/todos/${payload}`, method:"delete"}),
      invalidatesTags: ['TODOS']
    })
  })
})

export const {useGetTodoRTKQuery, usePostTodoRTKMutation, useDeleteTodoRTKMutation} = todortkquery
export default todortkquery