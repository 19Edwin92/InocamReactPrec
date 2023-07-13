import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __getToDo = createAsyncThunk(
  '__getToDo',
  async (_, thunkAPI) => {
    try {
      let res = await axios.get('https://jsonserveredwin.vercel.app/todos')
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
      await waitTwoSeconds()
      try {
        await axios.post('https://jsonserveredwin.vercel.app/todos', payload)
        return payload
      }
      catch (error) {
        return thunkAPI.rejectWithValue(error.message)
      }
  }  
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds()
    try {
      await axios.delete(`https://jsonserveredwin.vercel.app/todos/${payload}`)
      return payload
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

const initialState = {
  todos : [],
  isLoading: false,
  isError : false,
  error :null
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers : builder => {
    builder
      // __getToDo
      .addCase(__getToDo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getToDo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = [...action.payload]
      })
      .addCase(__getToDo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // __addToDo
      .addCase(__addToDo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__addToDo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = [...state.todos, action.payload]
      })
      .addCase(__addToDo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // __deleteToDo
      .addCase(__deleteTodo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = [...state.todos.filter(todo => todo.id !== action.payload)]
      })
      .addCase(__deleteTodo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
  }
});

export default todosSlice.reducer;
export const selectTodos = (state) => state.todos
