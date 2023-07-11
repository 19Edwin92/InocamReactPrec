import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name : "todoSlice",
  initialState: {
    todos : [],
    isLoading : false,
    isError:false,
    error : null
  },
  extraReducers: builder => {}
})

export default todoSlice.reducer