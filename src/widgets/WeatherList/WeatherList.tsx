import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks";
import {
  WeatherListItem,
  addCityThunk,
  showInitialList,
  weatherList,
  weatherListStatus,
} from "../../entities/WeatherList";
import { WeatherCard } from "../../features/WeatherCard";
import "./WeatherList.scss";

export const WeatherList: FC = () => {
  const list = useAppSelector(weatherList);
  const listStatus = useAppSelector(weatherListStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const stored = localStorage.getItem("list");
    const storedList = stored && JSON.parse(stored);

    if (!!storedList?.length) {
      dispatch(showInitialList(storedList));
    }

    if (!storedList?.length && listStatus === "idle") {
      dispatch(addCityThunk("Moscow"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  if (listStatus === "loading") return <div>LOADING</div>;
  if (listStatus === "failed") return <div>Oops, smth wrong</div>;

  return (
    <div className="WeatherList">
      {list.map((cityInfo: WeatherListItem) => (
        <WeatherCard {...cityInfo} key={cityInfo.id} />
      ))}
    </div>
  );
};
