import { PublicKey } from "@solana/web3.js";
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import FormikField from "../../../../FormikField/FormikField";
import Select from "react-select";
import { customStylesSelect } from "../../../../../utilities/methods/styles";
import { getProgramConfig } from "../../constants";
import { programsStore } from "../../../../../context/programsStore";
import GeneratePda from "../../../../GeneratePdaModal/GeneratePda";
import {
  IInstructionForm,
  ISeedData,
} from "../../../../../interface/programs.interface";
import { SeedType } from "../../../../../enums/common.enums";
import "./InstructionAccountItem.scss";
import { useFormikContext } from "formik";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { AccountContext } from "../../../../../context/accountStore";
const InstructionAccountItem: FC<{
  name: string;
  index: number;
  isSigner: boolean;
  isWritable: boolean;
}> = ({ name, index, isSigner, isWritable }) => {
  const { programs } = programsStore.getState();

  const [isModalVisible, toggleIsModalVisible] = useState(false);
  const [seedData, setSeedData] = useState<ISeedData[]>([
    { index: index, seed: "", type: SeedType.PublicKey },
  ]);

  const { accounts } = useContext(AccountContext);

  const { values, setFieldValue } = useFormikContext<IInstructionForm>();

  useEffect(() => {
    setFieldValue(`accounts.${index}.isSigner`, isSigner);
    setFieldValue(`accounts.${index}.name`, name);
  }, []);

  const wallet = useAnchorWallet();

  const handleGeneratePda = (pdaData: {
    pda: PublicKey;
    bump: number;
    seedsData: ISeedData[];
  }) => {
    setSeedData(pdaData.seedsData);

    setFieldValue(`accounts.${index}.publicKey`, pdaData.pda.toString());
    setFieldValue(`accounts.${index}.bump`, pdaData.bump);
  };

  const getSigners = useMemo(() => {
    return [{ label: wallet!.publicKey.toString(), value: wallet?.publicKey }];
  }, [accounts]);

  return (
    <div className="instruction-account">
      <p className="instruction-account__name">{name}:</p>
      <div className="instruction-account__name-address-bump">
        <FormikField
          name={`accounts.${index}.publicKey`}
          type={"text"}
          placeholder="Address"
          className="instruction-account__address"
        />
        <FormikField
          name={`accounts.${index}.bump`}
          type={"number"}
          disabled
          placeholder="Bump"
          className="instruction-account__bump"
        />
      </div>
      <div className="instruction-account__button-select">
        <Select
          styles={customStylesSelect}
          placeholder={`${isSigner ? "Signer" : "Program/Sysvar"}`}
          options={
            isSigner
              ? getSigners
              : getProgramConfig(programs).map((p) => {
                  return { label: p.name, value: p.address };
                })
          }
          onChange={(e) =>
            setFieldValue(`accounts.${index}.publicKey`, e!.value!.toString())
          }
        />
        {isModalVisible && (
          <GeneratePda
            closeModal={() => toggleIsModalVisible(false)}
            seedsData={seedData}
            handlePdaCreated={handleGeneratePda}
            addedAccounts={values.accounts.filter((acc) => acc.publicKey)}
          />
        )}
        <button
          type="button"
          className="instruction-account__generate-pda"
          onClick={() => toggleIsModalVisible(true)}
        >
          Generate PDA
        </button>
      </div>
    </div>
  );
};

export default InstructionAccountItem;
