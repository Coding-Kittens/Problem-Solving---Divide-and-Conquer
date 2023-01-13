const {findIndex,findIndexRotated} = require('./find-Index.js');

function findRotatedIndex(arr,val) {
  let rotatedIdx = findIndexRotated(arr);
  if(rotatedIdx === -1) rotatedIdx =0;
  let valIdx = findIndex(arr.slice(0,rotatedIdx),val);
  if(valIdx != -1) return valIdx;
  valIdx = findIndex(arr.slice(rotatedIdx),val);
  return valIdx != -1?  rotatedIdx+valIdx : valIdx;
}



module.exports = findRotatedIndex
