var singleNumber = function(nums) {
  let size = nums.length;
  let dict = {};
  for (let i = 0; i < size; i++) {
    if (dict[nums[i]]) {
      delete dict[nums[i]];
    } else {
      dict[nums[i]] = 1;
    }
  }
  return Object.keys(dict)[0];
};
