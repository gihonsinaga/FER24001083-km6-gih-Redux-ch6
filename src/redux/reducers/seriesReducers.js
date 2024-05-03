import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  series: [],
};

const seriesSlicer = createSlice({
  name: "series",
  initialState,
  reducers: {
    setAmiibo: (state, action) => {
      //   console.log("action", action);
      state.series = action.payload;
    },
  },
});

export const { setAmiibo } = seriesSlicer.actions;

export default seriesSlicer.reducer;
