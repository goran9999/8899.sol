import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import WalletWrapper from "./components/WalletWrapper/WalletWrapper";
import Routes from "./Routes";
import "react-loading-skeleton/dist/skeleton.css";
import { AccountData } from "./interface/account.interface";
import { AccountContext } from "./context/accountStore";
import { Keypair } from "@solana/web3.js";
import { fundKeypair } from "./utilities/methods/programs";

function App() {
  const [accounts, setAccounts] = useState<AccountData[]>([]);
  const [keypair, setKeypair] = useState(Keypair.generate().secretKey);

  useEffect(() => {
    void airdrop();
  }, []);

  const airdrop = async () => {
    await fundKeypair(Keypair.fromSecretKey(keypair).publicKey);
  };

  const addNewAccount = (account: AccountData) => {
    setAccounts((prevValue) => [...prevValue, account]);
  };

  const addAccounts = (accounts: AccountData[]) => {
    setAccounts((prevValue) => [...prevValue, ...accounts]);
  };

  const updateAccount = (account: AccountData) => {
    const addedAcc = accounts.findIndex(
      (acc) => acc.pubkey.toString() === account.pubkey.toString()
    );
    const addedAccounts = [...accounts];
    addedAccounts[addedAcc] = { ...account };
    setAccounts(addedAccounts);
  };
  return (
    <WalletWrapper>
      <>
        <AccountContext.Provider
          value={{
            keypair,
            setKeypair,
            accounts,
            addAccounts,
            addNewAccount,
            updateAccount,
          }}
        >
          <Header />
          <Routes />
        </AccountContext.Provider>
      </>
    </WalletWrapper>
  );
}

export default App;
