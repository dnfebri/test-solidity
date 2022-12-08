// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

struct Person {
    string name;
    uint age;
}

contract LearnSolidity {
    string public name;
    uint public age;
    uint public id;

    mapping(uint => Person) public _person;

    constructor(string memory _name, uint _age) {
        name = _name;
        age = _age;
    }

    function replaceName(string memory _name, uint _number) public {
        require(_number > 1, "kurang masuk ilmune boss");
        name = _name;
    }

    function addUser(string memory _name, uint _age) public {
        require(_age > 17, "belum cukup umur");
        _person[id].name = _name;
        _person[id].age = _age;
        id++;
    }

    function getUser(uint _id) public view returns (Person memory) {
        return _person[_id];
    }
}
