import { useRef } from "react"
import { createMint, getMinimumBalanceForRentExemptMint } from "@solana/spl-token";
import { Transaction, SystemProgram } from "@solana/web3.js";

export function TokenLaunchpad() {

    const nameRef = useRef();
    const symbolRef = useRef();
    const imageRef = useRef();
    const initialSuppRef = useRef();

    const createToken = async () => {
        const name = nameRef.current.value
        const symbol = symbolRef.current.value
        const image = imageRef.current.value
        const initialSupp = initialSuppRef.current.value
        console.log(name);



        const lamports = await getMinimumBalanceForRentExemptMint(connection);

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId,
            }),
            createInitializeMint2Instruction(keypair.publicKey, decimals, mintAuthority, freezeAuthority, programId),
        );

        await sendAndConfirmTransaction(connection, transaction, [payer, keypair], confirmOptions);







    }


    return <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input ref={nameRef} className='inputText' type='text' placeholder='Name'></input> <br />
        <input ref={symbolRef} className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input ref={imageRef} className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input ref={initialSuppRef} className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={createToken} className='btn'>Create a token</button>
    </div>
}