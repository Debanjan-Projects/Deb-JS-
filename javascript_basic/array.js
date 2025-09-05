// array
// in array we can declaer different type of values

const myArr=[0,1,2,3,4,5]

//java scripts array are resize able..we can fix my aray after declaer my array.
// js array create a shalo copy ...copy the same reference point ...
//deep copy ..also we have .


// const arr2 = new Array(1,2,3,4)
// console.log(arr2[0])


// array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9) 
// //values insert in the first position .


// myArr.shift() 
//  //we did not declare any parameter.

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   

// console.log( typeof newArr);

// console.log(myArr);




// slice 
// // (1,3)
// include fisrt second not third


 
// splice//(1,3)

//ishme values are delete .. like 1,,2,,3

//ak mein range include hota hain ,,or kkai mein nahi include hata hain.


// console.log("A",  myArr)

// const myn1 = myArr.slice(1,3)

// console.log(myn1);

// 




console.log("A", myArr);

console.log("B", myArr);
const myn2 = myArr.slice(1,3);
console.log("slice"+myn2);

console.log("C", myArr);
const myn3 = myArr.splice(1,3);
console.log("Splice "+myn3);
console.log("after splice " + myArr );



// //Copies only the reference (memory address) of the array.

// Both the original and copied arrays point to the same underlying elements.

// Any change in one array will affect the other.

// Example (Java):
// int[] original = {1, 2, 3};
// int[] shallowCopy = original; // Just a reference copy

// shallowCopy[0] = 99;

// System.out.println(original[0]); // Output: 99 (original also changed)

// 🔹 Deep Copy

// Creates a new array and copies the actual values.

// Both arrays are independent.

// Changing one will not affect the other.

// Example (Java):
// int[] original = {1, 2, 3};
// int[] deepCopy = new int[original.length];

// // Copy values one by one
// for (int i = 0; i < original.length; i++) {
//     deepCopy[i] = original[i];
// }

// deepCopy[0] = 99;

// System.out.println(original[0]); //