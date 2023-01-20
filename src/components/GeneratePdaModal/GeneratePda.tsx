import React, { FC, useCallback, useMemo, useState } from "react";
import AddButton from "../AddButton/AddButton";
import ExitButton from "../Buttons/ExitButton";
import SubmitButton from "../Buttons/SubmitButton";
import Modal from "../Modal/Modal";
import "./GeneratePda.scss";
import close from "../../assets/close.svg";
import Select from "react-select";
import { customStylesSelect } from "../../utilities/methods/styles";
import { SeedType } from "../../enums/common.enums";
import { generateCustomPda } from "../../utilities/methods/programs";
import { PublicKey } from "@solana/web3.js";
import { ISeedData } from "../../interface/programs.interface";
const GeneratePda: FC<{
  programId: string;

  closeModal: () => void;
  handlePdaCreated: (pdaData: {
    pda: PublicKey;
    bump: number;
    seedsData: ISeedData[];
  }) => void;
  seedsData: ISeedData[];
}> = ({ programId, closeModal, handlePdaCreated, seedsData }) => {
  const [seeds, setSeeds] = useState<ISeedData[]>(seedsData);

  const [errors, setErrors] = useState<number[]>([]);

  const setSeed = (e: any, index: number) => {
    const addedSeeds = [...seeds];
    addedSeeds[index] = { ...addedSeeds[index], seed: e.target.value };
    setSeeds(addedSeeds);
  };

  const changeSeedType = (e: any, index: number) => {
    const addedSeeds = [...seeds];
    addedSeeds[index] = { ...addedSeeds[index], type: e.label };
    setSeeds(addedSeeds);
  };

  const handleSubmit = useCallback(() => {
    try {
      const emptyType = seeds.findIndex((seed) => seed.type === "");
      if (emptyType > 0) {
        setErrors((prevValue) => [...prevValue, emptyType]);
        return;
      }
      const generatedPda = generateCustomPda(seeds, programId);
      handlePdaCreated({
        bump: generatedPda[1],
        pda: generatedPda[0],
        seedsData: seeds,
      });
      closeModal();
    } catch (error: any) {
      setErrors((prevValue) => [...prevValue, +error.message]);
    }
  }, [seeds, errors]);

  const mapSeeds = useMemo(() => {
    return seeds.map((seed, index) => {
      return (
        <div className="generate-pda__seed-item">
          <img
            src={close}
            alt="close"
            onClick={() =>
              setSeeds((prevValue) => [
                ...prevValue.filter((_seed, ind) => ind !== index),
              ])
            }
          />
          <div className="generate-pda__pda-data">
            <div className="generate-pda__label-input">
              <label htmlFor="">Seed #{index + 1}</label>
              <input
                type="text"
                value={seed.seed}
                onChange={(e) => setSeed(e, index)}
              />
              {errors && !!errors.find((err) => err === index) && (
                <p className="generate-pda__error">
                  {errors.find((err) => err === index)}
                </p>
              )}
            </div>
            <Select
              defaultInputValue={seed.type}
              styles={customStylesSelect}
              onChange={(e) => changeSeedType(e, index)}
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
            onClick={() =>
              setSeeds((prevValue) => [
                ...prevValue,
                {
                  seed: "",
                  type: "",
                  index: seeds[seeds.length - 1]?.index + 1,
                },
              ])
            }
            title="Add new seed"
            isGreen
          />
        </div>
        <div className="generate-pda__buttons">
          <ExitButton label="Exit" onClick={closeModal} />
          <SubmitButton label="Generate" onClick={handleSubmit} type="button" />
        </div>
      </div>
    </Modal>
  );
};

export default GeneratePda;
