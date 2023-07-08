import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const mswApi = axios.create({
  baseURL:"http://react.com"
})

// const jsonApi = axios.create({
//   baseURL:"http://localhost:3001"
// })

// 01 initalState
const initialState = {
  todos : [],
  isLoading : false,
  isError : ""
} 

// 02 createAsyncThunk
const __getTodosThunk = createAsyncThunk(
  "getTodos",
  async (_, thunkAPI) => {
    try {
      const res = await mswApi.get('/todos')
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) { 
      return thunkAPI.rejectWithValue(error)
    }
  } 
)  

const __postTodosThunk = createAsyncThunk(
  "postTodos",
  async (payload, thunkAPI) => {
    try {
      const res = await mswApi.post('/todos', payload)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) { 
      return thunkAPI.rejectWithValue(error)
    }
  } 
) 

const __deleteTodosThunk = createAsyncThunk(
  "deleteTodos",
  async (payload, thunkAPI) => {
    try {
      const res = await mswApi.delete(`/todos/${payload}`)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) { 
      return thunkAPI.rejectWithValue(error)
    }
  } 
) 

const __updateTodosThunk = createAsyncThunk(
  "updateTodos",
  async (payload, thunkAPI) => {
    try {
      const res = await mswApi.patch(`/todos/${payload}`)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) { 
      return thunkAPI.rejectWithValue(error)
    }
  } 
) 


// 03 createSlice
const todoThunk = createSlice({
  name: 'todoThunk',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //__getTodosThunk
      .addCase(__getTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(__getTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";
        state.todos = action.payload;
      })
      .addCase(__getTodosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload.response.data.message;
      })

      //__postTodosThunk
      .addCase(__postTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(__postTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";
        state.todos = action.payload;
      })
      .addCase(__postTodosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload.response.data.message;
      })

      // __deleteTodosThunk
      .addCase(__deleteTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(__deleteTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";
        state.todos = action.payload;
      })
      .addCase(__deleteTodosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload.response.data.message;
      })

      // __updateTodosThunk
      .addCase(__updateTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(__updateTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";
        state.todos = action.payload;
      })
      .addCase(__updateTodosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload.response.data.message;
      })
  },
});

// // 기존의 객체 표기법이, 현재는  'builder callback' 표기법으로 변경되었다. (이유, 직관성)
// // 이를 통해 RTK 2.0에 대한 업그레이드에 대비할 수 있습니다.
// const todoThunk = createSlice({
//   name: 'todoThunk',
//   initialState,
//   reducers: {},
//   extraReducers:{
//     [__getTodosThunk.pending] : (state, action) => {
//       state.isLoading = true
//       state.isError = false
//       state.isErrorMsg = ""
//     },
//     [__getTodosThunk.fulfilled] : (state, action) => { 
//       state.isLoading = false
//       state.isError = false  
//       state.todos = action.payload
//       state.isErrorMsg = ""
//     }, 
//     [__getTodosThunk.rejected] : (state, action) => {
//       state.isLoading = false
//       state.isError = true
//       state.isErrorMsg = action.payload.response.data.message
//     },
//   } 
// }) 


export default todoThunk.reducer; // (1)
export const selectTodo = (state) => state.todoThunk // (2)
export const selectfindIdx = (id) => (state) => state.todoThunk.todos.findIndex(todo => todo.id === id) 
export const selectfindTodo = (id) => (state)=> state.todoThunk.todos.find(todo => todo.id === id) // (2)
export {__getTodosThunk, __postTodosThunk, __deleteTodosThunk, __updateTodosThunk}
