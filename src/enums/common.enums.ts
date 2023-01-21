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
  PublicKey = "PublicKey",
  String = "String",
  u8 = "u8",
  u16 = "u16",
  u32 = "u32",
  u64 = "u64",
  u128 = "u128",
}

export enum InstructionArgType {
  PublicKey = "publicKey",
  String = "String",
  u8 = "u8",
  u16 = "u16",
  u32 = "u32",
  u64 = "u64",
  u128 = "u128",
  bytes = "bytes",
  defined = "defined",
}

export enum AssertionType {
  SolBalance,
  TokenBalance,
  Custom,
}
