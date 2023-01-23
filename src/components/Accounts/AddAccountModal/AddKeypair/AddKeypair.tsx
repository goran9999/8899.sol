import { Keypair } from "@solana/web3.js";
import { FieldArray, FieldArrayRenderProps, useFormikContext } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { KeypairType } from "../../../../enums/common.enums";
import { AccountsFormikContext } from "../../../../interface/account.interface";
import { decodeKeypair } from "../../../../utilities/helpers";
import AddButton from "../../../AddButton/AddButton";
import Chip from "../../../Chip/Chip";
import FormikField from "../../../FormikField/FormikField";
import "./AddKeypair.scss";
import GrindKeypair from "./GrindKeypair/GrindKeypair";
const AddKeypair = () => {
  const [keypairType, setKeypairType] = useState(KeypairType.UserDefine);

  const { values, setFieldValue } = useFormikContext<AccountsFormikContext>();

  const [error, setError] = useState<string>();

  useEffect(() => {
    createKeypair(values.secretKeys[0].keypair, 0);
  }, [values.secretKeys]);

  const createKeypair = (value: string, index: number) => {
    try {
      setError(undefined);
      const removedWhitespace = value.replace(/\s+/g, "");
      const parsedValue = decodeKeypair(removedWhitespace);
      const kp = Keypair.fromSecretKey(
        new Uint8Array(parsedValue.slice(0, parsedValue.length - 1))
      );
      setFieldValue(`secretKeys.${index}.pubkey`, kp.publicKey.toString());
    } catch (error: any) {
      setError(error.message);
    }
  };

  const renderKeypairs = useMemo(() => {
    return values.secretKeys.map((sc, index) => {
      return (
        <div key={sc.pubkey.toString()}>
          {keypairType === KeypairType.UserDefine ? (
            <div className="add-keypair__secret-key" key={index}>
              <FormikField
                name={`secretKeys.${index}.keypair`}
                type="textarea"
                placeholder="Add secret key"
              />
              <div className="add-keypair__alias-pubkey">
                <FormikField
                  name={`secretKeys.${index}.pubkey`}
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
              {error && <p className="add-keypair__error">{error}</p>}
            </div>
          ) : (
            <div className="add-keypair__grind" key={index}>
              {values.secretKeys.map((_sc, index) => {
                return (
                  <div className="add-keypair__item" key={index}>
                    <FormikField
                      name={`secretKeys.${index}.pubkey`}
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
        </div>
      );
    });
  }, [values, keypairType]);

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
              <div className="add-keypair__items">{renderKeypairs}</div>
              {/* <AddButton
                title="Add new account"
                onClick={() => addNewKeypair(arrayHelpers)}
              /> */}
            </div>
          );
        }}
      />
    </div>
  );
};

export default AddKeypair;
