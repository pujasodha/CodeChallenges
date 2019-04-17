function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

// =========================================

function array_diff(a, b) {
    return a.filter(function (v) { return b.indexOf(v) === -1 });
}

// =========================================

function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}

// =========================================

var array_diff = (a, b) => a.filter(item => b.indexOf(item) < 0)

// =========================================

function array_diff(a, b) {
    return a.filter(function (x) {
        var bool = true;
        b.forEach(function (y) {
            if (x == y) bool = false;
        });
        return bool;
    });
}

// =========================================

function array_diff(a, b) {
    return a.filter((val) => { return b.indexOf(val) == -1 ? val : undefined });
}

// =========================================

const array_diff = (a, b) => [...a.filter(x => !b.includes(x))];

// =========================================

let array_diff = (a, b) => {
    if (a instanceof Array && b instanceof Array) {
        return a.filter((val, i, arr) => b.indexOf(val) == -1);
    }
};

// =========================================

function array_diff(a, b) {
    return a.join("").replace(RegExp([b.join()], 'ig'), "").split("");
}