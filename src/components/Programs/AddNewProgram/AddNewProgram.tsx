import { Form, Formik } from "formik";
import React, { FC, useCallback, useEffect, useState } from "react";
import FormikField from "../../FormikField/FormikField";
import Modal from "../../Modal/Modal";
import "./formConfig";
import formConfig from "./formConfig";
import "./AddNewProgram.scss";
import { validateProgramAdding } from "./validators";
import ExitButton from "../../Buttons/ExitButton";
import SubmitButton from "../../Buttons/SubmitButton";
import { parseAnchorIDL } from "../../../utilities/methods/programs";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { programsStore } from "../../../context/programsStore";
const AddNewProgram: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const wallet = useAnchorWallet();
  const { addProgram } = programsStore.getState();
  const handleSubmit = useCallback((values: any, setFieldError: any) => {
    try {
      let idl = values.idl;
      parseAnchorIDL(idl.trim(), values.programId, wallet!);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  return (
    <Modal closeModal={closeModal}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={formConfig}
        validate={(values) => validateProgramAdding(values)}
        validateOnChange
      >
        {({ values, setFieldError }) => (
          <Form>
            <div className="add-new-program">
              <h2>Add new program</h2>
              <FormikField name="programId" type="text" label="Program ID" />
              <FormikField
                name="programAlias"
                type="text"
                label="Program alias"
              />
              <FormikField name="idl" type="textarea" label="IDL" />

              <div className="add-new-program__buttons">
                <ExitButton label="Exit" onClick={closeModal} />
                <SubmitButton
                  label="Save program"
                  onClick={() => handleSubmit(values, setFieldError)}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddNewProgram;
