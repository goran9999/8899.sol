import React, { FC, useMemo } from "react";
import { InstructionArgType } from "../../../../enums/common.enums";
import { IInstruction } from "../../../../interface/programs.interface";
import FormikField from "../../../FormikField/FormikField";
import "./InstructionData.scss";
const InstructionData: FC<{ instruction: IInstruction }> = ({
  instruction,
}) => {
  const getElementByArgType = (
    name: string,
    arg: InstructionArgType,
    index: number
  ) => {
    let type = "";

    switch (arg) {
      case InstructionArgType.PublicKey:
      case InstructionArgType.String:
      case InstructionArgType.bytes:
        type = "text";
        break;
      case InstructionArgType.Defined:
        type = "textarea";
        break;
      default:
        {
          type = "number";
        }
        return (
          <div className="instruction-data__field">
            <FormikField
              name={`instructionData.${index}`}
              type={type}
              placeholder={`${name}(${arg.toString().split(" ")[0]})`}
            />
          </div>
        );
    }
  };

  const renderFields = useMemo(() => {
    return instruction.args.map((arg: any, index: number) => {
      return getElementByArgType(
        arg.name,
        arg.type as InstructionArgType,
        index
      );
    });
  }, [instruction]);
  return (
    <div className="instruction-data">
      <h2>Instruction data:</h2>
      <div className="instruction-data__fields">{renderFields}</div>
    </div>
  );
};

export default InstructionData;
