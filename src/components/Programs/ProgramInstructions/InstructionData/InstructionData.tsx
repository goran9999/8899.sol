import { useFormikContext } from "formik";
import React, { FC, useEffect, useMemo } from "react";
import { InstructionArgType } from "../../../../enums/common.enums";
import {
  IInstruction,
  IInstructionForm,
} from "../../../../interface/programs.interface";
import FormikField from "../../../FormikField/FormikField";
import "./InstructionData.scss";
const InstructionData: FC<{ instruction: IInstruction }> = ({
  instruction,
}) => {
  const { setFieldValue } = useFormikContext<IInstructionForm>();

  useEffect(() => {
    instruction.args.map((arg: any, index: number) => {
      setFieldValue(`instructionData.${index}.type`, arg.type);
      setFieldValue(`instructionData.${index}.name`, arg.name);
    });
  }, [instruction]);

  const getElementByArgType = (
    name: string,
    arg: InstructionArgType,
    index: number
  ) => {
    let type = "";
    let additionalExplanation = "";

    switch (arg) {
      case InstructionArgType.PublicKey:
      case InstructionArgType.String:
        type = "text";
        break;
      case InstructionArgType.bytes:
        type = "textarea";
        additionalExplanation = ", split bytes by comma(,)";
        break;
      case InstructionArgType.defined:
        type = "textarea";
        break;
      default: {
        type = "number";
      }
    }
    return (
      <div className="instruction-data__field">
        <FormikField
          name={`instructionData.${index}.value`}
          type={type}
          placeholder={`${name}(${
            arg.toString().split(" ")[0]
          }${additionalExplanation})`}
        />
      </div>
    );
  };

  const renderFields = useMemo(() => {
    return instruction.args.map((arg: any, index: number) => {
      return getElementByArgType(
        arg.name,
        typeof arg.type === "object"
          ? InstructionArgType.defined
          : (arg.type as InstructionArgType),
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
