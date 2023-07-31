import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

export const tokenSlices = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
    clearToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToken, clearToken } = tokenSlices.actions;
export default tokenSlices.reducer;