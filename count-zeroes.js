const { findIndexRotated } = require("./find-Index.js");

function countZeroes(arr) {
  if (arr[0] === 0) return arr.length;
  let zeroIdx = findIndexRotated(arr);
  return zeroIdx != -1 ? arr.length - zeroIdx : 0;
}

module.exports = countZeroes;
