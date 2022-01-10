# firstTruffleProject 

## My first Truffle Project

A simply smart contract to demonstrate simple solidity functions, migration and testing

Migration script includes :
- sets the message  
- sending money from (payable)
- error handling
 
 Unit Testing script uses assert() method. 
 - Steps :
 > -  import the contract we need to interact with
 > -  const HelloWorld = artifacts.require("HelloWorld");
 
 assert :
 > -  be sure the message is the same as in the smart contract
 > -  string public message = "Hello World!";  
 > -  AND assert(message === "Hello World!");

Migrate: 
- Run the following from the terminal: (make sure your Ganache is open)
>        truffle console (only if you are not in the console yet)
>        truffle(development)> migrate --reset (only use migrate if this is your first time) ```



         Compiling your contracts...
         ===========================
         > Compiling .\contracts\HelloWorld.sol
         > Compiling .\contracts\HelloWorld.sol
         > Compiling .\contracts\Migrations.sol
         > Artifacts written to D:\blockchain\firstTruffleProject\build\contracts
         > Compiled successfully using:
            - solc: 0.8.10+commit.fc410830.Emscripten.clang



         Starting migrations...
         ======================
         > Network name:    'development'
         > Network id:      5777
         > Block gas limit: 6721975 (0x6691b7)


         1_initial_migration.js
         ======================

            Replacing 'Migrations'
            ----------------------
            > transaction hash:    0xc72c96ece539c55f369c9d8b86fd5e964ff5aac714390399e0b9844fe6e24c07
            > Blocks: 0            Seconds: 0
            > contract address:    0x359f6456b68361B8446bc3054a10dd1453aafF85
            > block number:        148
            > block timestamp:     1641788601
            > account:             0x949CE02E352E9Ed86AdcCeC797474Efaf6034e91
            > balance:             94.19262528
            > gas used:            248854 (0x3cc16)
            > gas price:           20 gwei
            > value sent:          0 ETH
            > total cost:          0.00497708 ETH


            > Saving migration to chain.
            > Saving artifacts
            -------------------------------------
            > Total cost:          0.00497708 ETH


         2_HelloWorld.js
         ===============

            Replacing 'HelloWorld'
            ----------------------
            > transaction hash:    0xf030b5c735238595a8ef6041661c5e1c0531b44dffe29c9ed250c86f2e712ab6
            > Blocks: 0            Seconds: 0
            > contract address:    0xC196f1342E44982eAf3C5Babb9159877beD70B50
            > block number:        150
            -------------------------------------
            > Total cost:           0.0080098 ETH


         Summary
         =======
         > Total deployments:   2
         > Final cost:          0.01298688 ETH


         - Blocks: 0            Seconds: 0
         - Saving migration to chain.
         - Blocks: 0            Seconds: 0
         - Saving migration to chain.


      truffle(development)> test
      > Compiled successfully using:
      - solc: 0.8.10+commit.fc410830.Emscripten.clang

      Success


      Contract: Helloworld
        √ should set the message correctly (2483ms)
        √ should initialize correctly (457ms)


      2 passing (3s)
 
