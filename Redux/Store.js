import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslise"; 
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
