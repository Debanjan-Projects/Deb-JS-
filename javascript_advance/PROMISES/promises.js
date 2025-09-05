//go through the promises mdn documentation.


//promises ak apne ap hoo object hain.
//new kwy word she ak instance mil jata hian.

// mostly promises are comsumed ..but many time promises also create .


//lets create many types of promises/.

// fetch('http://somthing.com')
// .then().catch().finally() //promises ko consume karne ke pahele humlogoko samajhnna padta hain promisesko create kaise karti hain .

//jab tak banana nahi ayenge tab tak promises achhe se nahi sekha jayega.

//const promiseOne = new Promise()// promise create 

//library like queue and bluebird 
// ..
//ishh ke throuh ap core js ke anddar sab functionality use kar sakta hain jho abhi fetch then catch se karta hain..

const promiseOne = new Promise(function(resolve ,reject){
    //do an asyn task
    //db calls, crytography ,networkcall 
    setTimeout(function(){
        console.log('async task is complete');
        resolve()//call karna padega.values bhi pass kar sakta hain.
    },1000)
})
// prome get a call back ..callback hell ..its means promises ke call back ke andar promises ke call back hain.
// do part ak 
// 1. consume karnna 
//2. create karna.

promiseOne.then(function(){
    console.log("promise consumed")

})// .then ka relation hain with resolve ..//.then ke andar milta hain ak call back.//here also a call back

//here async task is complete ehh to print ho geya ..lekin promise consumed ehh 1000 ke bad bhi nahi print huya its means . mein .then or resolved ke sath kabhi relation add ee nahi kiya . 



//another way

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("async task two");
        resolve(); // callback
    }, 1000);
})
.then(function() {//.then ke andar har time ak function miltaa hain.
    console.log("async two resolved");
});

//third promise

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chhai", email:"chai@example.com"})//call back//jho data pass hoga ohh object hoga.
    },1000)

})
promiseThree.then(function(user){//values pass by resolve
console.log(user);
})
// its all about basic how data consumed hota hain.and how values are come.


//fourth promise

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        //let error = true;//error eha true thi ..// error based checking ke upor depend karke bolega ki actualy resolve hoga na reject hoga .

        // error based checking ke upor depend karke bolega ki actualy resolve hoga na reject hoga .
        // agar ak web file access karn chati huin ..agar acsess ho gey ato ..kucch message dega agar nahi huya to fir bhi ak message dega.

        let error = false;//ture; // error false karke bhi dekhta huin.

        if(!error){
            resolve({username:"debanjan", password: "123"})
        }
        else{//else part give as reject .
            reject('ERROR: something went wrong')

        }
    },1000)
})

//here the main thing callback all thing 
//agar error nahi aya to .then( )lagake value leh lunga .
//agar error aya to .catch()lagake value le lunga .

//const userName = promiseFour.then((user)=>{
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{//chaning // jho upor wali .then()she value return hoke ayegi ohh chaning hogi.//for data base connection its used too much.

console.log(username);
})
.catch(function(error){// catch() because error bhi ah raha hain.
    console.log(error);
})
.finally(()=>console.log("The promise is either resolve or rejected"))//finally hum jho chate hain ohh execute ho chuka hain.
//arrow function


//console.log(userName)//eaishe varriable pe add karke username nahi console kar sakte hain.


//promise five

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
         let error = true;//problem ho sakta hain
        //let error = false;//agar ehh false reha tto koi problem nahi hoga .


        if(!error){
            resolve({username : "javascript", password : "13"})
        }

        else{
            reject("ERROR: js went wrong")
        }
    },1000)
})







// ab tak jho situation tha ke ..promiseFive.then laga do ..
//lekin ab thora sha real situation.using another approach

//async await syntax.
//eh bhi .then and .catch ke type ke hi hota hain ,ehh function wait karta hain kuch time ke liye after complete the wait they start the work.


//grasfully catch nahi handel karta hain.




// async function consumePromiseFive({
//  const response = await promiseFive// store in a variable
//  console.log(response)
// })// it  is worng systex



//write  another time 

async function consumepromiseFive(){
    //agar eha rejection huya hain so used trycatch block.
   
    //promise ak object hain so hum log promise ko   await promiseFive() ishh tara she consume nahi karte hain ,

    //hain eventually object lekin object hi hain.

     
    try {
        const response =  await promiseFive
        console.log(response);
        //agar error ahh geya..handel it 
    } catch (error) {
        console.log(error);
    }//promise ak object hain so ham ()..ishh tarha se consumed nahi kar sakta hain..

   
}

consumepromiseFive()//function execute .



//************************************ */
//ehh to hamara trycatch ka systax hain .


// async  function getAllUser(){
//     // just rap in a try catch
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')//object
//     //console.log(response);
//      const data = await response.json()// ehh bhhi convert hone mein time lagta hain.ehh bhi await karana padega.
//      console.log(data);
    
//   } 
// 
// 
// catch (error) {
//     console.log("E:",error);
//   }
// }
//getAllUser()// get all user to aya nahi ..jsut rap in a try catch .// chise time leti hain..
//now all data are come .or got .





//aggar eshi function ko .catch or  .then mein likhna hota to kaise likhe .







//****************** */
// now we know about fetch...()


//after this explanation we know the fetch very weel.
// what is fetch ..


///fetch is a very exciting fetures in node js.it is available in browser.aslo.
//

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})//thenable data.
//write a arrow function.
.catch((error) => console.log("error"))//agar error aya tooo. error handel kar lenge.
//return kar diya response.json .. ab ishe handel karega one more.then()



//artical  ,logrocket.................................
//mdn fetch().........................................



//now we know about fetch()...


///fetch last mein karneke bad nnmein bhi fetch value first mein aghh raha hain..or sab bad mein a raha hain .setTimeOut bhi bad mein ahh raha hain.

// kiu ki ak special queue banta hain only fetch ke liye .// kknow as microtask queue / priority queue /tectch queue / speed queue.
//vip line jo sidha call stack mein jat ahian ..or ushka result pehela ayega.


//***************************************************** *
// //fetch done the hole work...
//fetch jaishe kam karta hain ushka internal machanism ohh do part mein divide hota haain.
//1.web broswer(native node)

//ak array hota hain .1. on fullfilled.(promise ka resolution)..

//or ak hota hain 2.on rejection.(rejection)

// ehh array hota hain ..ish mein directly data push karna allow nahi hain ..
// we cant access the array.

//2.variable or memeory per data /sspace reserved karne ke liye.

//web browser baase api handel karega ..eya to node base api handel karega.
// eha se jata haiin ak network request .lekin bich mein lagta hain ak resource.
//resource may be dehh raha broswer nahi to node js.
// agfter getting the network request .. eitheer data go (received )or (reject )

////kuch bhi agar response aya tho ohh hamesha jata hain  on fullfilled mein
//or kuch bhi response nahi aya to ohh hoga reject .

//jho data hota hain ohh memory per reserved hoke reheta hain .lekin ohh hamesh empty hota hain.
//on fullfilled and    on rejection .in dono mein rahata hain function jho data ko fullfill karneke liye .

//or data ki responsibility hota hain ..response kko fullfill karna ./
//*************************************************** */




//prons and cons og async await.
// how async await create problem in some situation.