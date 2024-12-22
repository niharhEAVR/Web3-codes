```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract VisibilityExample {

    mapping (address => string) users;

    constructor(){}


    function signUp(string memory userName) public {
        users[msg.sender] = userName;
    }

    function whoAmI() public view returns (address) {
        return msg.sender;
    }

    function getUser() public view returns (string memory) {
        return users[msg.sender];
    }

   }

```


### **Code Explanation**

#### **Purpose:**
This contract allows users to "sign up" by associating their Ethereum address (`msg.sender`) with a username, retrieve their own address, and check the username they registered.

---

### **Code Walkthrough**

#### **1. Contract Declaration and License:**
```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
```
- **SPDX-License-Identifier:** Specifies the license for the contract.
- **Pragma Statement:** The code is written in Solidity version 0.8.0 or above. This ensures that features and fixes introduced in this version are used.

---

#### **2. State Variables:**

```solidity
mapping (address => string) users;
```
- **`users`:**  
  - A **mapping** that links an Ethereum address (`address`) to a username (`string`).
  - Think of it as a key-value store:
    - `address` → Key (e.g., `0x123...`).
    - `string` → Value (e.g., `"Alice"`).
  - This data is stored on the blockchain, making it persistent and publicly viewable.

---

#### **3. Constructor:**
```solidity
constructor() {}
```
- This is an empty constructor, meaning it doesn’t initialize anything or require parameters.
- Constructors in Solidity are called **once**, when the contract is deployed, and are used to set up the initial state of the contract.

---

#### **4. Function: `signUp`**

```solidity
function signUp(string memory userName) public {
    users[msg.sender] = userName;
}
```

- **Purpose:** Lets a user sign up by associating their Ethereum address (`msg.sender`) with a chosen username (`userName`).

- **Key Points:**
  1. **Input:**
     - The function takes `userName`, a string, as input. The keyword `memory` is used because the string is temporary and won't be stored in contract state directly.
  2. **`msg.sender`:**
     - A built-in global variable in Solidity that refers to the address initiating the function call.
     - In this context, `msg.sender` is stored as the **key** in the `users` mapping.
  3. **Action:**  
     - Updates the `users` mapping, storing the `userName` associated with the `msg.sender`.

---

#### **5. Function: `whoAmI`**

```solidity
function whoAmI() public view returns (address) {
    return msg.sender;
}
```

- **Purpose:** Returns the Ethereum address of the user who called this function.
- **`msg.sender`:**
  - It represents the wallet address of the current caller of the contract function.

- **View Modifier:**
  - The keyword `view` is used because this function does not modify the blockchain state; it only reads the `msg.sender` value.

- **Output Example:** If called by the wallet `0x123...`, the function will return:
  ```solidity
  0x123...
  ```

---

#### **6. Function: `getUser`**

```solidity
function getUser() public view returns (string memory) {
    return users[msg.sender];
}
```

- **Purpose:** Retrieves the username associated with the caller’s Ethereum address (`msg.sender`).

- **How it works:**
  - Checks the `users` mapping using `msg.sender` as the key.
  - Returns the corresponding value (i.e., username).
  - If no username has been registered, the function will return an empty string (`""`).

---

### **How the Contract Works in Practice**

#### **1. Deployment:**
Once the contract is deployed, no data is pre-set. The `users` mapping starts as empty.

#### **2. User Actions:**
Users interact with the contract by calling its functions.

---

#### **Example Walkthrough:**

1. **Alice Registers a Username:**
   ```solidity
   signUp("Alice");
   ```
   - `msg.sender`: Alice's wallet address (e.g., `0x123...`).
   - **Mapping Update:**
     ```solidity
     users[0x123...] = "Alice";
     ```

2. **Alice Checks Her Address:**
   ```solidity
   whoAmI();
   ```
   - Returns: `0x123...`.

3. **Alice Retrieves Her Username:**
   ```solidity
   getUser();
   ```
   - Returns: `"Alice"`.

---

### **Key Concepts in this Contract**

1. **State Variables:**
   - The `users` mapping is stored on the blockchain. Its data is public and persistent.

2. **Mappings:**
   - **Mapping Characteristics:**
     - Maps a key (address) to a value (string).
     - If a key does not exist, Solidity implicitly maps it to a default value (empty string for `string`).
     - Example of default behavior: If `users[0x987...]` has not been set, `getUser()` will return `""`.

3. **Visibility Modifiers:**
   - **Public:**
     - These functions can be called by anyone on the blockchain.

4. **Global Variables (`msg.sender`):**
   - Represents the caller's wallet address, enabling user-specific logic.

---

### **Potential Improvements**
1. **Restrict `signUp` to Prevent Re-registration:**  
   Once a user registers, you can prevent them from re-registering with a simple `require` statement.
   ```solidity
   require(bytes(users[msg.sender]).length == 0, "User already exists");
   ```
2. **List All Registered Users (Advanced):**
   - Add functionality to retrieve a list of all registered users, e.g., using an array.

---

Would you like me to expand on `msg.sender` or mappings further?

### **Expanding on `msg.sender` and Mappings**

---

### **1. `msg.sender`**

#### **What is `msg.sender`?**

- `msg.sender` is a **global variable** in Solidity that represents the **address** of the entity interacting with the contract.
- This could be:
  - A **wallet address** if the transaction originates from an Ethereum account (human or programmatic).
  - A **contract address** if the transaction is triggered from another smart contract.

---

#### **Key Features of `msg.sender`:**

1. **Tracks the Caller:**
   - It identifies the account (or contract) sending the transaction to the smart contract.

2. **Contextual:**
   - The value of `msg.sender` changes depending on who calls the function. For instance:
     - If **Alice** calls the contract, `msg.sender` is Alice's Ethereum address.
     - If another **contract** calls the function, `msg.sender` is the address of that contract.

3. **Security Implications:**
   - You can restrict certain actions to specific addresses using `msg.sender`, as in an owner-controlled contract.

---

#### **Example Code: Checking and Restricting Access**
```solidity
contract RestrictedExample {
    address public owner;

    constructor() {
        owner = msg.sender; // The deployer of the contract becomes the owner
    }

    function onlyOwnerCanCall() public view returns (string memory) {
        require(msg.sender == owner, "Only the owner can access this function.");
        return "You are the owner!";
    }
}
```
- **How It Works:**
  - The owner is set when the contract is deployed.
  - Only the owner (the address that deployed the contract) can execute the `onlyOwnerCanCall()` function.

---

### **Use Cases for `msg.sender`**
1. **Identify Users:**
   - You can use `msg.sender` to differentiate between users interacting with the contract.
   - Example:
     ```solidity
     function signUp(string memory userName) public {
         users[msg.sender] = userName; // Associates msg.sender with a username
     }
     ```

2. **Authorization Checks:**
   - Restrict access to functions based on the caller’s address.

3. **Custom Behavior:**
   - Implement caller-specific logic (e.g., applying unique rules based on their address).

---

### **2. Mappings in Solidity**

#### **What is a Mapping?**

A mapping in Solidity is essentially a **key-value store**. It is similar to a hash table or dictionary in other programming languages.

---

#### **Syntax:**
```solidity
mapping(KeyType => ValueType) visibility variableName;
```

#### **Components:**
1. **`KeyType`:** Specifies the data type of the key.
   - Allowed types: `address`, `uint`, `bytes`, etc.
   - **Not Allowed:** Complex types like mappings, structs, arrays, or contracts.
2. **`ValueType`:** Specifies the type of value stored.
   - Can be simple (`uint`, `string`) or complex (`struct`, `mapping`).

---

#### **Example Declaration:**
```solidity
mapping(address => string) public users;
```

- **Key:** `address` (e.g., `0x1234...`).
- **Value:** `string` (e.g., `"Alice"`).
- **Visibility Modifier (`public`):** Allows other contracts and external users to read the mapping.

---

#### **How Mappings Work**

Mappings in Solidity **do not store keys explicitly**. Instead, values are computed based on their hash in the background.

1. **Adding/Updating Entries:**
   ```solidity
   users[0x1234...] = "Alice";
   ```
   - Stores `"Alice"` for key `0x1234...`.

2. **Retrieving Entries:**
   ```solidity
   string memory user = users[0x1234...];
   ```
   - Fetches `"Alice"` if it exists. If no value is set for a key, the default value for the `ValueType` is returned (e.g., `""` for `string`, `0` for `uint`).

3. **Deleting Entries:**
   - Mappings do not have a `delete` operation, but you can **reset a value to its default**:
     ```solidity
     users[0x1234...] = "";
     ```

---

#### **Key Properties:**
1. **No Iteration:**
   - Mappings cannot be looped through natively in Solidity.
   - To maintain a list of keys (addresses), an additional array is typically used.

2. **Default Values:**
   - For keys not explicitly stored, mappings return a default value of the `ValueType`.
   - For example:
     - If `users[0x5678...]` has not been set:
       ```solidity
       string memory user = users[0x5678...]; // Returns: ""
       ```

3. **Highly Efficient:**
   - Mappings are optimized for gas efficiency. Retrieving a value is always O(1).

---

#### **Example: Basic Mapping Operations**

```solidity
contract MappingExample {
    mapping(address => uint) balances;

    function setBalance(uint _amount) public {
        balances[msg.sender] = _amount; // Associates msg.sender with _amount
    }

    function getBalance() public view returns (uint) {
        return balances[msg.sender]; // Fetches the balance for msg.sender
    }

    function clearBalance() public {
        balances[msg.sender] = 0; // Resets the balance for msg.sender
    }
}
```

---

### **Advanced Use Case: Managing Access with Mappings**
Mappings can also be used for role-based access controls.

```solidity
contract AccessControl {
    mapping(address => bool) private isAdmin;

    constructor() {
        isAdmin[msg.sender] = true; // Deployer starts as the admin
    }

    function addAdmin(address _user) public {
        require(isAdmin[msg.sender], "Caller is not an admin");
        isAdmin[_user] = true;
    }

    function removeAdmin(address _user) public {
        require(isAdmin[msg.sender], "Caller is not an admin");
        isAdmin[_user] = false;
    }

    function checkAdmin() public view returns (bool) {
        return isAdmin[msg.sender];
    }
}
```

---

Let me know if you want examples using `msg.sender` in more advanced cases like contracts interacting with each other!