import { instance } from "./axiosInstance";
import { createApi } from '@reduxjs/toolkit/query/react'

const axiosBaseQuery = () => async ({url, method, data}) => {
  try {
    const res = await instance({method,url,data})
    return {data: res.data}
  } catch (error) {
    return console.log("에러", error);
  }
}

export const todoRTKquery = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ['TODO'],
  endpoints : builder => ({
    getTodoRTK : builder.query({
      query: () => ({url:"/todos", method:"get"}),
      providesTags: ['TODO'],
    }),
    setTodoRTK : builder.mutation({
      query: (payload) => ({url:"/todos", method:"post", data:payload}),
      invalidatesTags: ['TODO'],
    }),
    deleteTodoRTK : builder.mutation({
      query: (payload) => ({url:`/todos/${payload}`, method:"delete"}),
      invalidatesTags: ['TODO'],
    }),
    updateTodoRTK : builder.mutation({
      query: ({todoid, data}) => ({url:`/todos/${todoid}`, method:"patch", data}),
      invalidatesTags: ['TODO'],
    }),
  })
})

export const {useGetTodoRTKQuery, useSetTodoRTKMutation, useDeleteTodoRTKMutation, useUpdateTodoRTKMutation} = todoRTKquery;



/*
  RTK Query 
    1) Redux 태생이지만, Redux와 무관하게 동작할 수도 있습니다. 
    2) [생활코딩  RTK Query](https://www.youtube.com/watch?v=pnpO3o8mLBU)
    3) use...query 자동실행
        - 객체를 리턴 
        보통 isFetching & isLoading으로 확인합니다. 
    4) use...Mutation 함수호출시 서버로 데이터를 전송한다.
        - 배열을 리턴
        isFetching이 따로 없습니다. isLoading이 있습니다. 
    5) 서버 캐시의 패칭과 캐싱

  사용하기 : Without Redux 
    1) yarn add @reduxjs/toolkit
    2) <ApiProvider>
        - index.js
          <ApiProvider api={todoRTKquery}>
            <App>
          </ApiProvider>

  사용하기 : Redux, configStore
*/