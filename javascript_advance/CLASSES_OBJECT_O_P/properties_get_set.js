//old propertied of greter or seter method ki .
//morden syntax
//eedar banaya hain function.


function user(email, password){
    this._email = email;
    this._password = password


Object.defineProperty(this,'email', {

    get: function (){
        return this._email.toUpperCase()
    },
        set: function(value){
            this._email = value
      
    }
})// dena padta hain context



Object.defineProperty(this,'password', {

    get: function (){
        return this._password.toUpperCase()
    },
        set: function(value){
            this._password = value
      
    }
})



}

const chai = new user("chai@gmail.com", "chai")

console.log(chai.email);

//greter setter ak method hain , jho hum loh method ki upor rakh rahe hain , 

//actually hum log kar keya raha hain , memory she data lehh ah hraha hain or de raha hain.

//lene or dene ka jho way hain ushko override karneke liye memory greter or setter method used karte hain .
