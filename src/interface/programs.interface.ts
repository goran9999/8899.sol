import { Idl, Program } from "@project-serum/anchor";
import {
  IdlAccountItem,
  IdlEventField,
} from "@project-serum/anchor/dist/cjs/idl";
import { PublicKey } from "@solana/web3.js";

export interface IProgramData {
  programId: PublicKey;
  idl: Idl;
  programAlias?: string;
  instructions: IInstruction[];
  events: IEvent[];
  isActive: boolean;
  totalSize?: number;
  errors: IError[];
  accounts: IAccount[];
  types: IType[];
  program: Program;
}

export interface IInstruction {
  name: string;
  args: any;
  accounts: IdlAccountItem[];
}

export interface IInstructionAccount {
  name: string;
  isSigner: boolean;
  isWritable: boolean;
}

export interface IEvent {
  name: string;
  fields: IdlEventField[];
}

export interface IAccount {
  name: string;
  fields: any;
}

export interface IAccountField {
  name: string;
  type: string;
  isOptional?: boolean;
  definedType: IType;
}

export interface IError {
  code: number;
  name: string;
  msg?: string;
}

export interface IType {
  name: string;
  type: any;
}

export interface IEventField {
  name: string;
  type: any;
  isActive: boolean;
}

export interface ISeedData {
  seed: string;
  type: string;
  index: number;
}

export interface IInstructionForm {
  accounts: { publicKey: PublicKey; bump: number; name: string }[];
  instructionData: { name: string; value: any; type: string }[];
  assertions: { publicKey: string; assert: string; assertionData: string }[];
}
