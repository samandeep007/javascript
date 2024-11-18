let myName = "Samandeep singh                     ";
let repoCount = 50;

console.log(myName.replace("Samandeep", "Gagandeep")); // Doesn't change the original value --> returns the changed name

//String interpolation
console.log(`my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String('Saman Sandhu'); // It is an object this time
console.log(gameName);

console.log(myName.charAt(12));
console.log(myName.slice(0, 5)); // string_variable.slice(startingIndex, endIndex(excluded));
console.log(myName.__proto__);
console.log(myName[4]);
console.log(myName.length);
console.log(myName.toUpperCase()); //Original value doesn't change
console.log(myName.toLowerCase());
console.log(myName.endsWith("singh"));
console.log(myName.split(''));
console.log(myName.indexOf('e'));

const newString = myName.substring(0,5);
console.log(newString);

const anotherString = myName.substring(-1, 6 );
console.log(anotherString)

console.log(myName.trim());
const url = "https://3suniverse.com/saman%20sandhu";

console.log(url.replace('%20','-'));
console.log(myName.includes("samandeep")); //It is case-sensitive, so remember this thing
console.log(myName.split(' ')); //Turns the string into array
// console.log(myName.bold());
