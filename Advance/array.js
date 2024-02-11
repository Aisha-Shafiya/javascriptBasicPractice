// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ['Amreen', 'Aisha', 'Barfi', 'Sanafar'];
// console.log(myHero[1]);

const myArr2 = new Array(9, 10, 78, 56, 45);
console.log(myArr2[2]);

// Methods of array
// myArr2.push('Aisha');
// myArr2.push(10);
// myArr2.pop()

// myArr2.unshift(10);
// myArr2.shift()

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(10));

// const newArr = myArr2.join();
// console.log(newArr);
// It is converted to string
console.log("A",myArr2);

//Slice and splice
const myn1 = myArr2.slice(1,3);
console.log(myn1);
console.log("B", myArr2);

const myn2 = myArr2.splice(1,3);

console.log("C",myArr2);
console.log(myn2);
