import React, { FC, useState } from "react";
import { AccountType } from "../../../enums/common.enums";
import Modal from "../../Modal/Modal";
import SelectItem from "../../SelectItem/SelectItem";
import "./AddAccount.scss";
const AddAccount: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [accountType, setAccountType] = useState(AccountType.PublicKey);
  return (
    <Modal closeModal={closeModal}>
      <div className="add-account">
        <h2 className="add-account__title">Add new accounts</h2>
        <div className="add-account__type">
          <SelectItem
            onClick={() => setAccountType(AccountType.PublicKey)}
            description="(you will not be able to sign transactions)"
            title="Add PublicKey"
            isActive={accountType === AccountType.PublicKey}
          />
          <SelectItem
            onClick={() => setAccountType(AccountType.Keypair)}
            description="(you will  be able to sign transactions)"
            title="Add Keypair"
            isActive={accountType === AccountType.Keypair}
            isLast
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddAccount;
