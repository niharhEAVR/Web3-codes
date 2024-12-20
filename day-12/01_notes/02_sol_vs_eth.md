The ease of creating custom tokens on Solana compared to Ethereum primarily boils down to differences in **architecture**, **tooling**, and **standards**:

---

### 1. **Simpler Architecture and Token Programs on Solana**
- **Solana SPL Token Program**:
   - Solana provides a built-in **SPL Token Program** specifically designed for creating and managing fungible and non-fungible tokens. 
   - This is a pre-deployed program on every Solana blockchain node, so you don't need to write smart contract code from scratch. 
   - You only need the `solana-cli` or an existing library (e.g., `@solana/spl-token`), and with a few commands, your custom token is up and running.

- **Minimal Coding**:
   - Creating a token boils down to initializing a token account, minting tokens, and defining a supply—all handled by default tools and libraries.
   - It's easier for beginners since the infrastructure for tokens is standardized and built into the network.

---

### 2. **Ethereum's Smart Contract Approach**
- **Custom Token via ERC Standards**:
   - Ethereum relies on **smart contracts** to create tokens, often using the **ERC-20 standard** for fungible tokens or **ERC-721/1155** for NFTs.
   - Writing an ERC-20 token requires:
     1. Writing a contract in Solidity.
     2. Implementing essential functions like `balanceOf`, `transfer`, and `approve`.
     3. Deploying the contract on Ethereum.
   - Although tools like OpenZeppelin provide pre-built templates, deploying and managing the contract introduces complexity and higher gas fees.

- **Deployment Complexity**:
   - You have to write and test your smart contract code for safety and correctness to avoid security vulnerabilities.
   - Deployment involves interactions with the Ethereum network and fees for every transaction (smart contract deployment is costly compared to Solana).

---

### 3. **Gas Fees**
- **Solana**:
   - Transactions on Solana are extremely low-cost, typically under a fraction of a cent. You don’t feel penalized for experimenting with token creation.
- **Ethereum**:
   - High gas fees (especially on Ethereum mainnet) make deploying a custom token prohibitive for small-scale users. Developers often need to experiment on testnets first, adding steps to the process.

---

### 4. **Development Ecosystem**
- **Solana**:
   - Development tools like Phantom wallet integration and SPL libraries are purpose-built for a more streamlined token creation process.
   - Unified CLI and SDKs abstract much of the complexity.
- **Ethereum**:
   - While more versatile due to smart contracts, Ethereum's reliance on manual contract writing and deployment tools (e.g., Hardhat, Truffle) requires additional learning and setup time.

---

### 5. **Scalability and Transaction Speed**
- **Solana**:
   - High throughput (thousands of transactions per second) enables near-instant token operations.
- **Ethereum**:
   - Ethereum's lower throughput and potentially slow block times (without rollups) add friction to the token creation process.

---

### TL;DR
Creating tokens on Solana is easier because:
- It has a built-in token program (SPL Token Program), eliminating the need to write and deploy custom smart contracts.
- Token-related tools and libraries on Solana are streamlined and user-friendly.
- Transaction costs on Solana are significantly lower than Ethereum.

In contrast, Ethereum requires deploying a custom smart contract (even if using templates), making it less straightforward for simple token creation tasks.