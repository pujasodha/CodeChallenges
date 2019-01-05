function filter_list(l) {
    // Return a new array with the strings filtered out

    //set emptry number array
    var num = [];

    //for loop for type of element - this one being a number - to loop through given array to find the numbers to push to the array
    for (var i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number') {
            num.push(l[i]);
        }
    }
    //return the new array
    return num;
}

// ================================================ ONLINE ANSWERS ========================================= //
function filter_list(l) {
    return l.filter(function(v) {
        return typeof v == 'number';
    });
}

// =========================================== //

function filter_list(l) {
    return l.filter((v) => typeof v == 'number');
}

// =========================================== //

const filter_list = (l) => l.filter((c) => typeof c === 'number');

// =========================================== //// ==== //

function filter_list(l) {
    return l.filter((e) => Number.isInteger(e));
}

// =========================================== //// ==== //

function filter_list(l) {
    return l.filter(function(elem) {
        return typeof elem != 'string';
    });
}

// =========================================== //

function filter_list(l) {
    var res = [];
    for (var item = 0; item < l.length; item++) {
        if (typeof l[item] === 'number') {
            res.push(l[item]);
        }
    }
    return res;
}
