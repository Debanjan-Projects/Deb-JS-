//IF 
if (true ){
    // if the condition is ture the the block must be execute ..if the condition is false then the block does not execute. 

}


//if
// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ) {
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, !=, ===, !==

// Const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // not execute here becAUSE IT IS PRESENT OUTSIDE THE SCOPE

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");//implicite code

// if (balance < 500) {
//     console.log("less than 500");
// } 
// else if (balance < 750) {
//     console.log("less than 750");

// } 
// else if (balance <900) {
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in");
}






// ****************************************************

//switch statement..
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3;
const month = "march"

switch (month) {
    case "January":
        console.log("January");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}







// *****************************************************

// truthy or falsy value..


// const userEmail = "r@robb.ai"

if (userEmail ) {
    console.log("Got user email ");
} else {
    console.log("Don't have user email")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0 ) {
//     console.log("Array is empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")