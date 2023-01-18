import { PublicKey } from "@solana/web3.js";

export interface IProgramData {
  programId: PublicKey;
  idl: any;
  programAlias?: string;
  instructions: IInstruction[];
  events: IEvent[];
  isActive: boolean;
  totalSize?: number;
}

export interface IInstruction {
  name: string;
  data: IInstructionData[];
  accounts: IAccount[];
}

export interface IInstructionData {
  name: string;
  type: string;
}

export interface IAccount {
  name: string;
  isSigner: boolean;
  isWritable: boolean;
}

export interface IEvent {
  name: string;
  fields: IEventField[];
}

export interface IEventField {
  name: string;
  type: string;
}
