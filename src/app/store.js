import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../slices/Theme.slice";

export default configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});
