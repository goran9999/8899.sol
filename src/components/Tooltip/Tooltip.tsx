import React, { FC, useState } from "react";
import accountInfo from "../../assets/accountInfo.svg";
import "./Tooltip.scss";
const Tooltip: FC<{ text: string; imgUrl: string }> = ({ text, imgUrl }) => {
  const [isTooltipVisible, toggleIsTooltipVisible] = useState(false);
  return (
    <div className="tooltip">
      {isTooltipVisible && (
        <div
          onMouseLeave={() => toggleIsTooltipVisible(false)}
          className="tooltip__text"
        >
          <p>{JSON.stringify(text)}</p>
        </div>
      )}
      <img
        onMouseEnter={() => toggleIsTooltipVisible(true)}
        onMouseLeave={() => toggleIsTooltipVisible(false)}
        src={imgUrl}
        alt="accountInfo"
      />
    </div>
  );
};

export default Tooltip;
