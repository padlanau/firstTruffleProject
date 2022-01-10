# firstTruffleProject - My first Truffle Project

A simply smart contract to demonstrate simple solidity functions, migration and testing

Migration script includes :
- sets the message  
- sending money from (payable)
- error handling
 
 Unit Testing script uses assert() method. Steps :
     import the contract we need to interact with
     const HelloWorld = artifacts.require("HelloWorld");
 
    assert
        be sure the message is the same as in the smart contract
        string public  message      = "Hello World!";  
        AND assert(message === "Hello World!");


    Run the following from the terminal: 
      make sure your Ganache is open
      truffle console (only if you are not in the console yet)
      truffle(development)> test 
