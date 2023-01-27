import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";
import authSliceReducer from "./authSlice";
const store = configureStore({
  reducer: {
    counter2: counterSliceReducer,
    auth: authSliceReducer,
  },
});

console.log(store);

export default store;
