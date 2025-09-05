class User  {
 constructor(username){
    this.username = username
 }

 //add a method 


 logME(){
    console.log(`username: ${this.username}`);
 }

 static createId(){// property ka accces hone se rok leta hain.
    return `123`
 }
}

const Deb = new User("Deb")
// console.log(Deb.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@gmail.com")
// console.log()
// console.log(iphone.logME());
// iphone.logME()

console.log(iphone.createId());