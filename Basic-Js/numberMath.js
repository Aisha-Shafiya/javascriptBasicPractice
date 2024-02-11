const score = 700;
console.log(score);

const balance = new Number(900);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(3));

const otherNumber = 121.98978;
console.log(otherNumber.toPrecision(4));

const hundreds = 100000000;
console.log(hundreds.toLocaleString());


// Maths
//Absolue
console.log(Math.abs(-9));
console.log(Math.round(9.6));
console.log(Math.ceil(9.1));
console.log(Math.floor(9.7));
console.log(Math.max(8,67,4,23));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

const max = 20;
const min = 10;
console.log(Math.floor((Math.random() * (max - min + 1) + min )));