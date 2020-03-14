/**
 * @param {number[]} numbers
 * @return {number}
 */
// test
var minArray = function(numbers) {
  let j = 0;
  let i = numbers.length - 1;
  while (j < i) {
    let mid = Math.floor((i + j) / 2);
    if (numbers[mid] > numbers[i]) {
      j = mid + 1;
    } else if (numbers[mid] < numbers[i]) {
      i = mid;
    } else {
      i--;
    }
  }
  return numbers[i];
};
