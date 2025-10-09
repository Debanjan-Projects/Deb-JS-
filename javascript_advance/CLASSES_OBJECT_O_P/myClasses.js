//es6 ke bad ee used kar rahi hain..
//class ak keyword hain.


class user {
    //when constructor call,
    //jaishe hi new keyword ko kam mein kehh lenge oshe hi constructor call ho jayega ,
    constructor(username, email ,password){
        this.username = username,

        this.email = email,
        this.password = password

        //basic constructor.
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new user("Deb", "Deb@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


//behind the scenc

function user(username, email ,password){
      this.username = username,

        this.email = email,
        this.password = password
}

user.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

user.prototype.changeUserName = function(){
     return`${this.username.toUpperCase()}`
}



const tea = new user("tea", "tea@gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


console.log(tea.encryptPassword());
console.log(tea.changeUserName());



