### **How Transactions Work on the Blockchain**

#### **1. User Side (Creating and Sending a Transaction):**
   1. **Key Pair Creation**:  
      - The user generates a **public/private key pair**.  
      - **Private Key**: Secret and used for signing transactions.  
      - **Public Key**: Shared publicly and used for verifying signatures.

   2. **Transaction Creation**:  
      - The user creates a transaction that specifies:  
        - **Recipient's Address** (Alice's address).  
        - **Amount** (e.g., Rs 50).  
        - **Blockchain-specific parameters** (e.g., latest block hash, nonce, gas fee).

   3. **Hashing the Transaction**:  
      - The user generates a **hash** of the transaction to make it compact and secure. This ensures the integrity of the transaction data.

   4. **Signing the Transaction**:  
      - The user signs the **hash** of the transaction using their **private key**. This creates a **digital signature** that proves the transaction originated from the owner of the private key.

   5. **Sending the Transaction**:  
      - The user sends the following to a blockchain node:  
        - **Raw Transaction**: The original transaction details.  
        - **Signature**: The digital signature created using the private key.  
        - **Public Key**: To allow miners to verify the signature.

---

#### **2. Miner/Validator Side (Validating and Adding the Transaction):**

   1. **Recreating the Hash**:  
      - The miner recreates the hash from the **raw transaction** sent by the user.

   2. **Signature Verification**:  
      - The miner uses the **public key** to verify the user's **signature** and confirm the transaction's authenticity.  
      - This step ensures the transaction was signed by the private key corresponding to the public key.

   3. **Transaction Validation**:  
      - The miner checks additional parameters:  
        - Does the sender have sufficient funds?  
        - Are blockchain-specific parameters correct (e.g., nonce, gas, latest block hash)?  

   4. **Adding to the Block**:  
      - If all checks pass, the miner includes the transaction in the current block.  
      - This block is then added to the blockchain once mining or validation (e.g., proof of stake) is complete.

---

### **Summary**
1. **User**: Creates and signs the transaction with their private key and sends it to the blockchain network.
2. **Miner**: Validates the transaction by verifying the signature, checks the sender's balance, and includes it in a block if valid.

This process ensures **security**, **integrity**, and **trustlessness** in the blockchain system.