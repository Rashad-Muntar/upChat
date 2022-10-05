import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername(state, action) {
      return action.payload;
    },
  },

});

export const { setUsername } = userSlice.actions;
export const userReducer = userSlice.reducer;
