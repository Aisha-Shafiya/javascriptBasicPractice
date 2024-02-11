//dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// Date is object
let myCreateDate = new Date(2024, 0, 17);
// console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2024, 0, 17, 6, 7);
// console.log(myCreateDate1.toLocaleString());

// Time Stamp to see the difference
let createTimestamp = Date.now();
// console.log(createTimestamp);
// console.log(myCreateDate.getTime());

// To get miliseconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());

// To custmize
newDate.toLocaleString('default',
{
    weekday: "long"

}
)
console.log(newDate.toLocaleString());


