/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var strArr = str.split(" ");
  var patternObj = {};
  var strObj = {};
  var i;
  var p;
  var s;
  
  if (pattern.length !== strArr.length) {
    return false;
  }
   
  for (i = 0; i < pattern.length; i++) {
    p = pattern[i];
    s = strArr[i];

    if (patternObj[p]) {
      if (patternObj[p] !== s || strObj[s] !== p) {
        return false;
      }
      
    } else if (!patternObj[p] && strObj[s]) {
      return false;
    }

    patternObj[p] = s;
    strObj[s] = p;
  }

  return true;
};

