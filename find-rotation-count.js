const { findIndexRotated } = require("./find-Index.js");

function findRotationCount(arr) {
  let rotatedIdx = findIndexRotated(arr);
  if (rotatedIdx === -1) rotatedIdx = 0;

  return rotatedIdx++;
}

module.exports = findRotationCount;
