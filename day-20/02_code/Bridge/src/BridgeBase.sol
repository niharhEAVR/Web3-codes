// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {console} from "forge-std/console.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IWNicoin {
    function mint(address _to, uint256 _amount) external;
    function burn(address _from, uint256 _amount) external;
}

contract BridgeBase is Ownable {
    uint256 public balance;
    address public tokenAddress;

    event Burn(address indexed burner, uint amount);

    mapping(address => uint256) public pendingBalance;

    constructor(address _tokenAddress) Ownable(msg.sender) {
        tokenAddress = _tokenAddress;
    }

    function burn(IWNicoin _tokenAddress, uint256 _amount) public {
        require(address(_tokenAddress) == tokenAddress);
        _tokenAddress.burn(msg.sender, _amount);
        emit Burn(msg.sender, _amount);
    }

    function withdraw(IWNicoin _tokenAddress, uint256 _amount) public {
        require(pendingBalance[msg.sender] >= _amount);
        pendingBalance[msg.sender] -= _amount;
        _tokenAddress.mint(msg.sender, _amount);
    }

    function burnedOnOppositeChain(
        address userAccount,
        uint256 _amount
    ) public onlyOwner {
        pendingBalance[userAccount] += _amount;
    }
}
