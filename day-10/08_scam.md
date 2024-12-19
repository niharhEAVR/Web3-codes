This kind of scam is referred to as a **"honey pot" scam** in the crypto space. Here's how it works and why you can't move the USDC:

---

### **How the Scam Works**
1. **Temptation with "Free" Money**:
   - Scammers create wallets with balances (e.g., 1000 USDC) and publicize the seed phrases of those wallets.
   - People are enticed to log in, seeing what appears to be "free money."

2. **Hidden Conditions**:
   - While the wallet *looks like it has 1000 USDC*, the tokens are tied to malicious conditions or smart contracts.
   - Scammers have programmed the system so that:
     - **Outgoing Transactions are Restricted**: You can't send the funds to another wallet because the token's transfer function is modified in the smart contract.
     - OR gas fees need to be paid using native ETH, which you would fund, allowing them to siphon off your deposited ETH.

3. **Gas Trap**:
   - You can't transfer funds (like USDC) without ETH to cover transaction fees on the Ethereum network.
   - When you send ETH to the wallet for gas, scammers detect it immediately and use a bot or pre-programmed mechanism to sweep that ETH to their own address.

---

### **Why You Can't Move the Money**
1. **Custom Smart Contracts**:
   - The 1000 USDC isn't real, or it's tied to a **custom ERC-20 contract** where:
     - Transfers out require special conditions you can't fulfill.
     - Transfers fail automatically for addresses other than the scammer's.

2. **Fake Token Mimicking USDC**:
   - The 1000 "USDC" may not actually be **real USDC** but rather a custom token with the same name or ticker (like a fake version).
   - Scammers manipulate wallet interfaces to display false balances.

3. **Frozen Balances**:
   - The tokens might be locked in a way where:
     - Only specific accounts (owned by the scammer) are authorized to withdraw them.
     - All other transfer attempts fail.

---

### **Red Flags of Such Scams**
1. **Unrealistic Offers**:
   - Publicly available seed phrases offering "free money" are almost always traps.
2. **Unfamiliar Token Contracts**:
   - If you look closely, the "USDC" contract address might not match the legitimate USDC contract (e.g., the real USDC on Ethereum is `0xA0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`).
3. **Requires ETH Deposit**:
   - Any situation where "free money" requires you to deposit gas fees is a major warning sign.

---

### **How to Protect Yourself**
1. **Never Use Seed Phrases Shared by Others**:
   - Once a seed phrase is shared publicly, that wallet is **compromised forever**.
2. **Verify Token Contracts**:
   - Use trusted explorers (e.g., Etherscan) to confirm the legitimacy of token contract addresses.
3. **Avoid Sending ETH to Such Wallets**:
   - By sending ETH, you're funding the scammers.
4. **Inspect Smart Contract Code**:
   - If you're skilled, you can verify the smart contract code (e.g., via Etherscan) to look for transfer restrictions.

---

### **How Scammers Benefit**
1. **Stealing Your ETH**:
   - The scam primarily targets your ETH deposit for gas fees.
   - Their bots will instantly move any ETH you send to their controlled accounts.
2. **Gaining Control Over Assets**:
   - If you're lured into linking your main wallet to their system or interacting with malicious contracts, they might gain indirect access to your wallet.

---

### **Advice**
- If you've come across such a "honey pot" scam, do not interact further. You will likely lose any funds you add (ETH or other tokens) attempting to "rescue" the fake money.