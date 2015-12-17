// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var arr = s.split(" ").filter(function(word) {return word.length !== 0;});
  if (arr && arr.length > 0) {
      return arr.pop().length;
  }
  return 0;
};
