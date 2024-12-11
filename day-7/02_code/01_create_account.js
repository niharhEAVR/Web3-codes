const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([187, 80, 43, 124, 199, 29, 235, 9, 205, 21, 222, 217, 172, 138, 200, 248, 155, 88, 69, 113, 29, 241, 233, 93, 227, 145, 231, 111, 128, 154, 40, 204, 29, 18, 127, 194, 2, 204, 234, 90, 82, 244, 246, 173, 142, 182, 72, 12, 22, 90, 133, 99, 49, 119, 19, 69, 225, 70, 79, 37, 193, 162, 201, 100]));

const connection = new Connection("https://api.devnet.solana.com");

async function main() {
    const newAccount = Keypair.generate();

    const transaction = new Transaction();
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: newAccount.publicKey,
            lamports: 0.01 * 1000000000, // 0.01 sol
        }),
    );

    const signature = await connection.sendTransaction(transaction, [payer]);
    await connection.confirmTransaction(signature);
    console.log(`Transferred to: ${newAccount.publicKey.toBase58()}`);
    console.log(`Transaction Signature: ${signature}`);
}

main().catch((err) => {
    console.error(err);
});


// in this code we actually sending 0.01 solana from my local wallet to a new wallet