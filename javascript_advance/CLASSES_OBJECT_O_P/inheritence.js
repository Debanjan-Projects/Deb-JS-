class User {
    constructor(username){
        this.username = username
    }

    logME(){//jho user name sert kara hain ushh username ki value deta hhain.
        console.log(`USERNAME IS:${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email,password){

        super(username)//
        //konshi class extend kar rahe the. 
        // automatiically user name set kar dega ..or directly access kar sakta hain. 
        this.email = email,
        this.password  = password
        
    }

    addCourse(){
        console.log(`A new course was added by: ${this.username}`);
        }
}

const chai =  new Teacher("chai", "chai@gmail.com","123")
chai.addCourse()



const masalchai = new User("masalaChai")

masalchai.logME()


// console.log(chai === masalchai);
// console.log(chai instanceof Teacher);
console.log(chai instanceof User);


