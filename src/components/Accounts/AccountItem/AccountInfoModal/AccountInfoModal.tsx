import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { AccountData } from "../../../../interface/account.interface";
import Modal from "../../../Modal/Modal";
import keyGreen from "../../../../assets/keyGreen.svg";
import keyPurple from "../../../../assets/keyPurple.svg";
import Tooltip from "../../../Tooltip/Tooltip";
import SubmitButton from "../../../Buttons/SubmitButton";
import "./AccountInfoModal.scss";
import { RpcConnection } from "../../../../enums/common.enums";
import { LOCAL_RPC_CONECTION } from "../../../../utilities/solana/idl-parser";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { round } from "mathjs";
import { AccountContext } from "../../../../context/accountStore";
const AccountInfoModal: FC<{
  closeModal: () => void;
  account: AccountData;
  rpc: RpcConnection;
}> = ({ account, closeModal, rpc }) => {
  const [airdropAmount, setAirdropAmount] = useState<number>();
  const [error, setError] = useState<string>();
  const { updateAccount } = useContext(AccountContext);
  const [loading, toggleLoading] = useState(false);
  const airdropSol = async () => {
    try {
      toggleLoading(true);
      setError(undefined);
      if (!airdropAmount) throw new Error("Airdrop amount not defined");
      const airdropIx = await LOCAL_RPC_CONECTION.requestAirdrop(
        account.pubkey,
        airdropAmount * LAMPORTS_PER_SOL
      );
      await LOCAL_RPC_CONECTION.confirmTransaction(airdropIx, "finalized");
      const newBalance = await LOCAL_RPC_CONECTION.getBalance(account.pubkey);
      const updatedAccount = {
        ...account,
        solBalance: round(newBalance / LAMPORTS_PER_SOL, 2),
      };
      updateAccount(updatedAccount);
    } catch (error: any) {
      setError(error.message);
    } finally {
      toggleLoading(false);
    }
  };

  useEffect(() => {}, [account]);

  const fungibleTokens = useMemo(() => {
    return account.assets.filter((asset) => !asset.isNFT);
  }, [account]);

  const nonFungibleTokens = useMemo(() => {
    return account.assets.filter((asset) => asset.isNFT);
  }, [account]);

  return (
    <Modal closeModal={closeModal}>
      <div className="account-info">
        <h2>Account details</h2>
        <div className="account-info__pk-balance">
          <Tooltip
            imgUrl={account.keypair ? keyGreen : keyPurple}
            text={
              account.keypair
                ? "You have an access to keypair of account"
                : "Only PubKey access"
            }
          />
          <p>{account.pubkey.toString()}</p>
          <p>{account.solBalance} SOL</p>
          {rpc === RpcConnection.Localhost && (
            <>
              <input
                type={"number"}
                value={airdropAmount}
                onChange={(e) => {
                  setAirdropAmount(+e.target.value);
                  setError(undefined);
                }}
                max="500000"
                min={0}
              />
              <SubmitButton
                label="Airdrop SOL"
                onClick={airdropSol}
                type="button"
                isLoading={loading}
              />
            </>
          )}
        </div>
        {error && <p className="account-info__error">{error}</p>}
        <div className="account-info__nfts">
          <h3>NFTs</h3>
          <div className="account-inf__nft-images">
            {nonFungibleTokens.length > 0 ? (
              nonFungibleTokens.map((nft) => {
                return <img className="account-info__nft" src={nft.logoUri} />;
              })
            ) : (
              <p>Account does not have non-fungible tokens</p>
            )}
          </div>
        </div>

        <div className="account-info__fts">
          <h3>Fungible tokens</h3>
          <div className="account-inf__nft-images">
            {fungibleTokens.length > 0 ? (
              fungibleTokens.map((ft) => {
                return <img className="account-info__ft" src={ft.logoUri} />;
              })
            ) : (
              <p>Account does not have fungible tokens</p>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AccountInfoModal;
