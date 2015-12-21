// Reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var num = +(Math.abs(x).toString().split("").reverse().join(""));
  return x < 0 ? -num : num;
};

