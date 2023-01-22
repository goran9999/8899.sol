import { PublicKey } from "@solana/web3.js";
import React, { FC, useState } from "react";
import { SeedType } from "../../../../../enums/common.enums";
import {
  IAccount,
  IProgramData,
  ISeedData,
} from "../../../../../interface/programs.interface";
import { fetchPdaAccount } from "../../../../../utilities/methods/programs";
import GeneratePda from "../../../../GeneratePdaModal/GeneratePda";
import "./AccountDeserialization.scss";
const AccountDeserialization: FC<{
  program: IProgramData;
  account: IAccount;
}> = ({ program, account }) => {
  const [isGeneratePdaModalVisible, toggleIsGeneratePdaVisible] =
    useState(false);

  const [error, setError] = useState<string>();

  const [stringifiedAccount, setStringifiedAccount] = useState("");

  const [seeds, setSeeds] = useState<ISeedData[]>([
    { seed: "", type: SeedType.PublicKey, index: 0 },
  ]);

  const [pda, setPda] = useState<PublicKey>();
  const [bump, setBump] = useState<number>();

  const handlePdaGenerated = (pdaData: {
    pda: PublicKey;
    bump: number;
    seedsData: ISeedData[];
  }) => {
    setPda(pdaData.pda);
    setBump(pdaData.bump);
    setSeeds(pdaData.seedsData);
  };

  const loadAccountData = async () => {
    try {
      if (!pda) {
        setError("PDA publickey not defined");
        return;
      }
      const accountData = await fetchPdaAccount(pda, account, program.program);
      setStringifiedAccount(JSON.stringify(accountData));
    } catch (error: any) {
      console.log(error);

      setError(error.message);
    }
  };

  return (
    <div className="account-deserialization">
      <h2>Account fetching</h2>
      <div className="account-deserialization__deserialize">
        <p>Account key</p>
        <input
          type="text"
          className="account-deserialization__pda"
          value={pda?.toString()}
        />
        <input
          className="account-deserialization__bump"
          type="number"
          value={bump}
          disabled
        />
        <button
          onClick={() => toggleIsGeneratePdaVisible(true)}
          className="account-deserialization__generate-pda"
        >
          Generate PDA
        </button>
        <button
          className="account-deserialization__load"
          onClick={loadAccountData}
          disabled={!program.isActive}
        >
          Load
        </button>
      </div>
      {error && (
        <p className="account-deserialization__error">
          PDA does not exist or is not owned by your program
        </p>
      )}

      {isGeneratePdaModalVisible && (
        <GeneratePda
          seedsData={seeds}
          handlePdaCreated={handlePdaGenerated}
          closeModal={() => toggleIsGeneratePdaVisible(false)}
          programId={program.programId.toString()}
        />
      )}
      <textarea disabled value={stringifiedAccount} />
    </div>
  );
};

export default AccountDeserialization;
