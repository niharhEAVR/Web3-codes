// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/Contract.sol";

contract TestContract is Test {
    Counter c;

    function setUp() public {
        c = new Counter(5);
    }


    function testCounter() public {
        c.increase();
        c.increase();
        c.increase();
        c.decrease();
        assertEq(c.getNum(), 7, "ok");
    }

    function uintCounter() public {
        c.decrease();
        c.decrease();
        c.decrease();
        c.decrease();
        c.decrease();
        c.decrease();
        assertEq(c.getNum(), 7, "ok");
    }

    function testBar() public {
        assertEq(uint256(1), uint256(1), "ok");
    }

    function testAddress() public {
        assertEq(0x2a961d8e8957f24205eead45B2a5C0d04b016861, 0x2a961d8e8957f24205eead45B2a5C0d04b016861, "ok");
    }

    function testFailInt(uint256 x) public {
        assertEq(uint256(1), uint256(2), "ok");
    }
}
