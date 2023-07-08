import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'


const axiosBaseQuery = ({ baseUrl }) => async ({ url }) => {
  try {
    const res = await axios.get("http://react.com/todos")
    console.log(res.data);

    return { data: baseUrl+url };
  } catch (axiosError) {
    return  console.log(axiosError)
  }
};

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://react.com',
  }),
  endpoints: (build) => ({
    getTodosAxios: build.query({ query: () => ({ url: '/todos', method: 'get' }) }),
  }),
});

export const { useGetTodosAxiosQuery } = api;