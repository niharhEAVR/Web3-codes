const express = require("express");
const { Keypair, Transaction, Connection } = require("@solana/web3.js");
const jwt = require("jsonwebtoken");
const bs58 = require('bs58');
const cors = require("cors");
const { userModel } = require("./dbSchema")


const app = express()
app.use(cors())
app.use(express.json())
const JWT_SECRET = "123456"

const connection = new Connection(
    'https://solana-devnet.g.alchemy.com/v2/NyDfwQ_XmNAwVIkSemy1jhnjPWyhs6iy'
);


app.post("/api/user/txn/sign", async (req, res) => {
    try {
        const { message } = req.body;
        console.log(message);
        

        if (!message) {
            return res.status(400).json({ error: 'Transaction message is required' });
        }

        console.log('Before Deserialize');
        const serializedTransaction = Buffer.from(message, 'base64');
        const tx = Transaction.from(serializedTransaction);

        console.log('After Deserialize');

        console.log(bs58);
        
        const keyPair = Keypair.fromSecretKey(
            bs58.default.decode(process.env.PRIVATE_KEY)
        );

        const { blockhash } = await connection.getLatestBlockhash();
        tx.recentBlockhash = blockhash;
        tx.feePayer = keyPair.publicKey;

        tx.sign(keyPair);

        const signature = await connection.sendTransaction(tx, [keyPair]);
        console.log('Transaction Signature:', signature);

        res.json({
            message: 'Transaction signed successfully',
            signature,
        });
    } catch (error) {
        console.error('Transaction Signing Error:', error);
        res.status(500).json({ error: 'Failed to sign the transaction' });
    }

})


// app.post("/api/user/signup", async (req, res) => {
//     const { username, password } = req.body;

//     const keypair = new Keypair()
//     await userModel.create({
//         username,
//         password,
//         publicKey: keypair.publicKey.toString(),
//         privateKey: keypair.secretKey.toString()
//     })
//     res.json({
//         message: keypair.publicKey.toString()
//     })
// })

// app.post("/api/user/signin", async (req, res) => {
//     const { username, password } = req.body

//     const user = userModel.findOne({
//         username,
//         password
//     })

//     if (user) {
//         const token = jwt.sign({
//             id: user.id
//         }, JWT_SECRET)

//         res.json({
//             Token: token
//         })

//     } else {
//         res.status(403).json({
//             message: "Incorrect credentials"
//         })
//     }

// })

// app.get("/api/user/txs", async (req, res) => {

// })


app.listen(3000)