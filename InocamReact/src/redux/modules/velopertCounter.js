import { createSlice } from "@reduxjs/toolkit";

const velopertCounter = createSlice({
  name: 'velopertCounter',
  initialState : {
    color : "red",
    number :0
  },
  reducers: {
    changeColor: (state, action) => {
      return {...state, color:action.payload}
    }
  }
})

export default velopertCounter.reducer;
export const selectColor = (state) => state.velopertCounter.color;
export const selectNumber = (state) => state.velopertCounter.number;
export const {changeColor} = velopertCounter.actions;