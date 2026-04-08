import type { TranslationMap } from './index';

export const treesTranslations: TranslationMap = {
  'invert-binary-tree': {
    javascript: {
      code: `function invertTree(root) {\n    if (!root) return null;\n    [root.left, root.right] = [root.right, root.left];\n    invertTree(root.left);\n    invertTree(root.right);\n    return root;\n}`,
    },
    go: {
      code: `func invertTree(root *TreeNode) *TreeNode {\n    if root == nil {\n        return nil\n    }\n    root.Left, root.Right = root.Right, root.Left\n    invertTree(root.Left)\n    invertTree(root.Right)\n    return root\n}`,
    },
  },
  'maximum-depth-of-binary-tree': {
    javascript: {
      code: `function maxDepth(root) {\n    if (!root) return 0;\n    return 1 + Math.max(\n        maxDepth(root.left),\n        maxDepth(root.right)\n    );\n}`,
    },
    go: {
      code: `func maxDepth(root *TreeNode) int {\n    if root == nil {\n        return 0\n    }\n    left := maxDepth(root.Left)\n    right := maxDepth(root.Right)\n    if left > right {\n        return 1 + left\n    }\n    return 1 + right\n}`,
    },
  },
  'diameter-of-binary-tree': {
    javascript: {
      code: `function diameterOfBinaryTree(root) {\n    let diameter = 0;\n    function dfs(node) {\n        if (!node) return 0;\n        const left = dfs(node.left);\n        const right = dfs(node.right);\n        diameter = Math.max(diameter, left + right);\n        return 1 + Math.max(left, right);\n    }\n    dfs(root);\n    return diameter;\n}`,
    },
    go: {
      code: `func diameterOfBinaryTree(root *TreeNode) int {\n    diameter := 0\n    var dfs func(node *TreeNode) int\n    dfs = func(node *TreeNode) int {\n        if node == nil {\n            return 0\n        }\n        left := dfs(node.Left)\n        right := dfs(node.Right)\n        if left+right > diameter {\n            diameter = left + right\n        }\n        if left > right {\n            return 1 + left\n        }\n        return 1 + right\n    }\n    dfs(root)\n    return diameter\n}`,
    },
  },
  'same-tree': {
    javascript: {
      code: `function isSameTree(p, q) {\n    if (!p && !q) return true;\n    if (!p || !q) return false;\n    if (p.val !== q.val) return false;\n    return isSameTree(p.left, q.left) &&\n           isSameTree(p.right, q.right);\n}`,
    },
    go: {
      code: `func isSameTree(p *TreeNode, q *TreeNode) bool {\n    if p == nil && q == nil {\n        return true\n    }\n    if p == nil || q == nil {\n        return false\n    }\n    if p.Val != q.Val {\n        return false\n    }\n    return isSameTree(p.Left, q.Left) &&\n           isSameTree(p.Right, q.Right)\n}`,
    },
  },
  'balanced-binary-tree': {
    javascript: {
      code: `function isBalanced(root) {\n    function dfs(node) {\n        if (!node) return 0;\n        const left = dfs(node.left);\n        const right = dfs(node.right);\n        if (left === -1 || right === -1) return -1;\n        if (Math.abs(left - right) > 1) return -1;\n        return 1 + Math.max(left, right);\n    }\n    return dfs(root) !== -1;\n}`,
    },
    go: {
      code: `func isBalanced(root *TreeNode) bool {\n    var dfs func(node *TreeNode) int\n    dfs = func(node *TreeNode) int {\n        if node == nil {\n            return 0\n        }\n        left := dfs(node.Left)\n        right := dfs(node.Right)\n        if left == -1 || right == -1 {\n            return -1\n        }\n        diff := left - right\n        if diff < 0 {\n            diff = -diff\n        }\n        if diff > 1 {\n            return -1\n        }\n        if left > right {\n            return 1 + left\n        }\n        return 1 + right\n    }\n    return dfs(root) != -1\n}`,
    },
  },
  'subtree-of-another-tree': {
    javascript: {
      code: `function isSubtree(root, subRoot) {\n    if (!root) return false;\n    if (isSameTree(root, subRoot)) return true;\n    return isSubtree(root.left, subRoot) ||\n           isSubtree(root.right, subRoot);\n}\n\nfunction isSameTree(p, q) {\n    if (!p && !q) return true;\n    if (!p || !q) return false;\n    if (p.val !== q.val) return false;\n    return isSameTree(p.left, q.left) &&\n           isSameTree(p.right, q.right);\n}`,
    },
    go: {
      code: `func isSubtree(root *TreeNode, subRoot *TreeNode) bool {\n    if root == nil {\n        return false\n    }\n    if isSameTree(root, subRoot) {\n        return true\n    }\n    return isSubtree(root.Left, subRoot) ||\n           isSubtree(root.Right, subRoot)\n}\n\nfunc isSameTree(p *TreeNode, q *TreeNode) bool {\n    if p == nil && q == nil {\n        return true\n    }\n    if p == nil || q == nil {\n        return false\n    }\n    if p.Val != q.Val {\n        return false\n    }\n    return isSameTree(p.Left, q.Left) &&\n           isSameTree(p.Right, q.Right)\n}`,
    },
  },
  'lowest-common-ancestor-of-bst': {
    javascript: {
      code: `function lowestCommonAncestor(root, p, q) {\n    let cur = root;\n    while (cur) {\n        if (p.val < cur.val && q.val < cur.val) {\n            cur = cur.left;\n        } else if (p.val > cur.val && q.val > cur.val) {\n            cur = cur.right;\n        } else {\n            return cur;\n        }\n    }\n}`,
    },
    go: {
      code: `func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {\n    cur := root\n    for cur != nil {\n        if p.Val < cur.Val && q.Val < cur.Val {\n            cur = cur.Left\n        } else if p.Val > cur.Val && q.Val > cur.Val {\n            cur = cur.Right\n        } else {\n            return cur\n        }\n    }\n    return nil\n}`,
    },
  },
  'binary-tree-level-order-traversal': {
    javascript: {
      code: `function levelOrder(root) {\n    if (!root) return [];\n    const result = [];\n    const queue = [root];\n    while (queue.length > 0) {\n        const level = [];\n        const size = queue.length;\n        for (let i = 0; i < size; i++) {\n            const node = queue.shift();\n            level.push(node.val);\n            if (node.left) queue.push(node.left);\n            if (node.right) queue.push(node.right);\n        }\n        result.push(level);\n    }\n    return result;\n}`,
    },
    go: {
      code: `func levelOrder(root *TreeNode) [][]int {\n    if root == nil {\n        return [][]int{}\n    }\n    result := [][]int{}\n    queue := []*TreeNode{root}\n    for len(queue) > 0 {\n        level := []int{}\n        size := len(queue)\n        for i := 0; i < size; i++ {\n            node := queue[0]\n            queue = queue[1:]\n            level = append(level, node.Val)\n            if node.Left != nil {\n                queue = append(queue, node.Left)\n            }\n            if node.Right != nil {\n                queue = append(queue, node.Right)\n            }\n        }\n        result = append(result, level)\n    }\n    return result\n}`,
    },
  },
  'binary-tree-right-side-view': {
    javascript: {
      code: `function rightSideView(root) {\n    if (!root) return [];\n    const result = [];\n    const queue = [root];\n    while (queue.length > 0) {\n        const size = queue.length;\n        let node;\n        for (let i = 0; i < size; i++) {\n            node = queue.shift();\n            if (node.left) queue.push(node.left);\n            if (node.right) queue.push(node.right);\n        }\n        result.push(node.val);\n    }\n    return result;\n}`,
    },
    go: {
      code: `func rightSideView(root *TreeNode) []int {\n    if root == nil {\n        return []int{}\n    }\n    result := []int{}\n    queue := []*TreeNode{root}\n    for len(queue) > 0 {\n        size := len(queue)\n        var node *TreeNode\n        for i := 0; i < size; i++ {\n            node = queue[0]\n            queue = queue[1:]\n            if node.Left != nil {\n                queue = append(queue, node.Left)\n            }\n            if node.Right != nil {\n                queue = append(queue, node.Right)\n            }\n        }\n        result = append(result, node.Val)\n    }\n    return result\n}`,
    },
  },
  'count-good-nodes': {
    javascript: {
      code: `function goodNodes(root) {\n    function dfs(node, maxVal) {\n        if (!node) return 0;\n        let count = node.val >= maxVal ? 1 : 0;\n        maxVal = Math.max(maxVal, node.val);\n        count += dfs(node.left, maxVal);\n        count += dfs(node.right, maxVal);\n        return count;\n    }\n    return dfs(root, root.val);\n}`,
    },
    go: {
      code: `func goodNodes(root *TreeNode) int {\n    var dfs func(node *TreeNode, maxVal int) int\n    dfs = func(node *TreeNode, maxVal int) int {\n        if node == nil {\n            return 0\n        }\n        count := 0\n        if node.Val >= maxVal {\n            count = 1\n        }\n        if node.Val > maxVal {\n            maxVal = node.Val\n        }\n        count += dfs(node.Left, maxVal)\n        count += dfs(node.Right, maxVal)\n        return count\n    }\n    return dfs(root, root.Val)\n}`,
    },
  },
  'validate-bst': {
    javascript: {
      code: `function isValidBST(root, lo = -Infinity, hi = Infinity) {\n    if (!root) return true;\n    if (!(lo < root.val && root.val < hi)) return false;\n    return isValidBST(root.left, lo, root.val) &&\n           isValidBST(root.right, root.val, hi);\n}`,
    },
    go: {
      code: `func isValidBST(root *TreeNode) bool {\n    return validate(root, math.MinInt64, math.MaxInt64)\n}\n\nfunc validate(node *TreeNode, lo, hi int) bool {\n    if node == nil {\n        return true\n    }\n    if node.Val <= lo || node.Val >= hi {\n        return false\n    }\n    return validate(node.Left, lo, node.Val) &&\n           validate(node.Right, node.Val, hi)\n}`,
    },
  },
  'kth-smallest-element-in-bst': {
    javascript: {
      code: `function kthSmallest(root, k) {\n    const stack = [];\n    let curr = root;\n    while (curr || stack.length > 0) {\n        while (curr) {\n            stack.push(curr);\n            curr = curr.left;\n        }\n        curr = stack.pop();\n        k--;\n        if (k === 0) return curr.val;\n        curr = curr.right;\n    }\n}`,
    },
    go: {
      code: `func kthSmallest(root *TreeNode, k int) int {\n    stack := []*TreeNode{}\n    curr := root\n    for curr != nil || len(stack) > 0 {\n        for curr != nil {\n            stack = append(stack, curr)\n            curr = curr.Left\n        }\n        curr = stack[len(stack)-1]\n        stack = stack[:len(stack)-1]\n        k--\n        if k == 0 {\n            return curr.Val\n        }\n        curr = curr.Right\n    }\n    return -1\n}`,
    },
  },
  'construct-binary-tree': {
    javascript: {
      code: `function buildTree(preorder, inorder) {\n    if (preorder.length === 0) return null;\n    const root = new TreeNode(preorder[0]);\n    const mid = inorder.indexOf(preorder[0]);\n    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));\n    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));\n    return root;\n}`,
    },
    go: {
      code: `func buildTree(preorder []int, inorder []int) *TreeNode {\n    if len(preorder) == 0 {\n        return nil\n    }\n    root := &TreeNode{Val: preorder[0]}\n    mid := 0\n    for i, v := range inorder {\n        if v == preorder[0] {\n            mid = i\n            break\n        }\n    }\n    root.Left = buildTree(preorder[1:mid+1], inorder[:mid])\n    root.Right = buildTree(preorder[mid+1:], inorder[mid+1:])\n    return root\n}`,
    },
  },
  'binary-tree-maximum-path-sum': {
    javascript: {
      code: `function maxPathSum(root) {\n    let maxSum = -Infinity;\n    function dfs(node) {\n        if (!node) return 0;\n        const left = Math.max(dfs(node.left), 0);\n        const right = Math.max(dfs(node.right), 0);\n        maxSum = Math.max(maxSum, left + node.val + right);\n        return node.val + Math.max(left, right);\n    }\n    dfs(root);\n    return maxSum;\n}`,
    },
    go: {
      code: `func maxPathSum(root *TreeNode) int {\n    maxSum := math.MinInt64\n    var dfs func(node *TreeNode) int\n    dfs = func(node *TreeNode) int {\n        if node == nil {\n            return 0\n        }\n        left := max(dfs(node.Left), 0)\n        right := max(dfs(node.Right), 0)\n        if left+node.Val+right > maxSum {\n            maxSum = left + node.Val + right\n        }\n        return node.Val + max(left, right)\n    }\n    dfs(root)\n    return maxSum\n}`,
    },
  },
  'serialize-and-deserialize-binary-tree': {
    javascript: {
      code: `function serialize(root) {\n    if (!root) return 'N';\n    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);\n}\n\nfunction deserialize(data) {\n    const tokens = data.split(',');\n    let i = 0;\n    function build() {\n        const val = tokens[i++];\n        if (val === 'N') return null;\n        const node = new TreeNode(parseInt(val));\n        node.left = build();\n        node.right = build();\n        return node;\n    }\n    return build();\n}`,
    },
    go: {
      code: `type Codec struct{}\n\nfunc (c *Codec) serialize(root *TreeNode) string {\n    if root == nil {\n        return \"N\"\n    }\n    return fmt.Sprintf(\"%d,%s,%s\", root.Val, c.serialize(root.Left), c.serialize(root.Right))\n}\n\nfunc (c *Codec) deserialize(data string) *TreeNode {\n    tokens := strings.Split(data, \",\")\n    idx := 0\n    var build func() *TreeNode\n    build = func() *TreeNode {\n        val := tokens[idx]\n        idx++\n        if val == \"N\" {\n            return nil\n        }\n        v, _ := strconv.Atoi(val)\n        node := &TreeNode{Val: v}\n        node.Left = build()\n        node.Right = build()\n        return node\n    }\n    return build()\n}`,
    },
  },
};
