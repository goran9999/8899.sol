import { Form, Formik } from "formik";
import React, { FC, useCallback, useMemo, useState } from "react";
import { AccountType, RpcConnection } from "../../../enums/common.enums";
import Modal from "../../Modal/Modal";
import SelectItem from "../../SelectItem/SelectItem";
import formConfig from "./formConfig";
import "./AddAccount.scss";
import { validateCreateAccount } from "./validators";
import AddPubkey from "./AddPubkey/AddPubkey";
import AddKeypair from "./AddKeypair/AddKeypair";
import ExitButton from "../../Buttons/ExitButton";
import SubmitButton from "../../Buttons/SubmitButton";
import { accountsStore } from "../../../context/accountStore";
import { AccountData } from "../../../interface/account.interface";
import { getAccountAssets } from "../../../utilities/methods/accounts";
import { PublicKey } from "@solana/web3.js";
const AddAccount: FC<{ closeModal: () => void; rpc: RpcConnection }> = ({
  closeModal,
  rpc,
}) => {
  const [accountType, setAccountType] = useState(AccountType.PublicKey);
  const { accounts, addAccounts } = accountsStore.getState();
  const [pubkeyErrors, setPubkeyErrors] = useState<string[]>([]);

  const handleSubmit = useCallback(
    async (values: any) => {
      const newAccounts: AccountData[] = [];
      values.pubkeys.forEach((pk: any) => {
        newAccounts.push({
          assets: [],
          pubkey: pk.pubkey,
          solBalance: 0,
          alias: pk.alias,
        });
      });
      values.secretKeys.forEach((sc: any) => {
        newAccounts.push({
          assets: [],
          pubkey: sc.pubkey,
          solBalance: 0,
          alias: sc.alias,
          keypair: sc.secretKey,
        });
      });
      newAccounts.forEach((newAcc) => {
        if (
          accounts.find(
            (acc) => acc.pubkey.toString() === newAcc.pubkey.toString()
          )
        ) {
          setPubkeyErrors((prevValue) => [
            ...prevValue,
            newAcc.pubkey.toString(),
          ]);
        }
      });
      if (pubkeyErrors.length > 0) return;
      for (let acc of newAccounts) {
        const { assets, balance } = await getAccountAssets(
          new PublicKey(acc.pubkey),
          rpc
        );
        acc = { ...acc, assets, solBalance: balance };
      }
      addAccounts(newAccounts);
      closeModal();
    },
    [accounts]
  );
  return (
    <Modal closeModal={closeModal}>
      <Formik
        initialValues={formConfig}
        onSubmit={handleSubmit}
        validate={(values) => validateCreateAccount(values)}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="add-account">
              <h2 className="add-account__title">Add new accounts</h2>
              <div className="add-account__type">
                <SelectItem
                  onClick={() => {
                    setAccountType(AccountType.PublicKey);
                    setFieldValue("accountType", AccountType.PublicKey);
                  }}
                  description="(you will not be able to sign transactions)"
                  title="Add PublicKey"
                  isActive={accountType === AccountType.PublicKey}
                />
                <SelectItem
                  onClick={() => {
                    setAccountType(AccountType.Keypair);
                    setFieldValue("accountType", AccountType.Keypair);
                  }}
                  description="(you will  be able to sign transactions)"
                  title="Add Keypair"
                  isActive={accountType === AccountType.Keypair}
                  isLast
                />
              </div>
              {accountType === AccountType.PublicKey ? (
                <AddPubkey />
              ) : (
                <AddKeypair />
              )}
            </div>
            <div className="add-account__buttons">
              <ExitButton label="Exit" onClick={() => closeModal()} />
              <SubmitButton
                label="Save accounts"
                onClick={() => handleSubmit(values)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddAccount;
