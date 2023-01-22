import { PublicKey } from "@solana/web3.js";

export const validateProgramAdding = (values: any) => {
  const errors: any = {};

  try {
    new PublicKey(values.programId);
  } catch (error) {
    errors.programId = "Invalid program id format!";
  }

  if (values.idl === "") {
    errors.idl = "IDL can not be empty";
  }

  try {
    JSON.parse(values.idl);
  } catch (error) {
    errors.idl =
      "IDL format invalid.Please paste entire josn file from target/idl folder";
  }

  return errors;
};
