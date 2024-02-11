const username = [];//Wil get true if username = "" will get false

if(username){
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
}

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// True values
//"0", 'false', " ", [], {}, function(){}

// To check empty array 
if(username.length === 0){
    console.log("Array is empty");
}

// To check emoty object
const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing operator
let val1;
// val1 = 8 ?? 90;
val1 = null ?? 10;//wil get 10 value
val1 = undefined ?? 16; //will get 16
val1 = null ?? 10 ?? 20; //Will get the first val ie 10
console.log(val1);

// Terniary operators
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");;
