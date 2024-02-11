const descriptor= Object.getOwnPropertyDescriptor(Math, "PI")
// It tell hidden fact about object
console.log(descriptor);
// We cant change the Pi vl because the writable is false and it is hard coded

const chai = {
    name: 'ginger chai',
    price: 300,
    isAvailable: true,
    orderChai: function(){
        console.log("Chai nhi banegi");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai));
// This will give undefined becoz we are asking for object but the code is for property
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// To change the property value use this below code
Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// To iterate the objevt like looping use this coe
for (let [key, value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
        console.log(`${key}, ${value}`);
    }
}