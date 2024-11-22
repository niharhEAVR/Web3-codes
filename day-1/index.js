// Node.js code for generating SHA-256 
const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)


// now type = node index.js
// to see the output