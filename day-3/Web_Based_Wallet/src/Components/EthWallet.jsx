import { useState } from 'react';
import { mnemonicToSeed } from 'bip39';
import { Wallet, HDNodeWallet } from "ethers";

const EthWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  return (
    <div>
      <button onClick={async function () {
        const seed = await mnemonicToSeed(mnemonic); // Ensure you await this
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);
        setCurrentIndex(currentIndex + 1);
        setAddresses([...addresses, wallet.address]);
      }}>
        Add ETH Wallet
      </button>

      {addresses.map((p, index) => (
        <div key={index}>
          Eth - {p}
        </div>
      ))}
    </div>
  );
}
export default EthWallet;