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
// console.log(typeof myDate); // object


let myCreatedDate = new Date(2023, 0, 23) // o means month // js mai 0 se month start hota hai
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myNewDate = new Date(2023, 0, 23, 5, 3)
// console.log(myNewDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myNewDatee = new Date("2023-01-14")
// console.log(myNewDatee.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myNewDateee= new Date("01-14-2023")
// console.log(myNewDateee.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() // quizes , codes use
// console.log(myTimeStamp); // 1747071148199 // miliseconds

// console.log(Date.now()/1000); // milisecs mai value dega // sec mai convert karne ke liye divide by 1000 but yeah decimal mai value dega so we use this see in next line // 1747113969.539

// console.log(Math.floor(Date.now()/1000)); // 1747114477 // isme value decimal mai nhi aayegi but milisecs mai dega

let AssumeDate = new Date()
// console.log(AssumeDate); // 2025-05-13T05:38:39.994Z
// console.log(AssumeDate.getDate()); // 13
// console.log(AssumeDate.getDay());  // 2

// String interpollation
// `${AssumeDate.getHours()} and the hours is ` 

AssumeDate.toLocaleString('default', {
    weekday:"long",
})