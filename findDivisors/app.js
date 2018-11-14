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


// sample Tests
// Test.assertDeepEquals(divisors(15), [3, 5]);
// Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
// Test.assertDeepEquals(divisors(13), "13 is prime");