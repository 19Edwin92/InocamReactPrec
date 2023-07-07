import { rest } from "msw";

const todos = [
  {
    id:1,
    title:'Adwin'
  }
]

export const handlers = [
  rest.get("http://react.com/todos", async(req, res, ctx) => {
    return res(
      ctx.json(todos)
      // ctx.status(403),
      // ctx.json({message : '넌 글러먹었어 ㅋㅋ 임마'}),
    )
    }),
  ]    