//IMMEDIATELY INVOKED FUNCTION EXPRESIION(IIFE)
//TO  avoid the global scope polution we ussed the iief..
//another one if i create a function and i wnat to execute the function immeddiatly then we used the iife ,,


//just create a normal function.
(function chai(){
    //its a name iffe
    console.log(`DB CONNECTION`)
})();
// HERE WE GOT THE [PROBLEM]  JUST WRAPED THE HOLE FUNCTION BY USING A PARENTHISISH.

//ONE MORE THINGS I WNAT TO KNOW HERE WE STOP THE FUNCTION.SO JUST PUT A SEMICOLON

//chai()// HEREE THE PROGAMM RUN NORMALY .

//iife using arrow function.

((name) => {// its not a namme iife 
    console.log(`anothe db connection ${name}`
    );//if i store a variable 

})('debanjan')

// if i wnat to exxecute two iife then put jsut a semicolon in bwt two iife.