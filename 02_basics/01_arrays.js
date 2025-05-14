// Array

// Defining Arrays in Such Ways 

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]); // values ko excess karte hai by using indexing and indexing start from 0 // 0 -  output

const myHeroes = ["shaktiman", "naagraj"]
// console.log(myHeroes[0]); // shaktiman

const myArr2 = new Array(1, 2, 3, 4) // keywords use kar rahe hai and values add kar rahe hai
// console.log(myArr2[0]); // 1

const numbers = [1, 2, 3, 4]
// console.log(numbers.length); // 4

//// Array Methods

// Push : Values Add in Array
myArr.push(6)
myArr.push(7)
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7]

// Pop : Remove last value from Array
myArr.pop(7)
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

// Unshift : // Add value in starting of the array
myArr.unshift(0) 
// console.log(myArr); // [0, 0, 1, 2, 3, 4, 5, 6]

// shift : // Remove first value from the array
myArr.shift()  // we do not give parameter in shift
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]


/// Questions Asking Methods Like true or false 
// console.log(myArr.includes(6)); // true
// console.log(myArr.includes(9)); // false

// console.log(myArr.indexOf(4)); // 4
// console.log(myArr.indexOf(9)); // -1 // it means does not exist this value in array


// Join : add all elements of an array into a string

const newArr = myArr.join()
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6]
// console.log(newArr); // 0,1,2,3,4,5,6 // string
// console.log(typeof newArr); // string


// Slice , Splice

// Original Array :

console.log("A", myArr); // A [0, 1, 2, 3, 4, 5, 6]

// slice :
// const myn1 = myArr.slice(1,2) // last value include nhi hoti like 3 in this case 
// console.log(myn1); // [ 1, 2 ]
// console.log("B", myArr); //  A [0, 1, 2, 3, 4, 5, 6]

// // splice :
const myn2 = myArr.splice(1,3) // itni range tak ko delete kar dega
console.log("C", myArr); // C [ 0, 4, 5, 6 ]
console.log(myn2); // [ 1, 2, 3 ]
