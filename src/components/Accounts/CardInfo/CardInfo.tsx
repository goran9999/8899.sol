import React, { FC } from "react";
import { useNavigate } from "react-router";
import { PROGRAMS } from "../../../common/url.constants";
import "./CardInfo.scss";
export interface ICardInfoProps {
  title: string;
  amount: number;
  description?: string;
  secondAmount?: number;
  showButton?: boolean;
  navigateTo?: string;
}

const CardInfo: FC<ICardInfoProps> = ({
  amount,
  title,
  description,
  secondAmount,
  showButton,
  navigateTo,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card-info">
      <p className="card-info__title">{title}</p>
      <p
        className={`${
          showButton
            ? "card-info__amount card-info__amount-purple"
            : "card-info__amount card-info__amount-green"
        }`}
      >
        {amount}
      </p>
      {(description || showButton) && (
        <div className="card-info__description">
          <p className="card-info__details">
            {description} <span>{secondAmount}</span>
          </p>

          {showButton && (
            <button
              className="card-info__button"
              onClick={() => navigate(navigateTo!)}
            >
              View details
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CardInfo;
