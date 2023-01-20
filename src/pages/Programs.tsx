import React, { useState } from "react";
import SubmitButton from "../components/Buttons/SubmitButton";
import AddNewProgram from "../components/Programs/AddNewProgram/AddNewProgram";
import ProgramItem from "../components/Programs/ProgramItem/ProgramItem";
import { programsStore } from "../context/programsStore";
import "./Programs.scss";
const Programs = () => {
  const [isModalVisible, toggleIsModalVisible] = useState(false);
  const { programs } = programsStore.getState();
  return (
    <div className="programs">
      <div className="programs__header">
        <h1>Your programs</h1>
        <SubmitButton
          label="Add new program"
          onClick={() => {
            toggleIsModalVisible(true);
          }}
        />
      </div>
      {isModalVisible && (
        <AddNewProgram closeModal={() => toggleIsModalVisible(false)} />
      )}
      <div className="programs__program-items">
        {programs.map((p) => {
          return <ProgramItem program={p} key={p.programId.toString()} />;
        })}
      </div>
    </div>
  );
};

export default Programs;
