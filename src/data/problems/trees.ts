import type { Problem } from '../types';

const treeNodes4271369 = [
  { id: 'a', value: 4, left: 'b', right: 'c' },
  { id: 'b', value: 2, left: 'd', right: 'e' },
  { id: 'c', value: 7, left: 'f', right: 'g' },
  { id: 'd', value: 1 },
  { id: 'e', value: 3 },
  { id: 'f', value: 6 },
  { id: 'g', value: 9 },
];

const invertedNodes = [
  { id: 'a', value: 4, left: 'c', right: 'b' },
  { id: 'b', value: 2, left: 'e', right: 'd' },
  { id: 'c', value: 7, left: 'g', right: 'f' },
  { id: 'd', value: 1 },
  { id: 'e', value: 3 },
  { id: 'f', value: 6 },
  { id: 'g', value: 9 },
];

const invertBinaryTree: Problem = {
  id: 'invert-binary-tree',
  name: 'Invert Binary Tree',
  number: 226,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/invert-binary-tree/',
  description: 'Given the root of a binary tree, invert the tree, and return its root.',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [4, 2, 7, 1, 3, 6, 9]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h)',
  pattern: 'Trees',
  hints: [
    'Swap the left and right children of every node.',
    'Use recursion: invert subtrees after swapping.',
  ],
  code: `def invertTree(root):
    if not root: return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root`,
  steps: [
    {
      line: 1,
      label: 'Start',
      message: 'Begin at root node 4. We will swap children at every node.',
      viz: {
        binaryTree: { nodes: treeNodes4271369, visiting: 'a' },
        variables: { node: 4 },
      },
    },
    {
      line: 3,
      label: 'Swap Root',
      message: 'Swap root\'s children: left 2 <-> right 7.',
      isKeyMoment: true,
      viz: {
        binaryTree: {
          nodes: [
            { id: 'a', value: 4, left: 'c', right: 'b' },
            { id: 'b', value: 2, left: 'd', right: 'e' },
            { id: 'c', value: 7, left: 'f', right: 'g' },
            { id: 'd', value: 1 }, { id: 'e', value: 3 },
            { id: 'f', value: 6 }, { id: 'g', value: 9 },
          ],
          visiting: 'a',
          highlighted: ['b', 'c'],
        },
        variables: { node: 4, swapped: '2 <-> 7' },
      },
    },
    {
      line: 4,
      label: 'Recurse Left',
      message: 'Recurse into left subtree (now node 7). Swap its children: 6 <-> 9.',
      viz: {
        binaryTree: {
          nodes: [
            { id: 'a', value: 4, left: 'c', right: 'b' },
            { id: 'b', value: 2, left: 'd', right: 'e' },
            { id: 'c', value: 7, left: 'g', right: 'f' },
            { id: 'd', value: 1 }, { id: 'e', value: 3 },
            { id: 'f', value: 6 }, { id: 'g', value: 9 },
          ],
          visiting: 'c',
          highlighted: ['f', 'g'],
        },
        variables: { node: 7, swapped: '6 <-> 9' },
      },
    },
    {
      line: 5,
      label: 'Recurse Right',
      message: 'Recurse into right subtree (now node 2). Swap its children: 1 <-> 3.',
      viz: {
        binaryTree: {
          nodes: [
            { id: 'a', value: 4, left: 'c', right: 'b' },
            { id: 'b', value: 2, left: 'e', right: 'd' },
            { id: 'c', value: 7, left: 'g', right: 'f' },
            { id: 'd', value: 1 }, { id: 'e', value: 3 },
            { id: 'f', value: 6 }, { id: 'g', value: 9 },
          ],
          visiting: 'b',
          highlighted: ['d', 'e'],
        },
        variables: { node: 2, swapped: '1 <-> 3' },
      },
    },
    {
      line: 2,
      label: 'Base Cases',
      message: 'Leaf nodes (1, 3, 6, 9) have no children -- return None.',
      viz: {
        binaryTree: { nodes: invertedNodes, highlighted: ['d', 'e', 'f', 'g'] },
        variables: { result: 'leaves reached' },
      },
    },
    {
      line: 6,
      label: 'Done',
      message: 'Tree is fully inverted. Return root.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: invertedNodes, highlighted: ['a'] },
        variables: { result: 'inverted tree' },
      },
    },
  ],
};

const depthTreeNodes = [
  { id: 'a', value: 3, left: 'b', right: 'c' },
  { id: 'b', value: 9 },
  { id: 'c', value: 20, left: 'd', right: 'e' },
  { id: 'd', value: 15 },
  { id: 'e', value: 7 },
];

const maxDepth: Problem = {
  id: 'maximum-depth-of-binary-tree',
  name: 'Maximum Depth of Binary Tree',
  number: 104,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
  description: 'Given the root of a binary tree, return its maximum depth.',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [3, 9, 20, null, null, 15, 7]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h)',
  pattern: 'Trees',
  hints: [
    'Depth of a node = 1 + max(depth of left, depth of right).',
    'Base case: empty node has depth 0.',
  ],
  code: `def maxDepth(root):
    if not root: return 0
    return 1 + max(
        maxDepth(root.left),
        maxDepth(root.right)
    )`,
  steps: [
    {
      line: 1,
      label: 'Start',
      message: 'Begin DFS at root node 3 to find maximum depth.',
      viz: {
        binaryTree: { nodes: depthTreeNodes, visiting: 'a' },
        variables: { node: 3 },
      },
    },
    {
      line: 3,
      label: 'Left Subtree',
      message: 'Visit node 9. It has no children, so depth = 1.',
      viz: {
        binaryTree: { nodes: depthTreeNodes, visiting: 'b', path: ['a', 'b'] },
        variables: { node: 9, depth: 1 },
      },
    },
    {
      line: 3,
      label: 'Right Subtree',
      message: 'Visit node 20. Recurse into its children.',
      viz: {
        binaryTree: { nodes: depthTreeNodes, visiting: 'c', path: ['a', 'c'] },
        variables: { node: 20 },
      },
    },
    {
      line: 4,
      label: 'Leaves',
      message: 'Nodes 15 and 7 are leaves, each returns depth 1.',
      viz: {
        binaryTree: { nodes: depthTreeNodes, highlighted: ['d', 'e'], visiting: 'd' },
        variables: { 'depth(15)': 1, 'depth(7)': 1 },
      },
    },
    {
      line: 3,
      label: 'Propagate',
      message: 'Node 20: 1 + max(1, 1) = 2. Node 3: 1 + max(1, 2) = 3.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: depthTreeNodes, highlighted: ['a', 'c'], path: ['a', 'c', 'd'] },
        variables: { 'depth(20)': 2, 'depth(3)': 3 },
      },
    },
    {
      line: 3,
      label: 'Result',
      message: 'Maximum depth is 3.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: depthTreeNodes, highlighted: ['a'], path: ['a', 'c', 'd'] },
        variables: { result: 3 },
      },
    },
  ],
};

const diameterNodes = [
  { id: 'a', value: 1, left: 'b', right: 'c' },
  { id: 'b', value: 2, left: 'd', right: 'e' },
  { id: 'c', value: 3 },
  { id: 'd', value: 4 },
  { id: 'e', value: 5 },
];

const diameterOfBinaryTree: Problem = {
  id: 'diameter-of-binary-tree',
  name: 'Diameter of Binary Tree',
  number: 543,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/diameter-of-binary-tree/',
  description: 'Given the root of a binary tree, return the length of the diameter (longest path between any two nodes).',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [1, 2, 3, 4, 5]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h)',
  pattern: 'Trees',
  hints: [
    'Diameter through a node = left depth + right depth.',
    'Track the global maximum diameter as you recurse.',
  ],
  code: `def diameterOfBinaryTree(root):
    diameter = 0
    def dfs(node):
        nonlocal diameter
        if not node: return 0
        left = dfs(node.left)
        right = dfs(node.right)
        diameter = max(diameter, left + right)
        return 1 + max(left, right)
    dfs(root)
    return diameter`,
  steps: [
    {
      line: 3,
      label: 'Start',
      message: 'DFS from root 1. Track diameter (longest path) globally.',
      viz: {
        binaryTree: { nodes: diameterNodes, visiting: 'a' },
        variables: { diameter: 0 },
      },
    },
    {
      line: 6,
      label: 'Leaves',
      message: 'Nodes 4, 5, 3 are leaves. Each returns depth 0 (no children).',
      viz: {
        binaryTree: { nodes: diameterNodes, highlighted: ['c', 'd', 'e'] },
        variables: { 'depth(4)': 0, 'depth(5)': 0, 'depth(3)': 0, diameter: 0 },
      },
    },
    {
      line: 8,
      label: 'Node 2',
      message: 'Node 2: left = 1, right = 1. Path through 2 = 1 + 1 = 2. Update diameter.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: diameterNodes, visiting: 'b', highlighted: ['d', 'e'] },
        variables: { node: 2, left: 1, right: 1, diameter: 2 },
      },
    },
    {
      line: 9,
      label: 'Return 2',
      message: 'Node 2 returns depth 1 + max(1, 1) = 2 to its parent.',
      viz: {
        binaryTree: { nodes: diameterNodes, visiting: 'b', path: ['a', 'b'] },
        variables: { 'depth(2)': 2, diameter: 2 },
      },
    },
    {
      line: 8,
      label: 'Node 1',
      message: 'Node 1: left = 2, right = 1. Path through 1 = 2 + 1 = 3. Update diameter.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: diameterNodes, visiting: 'a', path: ['d', 'b', 'a', 'c'] },
        variables: { node: 1, left: 2, right: 1, diameter: 3 },
      },
    },
    {
      line: 11,
      label: 'Result',
      message: 'Diameter = 3 (path: 4 -> 2 -> 1 -> 3).',
      viz: {
        binaryTree: { nodes: diameterNodes, highlighted: ['a'], path: ['d', 'b', 'a', 'c'] },
        variables: { result: 3 },
      },
    },
  ],
};

const sameTreeP = [
  { id: 'p1', value: 1, left: 'p2', right: 'p3' },
  { id: 'p2', value: 2 },
  { id: 'p3', value: 3 },
];

const sameTreeQ = [
  { id: 'q1', value: 1, left: 'q2', right: 'q3' },
  { id: 'q2', value: 2 },
  { id: 'q3', value: 3 },
];

const sameTree: Problem = {
  id: 'same-tree',
  name: 'Same Tree',
  number: 100,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/same-tree/',
  description: 'Given the roots of two binary trees p and q, check if they are the same (structurally identical with same values).',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'p = [1, 2, 3], q = [1, 2, 3]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h)',
  pattern: 'Trees',
  hints: [
    'Two trees are the same if roots match and subtrees match.',
    'Base case: both null = same; one null = different.',
  ],
  code: `def isSameTree(p, q):
    if not p and not q: return True
    if not p or not q: return False
    if p.val != q.val: return False
    return (isSameTree(p.left, q.left) and
            isSameTree(p.right, q.right))`,
  steps: [
    {
      line: 1,
      label: 'Start',
      message: 'Compare roots of p and q. Both exist.',
      viz: {
        binaryTree: { nodes: [...sameTreeP, ...sameTreeQ], visiting: 'p1', highlighted: ['q1'] },
        variables: { 'p.val': 1, 'q.val': 1 },
      },
    },
    {
      line: 4,
      label: 'Roots Match',
      message: 'p.val == q.val == 1. Values match. Compare subtrees.',
      viz: {
        binaryTree: { nodes: [...sameTreeP, ...sameTreeQ], highlighted: ['p1', 'q1'] },
        variables: { 'p.val': 1, 'q.val': 1, match: true },
      },
    },
    {
      line: 5,
      label: 'Left Children',
      message: 'Compare left children: p.left = 2, q.left = 2. Match!',
      viz: {
        binaryTree: { nodes: [...sameTreeP, ...sameTreeQ], visiting: 'p2', highlighted: ['q2'] },
        variables: { 'p.val': 2, 'q.val': 2, match: true },
      },
    },
    {
      line: 2,
      label: 'Left Nulls',
      message: 'Both left children of 2-nodes are null. Base case: return True.',
      viz: {
        binaryTree: { nodes: [...sameTreeP, ...sameTreeQ], highlighted: ['p2', 'q2'] },
        variables: { 'p.left': null, 'q.left': null, match: true },
      },
    },
    {
      line: 6,
      label: 'Right Children',
      message: 'Compare right children: p.right = 3, q.right = 3. Match!',
      viz: {
        binaryTree: { nodes: [...sameTreeP, ...sameTreeQ], visiting: 'p3', highlighted: ['q3'] },
        variables: { 'p.val': 3, 'q.val': 3, match: true },
      },
    },
    {
      line: 5,
      label: 'Result',
      message: 'All nodes match. Trees are identical. Return True.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: [...sameTreeP, ...sameTreeQ], highlighted: ['p1', 'p2', 'p3', 'q1', 'q2', 'q3'] },
        variables: { result: true },
      },
    },
  ],
};

const balancedNodes = [
  { id: 'a', value: 3, left: 'b', right: 'c' },
  { id: 'b', value: 9 },
  { id: 'c', value: 20, left: 'd', right: 'e' },
  { id: 'd', value: 15 },
  { id: 'e', value: 7 },
];

const balancedBinaryTree: Problem = {
  id: 'balanced-binary-tree',
  name: 'Balanced Binary Tree',
  number: 110,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/balanced-binary-tree/',
  description: 'Given a binary tree, determine if it is height-balanced (depths of subtrees never differ by more than 1).',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [3, 9, 20, null, null, 15, 7]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h)',
  pattern: 'Trees',
  hints: [
    'A tree is balanced if |left_height - right_height| <= 1 at every node.',
    'Return -1 to signal an unbalanced subtree early.',
  ],
  code: `def isBalanced(root):
    def dfs(node):
        if not node: return 0
        left = dfs(node.left)
        right = dfs(node.right)
        if left == -1 or right == -1: return -1
        if abs(left - right) > 1: return -1
        return 1 + max(left, right)
    return dfs(root) != -1`,
  steps: [
    {
      line: 2,
      label: 'Start',
      message: 'DFS from root 3. Check balance at every node.',
      viz: {
        binaryTree: { nodes: balancedNodes, visiting: 'a' },
        variables: { node: 3 },
      },
    },
    {
      line: 4,
      label: 'Left Subtree',
      message: 'Node 9 is a leaf. Height = 1. No children to check.',
      viz: {
        binaryTree: { nodes: balancedNodes, visiting: 'b', path: ['a', 'b'] },
        variables: { node: 9, height: 1 },
      },
    },
    {
      line: 4,
      label: 'Right Leaves',
      message: 'Nodes 15 and 7 are leaves. Each has height 1.',
      viz: {
        binaryTree: { nodes: balancedNodes, highlighted: ['d', 'e'] },
        variables: { 'height(15)': 1, 'height(7)': 1 },
      },
    },
    {
      line: 7,
      label: 'Check Node 20',
      message: 'Node 20: left = 1, right = 1. |1 - 1| = 0 <= 1. Balanced. Height = 2.',
      viz: {
        binaryTree: { nodes: balancedNodes, visiting: 'c', highlighted: ['d', 'e'] },
        variables: { node: 20, left: 1, right: 1, diff: 0, balanced: true },
      },
    },
    {
      line: 7,
      label: 'Check Root',
      message: 'Node 3: left = 1, right = 2. |1 - 2| = 1 <= 1. Balanced. Height = 3.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: balancedNodes, visiting: 'a', highlighted: ['b', 'c'] },
        variables: { node: 3, left: 1, right: 2, diff: 1, balanced: true },
      },
    },
    {
      line: 9,
      label: 'Result',
      message: 'All nodes balanced. Return True.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: balancedNodes, highlighted: ['a', 'b', 'c', 'd', 'e'] },
        variables: { result: true },
      },
    },
  ],
};

const treeProblems: Problem[] = [
  invertBinaryTree,
  maxDepth,
  diameterOfBinaryTree,
  sameTree,
  balancedBinaryTree,
];


// Shared tree node definitions
const mainTreeNodes = [
  { id: 'n3', value: 3, left: 'n4', right: 'n5' },
  { id: 'n4', value: 4, left: 'n1', right: 'n2' },
  { id: 'n5', value: 5 },
  { id: 'n1', value: 1 },
  { id: 'n2', value: 2 },
];

const subtreeNodes = [
  { id: 's4', value: 4, left: 's1', right: 's2' },
  { id: 's1', value: 1 },
  { id: 's2', value: 2 },
];

const bstNodes = [
  { id: 'n6', value: 6, left: 'n2', right: 'n8' },
  { id: 'n2', value: 2, left: 'n0', right: 'n4' },
  { id: 'n8', value: 8, left: 'n7', right: 'n9' },
  { id: 'n0', value: 0 },
  { id: 'n4', value: 4 },
  { id: 'n7', value: 7 },
  { id: 'n9', value: 9 },
];

const levelOrderNodes = [
  { id: 'n3', value: 3, left: 'n9', right: 'n20' },
  { id: 'n9', value: 9 },
  { id: 'n20', value: 20, left: 'n15', right: 'n7' },
  { id: 'n15', value: 15 },
  { id: 'n7', value: 7 },
];

const rightSideNodes = [
  { id: 'n1', value: 1, left: 'n2', right: 'n3' },
  { id: 'n2', value: 2, right: 'n5' },
  { id: 'n3', value: 3, right: 'n4' },
  { id: 'n5', value: 5 },
  { id: 'n4', value: 4 },
];

const goodNodesTree = [
  { id: 'n3', value: 3, left: 'n1', right: 'n4' },
  { id: 'n1', value: 1, left: 'n3b' },
  { id: 'n4', value: 4, left: 'n1b', right: 'n5' },
  { id: 'n3b', value: 3 },
  { id: 'n1b', value: 1 },
  { id: 'n5', value: 5 },
];

// ─── 1. Subtree of Another Tree ──────────────────────────────────────

const subtreeOfAnother: Problem = {
  id: 'subtree-of-another-tree',
  name: 'Subtree of Another Tree',
  number: 572,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/subtree-of-another-tree/',
  description: 'Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot.',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [3,4,5,1,2], subRoot = [4,1,2]',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m + n)',
  pattern: 'DFS + Tree Matching',
  hints: [
    'At every node in root, check if the subtree matches subRoot.',
    'Use a helper isSameTree to compare two trees recursively.',
  ],
  code: `def isSubtree(root, subRoot):
    if not root:
        return False
    if isSameTree(root, subRoot):
        return True
    return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)`,
  steps: [
    {
      line: 1, label: 'Init', isKeyMoment: true,
      message: 'Check if subRoot [4,1,2] is a subtree of root [3,4,5,1,2]. Start DFS at root node 3.',
      viz: { binaryTree: { nodes: mainTreeNodes, visiting: 'n3' } },
    },
    {
      line: 3, label: 'Compare at 3',
      message: 'Compare root=3 with subRoot=4. Values differ (3 != 4), so no match here. Recurse left.',
      viz: { binaryTree: { nodes: mainTreeNodes, visiting: 'n3', highlighted: ['n3'] } },
    },
    {
      line: 4, label: 'Compare at 4', isKeyMoment: true,
      message: 'Now at node 4. Compare with subRoot root=4. Values match! Check children recursively.',
      viz: { binaryTree: { nodes: mainTreeNodes, visiting: 'n4', highlighted: ['n4'] } },
    },
    {
      line: 4, label: 'Check left child',
      message: 'Compare left children: root.left=1, sub.left=1. Match! Continue checking right.',
      viz: { binaryTree: { nodes: mainTreeNodes, visiting: 'n1', highlighted: ['n4', 'n1'] } },
    },
    {
      line: 4, label: 'Check right child',
      message: 'Compare right children: root.right=2, sub.right=2. Match! Both have no further children.',
      viz: { binaryTree: { nodes: mainTreeNodes, visiting: 'n2', highlighted: ['n4', 'n1', 'n2'] } },
    },
    {
      line: 4, label: 'Subtree found', isKeyMoment: true,
      message: 'All nodes matched. The subtree [4,1,2] exists in root. Return true.',
      viz: { binaryTree: { nodes: mainTreeNodes, highlighted: ['n4', 'n1', 'n2'], path: ['n4', 'n1', 'n2'] } },
    },
  ],
};

// ─── 2. Lowest Common Ancestor of BST ────────────────────────────────

const lcaBST: Problem = {
  id: 'lowest-common-ancestor-of-bst',
  name: 'Lowest Common Ancestor of a Binary Search Tree',
  number: 235,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
  description: 'Given a BST and two nodes p and q, find the lowest common ancestor (LCA).',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [6,2,8,0,4,7,9], p = 2, q = 8',
  timeComplexity: 'O(h)',
  spaceComplexity: 'O(1)',
  pattern: 'BST Property Traversal',
  hints: [
    'If both p and q are less than current node, LCA is in the left subtree.',
    'If both are greater, LCA is in the right subtree.',
    'Otherwise, the current node is the LCA (split point).',
  ],
  code: `def lowestCommonAncestor(root, p, q):
    cur = root
    while cur:
        if p.val < cur.val and q.val < cur.val:
            cur = cur.left
        elif p.val > cur.val and q.val > cur.val:
            cur = cur.right
        else:
            return cur`,
  steps: [
    {
      line: 1, label: 'Init', isKeyMoment: true,
      message: 'Find LCA of p=2 and q=8 in BST. Start at root=6. p and q are highlighted.',
      viz: { binaryTree: { nodes: bstNodes, visiting: 'n6', highlighted: ['n2', 'n8'] }, variables: { p: 2, q: 8 } },
    },
    {
      line: 3, label: 'Check root 6',
      message: 'p=2 < 6 and q=8 > 6. They are on different sides of 6, so p and q split here.',
      viz: { binaryTree: { nodes: bstNodes, visiting: 'n6', highlighted: ['n2', 'n8'], path: ['n6'] }, variables: { cur: 6, p: 2, q: 8 } },
    },
    {
      line: 7, label: 'Split found', isKeyMoment: true,
      message: 'Neither both < 6 nor both > 6. This means 6 is the LCA where paths to p and q diverge.',
      viz: { binaryTree: { nodes: bstNodes, visiting: 'n6', highlighted: ['n6', 'n2', 'n8'], path: ['n6'] }, variables: { cur: 6, result: 6 } },
    },
    {
      line: 7, label: 'Path to p',
      message: 'Verify: path from 6 to p=2 goes left. Node 2 is left child of 6.',
      viz: { binaryTree: { nodes: bstNodes, highlighted: ['n6', 'n2'], path: ['n6', 'n2'] }, variables: { result: 6 } },
    },
    {
      line: 7, label: 'Path to q',
      message: 'Verify: path from 6 to q=8 goes right. Node 8 is right child of 6.',
      viz: { binaryTree: { nodes: bstNodes, highlighted: ['n6', 'n8'], path: ['n6', 'n8'] }, variables: { result: 6 } },
    },
    {
      line: 7, label: 'Result', isKeyMoment: true,
      message: 'LCA of 2 and 8 is node 6. Both nodes are reachable from 6, and no lower ancestor contains both.',
      viz: { binaryTree: { nodes: bstNodes, highlighted: ['n6', 'n2', 'n8'], path: ['n6'] }, variables: { result: 6 } },
    },
  ],
};

// ─── 3. Binary Tree Level Order Traversal ─────────────────────────────

const levelOrder: Problem = {
  id: 'binary-tree-level-order-traversal',
  name: 'Binary Tree Level Order Traversal',
  number: 102,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
  description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values (i.e., from left to right, level by level).',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [3,9,20,null,null,15,7]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'BFS with Queue',
  hints: [
    'Use a queue (deque) initialized with root.',
    'Process all nodes at the current level before moving to the next.',
    'Track the level size to know when one level ends and the next begins.',
  ],
  code: `def levelOrder(root):
    if not root:
        return []
    result, queue = [], deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result`,
  steps: [
    {
      line: 1, label: 'Init', isKeyMoment: true,
      message: 'Start BFS level order traversal. Initialize queue with root node 3.',
      viz: { binaryTree: { nodes: levelOrderNodes, visiting: 'n3' }, variables: { queue: [3], result: [] } },
    },
    {
      line: 6, label: 'Level 0',
      message: 'Process level 0: dequeue node 3. Add its children 9 and 20 to queue.',
      viz: { binaryTree: { nodes: levelOrderNodes, visiting: 'n3', highlighted: ['n3'] }, variables: { queue: [9, 20], level: [3] } },
    },
    {
      line: 6, label: 'Level 1 - node 9', isKeyMoment: true,
      message: 'Process level 1: dequeue node 9. It has no children.',
      viz: { binaryTree: { nodes: levelOrderNodes, visiting: 'n9', highlighted: ['n9'] }, variables: { queue: [20], level: [9] } },
    },
    {
      line: 6, label: 'Level 1 - node 20',
      message: 'Dequeue node 20. Add its children 15 and 7 to queue.',
      viz: { binaryTree: { nodes: levelOrderNodes, visiting: 'n20', highlighted: ['n9', 'n20'] }, variables: { queue: [15, 7], level: [9, 20] } },
    },
    {
      line: 6, label: 'Level 2 - node 15',
      message: 'Process level 2: dequeue node 15. No children.',
      viz: { binaryTree: { nodes: levelOrderNodes, visiting: 'n15', highlighted: ['n15'] }, variables: { queue: [7], level: [15] } },
    },
    {
      line: 6, label: 'Level 2 - node 7',
      message: 'Dequeue node 7. No children. Queue is now empty.',
      viz: { binaryTree: { nodes: levelOrderNodes, visiting: 'n7', highlighted: ['n15', 'n7'] }, variables: { queue: [], level: [15, 7] } },
    },
    {
      line: 12, label: 'Result', isKeyMoment: true,
      message: 'BFS complete. Level order traversal: [[3], [9, 20], [15, 7]].',
      viz: { binaryTree: { nodes: levelOrderNodes, highlighted: ['n3', 'n9', 'n20', 'n15', 'n7'] }, variables: { result: [[3], [9, 20], [15, 7]] } },
    },
  ],
};

// ─── 4. Binary Tree Right Side View ───────────────────────────────────

const rightSideView: Problem = {
  id: 'binary-tree-right-side-view',
  name: 'Binary Tree Right Side View',
  number: 199,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/binary-tree-right-side-view/',
  description: 'Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [1,2,3,null,5,null,4]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'BFS - Last Node per Level',
  hints: [
    'Use BFS level order traversal.',
    'For each level, the last node processed is the rightmost visible node.',
  ],
  code: `def rightSideView(root):
    if not root:
        return []
    result, queue = [], deque([root])
    while queue:
        for i in range(len(queue)):
            node = queue.popleft()
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(node.val)  # last node of level
    return result`,
  steps: [
    {
      line: 1, label: 'Init', isKeyMoment: true,
      message: 'Find right side view of tree [1,2,3,null,5,null,4]. BFS, taking the last node of each level.',
      viz: { binaryTree: { nodes: rightSideNodes, visiting: 'n1' }, variables: { queue: [1], result: [] } },
    },
    {
      line: 6, label: 'Level 0',
      message: 'Level 0 has only node 1. It is the last (rightmost) node. Add 1 to result.',
      viz: { binaryTree: { nodes: rightSideNodes, visiting: 'n1', highlighted: ['n1'] }, variables: { queue: [2, 3], result: [1] } },
    },
    {
      line: 6, label: 'Level 1', isKeyMoment: true,
      message: 'Level 1: process nodes 2, 3. Last node is 3 (rightmost). Add 3 to result.',
      viz: { binaryTree: { nodes: rightSideNodes, visiting: 'n3', highlighted: ['n2', 'n3'] }, variables: { queue: [5, 4], result: [1, 3] } },
    },
    {
      line: 6, label: 'Level 2 - node 5',
      message: 'Level 2: dequeue node 5. No children. Continue to next node in level.',
      viz: { binaryTree: { nodes: rightSideNodes, visiting: 'n5', highlighted: ['n5'] }, variables: { queue: [4], level_remaining: 1 } },
    },
    {
      line: 9, label: 'Level 2 - node 4', isKeyMoment: true,
      message: 'Dequeue node 4. Last in level, so it is the rightmost visible. Add 4 to result.',
      viz: { binaryTree: { nodes: rightSideNodes, visiting: 'n4', highlighted: ['n5', 'n4'] }, variables: { queue: [], result: [1, 3, 4] } },
    },
    {
      line: 10, label: 'Result',
      message: 'Right side view: [1, 3, 4]. From the right, you see node 1, then 3, then 4.',
      viz: { binaryTree: { nodes: rightSideNodes, highlighted: ['n1', 'n3', 'n4'], path: ['n1', 'n3', 'n4'] }, variables: { result: [1, 3, 4] } },
    },
  ],
};

// ─── 5. Count Good Nodes ──────────────────────────────────────────────

const countGoodNodes: Problem = {
  id: 'count-good-nodes',
  name: 'Count Good Nodes in Binary Tree',
  number: 1448,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/',
  description: 'Given a binary tree root, a node X is good if in the path from root to X there are no nodes with value greater than X. Return the number of good nodes.',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [3,1,4,3,null,1,5]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h)',
  pattern: 'DFS with Path Maximum',
  hints: [
    'Track the maximum value seen on the path from root to current node.',
    'A node is "good" if its value >= the path maximum so far.',
    'Pass the updated max down to children during DFS.',
  ],
  code: `def goodNodes(root):
    def dfs(node, maxVal):
        if not node:
            return 0
        count = 1 if node.val >= maxVal else 0
        maxVal = max(maxVal, node.val)
        count += dfs(node.left, maxVal)
        count += dfs(node.right, maxVal)
        return count
    return dfs(root, root.val)`,
  steps: [
    {
      line: 1, label: 'Init', isKeyMoment: true,
      message: 'Count good nodes in [3,1,4,3,null,1,5]. A node is good if no ancestor has a greater value. Start DFS at root=3, maxVal=3.',
      viz: { binaryTree: { nodes: goodNodesTree, visiting: 'n3' }, variables: { maxVal: 3, goodCount: 0 } },
    },
    {
      line: 4, label: 'Visit root 3',
      message: 'Node 3 >= maxVal 3. It is good! Count=1. DFS left child (1).',
      viz: { binaryTree: { nodes: goodNodesTree, visiting: 'n3', highlighted: ['n3'] }, variables: { maxVal: 3, goodCount: 1 } },
    },
    {
      line: 4, label: 'Visit node 1',
      message: 'Node 1 < maxVal 3. Not good. DFS to its left child (3).',
      viz: { binaryTree: { nodes: goodNodesTree, visiting: 'n1', path: ['n3', 'n1'] }, variables: { maxVal: 3, goodCount: 1 } },
    },
    {
      line: 4, label: 'Visit node 3 (leaf)', isKeyMoment: true,
      message: 'Node 3 >= maxVal 3. It is good! Count=2. Path max stays 3. Backtrack.',
      viz: { binaryTree: { nodes: goodNodesTree, visiting: 'n3b', highlighted: ['n3', 'n3b'], path: ['n3', 'n1', 'n3b'] }, variables: { maxVal: 3, goodCount: 2 } },
    },
    {
      line: 6, label: 'Visit node 4', isKeyMoment: true,
      message: 'Node 4 >= maxVal 3. Good! Count=3. Update maxVal to 4. DFS children.',
      viz: { binaryTree: { nodes: goodNodesTree, visiting: 'n4', highlighted: ['n3', 'n3b', 'n4'], path: ['n3', 'n4'] }, variables: { maxVal: 4, goodCount: 3 } },
    },
    {
      line: 4, label: 'Visit node 1 (right)',
      message: 'Node 1 < maxVal 4. Not good. Visit right child 5.',
      viz: { binaryTree: { nodes: goodNodesTree, visiting: 'n1b', path: ['n3', 'n4', 'n1b'] }, variables: { maxVal: 4, goodCount: 3 } },
    },
    {
      line: 4, label: 'Visit node 5', isKeyMoment: true,
      message: 'Node 5 >= maxVal 4. Good! Final count=4. Good nodes: [3, 3, 4, 5].',
      viz: { binaryTree: { nodes: goodNodesTree, visiting: 'n5', highlighted: ['n3', 'n3b', 'n4', 'n5'], path: ['n3', 'n4', 'n5'] }, variables: { maxVal: 5, goodCount: 4 } },
    },
  ],
};


// Tree: [5,1,4,null,null,3,6]
//       5
//      / \
//     1   4
//        / \
//       3   6
const treeNodes_validate = [
  { id: 'n5', value: 5, left: 'n1', right: 'n4' },
  { id: 'n1', value: 1 },
  { id: 'n4', value: 4, left: 'n3', right: 'n6' },
  { id: 'n3', value: 3 },
  { id: 'n6', value: 6 },
];

const validateBST: Problem = {
  id: 'validate-bst',
  name: 'Validate Binary Search Tree',
  number: 98,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/validate-binary-search-tree/',
  description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [5,1,4,null,null,3,6]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h)',
  pattern: 'DFS with Min/Max Bounds',
  hints: [
    'Each node must fall within a valid range (min, max).',
    'When going left, update the upper bound. When going right, update the lower bound.',
    'A node in the right subtree of 5 must be > 5, not just > its parent.',
  ],
  code: `def isValidBST(root, lo=float('-inf'), hi=float('inf')):
    if not root:
        return True
    if not (lo < root.val < hi):
        return False
    return (isValidBST(root.left, lo, root.val) and
            isValidBST(root.right, root.val, hi))`,
  steps: [
    {
      line: 1,
      label: 'Start at root',
      message: 'Begin DFS at root node 5 with bounds (-inf, +inf). 5 is within bounds.',
      viz: {
        binaryTree: { nodes: treeNodes_validate, visiting: 'n5', highlighted: ['n5'] },
        variables: { lo: '-inf', hi: '+inf', node: 5, valid: true },
      },
    },
    {
      line: 6,
      label: 'Go left to 1',
      message: 'Recurse left: node 1, bounds (-inf, 5). 1 < 5, valid so far.',
      viz: {
        binaryTree: { nodes: treeNodes_validate, visiting: 'n1', path: ['n5', 'n1'] },
        variables: { lo: '-inf', hi: 5, node: 1, valid: true },
      },
    },
    {
      line: 6,
      label: 'Node 1 is leaf',
      message: 'Node 1 has no children. Backtrack to root and go right.',
      viz: {
        binaryTree: { nodes: treeNodes_validate, visiting: 'n1', highlighted: ['n1'] },
        variables: { lo: '-inf', hi: 5, node: 1, valid: true },
      },
    },
    {
      line: 7,
      label: 'Go right to 4',
      message: 'Recurse right from root: node 4, bounds (5, +inf). Check: is 5 < 4? NO! 4 is not > 5.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: treeNodes_validate, visiting: 'n4', path: ['n5', 'n4'], highlighted: ['n4'] },
        variables: { lo: 5, hi: '+inf', node: 4, valid: false },
      },
    },
    {
      line: 4,
      label: 'Violation found',
      message: 'Node 4 fails the bound check: it must be > 5 (its ancestor), but 4 < 5. Return False.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: treeNodes_validate, visiting: 'n4', highlighted: ['n5', 'n4'] },
        variables: { lo: 5, hi: '+inf', node: 4, result: false },
      },
    },
    {
      line: 4,
      label: 'Note about node 3',
      message: 'Node 3 would also fail: it is in the right subtree of 5, so it must be > 5, but 3 < 5.',
      viz: {
        binaryTree: { nodes: treeNodes_validate, highlighted: ['n5', 'n4', 'n3'] },
        variables: { explanation: '3 < 5 but in right subtree' },
      },
    },
    {
      line: 5,
      label: 'Result',
      message: 'Tree is NOT a valid BST. The key insight: every node must satisfy bounds from ALL ancestors, not just its parent.',
      viz: {
        binaryTree: { nodes: treeNodes_validate, highlighted: ['n4', 'n3'] },
        variables: { result: false },
      },
    },
  ],
};

// BST: [3,1,4,null,2], k=1
//       3
//      / \
//     1   4
//      \
//       2
const treeNodes_kth = [
  { id: 'n3', value: 3, left: 'n1', right: 'n4' },
  { id: 'n1', value: 1, right: 'n2' },
  { id: 'n4', value: 4 },
  { id: 'n2', value: 2 },
];

const kthSmallest: Problem = {
  id: 'kth-smallest-element-in-bst',
  name: 'Kth Smallest Element in a BST',
  number: 230,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
  description: 'Given the root of a BST and an integer k, return the kth smallest value in the tree.',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [3,1,4,null,2], k = 1',
  timeComplexity: 'O(h + k)',
  spaceComplexity: 'O(h)',
  pattern: 'Inorder Traversal',
  hints: [
    'Inorder traversal of a BST visits nodes in ascending order.',
    'Count visited nodes; when count equals k, you have the answer.',
  ],
  code: `def kthSmallest(root, k):
    stack = []
    curr = root
    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        k -= 1
        if k == 0:
            return curr.val
        curr = curr.right`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find the 1st smallest element. Use iterative inorder: go as far left as possible first.',
      viz: {
        binaryTree: { nodes: treeNodes_kth, visiting: 'n3' },
        variables: { k: 1, stack: [], curr: 3 },
      },
    },
    {
      line: 5,
      label: 'Go left',
      message: 'Push 3 onto stack, move left to 1. Push 1 onto stack, move left: null.',
      viz: {
        binaryTree: { nodes: treeNodes_kth, visiting: 'n1', path: ['n3', 'n1'] },
        variables: { k: 1, stack: [3, 1], curr: 'null' },
      },
    },
    {
      line: 7,
      label: 'Pop 1',
      message: 'Pop 1 from stack. This is the smallest node (leftmost). Decrement k: 1 -> 0.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: treeNodes_kth, visiting: 'n1', highlighted: ['n1'] },
        variables: { k: 0, stack: [3], curr: 1 },
      },
    },
    {
      line: 9,
      label: 'k == 0, found!',
      message: 'k is now 0, so node 1 is the 1st smallest element. Return 1.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: treeNodes_kth, highlighted: ['n1'] },
        variables: { k: 0, result: 1 },
      },
    },
    {
      line: 10,
      label: 'Inorder sequence',
      message: 'Full inorder would be [1, 2, 3, 4]. We stopped early at position k=1.',
      viz: {
        binaryTree: { nodes: treeNodes_kth, highlighted: ['n1', 'n2', 'n3', 'n4'] },
        variables: { inorder: [1, 2, 3, 4], k: 1, answer: 1 },
      },
    },
    {
      line: 10,
      label: 'Result',
      message: 'The 1st smallest element in the BST is 1.',
      viz: {
        binaryTree: { nodes: treeNodes_kth, highlighted: ['n1'] },
        variables: { result: 1 },
      },
    },
  ],
};

// preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]
//       3
//      / \
//     9   20
//        /  \
//       15   7
const constructTree: Problem = {
  id: 'construct-binary-tree',
  name: 'Construct Binary Tree from Preorder and Inorder Traversal',
  number: 105,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
  description: 'Given two integer arrays preorder and inorder, construct and return the binary tree.',
  vizTypes: ['binary-tree', 'array'],
  language: 'python',
  testInput: 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Recursive Divide and Conquer',
  hints: [
    'The first element of preorder is always the root.',
    'Find the root in inorder to split left and right subtrees.',
    'Elements left of root in inorder form the left subtree.',
  ],
  code: `def buildTree(preorder, inorder):
    if not preorder:
        return None
    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])
    root.left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])
    return root`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]. First preorder element 3 is the root.',
      viz: {
        array: { values: [3, 9, 20, 15, 7], highlights: [0], labels: { 0: 'root' } },
        variables: { preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] },
      },
    },
    {
      line: 4,
      label: 'Create root 3',
      message: 'Root is 3. Find 3 in inorder at index 1. Left subtree: inorder[0..0]=[9]. Right: inorder[2..4]=[15,20,7].',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: [{ id: 'n3', value: 3 }], highlighted: ['n3'] },
        array: { values: [9, 3, 15, 20, 7], highlights: [1], labels: { 0: 'left', 1: 'root', 2: 'right' } },
        variables: { root: 3, mid: 1, leftInorder: [9], rightInorder: [15, 20, 7] },
      },
    },
    {
      line: 6,
      label: 'Build left: node 9',
      message: 'Left subtree preorder=[9], inorder=[9]. Root is 9, no children. Attach as left child of 3.',
      viz: {
        binaryTree: {
          nodes: [
            { id: 'n3', value: 3, left: 'n9' },
            { id: 'n9', value: 9 },
          ],
          visiting: 'n9',
          highlighted: ['n9'],
        },
        variables: { building: 'left subtree', root: 9 },
      },
    },
    {
      line: 7,
      label: 'Build right: root 20',
      message: 'Right subtree preorder=[20,15,7], inorder=[15,20,7]. Root is 20. Find 20 in inorder at index 1.',
      isKeyMoment: true,
      viz: {
        binaryTree: {
          nodes: [
            { id: 'n3', value: 3, left: 'n9', right: 'n20' },
            { id: 'n9', value: 9 },
            { id: 'n20', value: 20 },
          ],
          visiting: 'n20',
          highlighted: ['n20'],
        },
        variables: { building: 'right subtree', root: 20, leftInorder: [15], rightInorder: [7] },
      },
    },
    {
      line: 6,
      label: 'Attach 15 left of 20',
      message: 'Left of 20: preorder=[15], inorder=[15]. Node 15, no children.',
      viz: {
        binaryTree: {
          nodes: [
            { id: 'n3', value: 3, left: 'n9', right: 'n20' },
            { id: 'n9', value: 9 },
            { id: 'n20', value: 20, left: 'n15' },
            { id: 'n15', value: 15 },
          ],
          visiting: 'n15',
          highlighted: ['n15'],
        },
        variables: { building: '20.left', root: 15 },
      },
    },
    {
      line: 7,
      label: 'Attach 7 right of 20',
      message: 'Right of 20: preorder=[7], inorder=[7]. Node 7, no children.',
      viz: {
        binaryTree: {
          nodes: [
            { id: 'n3', value: 3, left: 'n9', right: 'n20' },
            { id: 'n9', value: 9 },
            { id: 'n20', value: 20, left: 'n15', right: 'n7' },
            { id: 'n15', value: 15 },
            { id: 'n7', value: 7 },
          ],
          visiting: 'n7',
          highlighted: ['n7'],
        },
        variables: { building: '20.right', root: 7 },
      },
    },
    {
      line: 8,
      label: 'Result',
      message: 'Tree fully constructed: 3 -> (9, 20), 20 -> (15, 7). Matches both traversal orders.',
      viz: {
        binaryTree: {
          nodes: [
            { id: 'n3', value: 3, left: 'n9', right: 'n20' },
            { id: 'n9', value: 9 },
            { id: 'n20', value: 20, left: 'n15', right: 'n7' },
            { id: 'n15', value: 15 },
            { id: 'n7', value: 7 },
          ],
          highlighted: ['n3', 'n9', 'n20', 'n15', 'n7'],
        },
        variables: { result: 'Tree built successfully' },
      },
    },
  ],
};

// Tree: [-10,9,20,null,null,15,7]
//       -10
//       / \
//      9   20
//         / \
//        15   7
const treeNodes_maxPath = [
  { id: 'n-10', value: -10, left: 'n9', right: 'n20' },
  { id: 'n9', value: 9 },
  { id: 'n20', value: 20, left: 'n15', right: 'n7' },
  { id: 'n15', value: 15 },
  { id: 'n7', value: 7 },
];

const maxPathSum: Problem = {
  id: 'binary-tree-maximum-path-sum',
  name: 'Binary Tree Maximum Path Sum',
  number: 124,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
  description: 'Return the maximum path sum of any non-empty path in the binary tree. A path can start and end at any node.',
  vizTypes: ['binary-tree'],
  language: 'python',
  testInput: 'root = [-10,9,20,null,null,15,7]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h)',
  pattern: 'DFS with Global Max',
  hints: [
    'At each node, compute the max gain if we extend through it (one side only).',
    'The path sum through a node = left_gain + node.val + right_gain.',
    'Update a global max, but return only the best single-side gain to the parent.',
  ],
  code: `def maxPathSum(root):
    max_sum = float('-inf')
    def dfs(node):
        nonlocal max_sum
        if not node: return 0
        left = max(dfs(node.left), 0)
        right = max(dfs(node.right), 0)
        max_sum = max(max_sum, left + node.val + right)
        return node.val + max(left, right)
    dfs(root)
    return max_sum`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'DFS post-order to compute max path sum. Start at root -10. max_sum = -inf.',
      viz: {
        binaryTree: { nodes: treeNodes_maxPath, visiting: 'n-10' },
        variables: { max_sum: '-inf' },
      },
    },
    {
      line: 5,
      label: 'Visit leaf 9',
      message: 'Node 9 is a leaf. left=0, right=0. Path through 9 = 9. Update max_sum=9. Return 9.',
      viz: {
        binaryTree: { nodes: treeNodes_maxPath, visiting: 'n9', highlighted: ['n9'] },
        variables: { max_sum: 9, node: 9, left: 0, right: 0, pathThrough: 9, returns: 9 },
      },
    },
    {
      line: 5,
      label: 'Visit leaf 15',
      message: 'Node 15 is a leaf. Path through 15 = 15. Update max_sum=15. Return 15.',
      viz: {
        binaryTree: { nodes: treeNodes_maxPath, visiting: 'n15', highlighted: ['n15'] },
        variables: { max_sum: 15, node: 15, pathThrough: 15, returns: 15 },
      },
    },
    {
      line: 5,
      label: 'Visit leaf 7',
      message: 'Node 7 is a leaf. Path through 7 = 7. max_sum stays 15. Return 7.',
      viz: {
        binaryTree: { nodes: treeNodes_maxPath, visiting: 'n7', highlighted: ['n7'] },
        variables: { max_sum: 15, node: 7, pathThrough: 7, returns: 7 },
      },
    },
    {
      line: 8,
      label: 'Visit node 20',
      message: 'Node 20: left_gain=15, right_gain=7. Path through = 15+20+7 = 42. Update max_sum=42! Return 20+15=35.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: treeNodes_maxPath, visiting: 'n20', highlighted: ['n15', 'n20', 'n7'], path: ['n15', 'n20', 'n7'] },
        variables: { max_sum: 42, node: 20, left: 15, right: 7, pathThrough: 42, returns: 35 },
      },
    },
    {
      line: 8,
      label: 'Visit root -10',
      message: 'Node -10: left_gain=max(9,0)=9, right_gain=max(35,0)=35. Path through = 9+(-10)+35=34. max_sum stays 42.',
      viz: {
        binaryTree: { nodes: treeNodes_maxPath, visiting: 'n-10', highlighted: ['n-10'] },
        variables: { max_sum: 42, node: -10, left: 9, right: 35, pathThrough: 34, returns: 25 },
      },
    },
    {
      line: 11,
      label: 'Result',
      message: 'Maximum path sum is 42, achieved by path 15 -> 20 -> 7.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: treeNodes_maxPath, highlighted: ['n15', 'n20', 'n7'], path: ['n15', 'n20', 'n7'] },
        variables: { result: 42, path: '15 -> 20 -> 7' },
      },
    },
  ],
};

// Tree: [1,2,3,null,null,4,5]
//       1
//      / \
//     2   3
//        / \
//       4   5
const treeNodes_serialize = [
  { id: 'n1', value: 1, left: 'n2', right: 'n3' },
  { id: 'n2', value: 2 },
  { id: 'n3', value: 3, left: 'n4', right: 'n5' },
  { id: 'n4', value: 4 },
  { id: 'n5', value: 5 },
];

const serializeDeserialize: Problem = {
  id: 'serialize-and-deserialize-binary-tree',
  name: 'Serialize and Deserialize Binary Tree',
  number: 297,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
  description: 'Design an algorithm to serialize a binary tree to a string and deserialize it back.',
  vizTypes: ['binary-tree', 'array'],
  language: 'python',
  testInput: 'root = [1,2,3,null,null,4,5]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Preorder DFS with Null Markers',
  hints: [
    'Use preorder traversal and mark nulls with a sentinel like "N".',
    'To deserialize, consume tokens one by one, recursively building left then right.',
  ],
  code: `def serialize(root):
    if not root: return 'N'
    return str(root.val) + ',' + serialize(root.left) + ',' + serialize(root.right)

def deserialize(data):
    tokens = iter(data.split(','))
    def build():
        val = next(tokens)
        if val == 'N': return None
        node = TreeNode(int(val))
        node.left = build()
        node.right = build()
        return node
    return build()`,
  steps: [
    {
      line: 1,
      label: 'Start serialize',
      message: 'Serialize the tree using preorder DFS. Visit root 1 first.',
      viz: {
        binaryTree: { nodes: treeNodes_serialize, visiting: 'n1' },
        array: { values: [], labels: { 0: 'output' } },
        variables: { phase: 'serialize' },
      },
    },
    {
      line: 3,
      label: 'Serialize left subtree',
      message: 'Visit 1 -> go left to 2. Node 2 has no children, emit "N,N" for its nulls.',
      viz: {
        binaryTree: { nodes: treeNodes_serialize, visiting: 'n2', path: ['n1', 'n2'] },
        array: { values: ['1', '2', 'N', 'N'], highlights: [1, 2, 3] },
        variables: { serialized: '1,2,N,N' },
      },
    },
    {
      line: 3,
      label: 'Serialize right subtree',
      message: 'Back to 1, go right to 3. Then 3.left=4 (N,N), 3.right=5 (N,N).',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: treeNodes_serialize, visiting: 'n3', path: ['n1', 'n3'] },
        array: { values: ['1', '2', 'N', 'N', '3', '4', 'N', 'N', '5', 'N', 'N'], highlights: [4, 5, 6, 7, 8, 9, 10] },
        variables: { serialized: '1,2,N,N,3,4,N,N,5,N,N' },
      },
    },
    {
      line: 5,
      label: 'Start deserialize',
      message: 'Now deserialize "1,2,N,N,3,4,N,N,5,N,N". Split into tokens and consume with iterator.',
      viz: {
        array: { values: ['1', '2', 'N', 'N', '3', '4', 'N', 'N', '5', 'N', 'N'], highlights: [0] },
        variables: { phase: 'deserialize', token: '1' },
      },
    },
    {
      line: 10,
      label: 'Rebuild root and left',
      message: 'Token "1" -> create node 1. Token "2" -> create node 2 (left of 1). Tokens "N","N" -> 2 has no children.',
      viz: {
        binaryTree: {
          nodes: [
            { id: 'n1', value: 1, left: 'n2' },
            { id: 'n2', value: 2 },
          ],
          visiting: 'n2',
          highlighted: ['n1', 'n2'],
        },
        array: { values: ['1', '2', 'N', 'N', '3', '4', 'N', 'N', '5', 'N', 'N'], highlights: [0, 1, 2, 3] },
        variables: { consumed: 4 },
      },
    },
    {
      line: 12,
      label: 'Rebuild right subtree',
      message: 'Token "3" -> right of 1. Token "4" -> left of 3 (N,N). Token "5" -> right of 3 (N,N).',
      viz: {
        binaryTree: {
          nodes: treeNodes_serialize,
          highlighted: ['n3', 'n4', 'n5'],
          visiting: 'n3',
        },
        array: { values: ['1', '2', 'N', 'N', '3', '4', 'N', 'N', '5', 'N', 'N'], highlights: [4, 5, 6, 7, 8, 9, 10] },
        variables: { consumed: 11 },
      },
    },
    {
      line: 14,
      label: 'Result',
      message: 'Tree fully reconstructed. Serialize + deserialize preserves the exact structure.',
      isKeyMoment: true,
      viz: {
        binaryTree: { nodes: treeNodes_serialize, highlighted: ['n1', 'n2', 'n3', 'n4', 'n5'] },
        variables: { result: 'Tree restored', serialized: '1,2,N,N,3,4,N,N,5,N,N' },
      },
    },
  ],
};


export const treesProblems: Problem[] = [invertBinaryTree, maxDepth, diameterOfBinaryTree, sameTree, balancedBinaryTree, subtreeOfAnother, lcaBST, levelOrder, rightSideView, countGoodNodes, validateBST, kthSmallest, constructTree, maxPathSum, serializeDeserialize];
