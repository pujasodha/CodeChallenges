/**
 * Find how many multiples exist for a number
 * 
 * @param   {Number} n A number to determin the amount of multiples
 * @returns {Number}   The amount of multiples a number has
 */

const getDivisorsCnt = function (n){

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

console.log(getDivisorsCnt(12));
module.exports = getDivisorsCnt; 

/**
 * 
    let i, count = 1;

    for(i = 0; i < n; i+=1) {
        if(n % i === 0) {
            count+=1;
        }
    }

    return count;
 */