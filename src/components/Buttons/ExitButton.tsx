import React, { FC } from "react";
import "./ExitButton.scss";
const ExitButton: FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => {
  return (
    <button type="button" className="exit-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default ExitButton;
