import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const words = generateMnemonic(128); // 128 bit
console.log(words, "\n");
// 128 means that generate 12 words Mnemonic phrase

const words2 = generateMnemonic(256); // 256 bit
console.log(words2, "\n");
// 256 means that generate 24 words Mnemonic phrase

const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic); // this is the master seed

console.log(seed, "\n");
console.log(seed.toString("hex"),);

// now to after creation of our Mnemonic phrase we have to store it or convert it into a seed sync, so that we can use the seed sync in future for creating wallets 
