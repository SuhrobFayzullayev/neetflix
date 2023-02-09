import { configureStore } from "@reduxjs/toolkit";
import yourFavoritePlayLists from "./slice";

export const store = configureStore({
  reducer: {
    yourFavoritePlayLists,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
