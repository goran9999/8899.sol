import { Idl } from "@project-serum/anchor";
import {
  IdlAccountItem,
  IdlField,
  IdlTypeDef,
  IdlTypeDefStruct,
  IdlTypeDefTyStruct,
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
  fields: IEventField[];
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
}
