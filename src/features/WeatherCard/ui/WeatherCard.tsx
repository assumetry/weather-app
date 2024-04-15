import React, { FC } from "react";
import classNames from "classnames";
import { WeatherListItem, deleteCity } from "../../../entities/WeatherList";
import { useAppDispatch } from "../../../shared/lib/hooks";
import { CustomButton } from "../../../shared/ui";
import { formatDate, formatDateTime } from "../lib";
import "./WeatherCard.scss";

export const WeatherCard: FC<WeatherListItem> = (card) => {
  let orderCounter = 0;
  const { cityName, id, list } = card;
  const dispatch = useAppDispatch();

  const handleDeleteCity = () => {
    dispatch(deleteCity(id));
  };

  const isEven = () => {
    orderCounter++;

    return orderCounter % 2 === 1 ? true : false;
  };

  return (
    <div className="WeatherCard">
      <div className="WeatherCard__cityName">{cityName}</div>
      <CustomButton
        className="WeatherCard__button"
        content="Удалить город"
        handleClick={handleDeleteCity}
      />
      <ul className="WeatherCard__dayList">
        {list.map(({ date, temp, weather, iconId }) => {
          return (
            <li
              className={classNames({
                WeatherCard__dayItem: true,
                WeatherCard__dayItem_odd: orderCounter % 2 === 1,
                WeatherCard__dayItem_even: isEven(),
              })}
              key={date}
            >
              <div className="WeatherCard__dayInfo">
                <span>{formatDate(date)}</span>
                <span>{formatDateTime(date)}</span>
                <div>{Math.floor(temp)}°C</div>
              </div>
              <img
                src={`http://openweathermap.org/img/w/${iconId}.png`}
                className="WeatherCard__dayIcon"
                alt={weather}
                title={weather}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
