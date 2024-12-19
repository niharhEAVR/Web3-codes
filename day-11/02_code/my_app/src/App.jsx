// This code demonstarates the using of tanstack query
// and read the 04_tanstack.md to understand this code


import './App.css'
import { QueryClient, QueryClientProvider, useQueryClient, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient()

async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  )
}



function Posts() {
  // Queries
  const query = useQuery({ queryKey: ['posts'], queryFn: getter , refetchInterval: 5 * 1000})
  // this useQuery returns {data, isLoading, error, and many more}
  // or you can destructure is like this way const {data, isLoading, error} = useQuery({ queryKey: ['posts'], queryFn: getter , refetchInterval: 5 * 1000})

  if(query.error){
    return(
      <div> Error while fetching!</div>
    )
  }

  if(query.isLoading){
    return (
      <div>Loading....</div>
    )
  }

  return (
    <div>
      {JSON.stringify(query.data)}
    </div>
  )
}

export default App
