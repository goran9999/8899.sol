import { useAnchorWallet } from "@solana/wallet-adapter-react";
import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { NFTs, PROGRAMS } from "../common/url.constants";
import AccountItem from "../components/Accounts/AccountItem/AccountItem";
import AddAccount from "../components/Accounts/AddAccountModal/AddAccount";
import CardInfo from "../components/Accounts/CardInfo/CardInfo";
import RpcChip from "../components/Accounts/RpcChip/RpcChip";
import Bar from "../components/Bar/Bar";
import SkeletonItem from "../components/SkeletonItem/SkeletonItem";
import WalletNotConnected from "../components/WalletNotConnected/WalletNotConnected";
import { AccountContext } from "../context/accountStore";
import { programsStore } from "../context/programsStore";
import { RpcConnection } from "../enums/common.enums";
import { getAccountAssets } from "../utilities/methods/accounts";
import { getConnection } from "../utilities/methods/helpers";
import { airdropFunds, createAccount } from "../utilities/methods/programs";
import "./HomePage.scss";
const HomePage = () => {
  const { accounts, addAccounts, keypair } = useContext(AccountContext);
  const wallet = useAnchorWallet();
  const [rpcConnection, setRpcConnection] = useState(RpcConnection.Mainnet);
  const [loading, toggleLoading] = useState(true);
  const [isModalVisible, toggleIsModalVisible] = useState(false);
  const [transactionsCount, setTransactionsCount] = useState(0);

  const { programs } = programsStore.getState();

  useEffect(() => {
    void getTransactionsCount();
    if (wallet) {
      if (accounts.length === 0) {
        void setupInitialAccounts();
      } else {
        toggleLoading(false);
      }
    } else {
      addAccounts([]);
    }
  }, [wallet?.publicKey, rpcConnection]);

  const setupInitialAccounts = async () => {
    try {
      await airdropFunds(wallet?.publicKey!);
      const { assets, balance } = await getAccountAssets(
        wallet?.publicKey!,
        rpcConnection
      );

      addAccounts([
        {
          assets,
          pubkey: wallet?.publicKey!,
          solBalance: balance,
          alias: "",
        },
      ]);
    } catch (error) {
      addAccounts([]);
    }
    toggleLoading(false);
  };

  const getTransactionsCount = async () => {
    try {
      const connection = getConnection(rpcConnection);
      const transactionsCount = await connection.getTransactionCount();
      setTransactionsCount(transactionsCount);
    } catch (error) {}
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
        <AddAccount
          closeModal={() => toggleIsModalVisible(false)}
          rpc={rpcConnection}
        />
      )}

      {wallet?.publicKey ? (
        <div className="home-page">
          <Bar />
          <div className="home-page__cards">
            <CardInfo
              amount={programs.length}
              title="Your loaded programs"
              showButton
              navigateTo={PROGRAMS}
            />
            <CardInfo
              amount={transactionsCount}
              title="Transactions count"
              secondAmount={2}
            />
            <CardInfo
              amount={0}
              title="Total NFTs minted"
              showButton
              navigateTo={NFTs}
              description="Coming soon"
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
