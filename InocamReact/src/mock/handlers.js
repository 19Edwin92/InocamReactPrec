import { rest } from "msw";

const todos = [
  {
    id : 1,
    title : "리액트 연습하기(1)",
    content : "리액트트 말이지 ㅋㅋㅋ 재밌어(1)",
    state : false
  },
  {
    id : 2,
    title : "리액트 연습하기(2)",
    content : "리액트트 말이지 ㅋㅋㅋ 재밌어(2)",
    state : false
  },
  {
    id : 3,
    title : "리액트 연습하기(3)",
    content : "리액트트 말이지 ㅋㅋㅋ 재밌어(3)",
    state : false
  }
]

export const handlers = [
  rest.get("http://react.com/todos", async(req, res, ctx) => {
    return res(
      ctx.json(todos)
      // ctx.status(404),
      // ctx.json({message : '넌 글러먹었어 ㅋㅋ 임마'}),
    )
    }),

    rest.post("http://react.com/todos", async(req, res, ctx) => {
      todos.push(req.body);
    return res(
      ctx.json(todos)
    )
    }),

    rest.delete("http://react.com/todos/:id", async(req, res, ctx) => {
      const { id } = req.params;
      todos.splice(todos.findIndex(todo=>todo.id === +id),1)
    return res(
      ctx.json(todos)
    )
    }),

    rest.patch("http://react.com/todos/:id", async(req, res, ctx) => {
      const { id } = req.params;
      const idx = todos.findIndex(todo=>todo.id === +id)
      todos.splice(todos.findIndex(todo=>todo.id === +id),1, {...todos[idx], state: !todos[idx].state})
    return res(
      ctx.json(todos)
    )
    }),
  ]    