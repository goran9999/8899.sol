import { FieldArray, FieldArrayRenderProps, useFormikContext } from "formik";
import React, { useState } from "react";
import { KeypairType } from "../../../../enums/common.enums";
import { AccountsFormikContext } from "../../../../interface/account.interface";
import AddButton from "../../../AddButton/AddButton";
import Chip from "../../../Chip/Chip";
import FormikField from "../../../FormikField/FormikField";
import "./AddKeypair.scss";
import GrindKeypair from "./GrindKeypair/GrindKeypair";
const AddKeypair = () => {
  const [keypairType, setKeypairType] = useState(KeypairType.UserDefine);

  const { values } = useFormikContext<AccountsFormikContext>();

  const addNewKeypair = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.push({
      secretKey: "",
      publicKey: "",
      alias: "",
    });
  };

  return (
    <div className="add-keypair">
      <div className="add-keypair__chips">
        <Chip
          isActive={keypairType === KeypairType.UserDefine}
          onClick={() => setKeypairType(KeypairType.UserDefine)}
          first
          text="Your keypair"
        />
        <Chip
          isActive={keypairType === KeypairType.Grind}
          onClick={() => setKeypairType(KeypairType.Grind)}
          last
          text="Generate keypair"
        />
      </div>
      <FieldArray
        name="secretKeys"
        render={(arrayHelpers) => {
          return (
            <div>
              <div className="add-keypair__items">
                {values.secretKeys.map((sc, index) => {
                  return (
                    <>
                      {keypairType === KeypairType.UserDefine ? (
                        <div className="add-keypair__secret-key">
                          <FormikField
                            name={`secretKeys.${index}.secretKey`}
                            type="textarea"
                            placeholder="Add secret key"
                          />
                          <div className="add-keypair__alias-pubkey">
                            <FormikField
                              name={`secretKeys.${index}.publicKey`}
                              type="text"
                              disabled
                              placeholder="Account pubkey"
                            />
                            <FormikField
                              name={`secretKeys.${index}.alias`}
                              type="text"
                              placeholder="Account alias"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="add-keypair__grind">
                          {values.secretKeys.map((_sc, index) => {
                            return (
                              <div className="add-keypair__item">
                                <FormikField
                                  name={`secretKeys.${index}.publicKey`}
                                  type={"text"}
                                  disabled
                                  placeholder="Account pubkey"
                                />
                                <GrindKeypair index={index} />;
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
              <AddButton
                title="Add new account"
                onClick={() => addNewKeypair(arrayHelpers)}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default AddKeypair;
