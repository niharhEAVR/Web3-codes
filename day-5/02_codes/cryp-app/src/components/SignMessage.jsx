import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');

        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message); // this thing is excode the message to an Uint8array
        
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');

        alert(`Success, this wallet is verified, and its actually belongs to you.\n\nMessage signature: ${bs58.encode(signature)}`);

    };

    return (
        <div>
            <h3>--- Sign a Message & verify wallet ---</h3>
            <input id="message" type="text" placeholder="Message" />
            <button onClick={onClick}>
                Sign & verify wallet
            </button>
        </div>
    );
};


// read 06_wallet_verification.md to understand what is goin on here