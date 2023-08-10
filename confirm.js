function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a valid number not a string.";
    }
    else {
        if(number >= 0) {
            return Math.pow(number, 3);
        }
        else {
            return "Please provide a positive(+) number.";
        }
    }
}

// console.log(cubeNumber('Hi, janu'));
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
// console.log(cubeNumber(-3));

// =================================================================



function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please enter a string sentences.";
    }
    else {
        const stringCheck = string1.toLowerCase();
        const string2Check = string2.toLowerCase();
        
        if(stringCheck.includes(string2Check)){
            return true;
        }
        else {
            return false;
        }
    }
}

// console.log(matchFinder('I Love you', 'love'));
// console.log(matchFinder('I Love you', 'foo'));
// console.log(matchFinder(420, 'love'));

// =================================================================



function sortMaker(arr) {
    let [array1, array2] = arr;

    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Please provide a valid array";
    }
    else {
        if (typeof array1 !== "number" || typeof array2 !== "number") {
            return "Please provide a valid number";
        }
        else if (array1 === array2) {
            return "equal";
        }
        else if (array1 < 0 || array2 < 0) {
            return "Invalid Input";
        }
        else if (array1 > 0 && array2 > 0) {
            let maxToSmaller = [];
            if (array1 > array2) {
                maxToSmaller.push(array1, array2);
                return maxToSmaller;
            }
            else {
                maxToSmaller.push(array2, array1);
                return maxToSmaller;
            }

        }
    }
}

// Example usage
// console.log(sortMaker([8]));    // Outputs: [3, 8]
// console.log(sortMaker([10, "abc"]));// Outputs: "Invalid"
// console.log(sortMaker([5, 5]));    // Outputs: "equal"
console.log(sortMaker([-2, 9]));   // Outputs: "Invalid"
// console.log(sortMaker([3, 17]));    // Outputs: [3, 7]
// console.log(sortMaker([3, 13]));    // Outputs: [3, 8]



// =================================================================




function findAddress(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Please provide a object";
    }

    const {street, house, society} = obj;
    if (!street || !house || !society) {
        const streetAddress = [
            street || "__",
            house || "__",
            society || "__"
        ].join(" , ");
        return streetAddress;

    }
    const streetAddress = `${street}, ${house}, ${society}`;
    return streetAddress;
}

// const info1 = {
//     street: 10,
//     house: "15A",
//     society: "Earth Perfect"
// };
// console.log(findAddress(info1));

// const info2 = {
//     street: 10,
//     society: "Earth Perfect"
// };
// console.log(findAddress(info2));


// const info3 = {
//     street: 10
// };
// console.log(findAddress(info3));



// =================================================================



function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0 || typeof totalDue !== 'number') {
        return "Please give me cost of products.";
    }

    else {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            const element = changeArray[i];
            sum = sum + element;
        }

        if (sum >= totalDue) {
            return true;
        }

        if (sum < totalDue) {
            return false;
        }
    }
}

// const amountCount = [1, 8, 2];
// const amountCount = [1, 1, 2];
// const chipPrice = 10;
// const amountCount = "Sum"; 
// const amountCount = []; 
// const chipPrice = '10';
// console.log(canPay(amountCount, chipPrice));