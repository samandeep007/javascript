// Stack, Heap

//Stack --> Primitive --> you will get a copy
//Heap --> Non-primitive types --> get a original values

let myYoutubeName = "Samandeep Singh";

let anotherName = myYoutubeName;

console.log(anotherName);

anotherName = "Sandhu saab"; // Value changes only for anotherName, while the myYoutubeName has the same value as before
console.log(anotherName); 

console.log(myYoutubeName); // The value remains the same