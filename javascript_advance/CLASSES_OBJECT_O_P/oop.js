//what is object literal.// litrally ak object banana hain.

// just create a user object.


const user = {
    //javascript mein ishi ko bhi base unit bola geya hian .object ehi object litral hain or basic unit hain.

    username: "Debanjan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);//here we got empty paretheses.
    }
     //or esob hi object letaral hain..
    // its all are  property.



}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);
//console.logg agar  main    global context     ke andar karta hain to..





//constructor function.


// const promise = new Promise()


// const date = new  Date ()// her new is a constructor function.its allow that ap aki object she multiple instance bana sakta huin.

// //new key word used for create a new context .. it is known as constructor function.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

//function to aki bar run hota hain ,ushka to ak hi global execution context hota hian..

//left hand side values are variable and right hand side value are jho ap pass karke dehh rahi hoin.

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this//agar return this nahi kare ..//value implicitly data return hota hain.
}

const userOne =  new User("Debanjan", 12, true)// add new keyword 
const userTwo =  new User("Debdulal", 11, false)// userTwo nw data override ka di .userOne ke upor.
console.log(userOne);
console.log(userOne.constructor);
//console.log(userTwo);
//value overridde hota hain.


//instance of ...god keyword in js.


//what are the important of new keyword.


////about new kwyword..
//when we write the new keyword then an empty instance create hota hain.
//object create hota hain

// constructor functtion call hota hain new kwyword kw liye .

//this keyword and agrument are injects in.
//functtion ke andar mil jata hian.


//mathod hota hain instance off..
