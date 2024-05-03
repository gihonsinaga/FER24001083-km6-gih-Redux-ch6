import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  detail: null,
};

const cardSlicer = createSlice({
  name: "Card",
  initialState,
  reducers: {
    setAmiibo: (state, action) => {
      //   console.log("action", action);
      state.cards = action.payload;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setAmiibo, setDetail } = cardSlicer.actions;

export default cardSlicer.reducer;
