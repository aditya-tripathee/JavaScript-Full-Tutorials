
// * Math Object in JavaScript 
// *=====================================

// * Math :-- The math namespace object contains static properties and methods for mathematical constants and functions 
// * Math works with the Number type . It doesn't work with BigInt


//? 1. Constants:--
// * Math.PI :-- Represnts the mathematical constant with BigInt 

const piValue = Math.PI;
console.log(piValue);


//* Basic Operations :---
//? Math.abs() :-- The Math.abs() static method returns the absolute value of a number.
  console.log(Math.abs(-8));



//? Math.round(x) :-- Rounds a number to the nearest integer
const roundedValue = Math.round(3.4);
console.log(roundedValue);  


//? Math.ceil() :--- Returns the value of x rounded up to its nearest integer 

const ceilValue = Math.ceil(3.7);
console.log(ceilValue);


//? Math.floor() :-- Returns the value of x rounded down to its nearest integer 
 const floorValue = Math.floor(3.7);
 console.log(floorValue);

//? Math.trunc(x) :-- Returns the integer part of x 

const truncValue = Math.trunc(3.9);
console.log(truncValue);

//* Exponential and Logarithmic Functions :
//? Math.pow(x,y)  :-- Returns the value of x to the power of y 

const powValue = Math.pow(2,3);
console.log(powValue);

//? Math.sqrt() :-- Returns the square root of x 

const squareValue = Math.sqrt(28);
console.log(squareValue);


//? Math.log(x) :-- Returns the natural logarithm of x .
let logResult = Math.log(1);
console.log(logResult); 



//! Generate Random Number 
//? Math.random() :-- returns a random number between 0(inclusive) and 1(exclusive) 

console.log((Math.random() * 1000).toFixed(5));

