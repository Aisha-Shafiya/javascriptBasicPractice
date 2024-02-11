// declare obj
const tinderUser = {}
tinderUser.id = "89iuy"
tinderUser.name = "Aisha"
tinderUser.loggedIn = false

// console.log(tinderUser);

// To make nested objects

const regularUser = {
    email: "aisha@gmail.com",
    fullname : {
        userfullName: {
            firstName : "Aisha",
            lastName : "Shafiya"
        }
    }
}
// console.log(regularUser.fullname.userfullName);

// To merge the objects
// Assign use to merge the two objects
const obj1 = {
    1 : "A",
    2 : "B",
    3 : "C"
}

const obj2 = {
    4 : "D",
    5 : "E",
    6 : "F"
}

// const obj3 = Object.assign(obj1,obj2);
// const obj4 = Object.assign({}, obj1, obj2)
const obj5 = {...obj1, ...obj2};
console.log(obj5);