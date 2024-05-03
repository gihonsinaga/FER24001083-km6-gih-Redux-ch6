import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  figures: [],
  detail: null,
};

const figureSlicer = createSlice({
  name: "Figure",
  initialState,
  reducers: {
    setAmiibo: (state, action) => {
      state.figures = action.payload;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setAmiibo, setDetail } = figureSlicer.actions;

export default figureSlicer.reducer;
