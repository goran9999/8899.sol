import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  IInstruction,
  IInstructionForm,
  IProgramData,
} from "../../../../interface/programs.interface";
import arrowDownGreen from "../../../../assets/arrowDownGreen.svg";
import InstructionData from "../InstructionData/InstructionData";
import InstructionAccounts from "../InstructionAccounts/InstructionAccounts";
import trash from "../../../../assets/trash.svg";
import "./ProgramInstructionItem.scss";
import { Form, Formik, useFormikContext } from "formik";
import formConfig from "../formConfig";
import arrowBlack from "../../../../assets/arrowBlack.svg";
import { validateProgramInstruction } from "../validator";
import {
  evaluateAssertions,
  executeProgramInstruction,
} from "../../../../utilities/methods/programs";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import Assertions from "../../Assertions/Assertions";
import AssertionResults from "../../Assertions/AssertionResults/AssertionResults";
import { AccountContext } from "../../../../context/accountStore";
const ProgramInstructionItem: FC<{
  instruction: IInstruction;
  programData: IProgramData;
}> = ({ instruction, programData }) => {
  const [isCollapsed, toggleIsCollapsed] = useState(true);
  const { accounts, addAccounts } = useContext(AccountContext);

  const [logsColor, setLogsColor] = useState("green");
  const [assertionResults, setAssertionResults] = useState<
    { actual: string; predicted: string; isMatching: boolean }[]
  >([]);

  const wallet = useAnchorWallet();

  const handleSubmit = async (values: any) => {
    try {
      setAssertionResults([]);
      const signer = values.accounts.find((acc: any) => acc.isSigner);

      const signerAccountData = accounts.find(
        (s) => s.pubkey.toString() === signer.publicKey
      );
      if (
        !signerAccountData &&
        signer.publicKey !== wallet?.publicKey.toString()
      )
        throw new Error("Cannot find signer");

      const programLogs = await executeProgramInstruction(
        programData,
        values.accounts,
        values.instructionData,
        signerAccountData ?? signer.publicKey,
        instruction,
        signer.publicKey === wallet?.publicKey.toString() ? wallet : undefined
      );

      let logs = "";
      programLogs?.forEach((pl) => (logs = logs + `${pl},\n`));
      setLogsColor("green");
      setProgramLogs(logs);
      const assertionResults = await evaluateAssertions(
        values.assertions,
        programData.program
      );
      setAssertionResults(assertionResults);
    } catch (error: any) {
      setLogsColor("red");
      setProgramLogs(JSON.stringify(error.message));
    }
  };

  const [programLogs, setProgramLogs] = useState("");

  return (
    <>
      <Formik
        initialValues={formConfig}
        onSubmit={handleSubmit}
        validate={(values) => validateProgramInstruction(values)}
      >
        {({ values, setFieldValue, resetForm }) => (
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
                    {assertionResults.length > 0 && (
                      <AssertionResults
                        assertions={assertionResults}
                        deleteResults={() => {
                          setAssertionResults([]);
                          setProgramLogs("");
                        }}
                      />
                    )}
                    <h3>Program Logs</h3>
                    <textarea style={{ color: logsColor }} value={programLogs}>
                      {programLogs}
                    </textarea>
                  </div>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProgramInstructionItem;
