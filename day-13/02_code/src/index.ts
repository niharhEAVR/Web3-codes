// Import dependencies
import express from 'express';
import { burnTokens, mintTokens, sendNativeTokens } from './MintToken';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Mock Helius Response (replace with actual response)
const HELIUS_RESPONSE = {
    "nativeTransfer": [{
        "amount": 10000000,
        "fromUserAccount": "7hireWCnGtyZZQsM9NuH33qMQQuC2DGYiCGGKwpbULJ2",
        "toUserAccount": "9Jnp7TJsRPKtq1mb4NK9xNxiLpdzvuNihkWTWo6ZYR7u"
    }]
};

const VAULT = "9Jnp7TJsRPKtq1mb4NK9xNxiLpdzvuNihkWTWo6ZYR7u";  // Default value if missing in the .env file

//@ts-ignore
app.post('/helius', async (req, res) => {

    const incomingTx = HELIUS_RESPONSE.nativeTransfer.find(x => x.toUserAccount === VAULT);
    if (!incomingTx) {
        return res.json({ message: "processed" });
    }

    const fromAddress = incomingTx.fromUserAccount;
    const toAddress = VAULT;
    const amount = incomingTx.amount;
    const type = "received_native_sol";

    try {
        if (type === "received_native_sol") {
            await mintTokens(fromAddress, toAddress, amount);
        } else {
            await burnTokens(fromAddress, toAddress, amount);  // Only if you're burning tokens
            await sendNativeTokens(fromAddress, toAddress, amount);  // Send tokens
        }

        res.send('Transaction successful');
    } catch (error) {
        console.error("Error during transaction: ", error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/helius');
});

