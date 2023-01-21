import React, { FC } from "react";
import "./Chip.scss";
import notification from "../../assets/notification.svg";
const Chip: FC<{
  text: string;
  isActive: boolean;
  onClick: () => void;
  first?: boolean;
  last?: boolean;
  hasNotification?: boolean;
}> = ({ isActive, onClick, text, first, last, hasNotification }) => {
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
      {hasNotification && <img src={notification} alt="notification" />}
    </div>
  );
};

export default Chip;
