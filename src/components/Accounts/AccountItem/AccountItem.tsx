import React, { FC, useMemo } from "react";
import { AccountData } from "../../../interface/account.interface";
import keyGreen from "../../../assets/keyGreen.svg";
import keyPurple from "../../../assets/keyPurple.svg";
import "./AccountItem.scss";
const AccountItem: FC<{ account: AccountData }> = ({ account }) => {
  const renderAccountAssets = useMemo(() => {
    return account.assets.map((asset) => {
      return (
        <img
          src={asset.logoUri}
          className={`${
            asset.isNFT ? "account-item__nft" : "account-item__ft"
          }`}
        />
      );
    });
  }, [account.assets]);

  return (
    <div className="account-item">
      <div className="account-item__pubkey">
        <div>
          <img src={account.keypair ? keyGreen : keyPurple} alt="" />
          <p className="account-item__key">{account.pubkey.toString()}</p>
        </div>
        <p className="account-item__balance">{account.solBalance} SOL</p>
      </div>
      <div className="account-item__assets">
        <p>Assets:</p>
        {renderAccountAssets}
      </div>
    </div>
  );
};

export default AccountItem;
