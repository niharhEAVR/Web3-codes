import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        async function fetchBalance() {
            if (wallet.publicKey) {
                const balanceInLamports = await connection.getBalance(wallet.publicKey);
                setBalance(balanceInLamports / LAMPORTS_PER_SOL); // Convert lamports to SOL
            }
        }
        fetchBalance();
    }, [connection, wallet.publicKey]); // Runs whenever connection or wallet changes

    if (!wallet.connected) {
        return <h3>Please connect your wallet</h3>;
    }

    return (
        <div>
            <h3>
                This account balance is: {balance !== null ? `${balance} SOL` : "Loading..."}
            </h3>
        </div>
    );
}
