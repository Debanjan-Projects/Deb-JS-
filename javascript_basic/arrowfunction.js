//arrow function ...main keyword in arrow funtion is this keyword.
//this keywork fetch the current obj.


//creating a website ..
//  const user = {
//     username : "Debanjan",
//     price : 333,

//     welcomeMessage: function (){
     
//         // console.log(`${this.username},welcome the website `);
//         // console.log(this);
//     }
//  }

//  user.welcomeMessage()// because its a method

// // now here i chnage the value ..of user.

// user.username = "Deba"
// user.welcomeMessage()

// // console.log(this);

// here we got {} its a empty obj

// //functiom

// function one(){
//     let username ="debanjan"
//     console.log(this.username);// insert this have so many values and those values are we can used
// }
// one()


// const one =function(){
//         let username ="debanjan"
//         console.log(this.username);


// // insert this have so many values and those values are we can used
//     }


//     one()


//now examlpme of a arrow function llike




//arrow function

//  const addTwo = (num1, num2) => {
//     return num1 +num2
    
// }

//implicit return..

// const addTwo = (num1, num2) =>  num1 +num2

// const addTwo = (num1, num2) => ( num1 +num2)
        
    //if i put the number in the curlibreashis then we must be return the result and if we  dont want to return then just put the the number in just parenthisish.    
     


    //explicitly when we used the return.


    //if i want to create a n object the i ust bee wraped the object in the parenthisish.

const addTwo = (num1, num2) => ({username: "Debanjan"})

//yaeh here we got the dataa as a undefine .we just wraped the data in the parenthisish.then we got the resullt.
console.log(addTwo(2,6))



 