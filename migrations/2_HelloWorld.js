const HelloWorld = artifacts.require("HelloWorld");
/*
  Case 1: for this migration script

    module.exports = function (deployer) {
    deployer.deploy(HelloWorld).then(function(instance){
      instance.setMessage("Hello Again!");
    }

    Run the following from the terminal: 
      truffle console (only if you are not in the console yet)
      truffle(development)> migrate --reset
      instance = await HelloWorld.deployed()
      instance.getMessage()
 */
/*
  module.exports = function (deployer) {
      deployer.deploy(HelloWorld).then(function(instance){
        instance.setMessage("Hello Again!").then(function(){
          instance.getMessage().then(function(message){
            console.log("Current message:" + message);
          }); 
        });
      });
  };

  Case 2: for above migration script
    Run the following from the terminal: 
      truffle console (only if you are not in the console yet)
      truffle(development)> migrate --reset
     
      you will see :

      Current message:Hello Again!

 */
/*
      module.exports = function (deployer, network, accounts) {
        deployer.deploy(HelloWorld).then(function(instance){
          instance.setMessage("Hello Again!", {value: 1000000, from: accounts[0]}).then(function(){
            instance.getMessage().then(function(message){
              console.log("Current message:" + message);
            }); 
          });
       });
   };

   Case 3: for above migration script, is for sending the money from

   make the function payable 
        function setMessage(string memory newMessage) public payable { 
  
   network = ropsten, etc
   accounts = this is accounts array. So for accounts[0], this is the first account from ganache you are connected to
   adding value
   value: 1000000 (1 million wei)

   Run the following from the terminal: 
     truffle console (only if you are not in the console yet)
     truffle(development)> migrate --reset
    
     you will see the wei in "value sent" field. If you don't this means the wei is too small
     Then you need to go to Ganache and you will the value (D:\blockchain\OTHERS\wei1Million.jpg)

*/

module.exports = function (deployer, network, accounts) {
  deployer.deploy(HelloWorld).then(function(instance){
    instance.setMessage("Hello Again!", {value: 1000000, from: accounts[0]}).then(function(){
      console.log("Success");
    }).catch(function(err){
      console.log("error:" + err);
    });    
 }).catch(function(err){
   console.log("Deployed failed" + err);
 });
};

/*
Case 4: for above migration script, is for error handling
 
    as you can see in setMessage() we added ==> require(msg.value >= 1 ether);
    in the migration script above, we are only sending 1million wei. That way we can capture the error.
    we also added a catch to see if the deployment has failed.

    Run the following from the terminal: 
      truffle console (only if you are not in the console yet)
      truffle(development)> migrate --reset
 
    You will see:   
    error:Error: Returned error: VM Exception while processing transaction: revert

*/
