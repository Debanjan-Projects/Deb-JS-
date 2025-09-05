// one array in the another array

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
 

const allheros =marvel_heros. concat(dc_heros)
console.log(allheros);

// spraed out value

// const allheros_new =[...marvel_heros, ...dc_heros]
// console.log(allheros_new);


const another_array = [1,2,3,[44,5,6],7,[8,9,4],8]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Debanjan"));
// console.log(Array.from("Debanjan"));/convert ina array
console.log(Array.from({name:"Debanjan"}));//intreesting empty array

let score1= 100
let score2 =200
let score3 =300
console.log(Array.of(score1, score2 ,score3));


// array.is

// Array.of
// array.from..