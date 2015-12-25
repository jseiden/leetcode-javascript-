// Given an array of integers, every element appears three times except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var storage = {};
  var i;
  var num;
  for (i = 0; i <nums.length; i++) {
    num = nums[i];
    if (storage[num] === 2) {
      delete storage[num];
    } else {
      storage[num] = storage[num] ? 2 : 1;
    }
  }
  return +Object.keys(storage)[0];
    
};

