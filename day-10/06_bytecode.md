```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    // State variable to store the counter value
    uint256 private count;

    // Constructor to initialize the counter with 0 (optional)
    constructor() {
        count = 0;
    }

    // Function to increment the counter
    function increment() public {
        count += 1;
    }

    // Function to decrement the counter
    function decrement() public {
        require(count > 0, "Counter cannot go below zero");
        count -= 1;
    }

    // Function to get the current value of the counter
    function getCount() public view returns (uint256) {
        return count;
    }
}
```


---

If you're interested, here's how you can examine the **EVM bytecode output** for this Solidity contract:

---

### Steps to Compile and Get Bytecode
1. **Install Solidity Compiler**:
   - Use [Remix](https://remix.ethereum.org/) (an online IDE for Solidity).
   - Alternatively, install the `solc` compiler locally:
     ```
     npm install -g solc
     ```

2. **Compile the Contract**:
   - In **Remix**:
     1. Paste the contract code.
     2. Navigate to the **Solidity Compiler** tab.
     3. Click on **Compile Counter.sol**.

   - With **`solc`** CLI:
     Save the code in a file, e.g., `Counter.sol`, and run:
     ```
     solc --bin Counter.sol
     ```
     This will generate the **bytecode** in the output.

3. **Access the Bytecode**:
   - In Remix, after compilation, go to the **"Compilation Details"** section.
   - Find the **bytecode** field, which represents the compiled EVM instructions.

---

### Example Bytecode Output (Sample for a Similar Contract)
The output will look like this (hexadecimal representation of opcodes):
```
608060405234801561001057600080fd5b506004361061002b5760003560e01c806306661abd1461003057806370a082311461005a578063d09de08a1461007e578063e60778ca1461008d575b600080fd5b61004561009f565b6040516100529190610138565b60405180910390f35b6100686100b5565b6040516100759190610138565b60405180910390f35b6100a76100c6565b6040516100b49190610138565b60405180910390f35b6100d76100ef565b600060205281600052604060002081815481106100f957fe5b600091825260209091200154905090565b8060008190555050565b600081359050610117816101f5565b92915050565b600080fd5b61012b816101f5565b811461013657600080fd5b50565b600081519050610148816101f5565b92915050565b600060208284031215610164576101636101da565b5b600061017284828501610134565b9150509291505056fea2646970667358221220fbaf28096cb60dff7324a76759776007640530194c4d0e4ce13933103eddd17064736f6c634300080a0033
```

Each part of the bytecode represents specific EVM operations for setting up the contract, state variable `count`, and implementing the `increment`, `decrement`, and `getCount` functions.

---

### Reading the EVM Instructions (Opcodes)
You can decode the bytecode into human-readable **opcodes** using tools like `evm` or **ethervm.io's Opcode Decoder**:
1. **Install `evm` (using Go Ethereum tools)**:
   ```
   evm disasm <bytecode>
   ```
2. **Decode Online**:
   - Go to [https://www.ethervm.io/](https://www.ethervm.io/) and paste the bytecode.
   - The tool will provide the readable opcodes and their explanation.

Example disassembled opcodes for part of the contract:
```python
PUSH1 0x60
PUSH1 0x40
MSTORE
CALLVALUE
DUP1
ISZERO
PUSH2 0x10
JUMPI
...
```

---

### Let Me Know If You’d Like:
1. To compile and disassemble the actual bytecode for this contract.
2. Help in analyzing or modifying the contract code.
3. Any specific guidance for tools like Remix, `solc`, or debugging on the Ethereum blockchain.