function multipleBy5(num){
    this.num = num;
    return num*5
}

 multipleBy5.power = 2

 console.log(multipleBy5(5));
  console.log(multipleBy5.power);
 console.log(multipleBy5.prototype);

 //protytypes srif method nahi internal property bhi deta hain.



 // function technically reference to object ..


 function createUser(username , score){

     this.username = username
     this.score = score



 }

 createUser.prototype.icrement = function(){
   this.score++// cuurent context ka using this
 }

 createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
 }


 // here creatuser fase some problem ..that which score need to update.
 //jab values add kari thi tab bataya nahi ishh ke pass additional property aye hain.


 //or ohh thik hota hain new key word ke jariya.

//new keyword.
 const chai = new createUser("chai",25)

 const tea =  createUser("tea", 250)

 chai.printMe()//here we got the problem Cannot read properties of undefined..


 
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/