// singleton

// object literals
const mySym = Symbol("key1");
const user = {
    name : "Aisha",
    age : 18,
    "full name" : "Aisha Shafiya",
    [mySym] : "Amreen",
    location : "Udupi",
    email : "aisha@gmail.com",
    isloggedIn : false,
    lastloginDays : ['Monday','Saturday']
}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]);

// Object freeze
user.email = "amreen@gmail.com";
// Object.freeze(user);
// user.email = "ffgggg@gmail.com";
// console.log(user);

// to add function in object
user.greeting = function(){
    console.log("Hello user");
}
console.log(user.greeting());

// To refer the inside obj in function

user.greetingTwo = function(){
    console.log(`Hello JS User, ${this.email}`);
}

console.log(user.greetingTwo());