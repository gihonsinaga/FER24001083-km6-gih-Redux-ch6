import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoggedIn: null,
  user: null,
  showPassword: false,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("action login", action);
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setshowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser, setshowPassword } =
  authSlicer.actions;

export default authSlicer.reducer;
