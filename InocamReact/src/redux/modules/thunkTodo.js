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
  extraReducers:{
    [__getTodosThunk.pending] : (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isErrorMsg = ""
    },
    [__getTodosThunk.fulfilled] : (state, action) => { 
      state.isLoading = false
      state.isError = false  
      state.todos = action.payload
      state.isErrorMsg = ""
    }, 
    [__getTodosThunk.rejected] : (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isErrorMsg = action.payload.response.data.message
    }
  } 
}) 

export default todoThunk.reducer; // (1)
export const selectTodoThunk = (state) => state.todoThunk // (2)
export {__getTodosThunk}
