import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addCityThunk } from "./WeatherListThunks";

export interface WeatherListItem {
  id: number;
  cityName: string;
  list: {
    date: string;
    temp: number;
    weather: string;
    iconId: string;
  }[];
}

export interface WeatherListSliceType {
  weatherList: WeatherListItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: WeatherListSliceType = {
  weatherList: [],
  status: "idle",
  error: null,
};

const WeatherListSlice = createSlice({
  name: "weatherList",
  initialState,
  reducers: {
    clearList: (state) => {
      state.weatherList = [];
      state.status = "idle";
    },
    deleteCity: (state, { payload: cityId }: PayloadAction<number>) => {
      state.weatherList = state.weatherList.filter(({ id }) => id !== cityId);
    },
    setInitialList: (state, { payload }: PayloadAction<WeatherListItem[]>) => {
      state.weatherList = payload;
      state.status = "succeeded";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addCityThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addCityThunk.fulfilled, (state, { payload }: any) => {
        state.status = "succeeded";

        const cityCard: WeatherListItem = {
          cityName: payload.city.name,
          id: payload.city.id,
          list: payload.list.map((el: any) => {
            return {
              date: el.dt_txt,
              temp: el.main.temp,
              weather: el.weather[0].description,
              iconId: el.weather[0].icon,
            };
          }),
        };

        state.weatherList = [...state.weatherList, cityCard];
      })
      .addCase(addCityThunk.rejected, (state, payload) => {
        state.status = "failed";

        const errorText = payload.payload as string;
        state.error = errorText;
      });
  },
});

export const { clearList, deleteCity, setInitialList } =
  WeatherListSlice.actions;
export default WeatherListSlice.reducer;
