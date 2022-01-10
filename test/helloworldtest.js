/*
   Steps :
    import the contract we need to interact with
    const HelloWorld = artifacts.require("HelloWorld");
 
    assert
        be sure the message is the same as in the smart contract
        string public  message = "Hello World!";  
        AND assert(message === "Hello World!");


    Run the following from the terminal: 
      make sure your Ganache is open
      truffle console (only if you are not in the console yet)
      truffle(development)> test 
 */

      const HelloWorld = artifacts.require("HelloWorld");

      contract("Helloworld", async function(){

        // testing setMessage()
        // to break this, chenge "message = newMessage;" to "message = message;"
        it("should set the message correctly", async function(){
          // let instance = await HelloWorld.deployed();
          let instance = await HelloWorld.new();
          await instance.setMessage("Testing Message");
          let message  = await instance.getMessage();
          assert(message === "Testing Message", "Message should be the same as we set it up to");
      });  
      
        it("should initialize correctly", async function(){
            let instance = await HelloWorld.new();
            let message  = await instance.getMessage();
            assert(message === "Hello World!", "Message should be Hello World!");
        });  





      });


