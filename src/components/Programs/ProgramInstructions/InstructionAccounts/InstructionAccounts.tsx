import { IdlAccountItem } from "@project-serum/anchor/dist/cjs/idl";
import React, { FC, useMemo } from "react";
import { IAccount } from "../../../../interface/programs.interface";
import InstructionAccountItem from "./InstructionAccountItem/InstructionAccountItem";
import "./InstructionAccounts.scss";
const InstructionAccounts: FC<{ accounts: IdlAccountItem[] }> = ({
  accounts,
}) => {
  const renderAccounts = useMemo(() => {
    return accounts.map((acc, index) => {
      return (
        <InstructionAccountItem
          index={index}
          name={acc.name}
          key={acc.name}
          isSigner={(acc as any)["isSigner"]}
          isWritable={(acc as any)["isMut"]}
        />
      );
    });
  }, [accounts]);

  return (
    <div className="instruction-accounts">
      <h2>Accounts:</h2>
      <div className="instruction-accounts__account-list">{renderAccounts}</div>
    </div>
  );
};

export default InstructionAccounts;
