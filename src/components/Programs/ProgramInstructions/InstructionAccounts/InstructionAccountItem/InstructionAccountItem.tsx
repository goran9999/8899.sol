import { PublicKey } from "@solana/web3.js";
import React, { FC, useState } from "react";
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
const InstructionAccountItem: FC<{
  name: string;
  index: number;
}> = ({ name, index }) => {
  const { programs } = programsStore.getState();

  const [isModalVisible, toggleIsModalVisible] = useState(false);
  const [seedData, setSeedData] = useState<ISeedData[]>([
    { index: index, seed: "", type: SeedType.PublicKey },
  ]);

  const { values, setFieldValue } = useFormikContext<IInstructionForm>();

  const handleGeneratePda = (pdaData: {
    pda: PublicKey;
    bump: number;
    seedsData: ISeedData[];
  }) => {
    setSeedData(pdaData.seedsData);

    setFieldValue(`accounts.${index}.publicKey`, pdaData.pda.toString());
    setFieldValue(`accounts.${index}.bump`, pdaData.bump);
  };

  return (
    <div className="instruction-account">
      <p>{name}:</p>
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
          placeholder={"Program/Sysvar"}
          options={getProgramConfig(programs).map((p) => {
            return { label: p.name, value: p.address };
          })}
        />
        {isModalVisible && (
          <GeneratePda
            closeModal={() => toggleIsModalVisible(false)}
            seedsData={seedData}
            handlePdaCreated={handleGeneratePda}
          />
        )}
        <button
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
