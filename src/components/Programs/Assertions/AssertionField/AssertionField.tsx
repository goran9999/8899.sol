import React, { FC } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./AssertionField.scss";
const AssertionField: FC<{
  isError: boolean;
  helperText: string;
  value: string;
}> = ({ helperText, isError, value }) => {
  const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
      borderColor: `${isError ? "red" : "green"}`,
      borderWidth: 2,
      margin: "0",
      color: "white !important",
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
      color: "white !important",
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important",
      color: "white !important",
    },
    "&": {
      width: "100%",
      color: "white !important",
    },
    "&:formControl": {
      color: "white !important",
    },
  });

  return (
    <div className="assertion-field">
      <ValidationTextField
        sx={{ input: { color: `${isError ? "red" : "green"}` } }}
        label={helperText}
        required
        variant="outlined"
        value={value}
        id="validation-outlined-input"
      />
    </div>
  );
};

export default AssertionField;
