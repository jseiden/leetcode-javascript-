/*
 *
Given an array with n objects colored red, white or blue, sort them 

so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var len = nums.length; 
  var zeroes = [];
  var ones = [];
  var twos = [];
  var i; 
  var num;
  
  if (len === 0 || len === 1) {
      return;
  }
  
  for (i = 0; i < len; i++) {
    num = nums[i];
    if (num === 0) {
      zeroes.push(0);
    } else if (num === 1) {
     ones.push(1);
    } else if (num === 2) {
      twos.push(2);
    }
  }

  nums = zeroes.concat(ones, twos);

}

