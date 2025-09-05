// singleton.//buut if we declare a objects using constructor tthen this is a singletone objects.

// objects literals.//if we declare the objects as a literals then the objects not a singletone object.
// Object.create by using ssingle ton method .

// object creation
//const js user = {} this is a object ..

//anoother way  using constructor through..this oobjects call as a single ton objects .
//like 
//object.create ..

//objects are hav two main things one is key  and another oneo s value.


const mysmy = Symbol("key1")

const jsuser ={
    "fullname":"Debanjan_Roy",
name:"Debanjan",
age:20,
[mysmy]:"mykey1",
location:"Baruipur",
email:"deb@gmail.com",
isLoggedIn:false,
lastLoginDays:["Monday", "Saturday"]
}

// // console.log(jsuser.email); one process 
// console.log(jsuser.fullname);
// console.log(jsuser.email);
// console.log(jsuser["full name"]);// denote as a string type...

// console.log( typeof jsuser[mysmy]);



// if i want to print a value as a symbol the we have to put the squere backet...
// if we did not put the squere bracket then the value must be show as a string ..


// if i wnat to lock the value that anyone can not change the value ..we can apply freeze value.



// jsuser.email ="Debanjan@gmail.com"
// Object.freeze(jsuser)
// jsuser.email = "Deb@gmail.com"
// console.log(jsuser);

// create a function in javascript.

jsuser.greeting  = function(){
    console.log("Hello js useer");
}

// console.log(jsuser.greeting);
// console.log(jsuser.greeting());
//  console.log(`hello js use r, ${this.name}`);  string enrapulation
