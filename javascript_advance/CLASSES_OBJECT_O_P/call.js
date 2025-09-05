function setUserName(username){
    //complex calculation //complex DB call
    this.username = username
    console.log("called");

}

function createUser(username , email, password ){


    setUserName.call(this,username)//
    //
    //setUserName(username) call nahi ho raha hain.edhar just reference diya huya hain ,,call nahi kiya hain.

    // jab call ee ho goya to ushka executionn context ee hata di.so all data(variable) bhi clear ho geya  ..
    // we need to hold the reference.

    //give a reference.
    //using .this


    this.email = email,
    this.password = password

}

const chai = new createUser("chai", "chai@gmail.com" , "123")
console.log(chai);

//call hamara cuurent execution context kishi or ko pass kara deta hain.