import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
  },
});

const { setNotification } = notificationSlice.actions;

let timeoutId = null;

export const createNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(setNotification(message));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => dispatch(setNotification(null)), delay * 1000);
  };
};

export const selectNotification = (state) => state.notification;

export default notificationSlice.reducer;
