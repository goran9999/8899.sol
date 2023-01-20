import React, { FC, useState } from "react";
import { IProgramData } from "../../../../../interface/programs.interface";
import GeneratePda from "../../../../GeneratePdaModal/GeneratePda";
import "./AccountDeserialization.scss";
const AccountDeserialization: FC<{ programId: string }> = ({ programId }) => {
  const [isGeneratePdaModalVisible, toggleIsGeneratePdaVisible] =
    useState(false);
  return (
    <div className="account-deserialization">
      <h2>Account fetching</h2>
      <div className="account-deserialization__deserialize">
        <p>Account key</p>
        <input type="text" />
        <button
          onClick={() => toggleIsGeneratePdaVisible(true)}
          className="account-deserialization__generate-pda"
        >
          Generate PDA
        </button>
        <button className="account-deserialization__load">Load</button>
      </div>
      {isGeneratePdaModalVisible && (
        <GeneratePda
          closeModal={() => toggleIsGeneratePdaVisible(false)}
          programId={programId}
        />
      )}
      <textarea />
    </div>
  );
};

export default AccountDeserialization;
