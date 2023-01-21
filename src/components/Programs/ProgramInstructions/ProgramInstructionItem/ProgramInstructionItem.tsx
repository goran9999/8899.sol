import React, { FC, useState } from "react";
import {
  IInstruction,
  IProgramData,
} from "../../../../interface/programs.interface";
import arrowDownGreen from "../../../../assets/arrowDownGreen.svg";
import InstructionData from "../InstructionData/InstructionData";
import InstructionAccounts from "../InstructionAccounts/InstructionAccounts";
import "./ProgramInstructionItem.scss";
import { Form, Formik } from "formik";
import formConfig from "../formConfig";
import arrowBlack from "../../../../assets/arrowBlack.svg";
import { validateProgramInstruction } from "../validator";
import { executeProgramInstruction } from "../../../../utilities/methods/programs";
import { accountsStore } from "../../../../context/accountStore";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import Assertions from "../../Assertions/Assertions";
const ProgramInstructionItem: FC<{
  instruction: IInstruction;
  programData: IProgramData;
}> = ({ instruction, programData }) => {
  const [isCollapsed, toggleIsCollapsed] = useState(true);
  const { accounts } = accountsStore.getState();

  const wallet = useAnchorWallet();
  const handleSubmit = async (values: any) => {
    try {
      const signer = values.accounts.find((acc: any) => acc.isSigner);

      const signerAccountData = accounts.find(
        (s) => s.pubkey.toString() === signer.publicKey
      );
      if (!signerAccountData) throw new Error("Cannot find signer");
      const programLogs = await executeProgramInstruction(
        programData,
        values.accounts,
        values.instructionData,
        signerAccountData,
        instruction,
        signerAccountData.pubkey.toString() === wallet?.publicKey.toString()
          ? wallet
          : undefined
      );
      if (!programLogs) throw new Error("No program logs");
      let logs = "";
      programLogs.forEach((pl) => (logs = logs + `${pl},\n`));
      setProgramLogs(logs);
    } catch (error: any) {
      setProgramLogs(error.message);
    }
  };

  const [programLogs, setProgramLogs] = useState("");

  return (
    <Formik
      initialValues={formConfig}
      onSubmit={handleSubmit}
      validate={(values) => validateProgramInstruction(values)}
    >
      {({ values }) => (
        <Form>
          <div className="program-instruction">
            <div className="program-instruction__collapsed">
              <h2>{instruction.name}</h2>
              <img
                onClick={() => toggleIsCollapsed((prevValue) => !prevValue)}
                src={arrowDownGreen}
                alt="arrowDown"
              />
            </div>
            {!isCollapsed && (
              <div className="program-instruction__data">
                <InstructionData instruction={instruction} />
                <InstructionAccounts accounts={instruction.accounts} />
              </div>
            )}
            {!isCollapsed && <Assertions accounts={programData.accounts} />}
            {!isCollapsed && (
              <div className="program__execution">
                <button
                  type="button"
                  onClick={() => handleSubmit(values)}
                  className="program__trigger-instruction"
                >
                  <img src={arrowBlack} alt="arrow" />
                </button>
                <div className="program-instruction__logs">
                  <h3>Program Logs</h3>
                  <textarea value={programLogs}>{programLogs}</textarea>
                </div>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProgramInstructionItem;
