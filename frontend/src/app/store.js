import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import campgroundReducer from "../features/campground/campgroundSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    campground: campgroundReducer,
  },
});
