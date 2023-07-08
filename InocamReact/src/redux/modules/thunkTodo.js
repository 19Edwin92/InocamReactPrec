import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// 01 initalState
const initialState = {
  todos : [],
  isLoading : false,
  isError : false,
  isErrorMsg : "",
  error:null
} 

// 02 createAsyncThunk
const __getTodosThunk = createAsyncThunk(
  "getTodos",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('http://react.com/todos')
      // const res = await axios.get('http://localhost:3001/User')
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
      .addCase(__getTodosThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isErrorMsg = "";
      })
      .addCase(__getTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = action.payload;
        state.isErrorMsg = "";
      })
      .addCase(__getTodosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isErrorMsg = action.payload.response.data.message;
      });
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
export const selectTodoThunk = (state) => state.todoThunk // (2)
export {__getTodosThunk}
