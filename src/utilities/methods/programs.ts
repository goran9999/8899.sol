import { Idl, BorshCoder, Program } from "@project-serum/anchor";
import { IDL, ClubProgram } from "./test";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { getProgram } from "./helpers";
import stripJsonTrailingCommas from "strip-json-trailing-commas";
import { LOCAL_RPC_CONECTION } from "../solana/idl-parser";
import { PublicKey } from "@solana/web3.js";
import {
  IAccount,
  IError,
  IEvent,
  IType,
} from "../../interface/programs.interface";

export const parseAnchorIDL = (
  idl: string,
  programId: string,
  wallet: AnchorWallet
) => {
  const parsedIDl = JSON.parse(idl) as Idl;
  console.log(parsedIDl);

  const { accounts, types } = parseProgramAccounts(parsedIDl);
  const errors: IError[] | undefined = parsedIDl.errors;
  const events: IEvent[] | undefined = parsedIDl.events;
};

export const fetchProgramStatus = async (programId: string) => {
  try {
    const programAccInfo = await LOCAL_RPC_CONECTION.getAccountInfo(
      new PublicKey(programId)
    );
    return true;
  } catch (error) {
    return false;
  }
};

export const parseProgramAccounts = (
  idl: Idl
): { accounts: IAccount[]; types: IType[] } => {
  if (!idl.accounts) throw new Error("IDL not parsed!");
  const programTypes = parseProgramTypes(idl);
  const accounts: IAccount[] = idl.accounts.map((account) => {
    return {
      name: account.name,
      fields: account.type,
    };
  });

  return { accounts, types: programTypes };
};

export const parseProgramTypes = (idl: Idl): IType[] => {
  if (!idl.types) return [];
  return idl.types.map((type) => {
    return {
      name: type.name,
      type: type,
    };
  });
};
