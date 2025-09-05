// scope..
// scope start with let var and const

// let a = 10

// const b = 20


// var c = 30 
// //  in everey where { }are is an a scope.
// here have a problem

 // if a programmar change the var vallue hare 

//   var c = 300 after change the value the progrmmar get the same value then they got cofused.

 //and what i right out of the block scope is known as global scope.

 let a = 3300
if (true) {
    let a = 10

    const b = 20  //in the curlibrasish this is a block scope.
    console.log("inner:" ,a);


    //var c = 30 //if i put the var keywork ,or not the programmar got the same problem.

    //that's why all programmar avoid the var ..and here start the scope concept.

    // and here the problem is occurd c come out of the block.


    //if so many programmas are program together,the the problem must be occurd for huge time .
}





// run the three line code 
// console.log(a);
// console.log(b);
//console.log(c);



//closure................................


//nested function..

function one(){
    const  username = "Debanjan"
    function two(){
        const website = "flipcart"
        console.log(username);
    }
    // console.log(website);
    two()

}

// one()

// in nested function child can acces the all features of the parents .

// if else also have the same things ..it means scope.

if (true){
    const username = "debanjan"
    if(username === "debanjan"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);





// interesting...


//okh here  we jsut create some basic operation ..
// we move the add funnction bbefore the declaretion og the function ..lets see its work or not .

console.log(addone(6))
//its work its dont have any error or problem.

function addone(num){// iits a normal function.
    return num +1
}

// addone(6)


//for this funcction also we do the same operation.

addtwo(5) // here we got the problem or error.
// so all kind of erroe depend on the function declaretion.


// and the concept is javascript is known as hsoting .
const addtwo = function(num){//its also a normal function ,but many time its call a expression.
    return  num +2
}
// addtwo(5)
