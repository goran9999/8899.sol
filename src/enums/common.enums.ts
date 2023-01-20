export enum RpcConnection {
  Localhost,
  Devnet,
  Mainnet,
}

export enum AccountType {
  PublicKey,
  Keypair,
}

export enum KeypairType {
  UserDefine,
  Grind,
}

export enum ProgramInfoType {
  Accounts,
  Instructions,
  Events,
}

export enum SeedType {
  u8 = "u8",
  u32 = "u32",
  u64 = "u64",
  u128 = "u128",
  String = "String",
  PublicKey = "PublicKey",
}
