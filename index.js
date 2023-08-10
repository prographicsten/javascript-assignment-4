// Date: 8/2/2023

// function functionName(parameters) {

// };

// var returnedValue = functionName(parameters value);

// function getAverage (assignment1, assignment2, assignment3) {
//     const total = assignment1 + assignment2 + assignment3;
//     const average = total / 3;
//     return average;
// };

// const assignment1Marks = 58;
// const assignment2Marks = 38;
// const assignment3Marks = 47;

// var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
// console.log('My total: ' + myAverage);

// function add (num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// };

// const result1 = add(12, 13);
// const result2 = add(35, 45);
// const finalResult = add(result1, result2);

// console.log('final result: ', result1 + result2 + finalResult);

// Object discussion
// var student = {
//     id: 104,
//     name: 'Md Shakil Ahmed',
//     class: 9,
//     marks: 98
// };
// console.log(student.id);

// var mobile = {
//     brand: 'Sumsung',
//     price: 15000,
//     storage: '64GB',
//     camera: '7MB',
//     ram: '4GB'
// };
// console.log(mobile.price);

// var myComputer = {
//     brand: 'Lenovo',
//     price: 51999,
//     color: 'silver',
//     processor: 'i5',
//     hdisk: '10000 GB'
// };
// myComputer.processor = 'i10';
// console.log(myComputer);

// properties discussion
// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// };

// when i know the specific property name, use dot notation to get the property value
// var penCount = shoppingCart.pen;
// alternative i know the specific property name, use dot notation to get the property value
// var penCount2 = shoppingCart['pen'];

// var propertyName = 'books';
// var propertyValue = shoppingCart[propertyName];

// var properties = Object.keys(shoppingCart);
// var propertiesValues = Object.values(shoppingCart);
// console.log(propertyName);
// console.log(propertyValue);
// console.log(penCount2);




// Date 8/3/2023
// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// };

// shoppingCart.mouse = 15;
// shoppingCart['mouse'] = 15;
// console.log(shoppingCart);

// var shoppingItems = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
// var friendsAge = [12, 45, 78, 12, 32, 14];
// var friendsAges = {
//     rahim: 12,
//     samad: 45,
//     karim: 78,
//     jamal: 12,
//     robi: 32,
//     kazi: 14
// };

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2,
//     bottle: 1,
// };

// const info = Object.keys(shoppingCart);
// console.log(info);

// const values = Object.values(shoppingCart);
// console.log(values);

// var keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
// var values = [3, 1, 5, 1, 25, 2, 1];
// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
// };
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// };

// var keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
// var values = [3, 1, 5, 1, 25, 2, 1];
// for (var i = 0; i < keys.length; i++) {
//     var propertyName = keys[i];
//     var propertyValue = values[i];
//     console.log(propertyName, propertyValue);
// };

// for in loop
// for (var propertyName in shoppingCart) {
//     const value = shoppingCart[propertyName];
//     console.log(propertyName, value);
// };

// const color = 'yellow';
// if (color === 'green') {
//     console.log('You are a green color lover');
// }
// else if (color === 'blue') {
//     console.log('You are a blue color lover');
// }
// else if (color === 'red') {
//     console.log('You are a red color lover');
// }
// else if (color === 'white') {
//     console.log('You are a white color lover');
// }
// else if (color === 'yellow') {
//     console.log('You are a yellow color lover');
// }
// else {
//     console.log('You are a black color lover');
// }

// var movie = {
//     name: "Din - The Day"
// }

// movie.name = 'Hawa';
// console.log(movie);

// var nums = [4, 5, 7, 6, 8, 2, 1, 15];
// var num6 = nums.indexOf(6)
// console.log(num6);

// How can you get the brand name from the smartphone object?
// var smartphone = {
//     brand: 'iphone',
//     model: '13'
// }

// console.log(smartphone.brand);

// Which keyword will you use to get output from a function that you can set to a variable?
// What will be the output of this program?
// function movie () {
//     return "Din - The Day";
//     return "Poran";
//     return "Hawa";
// };
// console.log(movie());

// Module 20
// 1. variable
// var myName = "Shakil";

// math operation
// shorthand: +=, --, *=, /=
// ++, --

// 2. Array
// var friends = ['shakil', 'poran', 'dino', 'daku', 'nahida', 'keya'];

// var thirdFriend = friends[2];
// friends[3] = 'dakaka';
// console.log(friends);

// 3. conditionals
// >, <, >=, <=, ==, ===, !=, !==,
// if (friends.length < 2) {
//     console.log('tor kono friends nai');
// }
// else {

// }

// 4. loop condition
// var number = 0;
// while (number <= 6) {
//     console.log(number);
//     // number += 1;
//     number++;
// }

// for (var i = 0; i <= 6; i++) {
//     console.log([i]);
// };

// 5. fuction
// function isMoonUp (time) {
//     if (time > 7) {
//         return true;
//     }
// };

// 6. Objects
// var jantus = {
//     height: 60,
//     ronanticism: 'heavvy',
//     bapPerTaka: 'poysha wala'
// }

// Module 20.2
// const incheRules = 76;
// const myInches = incheRules / 12;
// const myFixed = myInches.toFixed(2);
// console.log('amar uchota:', myFixed);

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('dadar bollo amar uchota:', dadaFeet);

// const dadiInche = 60;
// const dadiFeet = dadiInche / 12;
// console.log('dadi bollo dadar uchota:', dadiFeet);

// function inchToFeet (inches) {
//     const feet = inches / 12;
//     return feet;
// }

// const dadaInches = 144;
// const dadaFeet = inchToFeet(dadaInches);
// console.log('Dadar uchota:', dadaFeet);

// const nanaInches = 168;
// const nanaFeet = inchToFeet(nanaInches);
// console.log('Nana bollo amar uchota:', nanaFeet);

// Miles To Kilometers
// function milesToKilometers (miles) {
//     const kilometer = miles * 1.60934;
//     return kilometer;
// };

// const milesMiter = 12;
// const kilometerValue = milesToKilometers(milesMiter);
// const fixedKilometers = kilometerValue.toFixed(2);
// console.log('mile to Kilometers', fixedKilometers);

// Module 20.3

// function oddOrEven (number) {
//     const result = number % 2;
//     const finalResult = result;
//     if (finalResult == 0) {
//         console.log('This number is even:', finalResult);
//     }
//     else if (finalResult > 0) {
//         console.log('This number is odd:', finalResult);
//     }
// };

// const givenNumber = 1785452;
// const expectedNumber = oddOrEven(givenNumber);

// function oddOrEven (number) {
//     const result = number % 2;
//     const finalResult = result;
//     if (finalResult == 0) {
//         console.log('This number is even:', finalResult);
//     }
//     else if (finalResult == 1) {
//         console.log('This number is odd:', finalResult);
//     }
// };

// const givenNumber = 1785452;
// const expectedNumber = oddOrEven(givenNumber);

// function oddOrEven (number) {
//     const result = number % 2;
//     const finalResult = result;
//     if (finalResult === 0) {
//         console.log('This number is even:', finalResult);
//     }
//     else if (finalResult === 1) {
//         console.log('This number is odd:', finalResult);
//     }
// };

// const givenNumber = 4981;
// const expectedNumber = oddOrEven(givenNumber);

// function oddOrEven (number) {
//     const result = number % 2;
//     const finalResult = result;
//     if (finalResult === 0) {
//         return true;
//     }
//     else if (finalResult === 1) {
//         return false;
//     }
// };

// const givenNumber = 498233484;
// const expectedNumber = oddOrEven(givenNumber);
// console.log(expectedNumber);

// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

// console.log(5%2);
// console.log(93%2);
// console.log(141%2);
// console.log(1283%2);

// Module 20.4
// leapYear
// function leapYear (year) {
//     const years = year % 4;
//     if (years === 0) {
//         console.log('This year is leap year:', year);
//     }
//     else {
//         console.log('This year is not leap year:', year);
//     }
// };

// const presentYear = 2024;
// const finalYear = leapYear(presentYear)

// function leapYear (year) {
//     const years = year % 4;
//     if (years === 0) {
//         console.log('This year is leap year:', year);
//     }
//     else if (years >= 1) {
//         console.log('This year is not leap year:', year);
//     }
// };

// const presentYear = 2021;
// const finalYear = leapYear(presentYear)

// function leapYear (year) {
//     const years = year % 4;
//     if (years === 0) {
//         return true;
//     }
//     else if (years >= 1) {
//         return false;
//     }
// };

// const presentYear = 2029;
// const finalYear = leapYear(presentYear)
// console.log('This year check result is a', finalYear);

// function leapYear (year) {
//     const years = year % 4;
//     if (years === 0) {
//         return true;
//     }
//     return false;
// };

// const presentYear = 2031;
// const finalYear = leapYear(presentYear)
// console.log('This year check result is a', finalYear);

// Module 20.5
// findOddSum
// function getSumOfAnArray (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var index = i;
//         var element = numbers[index];
//         sum += element;
//         console.log(index, element, sum);
//     };
// };

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray (myNumbers);

// function getSumOfAnArray (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var index = i;
//         var element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     };
// };

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray (myNumbers);

// function getSumOfAnArray (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var index = i;
//         var element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     };
//     return sum;
// };

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray (myNumbers);

// Module 20.5
// function getSumOfAnArray (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var index = i;
//         var element = numbers[index];
//         sum = sum + element;
//         // console.log(index, element, sum);
//     };
//     return sum;
// };

// function getOddNumberOfAnArray (numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 === 1) {
//             console.log('Odd Number', element);
//         }
//     }
// };

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getOddNumberOfAnArray(myNumbers);
// getSumOfAnArray (myNumbers);

// function getSumOfAnArray (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var index = i;
//         var element = numbers[index];
//         sum = sum + element;
//         // console.log(index, element, sum);
//     };
//     return sum;
// };

// function getOddNumberOfAnArray (numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0) {
//             console.log('This is a Odd Number:', element);
//         }
//     }
// };

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getOddNumberOfAnArray(myNumbers);
// getSumOfAnArray (myNumbers);

// function getSumOfAnArray (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var index = i;
//         var element = numbers[index];
//         sum = sum + element;
//         // console.log(index, element, sum);
//     };
//     return sum;
// };

// function getOddNumberOfAnArray (numbers) {
//     const oddNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0) {
//             // console.log('This is a Odd Number:', element);
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// };

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// const oddNumbers = getOddNumberOfAnArray(myNumbers);
// console.log('This is an Odd numbers Array', oddNumbers);
// getSumOfAnArray (myNumbers);

// function getSumOfAnArray (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var index = i;
//         var element = numbers[index];
//         sum = sum + element;
//         // console.log(index, element, sum);
//     };
//     return sum;
// };

// function getOddNumberOfAnArray (numbers) {
//     const oddNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0) {
//             // console.log('This is a Odd Number:', element);
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// };

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];

// const oddNumbers = getOddNumberOfAnArray(myNumbers);
// console.log('This is an Odd numbers Array', oddNumbers);
// const oddNumnerSum = getSumOfAnArray (oddNumbers);
// console.log('This is an Odd number Sum', oddNumnerSum);

// function getEventNumberOfAnArray (numbers) {
//     const eventNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 == 0) {
//             // console.log('This is a Odd Number:', element);
//             eventNumbers.push(element);
//         }
//     }
//     return eventNumbers;
// };

// const myNumbersForEvent = [12, 65, 45, 78, 32, 45, 91];

// const eventNumbers = getEventNumberOfAnArray(myNumbersForEvent);
// console.log('This is an Event numbers Array', eventNumbers);
// const eventNumnerSum = getSumOfAnArray (eventNumbers);
// console.log('This is an Event number Sum', eventNumnerSum);

// Module 20.7
// 1 + 2 + 3 + 4 + 5 + 6 + 7
// let sum = 0;
// for (let i = 1; i <= 7; i++) {
//   sum = sum + i;
//   console.log(i, sum);
// }

// function sumOfNumbers(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//     console.log(i, sum);
//   }
//   return sum;
// }

// const sumDigits = [8];
// const sumDigitsOfNumbers = sumOfNumbers(sumDigits);

// 1 * 2 * 3 * 4 * 5 * 6 * 7
// function multiplicationOfNumbers(number){
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result = result * i;
//     }
//     return result;
// }

// const result = multiplicationOfNumbers(10);
// console.log(result);

// Module 20.8
// function factorial_reverse (number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result = result * i;
//         console.log(i);
//     }
//     return result;
// }

// const factorialNumber = factorial_reverse(10);
// console.log('Final factorial number of 10 :', factorialNumber);

// while loop}
// function factorial (number) {
//     let num = 1;
//     let result = 1;
//     while (num <= number){
//         result = result * num;
//         num ++;
//     }
//     return result;
// }

// const sendDigit = factorial(7);
// console.log(sendDigit);

// function factorial (number) {
//     let num = 1;
//     let result = 1;
//     while (num <= number){
//         result = result * num;
//         num ++;
//         console.log(num, result);
//     }
//     return result;
// }

// const sendDigit = factorial(7);
// console.log(sendDigit);

// factorial reverse while loop
// function factorial (number) {
//     let num = number;
//     let result = 1;
//     while (num >= 1){
//         result = result * num;
//         num--;
//     }
//     return result;
// }

// const sendDigit = factorial(7);
// console.log(sendDigit);

// function factorial (number) {
//     let i = number;
//     let result = 1;
//     while (i >= 1) {
//         result = result * i;
//         i--;
//     }
//     return result;
// }

// const sendDigit = factorial(5);
// console.log(sendDigit);

// Module 21.1
// const userName = 'blackPink';
// const userInput = 'blackPinK';

// if (userName === userInput) {
//     console.log('Validing user');
// }
// else (
//     console.log('invalid user name')
// )

// const userName = 'blackPink';
// const userInput = 'blackPinK';
// console.log(userName.toLowerCase());
// console.log(userInput.toLowerCase());

// if (userName.toLowerCase() === userInput.toLowerCase()) {
//     console.log('Validing user');
// }

// if (userName.toUpperCase() === userInput.toUpperCase()) {
//     console.log('Validing user', userInput.toUpperCase());
// }

// Module 21.2
// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, Bosonto kale tomai bolte parini';

// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('pokhi');
// const doesExist = lyrics.includes('Pakhi');
// console.log(doesExist);

// const findSearchString = lyrics.includes(searchString);
// const searchStringLowercase = searchString.toLowerCase();
// console.log(searchStringLowercase);

// const searchString = 'Pakhi';
// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// =================================================================
// console.log(lyrics.indexOf('kala'));

// if (lyrics.indexOf('kala') !== -1) {
//     console.log('exists inside the string');
// }
// else {
//     console.log('cannot find the string');
// }

// startWith
// console.log(lyrics.startsWith('Tumi'));
// console.log(lyrics.startsWith('umi'));

// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, Bosonto kale tomai bolte parini';

// const fileName = 'mybiodata.pdf';
// const otherFile = 'mypic.png';

// fileName.endsWith('.pdf');
// console.log(fileName);

// otherFile.endsWith('.png');
// console.log(otherFile);

// Module 21.3
// const lyrics =
//   "Tumi bondhu kala pakhi ami jeno ki, Bosonto kale tomai bolte parini. Tumi bondhu kala pakhi ami jeno ki, Bosonto kale tomai bolte parini.Tumi bondhu kala pakhi ami jeno ki, Bosonto kale tomai bolte parini";
// const parts = lyrics.split(" ");
// const sentences = lyrics.split(".");
// const chars = lyrics.split("");
// const partial = lyrics.slice(5, 8);
// const partial2 = lyrics.substring(5, 8);

// console.log(lyrics);
// console.log(parts);
// console.log(sentences);
// console.log(chars);
// console.log(partial);
// console.log(partial2);

// const lines = [
//   "Tumi bondhu kala pakhi ami jeno ki, Bosonto kale tomai bolte parini",
//   " Tumi bondhu kala pakhi ami jeno ki, Bosonto kale tomai bolte parini",
//   "Tumi bondhu kala pakhi ami jeno ki, Bosonto kale tomai bolte parini",
// ];

// const newSong = lines.join('.');
// const newSong = lines.join(':');
// const newSong = lines.join('?');

// const newSong = lines.join('. ');
// const newSong = lines.join(': ');
// const newSong = lines.join('? ');

// console.log(newSong);

// Module 21.4
// const result = Math.pow(2, 2);
// const result = Math.pow(2, 8);
// const result = Math.pow(3, 8);
// console.log(result);

// const num1 = 25;
// const num2 = 45;

// const gap = num1 - num2;
// if (gap < 5) {
//     console.log('you guys can be friends');
// }
// else {
//     console.log('you can not be friends');
// }

// const gap = Math.abs(num1 - num2);
// // console.log(gap);
// if (gap < 5) {
//     console.log('you guys can be friends');
// }
// else {
//     console.log('you can not be friends');
// }

// -------------------
//
// -------------------
// const number = 2.459905;
// const fullNumber = Math.round(number);

// console.log(fullNumber);

// const number = 2.50002;
// const fullNumber = Math.round(number);

// console.log(fullNumber);

// const number = 2.0002;
// const fullNumber = Math.ceil(number);

// console.log(fullNumber);

// const number = 2.99999;
// const fullNumber = Math.floor(number);

// console.log(fullNumber);

// const number = 9985.387;
// const fullNumber = Math.floor(number);

// console.log(fullNumber);

// const number = 5.387;
// const fullNumber = Math.floor(number);

// console.log(fullNumber);

// const number = 5.387;
// const fullNumber = Math.floor(number);

// console.log(fullNumber);

// const random = Math.random() * 100;
// const random = Math.random() * 10;
// const random = Math.random() * 99;
// const random = Math.random() * 99;
// const random = Math.round(Math.random() * 100);
// const random = Math.round(Math.random() * 10);

// console.log(random);

// for (let i = 0; i < 20; i++) {
//     const random = Math.round(Math.random() * 6);
//     console.log(random);
// }

// Module 21.5
// let first = 5;
// let second = 7;

// console.log(first, second);

// This is wrong approach
// first = second;
// second = first;
// console.log(first, second);

// let first = 5;
// let second = 7;

// console.log(first, second);

// First approach number 1
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// approach number 2 --- Destructuring
// [ first, second ] = [ second, first ];
// console.log(first, second);

// Module 21.6
// const jim = 84;
// const dela = 75;

// if(jim > dela){
//     console.log('Jim will get win this cake');
// }
// else {
//     console.log('Dela will get win this cake with');
// }

// const jim = 69;
// const dela = 97;

// if(jim > dela){
//     console.log('Jim will get win this cake');
// }
// else {
//     console.log('Dela will get win this cake with');
// }

// const jim = 84;
// const dela = 99;
// const chiku = 77;

// if (jim > dela && jim > chiku) {
//     console.log('Jim will win and get this cake!');
// }
// else if (dela > jim && dela > chiku) {
//     console.log('Dela will win and get this cake!');
// }
// else if (chiku > jim && chiku > dela) {
//     console.log('Chiku will win and get this cake!');
// }

// if (jim > dela && jim > chiku) {
//     console.log('Jim will win and get this cake!');
// }
// else if (dela > jim && dela > chiku) {
//     console.log('Dela will win and get this cake!!');
// }
// else {
//     console.log('Chiku will win and get this cake!!!');
// }

// const jim = 69;
// const dela = 97;
// const chiku = 99;

// if (jim > dela && jim > chiku) {
//     console.log('Jim will win and get this cake!');
// }
// else if (dela > jim && dela > chiku) {
//     console.log('Dela will win and get this cake!');
// }
// else if (chiku > jim && chiku > dela) {
//     console.log('Chiku will win and get this cake!');
// }

// if (jim > dela && jim > chiku) {
//     console.log('Jim will win and get this cake!');
// }
// else if (dela > jim && dela > chiku) {
//     console.log('Dela will win and get this cake!!');
// }
// else {
//     console.log('Chiku will win and get this cake!!!');
// }

// function maxInArray(numbers) {
//     let largest = numbers[0];

//     for(let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         // console.log(element);
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is', tallest);



// function maxInArray(numbers) {
//     let lowest = numbers[0];

//     for(let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         // console.log(element);
//         if(element < lowest){
//             lowest = element;
//         }
//     }
//     return lowest;
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is', tallest);



// Module 21.8
// function reverseString(text) {
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         console.log(element);
//     }
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);


// function reverseString(text) {
//     for (let i = text.length; i >= 0; i--) {
//         const element = text[i];
//         console.log(element);
//     }
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);


// function reverseString(text) {
//     let reversed = '';

//     for (let i = text.length-1; i >= 0; i--) {
//         const element = text[i];
//         reversed = reversed + element;
//         console.log(element, reversed);
//     }
//     return reversed;
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log('reversed output: ', reversed);


// function reverseString(text) {
//     let reversed = '';

//     for (let i = text.length - 1; i >= 0; i--) {
//         const element = text[i];
//         reversed = element + reversed;
//         console.log(element, reversed);
//     }
//     return reversed;
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log('reversed output: ', reversed);


// function reverseWords(str) {
//     const words = str.split(' ');
//     const result = [];
    
//     for(let i = words.length - 1; i >= 0; i--) {
//         const element = words[i];
//         result.push(element);
//     }
//     console.log(result);
// }

// const myString = 'I am a good boy';
// reverseWords(myString);


// function reverseWords(string) {
//     const words = string.split(' ');
//     const result = [];

//     for (let i = words.length -1; i >= 0; i--) {
//         const element = words[i];
//         result.push(element);
//     }
//     const reversed = result.join(' ');
//     return reversed;
// }

// const myString = 'I am a good boy';
// const myReturnResult = reverseWords(myString);
// console.log(myReturnResult);



// Module 21.8
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// fibonacci
/*
    fibo[3] = fibo[2] + fibo[1]
    fibo[4] = fibo[3] + fibo[2]
    fibo[5] = fibo[4] + fibo[3]
    fibo[6] = fibo[5] + fibo[4]
    fibo[7] = fibo[6] + fibo[5]
    fibo[50] = fibo[49] + fibo[48]
    fibo[487] = fibo[486] + fibo[485]
    fibo[n] = fibo[n-1] + fibo[n-2]
    fibo[i] = fibo[i-1] + fibo[i-2]
    fibo[x] = fibo[x-1] + fibo[x-2]
    fibo[y] = fibo[y-1] + fibo[y-2]
*/

// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo);

// const fibo = [0, 1];
// for (let i = 2; i <= 30; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo);

// function fibonacci (digit){
//     const fibo = [0, 1];
//     for (let i = 2; i <= digit; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }

// const fibonacciDigit = 18;
// const fibonacciResult = fibonacci(fibonacciDigit);
// console.log(fibonacciResult);



// Module 22.1
// const country = 'Bangladesh';
// const age = 52;
// const isIndependent = true;
// const student = {id: 104, name: 'Agun', class: '11'};
// const friends = [13,  14, 11, 17, 21, 16, 15, 20];

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isIndependent);
// console.log(typeof student);
// check array using Array.isArray
// console.log(typeof friends);
// console.log(Array.isArray(friends));
// console.log(typeof add);


// ................................... Using (includes) methods and checking target keywords ................................
// console.log(friends.includes(21));
// console.log(friends.includes(30));

// ................................... Using (indexOf) methods and checking target keywords ................................
// console.log(friends.indexOf(19));
// console.log(friends.indexOf(21));
// console.log(friends.indexOf(21));

// if (friends.indexOf(19) !== -1) {
    
// }
    
// ................................... Using (concat) methods and checking target keywords ................................
// const newFriends = [12, 13, 11, 13];
// const allFriends = newFriends.concat(friends);

// console.log(allFriends);


// ================================= Module 22.2 ================================
// ................ Useing (slice) methods and checking target keywords || slice mean select start index and current index before cuting ................
// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// const partial = friends.slice(2, 5);
// console.log(partial);

// ................ Useing (splice) methods and checking target keywords || slice mean select start index and current index before cuting and if you want add new numbers ................
// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// console.log(friends);
// const partial = friends.splice(2, 5);
// const partial = friends.splice(2, 5, 20, 30, 38, 93);
// console.log(partial);
// console.log(friends);



// ================================= Module 22.3 ================================
// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
// 'babul', 'abul', 'kabul', 'dabul', 'ebul', 'abul'];

// function removeDuplicate(names){
//     const unique = [];

//     for (let i = 0; i < names.length; i++){
//         const name = names[i];

//         if (unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

// function removeDuplicate(names){
//     const unique = [];

//     for (let i = 0; i < names.length; i++){
//         const name = names[i];

//         if (unique.includes(name) !== true){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);



// ================================= Module 22.4 ================================
/*
1. show output from 1-50
2. if the number is divisible by 3 then instead of the number show 'foo'
3. if the number is divisible by 5 then instead of the number show 'foo'
4. if the number is divisible by 3 and 5 then instead of the number show 'foobar'
*/
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0){
//         console.log('foo');
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log('foo');
//     }
//     else{
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 50; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log('foobar');
//     }
//     else if (i % 3 === 0) {
//         console.log('foo');
//     }
//     else if(i % 5 === 0) {
//         console.log('bar');
//     }
//     else{
//         console.log(i);
//     }
// }



// ================================= Module 22.5 ================================
/*
1. chair --> 3 cft
1. table --> 10 cft
1. bed --> 50 cft
*/
// function woodCalculator (chairQuantity, tableQuantity, bedQuantity) {
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
//     const bedWood = bedQuantity * perBedWood;
//     const totalWood = chairWood + tableWood + bedWood;
    
//     // console.log(chairQuantity, tableQuantity, bedQuantity);
//     // console.log(chairWood, tableWood, bedWood);
//     console.log(totalWood);
// };

// woodCalculator(1, 3, 5);


// function woodCalculator (chairQuantity, tableQuantity, bedQuantity) {
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
//     const bedWood = bedQuantity * perBedWood;
//     const totalWood = chairWood + tableWood + bedWood;

//     // console.log(chairQuantity, tableQuantity, bedQuantity);
//     // console.log(chairWood, tableWood, bedWood);
//     return totalWood;
// };

// const countWood = woodCalculator(0, 0, 10);
// console.log('Total wood required :', countWood);



// ================================= Module 22.6 ================================
// const phones = [
//     { name: 'Samsung', camera: 12, storage: '32GB', price: 36000, color: 'silver' },
//     { name: 'Walton', camera: 10, storage: '32GB', price: 22000, color: 'silver' },
//     { name: 'iPhone', camera: 10, storage: '32GB', price: 86000, color: 'silver' },
//     { name: 'Xaomi', camera: 10, storage: '32GB', price: 52000, color: 'silver' },
//     { name: 'Oppo', camera: 10, storage: '32GB', price: 20000, color: 'silver' },
//     { name: 'Nokia', camera: 10, storage: '32GB', price: 44000, color: 'silver' },
//     { name: 'HTC', camera: 12, storage: '32GB', price: 62000, color: 'silver' },
// ]

// function cheapestPhone (phones){
//     for(var i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         console.log(phone);
//     }
// };

// const mySelection = cheapestPhone(phones);


// const phones = [
//     { name: 'Samsung', camera: 12, storage: '32GB', price: 36000, color: 'silver' },
//     { name: 'Walton', camera: 10, storage: '32GB', price: 22000, color: 'silver' },
//     { name: 'iPhone', camera: 10, storage: '32GB', price: 86000, color: 'silver' },
//     { name: 'Xaomi', camera: 10, storage: '32GB', price: 52000, color: 'silver' },
//     { name: 'Oppo', camera: 10, storage: '32GB', price: 20000, color: 'silver' },
//     { name: 'Nokia', camera: 10, storage: '32GB', price: 44000, color: 'silver' },
//     { name: 'HTC', camera: 12, storage: '32GB', price: 62000, color: 'silver' },
// ]

// function cheapestPhone (phones){
//     let cheapest = phones[0];

//     for(var i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     // console.log(cheapest);
//     return cheapest;
// };

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);


// const phones = [
//     { name: 'Samsung', camera: 12, storage: '32 GB', price: 36000, color: 'silver' },
//     { name: 'Walton', camera: 10, storage: '32 GB', price: 22000, color: 'silver' },
//     { name: 'iPhone', camera: 32, storage: '250 GB', price: 86000, color: 'silver' },
//     { name: 'Xaomi', camera: 17, storage: '32 GB', price: 52000, color: 'silver' },
//     { name: 'Oppo', camera: 25, storage: '32 GB', price: 20000, color: 'silver' },
//     { name: 'Nokia', camera: 64, storage: '120 GB', price: 44000, color: 'silver' },
//     { name: 'HTC', camera: 10, storage: '32 GB', price: 62000, color: 'silver' },
// ]

// function cheapestPhone (phones){
//     let cheapest = phones[0];
//     for(var i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         // console.log(phone);
//         if(phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     console.log('Low price of phone:', cheapest);
//     // return cheapest;


//     let highest = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const mega = phones[i];
//         // console.log(mega);
//         if(mega.camera > highest.camera){
//             highest = mega;
//         }
//     }
//     console.log('High camera mega of phone:', highest);
//     // return highest;


//     let maxstore = phones[0];
//     for(var i = 0; i < phones.length; i++) {
//         // console.log(phones[i]);
//         const store = phones[i];
//         if(store.storage < maxstore.storage) {
//             maxstore = store;
//         }
//     }
//     console.log(maxstore);
//     // return maxstore;
// };

// const mySelection = cheapestPhone(phones);
// // console.log(mySelection);



// ================================= Module 22.7 ================================
// const shoppingCart = [
//     {name: 'shoe', price: 1200},
//     {name: 'shirt', price: 2200},
//     {name: 'pant', price: 3700},
//     {name: 'belt', price: 600}
// ]

// function totalCost(products) {
//     let sum = 0;
//     for(let i = 0; i < products.length; i++) {
//         const product = products[i];
//         // console.log(product);
//         sum = sum + product.price;
//     }
//     console.log(sum);
//     // return sum;
// }

// const expense = totalCost(shoppingCart);
// // console.log(expense);



// const shoppingCart = [
//     {name: 'shoe', price: 1200, quantity: 2},
//     {name: 'shirt', price: 2200, quantity: 5},
//     {name: 'pant', price: 3700, quantity: 4},
//     {name: 'belt', price: 600, quantity: 3}
// ]

// function totalCost(products) {
//     let sum = 0;
//     for(let i = 0; i < products.length; i++) {
//         const product = products[i];
//         // console.log(product);
//         const productTotal = product.price * product.quantity;
//         // sum = sum + product.price;
//         sum = sum + productTotal;
//     }
//     console.log(sum);
//     // return sum;
// }

// const expense = totalCost(shoppingCart);
// // console.log(expense);




// ================================= Module 22.8 ================================
/**
 1. if ticket numbers is less than 100, per ticket price: 100
 2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket price rest tickets will be 90 taka per piece.
 3. if you purchase more tickets than 200 tickets
    first 100--> 100tk
    101-200--> 90tk
    200+ --> 70tk
 */

// function ticketPrice (ticketQuantity){
//     const firstRate = 100;
//     const secondRate = 90;
//     const restRate = 70;

//     if(ticketQuantity <= 100){
//         const price = ticketQuantity * firstRate;
//         return price;
//         // console.log(price);
//     }
//     else if(ticketQuantity <= 200){
//         const firstPrice = 100 * firstRate;
//         const restTicketQuantity = ticketQuantity - 100;
//         const restTicketPrice = restTicketQuantity * secondRate;
//         const totalPrice = firstPrice + restTicketPrice;
//         return totalPrice;
//     }
//     else{
//         const firstPrice = 100 * firstRate;
//         const secondPrice = 100 * secondRate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * secondRate;
//         const totalCost = firstPrice + secondPrice + restTicketPrice;
//         return totalCost;
//     }
// };

// const ticketSold = ticketPrice(301);
// console.log(ticketSold);



// ================================= Module 22.9 ================================
// function add (num1, num2) {
//     // console.log(num1, num2);
//     return num1 + num2;
// }

// const result = add(12, 45);
// console.log(result);

// function multify (num1, num2) {
//     // console.log(num1, num2);
//     return num1 * num2;
// }

// const multifyResult = multify(12, 45);
// console.log(multifyResult);


// ================================= Module 22.10 ================================
// ================================= Module 22.11 ================================