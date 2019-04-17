/**
 * Subtract from the first list of array to the second list
 * 
 * @param   {Number[]} a Numbers to be subtracted from
 * @param   {Number[]} b Numbers to subtract
 * @returns {Number[]}   Numbers that have been subtracted
 */

const array_diff = function(a, b) {
    let i;
    for(i = 0; i < b.length; i+=1) {
        let j;
        for(j = 0; j < a.length; j+=1) {
            while(b[i] === a[j]) {
                a.splice(j, 1);
            }
        }
    }

    return a;
}

// console.log(array_diff([1,2],[1])) // [2]
// console.log(array_diff([1,2,2,2,3],[2])) // [1,3]

module.exports = array_diff;