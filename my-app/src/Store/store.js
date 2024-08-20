import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slice/loginSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
