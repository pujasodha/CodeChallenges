/**
 * @param  {string}
 * @return {string}
 */

const longestPalindrome = function (s) {
    if(s === "") return 0;
    if(s.length === 1) return 1;
    
    let i;
    let longestPal = "";

    for(i = 0; i < s.length; i+=1) {
        
        let currentPal = "";

        let previousIndex = i - 1;
        let currentIndex = i;
        let nextIndex = i + 1;

        let isPalEven = false;

        while(s[currentIndex] === s[nextIndex] && s[nextIndex] !== undefined) {
            currentPal = s[currentIndex] + currentPal + s[nextIndex];

            currentIndex-=1;
            nextIndex+=1;

            isPalEven = true;
        }

        if(!isPalEven) {
            currentPal = s[i];
            while(s[previousIndex] === s[nextIndex] && s[nextIndex] !== undefined) {

                currentPal = s[previousIndex] + currentPal + s[nextIndex];
    
                previousIndex-=1;
                nextIndex+=1;
    
            }
        }

        if(currentPal.length > longestPal.length) {
            longestPal = currentPal;
        }
    }

    if (longestPal.length === 0) {
        return s[0] ? 1 : 0;
    } 
    else {
        return longestPal.length;
    }
}

// console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("ba")); // 1
module.exports = longestPalindrome;
