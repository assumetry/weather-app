import { createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherListApi } from "../../../shared/api/WeatherList";
import { WeatherListItem, setInitialList } from "./WeatherListSlice";

export const addCityThunk = createAsyncThunk(
  "weatherList/loadWeatherList",
  async (payload: string) => {
    try {
      return await WeatherListApi.addCityToList(payload);
    } catch (e) {
      return e;
    }
  }
);

export const showInitialList = createAsyncThunk(
  "weatherList/showInitialList",
  async (payload: WeatherListItem[] | string, { dispatch }) => {
    try {
      if (Array.isArray(payload)) {
        return await dispatch(setInitialList(payload));
      }

      return await WeatherListApi.addCityToList(payload);
    } catch (e) {
      return e;
    }
  }
);
