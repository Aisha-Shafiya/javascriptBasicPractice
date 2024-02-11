// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(6,9);

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    // console.log(num1 + num2);
    return num1 + num2;
}

const result = addTwoNumbers(6,7);
// console.log("result: ", result);

function loginuser(username){ //username =="Sam"
    if(username === undefined){ // equal to !username
        console.log("Please enter a username");
       return;
    }
    return `${username} just logged in`
}
// console.log(loginuser('Aisha'));
// console.log(loginuser());

// rest operator
// function calculateTwoNumber(val1, val2, ...num1)
function calculateTwoNumber(...num){
    return num;
}
// console.log(calculateTwoNumber(500, 700, 800));

// To call the object using function

const user = {
    username : "Aisha",
    price : 900
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleobject(user);

// To call the array using function
const array = [100, 700, 900, 500];

function returnarray(getArray){
    return getArray[1];
}
console.log(returnarray(array));

