import { FieldArray, FieldArrayRenderProps, useFormikContext } from "formik";
import { AccountsFormikContext } from "../../../../interface/account.interface";
import AddButton from "../../../AddButton/AddButton";
import FormikField from "../../../FormikField/FormikField";
import close from "../../../../assets/close.svg";
import "./AddPubkey.scss";
const AddPubkey = () => {
  const addNewAccount = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.push({
      pubkey: "",
      alias: "",
    });
  };

  const removeAccount = (
    arrayHelpers: FieldArrayRenderProps,
    index: number
  ) => {
    arrayHelpers.remove(index);
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
                    <img
                      src={close}
                      alt="close"
                      onClick={() => removeAccount(arrayHelpers, index)}
                    />
                    <div className="add-pubkey__item-data">
                      <FormikField
                        name={`pubkeys.${index}.pubkey`}
                        type="text"
                        placeholder="Add account PublicKey"
                      />

                      <FormikField
                        name={`pubkeys.${index}.alias`}
                        type="text"
                        placeholder="Account alias"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }}
      ></FieldArray>
    </div>
  );
};

export default AddPubkey;
