const accountId = 12345
let accountEmail = "siddhi@gmail.com"
var accountPassword = "1234567"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // error comes because we cannot redeclare or reassign the value in const 

accountEmail = "sdf@gb.com" 

accountPassword = "89877"

accountCity ="jodhpur"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
