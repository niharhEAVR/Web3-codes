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