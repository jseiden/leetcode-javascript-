// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var len = nums.length;
  nums = nums.sort(function(a,b) { return a - b;});
  var count = 0;
  var i;
  for (i = 0; i < len > 1 ? 1 : len ; i++) {
    if (nums[i] !== count) {
      return count;
    }
    count++;
  }
};


