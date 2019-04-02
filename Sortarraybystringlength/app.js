/**
 * Sort array by length of each item
 * 
 * @param   { String[] } array Array of items in different length
 * @returns { String[] }       Array of same items with increasing length
 */

module.exports = function(array) {
// var sortByLength = function(array) {
    let i;
    for(i = 0; i < array.length; i+=1) {
        let j;
        for(j = 0; j < array.length-1; j+=1) {
            if(array[j].length > array[j+1].length) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
};

// console.log(sortByLength(["Beg", "Life", "I", "To"]));