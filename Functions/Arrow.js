// This tell about current context
const user = {
    username : "Aisha Shafiya",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username}, Welcome to website`);
    }
}
// user.welcomeMessage();
// user.username = "Aisha Amreen";
// user.welcomeMessage();

// console.log(this);//It will give empty object

// If we declare this inside the function it gives the value or methods
function chai(){
    // console.log(this);
    let username = "Aisha Shafiya";
    // console.log(this.username); Gives me the output undefined
}
chai();

const chai1 = () => {
    console.log(this);
    let username = "Aisha Amreen";
    
}
// chai1();

const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(9,15));

// Implicit const addTwo = (num1, num2) => num1 + num2;
// If we use parenthesis not needed return const addThree = (num1, num2) => num1 + num2;

// To return object need to use parenthesis
const addFour = (num1,num2) => ({username : "Aisha Shafiya"})