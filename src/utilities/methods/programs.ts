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
  IInstruction,
  IProgramData,
  IType,
} from "../../interface/programs.interface";

export const parseAnchorIDL = async (
  idl: string,
  programId: string,
  programAlias?: string
): Promise<IProgramData> => {
  const parsedIDl = JSON.parse(idl) as Idl;
  const { accounts, types } = parseProgramAccounts(parsedIDl);
  const errors: IError[] | undefined = parsedIDl.errors;
  const events: IEvent[] | undefined = parsedIDl.events;
  const instructions: IInstruction[] = parsedIDl.instructions;
  const programSizeAndStatus = await fetchProgramStatus(programId);
  let isActive = false;
  let totalSize: number | undefined;

  switch (programSizeAndStatus) {
    case -1:
      throw new Error("Given pubkey does not represent executable account!");
    case -2:
      break;
    default:
      isActive = true;
      totalSize = programSizeAndStatus;
      break;
  }

  return {
    events: events ?? [],
    idl: parsedIDl,
    instructions: instructions,
    isActive,
    programId: new PublicKey(programId),
    programAlias,
    totalSize,
    errors: errors ?? [],
    accounts,
    types,
  };
};

export const fetchProgramStatus = async (programId: string) => {
  try {
    debugger;
    const programAccInfo = await LOCAL_RPC_CONECTION.getAccountInfo(
      new PublicKey(programId)
    );
    if (!programAccInfo) return -2;
    if (!programAccInfo?.executable) {
      return -1;
    }
    return programAccInfo?.data.byteLength;
  } catch (error) {
    return -2;
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
