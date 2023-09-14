import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "./components/Status/statusSlice";
let store = configureStore({
  reducer: {
    location: statusSlice,
  },
});

export default store;
