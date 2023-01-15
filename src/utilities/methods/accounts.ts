import { Metadata, PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { MintLayout, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { divide, round } from "mathjs";
import { metadataSeed } from "../../common/seed";
import { RpcConnection } from "../../enums/common.enums";
import { Asset } from "../../interface/account.interface";
import { getConnection } from "./helpers";

export const getAccountAssets = async (
  accountKey: PublicKey,
  rpc: RpcConnection
): Promise<{ assets: Asset[]; balance: number }> => {
  try {
    const connection = getConnection(rpc);
    const accountAssets = await connection.getParsedTokenAccountsByOwner(
      accountKey,
      { programId: TOKEN_PROGRAM_ID }
    );
    const assets: Asset[] = [];

    for (const tokenAccount of accountAssets.value) {
      const mint = new PublicKey(tokenAccount.account.data.parsed.info.mint);
      //TODO:extract fetching acc metadata in fx
      const [metadataPda] = PublicKey.findProgramAddressSync(
        [metadataSeed, PROGRAM_ID.toBuffer(), mint.toBuffer()],
        PROGRAM_ID
      );

      try {
        const metadataAccount = await Metadata.fromAccountAddress(
          connection,
          metadataPda
        );

        const logoUri = (
          await await (await fetch(metadataAccount.data.uri)).json()
        ).image;
        assets.push({
          isNFT:
            tokenAccount.account.data.parsed.info.tokenAmount.uiAmount === 1 &&
            tokenAccount.account.data.parsed.info.tokenAmount.decimals === 0,
          logoUri,
          mint,
        });
      } catch (error) {}
    }

    return {
      assets,
      balance: round(
        divide(await connection.getBalance(accountKey), LAMPORTS_PER_SOL),
        2
      ),
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
