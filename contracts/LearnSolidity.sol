// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract LearnSolidity {
    string public name;
    uint public age;

    constructor(string memory _name, uint _age) {
        name = _name;
        age = _age;
    }

    function replaceName(string memory _name, uint _number) public {
        require(_number > 1, "kurang masuk ilmune boss");
        name = _name;
    }
}
