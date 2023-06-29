export type TodoAction = 
  | ReturnType<typeof add_todoReducer>
  | ReturnType<typeof delete_todoReducer>
  | ReturnType<typeof update_todoReducer>

export type RootState = {
  todoReducer: TodoList[];
}

// export type ActionCreate = {
//   type:string,
//   payload:TodoList
// }

// export type ActionCreate = {
//   type: typeof ADD_TODO | typeof DELETE_TODO | typeof UPDATE_TODO;
//   payload: TodoList | number;
// };

// export type ActionCreate =
//   | { type: typeof ADD_TODO; payload: TodoList }
//   | { type: typeof DELETE_TODO; payload: number }
//   | { type: typeof UPDATE_TODO; payload: number };