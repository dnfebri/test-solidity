// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract LearnSolidity {
    string name;
    uint age;

    constructor(string memory _name, uint _age) {
        name = _name;
        age = _age;
    }

    function replaceName(string memory _name) public {
        name = _name;
    }
}
