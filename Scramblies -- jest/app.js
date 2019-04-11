/**
 * Check if the second string is contained in the first string
 * 
 * @param   { String }  str1 String containing random letters
 * @param   { String }  str2 String to be checked
 * @returns { Boolean }      Returns if the second string is contained in the first
 */

const scramble = function (str1, str2) {
    if (str2.length > str1.length || str1 === "" || str2 === "") {
        return false;
    }
    let i, bool = true;
    const string1 = str1.split("");
    for (i = 0; i < str2.length; i+=1) {
        let j;
        for (j = 0; j < string1.length; j+=1) {
            if(str2[i] === string1[j]) {
                string1.splice(j, 1);
                break;
            }
            
            if(j === (string1.length - 1)) {
                return false;
            }
        }

    }

    return bool;

}


// console.log(scramble("katas", "steak"));    // false
// console.log(scramble("rkqodlw", "world"));  // true
// console.log(scramble("asynoymabbcamaomsccdd", "synonym"));  // false
module.exports = scramble;

// Attempts

/**
 *  Why did my code time out?
 *  
 * Our servers are configured to only allow a certain amount of time for your * code to execute. In rare cases the server may be taking on too much work 
 * and simply wasn't able to run your code efficiently enough. Most of the 
 * time though this issue is caused by inefficient algorithms. If you see 
 * this error multiple times you should try to optimize your code further.
 * 
 */

 /**
    if (str2.length > str1.length || str1 === "" || str2 === "") {
        return false;
    }
    let i, bool = true;
    const string1 = str1.split("");
    for (i = 0; i < str2.length; i+=1) {
        let j;
        for (j = 0; j < string1.length; j+=1) {
            if(str2[i] === string1[j]) {
                string1.splice(j, 1);
                break;
            }
            
            if(j === (string1.length - 1)) {
                return false;
            }
        }

    }

    return bool;
  */

/**
    
    if (str2.length > str1.length || str1 === "" || str2 === "") {
        return false;
    }
    let i, bool = true;
    const string1 = str1.split("");
    for (i = 0; i < str2.length; i += 1) {
        let index = string1.indexOf(str2[i]);
        if (index === -1) {
            bool = false;
            break;
        } else {
           string1.splice(index, 1);
        }
    }

    return bool;
 */

/**
 * Incorrect attempt because of double letters
 if(str2.length > str1.length || str1 === "" || str2 === "") {
        return false;
    }
    return str2.split("").every((element, index) => {
        return str1.split("").some((el, i) => {
            return el === element;
        });
    });
 */

/**
 * Incorrect attempt because of double letters
 if(str2.length > str1.length || str1 === "" || str2 === "") {
        return false;
    }
    return str2.split("").every((element, index) => {
        if(str1.indexOf(element) === -1) {
            return false;
        }
        else {
            return true;
        }
    });
 */

/**
 * Incorrect attempt because of double letters
 if(str2.length > str1.length) {
        return false;
    }
    let i, bool = true;
    str2.split("").forEach((element) => {
        if(str1.indexOf(element) === -1){
            bool = false;
        }
    });

    return bool;
 */

/**
 * Incorrect attempt because of double letters
 if(str2.length > str1.length) {
        return false;
 }
  let i, bool = true;
  for(i = 0; i < str2.length; i+=1) {
    if(str1.indexOf(str2[i]) === -1){
       bool = false;
       break;
    }
  }

  return bool;
 */