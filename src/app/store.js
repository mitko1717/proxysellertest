import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from "../features/users/slice";

export const store = configureStore({
  reducer: {
    fetch: fetchDataReducer,
  },
});
