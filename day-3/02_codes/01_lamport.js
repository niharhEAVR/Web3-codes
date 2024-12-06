const { LAMPORTS_PER_SOL } = require("@solana/web3.js")

let lamport = LAMPORTS_PER_SOL;
let count = 0;

while (lamport > 1) {
    count++;
    lamport /= 10;
}

console.log(`1 solana = ${LAMPORTS_PER_SOL} or 10^${count} lamports`)