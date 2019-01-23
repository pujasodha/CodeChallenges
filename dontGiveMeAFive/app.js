function dontGiveMeFive(start, end) {
    //create new array
    var newArray = [];
    // loop thru the start number given and end number given and push those numbers into the new array
    for (var i = start; i <= end; i++) {
        newArray.push(i);
    }

    // map the newArray
    newArray = newArray.map(function(val) {
        return '' + val;
    });

    // filter thru the new array, if theres a 5 do not include and return it
    newArray = newArray.filter(function(val) {
        for (var i = 0; i < val.length; i++) {
            if (!val.includes('5')) {
                return val;
            }
        }
    });
    // return just the length of the new arrray
    return newArray.length;
}

// ================================================ ONLINE ANSWERS ========================================= //
function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (!/5/.test(i)) {
            count++;
        }
    }
    return count;
}

// ================================================ ONLINE ANSWERS ========================================= //
function dontGiveMeFive(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
}

// ================================================ ONLINE ANSWERS ========================================= //
dontGiveMeFive = (s, e) => {
    for (var cnt = 0; s <= e; ++s) (s + '').includes('5') || cnt++;
    return cnt;
};
