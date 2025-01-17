import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSliceStore";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
