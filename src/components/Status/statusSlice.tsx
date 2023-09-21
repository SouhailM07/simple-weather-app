import { createSlice } from "@reduxjs/toolkit";

interface statusProps {
  location: string;
}

let initialState: statusProps = {
  location: "",
};

let statusSlice = createSlice({
  name: "weatherLocation",
  initialState,
  reducers: {
    addingLocation: (state: any, action) => {
      state.location = action.payload;
    },
  },
});

export let { addingLocation } = statusSlice.actions;
export default statusSlice.reducer;
