import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

const weatherListSlice = createSelector(
  (state: RootState) => state,
  (state) => state.weatherList
);

export const weatherList = createSelector(
  weatherListSlice,
  (state) => state.weatherList
);

export const weatherListStatus = createSelector(
  weatherListSlice,
  (state) => state.status
);
