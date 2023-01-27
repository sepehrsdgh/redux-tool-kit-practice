import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authicination",
  initialState: {
    isAuthenciated: false,
  },
  reducers: {
    logIn(state) {
      state.isAuthenciated = true;
    },
    logOut(state) {
      state.isAuthenciated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
