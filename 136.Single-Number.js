// Given an array of integers, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var storage = {};
  nums.forEach(function(num) {
    // delete key if num makes pair
    if (storage[num]) {
      delete storage[num];
    } else {
      storage[num] = 1;
    }
  });
  // return only key left
  return +Object.keys(storage)[0];
};

