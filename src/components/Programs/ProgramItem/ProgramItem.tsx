import React, { FC, useMemo, useState } from "react";
import { IProgramData } from "../../../interface/programs.interface";
import arrowDownGreen from "../../../assets/arrowDownGreen.svg";
import warning from "../../../assets/warning.svg";
import check from "../../../assets/check.svg";
import "./ProgramItem.scss";
import { ProgramInfoType } from "../../../enums/common.enums";
import ProgramAccountItem from "../ProgramAccounts/ProgramAccountItem/ProgramAccountItem";
import Chip from "../../Chip/Chip";
import arrowBlack from "../../../assets/arrowBlack.svg";
import Instructions from "../ProgramInstructions/Instructions";
const ProgramItem: FC<{ program: IProgramData }> = ({ program }) => {
  const [isExpanded, toggleIsExpanded] = useState(false);
  const [programInfoType, setProgramInfoType] = useState(
    ProgramInfoType.Accounts
  );

  const renderAccounts = useMemo(() => {
    return program.accounts.map((acc) => {
      return (
        <ProgramAccountItem account={acc} key={acc.name} program={program} />
      );
    });
  }, [program]);

  return (
    <div className="program">
      <div className="program__collapsed">
        <div className="program__data">
          <div className="program__id">
            <div>
              <p>Program ID:</p>
              <p>{program.programId.toString()}</p>
            </div>
            <img src={program.isActive ? check : warning} alt="programIcon" />
          </div>
          {program.programAlias && <p>Program alias:{program.programAlias}</p>}
          {program.totalSize && <p>Total size:{program.totalSize} bytes</p>}
        </div>
        <img
          onClick={() => toggleIsExpanded((prevValue) => !prevValue)}
          src={arrowDownGreen}
          alt="arrowDown"
        />
      </div>
      {isExpanded && (
        <div className="program__data-type">
          <Chip
            first
            isActive={programInfoType === ProgramInfoType.Accounts}
            text="Accounts"
            onClick={() => setProgramInfoType(ProgramInfoType.Accounts)}
          />
          <Chip
            isActive={programInfoType === ProgramInfoType.Instructions}
            text="Instructions"
            onClick={() => setProgramInfoType(ProgramInfoType.Instructions)}
          />
          <Chip
            last
            isActive={programInfoType === ProgramInfoType.Events}
            text="Events"
            onClick={() => setProgramInfoType(ProgramInfoType.Events)}
          />
        </div>
      )}
      {programInfoType === ProgramInfoType.Accounts && isExpanded && (
        <div className="program__accounts">{renderAccounts}</div>
      )}
      {programInfoType === ProgramInfoType.Instructions && isExpanded && (
        <Instructions program={program} />
      )}
    </div>
  );
};

export default ProgramItem;
