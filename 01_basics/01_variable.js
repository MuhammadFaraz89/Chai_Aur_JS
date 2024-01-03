const accountId = 12345;
let accountEmail = "faraz@google.com"
var accountPassword = "12345678"  //not to use var because of block scope and functional scope

accountCity = "Lahore"   //possble , but not recommended
let accountState;  //undefined

// accountId = 2 //not changed
accountEmail = "niaz@gmail.com"
accountPassword = "87654321"
accountCity = "Karachi"


console.table([accountId,accountEmail,accountPassword,accountCity ,accountState]) //shorcut for multiple console statements

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);