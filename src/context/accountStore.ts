import { Keypair } from "@solana/web3.js";
import React from "react";
import create from "zustand";
import { AccountData } from "../interface/account.interface";

export interface IAccountContext {
  keypair: Keypair;
  accounts: AccountData[];
  addNewAccount: (account: AccountData) => void;
  addAccounts: (accounts: AccountData[]) => void;
  updateAccount: (account: AccountData) => void;
  setKeypair: (kp: Keypair) => void;
}

export const AccountContext = React.createContext({} as IAccountContext);
