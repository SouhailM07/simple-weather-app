import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  location: "",
};

let statusSlice = createSlice({
  name: "weatherLocation",
  initialState,
  reducers: {
    addingLocation: (state: any, action) => {
      state = action.payload;
    },
  },
});

export let { addingLocation } = statusSlice.actions;
export default statusSlice.reducer;
