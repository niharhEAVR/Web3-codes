// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {console} from "forge-std/console.sol"; // this is how we can also print anything on the terminal using the console in solidity

contract Nicoin is ERC20 {
    address owner;

    constructor() ERC20("Nicoin", "NCN") {}

    function mint(address to, uint256 amount) public {
        console.log("inside the mint function"); // run the (forge test -vv) then you will see the log
        _mint(to, amount);
    }
}
