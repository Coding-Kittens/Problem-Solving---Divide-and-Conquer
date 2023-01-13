function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let currentIdx = Math.floor((leftIdx + rightIdx) / 2);
    let currentVal = arr[currentIdx];
    if (
      (arr[currentIdx + 1] > val || currentIdx + 1 >= arr.length) &&
      currentVal <= val
    ) {
      return arr[currentIdx];
    }
    currentVal < val ? (leftIdx = currentIdx + 1) : (rightIdx = currentIdx - 1);
  }

  return -1;
}

module.exports = findFloor;
