import { createApi } from "@reduxjs/toolkit/query/react";
import { instance } from "./instance";

const axiosBaseQuery =
  () =>
  async ({ url, method, data, types }) => {
    try {
      const res = await instance({ method, url, data });
      if (types && types.type === "comment") {
        return { data: res.data.filter((todo) => todo.Todoid === types.id) };
      }
      return { data: res.data };
    } catch (error) {
      return console.log("에러", error);
    }
  };

const todortkquery = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ["TODOS", "COMMENT"],
  endpoints: (builder) => ({
    // CRUD
    getTodoRTK: builder.query({
      query: () => ({ url: "/todos", method: "get" }),
      providesTags: ["TODOS"],
    }),
    postTodoRTK: builder.mutation({
      query: (payload) => ({ url: "/todos", method: "post", data: payload }),
      invalidatesTags: ["TODOS"],
    }),
    deleteTodoRTK: builder.mutation({
      query: (payload) => ({ url: `/todos/${payload}`, method: "delete" }),
      invalidatesTags: ["TODOS"],
    }),
    updateTodoRTK: builder.mutation({
      query: (payload) => ({url: `/todos/${payload.id}`, method: "patch", data: { content: payload.content }}),
      invalidatesTags: ["TODOS"],
    }),

    // 댓글 CRUD 부분
    getCommentRTK: builder.query({
      query: (payload) => ({url: `/comments`,method: "get",types: { type: "comment", id: payload },}),
      providesTags: [`COMMENT`]
    }),

    postTodoCommentRTK: builder.mutation({
      query: (payload) => ({ url: `/comments`, method: "post", data: payload }),
      invalidatesTags: ['COMMENT']
    }),

    deleteTodoCommentRTK: builder.mutation({
      query: (payload) => ({ url: `/comments/${payload}`, method: "delete" }),
      invalidatesTags: ['COMMENT']
    }),
    updateTodoCommentRTK: builder.mutation({
      query: (payload) => ({ url: `/comments/${payload.id}`, method: "patch", data:{comment:payload.comment} }),
      invalidatesTags: ['COMMENT']
    }),

    // 상세페이지에서의 조회
    getFindTodoRTK: builder.query({
      query: (id) => ({ url: `/todos/${id}`, method: "get" }),
      providesTags: ["TODOS"],
    }),
  }),
});

export const {
  useGetTodoRTKQuery,
  usePostTodoRTKMutation,
  useDeleteTodoRTKMutation,
  useUpdateTodoRTKMutation,
  useGetFindTodoRTKQuery,
  useGetCommentRTKQuery,
  usePostTodoCommentRTKMutation,
  useDeleteTodoCommentRTKMutation,
  useUpdateTodoCommentRTKMutation,
} = todortkquery;
export default todortkquery;
