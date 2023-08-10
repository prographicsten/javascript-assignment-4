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
 * match string funding code or rules
 */