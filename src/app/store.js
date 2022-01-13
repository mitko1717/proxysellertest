import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import fetchDataReducer from "../features/users/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fetch: fetchDataReducer,
  },
});
