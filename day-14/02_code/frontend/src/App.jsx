import './App.css'
import axios from 'axios'
import { Transaction, Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useState } from 'react'

const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/NyDfwQ_XmNAwVIkSemy1jhnjPWyhs6iy")

function App() {
  const [amount, setAmount] = useState(0)
  const [address, setAddress] = useState("")

  async function sendTxn() {
    const solAmount = parseFloat(amount);
    const tx = new Transaction().add(SystemProgram.transfer({
      fromPubkey: new PublicKey("4zdvQqGiukqq5Boh4jRMiTHpUbrdaSqhP7C4po4dorZK"),
      toPubkey: new PublicKey(address),
      lamports: solAmount * LAMPORTS_PER_SOL
    }))

    const { blockhash } = await connection.getLatestBlockhash();
    tx.recentBlockhash = blockhash
    tx.feePayer = new PublicKey("4zdvQqGiukqq5Boh4jRMiTHpUbrdaSqhP7C4po4dorZK")

    const serializedTx = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: false
    })
    await axios.post('http://localhost:3000/api/user/txn/sign', {
      message: Buffer.from(serializedTx).toString('base64'),
      retry: false,
    });

    alert('Transaction Sent!');
  }

  return (
    <>
      <input type="text" placeholder='amount' onChange={e => setAmount(e.target.value)} />
      <input type="text" placeholder='address' onChange={e => setAddress(e.target.value)} />
      <button onClick={sendTxn}>Send</button>
    </>
  )
}

export default App
