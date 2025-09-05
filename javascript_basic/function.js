
// function..
function MyName(){
    console.log("D");
    console.log("E");
    console.log("B");
    console.log("A");
    console.log("N");
    console.log("j");
    console.log("A");
    console.log("N");
}

// MyName..function if want to execute the fuction then just put the parenthisish.

// like MyName() its a function execution ..its areference.
// MyName()

//  if  i just print MyName then its does not print anything ecause it give the reference not any value.

// addtwo number.
// function AddTwoNumber(num1 ,num2){// parameters
//    console.log( num1+num2);
    
// }



function AddTwoNumber(num1 ,num2){// parameters
 let result = num1+num2
  return result

  // here we can see that how a return value has work ..and after return we can store a value in a variable.

  console.log("hallo") ;  
   //here the clg not work after return any kind of function does not work.

  // here we got the result as a 3..its means its work but we did not get a print value.

  //we need to print the value .in console .

    
}

// AddTwoNumber(1,2) 
// //argument
// here we just learn about the function not any logical operation.

// problem here have 

// AddTwoNumber(1,"2") here javascript use his own brain and convert the number in string.

// AddTwoNumber(1,"a").here simply print 1a.

// AddTwoNumber(1,null).here simply print one value .1 beacuse the second value is null.


// we can store the value in variable.
// const result = AddTwoNumber(1,2);


// here the funtion work properly but if i want to print the result then what s the result i can found.

 // here we got the undifine value .. because console didi not return the return value .console just work a s a console and return is an another concept.




// `` string interpulation.
 function loginUserMessage(username){

    if(username === undefined){
        console.log("please enter your username")
        return // here the next return does not work.
    }

     // if i want to the lline is did not run anymore .then just right return before the return.
    return `${username}  just Logged In`

}
// here we peint the argument value using clg

// console.log(loginUserMessage("Debanjan"));
 console.log(loginUserMessage()); // here we got the undefined valuse.

