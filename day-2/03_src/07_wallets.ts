import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";


const mnemonic = "share banner faculty shoulder edit math lady rude fish copy more april";
const seed = mnemonicToSeedSync(mnemonic);
for (let i = 0; i < 4; i++) {
    const path = `m/44'/501'/${i}'/0'`; // This is the derivation path for solana
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}

/*
    m/44'/0'/0' => 1st wallet on bitcoin.
    m/44'/501'/0' => 1st wallet on solana.
    m/44'/60'/0' => 1st wallet on eth.

    m/44'/0'/1' => 2nd wallet on bitcoin.
    m/44'/501'/1' => 2nd wallet on solana.
    m/44'/60'/1' => 2nd wallet on eth.

    and so on....
*/



/*
    1.)my first wallet public key from this seed phrase is = E4b89sx7jPs2pphgN1HWpJzB2MSSJ3thNC5f79upSyQU

    2.)my first wallet public key from this seed phrase is = Gh12sayaUj2LL3Yr4unwLJqcZWdWahu2fyVqL8iKJRn1

    3.)my first wallet public key from this seed phrase is = 5jATc4Nqzr8XAafQ38UhTC5aY7KFHwqZaRJVB4CWWstG

    4.)my first wallet public key from this seed phrase is = Ac48MSAdYQzqWpMVURw3ZWopunitKLMaNCs5Tmu8JMR2
*/

// if you run the code you will get to see that the codes output matches my wallet addresses
// if you paste the mnemonic in may wallet you will get to see the exact results

