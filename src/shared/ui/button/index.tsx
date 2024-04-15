import React, { FC } from "react";
import "./styles.scss";

interface CustomButtonPropsType {
  content?: string;
  handleClick?: () => void;
  className?: string;
}

export const CustomButton: FC<CustomButtonPropsType> = ({
  content = "Button",
  handleClick = () => {},
  className = "",
}) => (
  <button className={`CustomButton ${className}`} onClick={handleClick}>
    {content}
  </button>
);
