// read the 06_wagmi.md to understand better
import './App.css'
import { http, createConfig, WagmiProvider, useConnect, useAccount, useBalance, useSendTransaction } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { parseEther } from 'viem';


const projectId = '<WALLETCONNECT_PROJECT_ID>'
const queryClient = new QueryClient()
const config = createConfig({
    chains: [mainnet],
    connectors: [
        injected(),
    ],
    transports: {
        [mainnet.id]: http(),
    },
})

function App() {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <WalletOptions />
                <MyAccount/>
                <SendFunds/>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

function MyAccount() {
    const {address} = useAccount();
    const balance = useBalance({address});
    
    console.log(balance);
    

    return(
        <div>My Address: {address}
            <div>My Balance: {balance?.data?.value.toString()} ETH</div>
        </div>
    )
}


function WalletOptions() {
    const { connectors, connect } = useConnect()

    console.log(connectors);
    

    return connectors.map((connector) => (
        <button key={connector.uid} onClick={() => connect({ connector })}>
            {connector.name}
        </button>
    ))
}

function SendFunds() {
    const { data: hash, sendTransaction } = useSendTransaction()

    async function sendTx() {
        const to = document.getElementById("to").value;
        const value = document.getElementById("value").value;
        sendTransaction({ to, value: parseEther(value) });
    }

    return <div>
      <input id="to" placeholder="Reciever's Address..." required />
      <input id="value" placeholder="0.05" required />
      <button onClick={sendTx}>Send</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </div>
}


export default App

