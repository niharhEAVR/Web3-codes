// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/LockFiat.sol";
import "../src/Nicoin.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { console } from "forge-std/console.sol";


contract BridgeETHTest is Test {
    event Transfer(address indexed from, address indexed to, uint256 value);

    LockFiat bridge;
    Nicoin NCN;

    function setUp() public {
        NCN = new Nicoin();
        bridge = new LockFiat(address(NCN));
    }

    function test_Deposit() public {
        NCN.mint(0x2a961d8e8957f24205eead45B2a5C0d04b016861, 500);
        vm.startPrank(0x2a961d8e8957f24205eead45B2a5C0d04b016861);
        NCN.approve(address(bridge), 200);

        bridge.deposit(NCN, 200);
        assertEq(NCN.balanceOf(0x2a961d8e8957f24205eead45B2a5C0d04b016861), 300);
        assertEq(NCN.balanceOf(address(bridge)), 200);

        bridge.withdraw(NCN, 100);

        assertEq(NCN.balanceOf(0x2a961d8e8957f24205eead45B2a5C0d04b016861), 400);
        assertEq(NCN.balanceOf(address(bridge)), 100);

    }

    
}

// read the 04_LockContract.md