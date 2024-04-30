import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      //   console.log("action", action);
      state.series = action.payload;
    },
    // setDetailFigure: (state, action) => {
    //   state.detailFigure = action.payload;
    // },
  },
});

export const { login } = authSlicer.actions;

export default authSlicer.reducer;
