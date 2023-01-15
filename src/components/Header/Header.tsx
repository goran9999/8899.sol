import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import "./Header.scss";
const Header = () => {
  const wallet = useWallet();

  return (
    <div className="header">
      <h1>LOGO</h1>
      <div className="header__navbar">
        <ul>
          <li>Programs</li>
          <li>NFTs</li>
          <li>Fungible tokens</li>
          <li>
            <WalletMultiButton
              className={`${
                wallet.connected
                  ? "header__wallet header__wallet-connected"
                  : "header__wallet header__wallet-disconnected"
              }`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
