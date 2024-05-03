import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  figures: [],
  detail: null,
  searchTerm: "",
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
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setAmiibo, setDetail, setSearchTerm } = figureSlicer.actions;

export default figureSlicer.reducer;
