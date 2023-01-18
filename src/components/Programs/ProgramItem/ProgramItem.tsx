import React, { FC, useState } from "react";
import { IProgramData } from "../../../interface/programs.interface";
import arrowDownGreen from "../../../assets/arrowDownGreen.svg";
import warning from "../../../assets/warning.svg";
import check from "../../../assets/check.svg";
const ProgramItem: FC<{ program: IProgramData }> = ({ program }) => {
  const [isExpanded, toggleIsExpanded] = useState(false);

  return (
    <div className="program">
      <div className="program__data">
        <div className="program__id">
          <div>
            <p>Program ID</p>
            <p>{program.programId.toString()}</p>
          </div>
          <img src={program.isActive ? check : warning} alt="programIcon" />
        </div>
        {program.programAlias && <p>Program alias:{program.programAlias}</p>}
        {program.totalSize && <p>Total size:{program.totalSize} bytes</p>}
      </div>
      <img src={arrowDownGreen} alt="arrowDown" />
    </div>
  );
};

export default ProgramItem;
