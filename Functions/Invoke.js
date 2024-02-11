// Immediately Invoked Function Expression 

// Why IIFE To solve the global pollution we use IIFE

// function chai(){
//     console.log(`Hello Aisha Shafiya`);
// }
// ();

// To run the below code need to add parenthesis at the beginning and end
(function chai(){
        console.log(`Hello Aisha Shafiya`);
    })
    ();

    // To run the arrow function
    (
        (name) => {
            console.log(`Hello Aisha Amreen ${name}`);
        }
    )('Aisha');