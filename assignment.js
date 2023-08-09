// Password11wifi

// function cubeNumber(number) {
//     if (typeof number !== "number") {
//         return "Please provide a valid number not a string.";
//     }
//     else {
//         if(number >= 0) {
//             return Math.pow(number, 3);
//         }
//         else {
//             return "Please provide a positive(+) number.";
//         }
//     }
// }

// console.log(cubeNumber('Hi, janu'));
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
// console.log(cubeNumber(-3));

// =================================================================



// function matchFinder(inputString) {
//     if (typeof inputString !== 'string') {
//       return "A small amount of money"; // Return small amount of money for invalid input
//     }
    
//     const field = "second string"; // The field to match against
//     const lowerInput = inputString.toLowerCase();
//     const lowerField = field.toLowerCase();
    
//     if (lowerInput.includes(lowerField)) {
//       return true; // Return true if a complete match is found
//     } else {
//       return false; // Return false if no complete match is found
//     }
//   }
  
//   // Example usage
//   console.log(matchFinder("This is the Second String.")); // Outputs: true
//   console.log(matchFinder("Hello, world!"));              // Outputs: false
//   console.log(matchFinder(42));                           // Outputs: "A small amount of money"
  



// function matchFinder(inputString, field) {
//     if (typeof inputString !== 'string' || typeof field !== 'string') {
//       return "A small amount of money"; // Return small amount of money for invalid input
//     }
    
//     const lowerInput = inputString.toLowerCase();
//     const lowerField = field.toLowerCase();
    
//     if (lowerInput.includes(lowerField)) {
//       return true; // Return true if a complete match is found
//     } else {
//       return false; // Return false if no complete match is found
//     }
//   }
  
//   // Example usage
//   console.log(matchFinder("This is the Second String.", "second string")); // Outputs: true
//   console.log(matchFinder("Hello, world!", "foo"));                      // Outputs: false
//   console.log(matchFinder(42, "field"));                          // Outputs: "A small amount of money"


// =================================================================

// function sortMaker(inputArray) {
//     if (!Array.isArray(inputArray) || inputArray.length !== 2) {
//       return "Invalid"; // Return "Invalid" for incorrect input
//     }
  
//     const [firstElement, secondElement] = inputArray;
  
//     if (typeof firstElement !== 'number' || typeof secondElement !== 'number') {
//       return "Invalid"; // Return "Invalid" if any element is not a number
//     }
  
//     if (firstElement < 0 || secondElement < 0) {
//       return "Invalid"; // Return "Invalid" if any element is negative
//     }
  
//     if (firstElement === secondElement) {
//       return "equal"; // Return "equal" if the two elements are the same
//     }
  
//     if (secondElement > 0) {
//       return [firstElement, secondElement].sort((a, b) => a - b); // Return sorted array
//     } else {
//       return [firstElement, secondElement].sort((a, b) => b - a); // Return sorted array in descending order
//     }
//   }
  
//   // Example usage
//   console.log(sortMaker([3, 7]));    // Outputs: [3, 7]
//   console.log(sortMaker([5, 5]));    // Outputs: "equal"
//   console.log(sortMaker([-2, 9]));   // Outputs: "Invalid"
//   console.log(sortMaker([10, "abc"]));// Outputs: "Invalid"
//   console.log(sortMaker([8, 3]));    // Outputs: [3, 8]



// ................ My code is here ................
// function sortMaker(arr) {
//     let [array1, array2] = arr;
//     if (!Array.isArray(arr) || arr.length !== 2) {
//         return "Please provide a valid array";
//     }
//     else {
//         if (typeof array1 !== "number" || typeof array2 !== "number") {
//             return "Please provide a valid number";
//         }
//         else if (array1 === array2) {
//             return "equal";
//         }
//         else if (array1 < 0 || array2 < 0) {
//             return "Invalid Input";
//         }
//         else if (array1 > 0 && array2 > 0) {
//             let maxToSmaller = [];
//             if (array1 > array2) {
//                 maxToSmaller.push(array1, array2);
//                 return maxToSmaller;
//             }
//             else {
//                 maxToSmaller.push(array2, array1);
//                 return maxToSmaller;
//             }
//         }
//     }
// }

// // Example usage
// console.log(sortMaker([8]));    // Outputs: [3, 8]
// console.log(sortMaker([10, "abc"]));// Outputs: "Invalid"
// console.log(sortMaker([5, 5]));    // Outputs: "equal"
// console.log(sortMaker([-2, 9]));   // Outputs: "Invalid"
// console.log(sortMaker([3, 7]));    // Outputs: [3, 7]
// console.log(sortMaker([8, 3])); 

// ................ my code ends here ................



// function sortMaker(inputArray) {
//     if (!Array.isArray(inputArray) || inputArray.length !== 2) {
//       return "Invalid"; // Return "Invalid" for incorrect input
//     }
  
//     const [firstElement, secondElement] = inputArray;
  
//     if (typeof firstElement !== 'number' || typeof secondElement !== 'number') {
//       return "Invalid"; // Return "Invalid" if any element is not a number
//     }
  
//     if (firstElement < 0 || secondElement < 0) {
//       return "Invalid"; // Return "Invalid" if any element is negative
//     }
  
//     if (firstElement === secondElement) {
//       return "equal"; // Return "equal" if the two elements are the same
//     }
  
//     // Modified sorting logic: Sort array in ascending order by default
//     const sortedArray = [firstElement, secondElement].sort((a, b) => a - b);
//     return sortedArray;
//   }
  
//   // Example usage
//   console.log(sortMaker([3, 7]));    // Outputs: [3, 7]
//   console.log(sortMaker([5, 5]));    // Outputs: "equal"
//   console.log(sortMaker([-2, 9]));   // Outputs: "Invalid"
//   console.log(sortMaker([10, "abc"]));// Outputs: "Invalid"
//   console.log(sortMaker([8, 3]));    // Outputs: [3, 8]



// =================================================================

// function findAddress(inputObject) {
//     if (typeof inputObject !== 'object' || inputObject === null) {
//         return "Invalid input"; // Return "Invalid input" for incorrect input
//     }

//     const { name, street, city, country } = inputObject;
//     if (!name || !street || !city || !country) {
//         // Create a formatted address with missing parts replaced by double underscores
//         const formattedAddress = [
//         name || "__",
//         street || "__",
//         city || "__",
//         country || "__"
//         ].join(", ");

//         return formattedAddress;
//     }

//     // Create a formatted address with all parts present
//     const formattedAddress = `${name}, ${street}, ${city}, ${country}`;
//     return formattedAddress;
// }

// // Example usage
// const address1 = {
// name: "John Doe",
// street: "123 Main St",
// city: "Anytown",
// country: "Countryland"
// };
// console.log(findAddress(address1)); // Outputs: "John Doe, 123 Main St, Anytown, Countryland"

// const address2 = {
// name: "Jane Smith",
// street: "456 Elm St",
// city: "Cityville"
// };
// console.log(findAddress(address2)); // Outputs: "Jane Smith, 456 Elm St, Cityville, __"

// const invalidInput = "This is not an object";
// console.log(findAddress(invalidInput)); // Outputs: "Invalid input"
  


// =================================================================


// function canPay(notesArray, chipPrice) {
//     if (!Array.isArray(notesArray) || notesArray.length === 0 ) {
//         return "Please provide a money array"; // Return "empty array" for invalid input
//     }

//     const retailAmount = notesArray.reduce((total, note) => total + note, 0);

//     return retailAmount >= chipPrice;
// }

// // Example usage
// const notes = [1, 2, 5];
// const chipPrice = 10;
// console.log(canPay(notes, chipPrice)); // Outputs: true (1 + 2 + 5 = 8, which is equal to or greater than 7)

// const insufficientNotes = [2, 3];
// const expensiveChipPrice = 10;
// console.log(canPay(insufficientNotes, expensiveChipPrice)); // Outputs: false (2 + 3 = 5, which is less than 10)

// const emptyArray = [];
// const someChipPrice = 5;
// console.log(canPay(emptyArray, someChipPrice)); // Outputs: "empty array"



// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray) || changeArray.length === 0 || typeof totalDue !== 'number') {
//         return "Please give me cost of products.";
//     }

//     else {
//         let sum = 0;
//         for (let i = 0; i < changeArray.length; i++) {
//             const element = changeArray[i];
//             sum = sum + element;
//         }

//         if (sum >= totalDue) {
//             return true;
//         }

//         if (sum < totalDue) {
//             return false;
//         }
//     }
// }

// const amountCount = [1, 8, 2];
// const amountCount = [1, 1, 2];
// const chipPrice = 10;
// const amountCount = "Sum"; 
// const amountCount = []; 
// const chipPrice = '10';
// console.log(canPay(amountCount, chipPrice));