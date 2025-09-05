//first select the element

// 1.body  2. all button here ....we prefer to select the all button in a loop becaus eit is easy to use.

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');
//for node list here we used the foreach loop ..not for html collection.

//there are many types of event we have like..

//1. click a button .
//2. close a windows .
// here we know that we can used event a s a function and done some activity on evenet .
// here we got the node list now we can used foreach loop ..
// in for each loop we can used arrow function or normal function.
buttons.forEach(function (button) {
  console.log(button);

  // used eventlistener on every button.
  // we can add an evenetlistenner on every button just used addeventlistener ..
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);// here from the event come .
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    
    }
     if (event.target.id === 'black') {
      body.style.backgroundColor = 'black'; 
     }
    
  });
});
