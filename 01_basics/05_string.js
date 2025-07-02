const name = "Nishal";
const repoCount = 2;

//console.log(name + repoCount + "value")  //old way of concatenation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String("Mrfleet-aka-Nishal")
// console.log(gameName[1]);               // accessing character at index 1
// console.log(gameName.__proto__);    // prototype of the string object

// console.log(gameName.length);     // get length of the string
// console.log(gameName.toUpperCase());    // convert to uppercase
// console.log(gameName.charAt(5));          // get character at index 5
// console.log(gameName.indexOf("N"));    // find index of character 'N'

const newString = gameName.substring(0,6) // get substring from index 0 to 6
console.log(newString);

const anotherString = gameName.slice(-16,10) // get substring from index -16 to 10
console.log(anotherString);


const newStringOne = "     Nishal_Tamse     "
console.log(newStringOne);   //with spaces 

console.log(newStringOne.trim()); // remove whitespace from both ends

const url = "https://www.nishaltamse.com/Nishal%20tamse";

url.replace('%20', '-') // replace %20 with - in the URL
console.log(url.replace('%20', '-')); // replace %20 with - in the URL

console.log(url.includes('112'));

console.log(gameName.split('-'));
