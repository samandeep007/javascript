// ******************************* Maths ******************************* 

console.log(Math); //It is a object

console.log(Math.abs(-2323)); //Minus to plus
console.log(Math.round(232.45)) //Gives the integer
console.log(Math.round(4.6)); // Gives 5
console.log(Math.floor(4.6)); // Gives the nearest smaller integer
console.log(Math.ceil(4.6)) //Gives the next greater integer

console.log(Math.sqrt(64));
console.log(Math.max(4, 5, 21, 3));

console.log(Math.random()) //Always value between zero and one

console.log(Math.floor(Math.random() * 10 + 1)); //Random number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //To generate numbers between a range