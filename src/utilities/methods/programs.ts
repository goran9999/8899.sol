import { Idl, BorshCoder, Program } from "@project-serum/anchor";
import { IDL, ClubProgram } from "./test";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { getProgram } from "./helpers";
import stripJsonTrailingCommas from "strip-json-trailing-commas";

export const parseAnchorIDL = (
  idl: string,
  programId: string,
  wallet: AnchorWallet
): Program => {
  let parsedIDl: any = JSON.stringify(idl.replace(/\s+/g, ""));

  parsedIDl = parsedIDl.split("errors")[0].slice(0, -1) + '}"';

  parsedIDl = stripJsonTrailingCommas(parsedIDl);

  parsedIDl = JSON.parse(
    stripJsonTrailingCommas(
      JSON.parse(parsedIDl)
        .replace(/(\w+:)|(\w+ :)/g, function (matchedStr: any) {
          return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
        })
        .replace(/(^[,\s]+)|([,\s]+$)/g, "")
    )
  );

  return getProgram(
    parsedIDl as Idl,
    "A6DHb3s8VKSKV3cC58xYzLooyVsLuKCrWwQEe2ZdbEZg",
    wallet
  );
};
