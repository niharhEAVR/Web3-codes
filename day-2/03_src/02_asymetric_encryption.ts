import * as ed from "@noble/ed25519";
// this line is importing and storing the 'noble module' inside the 'ed' variable

// here is the async function
async function main() {
    // Generate a secure random private key, using the methods of that module
    const privKey = ed.utils.randomPrivateKey();
    console.log(privKey);


    // Convert the message "hello world" to a Uint8Array
    const message = new TextEncoder().encode("Nihar sended 100 usdt to Naveen.");

    // Generate the public key from the private key, using the methods of that module
    const pubKey = await ed.getPublicKeyAsync(privKey);// this getPublicKeyAsync is a async function thats we are using await before it
    console.log(pubKey);

    // Sign or Signature the message, using the methods of that module
    const signature = await ed.signAsync(message, privKey);
    console.log(signature);

    // Verify the signature
    const isValid = await ed.verifyAsync(signature, message, pubKey);

    // Output the result
    console.log(isValid); // Should print true if the signature is valid
}

main();


// This is a low level api call library for encrytion and decryption

// the summary is this code is creating a private key then converted a string into a Uint8Array then using the private key its created a public key then converted the Uint8Array into a signature using private key and lastly checking or verifing that the signature matches the messege or not... if its gives true value then the miner will accept the transction or miner will reject the transction

// this code is not running on my vs code using typescript!!!



/*
This code demonstrates **digital signatures** using the `@noble/ed25519` library. Here's the summary of what it does:

1. **Private Key Generation**: Creates a random **private key**, which is a secret used for signing messages.

2. **Message Conversion**: Converts the string `"hello world"` into a format suitable for cryptographic operations (a `Uint8Array`).

3. **Public Key Generation**: Derives a **public key** from the private key. This public key can be shared and is used to verify signatures.

4. **Message Signing**: Creates a **digital signature** of the message using the private key. This proves that the message was signed by the owner of the private key.

5. **Signature Verification**: Checks whether the signature matches the message and public key. If valid, it confirms that the signature:
   - Was created using the private key associated with the public key.
   - Has not been tampered with.

6. **Output**: Prints `true` if the signature is valid, meaning the verification succeeded. This is how authenticity and integrity are ensured.

In simple terms:
- The private key signs the message.
- The public key verifies the signature.
*/