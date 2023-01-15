import { AnchorProvider, Program } from "@project-serum/anchor";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { Connection, Keypair } from "@solana/web3.js";

export const LOCAL_CONNECTION_URL = "http://localhost:8899";
export const LOCAL_RPC_CONECTION = new Connection(
  LOCAL_CONNECTION_URL,
  "confirmed"
);

export const anchorProgram = (idl: any, programId: string) => {
  return new Program(
    idl,
    programId,
    new AnchorProvider(
      LOCAL_RPC_CONECTION,
      new NodeWallet(Keypair.generate()),
      { commitment: "confirmed" }
    )
  );
};
