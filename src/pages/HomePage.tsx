import React from "react";
import { NFTs, PROGRAMS } from "../common/url.constants";
import CardInfo from "../components/Accounts/CardInfo/CardInfo";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__cards">
        <CardInfo
          amount={11}
          title="Your loaded programs"
          showButton
          navigateTo={PROGRAMS}
        />
        <CardInfo
          amount={12}
          title="Transactions count"
          description="Transactions per second (TPS)"
          secondAmount={2}
        />
        <CardInfo
          amount={11}
          title="Total NFTs minted"
          showButton
          navigateTo={NFTs}
        />
      </div>
    </div>
  );
};

export default HomePage;
