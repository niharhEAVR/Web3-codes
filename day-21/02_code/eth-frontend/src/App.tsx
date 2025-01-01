import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useConnect, WagmiProvider, useAccount, useDisconnect, useReadContract } from 'wagmi'
import { config } from './config'
import { Address } from 'viem';
import { AllowUSDT } from './AllowUSDT';

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
        <Account />
        <TotalSupply />
        <UserBalance/>
        <AllowUSDT/>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

function ConnectWallet() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}
function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <div>
      {address}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}

function TotalSupply() {
  const { data, isLoading, error } = useReadContract({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abi: [{ "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" } 
    ],
    functionName: 'totalSupply',
  })

  if (isLoading) {
    return <div>loading...</div>
  }

  return <div>
    The total Supply of USDT is: {data?.toString()}
  </div>
}

function UserBalance (){
  const { address } = useAccount()
  const { data, isLoading, error } = useReadContract({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abi: [{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}
    ],
    functionName: 'balanceOf',
    args: [address?.toString() as Address]
  })

  if (isLoading) {
    return <div>loading...</div>
  }

  return <div>
    Your USDT Balance is {data?.toString()}
  </div>
}



export default App;