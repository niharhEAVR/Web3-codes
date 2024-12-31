// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/Nicoin.sol";

contract TestNicoin is Test {
    Nicoin c;

    function setUp() public {
        c = new Nicoin();
    }


    function testMint() public {
        c.mint(address(this), 1000);
        assertEq(c.balanceOf(address(this)), 1000, "ok");
        assertEq(c.balanceOf(0x2a961d8e8957f24205eead45B2a5C0d04b016861), uint256(0), "ok");


        c.mint(0x2a961d8e8957f24205eead45B2a5C0d04b016861, 100); 
        assertEq(c.balanceOf(0x2a961d8e8957f24205eead45B2a5C0d04b016861),100, "ok");
    }

}
