// //for of loop ..
// for

for (let i = 0; i <= 10; index++) {
    const element = i;
    if (element ==5) {
    // console.log("5 is best number");
}
// console.log(element);
}

// console.log(element);

for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop value ${i}`);
    // console.log(i + '*' + j + ' =  ' + i*j);
    
    }
}

let myArray = ["spiderman", "ironman", "captain america"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Delected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
  
// }
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Delected 5`);
//         continue
//     }
//     console.log(`Value of i is ${index}`);
  
// }

// while loop 

// let index = 0
// while (index <= 10){
//     console.log(`values of index is ${index}`);

//     index = index+2
// }


// array with while loop
// let myArray = ["spiderman", "ironman", "captain america"]
// console.log(myArray.length);
// let arr = 0

// while (arr < arr.length){
//     console.log(`values is ${myArray[arr]}`
//     );
//     arr = arr+1;
// }
    


// do while loop 

// let score = 11
// do{
//     console.log(`score is ${score}`);
//     score++
// }while (score<=10)
    




//for off loop......

// // array and objects are very powerful in javaascript.


// //["","",""]//strings
// //[{},{}]//objects 

// const arr = [1,2,3,4,5]


// for (const num of arr) {//iteraator  -- objects ,array ,string.
//     // console.log(num);
    
// }

// //strings

// const greeting = "Gello mmag"
// for (const grid of greeting) {
//     // console.log(grid)
    
// }

// The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets, or NodeLists. It allows you to directly access the values of these iterables, making the code cleaner and more readable compared to traditional loops.


//maps..
//maps are same as array. thhe maps object holds key values pairs and remembers the original insertion order of the keys.

// maps are objects also ...

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"united state of america")
// map.set('fr',"france")

//maps known as a unique values ...which order i put the value i got thats way the values.

// console.log(map);

// for (const [key,value] of map) {

//     // console.log(key, ':-' ,value);
    
// }//here we want to do array destructuring


// map for obj

// const myObject = {
//     'game1':'snakke',
//     'game2':'monkey'
// }

// for (const [key , value] of myObject) {
//     console.log(key , ':-', value);
    
// }//my object is not itareble.

//for obj this loop structure is bot working.




// In JavaScript, a Map is a built-in object that allows you to store key–value pairs where both the keys and values can be of any data type (unlike plain objects, which use only strings or symbols as keys). Maps maintain the insertion order of elements, meaning items are retrieved in the same order they were added.


// for in loop ....
const myObject ={
    js: 'javascript',
    rb: 'ruby',
    html:"hrml",
    css:"css"

}

for (const key in myObject ) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}// for usingg loops in objects we just used for in loop

// can we used for in loop for Array.

const programming =['js','java','python','css']

for (const [key] in programming) {
//console.log(programming[key]);
}

//The for...in loop in JavaScript is used to iterate over the enumerable properties (keys) of an object. It allows you to access each property name one by one, making it useful for looping through object data.



//for in loop in map.
const map = new Map()
map.set('IN',"India")
map.set('USA',"united state of america")
map.set('fr',"france")
map.set('IN', "India")

for (const key in map) {
    console.log(key)
   
}
//map is not iterable ...so here we did not get the error.


//for each loop.....

const coding = ['js','java','c','python']


//here just put the array name after that just put .operator then put foreach loop then.between in the parenthisis create a function without name and implement anything in the function body.
// coding.forEach( function  (item)//value //val{// it is a call back funtion it dont have a name.
// console.log(item)
// ;
// })


//using arrow function.

// 

// 

// coding.forEach((item , index, arr)=>{
//     console.log(item, index , arr
//     );
// })

const mycoding =[

    {
        languagename : 'javascript',
        languagefilename : "js"
    },
    {
        languagename : 'python',
        languagefilename : "py"
    },
    {
        languagename : 'react',
        languagefilename : "jsx"
    }
    //here array have three obj.
]
 mycoding.forEach((item)=>{
    console.log(item.languagename);
 })





 //************************************ */

 const coding = ['js','java','c','python']

const values = coding.forEach((item) => {
    //console.log(item)
    return item
})

console.log(values);
// foreach did not return the value.



//filter *******************

// const mynums = [ 1,2,3,4,5,6,7,8,9,10]

// const newnums  = mynums.filter((num)=> {
//     return num>4
// })
// console.log(newnums);


// const newnums = []

// mynums.forEach((num) =>{
//     if(num>4){{
//         newnums.push(num)
//     }}
// })

// console.log(newnums);;



//chaning method 

// const newnums =mynumes

// .map((num) => num*10)
// .map((num) =>num+1)
// .filter((num) => num>= 40)

// console.log(newnums);




//reducce js

const mynums =[1,2,3]
// const mytotal = mynums.reduce(function(acc, curval){
//     console.log(`acc: ${acc} and currval : ${curval}`);
//     return acc+ curval
// }, 0)
// console.log(mytotal);



// same things in foreach loop

const mytotal = mynums.reduce((acc, curr) => acc+curr),0

console.log(mytotal);


const shoopingcart =[
    {
        itemname :" js cource",
        price:1000
    },
    
    {
        itemname :" js cource",
        price:1000
    },
    
    {
        itemname :" js cource",
        price:1000
    },
    

]
const pricetopay = shoppingcart.reduce((item)=> acc + item.price,0)
console.log(pricetopay);