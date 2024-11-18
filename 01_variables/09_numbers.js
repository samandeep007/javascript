const score = 400;
const balance = new Number(score); //Explicitly defining that balance is a number

console.log(score);

console.log(balance); //It is a object this time
console.log(balance.valueOf()) //Returns the value this time

console.log(score.toString().length);
console.log(balance.toFixed(2));

const otherNumber =23.48423;
console.log(otherNumber.toPrecision(2)); //Returns string

console.log(otherNumber.toPrecision(3)) // Rounds off the number --> gives priority to the integer half, than the decimal half

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); //Converts to indian number system
console.log(hundreds.toLocaleString()); //Converts to indian number system

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.EPSILON);