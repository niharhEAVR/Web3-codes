// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Stake.sol";

contract TestContract is Test {
    StakingContract c;

    function setUp() public {
        c = new StakingContract();
        payable(address(c)).transfer(100 ether);
    }

    function testStake() public {
        uint value = 10 ether;
        c.stake{value: value}(value);
        assertEq(c.totalStake(), value);
    }

    function testFailStake() public {
        uint value = 10 ether;
        c.stake(value);
    }

    function testUnstake() public {
        uint value = 10 ether;

        c.stake{value: value}(value);
        assertEq(c.totalStake(), value);
        assertEq(c.stakes(address(this)), value);

        c.unStake(value);
        assertEq(c.totalStake(), 0);
        assertEq(c.stakes(address(this)), 0);
    }
    receive() external payable {}
}
