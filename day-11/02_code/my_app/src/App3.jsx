import { createPublicClient, http } from 'viem';
import './App.css'
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import { mainnet } from 'viem/chains';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}


async function knowBalance() {
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const balance = await client.getBalance({ address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD" })
  return balance.toString();
}

function useBalance() {
  return useQuery({ queryKey: ['balance'], queryFn: knowBalance })
}

function Todos() {
  const { data, refetch, isLoading } = useBalance();

  return (
    <div>
      <h3>Balance: {isLoading ? 'Loading...' : `${data/1000000000000000000} ETH`}</h3>

      <button onClick={() => refetch()}>
        Get Balance
      </button>

    </div>
  );
}


export default App
