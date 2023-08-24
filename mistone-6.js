// 30.1 class

// const money = 25;
// money = 50;
// console.log(money);

// let money = 25;
// money = 50;
// console.log(money);

// let count = 0;
// count = count + 10;
// console.log(count);

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// // numbers = [54, 55, 56, 57, 58, 59, 60, 61]
// numbers[1] = 45;
// numbers.push(50, 34, 45);
// console.log(numbers);

// Object 
// const student = {
//     name: 'Shakil Ahmed',
//     class: 12
// }

// student.name = 'moyor konthi';
// console.log(student);

// let student = {
//     name: 'Shakil Ahmed',
//     class: 12
// }

// student = {name: 'Khushi Khatun'}
// console.log(student);

// let sum = 0;
// for(let i = 0; i <10; i++) {
//     sum = sum + i;
// }
// console.log(sum);



// 30.2 class
// function add(num1 = 'tui taka dibi na', num2 = "amar kachhe akhon taka nei 0") {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }

// // const sum = add(5, 7);
// // const sum = add(5);
// const sum = add();
// // console.log(add(5, 10));

// function friends(numbs = [])  {

// }

// function person(numbs = {}) {

// }

// const first = 'jaan';
// const last = 'pakhi';

// const name = first + ' ' + last;
// console.log(name);

// const a = 10;
// const b = 20;
// // const result = 'The sum of ' + (a + b);
// // console.log(result);

// const math = `The sum of ${a} and ${b} is ${a + b}`;
// console.log(math);

// const email = 'Hi, john \n' + 'cina \n' + 'tumi mara mari korba naki';
// console.log(email);

// const challenge = `Hi, John Cena
// tumi ki khelba naki
// mara mari`;
// console.log(challenge);



// 30.4 class
// function add(a, b) {
//     const result = a + b;
//     return result;
// }

// function declareation
// function add(a, b) {
//     return a + b;
// }

// const numbers = add(10, 10);
// console.log(numbers);

// function expression
// const add2 = function (a, b) {
//     return a + b;
// };

// console.log(add2(10, 20));

// arrow function
// const add3 = (a, b) => {
//     return a + b;
// };
// console.log(add3(10, 34));

// const add3 = (a, b) => a + b;
// const sum = add3(10, 10);
// console.log(sum);

// const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
// const sum = add4(10, 14, 64, 80);
// console.log(sum);

// const add4 = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;
// const sum = add4(10, 14, 64, 80);
// console.log(sum);



// more arrow function
// const defference = (x, y) => x - y;
// const multiply = (first, second, third) => first * second * third;

// const getAge = (person) => person.age;
// const student = {name: 'Shakil', age: 26};
// const age = getAge(student);
// console.log(age);


// const getThird = numbers => numbers[2];
// // const third = getThird([3, 4, 36, 38, 37]);
// const third = [3, 4, 36, 38, 37];
// console.log(getThird(third));


// const doubleIt = num => num * 2;
// console.log(doubleIt(3));

// const getPI = () => Math.PI;
// console.log(getPI());

// large arrow function. if you want to get anything returned form this function. then you have to use the return keyword.
// const doMath = (x, y, z) => {
//     const sum = x + y + z;
//     const mult = x * y * z;
//     const result = sum + mult;
//     return result;
// }

// console.log(doMath(2, 4, 6));



// 30.6 class
// const max = Math.max(234, 33, 543, 23, 44, 343, 343, 4543);
// console.log(max);

// const max = Math.max(234, 33, 543, 23, 44, 343, 343, 4543);
// const numbers = [23, 343, 343, 44, 246, 35323, 454];
// const arrayMax = Math.max(...numbers);
// // console.log(numbers);
// // console.log(...numbers);
// console.log(arrayMax);

// use spread operator to copy
// const nums = [23, 234, 234, 234, 234, 234, 234];
// // const nums2 = [23, 234, 234, 38, 453, 533, 64];
// const nums2 = nums;
// nums2.push(12);
// console.log(nums2);
// console.log(nums);

// const friends = [23, 234, 234, 234, 234, 234, 234];
// // const nums2 = [23, 234, 234, 38, 453, 533, 64];
// const bondhu = friends;
// const dosto  = [...friends]
// friends.push(100);
// console.log(dosto);
// console.log(friends);


// // advanced function
// const sonkha = [...friends, 9999];
// console.log(sonkha);




// 30.7 class
// const actor = {
//     name: 'Ananato',
//     age: 36,
//     phone: '01205330393',
//     money: '13344343498734 Tk',
//     money: 13344343498734,
// }

// if right side is not object the side of destructuring will be object as well
// use property name as a variable that contains the property value
// const {phone} = actor;
// const {name} = actor;
// const {age} = actor;

// const {name, age, phone, money} = actor;
// const {name, age : boyos, phone, money} = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// console.log(phone);
// console.log(name);
// console.log(boyos);
// console.log(money);


// array destructuring
// const numbers = [35, 54, 34, 57];
// const [first, second] = numbers;
// const [x, y] = [12, 55];
// // console.log(first, second);
// console.log(numbers);
// advance
// function doubleThem(a, b) {
//     return [a * 2, b * 2];
// }

// const [prothom, ditiyo] = doubleThem(6, 9);
// console.log(prothom, ditiyo);



// 30.8 class
// const glass = {
//     name: 'glass', 
//     color: 'golden', 
//     price: 12, 
//     isCleaned: true
// };

// console.log(glass);
// const keys = Object.keys(glass);
// console.log(keys);

// const values = Object.values(glass);
// console.log(values);

// const entries = Object.entries(glass);
// console.log(entries);

// delete glass.name;
// console.log(glass);

// delete glass.color;
// console.log(glass);

// delete glass.price;
// console.log(glass);

// delete glass.isCleaned;
// console.log(glass);

// const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// const {name, ...shortGlass} = glass;
// console.log(name);

// const {price, ...shortGlass} = glass;
// console.log(shortGlass);

// const {color, ...shortGlass} = glass;
// console.log(shortGlass);


// freeze
// Object.freeze(glass);
// glass.source = 'Bangladesh';

// console.log(glass);

// Object.seal(glass);
// glass.source = 'Bangladesh';
// glass.price = 5000;
// delete glass.name;

// console.log(glass);



// 30.9 class
// const numbers = [1, 6, 8, 4];
// for(let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// while loop
// for(const num of numbers) {
//     console.log(num);
// }

// const nobab = 'Siraj Ud Doulah';
// for(const char of nobab) {
//     console.log(char);
// }

// const glass = {
//     name: 'glass', 
//     color: 'golden', 
//     price: 12, 
//     isCleaned: true
// };

// for(const key in glass) {
//     const value = glass[key];
//     console.log(key, value);
// }