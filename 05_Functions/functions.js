
//! Function is a block of reusable code that performs a specific task or set of tasks.

//? Syntax:---

// function name(params) {
    
// }


// 1st students
var a = 5, b = 10;

let sum1 = a+b;
console.log(sum1);

// 2nd students 

var a=15, b=20;
var sum2 = a+b;
console.log(sum2);




// *******************************************

// ? Lets make reusable code 
function sum(a,b){
    return a + b;
}
console.log(sum(3,10));
console.log(sum(5,9));
console.log(sum(22,0));


// **********************************************

// * Function Declaration 

// function greet(){
//     console.log("Hello World !");
// }

// * Function Invocation 
greet(); 


// * Function definition 
  function sum(){
    var a = 5 , b = 6;
      console.log(a+b);
  }
  sum();


//   ******************************************************
//!Write a javascript program that defines a function 


function greet(name){
    console.log("Hello " + name + "," +" Welcome to our Institute");
}
greet("Vikram Aditya");
greet("Vanshika Mishra")


//! Write a function to find the add of two numbers with parameters \

function add(x,y){
    console.log(x + y);
}
add(6,8);
add(0,1);



// *********************************************

// ? Function Expressions 

var result = function add(s , t){
    console.log(s + t);
}
add(10,90);



// *************************************************


// * Anonymous Function 
//  A anonymous function is function without a name 

var result = function (a,b){
    console.log(a + b);
}
result(10,20);




// *************************************************

// ! Example 1 :- Returning a sum of two numbers
function sum(a, b){
    return a + b;
}
var result = sum(100,900);
console.log(result);
console.log("The sum of a and b is " + result);


// ***********************************************
// ? IIFE - immediately invoked function expresssions 
// it is a javascript function that is defined and executed immediately after its creation.

var res = (function (a,b){
    console.log(a+b);
    return a + b;
})(5,9);
console.log("The sum of two numbers is",+ res);


// *************************************************************

//  *************************************************

// ?                  ECMAScript Timeline 
// ?       1996 --- JavaScript was created
// ?       1997---- ECMA International for standaradization 
// ?       ECMAScript6 2015 (annual releases of ECMAScript) 
    


// ! LET AND CONST ---- EcmaScript 2015
// ?   LET keyword :-- it is used to declare a variable with block scope.
//? Varaible declared with let are mutable , meaaning their values can be reassigned. \
 let myFavWorldBestName = "Aditya Tripathi";
 mybestName = "Vikram aditya";
 console.log(mybestName);


//?    CONST keyword :--- it is used to declare a variable with block scope ,
//?  but once a variable is assigned to a const variable , it cannot be reassigned . const variables are immutable.
const myFavCountry = "Iceland";
console.log(myFavCountry);


// ******************************************************************
// ? Template Strings :- aslo known as template literals , provide a convient and flexiable way to create strings in javascript.
// ? Template strings are enclosed in backticks (``) rather than single or double quotes .


 let firstName = "Vikram";
 let lastName = "Aditya";
 

// ? String Interpolation :-- Template strings support string interpolatoion , allowing you to embed expressions directly within the strings .Interploation strings are enclosed in ${}.
let fullName = `${firstName} ${lastName}`;
 console.log(fullName);


 let age = 20;
 let message = `I am ${age} years old. `;
 console.log(message);


//  ? Multi- Line Strings :-- use dto create multi line strings without using concatenation or escape characters 

let multiStr =
 ` This is multi-line
 string using template literals.
 It's much cleaner and easier to read. 
 `;

 console.log(multiStr);


//  ****************************************************************
let num = 5;
console.log("5 * " + num + " = " + num*5);
console.log(`5 * ${num} = ${5*num}`);




// *******************************************************************
// ! Write a function to find sum of two numbers? What if during function call user only passed one argument ?

function sum (a,b=6){
    return a + b;
}
console.log(sum(a));





// ***********************************************************************************
//  * FAT ARROW FUNCTION 

const addition = (a,b)=>{
    let result =`The addition of ${a} and ${b} is ${a + b}`;
    console.log(result);
}
addition(5,6);



const sub = (a,b)=>console.log(`The sub of ${a} and ${b} is ${a-b}`);
sub(10,6);



// ? If there is only one parameter , the paranthses () around the parameter list can be omitted .

const square = (a)=>`The square of ${a} is ${a*a}`;
console.log(square(5));

// ? if there is no parameter , use an empty set of parantheses ()

const greeting =()=>`welcome to our home ! `;
console.log(greeting());



// **********************************************************************
// ! Calculator Questions

const calculator=(a, b, op)=>{
    let result;
    switch (op) {
        case "+":
            result = a + b;
            return result;
            
        case "-":
            result = a-b;
            return result;
        case "/":
            result = a/b;
            return result ;
            
        case "*":
            result = a*b;
            return result;    
        
        case "%":
            result = a%b;
            return result;

        default:
            return "No operator found"
    }
}
console.log(calculator(5,2,"+"));
console.log(calculator(10,3,"-"));
console.log(calculator(10,5,"*"));




//! Palindrome 

// const isPalindrome = (str) =>
// {
//     let reverse = "";
//     for(let char =str.length-1;char>=0;char--){
//         reverse = reverse + str[char];
//     }
//     if(str=== reverse){
//         return true;

//     }else{
//         return false;
//     }
// }
// console.log(isPalindrome("Aditya Tripathi"));


//! Reverse strings 
const isString = (str) =>{
    let reverse = "";
    for(let char=str.length-1;char>=0;char--){
        reverse = reverse + str[char];
    }
    return reverse;
}
console.log(isString("Aditya Tripathi"));