// * Array is an object that represents a collection of similar type of elements.
// * Example :--- const person = ["Aditya" , "Alok", "Abhijeet"];
// * In arrays, each element is represents by an index which starts with zero.

// let arr = [];
// console.log(typeof arr);

// ? Array in JavaScript can be created using the Array constructor or with array literals(square brackets []) 


// ? Using Array constructor
// let fruits = new Array('Apple', 'Orange' , 'Grapes', 'Banana', 'Mango');
// console.log(fruits);


// ? Using array literal 
// let fruits = [ 'Apple', 'Orange', 'Grapes', 'Banana', 'Mango' ];
// console.log(fruits);

// ? We can create empty array 
// let arr = [];
// console.log(arr);
// console.log(typeof arr);


// ? Accessing Elements : Array elements are accessed using based indices 
// let fruits = [ 'Apple', 'Orange', 'Grapes', 'Banana', 'Mango' ];
// console.log(fruits[3]);


// ? Modifying Elements : 

// let fruits = [ 'Apple', 'Orange', 'Grapes', 'Banana', 'Mango' ];
// fruits[5] = "Pineapple";
// console.log(fruits);


// * Array Traversal / Iterating Over Arrays

// let fruits = [ 'Apple', 'Orange', 'Grapes', 'Banana', 'Mango', 'Pineapple' ];

// ? 1: for of Loop , also known as iterable 
// * the for of loop is used to iterate over the values of an iterable objects , such as arrays, strings, or other iterable objects 

// for(let item of fruits){
//     console.log(item);
// }

// for(let item=0;item<fruits.length;item++){
//     console.log(fruits[item]);
// }


// ? 2: for in loop 
// * for in loop is ised to iterate over the properties (including indicies ) of an object 
// for(let item in fruits){
//     console.log(item);
// }

// ? 3: for each method 
// * 

// fruits.forEach((curElem, index,arr) => {
//        console.log(`${curElem} ${index}`);
// });


// ? 4: map function 
// fruits.map((curElem, index)=>{
//            console.log(`${curElem} ${index}`);
// })


// const myMapArr = fruits.map((curElem,index)=>{
//     return `${curElem} ${index}`;
// })
// console.log(myMapArr);
// console.log(fruits);

// ! write a program to multiply each element with 2.
// const numbers = [1,2,3,4,5];

// numbers.forEach((curElem)=>{
//     console.log(curElem * 2);
// })

// const multiply = numbers.map((curElem)=>{
//     return curElem*2;
// })
// console.log(multiply);


// **********************************************************************
// ? How to insert, add, replace and delete elements in Array

// let fruits = [ 'Apple', 'Orange', 'Grapes', 'Banana', 'Mango', 'Pineapple' ];

// ? Push () :--- this method that adds one or more elements to end of an array 

// console.log(fruits.push("guava"));
// console.log(fruits);

// ? Pop():-- this method removes the last elements from an array

// console.log(fruits.pop());
// console.log(fruits);


// ? Unshift():--- this method that adds one or more elements at the beginning of the array 

// fruits.unshift("Papaya");
// console.log(fruits);

// ? Shift() :--- this method removed the first element from an array
// fruits.shift();
// console.log(fruits);

// ***************************************************************
//! What if you want to add or remove anywhere in an elements ?
// ?  splice (start,deleteCount, item1 , item2 , /*...., /*itemN)

let fruits = [ 'Papaya', 'Apple', 'Orange', 'Grapes', 'Banana', 'Mango' ];
// console.log(fruits.splice(1,4));
// console.log(fruits);


// ! what if you want to add the element at the end 
fruits.splice(1,2,"cherry");
console.log(fruits);


// *********** 
// ? Searching and Filters in an Array

// ? For search 
// const numbers = [1,2,3,6,4,5,6,7,8,9];

// ? indexOf ()
// const result = numbers.indexOf(6);
// console.log(result);

// ? lastIndexOf()
// const result1 = numbers.lastIndexOf(6);
// console.log(result1);


// ? includes() :-- this method checks wheter an array includes a certain element, 
// const result = numbers.includes(10);
// console.log(result);

// ****************************************************************************
// ! 1. Add Dec at the end of the array .
const months = ["Jan","Feb","March","Apr","June"];
// by push method 
// console.log(months.push("Dec"));
// console.log(months);

// by splice method
console.log(months.splice(months.length,0,"Dec"));
console.log(months);


//!  2. Update march to Mar (update) ?

// const indexToUpdate = months.indexOf("March");
// months.splice(indexToUpdate,1,"Mar");
// console.log(months);

//!  3. Delete june from an array 
const delJune = months.indexOf("June");
months.splice(delJune,1);
console.log(months);

// ****************************************************************

// ? Search and Filters 
// const numbers = [1,2,3,4,5,6,7,8,9];

//? 1. find method : ---   thid method is used to find the first element in an array that satisfies a provided testing function .

// const result =numbers.find((curElem)=>{
//           return curElem > 5;
// })
// console.log(result);


//? 2. findIndex Method : 

// const result = numbers.map((curElem)=>curElem*5);
// console.log(result);

// const result2 = result.findIndex((curElem)=>{
//     return curElem > 10;

// });
// console.log(result2);

//?  3. Filter method 

// const result = numbers.filter((curElem)=>{
//     return curElem > 4;
// })
// console.log(result);

//! Ex.  lets say user wants to delete value 6 
let value = 6;
const numbers = [1,2,3,4,5,6,7,6,6,8,9];


let updatedCart = numbers.filter((curElem)=>{
    return curElem !== value;
});

console.log(updatedCart);


//! Filtering a  


const products = [
               {name:"Laptop",price:1200},        
               {name:"Phone",price:800},        
               {name:"Tablet",price:300},        
               {name:"Smartwatch",price:150},        
               ];

const filterProducts = products.filter((curElem)=>{
    // console.log(curElem.price <= 500);
    return curElem.price >= 500;
})               
console.log(filterProducts);




// ~!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// * How to compare and sort 
 const numberr = [1,2,333,4,5,978,38,32,5,9];
 numberr.sort()
 console.log(numberr);


//*  Compare method 
// ? Ascending to Decesending order 
// numberr.sort((a,b)=>{
//     if(a>b) return -1;
//     if(b>a) return 1;
// });

// console.log(numberr);

// ? Descending to Ascending Order 
numberr.sort((a,b)=>{
    if(a>b) 
        return 1;
        
 
})
console.log(numberr);




//! using a map to square each numbers and create a new array .
   
const numbe = [1,2,3,4,5,6,7];
const squareNumb = numbe.map((curElem)=>{
    return curElem * curElem;
})
console.log(squareNumb);


// Questions 
const words = ['apple', 'banana','cherry','date'];
const resu = words.map((curElem)=>{
        return curElem.toUpperCase();

})
console.log(resu);


//! Questions 

const name = ["Aditya" , "Vikram","Hero"];
const prefixName = name.map((curElem)=>`Mr. ${curElem}`);
console.log(prefixName);

//? Reduce Method 

const productPricee = [100, 200 ,300, 400 , 500];
const totalPrice = productPricee.reduce((accum,curElem)=>{
    return accum + curElem;
} );
console.log(totalPrice);