// ............ Average function to calculate the average ................
// function getAverage(digit1, digit2, digit3) {
//     const total = digit1 + digit2 + digit3;
//     const average = total / 3;
//     return average;
// };

// const sendDigit1 = 49;
// const sendDigit2 = 87;
// const sendDigit3 = 99;
// const myAverage = getAverage(sendDigit1, sendDigit2, sendDigit3);
// console.log(myAverage);



// ................ Add and Sum function ................
// function addAndSum(digit1, digit2) {
//     const sum = digit1 + digit2;
//     return sum;
// }

// const sentFirstDigit1 = addAndSum(12, 13);
// const sentFirstDigit2 = addAndSum(35, 45);
// const finalResult = addAndSum(sentFirstDigit1, sentFirstDigit2);
// console.log('Final result is this digit: ', sentFirstDigit1 + sentFirstDigit2 + finalResult);



// ................ Object discussion ................
// const studentInfo = {
//     name: 'Shakil Ahmed',
//     id: 104,
//     class: 11,
//     marks: 99
// }

// console.log(studentInfo.name);
// console.log(studentInfo.id);
// console.log(studentInfo.class);
// console.log(studentInfo.marks);

// var myComputer = {
//     brand: 'Lenovo',
//     price: 51999,
//     color: 'silver',
//     processor: 'i5',
//     hdisk: '10000 GB'
// };

// myComputer.price = 52000;
// console.log(myComputer);

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// };

// shoppingCart.books = 14;
// shoppingCart['books'] = 14;
// console.log(shoppingCart);



// ................ Object keys and values finding rules ................
// var friendsAges = {
//     rahim: 12,
//     samad: 45,
//     karim: 78,
//     jamal: 12,
//     robi: 32,
//     kazi: 14
// };

// const friendsKeys = Object.keys(friendsAges);
// const friendsValues = Object.values(friendsAges);
// console.log(friendsKeys, friendsValues);
// console.log(friendsKeys.concat(friendsValues));



// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2,
//     bottle: 1,
// };

// const shoppingCartKeys = Object.keys(shoppingCart);
// const shoppingCartValues = Object.values(shoppingCart);
// console.log(shoppingCartKeys, shoppingCartValues);
// console.log(shoppingCartKeys.concat(shoppingCartValues));



// ................ Assignment problems solve ................
// =================================================================

// function cubeNumber (number){

//     if(typeof number !== 'number'){
//         return "Please enter a positive number";
//     }
//     else {
//         const cube = Math.pow(number, 3);
//         return cube;
//     }
// };

// const result = cubeNumber(5);
// console.log(result);




// function cubeNumber(input) {
//     if (typeof input === 'number') {
//       const cube = Math.pow(input, 3);
//       return cube;
//     } 
//     else {
//       return "Input is not a number.";
//     }
// }

// console.log(cubeNumber(5)); 
// console.log(cubeNumber('Shakil')); 
  



// function cubeNumber(input) {
// if (typeof input === 'number') {
//     return Math.pow(input, 3);
// } else {
//     return "Input is not a number.";
// }
// }

// // Example usage
// console.log(cubeNumber(3));     // Outputs: 27 (3^3)
// console.log(cubeNumber("hello"));  // Outputs: "Input is not a number."



// function cubeNumber(input) {
// if (typeof input === 'number') {
//     if (input >= 0) {
//     return Math.pow(input, 3);
//     } else {
//     return "Please provide a positive number.";
//     }
// } else {
//     return "Input is not a number.";
// }
// }

// // Example usage
// console.log(cubeNumber(3));      // Outputs: 27 (3^3)
// console.log(cubeNumber(-2));     // Outputs: "Please provide a positive number."
// console.log(cubeNumber("hello")); // Outputs: "Input is not a number."

// =================================================================


