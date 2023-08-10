/*
 * event number funding code or rules
 */

function eventNumberFunding(number) {
    const division = number % 2;
    if (typeof number !== "number" || typeof number === null) {
        return "Please enter a number not acceptable string or null value";
    }
    else {
        if (division === 0) {
            return true;
        }
        else {
            return false;
        }
    }
};

const sendEventDigit = 36;
// console.log(eventNumberFunding(sendEventDigit));

// =================================================================



/*
 * odd number funding code or rules
 */

function oddNumberFunding (amount) {
    const digits = amount % 2;
    if ( typeof amount !== 'number' || typeof amount === null) {
        return 'Please enter a number not acceptable string or null value';
    }
    else {
        if ( digits !== 0 || digits === 1 ) {
            return true;
        }
        else {
            return false;
        }
    }
};

const sendOddDigit = 303;
// console.log(oddNumberFunding(sendOddDigit));

// =================================================================


/*
 * cube number funding code or rules
 */

function cubeNumberFunding (number) {
    if (typeof number !== 'number' || number === null) {
        return "Please enter a cube number and not aceptable null number.";
    }
    else {
        if (number >= 0) {
            const cube = number * 3;
            return cube;
        }
        else {
            return "Please enter a Positive(+) number not acceptable negative number.";
        }
    }
};

const sendCubeNumber = 302;
// console.log(cubeNumberFunding(sendCubeNumber));


/*
 * match string funding code or rules
 */

function matchStringFunding (string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string" || string1 === null || string2 === null) {
        return "Please send me a meaningful string";
    }
    else {
        const stringCheck = string1.toLowerCase();
        const string2Check = string1.toLowerCase();
        if (stringCheck.includes(string2Check)) {
            return "Wow, matching this string";
        }
        else {
            return "Sorry, this string is not matching";
        }
    }
};

const sentString1 = 'I Love you Khushi';
const sentString2 = 'Khushi';
// console.log(matchStringFunding(sentString1, sentString2));
// console.log(matchStringFunding('I Love you Khushi', 'Khushi'));


/*
 * sortMaker array funding code or rules
 */

function sortMaker(array)  {
    // const [array1, array2] = array;
    if (!Array.isArray(array) || array.length !== 2) {
        return "Please past a valid array";
    }
    else {
        if (typeof array[0] === 'string' || typeof array[1] === 'string') {
            return "Please past an array not acceptable string";
        }
        else if (array[0] === array[1]) {
            return "Awesome, equal this number";
        }
        else if (array[0] < 0 || array[1] < 0) {
            return "Invalid number";
        }
        else if (array[0] > 0 && array[1] > 0) {
            if (array[0] > array[1]) {
                return `${array[0]}, ${array[1]}`;
            }
            else {
                return `${array[1]}, ${array[0]}`;
            }
        }
    }
};

// Example usage
// console.log(sortMaker([8]));         // invalid array
// console.log(sortMaker([10, "abc"])); // Outputs: "Invalid"
// console.log(sortMaker([5, 5]));      // Outputs: "equal"
// console.log(sortMaker([-2, 9]));     // Outputs: "Invalid"
// console.log(sortMaker([3, 17]));     // Outputs: [3, 7]
// console.log(sortMaker([13, 5]));     // Outputs: [3, 8]



function sortMaker2 (arr)  {
    const [array1, array2] = arr;
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Please past a valid array";
    }
    else {
        if (typeof array1 === 'string' || typeof array2 === 'string') {
            return "Please past an array not acceptable string";
        }
        else if (array1 === array2) {
            return "Awesome, equal this number";
        }
        else if (array1 < 0 || array2 < 0) {
            return "Invalid number";
        }
        else if (array1 > 0 && array2 > 0) {
            const store = [];
            if (array1 > array2) {
                store.push(array1, array2);
                return store;
            }
            else {
                store.push(array2, array1);
                return store;
            }
        }
    }
};

// Example usage
// console.log(sortMaker2([8]));         // invalid array
// console.log(sortMaker2([10, "abc"])); // Outputs: "Invalid"
// console.log(sortMaker2([5, 5]));      // Outputs: "equal"
// console.log(sortMaker2([-2, 9]));     // Outputs: "Invalid"
// console.log(sortMaker2([3, 17]));     // Outputs: [3, 7]
// console.log(sortMaker2([13, 5]));     // Outputs: [3, 8]


/*
 * find address array funding code or rules
 */

function findAddress (address) {
    if (typeof address !== 'object' || address.length === 0 || address === null) {
        return "Please select a valid address objects.";
    };

    const {street, house, society} = address;
    if (!street || !house || !society) {
        const infoAddress = [
            street || "__",
            house || "__",
            society || "__"
        ].join(" , ");
        return infoAddress;
    };
    const infoAddress = `${street}, ${house}, ${society}`;
    return infoAddress;
};

// const getAddress1 = {
//     street: 10,
//     house: "15A",
//     society: "Amaging Societies"
// }
// console.log(findAddress(getAddress1));

// const getAddress2 = {
//     street: 11,
//     society: "Amaging Societies"
// };
// console.log(findAddress(getAddress2));

// const getAddress3 = {
//     street: 12
// };
// console.log(findAddress(getAddress3));


/*
 * find address array funding code or rules
 */