import { FieldArray, FieldArrayRenderProps, useFormikContext } from "formik";
import React, { FC, useMemo } from "react";
import {
  IAccount,
  IInstructionForm,
} from "../../../interface/programs.interface";
import AddButton from "../../AddButton/AddButton";
import AssertionItem from "./AssertionItem/AssertionItem";
import "./Assertions.scss";
const Assertions: FC<{ accounts: IAccount[] }> = ({ accounts }) => {
  const { values } = useFormikContext<IInstructionForm>();

  const addNewAssertion = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.push({ publicKey: "", assert: "", assertionData: "" });
  };

  const removeAssertion = (
    index: number,
    arrayHelpers: FieldArrayRenderProps
  ) => {
    arrayHelpers.handleRemove(index);
  };

  return (
    <div className="assertions">
      <h2>Assertions</h2>
      <FieldArray
        render={(arrayHelpers) => {
          return (
            <div className="assertions__item">
              {values.assertions.map((assertion, index) => {
                return (
                  <AssertionItem
                    key={index}
                    index={index}
                    accountsWithTypes={accounts}
                    accounts={values.accounts}
                    removeAssertion={(index: number) =>
                      removeAssertion(index, arrayHelpers)
                    }
                  />
                );
              })}

              <AddButton
                title="Add new assertion"
                isGreen
                onClick={() => addNewAssertion(arrayHelpers)}
              />
            </div>
          );
        }}
        name="assertions"
      />
    </div>
  );
};

export default Assertions;
