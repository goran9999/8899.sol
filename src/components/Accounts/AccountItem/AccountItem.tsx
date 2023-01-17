import React, { FC, useEffect, useMemo, useState } from "react";
import { AccountData } from "../../../interface/account.interface";
import keyGreen from "../../../assets/keyGreen.svg";
import keyPurple from "../../../assets/keyPurple.svg";
import "./AccountItem.scss";
import { RpcConnection } from "../../../enums/common.enums";
import { getAccountAssets } from "../../../utilities/methods/accounts";
import { accountsStore } from "../../../context/accountStore";
import SkeletonItem from "../../SkeletonItem/SkeletonItem";
const AccountItem: FC<{ account: AccountData; rpc: RpcConnection }> = ({
  account,
  rpc,
}) => {
  const { updateAccount } = accountsStore.getState();
  const [loading, toggleLoading] = useState(false);
  useEffect(() => {
    void fetchAccountAssets();
  }, [rpc]);

  const fetchAccountAssets = async () => {
    try {
      toggleLoading(true);
      const { balance, assets } = await getAccountAssets(account.pubkey, rpc);
      updateAccount({ ...account, assets, solBalance: balance });
    } catch (error) {}
    toggleLoading(false);
  };

  const renderAccountAssets = useMemo(() => {
    if (!loading) {
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
    } else {
      return <SkeletonItem width={"100%"} height={50} borderRadius={4} />;
    }
  }, [rpc]);

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