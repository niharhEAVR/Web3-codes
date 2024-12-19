// This code demonstarates the using of viem
// read the 05_viem.md

import './App.css'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

function App() {

  async function getBalance() {
    const balance = await client.getBalance({ address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD" })
    console.log(balance);
  }


  return (
    <>
      <button onClick={getBalance}>Get Balance</button>
    </>
  )
}

export default App