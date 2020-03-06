var singleNumber = function(nums) {
  let size = nums.length;
  let dict = {};
  for (let i = 0; i < size; i++) {
    if (dict[nums[i]]) {
      dict[nums[i]] = false;
    } else {
      dict[nums[i]] = true;
    }
  }
  for (let i = 0; i < size; i++) {
    if (dict[nums[i]]) {
      return nums[i];
    }
  }
};
