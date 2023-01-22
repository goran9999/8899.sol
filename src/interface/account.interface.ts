import { Keypair, PublicKey } from "@solana/web3.js";

export interface AccountData {
  pubkey: PublicKey;
  keypair?: Uint8Array;
  solBalance: number;
  assets: Asset[];
  alias?: string;
}

export interface Asset {
  logoUri: string;
  isNFT: boolean;
  mint: PublicKey;
}

export interface AccountsFormikContext {
  pubkeys: {
    pubkey: string;
    alias: string;
  }[];
  secretKeys: {
    keypair: string;
    pubkey: string;
    alias: string;
  }[];
}
