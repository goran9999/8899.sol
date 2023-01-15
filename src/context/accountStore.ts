import create from "zustand";
import { AccountData } from "../interface/account.interface";

export interface IAccountsStore {
  accounts: AccountData[];
  addNewAccount: (account: AccountData) => void;
  addAccounts: (accounts: AccountData[]) => void;
}

const initialState = {
  accounts: [],
};

export const accountsStore = create<IAccountsStore>((set, get) => ({
  ...initialState,
  addNewAccount: (account: AccountData) => {
    set({
      accounts: [...get().accounts, account],
    });
  },
  addAccounts: (accounts: AccountData[]) => {
    set({ accounts });
  },
}));
