// Given an integer, write a function to determine if it is a power of three.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n/3 === 1 || n === 1) {
    return true;
  } else if (n < 3) {
    return false;
  } else {
    return isPowerOfThree(n/3);
  }
};

