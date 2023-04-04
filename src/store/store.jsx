import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import notificationReducer from "../features/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    notification: notificationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
