let score = "33";
let age = "343abc"
let temperature = null;
let grades = undefined;
let isLoggedIn = false;

// console.log(typeof score);
// console.log(typeof(score)); //Can be checked way this way as well

// let valueInNumber = Number(score); //Wrapper class
let valueInNumber = Number(temperature);
let valueTwoInNumber = Number(age);

console.log(typeof valueInNumber); //It is number this time bruhh!
console.log(valueInNumber);

console.log("\nValue Two in Number\n")

console.log(typeof valueTwoInNumber);
console.log(valueTwoInNumber); //NaN --> Not a number

// console.log(age);
// console.log(temperature)
// console.log(grades)
// console.log(isLoggedIn)

//Undefined means no value is assigned to the variable --> is hoisted
//Null means empty value
//When you cast something to a number that is not possible, it is NaN (Not a Number)
