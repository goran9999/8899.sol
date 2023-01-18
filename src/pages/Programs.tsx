import React, { useState } from "react";
import SubmitButton from "../components/Buttons/SubmitButton";
import AddNewProgram from "../components/Programs/AddNewProgram/AddNewProgram";
import "./Programs.scss";
const Programs = () => {
  const [isModalVisible, toggleIsModalVisible] = useState(false);
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
    </div>
  );
};

export default Programs;
