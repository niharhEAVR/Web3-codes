import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { MINT_SIZE, TOKEN_2022_PROGRAM_ID, createMint, createInitializeMint2Instruction, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"

export function TokenLaunchpad() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function createToken() {
        const mintKeypair = Keypair.generate(); // this line is for creating public key and private key for that unknown token

        const lamports = await getMinimumBalanceForRentExemptMint(connection); // this is the rent ammount, as we  know that we need to have some rent money to hold any tokens

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: mintKeypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId: TOKEN_2022_PROGRAM_ID,
            }),

            createInitializeMint2Instruction(mintKeypair.publicKey, 9, wallet.publicKey, wallet.publicKey, TOKEN_2022_PROGRAM_ID) // if you hover over this function call and go there you will get to see that this function call takes 5 arguments
        );

        transaction.feePayer = wallet.publicKey; // who is paying the rent fee that we have to mention

        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash; // in every seconds someone creates a block to sign a message for transctions, thats why we need the current block available to sign our token message 
        transaction.partialSign(mintKeypair);

        await wallet.sendTransaction(transaction, connection);
        console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
    }

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className='inputText' type='text' placeholder='Name'></input> <br />
        <input className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={createToken} className='btn'>Create a token</button>
    </div>
}

// this code only creates unknown token, no need to fill the input boxes


// read 03_token_launch_without_metadata.md to get better understanding