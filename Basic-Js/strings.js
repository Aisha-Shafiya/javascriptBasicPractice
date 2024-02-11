var name = "Aisha Shafiya";
var age = 90;
// console.log(name + age)
// String Interpolation
console.log(`${name} ${age}`)

// New method to declare string
const gameName = new String('Aisha Amreen');
// String is obj here It gets key  value 0 -> A 1 -> i
// To access key value pair
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

// To finf the chararcter and position
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));

// To slice the code
const newString = gameName.substring(0,7);
console.log(newString);

const newString1 = gameName.slice(-12,3);
console.log(newString1);

const newstring2 = "   Aisha   ";
console.log(newstring2);
console.log(newstring2.trim());

// replace
const url = "https//aisha.com/aisha%20Amreen";
console.log(url.replace('%20','-'));