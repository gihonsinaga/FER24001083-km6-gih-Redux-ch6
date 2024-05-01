import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // token: localStorage.getItem("token") || null,
  // isLoggedIn: !!localStorage.getItem("token"),
  token: null,
  isLoggedIn: null,
  user: null,
  showPassword: false,
  // email: "",
  // name: "",
  // password: "",
  // errorr: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("action login", action);
      // if (action.payload) {
      //   localStorage.setItem("token", action.payload);
      // } else {
      //   localStorage.removeItem("token");
      // }

      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setshowPassword: (state, action) => {
      // console.log("action register", action);
      state.showPassword = action.payload;
    },
    // setEmail: (state, action) => {
    //   // console.log("action email", action);
    //   state.email = action.payload;
    // },

    // setName: (state, action) => {
    //   state.name = action.payload;
    // },

    // setPassword: (state, action) => {
    //   state.password = action.payload;
    // },
    // setError: (state, action) => {
    //   // console.log("action", action);
    //   state.errorr = action.payload;
    // },
  },
});

export const {
  setToken,
  setIsLoggedIn,
  setUser,
  setError,
  setshowPassword,
  setEmail,
  setName,
  setPassword,
} = authSlicer.actions;

export default authSlicer.reducer;
