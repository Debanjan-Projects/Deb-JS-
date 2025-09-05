// for shopping cart add to many values .


//  here we used the Spread and Rest operator
// function calculateCartPrice( ...num1)//rest operator
function calculateCartPrice(  val1, val2,val3,...num1){// after using this we got array
    //  return num1
    return val1 ,val2 ,val3,num1
}
console.log(calculateCartPrice(200 , 400 ,600 ,2000 ,4000))



// objects used in function.
const user ={
    username: "Debanjan",
    price: 100
}

function handelobj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);   

}

handelobj(user)

// direct object pass in the function.

handelobj({
    username: "Babai",
    price: 200
})

// direct array pass in the function.
const myMyNewArray = [100 ,200 ,300]


function returnsecondvalue(getarray){
    return getarray[1]
}

// console.log (returnsecondvalue(myMyNewArray));
// console.log (myMyNewArray);


// scope .

