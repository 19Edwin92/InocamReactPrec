import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

const RTKquery = axios.create({
  baseURL:"http://react.com"
})

const axiosBaseQuery = () => async ({ url, method, data }) => {
  try {
    const res = await RTKquery({
      method: method,
      url:url,
      data:data
    })
    return { data: res.data };
  } catch (axiosError) {
    return  console.log(axiosError)
  }
};

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ['TODO'],
  endpoints: (builder) => ({
    getTodosAxios: builder.query({ 
      query: () => ({ url: '/todos', method: 'get' }), 
      providesTags: ['TODO']
    }),
    addNewTodo: builder.mutation({
      query: (payload) => ({
        url:'/todos',
        method:"post",
        data:payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }),
      invalidatesTags: ['TODO'],
    })
  }),
});

export const { useGetTodosAxiosQuery, useAddNewTodoMutation } = api;