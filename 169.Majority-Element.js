// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var storage = {};
    var half = nums.length/2;
    var i;
    var num;
   
    for (i = 0; i < nums.length; i++) {
        num = nums[i];
        storage[num] = storage[num] ? storage[num] + 1 : 1;

        if (storage[num] > half) {
            return +num;
        }
    }
};


