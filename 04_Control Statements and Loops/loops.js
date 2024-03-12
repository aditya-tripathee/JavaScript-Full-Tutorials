// ? If - Else 
// syntax :---

// if (condition) {
    //code 
// }else{
    //  code 
// }

// Examples :--
var temp = 40;

if(temp>40){
    console.log("Hot days");
}
else{
     console.log("Normal days");
}



// ********************************************************************

// ! if the person is 18 years or older , a citizens and registered  to vote, display a message they are eligible to vote.

let voterAge = 18;
let hadValidVoterCard = true;
let hadCitizenship = false;

if(voterAge>=18){
   if(hadCitizenship){
    if(hadValidVoterCard){
        console.log("Eligible to vote ");
    }else{
        console.log("Not eligible to citizenship status");
    }
   }else{
    console.log("Not eligible to vote due to voter card issues ");
   }
}else{
    console.log("Not eligible to vote");
}

// ************************************************************************

// ! Write a program to check if a number is even or odd.

let num = 20;

if(num %2 == 0){
    console.log("Even Number");
}else{
    console.log("Odd Number");
}

// **********************************************************************

// ! W rite a program to number is postive , negative or zero number .
let number = 36;
if(number > 0){
    console.log("Positive Number ");
}else if(number == 0 ){
    console.log("Zero Number ");
}else{
    console.log("Negative Number");
}

// ******************************************************************


// ? Switch Statement
// syntax:----

// switch (expressions) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// Examples :---
var day = "Friday";

switch (day) {
    case "Monday":
        console.log("Today is monday");
     break;

    case "Friday":
        console.log("Today is half day");
     break;

    case "Sunday":
        console.log("Today is holiday");    
     break;

    default:
       console.log("No match found");
}


//! maths questions 

let areaofShape = "circle";
let a = 10 , b = 5; 
switch (areaofShape) {
    case "circle":
       let pi = 3.14 , r = 5;      
        area = pi * (r*r);
        console.log(area);
        break;
    case "rectangle":
        area = a * b;
        console.log(area);
        break;
    case "square":
        area = a * a;
        break;    
    default:
        console.log("Not match found");
}


// ******************************************************************

// ? While loops 
// synatx :----
// while (condition) {
    // code 
// }


// print a while loop number from 1 to 10.

let i = 1;
while (i<=10) {
    console.log(i);
    i++;
}

// *******************************************************************

// ? For Loop 
// synatx :---

// for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    
// }
// 
// example 
for(let j=1;j<=10;j++){
    console.log(j);
}



// *******************************************************************
// ? Do - while loop
// syntax 
// do {
    
// } while (condition);

// example :---
  let numb = 1;
do{
   console.log(numb);
   numb++;
} while(numb<=10);


// **********************************************************************

// ! create table of any numb  by for loop method 

let tableNum = 5;
for(let t=1;t<=10;t++){
       console.log(tableNum + " * " + t + " = " + tableNum*t);
}


//! with the help of while loop

let ta = 1;
let tNumb = 10;
// while(ta<=10){
//     console.log(tNumb + " * " + ta + " = " + tNumb*ta);
//     ta++;
// }

// ! with the help of do while loop

do{
    console.log(tNumb + " * " + ta + " = " + tNumb*ta);
    ta++;
}
while(ta<=10);


// *****************************************************************************

// validating user input with do while (user need to write a valid number)

// let userInput ;
// let positiveNumber ;

// do{
//  userInput =prompt('Enter any positive number');
//  positiveNumber = parseFloat(userInput);

// }while(isNaN(positiveNumber || positiveNumber > 0));

// console.log("You have entered a valid positive number", positiveNumber);



// ***********************************************************************
//! calcuLATE the sum of numbers from 1 to 10 using for loop

var sum = 0;
for(var x = 1;x<=10;x++){
    var sum = sum + x;
  
}  console.log(sum);




// ! write a program to check if a number is prime .

var numberr = 12;
var isPrime = true;

for(var w=2;w<numberr;w++){
       if(num % w === 0)
    {
    isPrime = false;
    break;
}
}


if(isPrime){
    console.log('Num is Prime');
}
else{
    console.log('Num is not Prime');
}



// ! program to check if a year is a leap year 

var year = 2004;
if((year % 4 ===0 && year %100 !== 0) || year % 400 === 0){
    console.log("Leap year");
}else{
    console.log("Not a leap year");
}



// ! creating a pattern 

for(var q=1;q<=5;q++){
    var pattern = " ";
   for(var e=1;e<=q;e++){
    pattern = pattern + " * "
   }
   console.log(pattern);
 }



// //  
// for(let i =1;i<=5;i++){
//     let pattern = "";
//    for(let j=1;j<=5;j++){
//         pattern = pattern + " * ";
//    }
//    console.log(pattern);
// }