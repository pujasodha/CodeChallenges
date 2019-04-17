function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
        if (n % i == 0) d++;
    }

    return d;
}
// ==================================

function getDivisorsCnt(n) {
    var cnt = 1;
    for (var i = 0; i <= n / 2; ++i)
        if (n % i == 0)
            ++cnt;
    return cnt;
}

// ==================================

function getDivisorsCnt(n) {
    var div = 0;
    for (var i = 1; i <= n; i++) if (n % i == 0) div++;
    return div;
}

// ==================================

function getDivisorsCnt(n) {
    var num = 0;
    if (n == 1) return 1;
    if (n % Math.sqrt(n) == 0) num++;
    for (var i = 1; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            num += 2;
        }
    }
    return num;
}


// ==================================

function getDivisorsCnt(n) {
    var d = 0;
    for (var i = 1; i <= n; i++) {
        if (!(n % i)) d++;
    }
    return d;
}

// ==================================

function getDivisorsCnt(n) {
    for (var total = 0, i = 1, len = n; i <= len; total += (n % i++) ? 0 : 1);
    return total;
}

// ==================================

function getDivisorsCnt(n) {
    if (n === 1) return n

    // Use formuls http://vk.cc/4G1m8t
    let divArr = [[2, 0]] // 'divisor', 'number'
    let div = divArr[0][0] // first divisor

    while (n > 1) {
        if (n % div === 0) {
            for (let i = 0; divArr.length; i++) {
                if (divArr[i][0] === div) {
                    divArr[i][1] += 1
                    break
                } else {
                    if (i === divArr.length - 1) {
                        divArr.push([div, 1])
                        break
                    }
                }
            }
            n /= div
        } else {
            div += 1
        }
    }

    for (let i = 0; i < divArr.length; i++) {
        n *= divArr[i][1] + 1
    }

    return n
}

// ==================================

function getDivisorsCnt(n) {
    const halfCount = Array
        .from({ length: Math.sqrt(n) }, (v, k) => k + 1)
        .reduce((a, b) => a + (n % b == 0), 0)
        ;
    return 2 * halfCount - (Math.sqrt(n) % 1 == 0);
}


// ==================================
// ==================================
// ==================================