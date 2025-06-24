
//Basic Conversion:-
// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 != 1);

// datatype change will create a problem
// console.log("2" > 1);
// console.log("02" > 1);
 
// when we compare it with the null sometimes it convert null into NaN and sometimes into the number
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console. log(undefined == 0);
console. log(undefined > 0);
console. log(undefined < 0);

// inshort we avoid this confusion 
// Notes:-
// comaparision and equality this are two different thing

// =========================================================== ///

console.log("2" == 2);  // it convert the string into the value and then compare it. 
console.log("2" === 2); // it first check its datatype and then compare.