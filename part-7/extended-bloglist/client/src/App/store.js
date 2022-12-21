import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/slices/blogSlice";
import notificationReducer from "../features/slices/notificationSlice";
import userReducer from "../features/slices/userSlice";
import loginReducer from "../features/slices/loginSlice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    notification: notificationReducer,
    users: userReducer,
    login: loginReducer,
  },
});

export default store;
