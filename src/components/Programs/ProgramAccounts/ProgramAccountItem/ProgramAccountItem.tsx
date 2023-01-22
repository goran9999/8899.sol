import React, { FC, useMemo } from "react";
import {
  IAccount,
  IProgramData,
} from "../../../../interface/programs.interface";
import accountInfo from "../../../../assets/accountInfo.svg";
import Tooltip from "../../../Tooltip/Tooltip";
import AccountDeserialization from "./AccountDeserialization/AccountDeserialization";
import "./ProgramAccountItem.scss";
const ProgramAccountItem: FC<{
  account: IAccount;
  program: IProgramData;
}> = ({ account, program }) => {
  const getFieldType = (type: any) => {
    if (typeof type === "string") {
      return <p className="program-accounts-item__type">{type}</p>;
    } else {
      return (
        <div className="program-account-item__struct">
          <p>Struct</p>
          <Tooltip text={type} imgUrl={accountInfo} />
        </div>
      );
    }
  };

  const renderAccountFields = useMemo(() => {
    return account.fields.fields.map((field: any) => {
      return (
        <div className="program-account-item__field">
          <p>{field.name}:</p>
          {getFieldType(field.type)}
        </div>
      );
    });
  }, [account]);
  return (
    <div className="program-account-item">
      <div className="program-account-item__data">
        <h2>Account name:{account.name}</h2>
        <div className="program-account-item__fields">
          <h3>Account structure</h3>
          {renderAccountFields}
        </div>
      </div>

      <AccountDeserialization program={program} account={account} />
    </div>
  );
};

export default ProgramAccountItem;
