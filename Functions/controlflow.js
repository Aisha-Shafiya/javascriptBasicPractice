// if
// The below code will give erroe coz of local scope of const
// const score = 900;
// if(score > 700){
//     const power = 'fly';
//     console.log(`User powe: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 900;
// if(balance > 500) console.log("test"),console.log('test2');
// The below code is nested if condition
if(balance < 500){
    console.log("Less than 500");
}
else if(balance < 700){
    console.log("Less than 700");
}
else{
    console.log("Less than 1000");
}

// if condition with And OR stattement
isloggedIn = true;
isdebitcard = true;
loggedinGoogle = false;
loggedinFromEmail = true;
if(isloggedIn && isdebitcard && 2 == 2){
    console.log('User has logged in');
}

if(loggedinGoogle || loggedinFromEmail){
    console.log("User logged in");
}