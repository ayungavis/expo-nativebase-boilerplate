import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme.slices";

const combinedReducers = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: combinedReducers,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
