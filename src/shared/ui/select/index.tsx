import React, { FC } from "react";
import classNames from "classnames";
import "./styles.scss";

type CustomSelectType = {
  onInputChange: (value: string) => void;
  onOptionClick: (value: string) => void;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  value?: string;
  options: { name: string; id: number }[];
  className?: string;
  dropdownClassname?: string;
};

export const CustomSelect: FC<CustomSelectType> = ({
  onInputChange,
  isOpen,
  onOptionClick,
  value,
  options,
  className = "",
  dropdownClassname = "",
}) => {
  return (
    <div className={`CustomSelect ${className}`}>
      <input
        type="text"
        placeholder="Type location"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        className={classNames({
          CustomSelect__input: true,
          CustomSelect__input_isOpen: isOpen,
        })}
      />
      <div
        className={classNames({
          dropdownClassname,
          CustomSelect__dropdown: true,
          CustomSelect__dropdown_open: isOpen,
          CustomSelect__dropdown_closed: !isOpen,
        })}
      >
        {options.map(({ id, name }) => (
          <div
            className="CustomSelect__dropdownOption"
            onClick={() => onOptionClick(name)}
            key={id}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
