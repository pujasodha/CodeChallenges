
function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);
}

//========================================

function scramble(str1, str2) {
    var hashtab = [...new Array(256)].map(x => 0);

    str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
    str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);

    hashtab = hashtab.filter(x => x > 0);

    return hashtab.length == 0;
}

//========================================

function scramble(strToBeChecked, strToCheckFor) {
    let numLetters = {}

    for (const letter of strToCheckFor) {
        if (numLetters[letter]) numLetters[letter]++
        else numLetters[letter] = 1
    }

    for (const letter of strToBeChecked) {
        if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--
    }

    for (const key in numLetters) {
        if (numLetters[key] !== 0) return false
    }

    // Only reaches this far if all good
    return true
}

//========================================

function scramble(str1, str2) {
    var count = Object.create(null);

    Array.prototype.forEach.call(str1, function (a) {
        count[a] = (count[a] || 0) + 1
    })

    return Array.prototype.every.call(str2, function (a) {
        return count[a]--;
    })
}

//========================================

function scramble(str1, str2) {
    let alph = str1.split('').reduce((p, c) => { return p[c] = (p[c] || 0) + 1, p; }, {});
    return str2.split('').every(v => alph[v]-- > 0);
}

//========================================

function scramble(str1, str2) {
    let str1Hash = {}
    let containsScramble = true
    for (const char1 of str1) {
        str1Hash[char1] ? str1Hash[char1] += 1 : str1Hash[char1] = 1
    }

    for (const char2 of str2) {
        str1Hash[char2] ? str1Hash[char2] -= 1 : containsScramble = false
    }

    return containsScramble
}

//========================================

// String String -> Boolean
// returns true if a portion of str1 characters 
// can be rearranged to match str2, 
// otherwise returns false.

function scramble(str1, str2) {
    return allLettersQ(str1, str2) && enoughLettersQ(str1, str2);
}

// String String -> Boolean
// returns false if there are not enough letters of str2 in str1
function enoughLettersQ(str1, str2) {
    let table1 = makeCharTable(str1), table2 = makeCharTable(str2);
    for (let i = 0; i < table1.length; i++) {
        if (table1[i] < table2[i]) return false;
    }
    return true;
}

// String String -> Boolean
// returns false if str1 doesn't include characters of str2
function allLettersQ(str1, str2) {
    for (let char of str2) {
        if (!str1.includes(char)) return false;
    }
    return true;
}

// String -> Array
// creates alphabet table that counts all letters
function makeCharTable(str) {
    let table = new Array(26).fill(0);
    for (let char of str) {
        if (char == "a") table[0]++;
        if (char == "b") table[1]++;
        if (char == "c") table[2]++;
        if (char == "d") table[3]++;
        if (char == "e") table[4]++;
        if (char == "f") table[5]++;
        if (char == "g") table[6]++;
        if (char == "h") table[7]++;
        if (char == "i") table[8]++;
        if (char == "j") table[9]++;
        if (char == "k") table[10]++;
        if (char == "l") table[11]++;
        if (char == "m") table[12]++;
        if (char == "n") table[13]++;
        if (char == "o") table[14]++;
        if (char == "p") table[15]++;
        if (char == "q") table[16]++;
        if (char == "r") table[17]++;
        if (char == "s") table[18]++;
        if (char == "t") table[19]++;
        if (char == "u") table[20]++;
        if (char == "v") table[21]++;
        if (char == "w") table[22]++;
        if (char == "x") table[23]++;
        if (char == "y") table[24]++;
        if (char == "z") table[25]++;
    }
    return table;
}

//========================================

function scramble(...strings) {
    const countLetters = s => s.split('').reduce((acc, c) => {
        acc[c] = acc[c] ? ++acc[c] : 1
        return acc
    }, {})
    const counts = strings.map(str => countLetters(str))
    return Object.keys(counts[1]).every(c => counts[0][c] >= counts[1][c])
}

//========================================

const scramble = (alphabet, word) => {
    let letters = {};
    for (let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i];
        letters[letter] = letters[letter] + 1 || 1;
    }

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letters[letter] <= 0 || letters[letter] === undefined) {
            return false;
        }
        letters[letter]--;
    }
    return true;
}

//========================================

function scramble(str1, str2) {
    var array1 = str1.split("").sort();
    var array2 = str2.split("").sort();
    var i = 0;
    for (var x = 0; i < array2.length && x <= array1.length; x++) {
        if (array2[i] === array1[x]) {
            i++;
        }
    }
    return (x <= array1.length);
}

//========================================


function scramble(str1, str2) {

    let arr1 = str1.split('').sort(),
        arr2 = str2.split('').sort(),
        prevIndex = 0

    return arr2.every(v => (prevIndex = arr1.indexOf(v, prevIndex) + 1) > 0)
}

//========================================

function scramble(str1, str2) {
    const count = [...str1].reduce((acc, v) => {
        acc[v] = (acc[v] || 0) + 1;
        return acc;
    }, {});
    return [...str2].every(v => count[v]-- > 0);
}

//========================================

function scramble(str1, str2) {
    var count = {};

    [].forEach.call(str1, function (a) {
        count[a] = (count[a] || 0) + 1;
    });

    return [].every.call(str2, function (a) {
        return count[a]--;
    });
}


//========================================

function scramble(str1, str2) {
    // build str1 map
    const str1Map = {};
    for (letter of str1) {
        str1Map[letter] = str1Map[letter] ? str1Map[letter] + 1 : 1;
    }

    // iterate over str2
    for (letter of str2) {
        // handle: not found
        if (!str1Map[letter] || str1Map[letter] === 0) {
            return false;
        }

        // handle: found  
        str1Map[letter]--;
    }

    return true;
}

//========================================

function letterOccurrenceIndex(availableLetters) {
    const availableLetterIndex = {};

    for (let i = 0; i < availableLetters.length; i += 1) {
        const letter = availableLetters[i];
        availableLetterIndex[letter] = (availableLetterIndex[letter] || 0) + 1;
    };

    return availableLetterIndex;
}

function scramble(availableLetters, requiredLetters) {
    if (availableLetters.length < requiredLetters.length) return false;

    const availableLetterIndex = letterOccurrenceIndex(availableLetters);

    for (let i = 0; i < requiredLetters.length; i++) {
        const letter = requiredLetters[i];
        const availableOccurrences = availableLetterIndex[letter] || 0;
        if (availableOccurrences === 0) return false;
        availableLetterIndex[letter] = availableOccurrences - 1;
    }

    return true;
}

//========================================


function scramble(str1, str2) {
    const alphaArr = Array(26).fill(0);

    str2.split("").forEach(s => alphaArr[s.charCodeAt() - 97]++);
    str1.split("").forEach(s => alphaArr[s.charCodeAt() - 97]--);

    return alphaArr.every(v => v <= 0);
}


//========================================

const a = 'a'.charCodeAt()

function scramble(str1, str2) {
    const len1 = str1.length
    const len2 = str2.length

    if (len1 < len2) {
        return false
    }

    const arr2 = Array(26).fill(0)
    for (let i = 0; i < len2; i++) {
        arr2[str2.charCodeAt(i) - a]++
    }

    for (let i = 0, j = len2; i < len1; i++) {
        const chr1 = str1.charCodeAt(i) - a
        const num2 = arr2[chr1]

        if (num2) {
            if (--j === 0) {
                return true
            }

            arr2[chr1] = num2 - 1
        }
    }

    return false
}

//========================================

function scramble(str1, str2) {
    // excluding scramble in which size of str1
    // is less than size of str2
    if (str1.length < str2.length) return false;

    // stores the letters found
    let alphabet = {};

    // increases the number of times of a letter found
    for (let c of str1) alphabet[c] = alphabet[c] + 1 || 1;

    // decreases the number of times of a letter found
    for (let c of str2) {
        if (alphabet[c] === undefined) return false;
        if (--alphabet[c] < 0) return false;
    }

    return true;
}


//========================================

function scramble(str1, str2) {
    const obj = [].reduce.call(str2, (obj, char) => {
        obj[char] = obj[char] === undefined ? 1 : obj[char] + 1;

        return obj;
    }, {});

    let total = str2.length
    for (let i = 0; i < str1.length; i++) {
        if (obj[str1[i]] > 0) {
            --obj[str1[i]];
            --total;
        }

        if (total === 0) return true;
    }

    return false;
}

//========================================

function scramble(a, b) {
    if (a.length > 1000) return false
    let f = x => [...'' + x].sort().join(''), x = f(a), y = f(b), i = -1
    for (let c of y)
        while (x[++i] !== c)
            if (i === a.length)
                return false
    return true
}

//========================================

function scramble(str1, str2, map = {}) {
    for (var i = 0, pos; i < str2.length; i++) {
        if ((pos = str1.indexOf(str2[i], map[str2[i]] || 0)) < 0) break;
        map[str2[i]] = pos + 1;
    }
    return i === str2.length;
}

//========================================

const group = (coll, v) => { coll[v] = 1 + (coll[v] ? coll[v] : 0); return coll; };

const scramble = (str1, str2) => {
    const sup = str1.split('').reduce(group, {});
    const sub = str2.split('').reduce(group, {});

    for (const k in sub) {
        if (!sup[k] || sub[k] > sup[k]) {
            return false;
        }
    }

    return true;
}


//========================================

function scramble(str1, str2) {

    var arr1 = str1.split('');
    var arr2 = str2.split('');
    var obj = {};

    arr1.forEach(function (cur) {
        if (obj.hasOwnProperty(cur)) {
            obj[cur] = obj[cur] + 1;
        } else {
            obj[cur] = 1;
        }
    })

    for (var i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]] > 0) {
            obj[arr2[i]] = obj[arr2[i]] - 1;
        } else {
            return false;
        }
    }

    return true;
}


//========================================

function scramble(str1, str2) {
    array1 = str1.split("");
    array2 = str2.split("");

    array1.sort();
    array2.sort();
    let i = 0
    let startHere = 0
    //quick false
    while (i < array2.length) {
        if (!array1.includes(array2[i], startHere)) {
            return false
        }
        else {
            startHere = 1 + array1.indexOf(array2[i], startHere)
        }
        i++
    }
    return true
}

//========================================


function scramble(str1, str2) {
    const obj = {};
    for (let i = 0; i < str1.length; i += 1) {
        if (!obj[str1[i]]) {
            obj[str1[i]] = 1;
        } else {
            obj[str1[i]] += 1;
        }
    }
    for (let i = 0; i < str2.length; i += 1) {
        if (!obj[str2[i]]) {
            return false;
        } else if (obj[str2[i]] - 1 < 0) {
            return false;
        }
        obj[str2[i]] -= 1
    }
    return true;
}


//========================================


function scramble(str1, str2) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    for (var letter in alpha.split('')) {
        var r = new RegExp(alpha[letter], "g");
        if ((str1.match(r) || []).length < (str2.match(r) || []).length)
            return false;
    }
    return true;
}


//========================================


function scramble(s1, s2) {
    acc = {};
    for (let i = 0; i < s1.length; i++) {
        acc[s1[i]] = (acc[s1[i]] || 0) + 1;
    }
    for (let i = 0; i < s2.length; i++) {
        acc[s2[i]] = (acc[s2[i]] || 0) - 1
        if (acc[s2[i]] == -1) return false
    }
    return true;
}

//========================================

//function scramble(str1, str2) {
//  return str2.split('').reduce((o,c)=>o&&(a=str1)!==(str1=str1.replace(c,'')),!0);
//} Not fast enough but I like the code.

function scramble(str1, str2) {
    var obj = {};
    for (character of str1)
        obj[character] = obj[character] + 1 || 1;
    for (character of str2)
        if (!obj[character] || !obj[character]--)
            return !1;
    return !0;
}

//========================================


function scramble(str1, str2) {
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');

    let idx = -1;
    for (let i = 0; i < s2.length; ++i) {
        idx = s1.indexOf(s2[i], idx + 1);
        if (idx === -1) return false;
    }
    return true;
}
//========================================

function scramble(str1, str2) {
    var l = [...new Array(128)].map(x => 0);

    str2.split('').forEach(e => l[e.charCodeAt(0)]++);
    str1.split('').forEach(e => l[e.charCodeAt(0)]--);

    l = l.filter(x => x > 0);

    return l.length == 0;
}

//========================================

const scramble = (s1, s2) => !'abcdefghijklmnopqrstuvwxyz'.split('').some(l => filter(s2, l) > filter(s1, l));
const filter = (str, char) => str.split('').filter(l => l === char).length;

//========================================

function scramble(str1, str2) {
    let foundInStr1 = {};
    let foundInStr2 = {};

    for (let i = 0; i < str1.length; i++) {
        foundInStr1[str1[i]] = 0;
    }

    for (let i = 0; i < str1.length; i++) {
        foundInStr1[str1[i]]++;
    }

    for (let i = 0; i < str2.length; i++) {
        foundInStr2[str2[i]] = 0;
    }

    for (let i = 0; i < str2.length; i++) {
        foundInStr2[str2[i]]++;
    }

    for (var letter in foundInStr2) {
        if (foundInStr1[letter] === undefined || foundInStr1[letter] < foundInStr2[letter]) {
            return false;
        }
    }

    return true;
}


//========================================

const scramble = (str1, str2) => {
    const obj1 = {};
    const obj2 = {};
    str1.split('').forEach(item => obj1[item] ? obj1[item]++ : obj1[item] = 1);
    str2.split('').forEach(item => obj2[item] ? obj2[item]++ : obj2[item] = 1);
    return Object.keys(obj2).every(item => obj1[item] - obj2[item] >= 0);
}


//========================================
