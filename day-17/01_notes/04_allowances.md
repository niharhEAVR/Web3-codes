### **Allowance Concept in Blockchain**
- The **allowance mechanism** is used in token contracts to enable one address (the owner of tokens) to allow another address (a spender) to spend a specified amount of tokens on their behalf.
- This is common in ERC-20 tokens where users interact with decentralized apps (dApps) that need permission to use their tokens.

---

### **Code for Allowance in Solidity**

Here’s how you can add an **allowance** feature to your contract:

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Nicoin {
    address public owner;
    uint public totalSupply;
    mapping (address => uint) public balances;
    mapping (address => mapping (address => uint)) public  allowances;

    string coinName = "Nicoin";
    string symbol = "NCN";

    constructor( ) {
        owner = msg.sender;
    }

    function mint(uint amount) public {
        require(owner == msg.sender);
        balances[owner] += amount;
        totalSupply += amount;
    }

    function mintTo(uint amount, address to ) public {
        require(owner == msg.sender);
        balances[to] += amount;
        totalSupply += amount;
    }

    function transfer(uint amount, address to) public {
        uint existingBalance = balances[msg.sender];
        require(existingBalance >= amount);
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function burn(uint amount) public {
        uint balance = balances[msg.sender];
        require(balance >= amount, "You dont have enough baance");
        balances[msg.sender] -= amount;
        totalSupply -= amount;
    }

    function approve(address spender, uint amount) public {
        allowances[msg.sender][spender] = amount;
    }  

    function transferFrom(address from, address to, uint amount) public {
        uint allowanceAmount = allowances[from][msg.sender];
        uint fromBalance = balances[from];
        require(allowanceAmount >= amount, "Allowance exceeded");
        require(fromBalance >= amount, "Insufficient balance");

        balances[from] -= amount;
        balances[to] += amount;
        allowances[from][msg.sender] -= amount;
    }

    function allowance(address _owner, address spender) public view returns (uint) {
        return allowances[_owner][spender];
    }

}
```

---

### **Explanation**
1. **Mapping for Allowances**:
   - `mapping(address => mapping(address => uint)) public allowances`:
     - This creates a double mapping to store allowances for token owners (`owner`) and spenders (`spender`).

2. **Approve Function**:
   - `approve(address spender, uint amount)`:
     - This function allows a user (`msg.sender`) to grant a spender permission to spend up to `amount` of their tokens.

3. **Transfer From**:
   - `transferFrom(address from, address to, uint amount)`:
     - This function allows a spender (like a dApp or third party) to transfer tokens from the owner’s account (`from`) to a recipient (`to`), based on the allowed amount.
     - It also reduces the allowance after the transfer.

4. **View Allowance**:
   - `allowance(address _owner, address spender)`:
     - This function allows users to query the current allowance of a spender for a specific owner.


Certainly! Let's break it down step by step and make it easy for you to understand.

---

### **What is Mapping?**
In Solidity, **mapping** is like a **key-value pair database**:
- You provide a **key** (input), and it returns a **value**.
- Example:
  ```solidity
  mapping(address => uint) public balances;
  ```
  Here:
  - Key = `address` (e.g., a wallet address).
  - Value = `uint` (e.g., the balance of tokens for that address).

---

### **What is `mapping(address => mapping(address => uint))`?**
It’s simply a **mapping inside another mapping** (nested mapping):
- The **outer mapping** uses the **owner’s address** as the key.
- The **inner mapping** uses the **spender’s address** as the key.
- The value is `uint` (the amount the spender is allowed to spend on behalf of the owner).

This is written as:
```solidity
mapping(address => mapping(address => uint)) public allowances;
```

#### How to Think About It:
- **Outer Mapping Key** (`address`): Represents the **token owner’s address**.
- **Inner Mapping Key** (`address`): Represents the **spender’s address**.
- **Value** (`uint`): The amount of tokens the spender is allowed to spend on behalf of the owner.

---

### **Real-World Example**
Let’s imagine three users in a blockchain token system:
- **Alice** (Owner): Address = `0xA1`
- **Bob** (Spender): Address = `0xB1`
- **Token Contract**

When **Alice approves Bob** to spend 100 tokens on her behalf, the nested mapping works as follows:

1. Outer Mapping:
   - The key = Alice’s address (`0xA1`).

2. Inner Mapping (under Alice’s entry):
   - Key = Bob’s address (`0xB1`).
   - Value = `100`.

   So the mapping looks like:
   ```
   allowances[0xA1][0xB1] = 100
   ```

Now Bob is allowed to spend 100 tokens from Alice’s balance.

---

### **Using `approve` Function**
The `approve` function is what allows the token owner to set this mapping value.

Code:
```solidity
function approve(address spender, uint amount) public {
    allowances[msg.sender][spender] = amount;
}
```

How it works:
1. `msg.sender` is the owner (the person calling the function).
2. `spender` is the address Bob (`0xB1` in this case).
3. `amount` is the value Alice wants to allow Bob to spend.

If **Alice (0xA1)** calls:
```solidity
approve(0xB1, 100);
```

It updates the nested mapping:
```
allowances[0xA1][0xB1] = 100
```

---

### **Using `allowance` Function**
The `allowance` function allows anyone to **check how much a spender is allowed to spend** for a particular owner.

Code:
```solidity
function allowance(address _owner, address spender) public view returns (uint) {
    return allowances[_owner][spender];
}
```

Example:
- If someone queries:
  ```solidity
  allowance(0xA1, 0xB1);
  ```
  This will return:
  ```
  100
  ```

---

### **Using `transferFrom` Function**
This function allows the spender to spend the tokens on behalf of the owner.

Code:
```solidity
function transferFrom(address from, address to, uint amount) public {
    require(allowances[from][msg.sender] >= amount, "Allowance exceeded");
    require(balances[from] >= amount, "Insufficient balance");

    balances[from] -= amount;                    // Deduct tokens from the owner
    balances[to] += amount;                      // Add tokens to the recipient
    allowances[from][msg.sender] -= amount;      // Reduce allowance
}
```

Example:
- If Bob (Spender, `0xB1`) calls:
  ```solidity
  transferFrom(0xA1, 0xC1, 50);
  ```
  Steps:
  - Check if `allowances[0xA1][0xB1] >= 50`. ✅ (Allowed = 100, so it’s valid.)
  - Deduct 50 tokens from Alice’s balance (`0xA1`).
  - Add 50 tokens to Charlie’s balance (`0xC1`).
  - Reduce Bob’s allowance:
    ```
    allowances[0xA1][0xB1] = 50
    ```



---

### **Why is Allowance Useful?**
1. **dApps Integration**:
   - Many decentralized applications need to access your tokens to execute smart contracts, e.g., paying for services or swapping tokens in a decentralized exchange.
   
2. **Safety**:
   - Users retain control over how many tokens a third party can spend. This minimizes the risk of fraud or unexpected over-spending.

3. **Automation**:
   - Allowing a spender to transfer funds makes automation possible (e.g., recurring payments).

4. **Efficiency**:
   - The allowance eliminates the need to approve every single transaction individually, simplifying user experience.

---

### **Summary**
- **Outer mapping key** = Token owner’s address (`0xA1`).
- **Inner mapping key** = Spender’s address (`0xB1`).
- **Value** = Amount the spender can spend on behalf of the owner (`100` in this case).

It allows a user to grant permission to others to use their tokens in specific amounts, enabling flexible token transfer workflows.


---

---
---


Let's simplify **how to input values for the allowance functions** and how they work step-by-step. I’ll explain how to set inputs and observe outputs using your functions.

---

### **Main Functions for Allowance**

There are 3 functions we focus on:  
1. **approve**: Grants permission to a spender to use the owner’s tokens.  
2. **allowance**: Checks how many tokens the spender is allowed to use.  
3. **transferFrom**: Lets the spender transfer tokens from the owner’s balance to another account.

---

### **Steps with Input and Output**

#### **Step 1: Approve Allowance**

Call the `approve` function to set how many tokens a spender can use.

```solidity
function approve(address spender, uint amount) public {
    allowances[msg.sender][spender] = amount;
}
```

- **Input**:
  - Caller: **Alice (`msg.sender`)** (`0xA1`).
  - Spender: Bob (`0xB1`).
  - Amount: `100` (allowing Bob to spend 100 tokens).

- Example Input:
  ```solidity
  approve(0xB1, 100);
  ```

- **Output (state change)**:
  The mapping `allowances[0xA1][0xB1]` is updated:
  ```text
  allowances[0xA1][0xB1] = 100
  ```

- Meaning:
  Alice gives Bob permission to spend **100 tokens** from her balance.

---

#### **Step 2: Check Allowance**

Use the `allowance` function to check how many tokens the spender is allowed to use.

```solidity
function allowance(address owner, address spender) public view returns (uint) {
    return allowances[owner][spender];
}
```

- **Input**:
  - Owner: Alice (`0xA1`).
  - Spender: Bob (`0xB1`).

- Example Input:
  ```solidity
  allowance(0xA1, 0xB1);
  ```

- **Output**:
  The function returns:
  ```text
  100
  ```

- Meaning:
  Bob is allowed to spend **100 tokens** from Alice’s account.

---

#### **Step 3: Spender Uses `transferFrom`**

Now Bob can use the `transferFrom` function to transfer tokens from Alice’s account to someone else.

```solidity
function transferFrom(address from, address to, uint amount) public {
    require(allowances[from][msg.sender] >= amount, "Allowance exceeded");
    require(balances[from] >= amount, "Insufficient balance");

    balances[from] -= amount;
    balances[to] += amount;
    allowances[from][msg.sender] -= amount;
}
```

- **Input**:
  - From: Alice (`0xA1`).
  - To: Charlie (`0xC1`).
  - Amount: `50`.

- Example Input:
  ```solidity
  transferFrom(0xA1, 0xC1, 50);
  ```

- **What Happens**:
  - Check if Bob has an allowance of `>= 50`:
    ```text
    allowances[0xA1][0xB1] = 100   (PASS)
    ```
  - Check if Alice has `>= 50` tokens in her balance.
  - Reduce Alice's balance by `50` and add it to Charlie’s balance.
  - Decrease the allowance by `50`:
    ```text
    allowances[0xA1][0xB1] = 50
    ```

- **Output (state change)**:
  - Alice’s balance decreases.
  - Charlie’s balance increases.
  - Bob’s allowance reduces from `100` to `50`.

---

### **Complete Flow Example**
#### Initial State:
- Alice’s Balance: `1000`.
- Bob’s Allowance: `0`.
- Charlie’s Balance: `0`.

#### Steps:
1. **Approve Bob to spend 100 tokens on behalf of Alice**:
   ```solidity
   approve(0xB1, 100);
   ```
   - Allowance for Bob is set to `100`.
   - `allowances[0xA1][0xB1] = 100`.

2. **Check Bob’s Allowance**:
   ```solidity
   allowance(0xA1, 0xB1);
   ```
   - Returns `100`.

3. **Bob Transfers 50 Tokens from Alice to Charlie**:
   ```solidity
   transferFrom(0xA1, 0xC1, 50);
   ```
   - Alice’s balance: `1000 - 50 = 950`.
   - Charlie’s balance: `50`.
   - Bob’s remaining allowance: `100 - 50 = 50`.

---

### **Output Recap**
After these actions:
1. **Alice’s Balance**:
   ```text
   950
   ```

2. **Charlie’s Balance**:
   ```text
   50
   ```

3. **Bob’s Remaining Allowance**:
   ```text
   allowances[0xA1][0xB1] = 50
   ```

---

### **Key Notes**
1. **`approve`:** Owner gives permission to the spender (Bob).
2. **`allowance`:** Check how many tokens are left for the spender to use.
3. **`transferFrom`:** Spender uses the tokens to transfer them to another account, reducing the allowance.

Feel free to ask if something is still unclear, and I’ll guide you further! 😊