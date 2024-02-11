// For of loop
// These are array specific loop

const arr1 = [1, 2, 3, 4, 5];

for (const num of arr1) {
    // console.log(num);
}

const greetings = "Aisha Shafiya Hello";
for (const greet of greetings) {
    //   console.log(`The char is ${greet}`);
}

// Map Is key value pairs it does have unique val

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('Eng', 'England')
// console.log(map);

// To get key and value pair or to destructure the map

// for (const key of map) {
//     console.log(key);
// }
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// For of loop wont work for object
const myobject = {
    'game1' : "NFS",
    'game2' : "Spiderman",
    'game3' : "Batman"
}
// for (const [key,value] of myobject) {
//     // console.log(key, ':-', value);
// }

//For in loop: To run object need to use for in loop
const game = {
    game1 : 'Spiderman',
    game2 : 'Batman',
    game3 : "Barbie",
    game4 : "Subway",
    game5 : "Temple run"
}
//These give key value
// for (const key in game) {
//     console.log(key);
// }

// These give the value for value in object
// for (const key in game) {
//     console.log(`The value is ${game[key]}`);
// }

// To print all the key value
for (const key in game) {
//    console.log(`${key} The value is ${game[key]}`);
}


// For in loop in array prints only key
const greetings1 = ['A','B','C','D','E']

for (const key in greetings1) {
    //  console.log(key); These gives only the key no value
    // console.log(`The values and key is ${greetings1[key]}`);
}

// For in loop in map is not iterable

// For Each loop
const coding = ['js','ruby','java','python','cpp'];
coding.forEach( function (val) {
    // console.log(val);
})

// WE can run function in this way too
// function item (val){
//     console.log(val);
// }
// coding.forEach(item)

// coding.forEach((item, arr, value) => {
//    console.log(item, arr, value);
// })

// Objects inside array iteration
const mycoding1 = [
    {
        langauge : "Javascript",
        languagefile : "Js"
    },
    {
        langauge : "Ruby",
        languagefile : "ry"
    },
    {
        langauge : "Python",
        languagefile : "py"
    }
]
mycoding1.forEach( (item) => {
    console.log(item.langauge);
})