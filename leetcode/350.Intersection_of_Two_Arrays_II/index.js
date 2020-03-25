/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let dict = {};
  const size1 = nums1.length;
  const size2 = nums2.length;
  let arr = [];
  for (let i = 0; i < size1; i++) {
    if (!dict[nums1[i]]) {
      dict[nums1[i]] = 1;
    } else {
      dict[nums1[i]] = dict[nums1[i]] + 1;
    }
  }
  for (let j = 0; j < size2; j++) {
    if (dict[nums2[j]] > 0) {
      arr.push(nums2[j]);
      dict[nums2[j]] = dict[nums2[j]] - 1;
    }
  }
  return arr;
};
