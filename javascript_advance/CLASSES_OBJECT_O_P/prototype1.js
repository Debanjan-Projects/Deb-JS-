//goal keya hain..
//

// let myName = "Debanjan     "

// // console.log(myName.length);
// console.log(myName.truelength);
// // console.log(myName.trim().length);//


// create a method ..this is our goal


// In object-oriented programming, 
// properties represent the data or attributes of an object,
//  while methods represent the actions or behaviors that an object can perform..




let myHero = ["thor","superMan",]

//create a object
let heroPower = {
    thor: "hammer",
    superMan: "energy",

    getSuperpower: function(){
        console.log(`super power is ${this.superMan}`);
    }
}

Object.prototype.Debanjan = function(){
    console.log(`Debanjan is present in all object`);
}



//object mein ak new property add kar diya jho ,array ,string ,function ..har ak ke pass chala geya ..

//another test ..agar power array ko duin ohhkeya object ke pass chala jata hain.

Array.prototype.HeyDebanjan = function(){
    console.log(`Debanjan say hello`);
}



// heroPower.Debanjan()
myHero.Debanjan()
myHero.HeyDebanjan()
// heroPower.HeyDebanjan()



//inheritance ki 
const user = {
     name: 'Deb',
     email: 'Deb@gmail.com',
}

const teacher = {
    makevideo: true,

}
 const TeachingSupport = {
    isAvailable : false,
 }

 const TASUpport = {
     makeAssignment : 'js assignment',
     fullTime : true,
     __proto__:TeachingSupport
 }
teacher.__proto__ = user



//modern syntax.
//khiski property kishi ki andar put karna hain ,

Object.setPrototypeOf(TeachingSupport, teacher)


let anotherUserName = "Debanajan        "


String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is :${this.trim().length}`);
}
//In JavaScript, the trim() method is a string method used to remove whitespace from both ends of a string.

// 🔹 Syntax:
// javascript
// Copy code
// string.trim()

anotherUserName.truelength()
"Debanjan".truelength()
"tea".truelength()




