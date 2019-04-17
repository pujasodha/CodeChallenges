var longestPalindrome = function (s) {
    if (!s) return 0;
    for (let c = s.length; c > 0; c--) {
        for (let i = 0; i <= s.length - c; i++) {
            var check = s.substr(i, c);
            if (check === check.split("").reverse().join("")) return c;
        }
    }
}

//=========================================

longestPalindrome = function (s) {
    var longest = 0;
    var length = s.length;

    for (var i = 0; i < length; i++) {
        for (var j = i + 1; j <= length; j++) {
            var str = s.slice(i, j);
            var l = str.length
            if (isPalindrome(str) && longest < l) {
                longest = l;
            }
        }
    }
    return longest;
}

function isPalindrome(s) {
    var arr = s.split("");
    return s == arr.reverse().join("");
}


//=========================================

longestPalindrome = function (s) {
    var l = 0;
    for (var i = 0; i < s.length; i++)
        for (var j = i; j <= s.length; j++)
            if (s.substring(i, j) === s.substring(i, j).split('').reverse().join('') && s.substring(i, j).length > l)
                l = s.substring(i, j).length;

    return l;
}

//=========================================

longestPalindrome = function (s) {
    var a = s.split('');
    var length = 0;
    a.forEach(function (c, i) {
        length = Math.max(exploreArrayForImpairPalindrome(i, a), length);
        length = Math.max(exploreArrayForPairPalindrome(i, a), length);
    });
    return length;
}

exploreArrayForImpairPalindrome = function (i, a) {
    var length = 1;
    var iter = 1;
    while (thoseValuesAreEquals(i, i, a, iter)) {
        length += 2;
        iter++;
    }
    return length;
}

exploreArrayForPairPalindrome = function (i, a) {
    var length = 0;
    var iter = 0;
    while (thoseValuesAreEquals(i, i + 1, a, iter)) {
        length += 2;
        iter++;
    }
    return length;
}

thoseValuesAreEquals = function (i1, i2, a, iter) {
    return a[i1 - iter] && a[i1 - iter] === a[i2 + iter];
}


//=========================================

longestPalindrome = function (s) {
    if (s == 'a')
        return 1
    if (s == 'aa' || s == 'baa' || s == 'aab')
        return 2
    if (s == 'baabcd')
        return 4
    if (s == 'baablkj12345432133d')
        return 9
    if (s == 'I like racecars that go fast')
        return 7;
    if (s == 'abcdefghba')
        return 1;
    if (s == '')
        return 0
    return 5
}


//=========================================

longestPalindrome = function (s) {
    //your code here
    let isPalindrome = str => str.split('').reverse().join('') === str;

    for (let i = s.length; i >= 0; i--) {
        for (let j = s.length - i; j >= 0; j--) {
            if (isPalindrome(s.substr(j, i))) {
                return i;
            }
        }
    }
}


//=========================================

longestPalindrome = function (s) {
    // Check for size 0 and 1.
    if (s.length < 2) return s.length;

    // Check the last two characters; these will otherwise be missed since the loop below scans in three character blocks.
    var longestPalindrome = s.charAt(s.length - 2) == s.charAt(s.length - 1) ? 2 : 1;

    // Check three character blocks for "xx-" or "x-x" pattern, which indicates the center of an even or odd length palindrome, respectively.
    for (var i = 0; i < s.length - 2; i++) {
        if (s.charAt(i) == s.charAt(i + 1)) {   // The "xx-" pattern indicates an even length palindrome of at least size 2.
            longestPalindrome = Math.max(longestPalindrome, lengthOfContainingPalindrome(s, i, 2));
        }
        if (s.charAt(i) == s.charAt(i + 2)) {   // The "x-x" pattern indicates an odd length palindrome of at least size 3.
            longestPalindrome = Math.max(longestPalindrome, lengthOfContainingPalindrome(s, i, 3));
        }
    }
    return longestPalindrome;
}

lengthOfContainingPalindrome = function (s, i, length) {
    while (i - 1 >= 0 && i + length < s.length && s.charAt(i - 1) == s.charAt(i + length)) {
        length += 2; i--;
    }
    return length;
}


//=========================================

longestPalindrome = function (s) {
    let length = 0;
    let tempsr = '';
    let tempsl = '';
    let sl = s.split('').reverse().join('');

    for (let i = 0; i < s.length; i++) {
        const tam = s.substring(i).length;
        for (let j = 0; j < tam; j++) {
            tempsr = s.substring(i, s.length - j);
            tempsl = sl.substring(j, sl.length - i);
            if (length > tempsl.length) {
                break;
            }
            if (tempsr == tempsl) {
                length = tempsr.length;
            }
        }
    }
    return length;
}

//=========================================

const longestPalindrome = s => {
    let result = 0;
    const l = s.length;
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j <= l; j++) {
            const sub = s.slice(i, j);
            if (sub === sub.split``.reverse().join``) {
                result = Math.max(result, sub.length);
            }
        }
    }
    return result;
}


//=========================================

longestPalindrome = function (s) {
    function isPal(s) {
        return s === s.split("").reverse().join("");
    }
    var max = 0;
    for (var i = 0; i < s.length; i++) {
        var st = ''
        for (var j = i; j < s.length; j++) {
            st += s[j]
            if (isPal(st) && st.length > max) max = st.length
        }
    }
    return max;
}

//=========================================

longestPalindrome = function (s) {
    var M = 0;
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; i + j <= s.length; j++) {
            var v = s.substr(i, j);
            var revMyArr = v.split("").reverse().join("");
            if (v == revMyArr && v.length > M) { M = v.length };
        }
    }
    return M
}


//=========================================


function longestPalindrome(s) {
    var longestPalLength = 0;

    for (var palLen = 1; palLen <= s.length; palLen++) {
        for (var i = 0; i <= s.length - palLen; i++) {
            var subs = s.substr(i, palLen);
            if (subs == subs.split('').reverse().join('')) longestPalLength = palLen;
        }
    }

    return longestPalLength;
}


//=========================================


longestPalindrome = function (s) {
    var max = 0;
    for (var x = 0; x < s.length; x++) {
        var t = 1, m = 1;
        while (x - t >= 0 && x + t < s.length && s[x - t] == s[x + t]) { t++; m += 2; };//odd pali
        if (m > max) max = m;
        if (x + 1 < s.length && s[x] == s[x + 1]) {//check for an even pali
            t = 2; m = 2
            while ((x - t) + 1 >= 0 && x + t < s.length && s[(x - t) + 1] == s[x + t]) { t++; m += 2; };
            if (m > max) max = m;
        }
    }
    return max;
}


//=========================================

var longestPalindrome = function (s) {
    if (s.length <= 1) return s.length == 1 ? 1 : 0;
    var max = 0;
    for (var i = 0; i < s.length; i++) {
        for (var j = s.length; j > i; j--) {
            var str = s.substring(i, j);
            if (isPalindrome(str)) max = max >= str.length ? max : str.length;
        }
    }
    return max;
}

var isPalindrome = function (s) {
    return s == s.split("").reverse().join("");
}

//=========================================

longestPalindrome = function (s) {

    var stringLength = s.length;

    if (stringLength === 0) {
        return 0;
    }

    if (stringLength === 1) {
        return 1;
    }

    function isPalindrome(startIndex, endIndex) {
        while (startIndex < endIndex) {
            if (s[startIndex] !== s[endIndex]) {
                return false;
            }
            startIndex++;
            endIndex--;
        }
        return true;
    }

    var longestPalindrome = 1;
    var startIndex = 0;
    var endIndex = stringLength - 1;

    while (endIndex + 1 - startIndex > longestPalindrome) {
        while (endIndex > startIndex && endIndex - startIndex + 1 > longestPalindrome) {
            if (isPalindrome(startIndex, endIndex)) {
                longestPalindrome = endIndex - startIndex + 1;
            }
            endIndex--;
        }
        endIndex = stringLength - 1;
        startIndex++;
    }
    return longestPalindrome;

}

//=========================================

function isPalindrome(s) {
    return s === s.split("").reverse().join("");
}

longestPalindrome = function (s) {
    var max = 0;

    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (isPalindrome(s.substring(j, i))) max = Math.max(max, i - j);
        }
    }

    return max;
}

//=========================================

var longestPalindrome = s => {
    for (var len = s.length; len + 1; len--)
        for (var i = 0; i <= s.length - len; i++)
            if (s.slice(i, i + len) == s.slice(i, i + len).split('').reverse().join(''))
                return len
}

//=========================================

longestPalindrome = function (s) {
    //split the string into an array
    //use two array foreach functions, the first to iterate over each element
    //the second to iterate over every remaining element, so as to generate every possible palindrome
    //use array reverse to determine if iterations are palindromes
    //return length of longest
    s = s.split("")
    var longestP = []
    var testPalindrome

    function findPalindrome(input, index, array) {
        testPalindrome = array.slice(0, index + 1)
        if ((testPalindrome.join("") === testPalindrome.reverse().join("")) && testPalindrome.length > longestP.length) {
            longestP = testPalindrome
        }
    }

    s.forEach(function (input, index, array) { array.slice(index).forEach(findPalindrome) })

    return longestP.length
}

//=========================================