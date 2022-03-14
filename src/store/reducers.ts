import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme.slices";

const combinedReducers = combineReducers({
  theme: themeReducer,
});

export default combinedReducers;
