/**
 * The number of times a vowel appears
 * 
 * @param   { String } str String to be filtered
 * @returns { Number }     How many times vowels appear
 */

module.exports = function(str) {
    var vowelsCount = str.split("").reduce(function (total, char) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            return total + 1;
        } else {
            return total;
        }
    }, 0);

    return vowelsCount;
}

var getCount2 = function(str) {
    return str.split("").reduce(function (total, char) {
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ? total + 1 : total
    }, 0);
}

console.log(getCount2("abracadabra"));
