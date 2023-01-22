import { Keypair, PublicKey } from "@solana/web3.js";
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

  if (values.accountType === AccountType.Keypair) {
    values.secretKeys.forEach((sc: any, index: number) => {
      if (!sc.keypair || sc.keypair === "") {
        errors[`secretKeys.${index}.keypair`] = "Secret key can not be empty!";
      }
    });
  }

  return errors;
};
