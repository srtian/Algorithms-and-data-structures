// 此题的解题思路为，利用一个变量去保存公共前缀
// 然后用这个公共前缀去与每个字符串进行比较，迭代，不断的将这个公共前缀的范围给缩小
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  let first = strs[0];
  let str = strs.map(item => {
    let i = 0;
    // 核心比较逻辑在这此处
    // i 不会大于公共前缀的长度
    // i 不会大于单个字符串的长度
    // 且需要字符相等
    while (i < first.length && i < item.length && first[i] === item[i]) {
      i++;
    }
    first = i > 0 ? item.substring(0, i) : "";
  });
  return first;
};
