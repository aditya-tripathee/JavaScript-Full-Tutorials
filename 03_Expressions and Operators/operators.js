// ******************************************
//  Combination of operands and operators is called expressions 
// Examples
 
//  Operand   Operators  Operand     
//    5         +          5

// ******************************************

// ? Types of Operators 

// 1. Assignment Operators 
//  Assignment Operators are a symbol used to assign values to variables.
// examples :--

 var programmingLang = "C++ Language";
//  = is a assignment opewrators 

// ////////////////////////////////////////////////////////////

// 2. Arithmetic Operators 
// Arithmetic Operators perform basic  mathematical operations on variables or values.
 
// Examples 
// ? Addition(+) 
let x = 5, y =6;
let sum = x + y;
console.log(sum);

// ? Subtraction (-)
let sub = x - y; 
console.log(sub);

// ? Multiplication (*)
let mul = x * y;
console.log(mul);

// ? Division (/)
let div = x / y;
console.log(div);

// ? Modulas (%)
let mod = x % y;
console.log(mod);

// /////////////////////////////////////////////////////////////////////

// 3.  String Operators 
// 
var str1 = "Hello";
var str2 = " World";
var str3 = str1 + str2 ;
console.log(str3);


// ///////////////////////////////////////////////////////
// 4. Comparison Operators 
// it is used to compare a values and return a boolean result(true false ).
// ? Equal (==)

console.log(5 == 5);

// ? Strict Equal(===)
console.log(5==='6');

// ? Not Equal (!=)
console.log(5!=7);

//? Greater than 
console.log(5>6);

// ? Greater than or Equal to
console.log(5>=5);

// ? less than
console.log(5<0);

// ? Less than or equal to
console.log(5<=8);


// ///////////////////////////////////////
// 5. Logical Operators 
// * There are three logical operators 
// Logical AND(&&) ,,  Logical OR(||) ,, Logical NOT (!)


// ? Logical OR(||) : returns true if at least one of the operands is true , otherwise , it returns false .

// Example 
var a = 10;
var b = 20;
console.log(a>10 || b < 30);

// ? Logical AND (&&) : returns true if both of the operands is true , otherwise it returns false .

console.log(a>10 && b>20);

// ? Logical NOT (!) : returns true if the operands is false , false if the operands is true .

var isOpen = false;
console.log(isOpen);



// ****************************************************
// ! Q. Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having valid driver's license ??
var age = 18;
var hadValidLicense = false;
 if(age >=18 && hadValidLicense){
    console.log("True");
 }
 else {
    console.log("False");
}


// 6. Ternary Operator 
// synatx :--
// condition ? expressionsIfTrue : expressionIfFalse;

let myAge = 18;
let result = myAge>=20 ? "Yes" : "No";
console.log(result);




// ! Pssed Fail marks

var marks = 60;
let myResult = marks>=33 ? "Passed":"Fail";
console.log(myResult);


















