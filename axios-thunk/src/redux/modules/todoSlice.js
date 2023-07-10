import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/axiosInstance";

// 비동기 ActionCreate는 만들어줘야 합니다. // ActionCreate 1개당 extraReducers 3개 만들어줘야 해요(pending, fulfilled, rejected) 프로미스죠 // 100% 성공보정이 되지 않기 때문에
// 비동기 통신 GET - 서버에서 데이터 읽어오기
const __getTodosThunk = createAsyncThunk(
  "getTodosThunk",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get("/todos");
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 비동기 통신 POST - 서버에서 데이터 추가하기
const __poseTodosThunk = createAsyncThunk(
  "postTodosThunk",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post("/todos", payload); // (1) 서버 업데이트
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 비동기 통신 DELET - 서버에서 데이터 삭제하기 
const __deleteTodosThunk = createAsyncThunk(
  "deleteTodosThunk",
  async (payload, thunkAPI) => {
    try {
      await instance.delete(`/todos/${payload}`); // (1) 서버 업데이트
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 비동기 통신 UPDATE - 서버에서 데이터 변경하기 
const __updateTodosThunk = createAsyncThunk(
  "updateTodosThunk",
  async (payload, thunkAPI) => {
    try {
      await instance.patch(`/todos/${payload.id}`, payload.content); // (1) 서버 업데이트
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
    isLoading: false,
    isError: false,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      // __getTodosThunk
      .addCase(__getTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = [...action.payload];
      })
      .addCase(__getTodosThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = false;
      })

      //__poseTodosThunk
      .addCase(__poseTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__poseTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = [...state.todos, action.payload]; // (2) 리렌더링 발생시키기
      })
      .addCase(__poseTodosThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = false;
      })

      // __deleteTodosThunk
      .addCase(__deleteTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__deleteTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = [
          ...state.todos.filter((todos) => todos.id !== action.payload),
        ]; // (2) 리렌더링 발생시키기
      })
      .addCase(__deleteTodosThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = false;
      })

      // __updateTodosThunk
      .addCase(__updateTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__updateTodosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.todos = [
          ...state.todos.map((todos) =>
            todos.id === action.payload.id
              ? { ...todos, title: action.payload.content.title }
              : todos
          ),
        ]; // (2) 리렌더링 발생시키기
      })
      .addCase(__updateTodosThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = false;
      });
  },
});

export default todoSlice.reducer;
export const selecttodoSlice = (state) => state.todoSlice;
export {
  __getTodosThunk,
  __poseTodosThunk,
  __deleteTodosThunk,
  __updateTodosThunk,
};
