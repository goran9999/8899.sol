import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { AccountData } from "../../../interface/account.interface";
import keyGreen from "../../../assets/keyGreen.svg";
import keyPurple from "../../../assets/keyPurple.svg";
import "./AccountItem.scss";
import { RpcConnection } from "../../../enums/common.enums";
import { getAccountAssets } from "../../../utilities/methods/accounts";
import SkeletonItem from "../../SkeletonItem/SkeletonItem";
import AccountInfoModal from "./AccountInfoModal/AccountInfoModal";
import { AccountContext } from "../../../context/accountStore";
const AccountItem: FC<{ account: AccountData; rpc: RpcConnection }> = ({
  account,
  rpc,
}) => {
  const { updateAccount } = useContext(AccountContext);
  const [loading, toggleLoading] = useState(false);
  useEffect(() => {
    void fetchAccountAssets();
  }, [rpc]);

  const [isAccountInfoModalVisible, toggleAccountInfoModal] = useState(false);

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
  }, [rpc, account, loading]);

  return (
    <>
      {!loading ? (
        <div
          className="account-item"
          onClick={() => toggleAccountInfoModal(true)}
        >
          {isAccountInfoModalVisible && (
            <AccountInfoModal
              rpc={rpc}
              account={account}
              closeModal={() => toggleAccountInfoModal(false)}
            />
          )}
          <div className="account-item__pubkey">
            <div>
              <img src={account.keypair ? keyGreen : keyPurple} alt="" />
              <p className="account-item__key">
                {account.alias !== ""
                  ? account.alias
                  : account.pubkey.toString()}
              </p>
              {account.alias && (
                <p className="account-item__pk">
                  ({account.pubkey.toString()})
                </p>
              )}
            </div>
            <p className="account-item__balance">{account.solBalance} SOL</p>
          </div>
          <div className="account-item__assets">
            <p>Assets:</p>
            {renderAccountAssets}
          </div>
        </div>
      ) : (
        <SkeletonItem height={"4em"} borderRadius={6} width={"100%"} />
      )}
    </>
  );
};

export default AccountItem;
