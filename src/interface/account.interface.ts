import { Keypair, PublicKey } from "@solana/web3.js";

export interface AccountData {
  pubkey: PublicKey;
  keypair?: Keypair;
  solBalance: number;
  assets: Asset[];
}

export interface Asset {
  logoUri: string;
  isNFT: boolean;
  mint: PublicKey;
}
