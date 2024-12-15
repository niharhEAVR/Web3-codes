const { PublicKey } = require('@solana/web3.js');
const { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

// Replace these with your actual values
const userAddress = new PublicKey('4zdvQqGiukqq5Boh4jRMiTHpUbrdaSqhP7C4po4dorZK');
const tokenMintAddress = new PublicKey('2115ucGuLzLEGUiEdQJZVjXG6xo7agAkkjvxnDxmjCqW');

// Derive the associated token address
const getAssociatedTokenAddress = (mintAddress, ownerAddress) => {
    return PublicKey.findProgramAddressSync(
        [
            ownerAddress.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            mintAddress.toBuffer(),
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    );
};

const [associatedTokenAddress, bump] = getAssociatedTokenAddress(tokenMintAddress, userAddress);
console.log(`Associated Token Address: ${associatedTokenAddress.toBase58()}, bump: ${bump}`);


// to know about this code read 03_code_snippit.md and 05_Bump_seed.md