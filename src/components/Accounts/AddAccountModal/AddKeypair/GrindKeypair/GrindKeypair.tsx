import { Keypair } from "@solana/web3.js";
import { useFormikContext } from "formik";
import React, { FC, useState } from "react";
import { Oval } from "react-loader-spinner";
import { AccountsFormikContext } from "../../../../../interface/account.interface";
import "./GrindKeypair.scss";
const GrindKeypair: FC<{ index: number }> = ({ index }) => {
  const [grindStart, setGrindStart] = useState("");
  const { setFieldValue } = useFormikContext<AccountsFormikContext>();
  const [loading, toggleLoading] = useState(false);
  const [error, toggleError] = useState(false);

  const grindKeypiar = () => {
    if (grindStart.length === 0) {
      toggleError(true);
      return;
    }
    toggleLoading(true);
    toggleError(false);
    while (true) {
      const keypair = Keypair.generate();
      if (keypair.publicKey.toString().startsWith(grindStart)) {
        setFieldValue(`secretKeys.${index}.keypair`, keypair.secretKey);
        setFieldValue(
          `secretKeys.${index}.pubkey`,
          keypair.publicKey.toString()
        );

        break;
      }
    }
    toggleLoading(false);
  };

  const generateKeypair = () => {
    toggleError(false);
    const keypair = Keypair.generate();
    setFieldValue(`secretKeys.${index}.keypair`, keypair.secretKey);
    setFieldValue(`secretKeys.${index}.pubkey`, keypair.publicKey.toString());
  };

  return (
    <div>
      <div className="grind-keypair">
        <div className="grind-keypair__input">
          <p>Keypair start from:</p>
          <input
            type="text"
            maxLength={3}
            value={grindStart}
            onChange={(e) => setGrindStart(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={grindKeypiar}>
            {loading ? (
              <Oval color="#a20aff" height={"2em"} width={"2em"} />
            ) : (
              <p>Grind</p>
            )}
          </button>
          <button type="button" onClick={generateKeypair}>
            Generate random
          </button>
        </div>
      </div>
      {error && (
        <p className="grind-keypair__error">Cannot grind from empty text!</p>
      )}
    </div>
  );
};
export default GrindKeypair;
