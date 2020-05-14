var singleNumber = function(nums) {
  const size = nums.length;
  let dict = {};
  for (let i = 0; i < size; i++) {
    if (dict[nums[i]] !== undefined) {
      delete dict[nums[i]];
    } else {
      dict[nums[i]] = 1;
    }
  }
  return Object.keys(dict)[0];
};


var singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b)
};