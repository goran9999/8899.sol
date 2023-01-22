import React, { FC, useMemo } from "react";
import { IProgramData } from "../../../interface/programs.interface";
import ProgramInstructionItem from "./ProgramInstructionItem/ProgramInstructionItem";
import "./Instructions.scss";
const Instructions: FC<{ program: IProgramData }> = ({ program }) => {
  const renderProgramInstructions = useMemo(() => {
    return program.instructions.map((ix) => {
      return (
        <ProgramInstructionItem
          instruction={ix}
          key={ix.name}
          programData={program}
        />
      );
    });
  }, [program]);

  return <div className="instructions">{renderProgramInstructions}</div>;
};

export default Instructions;
