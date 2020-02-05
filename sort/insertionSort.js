/**
 * @param {number[]}
 * @return {number[]}
 */

function insertionSort(arr) {
  const len = arr.length;
  if (len <= 1) return;

  for (let i = 1; i < len; ++i) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0; --j) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
  return arr;
}
var a = [1, 8, 12, 5, 19, 4, 7, 2];

console.log(insertionSort(a));
