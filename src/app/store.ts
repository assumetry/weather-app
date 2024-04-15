import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherReducer from "../entities/WeatherList/model/WeatherListSlice";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = configureStore({
  reducer: {
    weatherList: weatherReducer,
  },
});
