import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./WalletNotConnected.scss";
const WalletNotConnected = () => {
  return (
    <div className="wallet-not-connected">
      <p> Wallet not connected. Please connect your wallet</p>
      <WalletMultiButton />
    </div>
  );
};

export default WalletNotConnected;
