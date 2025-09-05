
//edar banaya hain class

class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    //we can apply greter or seter in those variable oor property.

// creating greter for an email.
    get email(){
        return this.email.toUpperCase()
    }

    set email(value){
        // return this.email.toUpperCase
        // return this._email //seters ko kabhi bhi return nahi karte .
        this._email = value
    }







    get password(){
        // return this._password.toUpperCase() 
        return `${this._password}Deb`
        //agar koi value lhe raha hoin to value upperCase mein hoga .
        //agar greter define kare to seter bhi define karna paadta hain.
        //bahar she koi value get karneke liye greter used karta hain .or koi value set karneke liye setter used karta hain.
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value// password set .
    }
}

//create a user.
const deb = new User("Deb@gmail.com","abc")
// console.log(deb.password);
console.log(deb.email);


///agar main kishiko password dena hi nahi chate hain to ush kais mein error dena padta hain or oha par greter or seter kam karta hain.
