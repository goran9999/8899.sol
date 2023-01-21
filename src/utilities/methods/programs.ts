import {
  Idl,
  BorshCoder,
  Program,
  AnchorProvider,
  BN,
} from "@project-serum/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { LOCAL_RPC_CONECTION } from "../solana/idl-parser";
import {
  BPF_LOADER_PROGRAM_ID,
  Keypair,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import {
  IAccount,
  IError,
  IEvent,
  IInstruction,
  IProgramData,
  IType,
} from "../../interface/programs.interface";
import { InstructionArgType, SeedType } from "../../enums/common.enums";
import { AccountData } from "../../interface/account.interface";

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
    const [programDataAcc] = PublicKey.findProgramAddressSync(
      [new PublicKey(programId).toBuffer()],
      BPF_LOADER_PROGRAM_ID
    );

    if (!programAccInfo) return -2;
    if (!programAccInfo?.executable) {
      return -1;
    }
    try {
      const accData = await LOCAL_RPC_CONECTION.getAccountInfo(programDataAcc);
      return accData?.data.byteLength;
    } catch (error) {
      return -2;
    }
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

export const parseInstructionData = (
  instructionData: { name: string; type: string; value: any }[]
) => {
  const parsedIxData: any[] = [];
  try {
    instructionData.forEach((dataArg) => {
      switch (dataArg.type as InstructionArgType) {
        case InstructionArgType.PublicKey:
          parsedIxData.push(new PublicKey(dataArg.value));
          break;
        case InstructionArgType.String:
        case InstructionArgType.u32:
        case InstructionArgType.u16:
        case InstructionArgType.u8:
          parsedIxData.push(dataArg.value);
          break;

        case InstructionArgType.u128:
        case InstructionArgType.u64:
          parsedIxData.push(new BN(dataArg.value));
          break;
        case InstructionArgType.bytes:
          const parsedData = dataArg.value
            .split(",")
            .filter((val: string) => val !== " ");
          const array: number[] = [];
          parsedData.forEach((arg: string) => array.push(Number(arg)));
          parsedIxData.push(Buffer.from(new Uint8Array(array)));
          break;
        default:
          if (!dataArg.value) parsedIxData.push(null);
          parsedIxData.push(
            JSON.parse(
              dataArg.value.replace(
                /(\w+:)|(\w+ :)/g,
                function (matchedStr: string) {
                  return (
                    '"' + matchedStr.substring(0, matchedStr.length - 1) + '":'
                  );
                }
              )
            )
          );
      }
    });
    return parsedIxData;
  } catch (error) {
    throw error;
  }
};

export const parseInstructionAccounts = (
  accounts: { name: string; publicKey: string; bump: number }[]
) => {
  try {
    const accountsObject: any = {};
    accounts.forEach((acc) => {
      accountsObject[acc.name] = new PublicKey(acc.publicKey);
    });
    return accountsObject;
  } catch (error) {
    throw error;
  }
};

export const executeProgramInstruction = async (
  programData: IProgramData,
  accounts: { name: string; publicKey: string; bump: number }[],
  instructionData: { name: string; type: string; value: any }[],
  signer: AccountData & string,
  instruction: IInstruction,
  wallet?: AnchorWallet
) => {
  try {
    const program = programData.program;
    if (!wallet && !signer.keypair)
      throw new Error("Cannot sign with account that has no keypair");
    let signerKp: Keypair;
    if (!wallet) {
      signerKp = Keypair.fromSecretKey(signer.keypair!);
    }

    const parsedInstructionData = parseInstructionData(instructionData);
    const parsedAccounts = parseInstructionAccounts(accounts);
    const ix = await program.methods[instruction.name]
      .apply(this, parsedInstructionData)
      .accounts(parsedAccounts)
      .instruction();
    //TODO:use versionedTx after AnchorWallet enable signing versioned txs

    // const tx = new TransactionMessage({
    //   instructions: [ix],
    //   payerKey: new PublicKey(signer.pubkey),
    //   recentBlockhash: (await LOCAL_RPC_CONECTION.getLatestBlockhash())
    //     .blockhash,
    // }).compileToLegacyMessage();

    // const versionedTx = new VersionedTransaction(tx);
    // versionedTx.sign([signer.keypair]);
    const tx = new Transaction({
      feePayer: new PublicKey(signer.pubkey ?? signer),
      recentBlockhash: (await LOCAL_RPC_CONECTION.getLatestBlockhash())
        .blockhash,
    });
    tx.add(ix);
    let txSignature: string;

    const txSimulation = await LOCAL_RPC_CONECTION.simulateTransaction(tx);
    if (txSimulation.value.err) {
      let logsMessage = "";
      txSimulation.value.logs?.forEach(
        (log) => (logsMessage = logsMessage + `${log},\n`)
      );

      throw new Error(logsMessage);
    }
    if (wallet) {
      const signedTx = await wallet.signTransaction(tx);
      txSignature = await LOCAL_RPC_CONECTION.sendRawTransaction(
        signedTx.serialize()
      );
    } else {
      txSignature = await LOCAL_RPC_CONECTION.sendTransaction(tx, [signerKp!]);
    }
    const txLogs = await LOCAL_RPC_CONECTION.getTransaction(txSignature);
    return txLogs?.meta?.logMessages;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
