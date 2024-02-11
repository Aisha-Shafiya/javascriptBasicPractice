// Methods Of Array

const marvel_Heros = ['thor', 'ironman', 'spiderman'];
const dc = ['superman', 'flash', 'batman'];

// marvel_Heros.push(dc)
// console.log(marvel_Heros);

// Here it wont merge It will make another element now there is 4elements
// console.log(marvel_Heros[3]);
// console.log(marvel_Heros[3][0]);

// const allhero = marvel_Heros.concat(dc);
// console.log(allhero);

// const all_newHero = [...marvel_Heros, ...dc];
// console.log(all_newHero);


// Code to get Inside array

// const another_array = [1, 2, 3,[4, 5, 6], 7, [8, 9,[10, 11]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// To convert the array

console.log(Array.isArray("Aisha"));
console.log(Array.from("Amreen"));
console.log(Array.from({name: "Aisha"}));//Empty
// To make the array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


