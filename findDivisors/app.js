function divisors(integer) {

    var numDivisors = [];

    for (i = 2; i <= (integer - 1); i+=1) {
        if ((integer % 1) === 0) {
            numDivisors.push(i);
        }
    }

    if (numDivisors.length === 0){
        return `${integer}   is prime`
    } else {
        return numDivisors
    }
    // PUJA first attempt
    var numDivisors = [], i;

    for (i = 2; i <= integer; i++) {
        while ((integer % i) === 0) {
            numDivisors.push(i);
            integer /= i;
        }
    }
    return numDivisors;
    
};

function divisors2(integer) {
    
    let array = [], i;

    for(i = 2; i <= (integer -1); i+=1) {
        if((integer % i) === 0) {
            array.push(i);
        }
    }

    if (array.length === 0){
        return `${integer} is prime`;
    } else {
        return array;
    }
}

console.log(divisors2(25));

// sample Tests
// Test.assertDeepEquals(divisors(15), [3, 5]);
// Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
// Test.assertDeepEquals(divisors(13), "13 is prime");


// ================================================ ONLINE ANSWERS ========================================= //
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};

// ==== //
function divisors(integer) {
    var divs = [];

    for (var i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divs.push(i);
        }
    }

    return divs.length ? divs : integer + ' is prime';
};

// ==== //

function divisors(integer) {
    for (var div = [], i = 2; i < integer; i++) if (integer % i == 0) div.push(i);
    return div.length > 0 ? div : integer + " is prime";
}

// ==== //

function divisors(x) {
    var result = [];
    for (var a = 2; a * a <= x; ++a) {
        if (x % a == 0) {
            var b = x / a;
            result.push(a);
            if (b != a) {
                result.push(b);
            }
        }
    }
    if (result.length == 0) {
        return x + ' is prime';
    }
    result.sort(function (a, b) {
        return a - b;
    });
    return result;
};

// ==== //

function divisors(integer) {
    let d = [];
    for (i = 2; i <= Math.floor(Math.sqrt(integer)); i++) {
        let n = integer / i;
        if (n == Math.floor(n)) {
            d.push(i);
            d.push(n);
        };
    };
    return d.length === 0 ? `${integer} is prime` : d.sort((a, b) => a - b);
};

// ==== // 

function divisors(integer) {
    var divisors = [];
    for (var i = 2; i < integer - 1; i++) {
        if (integer % i === 0) divisors.push(i);
    }
    if (divisors.length === 0) return '' + integer + ' is prime';
    return divisors;
}

