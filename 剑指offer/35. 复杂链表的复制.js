var copyRandomList = function(head) {
  if (!head) {
    return null;
  }
  const map = new Map();
  let node = head; // 当前节点
  const newHead = new Node(node.val);
  let newNode = newHead; // 当前节点的copy
  map.set(node, newNode);

  while (node.next) {
    newNode.next = new Node(node.next.val);
    node = node.next;
    newNode = newNode.next;
    map.set(node, newNode);
  }

  newNode = newHead;
  node = head;
  while (newNode) {
    newNode.random = map.get(node.random);
    newNode = newNode.next;
    node = node.next;
  }

  return newHead;
};
