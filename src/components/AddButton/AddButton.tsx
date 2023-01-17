import React, { FC } from "react";

import "./AddButton.scss";
const AddButton: FC<{
  title: string;
  isGreen?: boolean;
  onClick: () => void;
}> = ({ title, isGreen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${isGreen ? "add-button add-button__green" : "add-button"}`}
    >
      {title}
      {/* <img src={isGreen ? addCircleGreen : addCirclePurple} alt="addIcon" /> */}
    </button>
  );
};

export default AddButton;
