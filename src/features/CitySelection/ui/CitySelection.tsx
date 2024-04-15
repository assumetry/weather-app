import React, { FC, useMemo, useState } from "react";
import { useAppDispatch } from "../../../shared/lib/hooks";
import { clearList, addCityThunk } from "../../../entities/WeatherList";
import { createCityList } from "../model/cityList";
import { sortingSelectOptions } from "../../../shared/ui/select/lib/sortingOptions";
import { CustomSelectOptionType } from "../../../shared/ui/select/model/types";
import { CustomButton, CustomSelect } from "../../../shared/ui";
import "./CitySelection.scss";

type CitySelectionType = {};

export const CitySelection: FC<CitySelectionType> = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const citySelectionArray: CustomSelectOptionType[] = useMemo(
    () => createCityList(),
    []
  );

  const sortedOptions: CustomSelectOptionType[] = useMemo(
    () => sortingSelectOptions(inputValue, citySelectionArray),
    [inputValue, citySelectionArray]
  );

  const onClear = () => {
    dispatch(clearList());
  };

  const addCity = () => {
    inputValue && dispatch(addCityThunk(inputValue));
    setInputValue("");
  };

  const onOptionClick = (name: string) => {
    setInputValue(name);
    setIsOpen(false);
  };

  const onInputChange = (name: string) => {
    setInputValue(name);
    !!sortedOptions.length && setIsOpen(true);
    !name.trim() && setIsOpen(false);
  };

  return (
    <div className="CitySelection">
      <CustomSelect
        options={sortedOptions}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        value={inputValue}
        onInputChange={onInputChange}
        onOptionClick={onOptionClick}
        className="CitySelection__select"
      />
      <CustomButton
        className="CitySelection__button"
        handleClick={addCity}
        content="Add city"
      />
      <CustomButton
        className="CitySelection__button"
        handleClick={onClear}
        content="Clear all cities"
      />
    </div>
  );
};
