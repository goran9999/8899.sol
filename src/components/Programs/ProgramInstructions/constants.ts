import { PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import {
  PublicKey,
  SystemProgram,
  SYSVAR_CLOCK_PUBKEY,
  SYSVAR_RENT_PUBKEY,
} from "@solana/web3.js";
import { IProgramData } from "../../../interface/programs.interface";

export const getProgramConfig = (
  programs: IProgramData[],
  skipSysvars?: boolean
): { name: string; address: PublicKey }[] => {
  const programsData: { name: string; address: PublicKey }[] = [
    {
      name: "System Program",
      address: SystemProgram.programId,
    },
    {
      name: "Token Program",
      address: TOKEN_PROGRAM_ID,
    },
    {
      name: "Metaplex Program",
      address: PROGRAM_ID,
    },
  ];

  programs.forEach((p) => {
    programsData.push({
      name: p.programAlias ?? p.programId.toString(),
      address: p.programId,
    });
  });

  if (!skipSysvars) {
    programsData.push({ name: "Rent", address: SYSVAR_RENT_PUBKEY });
    programsData.push({ name: "Clock", address: SYSVAR_CLOCK_PUBKEY });
  }

  return programsData;
};
