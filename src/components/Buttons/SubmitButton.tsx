import React, { FC } from "react";
import "./SubmitButton.scss";
const SubmitButton: FC<{
  label: string;
  onClick: () => void;
  type?: "button" | "submit";
}> = ({ label, onClick, type }) => {
  return (
    <button className="submit-button" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default SubmitButton;
