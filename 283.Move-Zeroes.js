/*[
   * @param {number[]} nums
   * @return {void} do not return anything, modify nums in-place instead.
   */
var  moveZeroes = function(nums) {
  var temp = [];
  var zeroes = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes.push(0);
    } else {
      temp.push(nums[i]);
    }
  }
  nums = temp.concat(zeroes);
}

