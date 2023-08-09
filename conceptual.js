// let x = "hello world";
// const y = "world";

// x = 7;
// y = 'problem';
// console.log(x, y);

// var x = "hello world";
// let y = "world";

// x = 7;
// y = 'problem';
// console.log(x, y);

// var x = "hello world";
// let y = "world";

// x = 7;
// y = 'problem';
// console.log(x, y);

// const name = 'Shakil';
// const result = name.includes('kil');
// console.log(result);

// const pets = ['cat', 'dog', 'rat'];
// const result = pets.includes('rat');
// console.log(result);

// const shakil = ['ant', 'camel', 'duck', 'elephant', 'cat', 'dog'];
// console.log(shakil.slice(2));

// const shakil = ['ant', 'camel', 'duck', 'elephant', 'cat', 'dog'];
// console.log(shakil.slice(1, 5));

// const shakil = ['ant', 'camel', 'duck', 'elephant', 'cat', 'dog'];

// shakil.push  = 'like';
// console.log(shakil);

// const obj = {
//     name: 'shakil',
//     age: 26,
//     address: 'Sirajganj',
//     phone: '01305330393'
// };

// console.log(obj);

// const obj = {
//     name: 'shakil',
//     age: 26,
//     address: 'Sirajganj',
//     phone: '01305330393'
// };

// console.log(obj.age);

// const obj = {
//     name: 'shakil',
//     age: 26,
//     address: 'Sirajganj',
//     phone: '01305330393'
// };

// console.log(obj.age);
// console.log(obj['phone']);
// const x = 'address';

// console.log(obj[x]);

// const keys = Object.keys(obj);
// console.log(keys);
// const values = Object.values(obj);
// console.log(values);

// for (let key of keys) {
//     console.log(obj[key]);
// };

// for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     console.log(obj[key]);
// };

// const person = {
//     name: 'shakil',
//     age: 26,
//     address: 'Sirajganj',
//     phone: '01305330393'
// };

// for (let i in person) {
//     // console.log(i);
//     // console.log(typeof i);
//     // console.log(person[i]);
//     console.log(typeof i, i, person[i]);
//     console.log('My info collect from Object i meaning self string (i) define keys and person[i] define keys value', typeof i, i, person[i]);
// };

// const myName = 'shakil';
// const myAge = 26;
// const myAddress = 'Sirajganj';
// const myPhone = '01305330393';

// console.log(myName);
// console.log(myAge);
// console.log(myAddress);
// console.log(myPhone);

// const myName = 'shakil';
// const myAge = 26;
// const myAddress = 'Sirajganj';
// const myPhone = '01305330393';

// function show () {
//     console.log('my info');
// };

// show();

// function printInfo (name, age) {
//     const info = name + ' ' + age;
//     console.log(typeof name, info, 'valo hoye jao');
// };

// printInfo('Shakil', 15);

// function add (x, y) {
//     let total = x + y;
//     // console.log(total);
//     return total;
// };
// let result = add(10, 5);
// console.log(result);

// no perameters + no return
// function show() {
//     console.log('Hello world');
// };

// perameters + no return
// function add (x, y) {
//     console.log('Hello world');
// };

// no perameters + no return
// function add () {
//     const money = 500;
//     return money;
// };

// parameters + return
// function multi(a, b) {
//     const result = a * b;
//     return result;
// }

// function sumOfArray(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum = sum + item;
//         console.log(sum);
//     }
//     return sum;
// };

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = sumOfArray(nums);

// function sumOfArray(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum = sum + item;
//         // console.log(sum);
//     }
//     return sum;
// };

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = sumOfArray(nums);
// console.log(result);

// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i of arr) {
//         sum = sum + i;
//         // console.log(sum);
//     }
//     return sum;
// };

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = sumOfArray(nums);
// console.log(result);

// function oddArray(arr) {
//     let sum = 0;

//     for (let item of arr) {
//         if (arr[item] % 2 === 0) {
//             sum += item;
//         }
//         // console.log(sum);
//     }
//     return sum;
// };

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const oddFinalResult = oddArray(numbers);
// console.log(oddFinalResult);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (var number of arr) {
//     console.log(typeof number, number);
// };

// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     }

//     let result = 1;

//     for (let i = number; i >= 1; i--) {
//         result = result + 1;
//     }

//     return result;
// };

// console.log(factorial(5));
// console.log(factorial(0));

// function findLargest(x){

//     let largest = x[0]; // mone kori first number is largest
    
//     for (let i = 1; i < x.length; i++) {
//         const currentItem = x[i];

//         if (currentItem > largest){
//             largest = currentItem;
//         }
//     }

//     return largest;
// }

// const arr = [5, 12, 7, 9, 20, 4, 2, 3];
// const finalLargest = findLargest(arr);
// console.log(finalLargest);


// function biggest(friends){
//     let largest = friends[0]; // mone kori first number is largest
//     for (let i = 1; i < friends.length; i++) {
//         if (friends[i].length > biggest.length) {
//             biggest = friends[i];
//         }
//     }
//     return biggest;
// }

// const friends = ['arif', 'rokib', 'saki', 'sunny', 'shakilla', 'shakil'];
// const finalBigName = biggest(friends);
// console.log(finalBigName);


// function add (a, b) {
//     return a + b;
// }

// console.log(add(3, 6));

// function add (a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return "Please give me a number";
//     }

//     return a + b;
// }

// console.log(add(3, '6'));

// function add (a, b) {
//     if(typeof a !== 'number' && typeof b !== 'number'){
//         return "Please give me a number";
//     }

//     return a + b;
// }

// console.log(add(3, '6'));


// function findVowel (s) {
//     let vowel = 0;
//     let consonent = 0;
//     let space = 0;

//     for(let i = 0; i < s.length; i++) {
//         let char = s[i];
//         if(char[i] === 'a' || char[i] === 'e' || char[i] === 'i' || char[i] === 'o' || char[i] === 'u') {
//             vowel++;
//         }
//         else {
//             consonent++;
//         }
//     }

//     const obj = {
//         vowelCount: vowel,
//     }

//     return obj;
//     // return vowel;
// }

// const sentence = "the name of our country is bangladesh";
// console.log(findVowel(sentence));