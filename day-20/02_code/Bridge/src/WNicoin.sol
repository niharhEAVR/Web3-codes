// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {console} from "forge-std/console.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract WNicoin is ERC20, Ownable {
    constructor() ERC20("WNicoin", "WNCN") Ownable(msg.sender) {}

    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    } // here mint function is mendatory because we have to give the user a wrapped coin

    function burn(address _from, uint256 _amount) public onlyOwner {
        _burn(_from, _amount);
    } // and the burn function is for when the user will gave back the wrapped coin then the burn function will burn the wrapped coin and excange the original asset
}
