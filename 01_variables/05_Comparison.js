// console.log(2 > 1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2" > 1); //Automatically "2" is converted to number
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); //The reason is that an equality check == and comparisons > < >= <= works differently. 
console.log(null >= 0); //It is treating null as 0

//Comparison treats null as 0 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//Equality is different from comparison operators

//Strict check === || Checks the values and the data types as well
console.log("2" === 2);