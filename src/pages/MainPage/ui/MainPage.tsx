import React, { FC } from "react";
import { WeatherList } from "../../../widgets/WeatherList/WeatherList";
import { CitySelection } from "../../../features/CitySelection/ui/CitySelection";
import "./MainPage.scss";

export const MainPage: FC = () => (
  <div className="MainPage">
    <CitySelection />
    <WeatherList />
  </div>
);
