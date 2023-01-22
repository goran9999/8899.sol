import React from "react";
import create from "zustand";
import { AccountData } from "../interface/account.interface";

export interface IAccountContext {
  accounts: AccountData[];
  addNewAccount: (account: AccountData) => void;
  addAccounts: (accounts: AccountData[]) => void;
  updateAccount: (account: AccountData) => void;
}

export const AccountContext = React.createContext({} as IAccountContext);
