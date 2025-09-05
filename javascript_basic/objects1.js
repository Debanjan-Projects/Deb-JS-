// object declaration in singeltone..or using constructor.


// const tinderuser = new Object() // ...singleton object.

const tinderuser ={} //..non single ton object .

tinderuser.id = "123abc"
tinderuser.name = "Deb"
tinderuser.isLoggedIn =false

// console.log(tinderuser);

const newobj = {
    email:"Deb@gmailcom",
    name: {
        userfullname:{
            firstname:"Debanjan",
            lastname:"Roy"
        }
    }
}


// console.log(newobj.name.username);



// objects merge or objects combined.

// here we use key as a number and value as  a string

// const obj1={1: "a", 2:"b"}
// const obj2={ 3: "c", 4: "d"}


// // const obj3 ={obj1 ,obj2 }

// //const obj3 =Object.assign(obj1, obj2)
// //one way 


// const obj3 =Object.assign({} ,obj1, obj2)
// 
//using open curllibasish another way.

//using spread operator.

// const onj3 = object .assign(...obj1, ...obj2)



// console.log(obj3);


// when values are comes from the database .

const user =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

user[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


console.log(tinderuser.hasOwnProperty('isLogged'));



