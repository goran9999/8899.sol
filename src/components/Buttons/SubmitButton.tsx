import React, { FC } from "react";
import "./SubmitButton.scss";
import { Oval } from "react-loader-spinner";
const SubmitButton: FC<{
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  type?: "button" | "submit";
}> = ({ label, onClick, type, isLoading }) => {
  return (
    <button className="submit-button" type={type} onClick={onClick}>
      {!isLoading ? (
        label
      ) : (
        <Oval color="#a20aff" height={"2em"} width={"2em"} />
      )}
    </button>
  );
};

export default SubmitButton;
