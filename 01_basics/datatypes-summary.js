// ********* DataTypes ********* //
// DataTypes - 2 types 
// primitive and non-primitive/reference
 
// 1. Primitive : 7 types
// String , Number , Boolean , Null , Undefined , Symbol , BigInt 

// 2. Non-Primitive / Rerence :
// Arrays , Objects , Functions


// 1. Primitive : 7 types : Examples -
const score = 100
const scoreValue = 100.3 // typeof : number

const isLoggedIn = false
const outsideTemp = null // // typeof : object
let userEmail;

// values same provide nhi karta Symbol
const id = Symbol("123")
const anotherId = Symbol('123') // // typeof : symbol
// console.log(id === anotherId); // false

// BigInt
// const bigNumber = 344353465465676879n // n se represent horaha hai BigInt // typeof : undefined


// 2. Non-Primitive / Rerence : 
// Arrays , Objects , Functions
// Examples
const heros = ["shaktiman", "naagraj" , "doga"] // Array // typeof : object

let myObj = {
    name : "hitesh",
    age : 22, 
} // Object // typeof : object

const myFunction  = function(){
   //  console.log("Hello World");
    
} // Function // function // called as function object


///////////////////////////////////////
// console.log(typeof bigNumber); // undefined
// console.log(typeof outsideTemp); // object
// console.log(typeof scoreValue); // number
// console.log(typeof myFunction); // function // called as function object
// console.log(typeof heros); // object
// console.log(typeof anotherId); // symbol
// console.log(typeof myObj); // object



//////// ************* Stack and Heap Memory *************** ///////////////
// Stach (Primitive use) , Heap (Non-primitive)
// Stach (Primitive use) : it gives us copy value .
// Heap (Non-primitive) : it gives us original value reference . 
let myName = "siddhisharma" // variable is a primitive type so it comes in Stack Memory

let anotherName = myName
anotherName = "siddhiaurcode"

console.log(myName); 
console.log(anotherName); 


// Heap (Non-primitive)
let user1= {
    email : "user@google.com",
    upi : "useer@ybi", 
}
let user2 = user1
user2.email = "siddhi@gmail.com" // value excess kar sakte hai . se
console.log(user1.email); // same output in both  // siddhi@gmail.com
console.log(user2.email); // same output in both  // siddhi@gmail.com

