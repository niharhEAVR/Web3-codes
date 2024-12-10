import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRef } from "react";

export function Airdrop() {
    const inputref = useRef();
    const wallet = useWallet();

    
    const { connection } = useConnection();
    
    async function sendAirdrop() {
        const ammount  = inputref.current?.value
        await connection.requestAirdrop(wallet.publicKey, ammount * LAMPORTS_PER_SOL);
        alert(`${ammount} sol is airdropped in your devnet account`)
    }


    return <>

        <input ref={inputref} type="text" placeholder="Amount" />
        <button  onClick={sendAirdrop}>Send Airdrop</button>
        {/* {wallet.publicKey.toString()} */}


    </>
}


// i dont know why the transction is getting failed