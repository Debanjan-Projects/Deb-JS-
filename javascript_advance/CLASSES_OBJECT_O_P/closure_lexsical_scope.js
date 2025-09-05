//Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.



//closure hain ..suppose ak outer funcytion ke andar ak inner function add kar diya hain to inner function outer function ki scope ka access mil jata hain.


//scope ka access matlab .scope ke andar mein jho variable hain,jho property hain ,jho function hain ushhka bhi access miil jata hain.


//Lexical scoping
// Consider the following example code:

// js
// Copy to Clipboard


function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();