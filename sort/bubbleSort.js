/**
 * @param {number[]}
 * @return {number[]}
 */
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const val = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = val;
      }
    }
  }
  return arr;
}
var a = [1, 8, 12, 5, 19, 4, 7, 2];

console.log(bubbleSort(a));
