function multiply(a, b) {
    var aa = a.split('').reverse();
    var bb = b.split('').reverse();

    var stack = [];

    for (var i = 0; i < aa.length; i++) {
        for (var j = 0; j < bb.length; j++) {
            var m = aa[i] * bb[j];
            stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
        }
    }

    for (var i = 0; i < stack.length; i++) {
        var num = stack[i] % 10;
        var move = Math.floor(stack[i] / 10);
        stack[i] = num;

        if (stack[i + 1])
            stack[i + 1] += move;
        else if (move != 0)
            stack[i + 1] = move;
    }


    return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}

// =========================================

/**
 * Multiply two very big numbers passed as string.
 * @param {string} rawA
 * @param {string} rawB
 * @return {string}
 */
function multiply(rawA, rawB) {
    const a = prepareTerm(rawA);
    const b = prepareTerm(rawB);

    return formatResult(carryValues(computeSubProducts(a, b)));
}

/**
 * Convert a string to an array of digits, then reverse its order
 * so the least significant digit comes first (to simplify looping).
 * e.g. '13' => [3, 1]
 * @param {string} num
 * @param {array<number>}
 */
function prepareTerm(num) {
    return num.split('').map(digit => parseInt(digit, 10)).reverse();
}

/**
 * Compute the sums of the subproducts of the two terms.
 * e.g. [3, 2] * [5, 4] => [(3 * 5), (3 * 4) + (2 * 5), (2 * 4)] => [15, 22, 8]
 * @param {array<number>} a
 * @param {array<number>} b
 * @return {array<number>}
 */
function computeSubProducts(a, b) {
    const products = [];

    for (let i = 0; i < a.length; i++) {
        let da = a[i];

        for (let j = 0; j < b.length; j++) {
            let db = b[j];

            let k = i + j;
            if (k >= products.length) products.push(0);

            products[k] += da * db;
        }
    }

    return products;
}

/**
 * Turn the array of sub-products into an array of digits, carrying the values over.
 * Note that the last item in the returned array may be a number rather than a single digit.
 * e.g. [15, 22, 8] => [5, (22 + 1), 8] => [5, 3, (8 + 2)] => [5, 3, 0, 1]
 * @param {array<number>} products
 * return {array<number>}
 */
function carryValues(products) {
    return products.reduce((digits, prod, i) => {
        // Push the current digit
        digits.push(prod % 10);

        // Carry the value
        const val = Math.floor(prod / 10);
        if (i + 1 < products.length) {
            products[i + 1] += val;
        } else {
            digits.push(val);
        }

        return digits;
    }, []);
}

/**
 * Turn the digits array into the expected result string
 * making sure to strip any leading zeros.
 * e.g. [5, 3, 0, 1] => '1035'
 * @param {array<number>} digits
 * @return {string}
 */
function formatResult(digits) {
    // Reverse digits array and turn it into a string
    const result = digits.reverse().map(d => d.toString()).join('');

    // Remove leading zeros
    return result.replace(/^0*(\d+)$/, '$1');
}

// =========================================

function multiply(a, b) {
    return a.split('').reduceRight((p, a, i) =>
        b.split('').reduceRight((p, b, j) => {
            const mul = (a - '0') * (b - '0');
            const p1 = i + j;
            const p2 = p1 + 1;
            const sum = mul + valOrZero(p[p2]);

            p[p1] = valOrZero(p[p1]) + Math.floor(sum / 10);
            p[p2] = sum % 10;

            return p;
        }, p)
        , []).join('').replace(/^0+(?=\d)/, '');
}

function valOrZero(v) {
    return v || 0;
}

// =========================================

function multiply(a, b) {
    return require('child_process')
        .execSync(`python -c "print(${a.replace(/^0+/, "") || 0}*${b.replace(/^0+/, "") || 0})"`)
        .toString()
        .replace("\n", "");
}

// =========================================

var multiply = (a, b, c = (i) => i[0] == '0' ? c(i.slice(1, i.length)) : i, z = c(a).split("").reverse(), y = c(b).split("").reverse(), r = new Array, k = 0, p = z.map((f, g) => { y.map((h, j) => { k = g + j, r[k] = z[g] * y[j] + (k >= r.length ? 0 : r[k]); if (r[k] > 9) r[k + 1] = Math.floor(r[k] / 10) + (k + 1 >= r.length ? 0 : r[k + 1]), r[k] -= Math.floor(r[k] / 10) * 10; }); }), _ = !r.length ? '0' : r.reverse().join('')) => _;

// =========================================

function multiply(a, b) {
    return a.split('').reduceRight(function (pa, na, i) {
        return b.split('').reduceRight(function (pb, nb, j) {
            var mul = (na - '0') * (nb - '0');
            var p1 = i + j;
            var p2 = p1 + 1;
            var sum = mul + (pb[p2] | 0);

            pb[p1] = (pb[p1] | 0) + ~~(sum / 10);
            pb[p2] = sum % 10;

            return pb;
        }, pa);
    }, []).join('').replace(/^0+(?=\d)/, '');
}

// =========================================

const { BigInteger } = require('bignumber');

function multiply(a, b) {
    return new BigInteger(a).multiply(new BigInteger(b)).toString();
}


// =========================================

function multiply(a, b) {
    a = a.split('');
    b = b.split('');
    let c = Array.from({ length: a.length + b.length - 1 }, (v) => 0);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            c[i + j] += a[i] * b[j];
        }
    }
    for (let i = c.length - 1; i > 0; i--) {
        c[i - 1] += (c[i] / 10 | 0);
        c[i] = c[i] % 10;
    }
    while (c[0] == 0) c.shift();
    return c.join('') || '0';
}

// =========================================

const multiply = (a, b) => {
    const stack = [];
    a = a.split``.reverse();
    b = b.split``.reverse();

    for (let i = 0, la = a.length; i < la; i++) {
        for (let j = 0, lb = b.length; j < lb; j++) {
            const m = a[i] * b[j];
            const s = stack[i + j];
            stack[i + j] = s ? s + m : m;
        }
    }

    for (let i = 0, l = stack.length; i < l; i++) {
        const move = Math.floor(stack[i] / 10);
        stack[i] = stack[i] % 10;
        if (stack[i + 1]) stack[i + 1] += move;
        else if (move > 0) stack[i + 1] = move;
    }

    return stack.reverse().join``.replace(/^(0(?!$))+/, '');
}

// =========================================

/**
 * Transform a string of digits into an array of digit strings
 * @param {string} string
 */
function reverse(string) {
    return string.split('').reverse()
}

/**
 * Multiplies large numbers as strings
 * @param {string} a - string of digits
 * @param {string} b - string of digits
 */
function multiply(a, b) {
    const long = a.length >= b.length ? reverse(a) : reverse(b);
    const short = a.length >= b.length ? reverse(b) : reverse(a);
    const result = [];

    // start looping through the number array of the long number
    for (var base = 0; base < long.length; base++) {
        // current long number
        const baseLong = long[base];

        // loop through the numbers array of the short number
        for (var i = 0; i < short.length; i++) {
            // current short number
            const baseShort = short[i];
            // product for long by short numbers
            const temp = baseLong * baseShort;
            // string array of product
            const flipped = reverse(temp.toString());

            // loop through the a numbers array of the product
            for (var j = 0; j < flipped.length; j++) {
                // starting position for product
                const pos = i + j + base;
                // number in product
                const number = parseInt(flipped[j]);
                // existing number at current base
                const start = result[pos] || 0;
                // update the result at the current base
                result[pos] = start + number;
                // check if number bleeds into next base
                const carryOver = Math.floor(result[pos] / 10);

                // if carryOver
                if (carryOver) {
                    // apply remainder to current base position
                    const remainder = result[pos] % 10;
                    result[pos] = remainder;

                    // apply carry over to next base
                    const start = result[pos + 1] || 0;
                    result[pos + 1] = start + carryOver;
                }
            }
        }
    }

    // check to see if there are hanging zeros
    let zeroIndex = result.length - 1;
    while (result[zeroIndex] === 0) zeroIndex--

    // if they were all zeros
    if (zeroIndex < 0) return '0'

    // return non-zero section, flip it, join it
    return result.slice(0, zeroIndex + 1).reverse().join('');
}

// =========================================

function multiply(a, b) {
    a = String(a).split("").map(Number).reverse();
    b = String(b).split("").map(Number).reverse();
    var i, j, r = Array.from(a).concat(Array.from(b)).fill(0);
    for (i = 0; i < a.length; i++)
        for (j = 0; j < b.length; j++)
            r[i + j] += a[i] * b[j];
    for (i = 0; i < r.length - 1; i++) {
        r[i + 1] += Math.floor(r[i] / 10);
        r[i] %= 10;
    }
    r.reverse();
    while (r[0] === 0) r.shift();
    return r.join("") || "0";
}

// =========================================
function normalization(a, b) {
    // Разделение целой и дробной части
    a_split = a.split(".")
    b_split = b.split(".")

    // создание массивов целых частей
    a_int = a_split[0].split("")
    b_int = b_split[0].split("")

    // создание массивов дробных частей
    a_fraction = (a_split[1] || "").split("")
    b_fraction = (b_split[1] || "").split("")

    // приведение массивов целых частей к одинаковой длине
    if (a_int.length > b_int.length) {
        arr = new Array(a_int.length - b_int.length)
        b_int = arr.concat(b_int)
    }
    else {
        arr = new Array(b_int.length - a_int.length)
        a_int = arr.concat(a_int)
    }

    // приведение массивов дробных частей к одинаковой длине
    if (a_fraction.length > b_fraction.length) {
        arr = new Array(a_fraction.length - b_fraction.length)
        b_fraction = b_fraction.concat(arr)
    }
    else {
        arr = new Array(b_fraction.length - a_fraction.length)
        a_fraction = a_fraction.concat(arr)
    }

    // соединение массивов для дробной и целой части
    a = a_int.concat(a_fraction)
    b = b_int.concat(b_fraction)

    return [a, b, a_int.length]
}

function trim(number) {// удаление незначащих нулей
    // в начале
    while (number[0] == "0" & number[1] != ".") {
        number = number.slice(1, number.length)
    }

    if (number.includes(".")) {
        // в конце
        while (number[number.length - 1] == "0") {
            number = number.slice(0, number.length - 1)
        }
        // удаление точки если она осталась в конце
        if (number[number.length - 1] == ".") {
            number = number.slice(0, number.length - 1)
        }
    }

    return number
}

function plus(a, b) {// складывает два длинных положительных числа
    lst = normalization(a, b)
    a = lst[0]
    b = lst[1]
    int_len = lst[2]

    // создание массива для результата
    c = new Array(a.length + 1)

    // вычисление результата
    mem = 0
    for (i = a.length - 1; i >= 0; i--) {
        num = Number(a[i] || 0) + Number(b[i] || 0) + mem
        c[i + 1] = num % 10
        mem = (num - num % 10) / 10
    }
    if (mem > 0) { c[0] = mem }

    // вставка точки
    c.splice(int_len + 1, 0, ".")

    c = c.join("")

    c = trim(c)

    return c
}


function nulls(n) { //создаёт строку и нулей
    if (n < 1) return ""
    nul = "0"
    for (i = 1; i < n; i++) { nul += "0" }
    return nul
}

function toInteger(number) {
    indx = number.indexOf(".")
    if (indx == -1) return [number, 0]
    sh = number.length - indx - 1
    return [shift(number, sh * (-1)), sh]
}

function shift(number, n) { // сдвигает точку
    if (n == 0) return number
    l = number.length
    indx = number.indexOf(".")
    if (n < 0) { // сдвиг в право
        n = n * (-1)
        if (indx == -1) {
            return number + nulls(n)
        }
        fraction_len = l - indx - 1
        if (fraction_len > n) {
            a = number.slice(0, indx)
            b = number.slice(indx + 1, indx + n + 1)
            c = number.slice(indx + n + 1, l)
            s = a + b + "." + c
            return trim(s)
        }
        a = number.slice(0, indx)
        b = number.slice(indx + 1, l)
        c = nulls(n - fraction_len)
        s = a + b + c
        return trim(s)
    } else { // сдвиг в лево
        if (indx == -1) {
            if (n < l) {
                a = number.slice(0, l - n)
                b = number.slice(l - n, l)
                return a + "." + b
            }
            s = "0." + nulls(n - l) + number
            return trim(s)
        }
        if (n < indx) {
            a = number.slice(0, indx - n)
            b = number.slice(indx - n, indx)
            c = number.slice(indx + 1, l)
            s = a + "." + b + c
            return s
        }
        a = number.slice(0, indx)
        b = number.slice(indx + 1, l)
        s = "0." + nulls(n - indx) + a + b
        return s
    }
}

function multiply(a, b) {// умножает длинных чисел

    a = trim(a)
    b = trim(b)

    // сведение отрицательных чисел к неотрицательным
    sign = ""
    if (a[0] == "-" & b[0] != "-") {
        a = a.slice(1, a.length)
        sign = "-"
    }
    if (b[0] == "-" & a[0] != "-") {
        b = b.slice(1, b.length)
        sign = "-"
    }
    if (b[0] == "-" & a[0] == "-") {
        a = a.slice(1, a.length)
        b = b.slice(1, b.length)
    }

    lst = toInteger(b)
    b = lst[0]
    shft = lst[1]

    result = "0"

    for (f = 0; f < b.length; f++) {
        m = "0"
        for (g = 0; g < Number(b[f]); g++) {
            m = plus(m, a)
        }
        m = shift(m, f - b.length + 1)
        result = plus(result, m)
    }
    result = shift(result, shft)
    result = trim(result)
    result = sign + result
    if (result == "") return "0"
    return result
}
// =========================================
// =========================================