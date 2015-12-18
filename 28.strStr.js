// Implement strStr().

// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0] && haystack.slice(i, i + needle.length) === needle) {
      return i;
    } 
  }
  return -1;
    
};

