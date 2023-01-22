import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { PROGRAMS } from "../../common/url.constants";
import "./Header.scss";
const Header = () => {
  const wallet = useWallet();

  const navigate = useNavigate();

  return (
    <div className="header">
      <img onClick={() => navigate("/")} src={logo} alt="logo" />
      <div className="header__navbar">
        <ul>
          <li onClick={() => navigate(PROGRAMS)}>Programs</li>
          <a title="Comming soon">NFTs</a>
          <a title="Comming soon">Fungible tokens</a>
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
