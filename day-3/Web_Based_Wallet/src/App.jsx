import { useState } from 'react';
import { generateMnemonic } from 'bip39';
import SolanaWallet from './Components/SolanaWallet'
import EthWallet from './Components/EthWallet'
import './App.css';


function App() {
  const [mnemonic, setMnemonic] = useState("")
  
  return (
    <>
      <button onClick={async function () {
        const mnemonic = await generateMnemonic();
        setMnemonic(mnemonic)
      }}>
        Create Seed Phrase
      </button>
      <textarea value={mnemonic}></textarea>
      <SolanaWallet mnemonic={mnemonic} />
      <EthWallet mnemonic={mnemonic} />
    </>
  )
}
export default App;