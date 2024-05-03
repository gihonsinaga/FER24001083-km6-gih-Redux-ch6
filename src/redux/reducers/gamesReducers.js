import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

const gamesSlicer = createSlice({
  name: "games",
  initialState,
  reducers: {
    setAmiibo: (state, action) => {
      //   console.log("action", action);
      state.games = action.payload;
    },
  },
});

export const { setAmiibo } = gamesSlicer.actions;

export default gamesSlicer.reducer;
