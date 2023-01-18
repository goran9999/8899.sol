import { AnchorProvider, getProvider, Program } from "@project-serum/anchor";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, Keypair } from "@solana/web3.js";
import { RpcConnection } from "../../enums/common.enums";
import {
  DEVNET_RPC_CONNECTION,
  LOCAL_RPC_CONECTION,
  MAINNET_RPC_CONNECTION,
} from "../solana/idl-parser";

export const getConnection = (rpc: RpcConnection): Connection => {
  switch (rpc) {
    case RpcConnection.Devnet:
      return DEVNET_RPC_CONNECTION;
    case RpcConnection.Localhost:
      return LOCAL_RPC_CONECTION;
    case RpcConnection.Mainnet:
      return MAINNET_RPC_CONNECTION;
  }
};

export const getProgram = (
  idl: any,
  programId: string,
  wallet: AnchorWallet
) => {
  return new Program(
    idl,
    programId,
    new AnchorProvider(DEVNET_RPC_CONNECTION, wallet, {
      commitment: "confirmed",
    })
  );
};
