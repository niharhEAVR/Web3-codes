// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {console} from "forge-std/console.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Nicoin is ERC20, Ownable {
    constructor() ERC20("Nicoin", "NCN") Ownable(msg.sender) {}

    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }

    // for the learning process we created a mint function to mint new tokens and then bridge it to another blockchain, but on the real world the user will give their valuable asset to bridge it in oher blockchains

}
