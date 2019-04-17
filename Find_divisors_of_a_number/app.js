/**
 * Find how many multiples exist for a number
 * 
 * @param   {Number} n A number to determin the amount of multiples
 * @returns {Number}   The amount of multiples a number has
 */

const getDivisorsCnt = function (n){

    let i, count = 1;

    for(i = 0; i <= n/2; i+=1) {
        if(n % i === 0) {
            count+=1;
        }
    }

    return count;
}

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