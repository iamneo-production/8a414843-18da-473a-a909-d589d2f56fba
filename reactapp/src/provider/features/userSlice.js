import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

export const userSlices = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logins: (state, action) => {
      state.value = action.payload;
    },
    logouts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { logins, logouts } = userSlices.actions;
export default userSlices.reducer;