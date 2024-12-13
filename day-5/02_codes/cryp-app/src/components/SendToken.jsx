import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useRef } from "react";

export function SendSolToUser() {
    const wallet = useWallet();
    const { connection } = useConnection();

    const toAddressRef = useRef();
    const amountRef = useRef();

    async function sendSol() {
        try {
            const toAddress = toAddressRef.current?.value;
            const amount = parseFloat(amountRef.current?.value);

            const transaction = new Transaction()
            transaction.add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: new PublicKey(toAddress),
                    lamports: amount * LAMPORTS_PER_SOL,
                })
            );

            await wallet.sendTransaction(transaction, connection)
            alert(`Transaction successful!`);
        } catch (error) {
            console.error("Error sending SOL:", error);
            alert(`Error: ${error.message}`);
        }
    }

    return (
        <div>
            <h3>Send SOL</h3>
            <input ref={toAddressRef} type="text" placeholder="Recipient Address" />
            <input ref={amountRef} type="text" placeholder="Amount in SOL" />
            <button onClick={sendSol}>Send</button>
        </div>
    );
}
