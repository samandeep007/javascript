const accountNo = 144553; //Cannot be reintialized
let accountEmail = "samandeep0792@gmail.com" //Can be reinitialized, but cannot be redeclared, and is hoisted
var accountPassword = "saman2002" //Can be reinitialized, redeclared, and is hoisted --> Prefer not to use var --> because of issue in block scope and function scope
accountCity = "Jaipur" // Cannot be declared without mentioning the access modifier
let accountState; //It is hoisted as undefined on the top
console.table([accountNo, accountEmail, accountPassword, accountCity])
// accountId = 15774; Not allowed --> commented out using //
accountEmail = "tarandeep0792@gmail.com"
accountPassword = "tannu1995"
accountCity = "Sitarganj"

// console.log(accountId);
console.table([accountNo, accountEmail, accountPassword, accountCity, accountState])
