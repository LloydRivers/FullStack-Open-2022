import { createSlice } from "@reduxjs/toolkit";
import userService from "../../services/users";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
});

const { setUsers } = userSlice.actions;

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll();
    dispatch(setUsers(users));
  };
};

export const selectUsers = (state) => state.users;

export const selectUserById = (state, id) => {
  return state.users.find((user) => user.id === id);
};

export default userSlice.reducer;
