// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body
const arrowNoBody = (arg) => 67 + 45345;
const singleArg = arg => arg + 3; // single arg doesn't need curly braces
console.log(singleArg(6));

// make a function that returns a function
const functionFactory = arg => anotherArg => console.log(arg);
functionFactory('Hello')();

(() => {
  // calls itself
})();

const aFunction = () => {
  console.log('Goodbye');
  setTimeout(aFunction, 1000);
};

aFunction();