import { Keypair, PublicKey } from "@solana/web3.js";

export interface AccountData {
  pubkey: PublicKey;
  keypair?: Keypair;
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
    pubkeyAlias: string;
  }[];
  secretKeys: {
    pubKey: string;
    secretKey: string;
    alias: string;
  }[];
}
