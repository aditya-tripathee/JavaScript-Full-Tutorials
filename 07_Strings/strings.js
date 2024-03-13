// ********************************************
//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.


//* Strings Properties 
//? Length Properties : Property that returns the length of the string(number of characters).


const str = 'Hello World';
console.log(str.length);


//? Escape Characters
 let text = 'My name is \"Aditya Tripathi\".';
 console.log(text);


//* String Search Method 

//? indexOf() :-- this method returns the index of the first occurence of a specified text in a string 

const myName = 'Aditya Tripathi';
console.log(myName.indexOf("Tripathi"));

let strArray = Array.from(myName);
console.log(strArray);
let strMap = strArray.map((curElem,index)=> `${curElem} ${index}`);
console.log(strMap);

//? lastIndexOf() :-- this method retrurns the index of the last occurrence of a specified text in a string.
let quotes  = "Hello JavaScript, Welcome to our world best JavaScript course";
// let index = quotes.lastIndexOf("JavaScript",40);
// console.log(index);


//? search():--  this method seacrhes a string for a string and returns a 

// let result = quotes.search("JavaScript");
// console.log(result);

//? match():--  this method returns an array of the matched values or null if no match is found 
// let result = quotes.match("JavaScript");
let result = quotes.match(/JavaScript/gi);
console.log(result);


//?  matchAll() :-- this method returns an iterator of all matches , providing detailed information about each match. Returns an empty iterator if no match is found.
let matchResult = quotes.matchAll("JavaScript");
// console.log(...matchResult);

for(let item of matchResult){
    console.log(item[0]);
}

// ? includes() :-- returns true if the string contains the specified value , and false otherwise .

let includeResult = quotes.includes("JavaScript");
console.log(includeResult);


//? startsWith() :-- return strue if a string begins with a specified value. Otherwise it returns false 
 let startResult = quotes.startsWith("JavaScript");
 console.log(startResult);


//? endsWith() :-- returns true if a string ends with a specified value. Otherwise it returns false .
let endResult = quotes.endsWith("Hello");
console.log(endResult);



// ****************
// * Extracting String Parts 
//? slice() :--- 

let sliceResult = quotes.slice(1,41);
console.log(sliceResult);


//? Substring() :---
let subResult = quotes.substring(4,36); 
console.log(subResult);

//? replace 
let replaceResult = quotes.replace("JavaScript" , "Vikram Aditya");
console.log(replaceResult); 

//? chataAt():
let chatResult = quotes.charAt(41);
console.log(chatResult); 

// **  toUpperCase and toLowerCase  


const myFavCountry = 'Iceland';
let upperResult = myFavCountry.toUpperCase("Iceland");
console.log(upperResult);

console.log(myFavCountry.toLowerCase( ));


// ** trim :-- removes whitespace from both ends of the string 
const myFullname = "      Aditya Tripathi      ";
console.log(myFullname.length);


let trimResult = myFullname.trim();
console.log(trimResult);
console.log(trimResult.length);


// * split :-- 

const mySurname = "Tripathii , Aditya , Vikram";
console.log(mySurname.length);

let strArr = mySurname.split(",");
console.log(strArr);

//!! *******************************

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

// ? print a to z 
for( let char=97;char<=122;char++){
    console.log(String.fromCharCode(char));
}



