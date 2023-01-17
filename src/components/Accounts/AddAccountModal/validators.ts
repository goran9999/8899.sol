import { PublicKey } from "@solana/web3.js";
import { AccountType } from "../../../enums/common.enums";

export const validateCreateAccount = (values: any) => {
  const errors: any = {};
  if (values.accountType === AccountType.PublicKey) {
    values.pubkeys.forEach((pk: string, index: number) => {
      try {
        new PublicKey(pk);
      } catch (error) {
        errors[`pubkeys.${index}.pubkey`] = "Invalid pubkey input";
      }
    });
  }

  return errors;
};
