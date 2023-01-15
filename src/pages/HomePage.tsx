import { useAnchorWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useMemo, useState, useTransition } from "react";
import { NFTs, PROGRAMS } from "../common/url.constants";
import AccountItem from "../components/Accounts/AccountItem/AccountItem";
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
  useEffect(() => {
    toggleLoading(true);
    if (wallet) {
      if (accounts.length === 0) {
        void setupInitialAccounts();
      } else {
        void refreshBalanceAndAssets();
      }
    } else {
      addAccounts([]);
    }
    toggleLoading(false);
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
      console.log(error);
    }
  };

  const refreshBalanceAndAssets = async () => {
    const addedAccounts = [...accounts];
    for (const [index, account] of addedAccounts.entries()) {
      const { assets, balance } = await getAccountAssets(
        account.pubkey,
        rpcConnection
      );

      addedAccounts[index] = {
        ...addedAccounts[index],
        assets,
        solBalance: balance,
      };
    }
    addAccounts(addedAccounts);
  };

  const renderAccountItem = useMemo(() => {
    return accounts.map((account) => {
      return <AccountItem account={account} key={account.pubkey.toString()} />;
    });
  }, [accounts, rpcConnection]);

  return (
    <>
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
                <SkeletonItem width={"100%"} borderRadius={4} height={20} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <WalletNotConnected />
      )}
    </>
  );
};

export default HomePage;
