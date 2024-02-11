let a = 300;
if(true){
    let a = 90;
    const b = 80;
    // console.log("Inner a :", a);
}
// console.log(a);

// Nested Functions
function one(){
    const username = "Aisha Shafiya";
    function Two(){
        const website = "Aisha Amreen";
        // console.log(username);
    }
    // console.log(website);
    Two();
}
one();

// Nested if-else scope
if(true){
    const username = "Aisha Shafiya";
    if(username === "Aisha Shafiya"){
        const website = "Aisha Amreen";
        // console.log(username + website);
    }
    // console.log(website); Gives the error coz its should call in second
}
// console.log(username); gives error

// +++++++++++ Interesting ++++++
function addone(num){
    return num + 1;
}
addone();

const addtwo = function(num){
    return num + 2;
}
addtwo();