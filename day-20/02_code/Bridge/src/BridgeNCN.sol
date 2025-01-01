// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {console} from "forge-std/console.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract BridgeNCN is Ownable {
    uint256 public balance;
    address public tokenAddress;

    event Deposit(address indexed depositor, uint amount);

    mapping(address => uint256) public pendingBalance;

    constructor(address _tokenAddress) Ownable(msg.sender) {
        tokenAddress = _tokenAddress;
        // when we create a token we have the address of that token and that address is storing over here
    }

    function deposit(IERC20 _tokenAddress, uint256 _amount) public {
        require(address(_tokenAddress) == tokenAddress);
        require(_tokenAddress.allowance(msg.sender, address(this)) >= _amount);
        require(_tokenAddress.transferFrom(msg.sender, address(this), _amount));
        emit Deposit(msg.sender, _amount);
    }

    function withdraw(IERC20 _tokenAddress, uint256 _amount) public {
        require(pendingBalance[msg.sender] >= _amount);
        pendingBalance[msg.sender] -= _amount;
        _tokenAddress.transfer(msg.sender, _amount);
    }

    // we know about the deposit and withdraw from the previous class but here we are intoduced with a new function called burnedOnOppositeChain

    // only the owner can call this function, and this function is need because 

    function burnedOnOppositeChain(
        address userAccount,
        uint256 _amount
    ) public onlyOwner {
        pendingBalance[userAccount] += _amount;
    }
}
