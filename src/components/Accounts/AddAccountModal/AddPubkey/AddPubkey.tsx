import { FieldArray, FieldArrayRenderProps, useFormikContext } from "formik";
import { AccountsFormikContext } from "../../../../interface/account.interface";
import AddButton from "../../../AddButton/AddButton";
import FormikField from "../../../FormikField/FormikField";
import "./AddPubkey.scss";
const AddPubkey = () => {
  const addNewAccount = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.push({
      pubkey: "",
      pubkeyAlias: "",
    });
  };

  const { values } = useFormikContext<AccountsFormikContext>();

  return (
    <div className="add-pubkey__wrapper">
      <FieldArray
        name="pubkeys"
        render={(arrayHelpers) => {
          return (
            <div className="add-pubkey">
              {values.pubkeys.map((_value, index) => {
                return (
                  <div className="add-pubkey__item-wrapper" key={index}>
                    <FormikField
                      name={`pubkeys.${index}.pubkey`}
                      type="text"
                      placeholder="Add account PublicKey"
                    />

                    <FormikField
                      name={`pubkeys.${index}.pubkeyAlias`}
                      type="text"
                      placeholder="Account alias"
                    />
                  </div>
                );
              })}
              <AddButton
                isGreen
                onClick={() => addNewAccount(arrayHelpers)}
                title="Add new account"
              />
            </div>
          );
        }}
      ></FieldArray>
    </div>
  );
};

export default AddPubkey;
