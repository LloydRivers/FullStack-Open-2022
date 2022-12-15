import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    set_notification: (state, { payload }) => {
      return payload;
    },
  },
});

export const { set_notification } = notificationSlice.actions;

export const selectState = (state) => state.notification;

let timeoutId = null;
export const createNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(set_notification(message));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(
      () => dispatch(set_notification(null)),
      delay * 1000
    );
  };
};

export default notificationSlice.reducer;
