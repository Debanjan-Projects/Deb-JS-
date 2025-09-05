// Object.getOwnPropertyDescriptor(Math,"PI")

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// Math .Pi ka value constant hain key ahum log ish ko change nahi kar sakta ..


/// object declare using factory function..
// Object.create()
const chai = {
    name: "chai",
    price: 250,
    isAvailable: true  ,// ✅ 'True' changed to 'true'


    orderChai:function(){
        console.log("chai nahi bani");
    }
}
//main enumerition nahi chata huin eha pe.eha per ham or loop nahi lag payege.


// ✅ Corrected: use getOwnPropertyDescriptor for a specific property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// ✅ Fixed typo: defineProperty (not definePropertie) and 'writable' (not writeable)
Object.defineProperty(chai, "name", {
   // writable: false,
    //enumerable: false
    enumerable: true
});

// ✅ Check updated descriptor
console.log(Object.getOwnPropertyDescriptor(chai, "name"));



for (let [key,value]of Object.entries(chai) ){
    if(typeof value !== 'function'){
        console.log(`${key}, ${value}`);
    }
    //it sis not iterable ..because it is object .
}
