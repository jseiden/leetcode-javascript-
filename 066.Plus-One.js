// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var len = digits.length;
  var last = digits[len -1];
  
  if (last < 9) {
   digits[len - 1] = last + 1; 
  } else {
    digits = checkNines(digits, digits.length - 1);
  }

  return digits;
};


function checkNines(nums, n) {
  if (n === 0 && nums[0] === 9) {
    nums[0] = 1;
    nums.push(0);
    return nums;
  } else if (nums[n] === 9 && nums[n -1] !== 9) {
    nums[n - 1] = nums[n - 1] + 1;
    nums[n] = 0;
    return nums;
  } else if (nums[n] === 9){
    nums[n] = 0;
    checkNines(nums, n - 1);
    return nums;
  }
}
