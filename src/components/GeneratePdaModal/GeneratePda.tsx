import React, { FC, useMemo, useState } from "react";
import AddButton from "../AddButton/AddButton";
import ExitButton from "../Buttons/ExitButton";
import SubmitButton from "../Buttons/SubmitButton";
import Modal from "../Modal/Modal";
import "./GeneratePda.scss";
import close from "../../assets/close.svg";
import Select from "react-select";
import { customStylesSelect } from "../../utilities/methods/styles";
import { SeedType } from "../../enums/common.enums";
const GeneratePda: FC<{ programId: string; closeModal: () => void }> = ({
  programId,
  closeModal,
}) => {
  const [seeds, setSeeds] = useState<string[]>([""]);

  const setSeed = (e: any, index: number) => {
    const addedSeeds = [...seeds];
    seeds[index] = e.target.value;
    setSeeds(addedSeeds);
  };

  const mapSeeds = useMemo(() => {
    return seeds.map((seed, index) => {
      return (
        <div className="generate-pda__seed-item">
          <img
            src={close}
            alt="close"
            onClick={() =>
              setSeeds((prevValue) => [
                ...prevValue.filter(
                  (_seed: string, ind: number) => ind !== index
                ),
              ])
            }
          />
          <div className="generate-pda__pda-data">
            <div className="generate-pda__label-input">
              <label htmlFor="">Seed #{index + 1}</label>
              <input
                type="text"
                value={seed}
                onChange={(e) => setSeed(e, index)}
              />
            </div>
            <Select
              styles={customStylesSelect}
              options={Object.keys(SeedType).map((val) => {
                return { label: val };
              })}
            />
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
