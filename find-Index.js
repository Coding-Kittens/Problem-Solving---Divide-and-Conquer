//finds the first index of a value, by making sure the value before it is not equal to it.
//if not found returns -1.
function findIndex(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let currentIdx = Math.floor((leftIdx + rightIdx) / 2);
    let currentVal = arr[currentIdx];

    if (
      (arr[currentIdx - 1] <= val - 1 || currentIdx - 1 < 0) &&
      currentVal === val
    )
      return currentIdx;
    currentVal <= val - 1
      ? (leftIdx = currentIdx + 1)
      : (rightIdx = currentIdx - 1);
  }

  return -1;
}

//finds the point where the current value is grater than the value after.
//if not found returns -1.
function findIndexRotated(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let currentIdx = Math.floor((leftIdx + rightIdx) / 2);
    let currentVal = arr[currentIdx];

    if (arr[currentIdx + 1] < currentVal) return currentIdx + 1;
    currentVal >= arr[leftIdx]
      ? (leftIdx = currentIdx + 1)
      : (rightIdx = currentIdx - 1);
  }
  return -1;
}

module.exports = { findIndex, findIndexRotated };
