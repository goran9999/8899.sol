import { useAnchorWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useMemo, useState, useTransition } from "react";
import { NFTs, PROGRAMS } from "../common/url.constants";
import AccountItem from "../components/Accounts/AccountItem/AccountItem";
import AddAccount from "../components/Accounts/AddAccountModal/AddAccount";
import CardInfo from "../components/Accounts/CardInfo/CardInfo";
import RpcChip from "../components/Accounts/RpcChip/RpcChip";
import SkeletonItem from "../components/SkeletonItem/SkeletonItem";
import WalletNotConnected from "../components/WalletNotConnected/WalletNotConnected";
import { accountsStore } from "../context/accountStore";
import { RpcConnection } from "../enums/common.enums";
import { getAccountAssets } from "../utilities/methods/accounts";
import "./HomePage.scss";
const HomePage = () => {
  const { accounts, addAccounts } = accountsStore.getState();
  const wallet = useAnchorWallet();
  const [rpcConnection, setRpcConnection] = useState(RpcConnection.Mainnet);
  const [loading, toggleLoading] = useState(true);
  const [isModalVisible, toggleIsModalVisible] = useState(false);
  useEffect(() => {
    if (wallet) {
      if (accounts.length === 0) {
        void setupInitialAccounts();
      }
    } else {
      addAccounts([]);
    }
  }, [wallet?.publicKey, rpcConnection]);

  const setupInitialAccounts = async () => {
    try {
      const { assets, balance } = await getAccountAssets(
        wallet?.publicKey!,
        rpcConnection
      );

      addAccounts([
        {
          assets,
          pubkey: wallet?.publicKey!,
          solBalance: balance,
        },
      ]);
    } catch (error) {
      addAccounts([]);
    }
    toggleLoading(false);
  };

  const renderAccountItem = useMemo(() => {
    return accounts.map((account) => {
      return (
        <AccountItem
          account={account}
          key={account.pubkey.toString()}
          rpc={rpcConnection}
        />
      );
    });
  }, [accounts, rpcConnection]);

  return (
    <>
      {isModalVisible && (
        <AddAccount closeModal={() => toggleIsModalVisible(false)} />
      )}

      {wallet?.publicKey ? (
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

          <div className="home-page__account-list">
            <div className="home-page__accounts-header">
              <p>Accounts</p>
              <div className="home-page__rpc">
                <RpcChip
                  text="Localhost"
                  isActive={rpcConnection === RpcConnection.Localhost}
                  onClick={() => setRpcConnection(RpcConnection.Localhost)}
                />
                <RpcChip
                  text="Devnet"
                  isActive={rpcConnection === RpcConnection.Devnet}
                  onClick={() => setRpcConnection(RpcConnection.Devnet)}
                />
                <RpcChip
                  text="Mainnet"
                  isActive={rpcConnection === RpcConnection.Mainnet}
                  onClick={() => setRpcConnection(RpcConnection.Mainnet)}
                />
              </div>
            </div>
            <div className="home-page__accounts">
              {!loading ? (
                renderAccountItem
              ) : (
                <SkeletonItem width={"100%"} borderRadius={4} height={80} />
              )}
            </div>
          </div>
          <button
            onClick={() => toggleIsModalVisible(true)}
            className="home-page__add-new-account"
          >
            Add new account
          </button>
        </div>
      ) : (
        <WalletNotConnected />
      )}
    </>
  );
};

export default HomePage;
