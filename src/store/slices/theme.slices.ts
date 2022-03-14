import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../types/theme";

const initialState: ThemeState = {
  colorMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.colorMode = action.payload;
    },
  },
});

export const { setColorMode } = themeSlice.actions;

export default themeSlice.reducer;
