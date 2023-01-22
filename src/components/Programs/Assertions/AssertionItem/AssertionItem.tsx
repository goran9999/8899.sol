import React, { FC, useEffect, useState } from "react";
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

  useEffect(() => {
    setFieldValue(`assertions.${index}.type`, AssertionType.Custom);
  }, []);

  return (
    <div className="assertion-item">
      <div className="assertion-item__type-icon">
        <div className="assertion-item__type">
          <Chip
            first
            isActive={assertionType === AssertionType.Custom}
            onClick={() => {
              setAssertionType(AssertionType.Custom);
              setFieldValue(`assertions.${index}.type`, AssertionType.Custom);
            }}
            text="Your custom assertion"
          />
          <Chip
            isActive={assertionType === AssertionType.SolBalance}
            onClick={() => {
              setAssertionType(AssertionType.SolBalance);
              setFieldValue(
                `assertions.${index}.type`,
                AssertionType.SolBalance
              );
            }}
            text="Assert Lamport balance"
          />
          <Chip
            last
            isActive={assertionType === AssertionType.TokenBalance}
            onClick={() => {
              setAssertionType(AssertionType.TokenBalance);
              setFieldValue(
                `assertions.${index}.type`,
                AssertionType.TokenBalance
              );
            }}
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
        {assertionType === AssertionType.Custom && (
          <Select
            placeholder="Account"
            styles={{ ...customStylesSelectAccount }}
            options={accountsWithTypes.map((acc) => {
              return {
                label: acc.name,
              };
            })}
            onChange={(e) => {
              setFieldValue(`assertions.${index}.accountName`, e?.label);
              setSelectedAccount(
                accountsWithTypes.find((acc) => acc.name === e?.label)
              );
            }}
          />
        )}

        {assertionType === AssertionType.Custom && (
          <Select
            isDisabled={!!!selectedAccount}
            placeholder="Account field"
            styles={customStylesSelectAccount}
            options={selectedAccount?.fields?.fields.map((field: any) => {
              return {
                label: field.name,
                value: field.type,
              };
            })}
            onChange={(e) =>
              setFieldValue(
                `assertions.${index}.assertionData`,
                (e as any).label
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default AssertionItem;
