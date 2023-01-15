import { Connection } from "@solana/web3.js";
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
