// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = 0; i <= 7; i++) {
//         factorial = factorial + i;
//     }
//     return factorial;
// };

// const factorial = getFactorial(8);
// console.log('factorial of 8 is:', factorial);


// function print (a, b, c) {
//     return a + 2;
//     return b * 2;
//     return b * c + a;
// };

// console.log(print(1, 2, 3));

// var a = 5;
// var b = 8;
// var c = 4;
// var d = 6;

// var highest = Math.max(a, b, c, d); // highest
// console.log(highest);


// const mathFloat = Math.floor(13.67); //Math.floor
// console.log(mathFloat);


// const number = -78;
// const answer = Math.abs(number);
// console.log(answer);

// const name = 'Shakil';
// name = 'Shoriful';
// console.log(name);

// var a = 2;
// var b = 3;
// if (a < b) {
//     console.log("Hello");
// }

// var a = 2;
// var b = 3;
// if (a > b) {
//     console.log("Hello");
// }

// var a = 2;
// var b = 3;
// if (a === b) {
//     console.log("Hello");
// }

// var a = 2;
// var b = 3;
// if (a == b) {
//     console.log("Hello");
// }



// ==================== 8/6/2023 section ====================

// .............. Problem 1 .................
// function isInteger(number) {
//     if (typeof number !== "number") {
//         return "please provide enter a number";
//     }
    
//     if (number % 1 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// // const sendDigits = 2;
// const sendDigits = 2.5;
// console.log(isInteger(sendDigits));


// function isInteger(number) {
//     if (typeof number !== "number") {
//         return "please provide enter a number";
//     }
//     else {
//         if (number % 1 === 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }

// // const sendDigits = 2;
// // const sendDigits = 2.5;
// const sendDigits = 5;
// console.log(isInteger(sendDigits));


// function isInteger(x) {
//     if (typeof x !== "number") {
//         return "please provide enter a number";
//     }
//     else {
//         if (x % 1 === 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }

// // const sendDigits = 2;
// // const sendDigits = 2.5;
// const sendDigits = 5.0;
// console.log(isInteger(sendDigits));



// ................ Problem 2 ................
// function isJavaScriptFile(filename){
//     if (typeof filename === "string") {
//         return "please provide a valid filename";
//     }
// };

// const result = isJavaScriptFile("hello.html");
// console.log(result);

// function isJavaScriptFile(filename){
//     if (typeof filename === "string") {
//         return "please provide a valid filename";
//     }
//     else {
//         if (filename.endsWith(".js") === true){
//             return true;
//         }
//         else { 
//             return false;
//         }
//     }
// };

// const result = isJavaScriptFile("hello.html");
// console.log(result);


// function isJavaScriptFile(filename){
//     if (typeof filename !== "string") {
//         return "please provide a valid filename";
//     }
//     else {
//         if (filename.toLowerCase().endsWith(".js") === true){
//             return true;
//         }
//         else { 
//             return false;
//         }
//     }
// };

// const result = isJavaScriptFile("hello.js");
// console.log(result);


// function isJavaScriptFile(filename) {
//     if(typeof filename  !== "string"){
//         return "Please provide a valid filename (string)";
//     }
//     else{
//         const arr = filename.split(".");
//         const lastElement = arr.pop();

//         return lastElement.toLowerCase() === "js";
//         // if(lastElement.toLowerCase() === "js"){
//         //     return true;
//         // }
//         // else{
//         //     return false;
//         // }

//     }
// }
// const result = "hello.world.js";
// console.log(isJavaScriptFile(result));



// ................ Problem 3 ...................
// function mindGame(x) {
//     if(typeof x !== "number"){
//         return "Please provide a number";
//     }
//     else if(x <= 0){
//         return "Please provide a positive number";
//     }
//     else{
//         const result = (((x * 3) + 10) / 2) - 5;
//         return result;
//     }
// }

// console.log(mindGame(20));
// console.log(mindGame(0));
// console.log(mindGame("hello"));


// function mindGame(x) {
//     // if(typeof x !== "number"){
//     //     return "Please provide a number";
//     // }
//     // else if(x <= 0){
//     //     return "Please provide a positive number";
//     // }
//     // else{
//     //     const result = (((x * 3) + 10) / 2) - 5;
//     //     return result;
//     // }

//     // /*....... OR diye .......*/ //
//     if(typeof x !== "number" || x <= 0){
//         return "Please provide a positive number";
//     }
//     else {
//         const result = (((x * 3) + 10) / 2) - 5;
//         return result;
//     }
// }

// console.log(mindGame(20));
// console.log(mindGame(0));
// console.log(mindGame("hello"));



// ................ Problem 4 ...................
// function isLGSeven(x) {
//     if (typeof x !== "number"){
//         return "please provide a number";
//     }
//     else {
//         const differ = x - 7;
//         if(differ < 7){
//             return differ;
//         }
//         else{
//             return x * 2;
//         }
//     }
// }

// console.log(isLGSeven(7));


// function isLGSeven(x) {
//     if (typeof x !== "number"){
//         return "please provide a number";
//     }
//     else {
//         const differ = x - 7;
//         if(differ < 7){
//             return differ;
//         }
//         else{
//             return x * 2;
//         }
//     }
// }

// const sendDigits = 17;
// console.log(isLGSeven(sendDigits));



// ................ Problem 5 ...................
// function findingBadData(arr) {
//     if(!Array.isArray(arr)){
//         return "please provide me an array of numbers";
//     }
//     else{
//         // let badData = 0;
//         // for(let i = 0; i < arr.length; i++){
//         //     if(typeof arr[i] !== "number"){
//         //         return "please provide me an array of numbers";
//         //     }
//         //     else{
//         //         if(arr[i] < 0){
//         //             badData++;
//         //         }
//         //     }
//         // }
//         // return badData;


//         let badData = 0;
//         for(let item of arr){
//             if(typeof item !== "number"){
//                 return "please provide me an array of numbers";
//             }
//             else{
//                 if(item < 0){
//                     badData++;
//                 }
//             }
//         }
//         return badData;
//     }
// }

// // const sendArray = ["hello world"];
// // const sendArray = [1, 2, 5];
// const sendArray = [2, -5, -7, -13];
// console.log(findingBadData(sendArray));



// function gemsToDiamond(x, y, z) {
//     console.log(x, y, z);
//     if(typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'){
//         return "Please provide a valid number";
//     }
//     else if(x < 0 || y < 0 || z < 0){
//         return "Please provide me all positive number";
//     }
//     else{
//         const frnd1 = 21;
//         const frnd2 = 32;
//         const frnd3 = 43;

//         const total = (x * frnd1) + (y * frnd2) + (z * frnd3);
//         if(total > 2000){
//             return total - 2000;
//         }
//         else{
//             return total;
//         }
//     }
// }

// console.log(gemsToDiamond(100, 5, 1));

// ..................... Have a big problem  .....................
// const countGems = [100, 5, 1];
// const finalCount = gemsToDiamond(countGems);
// console.log(finalCount);


// ............. example ................
// const x = false;
// console.log(!x);
// console.log(x);



// ................ Problem 6 extra problem this ...................
// function printDetails(person){
//     if(typeof person !== 'object'){
//         return "Please provide me a valid person object";
//     }
//     else{
//         const name = person.name || "nai";
//         const age = person.age || "nai";
//         const email = person.email || "nai";
//         const bou = person.bou || "nai";

//         console.log("amar nam " +  name + " amar boyos " +  age + " amar email " +  email +  " amar bou " +  bou);
//         // return "amar nam " +  name + " amar boyos " +  age + " amar email " +  email +  " amar bou " +  bou;
//     }
// }

// const obj = {
//     name: "Shakil",
//     age: 26,
//     email: "shakil@gmail.com",

// }

// const message = printDetails(obj);
// // console.log(printDetails(obj));


// function printDetails(person){
//     if(typeof person !== 'object'){
//         return "Please provide me a valid person object";
//     }
//     else{
//         const name = person.name || "nai";
//         const age = person.age || "nai";
//         const email = person.email || "nai";
//         const bou = person.bou || "nai";

//         // console.log("amar nam " +  name + " amar boyos " +  age + " amar email " +  email +  " amar bou " +  bou);
//         return "amar nam " +  name + " amar boyos " +  age + " amar email " +  email +  " amar bou " +  bou;
//     }
// }

// const obj = {
//     name: "Shakil",
//     age: 26,
//     email: "shakil@gmail.com",

// }

// // const message = printDetails(obj);
// console.log(printDetails(obj));



// ................ Problem 7 extra problem this ...................
// .jpg .jpeg .png .gif .ico
// function isValidPhotoName(photoName, imageExtensions) {
//     if(typeof photoName !== "string" || !Array.isArray(imageExtensions)) {
//         return "Please provide valid inputs for the photo name";
//     }
//     else{
//         for(let item of imageExtensions) {
//             if(photoName.toLowerCase().endsWith(item.toLowerCase())){
//                 return true;
//             }
//         }
//         return false;
//     }
// }

// // const photo = "image.jpg";
// const photo = "image.svg";
// const extensions = [".jpg", ".JPEG", ".png", ".gif", ".ico" ]
// console.log(isValidPhotoName(photo, extensions));


// ......................... extra tasks ................................ //
/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array.
*/


// function findPrimeNumbers (arr){
//     if(!Array.isArray(arr)){
//         return "Please provide me an array of prime numbers";
//     }
//     else{
//         // 0, 1 can not be prime numbers
//         let primes = [];
//         for(let item of arr){
//             if(item > 1){
//                 let isPrime = true;

//                 for(let i = 2; i < item; i++){
//                     if(item % i === 0){
//                         isPrime = false;
//                         break;
//                     }
//                     if(isPrime === true){
//                         primes.push(item);
//                     }
//                 }
            
//             }

//             // let flag = true;
//             // for(let i = 2; i < item; i++){
//             //     if(item % i === 0){
//             //         flag = false;
//             //     }
//             //     primes.push(i);
//             // }
//         }
//         return primes;
//     }
// }

// const numbers = [4, 7, 8, 11, 9, 2, 10];
// console.log(findPrimeNumbers(numbers));



// ......................... extra tasks ................................ //
// function sumOfNumbers(n) {
//     if(n === 1){
//         return 1;
//     }
//     else{
//         return n + sumOfNumbers(n - 1);
//     }
// }

// const n = 3;
// console.log(sumOfNumbers(n));



// answer
// what will be the final value of the sum?
// let sum = 0;
// for(let i = 0; i <= 3; i++) {
//     sum = sum + i;
// }
// console.log(sum);