// here we wnwt to display the clock time .
// where we display the time ..we want a reference ..

// just hold clock as a reference and display the time ..
// how we select a clock as a refrence.
// here we select the element by usin getElementById.

const clock = document.getElementById('clock')
//const clock =document.querySelector('#clock')
// here we create a digital clock its means the clock time change per second..
//if we want to display a clock then it is to easy ...like

 //let date = new Date();

//date ke upor we used a method known as toLocalTimeString.


//console.log(date.toLocaleTimeString());


//  we want time bar bar  update hoin and display bhi kare .
//here we try tto know a metod that by using those method we can handel the time and also display the time ..


// here  we know abouut the method which control the javascript evenet know as .......setInterval ..... mmethod .

// here we know about how many interval for display (for continously runn karrunga ).
setInterval(function(){
  let date = new Date();

  //we dont want to run this in my console ..
  // we want to update the document .

  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);// here we have two parameter.