// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var res = [];
  var k;

  for (k = 0; k <= rowIndex; k++) {
    res = makeRow(res);
  }

  return res;
};

// fn to make next row 
function makeRow(prev) {
  var row = [];

  if (prev.length === 0) {
    return [1];
  } else {
    for (var i = 0; i < prev.length - 1; i++) {
      row.push(prev[i] + prev[i+1]);
    }
  }

  row.push(1);
  row.unshift(1);

  return row;
}
