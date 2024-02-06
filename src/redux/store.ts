import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import excludesSlice from "./slices/excludesSlice";


export const store = configureStore({
  reducer: {
    filter: filterSlice,
    excludes: excludesSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
