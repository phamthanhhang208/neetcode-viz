import type { TranslationMap } from './index';

export const linkedListTranslations: TranslationMap = {
  'reverse-linked-list': {
    javascript: {
      code: `function reverseList(head) {\n  let prev = null;\n  let curr = head;\n  while (curr) {\n    const nextNode = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = nextNode;\n  }\n  return prev;\n}`,
    },
    go: {
      code: `func reverseList(head *ListNode) *ListNode {\n\tvar prev *ListNode\n\tcurr := head\n\tfor curr != nil {\n\t\tnextNode := curr.Next\n\t\tcurr.Next = prev\n\t\tprev = curr\n\t\tcurr = nextNode\n\t}\n\treturn prev\n}`,
    },
  },
  'merge-two-sorted-lists': {
    javascript: {
      code: `function mergeTwoLists(l1, l2) {\n  const dummy = new ListNode(0);\n  let tail = dummy;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) {\n      tail.next = l1;\n      l1 = l1.next;\n    } else {\n      tail.next = l2;\n      l2 = l2.next;\n    }\n    tail = tail.next;\n  }\n  tail.next = l1 || l2;\n  return dummy.next;\n}`,
    },
    go: {
      code: `func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {\n\tdummy := &ListNode{}\n\ttail := dummy\n\tfor l1 != nil && l2 != nil {\n\t\tif l1.Val <= l2.Val {\n\t\t\ttail.Next = l1\n\t\t\tl1 = l1.Next\n\t\t} else {\n\t\t\ttail.Next = l2\n\t\t\tl2 = l2.Next\n\t\t}\n\t\ttail = tail.Next\n\t}\n\tif l1 != nil {\n\t\ttail.Next = l1\n\t} else {\n\t\ttail.Next = l2\n\t}\n\treturn dummy.Next\n}`,
    },
  },
  'reorder-list': {
    javascript: {
      code: `function reorderList(head) {\n  // Find middle\n  let slow = head, fast = head.next;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  // Reverse second half\n  let second = slow.next;\n  slow.next = null;\n  let prev = null;\n  while (second) {\n    const tmp = second.next;\n    second.next = prev;\n    prev = second;\n    second = tmp;\n  }\n  // Merge two halves\n  let first = head;\n  second = prev;\n  while (second) {\n    const tmp1 = first.next, tmp2 = second.next;\n    first.next = second;\n    second.next = tmp1;\n    first = tmp1;\n    second = tmp2;\n  }\n}`,
    },
    go: {
      code: `func reorderList(head *ListNode) {\n\t// Find middle\n\tslow, fast := head, head.Next\n\tfor fast != nil && fast.Next != nil {\n\t\tslow = slow.Next\n\t\tfast = fast.Next.Next\n\t}\n\t// Reverse second half\n\tsecond := slow.Next\n\tslow.Next = nil\n\tvar prev *ListNode\n\tfor second != nil {\n\t\ttmp := second.Next\n\t\tsecond.Next = prev\n\t\tprev = second\n\t\tsecond = tmp\n\t}\n\t// Merge two halves\n\tfirst, second := head, prev\n\tfor second != nil {\n\t\ttmp1, tmp2 := first.Next, second.Next\n\t\tfirst.Next = second\n\t\tsecond.Next = tmp1\n\t\tfirst = tmp1\n\t\tsecond = tmp2\n\t}\n}`,
    },
  },
  'remove-nth-node-from-end': {
    javascript: {
      code: `function removeNthFromEnd(head, n) {\n  const dummy = new ListNode(0, head);\n  let slow = dummy;\n  let fast = dummy;\n  for (let i = 0; i < n + 1; i++) {\n    fast = fast.next;\n  }\n  while (fast) {\n    slow = slow.next;\n    fast = fast.next;\n  }\n  slow.next = slow.next.next;\n  return dummy.next;\n}`,
    },
    go: {
      code: `func removeNthFromEnd(head *ListNode, n int) *ListNode {\n\tdummy := &ListNode{Next: head}\n\tslow := dummy\n\tfast := dummy\n\tfor i := 0; i < n+1; i++ {\n\t\tfast = fast.Next\n\t}\n\tfor fast != nil {\n\t\tslow = slow.Next\n\t\tfast = fast.Next\n\t}\n\tslow.Next = slow.Next.Next\n\treturn dummy.Next\n}`,
    },
  },
  'add-two-numbers': {
    javascript: {
      code: `function addTwoNumbers(l1, l2) {\n  const dummy = new ListNode(0);\n  let curr = dummy;\n  let carry = 0;\n  while (l1 || l2 || carry) {\n    let val = carry;\n    if (l1) {\n      val += l1.val;\n      l1 = l1.next;\n    }\n    if (l2) {\n      val += l2.val;\n      l2 = l2.next;\n    }\n    carry = Math.floor(val / 10);\n    curr.next = new ListNode(val % 10);\n    curr = curr.next;\n  }\n  return dummy.next;\n}`,
    },
    go: {
      code: `func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {\n\tdummy := &ListNode{}\n\tcurr := dummy\n\tcarry := 0\n\tfor l1 != nil || l2 != nil || carry != 0 {\n\t\tval := carry\n\t\tif l1 != nil {\n\t\t\tval += l1.Val\n\t\t\tl1 = l1.Next\n\t\t}\n\t\tif l2 != nil {\n\t\t\tval += l2.Val\n\t\t\tl2 = l2.Next\n\t\t}\n\t\tcarry = val / 10\n\t\tcurr.Next = &ListNode{Val: val % 10}\n\t\tcurr = curr.Next\n\t}\n\treturn dummy.Next\n}`,
    },
  },
  'linked-list-cycle': {
    javascript: {
      code: `function hasCycle(head) {\n  let slow = head;\n  let fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) {\n      return true;\n    }\n  }\n  return false;\n}`,
    },
    go: {
      code: `func hasCycle(head *ListNode) bool {\n\tslow := head\n\tfast := head\n\tfor fast != nil && fast.Next != nil {\n\t\tslow = slow.Next\n\t\tfast = fast.Next.Next\n\t\tif slow == fast {\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}`,
    },
  },
  'copy-list-with-random-pointer': {
    javascript: {
      code: `function copyRandomList(head) {\n  const oldToNew = new Map();\n  let cur = head;\n  while (cur) {\n    oldToNew.set(cur, new Node(cur.val));\n    cur = cur.next;\n  }\n  cur = head;\n  while (cur) {\n    const copy = oldToNew.get(cur);\n    copy.next = oldToNew.get(cur.next) || null;\n    copy.random = oldToNew.get(cur.random) || null;\n    cur = cur.next;\n  }\n  return oldToNew.get(head) || null;\n}`,
    },
    go: {
      code: `func copyRandomList(head *Node) *Node {\n\toldToNew := map[*Node]*Node{}\n\tcur := head\n\tfor cur != nil {\n\t\toldToNew[cur] = &Node{Val: cur.Val}\n\t\tcur = cur.Next\n\t}\n\tcur = head\n\tfor cur != nil {\n\t\tcopy := oldToNew[cur]\n\t\tcopy.Next = oldToNew[cur.Next]\n\t\tcopy.Random = oldToNew[cur.Random]\n\t\tcur = cur.Next\n\t}\n\treturn oldToNew[head]\n}`,
    },
  },
  'find-the-duplicate-number': {
    javascript: {
      code: `function findDuplicate(nums) {\n  let slow = nums[0];\n  let fast = nums[0];\n  while (true) {\n    slow = nums[slow];\n    fast = nums[nums[fast]];\n    if (slow === fast) {\n      break;\n    }\n  }\n  slow = nums[0];\n  while (slow !== fast) {\n    slow = nums[slow];\n    fast = nums[fast];\n  }\n  return slow;\n}`,
    },
    go: {
      code: `func findDuplicate(nums []int) int {\n\tslow := nums[0]\n\tfast := nums[0]\n\tfor {\n\t\tslow = nums[slow]\n\t\tfast = nums[nums[fast]]\n\t\tif slow == fast {\n\t\t\tbreak\n\t\t}\n\t}\n\tslow = nums[0]\n\tfor slow != fast {\n\t\tslow = nums[slow]\n\t\tfast = nums[fast]\n\t}\n\treturn slow\n}`,
    },
  },
  'lru-cache': {
    javascript: {
      code: `class LRUCache {\n  constructor(capacity) {\n    this.cap = capacity;\n    this.cache = new Map();  // key -> node\n    // Dummy head/tail for doubly linked list\n    this.head = { key: 0, val: 0, prev: null, next: null };\n    this.tail = { key: 0, val: 0, prev: null, next: null };\n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n  }\n\n  get(key) {\n    if (this.cache.has(key)) {\n      this._remove(this.cache.get(key));\n      this._insert(this.cache.get(key));\n      return this.cache.get(key).val;\n    }\n    return -1;\n  }\n\n  put(key, value) {\n    if (this.cache.has(key)) {\n      this._remove(this.cache.get(key));\n    }\n    const node = { key, val: value, prev: null, next: null };\n    this.cache.set(key, node);\n    this._insert(node);\n    if (this.cache.size > this.cap) {\n      const lru = this.head.next;\n      this._remove(lru);\n      this.cache.delete(lru.key);\n    }\n  }\n\n  _remove(node) {\n    node.prev.next = node.next;\n    node.next.prev = node.prev;\n  }\n\n  _insert(node) {\n    node.prev = this.tail.prev;\n    node.next = this.tail;\n    this.tail.prev.next = node;\n    this.tail.prev = node;\n  }\n}`,
    },
    go: {
      code: `type Node struct {\n\tkey, val   int\n\tprev, next *Node\n}\n\ntype LRUCache struct {\n\tcap        int\n\tcache      map[int]*Node\n\thead, tail *Node\n}\n\nfunc Constructor(capacity int) LRUCache {\n\thead := &Node{}\n\ttail := &Node{}\n\thead.next = tail\n\ttail.prev = head\n\treturn LRUCache{cap: capacity, cache: map[int]*Node{}, head: head, tail: tail}\n}\n\nfunc (c *LRUCache) Get(key int) int {\n\tif node, ok := c.cache[key]; ok {\n\t\tc.remove(node)\n\t\tc.insert(node)\n\t\treturn node.val\n\t}\n\treturn -1\n}\n\nfunc (c *LRUCache) Put(key int, value int) {\n\tif node, ok := c.cache[key]; ok {\n\t\tc.remove(node)\n\t}\n\tnode := &Node{key: key, val: value}\n\tc.cache[key] = node\n\tc.insert(node)\n\tif len(c.cache) > c.cap {\n\t\tlru := c.head.next\n\t\tc.remove(lru)\n\t\tdelete(c.cache, lru.key)\n\t}\n}\n\nfunc (c *LRUCache) remove(node *Node) {\n\tnode.prev.next = node.next\n\tnode.next.prev = node.prev\n}\n\nfunc (c *LRUCache) insert(node *Node) {\n\tnode.prev = c.tail.prev\n\tnode.next = c.tail\n\tc.tail.prev.next = node\n\tc.tail.prev = node\n}`,
    },
  },
  'merge-k-sorted-lists': {
    javascript: {
      code: `function mergeKLists(lists) {\n  const dummy = new ListNode(0);\n  let cur = dummy;\n  while (lists.some(l => l !== null)) {\n    // Find list with smallest head\n    let minIdx = -1;\n    for (let i = 0; i < lists.length; i++) {\n      if (lists[i] && (minIdx === -1 || lists[i].val < lists[minIdx].val)) {\n        minIdx = i;\n      }\n    }\n    cur.next = lists[minIdx];\n    cur = cur.next;\n    lists[minIdx] = lists[minIdx].next;\n  }\n  return dummy.next;\n}`,
    },
    go: {
      code: `func mergeKLists(lists []*ListNode) *ListNode {\n\tdummy := &ListNode{}\n\tcur := dummy\n\tfor {\n\t\tminIdx := -1\n\t\tfor i, l := range lists {\n\t\t\tif l != nil && (minIdx == -1 || l.Val < lists[minIdx].Val) {\n\t\t\t\tminIdx = i\n\t\t\t}\n\t\t}\n\t\tif minIdx == -1 {\n\t\t\tbreak\n\t\t}\n\t\tcur.Next = lists[minIdx]\n\t\tcur = cur.Next\n\t\tlists[minIdx] = lists[minIdx].Next\n\t}\n\treturn dummy.Next\n}`,
    },
  },
  'reverse-nodes-in-k-group': {
    javascript: {
      code: `function reverseKGroup(head, k) {\n  const dummy = new ListNode(0, head);\n  let groupPrev = dummy;\n  while (true) {\n    const kth = getKth(groupPrev, k);\n    if (!kth) {\n      break;\n    }\n    const groupNext = kth.next;\n    // Reverse group\n    let prev = kth.next, cur = groupPrev.next;\n    while (cur !== groupNext) {\n      const tmp = cur.next;\n      cur.next = prev;\n      prev = cur;\n      cur = tmp;\n    }\n    const tmp = groupPrev.next;\n    groupPrev.next = kth;\n    groupPrev = tmp;\n  }\n  return dummy.next;\n}\n\nfunction getKth(node, k) {\n  while (node && k > 0) {\n    node = node.next;\n    k--;\n  }\n  return node;\n}`,
    },
    go: {
      code: `func reverseKGroup(head *ListNode, k int) *ListNode {\n\tdummy := &ListNode{Next: head}\n\tgroupPrev := dummy\n\tfor {\n\t\tkth := getKth(groupPrev, k)\n\t\tif kth == nil {\n\t\t\tbreak\n\t\t}\n\t\tgroupNext := kth.Next\n\t\t// Reverse group\n\t\tprev, cur := kth.Next, groupPrev.Next\n\t\tfor cur != groupNext {\n\t\t\ttmp := cur.Next\n\t\t\tcur.Next = prev\n\t\t\tprev = cur\n\t\t\tcur = tmp\n\t\t}\n\t\ttmp := groupPrev.Next\n\t\tgroupPrev.Next = kth\n\t\tgroupPrev = tmp\n\t}\n\treturn dummy.Next\n}\n\nfunc getKth(node *ListNode, k int) *ListNode {\n\tfor node != nil && k > 0 {\n\t\tnode = node.Next\n\t\tk--\n\t}\n\treturn node\n}`,
    },
  },
};
