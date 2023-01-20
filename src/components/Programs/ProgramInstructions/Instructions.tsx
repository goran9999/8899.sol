import React, { FC, useMemo } from "react";
import { IProgramData } from "../../../interface/programs.interface";
import ProgramInstructionItem from "./ProgramInstructionItem/ProgramInstructionItem";

const Instructions: FC<{ program: IProgramData }> = ({ program }) => {
  const renderProgramInstructions = useMemo(() => {
    return program.instructions.map((ix) => {
      return <ProgramInstructionItem instruction={ix} key={ix.name} />;
    });
  }, [program]);

  return <div className="instructions">{renderProgramInstructions}</div>;
};

export default Instructions;
