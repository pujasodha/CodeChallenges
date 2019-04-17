/**
 * Add the two lowest numbers
 * 
 * @param   { Number[] } numbers Array of whole numbers
 * @returns { Number }           Return the sum of the 2 lowest number
 */

var sumTwoSmallestNumbers = function(numbers) {

    let firstNum = Math.min(...numbers);
    let indexFirstNum = numbers.indexOf(firstNum);
    numbers.splice(indexFirstNum, 1);
    let secondNum = Math.min(...numbers);
    return firstNum + secondNum;
};

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

module.exports = sumTwoSmallestNumbers;