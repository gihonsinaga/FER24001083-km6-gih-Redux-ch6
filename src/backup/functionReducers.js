import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const functionSlicer = createSlice({
  name: "function",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = functionSlicer.actions;

export default functionSlicer.reducer;
