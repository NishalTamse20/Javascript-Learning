//JavaScript is a dynamically typed language. This means you do not need to declare variable types explicitly, and variable types can change at runtime
// primitive data types

// 7 types :- String, number, BigInt, Boolean, Undefined, Null, Symbol.

const score = 100; // Number
const scoreValue = 100.2; // Number

const isLoggedIn = true; // Boolean
const outsideTemp = null; // Null ==> empty value
let userEmail; // Undefined ==> variable is declared but not assigned a value

const id = Symbol("123"); // Symbol ==> unique and immutable value, often used as object property keys
const anotherId = Symbol("123"); // anotherId is a different symbol, even though the description is the same

console.log(id === anotherId); 

const BigNumber = 1234567890123456789012345678901234567890n; // BigInt ==> used for very large integers, denoted by 'n' at the end
//Reference Types (Non-primitive data types)

// Array, Objects, functions

const Heros = ["ironman", "shaktiman", "Hulk", "thor"]; // Array 
let Myobj = {
    name: "Nishal",
    age: 20,
};

const MyFunction = function() {
    console.log("Hello Nishal"); 
};

//how to know the data type of a variable
console.log(typeof outsideTemp); // "number"

/*
Return types of variables in JavaScript:

1) Primitive Data Types:
    Number      => "number"
    String      => "string"
    Boolean     => "boolean"
    Null        => "object"      // typeof null returns "object" (this is a known quirk)
    Undefined   => "undefined"
    Symbol      => "symbol"
    BigInt      => "bigint"

2) Non-Primitive Data Types (Reference Types):
    Array       => "object"
    Function    => "function"
    Object      => "object"
*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

//   stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "MrFleet";

let anothername = myYoutubename;
anothername = "Nishal learning";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi_id: "user@okaxis"
};

let userTwo = userOne;

userTwo.email = "nishal@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);