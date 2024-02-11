let score = "999";

console.log(typeof(score));

let score1 = Number(score);
console.log(typeof(score1));

//"33" => 33 value type is number
//"33abc" => NAN Value type is number
//true => 1; type boolean
//undefined => NAN value

let isloggedIn = 0;

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);

//1 => true;
//"" => false;
//"Aisha" => true;

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log( typeof stringNumber);