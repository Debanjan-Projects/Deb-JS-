//when we give a code to js ..then currenlt a file was created and this file known ass global ec..

//and its refer by thhis..

// browser this values is window Object.

//javascript is a single threded.
//global ec, function ec,eval ec=>propert of global object.


//execute process
//memory creation phase or creation phase.
//execution phase.


//1.global execution ..by this.
//2. memory phase
//all value store as a undefine.
//addnumber -definition.
//result one - undefined
//result 2 - undefined.
//3.execution phase
//1.val 1- 10
//val2-55

//add num - create a executional context..
//here another time creatae a new variable env+ execution thead.
//then another time create a memory phase.
//val1 - undefine
//val2- undefine
//totl- undefined.

//execution context 
///num1-20
//num 2 - 88
//total -- 1666


//total return in global execution context.

//call stack--
//ggobal execcution

//one()


//TWO ()


//THREE()

//LAST IN FRST OUT ..






// In JavaScript, the execution context is the environment in which a piece of code is evaluated and executed. It defines what variables, functions, and objects are accessible at a given time. When JavaScript runs any code, it creates an execution context to manage the execution process.

// There are mainly three types of execution contexts:

// Global Execution Context (GEC): Created by default when the JavaScript program starts. It defines the global scope and creates the window object (in browsers).

// Function Execution Context (FEC): Created every time a function is called. It has its own scope and variables, independent of other functions.

// Eval Execution Context: Created when code is executed inside an eval() function.

// Each execution context has two main phases — the creation phase (where variables, functions, and the this keyword are set up) and the execution phase (where the code runs line by line). JavaScript manages these contexts using a call stack, executing the most recent context first.


//about call stack.

// In JavaScript, the call stack is a data structure that keeps track of the execution of functions in the order they are called. It follows the Last In, First Out (LIFO) principle — meaning the most recently called function is executed first and removed last.

// When a JavaScript program starts, the Global Execution Context is created and pushed onto the call stack. Every time a function is invoked, a new Function Execution Context is created and added (pushed) to the top of the stack. When the function finishes executing, its context is popped off the stack, and control returns to the function below it.

// If too many functions are called without completing, it can cause a “stack overflow” error. The call stack helps JavaScript manage function execution order efficiently and is essential for understanding how code runs step by step.