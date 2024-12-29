```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {

    uint256 public number;

    constructor(uint _number) {
        number = _number;
    }

    function increase() public {
        number = number + 1;
    }

}
```


```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

interface IStorage {
    function increase() external;
}

contract contract2 {
    constructor() {

    }

    function proxyAdd() public {
        IStorage(0xcD6a42782d230D7c13A74ddec5dD140e55499Df9).increase();
    }
}

```


You're correct! The behavior you're observing is **Cross-Contract Invocation (CCI)**. Let's dive deeper into the concept and its practical aspects.

---

### **What is Cross-Contract Invocation (CCI)?**

**Cross-Contract Invocation (CCI)** in Solidity refers to the ability of one smart contract to call functions defined in another smart contract. It involves leveraging **external contract addresses and function calls** to interact with other deployed contracts.

- It's fundamental to decentralized systems where contracts interact to form a cohesive ecosystem.
- CCI allows contracts to share functionality, access state variables, and interact with on-chain resources.

---

### **How CCI Works in Your Code**

Your example implements **CCI** where `contract2` calls the `increase` function in the `Storage` contract via the `IStorage` interface.

---

#### **Key Components of CCI:**

1. **Target Contract (`Storage`):**
   - The `Storage` contract manages a `number` variable and exposes an `increase` function.
   - Other contracts can interact with it via its public/external methods.

   ```solidity
   contract Storage {
       uint256 public number;

       constructor(uint _number) {
           number = _number;
       }

       function increase() public {
           number = number + 1;
       }
   }
   ```

2. **Interface (`IStorage`):**
   - Defines the `increase` function's signature. This allows interaction with the `Storage` contract without having direct access to its source code or deployment details.
   - The interface simplifies the invocation of external contracts.

   ```solidity
   interface IStorage {
       function increase() external;
   }
   ```

3. **Caller Contract (`contract2`):**
   - Uses the interface `IStorage` to perform **CCI** by interacting with the `Storage` contract deployed at a specific address (`0xcD6a42782d230D7c13A74ddec5dD140e55499Df9`).

   ```solidity
   IStorage(0xcD6a42782d230D7c13A74ddec5dD140e55499Df9).increase();
   ```

---

### **Why is CCI Useful?**

1. **Interaction with External Systems:**
   - Decentralized systems rely heavily on contracts communicating with each other.
   - Example: A decentralized exchange might call a token contract to perform transactions.

2. **Modularity:**
   - CCI allows contracts to be designed for specific responsibilities.
   - For instance, `Storage` is designed only for managing `number`, while `contract2` handles delegation logic.

3. **Code Reusability:**
   - Use the same `Storage` contract for multiple caller contracts. There’s no need to rewrite or duplicate logic.

4. **Upgradability:**
   - If the `Storage` contract changes, you can deploy a new instance and update the address in `contract2` without changing the caller logic.

---

### **Execution Flow for CCI in Your Example**

1. **Deployment:**
   - Deploy the `Storage` contract to a blockchain. Let's say it gets the address `0xcD6a...`.
   - Deploy the `contract2` contract, which references `Storage`'s address for interaction.

2. **Invocation via `contract2`:**
   - Call `proxyAdd` from `contract2`.
   - This triggers `IStorage(0xcD6a...).increase();`, calling the `increase` function on `Storage`.

3. **Result:**
   - `Storage`'s `number` state variable increments by `1`.

---

### **How Solidity Enables CCI**

1. **Interfaces:** 
   - Provide a standard way to interact with contracts.
   - They ensure that the target contract adheres to a known function signature.

2. **Address Typecasting:** 
   - Contracts are referenced by their addresses.
   - Casting an address as an interface type (`IStorage(address)`) allows function invocation directly.

3. **EVM Function Calls:**
   - Under the hood, Solidity uses the Ethereum Virtual Machine (EVM) `CALL` opcode to send messages between contracts.
   - These calls:
     - Transfer execution.
     - Allow state changes (if necessary).

---

### **Gas Implications of CCI**

- Cross-contract calls are more expensive than internal function calls.
- This is because the EVM needs to:
  1. Execute the transaction for both contracts.
  2. Store the logs and events for each invocation.

**Tip:** Avoid deep nesting of contract calls, as it increases gas consumption and risks running out of gas.

---

### **Examples Where CCI is Used**

1. **Token Standards:**
   - Contracts implementing the ERC20 standard frequently interact with other contracts for transferring tokens or approving spenders.

2. **DeFi Protocols:**
   - Lending platforms like Aave or Compound call collateral and token contracts.

3. **dApp Logic Separation:**
   - Smart contracts may use modular designs to handle core logic and storage separately.

---

### **Summary**

In your example:
- The `contract2` calls the `increase` function in the `Storage` contract using **Cross-Contract Invocation**.
- The `IStorage` interface enables this interaction in a standardized manner without requiring knowledge of `Storage`'s implementation.

