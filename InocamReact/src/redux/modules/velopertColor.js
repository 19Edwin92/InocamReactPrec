import { createSlice } from "@reduxjs/toolkit";

const velopertColor = createSlice({
  name: 'velopertColor',
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

export default velopertColor.reducer;
export const selectColor = (state) => state.velopertColor.color;
export const selectNumber = (state) => state.velopertColor.number;
export const {changeColor} = velopertColor.actions;