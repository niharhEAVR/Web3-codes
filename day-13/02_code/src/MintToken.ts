import { mintTo } from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { PRIVATE_KEY, TOKEN_MINT_ADDRESS } from "./address";
import bs58 from "bs58";

// Setup Solana connection (you may want to change the URL based on your network)
const connection = new Connection("https://api.devnet.solana.com");

// Converts Base58 private key to Keypair (for signing transactions)
function base58ToKeypair(base58PrivateKey: string): Keypair | null {
    try {
        const privateKeyBuffer = bs58.decode(base58PrivateKey);
        return Keypair.fromSecretKey(privateKeyBuffer);
    } catch (error) {
        console.error("Failed to convert private key", error);
        return null;
    }
}

// Ensure PRIVATE_KEY is defined in environment variables
const Keypayer = PRIVATE_KEY ? base58ToKeypair(PRIVATE_KEY) : null;
if (!Keypayer) {
    throw new Error("Private key is invalid or not provided");
}

export const mintTokens = async (fromAddress: string, toAddress: string, amount: number) => {
    console.log("Minting tokens...");

    if (!Keypayer || !TOKEN_MINT_ADDRESS) {
        throw new Error("Missing keypair or mint address");
    }

    try {
        // The amount should likely be converted into the smallest unit of the token if necessary (e.g., lamports)
        //@ts-ignore
        await mintTo(connection, Keypayer, TOKEN_MINT_ADDRESS, new PublicKey(fromAddress), amount);
        console.log("Minting successful");
    } catch (error) {
        console.error("Error minting tokens", error);
        throw error;
    }
};



export const burnTokens = async (fromAddress: string, toAddress: string, amount: number) => {
    console.log("Burning tokens");
}

export const sendNativeTokens = async (fromAddress: string, toAddress: string, amount: number) => {
    console.log("Sending native tokens");
}