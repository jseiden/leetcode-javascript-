//Given two strings s and t, write a function to determine if t is an anagram of s.

//For example,
//s = "anagram", t = "nagaram", return true.
//s = "rat", t = "car", return false.

//Note:
//You may assume the string contains only lowercase alphabets.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) { 
  return s.split("").sort().join("") === t.split("").sort().join("");
};

