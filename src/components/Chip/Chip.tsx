import React, { FC } from "react";
import "./Chip.scss";
const Chip: FC<{
  text: string;
  isActive: boolean;
  onClick: () => void;
  first?: boolean;
  last?: boolean;
}> = ({ isActive, onClick, text, first, last }) => {
  return (
    <div
      className={`${isActive ? "chip chip__active" : "chip"} ${
        first ? "first" : last ? "last" : ""
      }`}
      onClick={onClick}
    >
      <p
        className={`${
          isActive ? "chip__title chip__title--active" : "chip__title"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Chip;
