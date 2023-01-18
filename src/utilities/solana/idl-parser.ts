import { AnchorProvider, Program } from "@project-serum/anchor";
import { Connection, Keypair } from "@solana/web3.js";

export const LOCAL_CONNECTION_URL = "http://localhost:8899";
export const LOCAL_RPC_CONECTION = new Connection(
  LOCAL_CONNECTION_URL,
  "confirmed"
);

export const DEVNET_CONNECTION_URL =
  "https://warmhearted-old-card.solana-devnet.quiknode.pro/";
export const DEVNET_RPC_CONNECTION = new Connection(
  DEVNET_CONNECTION_URL,
  "confirmed"
);

export const MAINNET_CONNECTION_URL = "https://rpc.ankr.com/solana";
export const MAINNET_RPC_CONNECTION = new Connection(
  MAINNET_CONNECTION_URL,
  "confirmed"
);
