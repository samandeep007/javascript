// Stack, Heap

//Stack --> Primitive --> you will get a copy
//Heap --> Non-primitive types --> get a original values

let myYoutubeName = "Samandeep Singh";

let anotherName = myYoutubeName; // You will get a copy of myYoutubeName

console.log(anotherName);

anotherName = "Sandhu saab"; // Value changes only for anotherName, while the myYoutubeName has the same value as before
console.log(anotherName); 

console.log(myYoutubeName); // The value remains the same

let user = {
    name: "Samandeep Singh",
    upiId: "samandeep@paytm",
    address: "164 Taradale Drive"
};

let userTwo = user; // userTwo points to the same memory location as the user 

userTwo.name = "Tarandeep Kaur";

console.log(user);