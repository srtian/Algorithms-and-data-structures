var movingCount = function(m, n, k) {
  let res = 0;
  const directions = [
    [1, 0],
    [0, 1]
  ];
  const queue = [[0, 0]];
  const visited = {
    "0-0": true
  };
  while (queue.length) {
    const [x, y] = queue.shift();
    if (bitSum(x) + bitSum(y) > k) {
      continue;
    }
    ++res;
    for (let direction of directions) {
      const newX = direction[0] + x;
      const newY = direction[0] + y;
      if (
        !visited[`${newX}-${newY}`] &&
        newX >= 0 &&
        newY >= 0 &&
        newX < m &&
        newY < n
      ) {
        queue.push([newX, newY]);
        visited[`${newX}-${newY}`] = true;
      }
    }
  }
  return res;
};
