const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([187, 80, 43, 124, 199, 29, 235, 9, 205, 21, 222, 217, 172, 138, 200, 248, 155, 88, 69, 113, 29, 241, 233, 93, 227, 145, 231, 111, 128, 154, 40, 204, 29, 18, 127, 194, 2, 204, 234, 90, 82, 244, 246, 173, 142, 182, 72, 12, 22, 90, 133, 99, 49, 119, 19, 69, 225, 70, 79, 37, 193, 162, 201, 100]));


const mintAthority = payer;

const connection = new Connection("https://api.devnet.solana.com");
async function main() {
    const newAccount = Keypair.generate();
    const TOTAL_BYTES = 165;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: lamports,
            space: TOTAL_BYTES,
            programId: SystemProgram.programId,
        }),
    );

    await connection.sendTransaction(transaction, [payer, newAccount]);
    console.log(`New account created at: ${newAccount.publicKey.toBase58()}`);
}

main();


// in this code we actually sending 165 bytes of to a new account in solana and the Rent-exempt fees will going to be cut from my local wallet

// in terminal type (.\solana rent 165) this command will show how much sol will need to store 165 bytes of data in a account