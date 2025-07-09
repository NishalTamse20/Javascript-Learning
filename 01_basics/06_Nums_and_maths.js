const score = 400;
//console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //mainly 2 decimal places is only used

const otherNumber = 123.5869

// console.log(otherNumber.toPrecision(3));

const hundred = 100000
// console.log(hundred.toLocaleString('en-IN'));


//++++++++++++++++++++++++++Maths++++++++++++++++++++++++\\


// console.log(Math);
// console.log(Math.abs(-5))
// console.log(Math.round(4.6));
// console.log(Math.ceil(3.2))
// console.log(Math.floor(3.9));

console.log(Math.random()); //random no is between 0 and 1
console.log((Math.random()*10) +1); //but now we multiple it with 10 so, it will be shifted, but sometimes it will be 0, so we add 1 to it, so it will be between 1 and 10
console.log(Math.floor((Math.random()*10) +1)); //now we will use floor to get the whole number, so it will be between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //this will give us a random number between min and max, both inclusive