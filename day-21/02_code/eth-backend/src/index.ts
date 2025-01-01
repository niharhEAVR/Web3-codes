import { JsonRpcProvider, id } from "ethers";

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/NyDfwQ_XmNAwVIkSemy1jhnjPWyhs6iy");

async function pollBlock(blockNumber: number) {

    const logs = await provider.getLogs({
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        fromBlock: blockNumber,
        toBlock: blockNumber + 2,
        topics: [id("Transfer(address,address,uint256)")]
    });

    console.log(logs);
    console.log("there are this much transction happened:",logs.length);
}

pollBlock(21493826)