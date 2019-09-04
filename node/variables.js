// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test =  3;

// let, is like var, but block scoped, and not allowed to re-declare
// let hello = 'world'; // Notice strings use single quotes
hello = 5; // changing the type of variable is okay, in this case string to number.

// const is a constant
const iAmAConstant = 9;

// objects
// variables can also be objects
const obj = {};

// objects can dynamically add and remove properties
obj.a = 9;

// For Practice

// declare an object with an object as a property
const myObject = {
    a : {

    }
};
// myObject = {}; // not allowed
// myObject.a = 3;
myObject.a.b = 4; // also ok

// delete a property
myObject.a = null;
console.log(myObject);
myObject.a = undefined;
console.log(myObject);
delete myObject.a;
console.log(myObject);

// variable named variable
const variableName = 'a';
myObject.a = 8;
