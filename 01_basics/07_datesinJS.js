// Date
let myDate = new Date()

// console.log(myDate); // 2025-05-12T07:59:02.596Z
// console.log(myDate.toString()); // Mon May 12 2025 08:01:11 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Mon May 12 2025
// console.log(myDate.toISOString()); // 2025-05-12T08:04:35.156Z
// console.log(myDate.toJSON()); // 2025-05-12T08:05:30.492Z
// console.log(myDate.toLocaleDateString()); // 5/12/2025
// console.log(myDate.toLocaleString()); // 5/12/2025, 8:06:21 AM
// console.log(myDate.toLocaleTimeString()); // 8:06:39 AM
console.log(typeof myDate); // object


let myCreatedDate = new Date(2023, 0, 23) // o means month // js mai 0 se month start hota hai
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myNewDate = new Date(2023, 0, 23, 5, 3)
// console.log(myNewDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myNewDatee = new Date("2023-01-14")
// console.log(myNewDatee.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myNewDateee= new Date("01-14-2023")
// console.log(myNewDateee.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() // quizes , codes use
console.log(myTimeStamp); // 1747071148199 // miliseconds

