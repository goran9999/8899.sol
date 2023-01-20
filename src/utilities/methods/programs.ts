import {
  Idl,
  BorshCoder,
  Program,
  AnchorProvider,
  BN,
} from "@project-serum/anchor";
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
import { SeedType } from "../../enums/common.enums";

export const parseAnchorIDL = async (
  idl: string,
  programId: string,
  wallet: AnchorWallet,
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
    program: new Program(
      parsedIDl,
      programId,
      new AnchorProvider(LOCAL_RPC_CONECTION, wallet, {
        commitment: "confirmed",
      })
    ),
  };
};

export const fetchProgramStatus = async (programId: string) => {
  try {
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

export const generateCustomPda = (
  seedData: { seed: string; type: string; index: number }[],
  programId: string
) => {
  try {
    const seedArr: Uint8Array | Buffer[] = [];
    seedData.forEach((data) => {
      seedArr.push(getSeedByType(data.seed, data.type as SeedType, data.index));
    });
    return PublicKey.findProgramAddressSync(seedArr, new PublicKey(programId));
  } catch (error) {
    throw error;
  }
};

export const getSeedByType = (
  seed: string,
  type: SeedType,
  index: number
): Buffer => {
  try {
    switch (type) {
      case SeedType.PublicKey:
        return new PublicKey(seed).toBuffer();
      case SeedType.String:
        return Buffer.from(seed);
      case SeedType.u8: {
        const buffer = Buffer.alloc(1);
        buffer.writeInt8(Number(seed));
        return buffer;
      }
      case SeedType.u16: {
        const buffer = Buffer.alloc(2);
        buffer.writeUInt16LE(Number(seed));
        return buffer;
      }
      case SeedType.u32: {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt32LE(Number(seed));
        return buffer;
      }
      case SeedType.u64: {
        const buffer = Buffer.alloc(8);
        buffer.writeBigUInt64LE(BigInt(seed));
        return buffer;
      }
      case SeedType.u128: {
        const buffer = Buffer.alloc(16);
        buffer.writeUintLE(Number(seed), 0, 16);
        return buffer;
      }
    }
  } catch (error: any) {
    throw new Error(index.toString());
  }
};

export const fetchPdaAccount = async (
  pda: PublicKey,
  account: IAccount,
  program: Program
) => {
  try {
    const accountName =
      account.name.charAt(0).toLowerCase() + account.name.slice(1);
    const accountData = await program.account[accountName].fetch(pda);
    const stringifiedAccount: any = {};
    Object.keys(accountData).forEach((key) => {
      switch (typeof accountData[key]) {
        case "object": {
          stringifiedAccount[key] = (accountData[key] as Object).toString();
          break;
        }
        case "bigint": {
          stringifiedAccount[key] = (accountData[key] as BN).toNumber();
          break;
        }
        default: {
          stringifiedAccount[key] = accountData[key];
        }
      }
    });
    return stringifiedAccount;
  } catch (error) {
    throw error;
  }
};
