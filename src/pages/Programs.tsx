import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React, { useContext, useEffect, useState } from "react";
import SubmitButton from "../components/Buttons/SubmitButton";
import AddNewProgram from "../components/Programs/AddNewProgram/AddNewProgram";
import ProgramItem from "../components/Programs/ProgramItem/ProgramItem";
import WalletNotConnected from "../components/WalletNotConnected/WalletNotConnected";
import { AccountContext } from "../context/accountStore";
import { programsStore } from "../context/programsStore";
import "./Programs.scss";
const Programs = () => {
  const [isModalVisible, toggleIsModalVisible] = useState(false);
  const { programs } = programsStore.getState();
  const wallet = useAnchorWallet();
  const { accounts, addNewAccount } = useContext(AccountContext);

  useEffect(() => {
    if (accounts.length === 0 && wallet) {
      addNewAccount({ assets: [], pubkey: wallet?.publicKey, solBalance: 0 });
    }
  }, [wallet]);
  return (
    <div className="programs">
      <div className="programs__header">
        <h1>Your programs</h1>
        {wallet && (
          <SubmitButton
            label="Add new program"
            onClick={() => {
              toggleIsModalVisible(true);
            }}
            type="button"
          />
        )}
      </div>
      {isModalVisible && (
        <AddNewProgram closeModal={() => toggleIsModalVisible(false)} />
      )}
      {wallet ? (
        <div className="programs__program-items">
          {programs.map((p) => {
            return <ProgramItem program={p} key={p.programId.toString()} />;
          })}
        </div>
      ) : (
        <WalletNotConnected />
      )}
    </div>
  );
};

export default Programs;
