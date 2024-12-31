// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract Counter {
    uint private counter;

    constructor(uint _counter) {
        counter = _counter;
    }

    function increase() public {
        counter++;
    }

    function decrease() public {
        counter--;
    }

    function getNum() public view returns (uint){
        return counter;
    }
}
