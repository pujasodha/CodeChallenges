/**
 * Allowing only n number of the same items in the array, removing the rest.
 *
 * @param  { Array }  arr Array of items to be sorted through
 * @param  { Number } n   Amount of the same items allowed in the array
 * @return { Array }
 */

function deleteNth(arr,n){

  const obj = {}
  const filteredArr = [];

  arr.forEach(element => {
    // obj[element] = obj[element] ? obj[element]+=1 : 1;
    obj[element] = obj[element]+1 || 1;
    if(obj[element] <= n) {
      filteredArr.push(element);
    } 
  });

  return filteredArr;

}

// console.log(deleteNth([20,37,20,21], 1)); //[20,37,21
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]
