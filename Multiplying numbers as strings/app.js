/**
 * Multiply two given strings
 * 
 * @param  {String} a String that is a number
 * @param  {String} b String that is a number
 * @return {String}   String that is a number
 */
const multiply = function (a, b) {

    if(a.length === 1 && a[0] === "0" || b.length === 1 && b[0] === "0"){
        return "0";
    }

    const s1 = a.split("").reverse().join("");
    const s2 = b.split("").reverse().join("");
    const arr = [];

    let i;
    for(i = 0; i < s1.length; i+=1) {
        let j;
        for(j = 0; j < s2.length; j+=1) {
           
           arr[i+j] = ~~arr[i+j] + +s1.charAt(i) * +s2.charAt(j) + "";
        }
    }

    let tempString = "";
    let z;
    for(z = 0; z < arr.length; z+=1) {
        let digit = arr[z] % 10;
        let carry = ~~(arr[z] / 10);
        if(z < arr.length - 1) {
            arr[z+1] = +arr[z+1] + +carry + "";
            tempString = digit + tempString;
        }
        else {
            tempString = arr[z] + tempString;
        }
    }

    let final = tempString;
    while(final[0] === "0") {
        final = final.substr(1);
    }
    return final;

}
// console.log(multiply("30", "69")) // "2070"
// console.log(multiply("39", "69")) // "2691" ["351", 2340]
// console.log(multiply("11", "85")) // "935" [5, 80, 50, 800]
                                            //[5, 50, 80, 800]
module.exports = multiply;

/**
 * Why did my code time out?
 * Our servers are configured to only allow a certain amount of time for your code to execute. 
 * In rare cases the server may be taking on too much work and simply wasn't able to run your 
 * code efficiently enough. Most of the time though this issue is caused by inefficient algorithms. 
 * If you see this error multiple times you should try to optimize your code further.
 */

/**
    if(a.length === 1 && a[0] === "0" || b.length === 1 && b[0] === "0"){
        return "0";
    }

    //"39", "69"

    const s1 = a.split("").reverse().join("");
    const s2 = b.split("").reverse().join("");
    const m = [];
    
    let zeroCountFirst = 0
    let i;
    for(i = 0; i < s1.length; i+=1) {
        let j;
        let zeroCountSecond = 0;
        let zeroStringFirst = "0".repeat(zeroCountFirst);

        for(j = 0; j < s2.length; j+=1) {
            let zeroStringSecond = "0".repeat(zeroCountSecond);
            m[i+j] = +((+s1.charAt(i) * +s2.charAt(j)) + zeroStringSecond + zeroStringFirst);
            zeroCountSecond += 1;
        }
        zeroCountFirst += 1;
    }

    let product = "";
    let z;
    for(z = 0; z < m.length; z+=1) {
        let digit = m[z] % 10;
        let carry = m[z] / 10;
        if(z+1 <m.length) {
            m[z+1] = m[z+1] + carry;
        }

        product = digit + product;
    }

    return product;
 */

/**
    if(a.length === 1 && a[0] === "0" || b.length === 1 && b[0] === "0"){
        return "0";
    }

    let i;
    let tempArray = [];
    let zeroCountFirst = 0
    for (i = b.length - 1; i >= 0; i -= 1) {
        let j;
        let zeroCountSecond = 0;
        let zeroStringFirst = "0".repeat(zeroCountFirst);
        for (j = a.length - 1; j >= 0; j -= 1) {
            let zeroStringSecond = "0".repeat(zeroCountSecond);
            let tempNum = (+a[j] * +b[i]) + zeroStringSecond + zeroStringFirst;
            zeroCountSecond += 1;

            tempArray.push(tempNum);
        }

        zeroCountFirst += 1;
    }

    // console.log(tempArray);
    let carryNumberPlus = "";

    const final = tempArray.reduce((accumulator, currentValue, currentIndex) => {
        // console.log("accumulator: ", accumulator, "currentValue: ", currentValue);
        let i;
        let tempStr = "";
        let largerString = "";
        let smallerString = "";
        if (accumulator.length > currentValue.length) {
            largerString = accumulator;
            smallerString = currentValue;
        }
        else {
            largerString = currentValue;
            smallerString = accumulator;
        }

        for (i = 0; i < largerString.length; i += 1) {
            let firstNum = +largerString[largerString.length - 1 - i];
            let tempSecondNum = +smallerString[smallerString.length - 1 - i];
            let secondNum = tempSecondNum ? tempSecondNum : 0;
            let tempNum = (firstNum + secondNum + +carryNumberPlus) + "";
            carryNumberPlus = "";
            if(i < largerString.length -1) {
                if (tempNum.length > 1) {
                    carryNumberPlus = tempNum.slice(0, tempNum.length - 1);
                }
                tempStr = tempNum[tempNum.length - 1] + tempStr;
            }
            else {
                tempStr = tempNum + tempStr;
            }

        }

        return tempStr;

    }, "0");

    let filteredStr = final;
    while(filteredStr[0] === "0") {
        filteredStr = filteredStr.substr(1);
    }
    return filteredStr;
 */