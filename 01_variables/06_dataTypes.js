//Primitive and non-primitive --> call by value and Call by reference 

//Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

let score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //This is undefined

const id = Symbol("123");
const anotherId = Symbol(("123"));
const bigNumber = 432434243223452353342343n; //It becomes bigInt by adding n to the end of the number

console.log(id === anotherId); // False


console.log(userEmail);
console.log(score);

score = "hundred";
console.log(score);

//Non-primitive (Reference type)
// Array, Objects. functions

const heroes = ["Shaktiman", "nagraj", "doga"];
let myObj = {
    name: "Samandeep Singh",
    age: 22,
};

const sayHello = () => {
    return "Hello Samandeep";
}

console.log(sayHello());
console.log(typeof bigNumber);
console.log(typeof heroes);