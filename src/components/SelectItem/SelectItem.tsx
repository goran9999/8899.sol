import React, { FC } from "react";
import "./SelectItem.scss";
const SelectItem: FC<{
  isActive: boolean;
  isLast?: boolean;
  title: string;
  description: string;
  onClick: () => void;
}> = ({ description, isActive, title, isLast, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? "select-item select-item__active" : "select-item"
      } ${isLast ? "last" : "first"}`}
    >
      <p
        className={`${
          isActive
            ? "select-item__title select-item__title--active"
            : "select-item__title"
        }`}
      >
        {title}
      </p>
      <p
        className={`${
          isActive
            ? "select-item__description select-item__description--active"
            : "select-item__description"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SelectItem;
