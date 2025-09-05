//first we create a  random number in between 1 to 100.
// how we create a  random number .
// for generate a random number ..  we used  math libary ..math.random().
// parseInt(console.log(Math.random() *10 +1));

const randomNumber = parseInt(Math.random() * 100 + 1);


//selete the button , values .
const submitButton = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');


const p = document.createElement('p')//here paragraph is present in a global scope.


let prevGuess = [];
let numGuess = 1;

let playGame = true;// its allow to play game .

// first check that u available for play this game or not.
if (playGame) {
  submitButton.addEventListener('click', function (e) {
    //prevent default
    e.preventDefault()
    const guess = parseInt(userinput.value)
    console.log(guess);
    validateGuess(guess);
  });
}


//now careate some function ..

function validateGuess(guess) {// simply guess thats values are  present  or not in between 1 and 100
  //
  if (isNaN(guess)) {
    alert('please entre a valid number');
  }


  else if (guess < 1) {
    alert('please enter a  number  grater  than 1')
  }

  else if (guess > 100) {
    alert('please enter a number less then 100  ')
  }

  else {
    prevGuess.push(guess)//push in a array .
    //may be it is the last attempt of the player .. i did not guess the number to a player more then 10 attempts .
    //ushka game over to nahi ho geya ??

    if (numGuess === 11) {
      displayGuess(guess)
      displayMessage(`game over. Random number was  ${randomNumber}`)
      endgame()
    }
    else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}


function checkGuess(guess) {//its check that the guess number is equal or not equal with the random number .
  // if mathch then give a message to user that he own the game , 
  //if the number is lower then saw a message the guess number is lower from the random number .
  // if the number is high ,then saw a message to user that the guess number is biger from the random number .
  //that is ..
  //
  if (guess === randomNumber) {
    displayMessage(`you gueesed it right `)
    endgame()
  }
  else if (guess < randomNumber) {
    displayMessage(`your guess number is too low`)
  }
  else if (guess > randomNumber) {
    displayMessage(`your guess number is too high`)
  }
}


function displayGuess(guess) {//clean the values .//clean up method
  //guess values bhi update karega .
  //guess array values bhi update karega .
  // remaining values bhi update karega.

  //
  userinput.value = '';
  guesslot.innerHTML += `${guess}  , `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {// this method directly interact with dom.
  //lowOrhi selector er bich mein ak message print karega .and as it is print karega ..
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// now we wnat a method that the game end also and create a new game also .



function endgame() {
  //
  userinput.value = ''
  userinput.setAttribute('disabled', '')//set a attribute .. disabled...
  p.classList.add('button')

  p.innerHTML =`<h2 id= "newGame">start a new game</h2>`;
  startOver.appendChild(p)//add a class and also  add a new game id , also apped it .
  //now make the playGame in false.
  playGame  = false;
  newGame();
}

function newGame() {

  //set button as a reference.
  const newGameButton = document.querySelector('#newGame')
  //
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;



    

  });
}

  