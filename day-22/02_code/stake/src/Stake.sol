// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract StakingContract {
    mapping(address => uint) public stakes;
    uint public totalStake;

    constructor() {}

    function stake(uint _amount) public payable {
        require(_amount > 0);
        require(_amount == msg.value);
        stakes[msg.sender] += _amount;
        totalStake += _amount;
    }

    function unStake(uint _amount) public {
        require(stakes[msg.sender] >= _amount);
        stakes[msg.sender] -= _amount;
        totalStake -= _amount;

        payable(msg.sender).transfer(_amount);
    }

    receive() external payable {} 
}
