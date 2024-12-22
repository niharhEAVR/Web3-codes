```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Calculator {
    uint num;

    constructor (uint _num){
        num = _num;
    }

    function sum(uint _value) public {
        num += _value;
    }

    function sub(uint _value) public {
        num -= _value;
    }

    function mul(uint _value) private  {
        num *= _value;
    }

    function divide(uint _value) public {
        require(_value != 0 , "value cannot be 0");
        num /= _value;
    }

    function showNum() public view returns (uint) {
        return num;
    }
}
```


Let's break down the code and explain it step-by-step:

---

### **1. License Declaration**
```solidity
// SPDX-License-Identifier: GPL-3.0
```
- The **SPDX license identifier** specifies that this contract's license is **GNU General Public License version 3.0**.
- Including an SPDX license tag is good practice for code clarity and ensuring legal compliance.

---

### **2. Solidity Version Declaration**
```solidity
pragma solidity >=0.8.2 <0.9.0;
```
- Declares the version of Solidity required to compile the contract.
- This contract is compatible with Solidity versions from `0.8.2` (inclusive) to below `0.9.0`.
- Solidity version `>=0.8.0` introduced safety features like automatic handling of integer overflow and underflow.

---

### **3. Contract Declaration**
```solidity
contract Calculator {
```
- The `Calculator` contract encapsulates all its state variables and functions, making it a logical unit.

---

### **4. State Variable**
```solidity
uint num;
```
- **`num`**: A state variable of type `uint` (unsigned integer). 
  - Defaults to `0` if not explicitly initialized.
  - Stored persistently on the Ethereum blockchain (in contract storage).

---

### **5. Constructor**
```solidity
constructor (uint _num){
    num = _num;
}
```
- The **constructor** is a special function called only once when the contract is deployed.
- Takes a parameter `_num` to initialize the `num` state variable.
- `num = _num;`: Assigns the input `_num` to the state variable `num`.

---

### **6. sum() Function**
```solidity
function sum(uint _value) public {
    num += _value;
}
```
- Public function that allows anyone to interact with it.
- Takes an input `_value` and **adds** it to the state variable `num`.
- `num += _value;`: Equivalent to `num = num + _value;`.

---

### **7. sub() Function**
```solidity
function sub(uint _value) public {
    num -= _value;
}
```
- Public function that **subtracts** the input `_value` from `num`.
- `num -= _value;`: Equivalent to `num = num - _value;`.

---

### **8. mul() Function**
```solidity
function mul(uint _value) private {
    num *= _value;
}
```
- Private function that **multiplies** the state variable `num` with the input `_value`.
- **Private Modifier**: This function is not accessible from outside the contract or from derived contracts.
- `num *= _value;`: Equivalent to `num = num * _value;`.

---

### **9. divide() Function**
```solidity
function divide(uint _value) public {
    require(_value != 0, "value cannot be 0");
    num /= _value;
}
```
- Public function to **divide** `num` by `_value`.
- **`require` statement**: Ensures `_value` is not zero before executing the division. 
  - Throws an error with the message `"value cannot be 0"` if `_value == 0`, which prevents division by zero (a runtime error).
- `num /= _value;`: Equivalent to `num = num / _value;`.

---

### **10. showNum() Function**
```solidity
function showNum() public view returns (uint) {
    return num;
}
```
- Public function that allows users to **retrieve the value of `num`**.
- **View Modifier**: Indicates that this function does not modify the blockchain state.
- `returns (uint)`: Specifies that this function returns a `uint` value (current value of `num`).

---

### **11. Metadata: Custom Development Run Script**
```solidity
@custom:dev-run-script ./scripts/deploy_with_ethers.ts
```
- Indicates the use of a script (`deploy_with_ethers.ts`) for deploying this contract.
- A helpful metadata comment, typically used in development pipelines, especially with tools like Hardhat or Truffle.

---

### **Summary of Contract Behavior**
- **Initialization**:
  - `num` is initialized with a value passed to the constructor during contract deployment.
- **Functions**:
  - `sum(uint _value)`: Adds `_value` to `num`.
  - `sub(uint _value)`: Subtracts `_value` from `num`.
  - `mul(uint _value)`: Multiplies `num` with `_value` (private).
  - `divide(uint _value)`: Divides `num` by `_value` after validating that `_value` is not zero.
  - `showNum()`: Retrieves the current value of `num`.

---

### **Gas Considerations**
- Functions that modify `num` (like `sum`, `sub`, `divide`) incur **gas costs** because they write to storage.
- Functions like `showNum()` are **free of gas costs** when called externally (via `call`) because they only read from the state.

Do you have further questions or want examples for how to use the contract?