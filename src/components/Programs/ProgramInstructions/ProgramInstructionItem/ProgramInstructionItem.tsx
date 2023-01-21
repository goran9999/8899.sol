import React, { FC, useState } from "react";
import { IInstruction } from "../../../../interface/programs.interface";
import arrowDownGreen from "../../../../assets/arrowDownGreen.svg";
import InstructionData from "../InstructionData/InstructionData";
import InstructionAccounts from "../InstructionAccounts/InstructionAccounts";
import "./ProgramInstructionItem.scss";
import { Form, Formik } from "formik";
import formConfig from "../formConfig";
import arrowBlack from "../../../../assets/arrowBlack.svg";
import { validateProgramInstruction } from "../validator";
const ProgramInstructionItem: FC<{ instruction: IInstruction }> = ({
  instruction,
}) => {
  const [isCollapsed, toggleIsCollapsed] = useState(true);

  const handleSubmit = (values: any) => {
    console.log(values);
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
