/**
 * Subtract from the first list of array to the second list
 * 
 * @param   {Number[]} a Numbers to be subtracted from
 * @param   {Number[]} b Numbers to subtract
 * @returns {Number[]}   Numbers that have been subtracted
 */

const array_diff = function(a, b) {
    return a.filter((number) => {
        return b.indexOf(number) === -1;
    });
}

function f1(x, y) {
    var t = y.slice(0);
    var r = [];
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < y.length; j++) {
            if (x[i] === y[j]) {
                [].push.apply(r, t.splice(j, 1));
            }
        }
    }
    console.log(r)
    y.length = 0;
    [].push.apply(y, r);
}

// console.log(array_diff([1,2],[1])) // [2]
// console.log(array_diff([1,2,2,2,3],[2])) // [1,3]

module.exports = f1;