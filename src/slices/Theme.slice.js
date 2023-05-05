import { createSlice } from "@reduxjs/toolkit";

export const ThemeReducer = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    toogleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});
export default ThemeReducer.reducer;
export const { toogleTheme } = ThemeReducer.actions;
