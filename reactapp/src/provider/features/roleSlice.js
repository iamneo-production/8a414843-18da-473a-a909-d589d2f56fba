import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: ""};

export const roleSlices = createSlice({
  name: "role",
  initialState: initialState,
  reducers: {
    setRole: (state, action) => {
      state.value = action.payload;
    },
    deleteRole: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRole, deleteRole } = roleSlices.actions;
export default roleSlices.reducer;