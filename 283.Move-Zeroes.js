// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/*[
   * @param {number[]} nums
   * @return {void} do not return anything, modify nums in-place instead.
   */
var  moveZeroes = function(nums) {
  var i = 0;
  var len = nums.length;
  while (i < len) {
    if (nums[i] === 0) {
      nums.splice(i,1);
      nums.push(0);
      len -= 1;
    } else {
      i++;
    }
  }
};


