import { Form, Formik } from "formik";
import React, { FC, useCallback, useContext, useMemo, useState } from "react";
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
import { AccountData } from "../../../interface/account.interface";
import { getAccountAssets } from "../../../utilities/methods/accounts";
import { PublicKey } from "@solana/web3.js";
import { AccountContext } from "../../../context/accountStore";
import { createAccount } from "../../../utilities/methods/programs";
const AddAccount: FC<{ closeModal: () => void; rpc: RpcConnection }> = ({
  closeModal,
  rpc,
}) => {
  const [accountType, setAccountType] = useState(AccountType.PublicKey);
  const { accounts, addAccounts, keypair } = useContext(AccountContext);

  const [error, setError] = useState<string>();

  const handleSubmit = useCallback(
    async (values: any, errors: any) => {
      try {
        const newAccounts: AccountData[] = [];
        values.pubkeys = values.pubkeys.filter(
          (v: any) => v.pubkey.toString() !== ""
        );
        values.secretKeys = values.secretKeys.filter(
          (v: any) => v.keypair.toString() !== ""
        );

        values.pubkeys.forEach((pk: any) => {
          newAccounts.push({
            assets: [],
            pubkey: new PublicKey(pk.pubkey),
            solBalance: 0,
            alias: pk.alias,
          });
        });
        values.secretKeys.forEach((sc: any) => {
          newAccounts.push({
            assets: [],
            pubkey: new PublicKey(sc.pubkey),
            solBalance: 0,
            alias: sc.alias,
            keypair: sc.keypair,
          });
        });
        let shouldReturn = false;
        newAccounts.forEach((newAcc) => {
          if (
            accounts.find(
              (acc) => acc.pubkey.toString() === newAcc.pubkey.toString()
            )
          ) {
            setError("Given pubkey is aleready added!");
            shouldReturn = true;
          }
        });
        if (shouldReturn) return;
        for (let acc of newAccounts) {
          if (acc.keypair) {
            await createAccount(acc, keypair);
          }
          const { assets, balance } = await getAccountAssets(
            new PublicKey(acc.pubkey),
            rpc
          );
          acc = { ...acc, assets, solBalance: balance };
        }
        addAccounts(newAccounts);
        closeModal();
      } catch (error) {
        setError("Invalid pubkey input!");
      }
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
        {({ setFieldValue, values, errors }) => (
          <Form>
            <div className="add-account">
              <h2 className="add-account__title">Add new account</h2>
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
            {error && <p className="add-account__error">{error}</p>}
            <div className="add-account__buttons">
              <ExitButton label="Exit" onClick={() => closeModal()} />
              <SubmitButton
                type="button"
                label="Save accounts"
                onClick={() => handleSubmit(values, errors)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddAccount;
