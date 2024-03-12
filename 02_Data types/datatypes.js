// *Two types of Datatypes in Java Script *//

// ? Primitive and Non Primitive Datatypes

// ? Primitive Datatypes are given below :---

// 1. Number Datatypes 
// *--- Represents numeric values,including floating-point and integers numbers
var num = 5;
console.log(num);
console.log(typeof num);

// 2. String Datatypes 
// *-- Represents a sequence of characters which are enclosed in a single or double quotes 
var myName = "aditya";
console.log(myName);
console.log(typeof myName);

// 3. Boolean Datatypes 
// *-- Represents a logical entity with true or false 
var isRaining = true;
console.log(isRaining);
console.log(typeof isRaining);


// 4. Undefined datatypes 
// *-- Represents the absence of a value or an unintiliazed variable 
var favMovie ;
console.log(favMovie);
console.log(typeof favMovie);


// 5. Null datatypes 
// *-- represents a value have null
var myMarks = null;
console.log(myMarks);
console.log(typeof myMarks);

// 6. Bigint datatypes 
// *-- represents a integers of arbitrary precision 

var badNumbers = 5684239846512984561n;
console.log(badNumbers);
console.log(typeof badNumbers);


// 7. Symbol datatypes 
var sym1 = Symbol();
console.log(sym1);
console.log(typeof sym1);





// *****************************************
// ? Convert a string into numbetrs ? 
var myfavNum = "10";
console.log(Number(myfavNum));
// console.log(+ myfavNum);
console.log(typeof Number(myfavNum));



// ?  Convert a numbers into string ?
var myLuckyNum = 3;
console.log(String(myLuckyNum));
console.log(typeof String(myLuckyNum));


// *********************************************
// ? Truthy and Falsy value 
// ? Truthy values are treated as true when used in condition 
// Example:--
// true 
// Any non empty string ("hello")
// Any non- zero number (42)
// Arrays and objects , even if are they are not empty

var myName = "vikram";
if(myName){
    console.log("this is truthy value ");
} else {
    console.log("this is falsy value");
}

// ? Falsy values are treated as false when used in condition 
// false 
// 0(zero)
// '' (empty string)
// NaN
// null 
// undefined 

var myCollegeName = 0;
if(myCollegeName){
    console.log("truthy value");
}else{
    console.log("falsy value");
}


// *************************************************************

// ? parseInt and parseFloat Scetion

// * parseInt :-- it is used to parse a string and convert it to an integer
const myString ="34";
const myNumber = parseInt(myString);
console.log(myNumber); 

// ** parseFloat :-- it is used to parse a float and convert it to an floating point number 

const myGrade = "23.44";
const grade = parseFloat(myGrade);
console.log(grade);

// Here are more examples 
console.log(parseInt("123"));
console.log(parseInt("123" , 10));
console.log(parseInt(" 123 "));
console.log(parseInt("077"));
console.log(parseInt("1.9"));


console.log(parseInt("&123"));
console.log(parseInt("-132"));
console.log(parseInt("xyz"));


// *********************************************************
// ? What is purpose of NaN Value in JavaScript ?
// NaN value can't be converted to an integers


// *****************************************************
// ??   Concatenation and type concatenation 
// it is used to arithmetic addition adn also for string concatenation  
console.log(10 + "20");
console.log(9 - "5");
console.log("Java" + "Script");
console.log("" + "");
console.log("" + 0);
console.log("vinod" - "thapa");
console.log(true + true);
console.log(true + false);
console.log(true + 1);