// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/**
 * @title  Solidity Hello World 
 * @author Lodgerio Padlan
 * @dev get and set hello message 
 * @notice A simply smart contract to demonstrate simple solidity smart contract
           This includes a migration script that:
            - sets the message  
            - sending money from (payable)
            - error handling
           This includes unit test script (test folder) 
            - assert



 */

contract HelloWorld {
 
   // string private helloMessage = "Hello World Again";  
    string public message = "Hello World!";  
   

    function getMessage() public view returns(string memory){ 
        return message;
    }

    // function setMessage(string memory newMessage) public { 
    //    message = newMessage;
    // }

    // payable is for Case 3 of 2_HelloWorld.js
    //function setMessage(string memory newMessage) public payable { 
    //    message = newMessage;
    // }

    // require is for Case 4 of 2_HelloWorld.js
    //function setMessage(string memory newMessage) public payable { 
    //    require(msg.value >= 1 ether);
    //    message = newMessage;
    // }

    function setMessage(string memory newMessage) public payable { 
        message = newMessage;
    }

}