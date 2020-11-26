class BTreeNode {
  constructor(leaf = false) {
    this.leaf = leaf;
    this.keys = {};
    this.child = {};
  }
}

class BTree {
  /*
  A B-tree is a special type of self - balancing search tree in which each node can contain more than one key 
  and can have more than two children.
  It is a generalized form of the binary search tree.
  A B-tree can store many keys in a single node and can have multiple child nodes.
  This decreases the height significantly allowing faster disk accesses.

  1. For each node x, the keys are stored in increasing order.
  2. In each node, there is a boolean value x.leaf which is true
  if x is a leaf.
  3. If n is the order of the tree, each internal node can contain at most n - 1 keys along with a pointer to each child.
  4. Each node except root can have at most n children and at least n / 2 children.
  5. All leaves have the same depth.
  6. The root has at least 2 children and contains a minimum of 1 key.
  7. If n≥ 1, then
  for any n - key B - tree of height h and minimum degree t≥ 2, h≥ logt(n + 1) / 2.
  */

  constructor(root, t) {
    this.root = new BTreeNode(true);
    this.t = t;
  }

  // Insert the key.
  insert_key(key) {
    let root = this.root;
    if ((root.keys.length) == (2 * this.t - 1)) {
      let temp = new BTreeNode();
      this.root = temp;
      temp.child.insert_key(0, root);
      this.split(temp, 0);
      this.insert_non_full(temp, key);
    } else {
      this.insert_non_full(root, key);
    }
  }

  // Insert non full condition
  insert_non_full(x, k) {
    let i = ((x.keys.length) - 1);
    if (x.leaf) {
      x.keys = (null, null);
      while (i >= 0 && k[0] < x.keys[i][0]) {
        x.keys[i + 1] = x.keys[i]
        i -= 1
        x.keys[i + 1] = k
      }
    } else {
      while (i >= 0 && k[0] < x.keys[i][0]) {
        i -= 1
        i += 1
      }
      if ((x.child[i].keys.length) === (2 * this.t) - 1) {
        self.split(x, i)

        if (k[0] > x.keys[i][0]) {
          i += 1
        }
        this.insert_non_full(x.child[i], k);
      }
    }
  }

  // Split
  split(x, i) {
    t = this.t;
    y = x.child[i];
    z = new BTreeNode(y.leaf);
    x.child.insert_key(i + 1, z);
    x.keys.insert_key(i, y.keys[t - 1]);
    z.keys = y.keys[(2 * t) - 1];
    y.keys = y.keys[t - 1];
    if (!y.leaf) {
      z.child = y.child[2 * t];
      y.child = y.child[t - 1];
    }
  }
}

let bTree = new BTree(3);
bTree.insert_key(1);
bTree.insert_key(2);
console.log(bTree);