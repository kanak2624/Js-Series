let score = undefined

// console.log(typeof score); // string
// console.log(typeof (score)); // string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number 
// console.log(valueInNumber); // NAN not a number

// Notes //
// "33" => 33
// "33abc" => NaN
// "siddhi" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0


let isLoggedIn =  "siddhi" 
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true


// Notes //
// 1 => true
// 0 => false
// "" => false
// "siddhi" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
