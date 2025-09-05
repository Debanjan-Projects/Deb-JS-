// generate a random color..
// random color are generate from rmdom hex value se.

const randomColor = function (){
  const hex = "0123456789ABCDEF"// hex color range
  let color = '#'
  for(let i = 0 ; i<6 ;i++){
    //kiuki random value add karna hain..

    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
};

//for strat button 
// how change the background color.
let intervalId;//global scope mein declare karna hain. 

const  startChangingColor  = function(){

 if(!intervalId){
  intervalId = setInterval(changeBgColor,1000);
 }
  


  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
  
};//ab ish method kam karega.

// console.log(Math.random()*16);// 16 values hex values .
// console.log(Math.floor(Math.random()*16));


//for start button.
document.querySelector('#start').addEventListener('click',startChangingColor)// here the startChangingClor method does not exists.

//for stopbutton.

const  stopChangingColor  = function(){
  clearInterval(intervalId);
  // intervalId= null;agar nahi karta huin.hume thora sha modify karna hain.
  intervalId= null;

};

document.querySelector('#stop').addEventListener('click',stopChangingColor)

