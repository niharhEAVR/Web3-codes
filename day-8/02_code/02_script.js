const { PublicKey } = require('@solana/web3.js');
const { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

const userAddress = new PublicKey('4zdvQqGiukqq5Boh4jRMiTHpUbrdaSqhP7C4po4dorZK');
const tokenMintAddress = new PublicKey('2115ucGuLzLEGUiEdQJZVjXG6xo7agAkkjvxnDxmjCqW');

const PDA = PublicKey.createProgramAddressSync(
    [userAddress.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenMintAddress.toBuffer(), Buffer.from([255])], // here we know what the bump is, 
    ASSOCIATED_TOKEN_PROGRAM_ID,
);

console.log(`PDA: ${PDA}`);