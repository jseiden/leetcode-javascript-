/*
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = [];
  var prev = [];

  for (var k = 0; k < numRows; k++) {
    result.push(makeNextRow(prev));
    prev = makeNextRow(prev);
  }

  return result;
};

function makeNextRow(prevRow) {
  var row = [];

  if (prevRow.length === 1 && prevRow[0] === 1) {
    return [1,1];
  } else if (prevRow.length === 0) {
    return [1];
  }
  // else 
  for (var i = 0; i < prevRow.length - 1; i++) {
    row.push(prevRow[i] + prevRow[i+1]);
  }

  row.unshift(1);
  row.push(1);

  return row;
}
