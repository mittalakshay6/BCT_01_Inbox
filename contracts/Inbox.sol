// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.17;
contract Inbox {
    string public message;

    constructor (string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage (string calldata newMessage) public {
        message = newMessage;
    }
}