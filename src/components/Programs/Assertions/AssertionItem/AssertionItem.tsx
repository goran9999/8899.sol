import React, { FC, useState } from "react";
import FormikField from "../../../FormikField/FormikField";
import close from "../../../../assets/close.svg";
import {
  IAccount,
  IInstructionForm,
} from "../../../../interface/programs.interface";
import { AssertionType } from "../../../../enums/common.enums";
import Chip from "../../../Chip/Chip";
import Select from "react-select";
import { customStylesSelectAccount } from "../../../../utilities/methods/styles";
import { PublicKey } from "@solana/web3.js";
import { useFormikContext } from "formik";
import "./AssertionItem.scss";
const AssertionItem: FC<{
  index: number;
  accounts: { name: string; publicKey: PublicKey; bump?: number }[];
  accountsWithTypes: IAccount[];
  removeAssertion: (index: number) => void;
}> = ({ accounts, index, accountsWithTypes, removeAssertion }) => {
  const [assertionType, setAssertionType] = useState(AssertionType.Custom);

  const { setFieldValue } = useFormikContext<IInstructionForm>();

  const [selectedAccount, setSelectedAccount] = useState<IAccount>();

  console.log(selectedAccount, accountsWithTypes);

  return (
    <div className="assertion-item">
      <div className="assertion-item__type-icon">
        <div className="assertion-item__type">
          <Chip
            first
            isActive={assertionType === AssertionType.Custom}
            onClick={() => setAssertionType(AssertionType.Custom)}
            text="Your custom assertion"
          />
          <Chip
            isActive={assertionType === AssertionType.SolBalance}
            onClick={() => setAssertionType(AssertionType.SolBalance)}
            text="Assert Lamport balance"
          />
          <Chip
            last
            isActive={assertionType === AssertionType.TokenBalance}
            onClick={() => setAssertionType(AssertionType.TokenBalance)}
            text="Assert Token balance"
          />
        </div>
        <img
          onClick={() => removeAssertion(index)}
          src={close}
          alt="closeIcon"
        />
      </div>
      <div
        className={`${
          assertionType === AssertionType.Custom
            ? "assertion-item__fields assertion-item__fields--expanded"
            : "assertion-item__fields"
        }`}
      >
        <FormikField
          name={`assertions.${index}.publicKey`}
          type="text"
          placeholder="Account key"
        />
        {assertionType === AssertionType.Custom && (
          <Select
            styles={{ ...customStylesSelectAccount }}
            options={accounts.map((acc) => {
              return {
                label: `${acc.name}(${
                  acc.publicKey ? acc?.publicKey?.toString() : ""
                })`,
                value: acc?.publicKey,
              };
            })}
            isOptionDisabled={(option) => !!!option.value}
            onChange={(e) => {
              setFieldValue(
                `assertions.${index}.publicKey`,
                e?.value.toString()
              );
              setSelectedAccount(
                accountsWithTypes.find(
                  (acc) =>
                    acc.name.toLowerCase() ===
                    e?.label.split("(")[0].toLowerCase()
                )
              );
            }}
          />
        )}
        {assertionType === AssertionType.Custom && (
          <Select
            styles={customStylesSelectAccount}
            options={selectedAccount?.fields.map((field: any) => {
              return {
                label: field.name,
                value: field.type,
              };
            })}
            onChange={(e) =>
              setFieldValue(`assertions.${index}.assertionData`, e)
            }
          />
        )}
        <FormikField
          name={`assertions.${index}.assert`}
          type={assertionType === AssertionType.Custom ? "text" : "number"}
          placeholder={`${
            assertionType === AssertionType.Custom
              ? "Your assertion"
              : assertionType === AssertionType.SolBalance
              ? "SOL balance assertion"
              : "Token balance assertion"
          }`}
        />
      </div>
    </div>
  );
};

export default AssertionItem;
