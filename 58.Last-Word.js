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
