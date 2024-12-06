import { useState } from 'react';
import { mnemonicToSeed } from 'bip39';
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

function SolanaWallet({ mnemonic = "share banner faculty shoulder edit math lady rude fish copy more april" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);

  return (
    <div>
      <button onClick={async function () {
        const seed = await mnemonicToSeed(mnemonic); // Use await here
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);
        setCurrentIndex(currentIndex + 1);
        setPublicKeys([...publicKeys, keypair.publicKey]);
      }}>
        Add Solana Wallet
      </button>
      {publicKeys.map((p, index) => (
        <div key={index}>
          Sol - {p.toBase58()}
        </div>
      ))}
    </div>
  );
}
export default SolanaWallet;