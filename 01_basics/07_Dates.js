// Dates 

let mydate = new Date();
// console.log(mydate.toString()); // Current date and time
// console.log(mydate.toDateString()) // Date part
// console.log(mydate.toLocaleString()); // Local date and time
// console.log(typeof mydate); // "object"

//let mycreatedDate = new Date(2025, 1, 20);
// let mycreatedDate = new Date( 2025, 3, 20 ,5,30) // console.log(mycreatedDate.toString()); // Specific date and time
// let mycreatedDate = new Date("2025-01-14") //YY-MM-DD format
let mycreatedDate = new Date("01-20-2025") // MM-DD-YYYY format
// console.log(mycreatedDate.toLocaleString());


//time stamps

let mytimestamp = Date.now(); // Current timestamp in milliseconds

// console.log(mytimestamp); 
// console.log(mycreatedDate.getTime()); // Timestamp of a specific date
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds
  
let newDate = new Date()
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay());


newDate.toLocaleString("default",{
    weekday: "long",
    timeZone: "Asia/Kolkata",
    month: "long",
    year: "numeric",
    day: "standard",
    hour: "2-digit",

})


