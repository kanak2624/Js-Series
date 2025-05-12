const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(3)); // 100.000

const otherNumber = 123.8966
// console.log(otherNumber); // 23.8966
// console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds  = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// ++++++++++++++++ Maths ++++++++++++++++ //

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4));  // convert neg to positive // 4
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.2)); // takes upper value // 5
// console.log(Math.floor(4.9));  // takes floor value // 4
// console.log(Math.min(4, 3, 6, 8));  // 3 // choose minimum value
// console.log(Math.max(4, 3, 6, 8));  // 8 // choose maximum value

// console.log(Math.random()); // .random always gives value from 0 to 1 // 0.7816081113613658
// console.log(Math.random()*10 + 1); // * 10 shift one value to right  // 10.318614538419634
// console.log(Math.floor(Math.random()*10) + 1); 


///// *********+++++++++ Important ++++++++++********* //////
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min ); 
