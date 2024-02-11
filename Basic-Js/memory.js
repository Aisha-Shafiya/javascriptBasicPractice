// Stack memory (Primitive), Heap(Non-Primitive)
let myYotubeName = "aisha shafiya.com";
let anothername = myYotubeName;
anothername = "Amreen";
console.log(myYotubeName);
console.log(anothername);

let userOne = {
    email: "usergoogle.com",
    userId: 78
};
let userTwo = userOne;

userTwo.email = "amreen@google";
console.log(userOne.email);