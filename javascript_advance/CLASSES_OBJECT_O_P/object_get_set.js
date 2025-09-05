//edhar banaya hain object.
const User = {
    _email: "deb@gmail.com",
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//new ak constructor function ..
//here we used a factory function.
const tea =  Object.create(User)
console.log(tea.email);

//gretter or seter ohh mthod hain jho main property ke upor rakh raha huin.
//memory ke andar value de raha huin or llehh raha  huin.