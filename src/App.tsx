import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import WalletWrapper from "./components/WalletWrapper/WalletWrapper";
import Routes from "./Routes";
import "react-loading-skeleton/dist/skeleton.css";
import { AccountData } from "./interface/account.interface";
import { AccountContext } from "./context/accountStore";

function App() {
  const [accounts, setAccounts] = useState<AccountData[]>([]);

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
