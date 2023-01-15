import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import WalletWrapper from "./components/WalletWrapper/WalletWrapper";
import Routes from "./Routes";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <WalletWrapper>
      <>
        <Header />
        <Routes />
      </>
    </WalletWrapper>
  );
}

export default App;
