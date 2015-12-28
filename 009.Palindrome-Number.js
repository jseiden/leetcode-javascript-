// Determine whether an integer is a palindrome. Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */

//var isPalindrome = function(x) {
    //return "" + x === x.toString().split("").reverse().join("");
//};
var isPalindrome = x => "" + x === x.toString().split("").reverse().join("");
