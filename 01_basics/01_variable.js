const accountId = 14445
let accountEmail = "nishal@google.com"
var accountPassword = "12345"
acccountCity = "Pune"

let acccountState;
// accountId = 2

accountEmail = "tamse@google.com"
accountPassword = "13456"
acccountCity = "Karwar"

console.log(accountId);

/*
Prefer not to use var 
because of the issue of the blockscope and functional scope
*/

console.table([accountId, accountEmail,accountPassword,acccountCity, acccountState])