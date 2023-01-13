const { findIndex } = require("./find-Index.js");

function sortedFrequency(arr, val) {
  const startIdx = findIndex(arr, val);
  if (startIdx === -1) return -1;
  const endIdx = findIndex(arr, val + 1);
  return endIdx != -1 ? endIdx - startIdx : arr.length - startIdx;
}

module.exports = sortedFrequency;
