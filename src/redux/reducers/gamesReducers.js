import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  //   detailFigure: null,
  token: "ini adalah games",
};

const gamesSlicer = createSlice({
  name: "games",
  initialState,
  reducers: {
    setAmiibo: (state, action) => {
      //   console.log("action", action);
      state.games = action.payload;
    },
    // setDetailFigure: (state, action) => {
    //   state.detailFigure = action.payload;
    // },
  },
});

export const { setAmiibo } = gamesSlicer.actions;

export default gamesSlicer.reducer;
