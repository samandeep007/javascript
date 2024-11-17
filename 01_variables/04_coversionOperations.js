// *************** Operations ***************

let value = 3;
let negValue = -value;

// console.log(negValue); //Prints minus 3
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 3);

let str1 = "Hello"
let str2 = "Samandeep Singh"

let str3 = str1 + " " + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2" + 2);
console.log("1" + 2 + 2); //Prints 122 --> depends on the context --> considers the first data type
console.log(1 + 2 + "3");
console.log(3 + ((4 * 5) % 3)) //Always use parenthesis for code separation

//Tricky conversion
console.log(Number(true));
console.log(+true); //This would be 1
console.log(+""); //This would be 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2; //Less readable
console.log(num1);

// num1, num2, num3, num4 = (2,2,2,2);

console.log(num1);

let gameCounter = 100;
gameCounter++; //Increment after usage --> Postfix || Increment before usage --> Prefix
console.log(gameCounter);