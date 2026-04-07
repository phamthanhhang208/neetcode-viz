export const SEED_STACK = {
  name: 'Algorithms & Data Structures',
  color: '#4ec9b0',
};

export const SEED_CARDS: { front: string; back: string }[] = [
  {
    front: 'What is **Big O notation**?',
    back: `Describes the **upper bound** of an algorithm's time or space complexity as input grows.\n\n- **O(1)** — constant\n- **O(log n)** — logarithmic\n- **O(n)** — linear\n- **O(n log n)** — linearithmic\n- **O(n²)** — quadratic\n- **O(2ⁿ)** — exponential\n\nFocuses on the **dominant term** and ignores constants.`,
  },
  {
    front: 'Time complexity of **binary search**?',
    back: '`O(log n)` — halves the search space each step.\n\n```python\ndef binary_search(nums, target):\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1\n```',
  },
  {
    front: 'What is a **hash map** and its average time complexity?',
    back: 'A **key-value store** using a hash function to map keys to buckets.\n\n| Operation | Average | Worst |\n|-----------|---------|-------|\n| Get       | O(1)    | O(n)  |\n| Set       | O(1)    | O(n)  |\n| Delete    | O(1)    | O(n)  |\n\nWorst case happens with many collisions.',
  },
  {
    front: 'Difference between **stack** and **queue**?',
    back: '**Stack** — LIFO (Last In, First Out)\n- `push()` adds to top\n- `pop()` removes from top\n- Use: undo, DFS, bracket matching\n\n**Queue** — FIFO (First In, First Out)\n- `enqueue()` adds to back\n- `dequeue()` removes from front\n- Use: BFS, task scheduling',
  },
  {
    front: 'What is a **linked list**? When to use over array?',
    back: 'A sequence of **nodes** where each points to the next.\n\n**Use linked list when:**\n- Frequent insert/delete at arbitrary positions (O(1) at known node)\n- Don\'t need random access by index\n\n**Use array when:**\n- Need O(1) index access\n- Cache-friendly iteration matters\n- Size is known upfront',
  },
  {
    front: 'Explain **DFS** vs **BFS**',
    back: '**DFS (Depth-First Search)**\n- Uses **stack** (or recursion)\n- Goes as deep as possible first\n- O(V + E) time\n- Use: cycle detection, topological sort, path finding\n\n**BFS (Breadth-First Search)**\n- Uses **queue**\n- Explores level by level\n- O(V + E) time\n- Use: shortest path (unweighted), level-order traversal',
  },
  {
    front: 'What is **dynamic programming**?',
    back: 'Solving problems by breaking them into **overlapping subproblems** and storing results.\n\nTwo approaches:\n1. **Top-down (memoization)** — recursive + cache\n2. **Bottom-up (tabulation)** — iterative, fill table from base cases\n\n**Key signs a problem needs DP:**\n- Optimal substructure\n- Overlapping subproblems\n- "Count ways", "min cost", "max value"',
  },
  {
    front: 'What is a **binary search tree** (BST) property?',
    back: 'For every node:\n- **Left** subtree values < node value\n- **Right** subtree values > node value\n\n| Operation | Average  | Worst (unbalanced) |\n|-----------|----------|--------------------|\n| Search    | O(log n) | O(n)               |\n| Insert    | O(log n) | O(n)               |\n| Delete    | O(log n) | O(n)               |\n\nBalanced BSTs (AVL, Red-Black) guarantee O(log n).',
  },
  {
    front: 'What is a **heap**? Min-heap vs max-heap?',
    back: 'A **complete binary tree** with the heap property:\n\n- **Min-heap**: parent ≤ children (root = minimum)\n- **Max-heap**: parent ≥ children (root = maximum)\n\n| Operation   | Time     |\n|-------------|----------|\n| Insert      | O(log n) |\n| Extract min/max | O(log n) |\n| Peek        | O(1)     |\n| Heapify     | O(n)     |\n\nUsed for: priority queues, top-K problems, median finding.',
  },
  {
    front: 'Explain the **two-pointer technique**',
    back: 'Use two pointers on sorted data to solve problems in **O(n)** time.\n\n**Opposite direction:**\n```python\nl, r = 0, len(arr) - 1\nwhile l < r:\n    if condition: l += 1\n    else: r -= 1\n```\n\n**Same direction (fast/slow):**\n- Cycle detection\n- Remove duplicates\n- Finding middle of linked list',
  },
  {
    front: 'What is **memoization**?',
    back: 'Caching the results of expensive function calls to avoid redundant computation.\n\n```python\nmemo = {}\ndef fib(n):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = fib(n-1) + fib(n-2)\n    return memo[n]\n```\n\nThis is the **top-down** approach to dynamic programming.\nConverts O(2ⁿ) fibonacci to O(n).',
  },
  {
    front: 'Time complexity of common **sorting** algorithms?',
    back: '| Algorithm      | Best     | Average  | Worst    | Space |\n|----------------|----------|----------|----------|-------|\n| Quick Sort     | O(n log n) | O(n log n) | O(n²)  | O(log n) |\n| Merge Sort     | O(n log n) | O(n log n) | O(n log n) | O(n) |\n| Heap Sort      | O(n log n) | O(n log n) | O(n log n) | O(1) |\n| Bubble Sort    | O(n)     | O(n²)   | O(n²)    | O(1) |\n| Counting Sort  | O(n+k)   | O(n+k)  | O(n+k)   | O(k)  |',
  },
  {
    front: 'What is a **trie** (prefix tree)?',
    back: 'A tree where each node represents a **character**. Paths from root to nodes form prefixes.\n\n- **Insert/Search**: O(m) where m = word length\n- **Space**: O(n × m) worst case\n\n**Use cases:**\n- Autocomplete\n- Spell checking\n- IP routing\n- Word search in grids\n\nEnd-of-word nodes are marked specially.',
  },
  {
    front: 'Explain the **sliding window** pattern',
    back: 'Maintain a **window** over contiguous elements. Expand right, shrink left.\n\n```python\nl = 0\nfor r in range(len(arr)):\n    # expand: add arr[r] to window\n    while window_invalid:\n        # shrink: remove arr[l]\n        l += 1\n    # update answer\n```\n\n**O(n)** because each element is added/removed at most once.\n\n**Use for:** max/min subarray, longest substring with constraints.',
  },
  {
    front: 'What is **topological sort**?',
    back: 'A linear ordering of vertices in a **DAG** (Directed Acyclic Graph) where for every edge u→v, u comes before v.\n\n**Kahn\'s Algorithm (BFS):**\n1. Find all nodes with in-degree 0\n2. Add to queue, process, reduce neighbors\' in-degree\n3. Repeat until empty\n\n**DFS approach:**\n1. DFS from each unvisited node\n2. Add to result on backtrack (reverse post-order)\n\nUse: course scheduling, build dependencies.',
  },
  {
    front: 'What is **Union-Find** (Disjoint Set)?',
    back: 'Tracks **connected components** efficiently.\n\n```python\ndef find(x):\n    if parent[x] != x:\n        parent[x] = find(parent[x])  # path compression\n    return parent[x]\n\ndef union(x, y):\n    px, py = find(x), find(y)\n    if rank[px] < rank[py]: px, py = py, px\n    parent[py] = px  # union by rank\n```\n\nWith path compression + union by rank: **nearly O(1)** per operation.\n\nUse: connected components, Kruskal\'s MST, cycle detection.',
  },
  {
    front: 'What is **backtracking**?',
    back: 'Explore all candidates by building solutions **incrementally**. Abandon a path when it can\'t lead to a valid solution.\n\n```python\ndef backtrack(path, choices):\n    if is_solution(path):\n        result.append(path[:])\n        return\n    for choice in choices:\n        path.append(choice)      # choose\n        backtrack(path, ...)\n        path.pop()               # un-choose\n```\n\n**Time:** Often O(2ⁿ) or O(n!)\n**Use:** subsets, permutations, N-Queens, Sudoku.',
  },
  {
    front: 'Explain **greedy** vs **dynamic programming**',
    back: '**Greedy:**\n- Makes **locally optimal** choice at each step\n- Faster, simpler\n- Doesn\'t always give global optimum\n- Works when: **greedy choice property** holds\n\n**Dynamic Programming:**\n- Considers **all subproblems**\n- Guaranteed optimal\n- More complex, uses more memory\n- Works when: optimal substructure + overlapping subproblems\n\n**Rule of thumb:** Try greedy first. If it fails, use DP.',
  },
  {
    front: 'What is **amortized analysis**?',
    back: 'The **average time per operation** over a worst-case sequence of operations.\n\n**Example — Dynamic Array `append()`:**\n- Most appends: O(1)\n- Occasionally doubles capacity: O(n) copy\n- Over n appends: total work = n + n/2 + n/4 + ... ≈ 2n\n- **Amortized: O(1)** per append\n\n**Methods:**\n1. Aggregate analysis\n2. Accounting method\n3. Potential method',
  },
  {
    front: 'When to use **BFS** for shortest path?',
    back: '**BFS** finds the shortest path in **unweighted graphs** (fewest edges).\n\nFor **weighted graphs**, use:\n- **Dijkstra\'s**: non-negative weights, O((V+E) log V)\n- **Bellman-Ford**: allows negative weights, O(V·E)\n- **Floyd-Warshall**: all pairs, O(V³)\n\nBFS guarantees shortest path because it explores nodes **level by level** — all nodes at distance k are visited before distance k+1.',
  },
];
