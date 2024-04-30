import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  series: [],
  //   detailFigure: null,
  token: "ini adalah series",
};

const seriesSlicer = createSlice({
  name: "series",
  initialState,
  reducers: {
    setAmiibo: (state, action) => {
      //   console.log("action", action);
      state.series = action.payload;
    },
    // setDetailFigure: (state, action) => {
    //   state.detailFigure = action.payload;
    // },
  },
});

export const { setAmiibo } = seriesSlicer.actions;

export default seriesSlicer.reducer;
