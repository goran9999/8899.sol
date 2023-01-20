import React, { FC, useMemo, useState } from "react";
import AddButton from "../AddButton/AddButton";
import ExitButton from "../Buttons/ExitButton";
import SubmitButton from "../Buttons/SubmitButton";
import Modal from "../Modal/Modal";
import "./GeneratePda.scss";
import close from "../../assets/close.svg";
const GeneratePda: FC<{ programId: string; closeModal: () => void }> = ({
  programId,
  closeModal,
}) => {
  const [seeds, setSeeds] = useState<string[]>([""]);

  const mapSeeds = useMemo(() => {
    return seeds.map((seed, index) => {
      return (
        <div className="generate-pda__seed-item">
          <img
            src={close}
            alt="close"
            onClick={() =>
              setSeeds((prevValue) => [...prevValue.slice(index, 1)])
            }
          />
          <div>
            <label htmlFor="">Seed #{index + 1}</label>
            <input type="text" value={seed} />
          </div>
        </div>
      );
    });
  }, [seeds]);
  return (
    <Modal closeModal={closeModal}>
      <div className="generate-pda">
        <h4>Generate pda</h4>
        <div className="generate-pda__data">
          <div className="generate-pda__program-id">
            <label htmlFor="">Program ID</label>
            <input type="text" disabled value={programId} />
          </div>
          <div className="generate-pda__seeds">{mapSeeds}</div>
          <AddButton
            onClick={() => setSeeds((prevValue) => [...prevValue, ""])}
            title="Add new seed"
            isGreen
          />
        </div>
        <div className="generate-pda__buttons">
          <ExitButton label="Exit" onClick={closeModal} />
          <SubmitButton label="Generate" onClick={() => {}} />
        </div>
      </div>
    </Modal>
  );
};

export default GeneratePda;
