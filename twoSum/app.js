/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


console.time('twoSum');
var twoSum = function(nums, target) {

    for(var i = 0; i < nums.length; i+=1) {
        for(var z = i+1; z< nums.length; z+=1) {
            if(nums[i] === target - nums[z]) {
                return [i, z];
            }
        }
    }
    

};
console.timeEnd('twoSum');

var nums = [2, 7, 11, 15];
var target = 26;

console.log(twoSum(nums, target));