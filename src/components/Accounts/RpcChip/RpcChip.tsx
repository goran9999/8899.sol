import React, { FC, useMemo } from "react";
import "./RpcChip.scss";
const RpcChip: FC<{
  isActive: boolean;
  text: string;
  onClick: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}> = ({ isActive, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${isActive ? "rpc_chip rpc_chip-active" : "rpc_chip"}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default RpcChip;
