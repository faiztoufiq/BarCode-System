import { configureStore } from "@reduxjs/toolkit";
import { emptySplit } from "../redux/slices/emptySplit";

export const store = configureStore({
  reducer: {
    [emptySplit.reducerPath]: emptySplit.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplit.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
