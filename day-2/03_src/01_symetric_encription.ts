import crypto from 'crypto'

// Generate a random encryption key
const key = crypto.randomBytes(32); // 32 bytes = 256 bits
console.log("\n", key.toString(), "\n");

const iv = crypto.randomBytes(16); // Initialization vector (IV)
console.log("\n", iv.toString(), "\n");

// Function to encrypt text
//@ts-ignore
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Function to decrypt text
//@ts-ignore
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const textToEncrypt = 'cooldude looks cool';
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log('Original Text:', textToEncrypt);
console.log('Encrypted Text:', encryptedText);
console.log('Decrypted Text:', decryptedText);
