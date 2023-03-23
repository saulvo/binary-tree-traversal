function traverse(root) {
  const array = [];
  const temp = [{ node: root, x: 0, y: 0, px: 0, py: 0 }];

  while (temp.length > 0) {
    const { node, x, y, px, py } = temp.pop();
    array.push({ value: node.value, x, y, px, py });
    if (node.right != null) temp.push({ node: node.right, x: x + 1, y: y + 1, px: x, py: y });
    if (node.left != null) temp.push({ node: node.left, x: x - 1, y: y + 1, px: x, py: y });
  }

  return array.sort((a, b) => a.x - b.x || a.y - b.y || a.px - b.px || a.py - b.py).map((e) => e.value);
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// create binary tree like required
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.right = new Node(5);
root.left.left.left = new Node(6);
root.left.left.right = new Node(7);
root.right.right.left = new Node(8);
root.left.left.right.right = new Node(9);
root.right.right.left.left = new Node(10);

const resultEL = document.querySelector('#result');
const result = traverse(root);
console.log(result);
resultEL.textContent = `[${result.join(', ')}]`;
