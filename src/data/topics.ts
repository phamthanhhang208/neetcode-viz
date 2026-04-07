import type { TopicId, TopicMeta } from './types';

const TOPICS: Record<TopicId, TopicMeta> = {
  'arrays-hashing': {
    id: 'arrays-hashing', name: 'Arrays & Hashing', icon: '\u{1F522}', color: '#4ec9b0', order: 1,
    summary: {
      keyIdea: 'Use hash maps for O(1) lookups to avoid nested loops. Arrays store ordered data; hash maps store key-value pairs for instant access.',
      concepts: [
        { term: 'Hash Map', description: 'Key-value store with O(1) average lookup, insert, and delete. Maps keys to values using a hash function.' },
        { term: 'Hash Set', description: 'Collection of unique elements with O(1) membership testing. Useful for deduplication and existence checks.' },
        { term: 'Frequency Count', description: 'Count occurrences of elements using a hash map. Common pattern for anagram detection and majority element.' },
        { term: 'Two-pass vs One-pass', description: 'Some problems need two passes (count then check), others can be solved in a single pass with a hash map.' },
      ],
      whenToUse: ['Need O(1) lookup by value', 'Counting frequencies or duplicates', 'Finding pairs that sum to a target', 'Grouping elements by a property'],
      commonMistakes: ['Forgetting hash maps use O(n) space', 'Not handling hash collisions (built into language maps)', 'Using nested loops when a hash map gives O(n)'],
      complexity: 'Most hash-based solutions are O(n) time, O(n) space.',
    },
  },
  'two-pointers': {
    id: 'two-pointers', name: 'Two Pointers', icon: '\u{1F446}', color: '#569cd6', order: 2,
    summary: {
      keyIdea: 'Use two pointers moving toward each other or in the same direction to solve problems on sorted arrays or linked lists in O(n) time.',
      concepts: [
        { term: 'Opposite Direction', description: 'Start pointers at both ends and move inward. Works on sorted arrays for pair-finding problems.' },
        { term: 'Same Direction', description: 'Both pointers start at the beginning. Fast pointer moves ahead; slow pointer trails behind.' },
        { term: 'Partitioning', description: 'Use two pointers to partition an array in-place around a pivot value.' },
      ],
      whenToUse: ['Array is sorted or can be sorted', 'Finding pairs with a given sum', 'Removing duplicates in-place', 'Palindrome verification'],
      commonMistakes: ['Forgetting to sort the array first', 'Off-by-one errors with pointer bounds'],
      complexity: 'Typically O(n) time after O(n log n) sort if needed.',
    },
  },
  'sliding-window': {
    id: 'sliding-window', name: 'Sliding Window', icon: '\u{1FA9F}', color: '#dcdcaa', order: 3,
    summary: {
      keyIdea: 'Maintain a window of elements and slide it across the array, expanding or shrinking to find optimal subarrays or substrings.',
      concepts: [
        { term: 'Fixed Window', description: 'Window of constant size k slides one element at a time. Add new element, remove old element.' },
        { term: 'Variable Window', description: 'Expand the right boundary until a condition is violated, then shrink from the left until valid again.' },
        { term: 'Window State', description: 'Track the window state with a hash map, counter, or running sum to avoid recomputing from scratch.' },
      ],
      whenToUse: ['Finding max/min subarray of size k', 'Longest substring with at most k distinct characters', 'Minimum window containing all target characters'],
      commonMistakes: ['Not properly shrinking the window', 'Forgetting to update state when removing elements from the left'],
      complexity: 'O(n) time since each element is added and removed at most once.',
    },
  },
  'stack': {
    id: 'stack', name: 'Stack', icon: '\u{1F4DA}', color: '#c586c0', order: 4,
    summary: {
      keyIdea: 'LIFO (Last In, First Out) structure. Use for matching pairs, tracking nested structures, and maintaining monotonic sequences.',
      concepts: [
        { term: 'Matching Pairs', description: 'Push opening brackets/delimiters, pop and verify when closing bracket appears.' },
        { term: 'Monotonic Stack', description: 'Maintain a stack where elements are always increasing or decreasing. Useful for "next greater element" problems.' },
        { term: 'Expression Evaluation', description: 'Use a stack to evaluate postfix expressions or convert between infix/postfix notation.' },
      ],
      whenToUse: ['Matching parentheses or brackets', 'Next greater/smaller element problems', 'Evaluating mathematical expressions', 'Undo operations or backtracking'],
      commonMistakes: ['Forgetting to check if stack is empty before popping', 'Not handling remaining elements in stack after processing'],
      complexity: 'O(n) time for most stack problems. O(n) space for the stack.',
    },
  },
  'binary-search': {
    id: 'binary-search', name: 'Binary Search', icon: '\u{1F50D}', color: '#6a9955', order: 5,
    summary: {
      keyIdea: 'Halve the search space each step by comparing with the middle element. Requires sorted or monotonic data.',
      concepts: [
        { term: 'Classic Binary Search', description: 'Find target in sorted array. Compare mid with target, eliminate half each iteration.' },
        { term: 'Search Space Reduction', description: 'Apply binary search on the answer space when the problem has a monotonic predicate.' },
        { term: 'Rotated Arrays', description: 'Modified binary search where one half is always sorted. Determine which half, then decide direction.' },
      ],
      whenToUse: ['Sorted array search', 'Finding minimum/maximum that satisfies a condition', 'Search in rotated sorted arrays', 'Finding boundaries (first/last occurrence)'],
      commonMistakes: ['Off-by-one errors with lo/hi boundaries', 'Infinite loops from incorrect mid calculation or boundary updates'],
      complexity: 'O(log n) time, O(1) space.',
    },
  },
  'linked-list': {
    id: 'linked-list', name: 'Linked List', icon: '\u{1F517}', color: '#ce9178', order: 6,
    summary: {
      keyIdea: 'Sequential access data structure where each node points to the next. Insertions and deletions are O(1) at known positions.',
      concepts: [
        { term: 'Fast & Slow Pointers', description: 'Two pointers at different speeds detect cycles and find middle elements.' },
        { term: 'Reversal', description: 'Reverse pointers iteratively using prev/curr/next pattern.' },
        { term: 'Dummy Head', description: 'Use a sentinel node before the real head to simplify edge cases.' },
      ],
      whenToUse: ['Frequent insertions/deletions at arbitrary positions', 'Cycle detection', 'Merging sorted sequences', 'Reversing subsequences'],
      complexity: 'O(n) traversal. O(1) insert/delete at known position.',
    },
  },
  'trees': {
    id: 'trees', name: 'Trees', icon: '\u{1F332}', color: '#4ec9b0', order: 7,
    summary: {
      keyIdea: 'Hierarchical structure with recursive subproblems. Most tree problems use DFS (preorder, inorder, postorder) or BFS (level order).',
      concepts: [
        { term: 'DFS Traversals', description: 'Preorder (root-left-right), Inorder (left-root-right), Postorder (left-right-root). Each suits different problems.' },
        { term: 'BFS / Level Order', description: 'Visit nodes level by level using a queue. Useful for level-specific operations.' },
        { term: 'BST Property', description: 'Left subtree values < root < right subtree values. Enables O(log n) search in balanced trees.' },
        { term: 'Recursive Substructure', description: 'Tree problems often reduce to solving the same problem on subtrees and combining results.' },
      ],
      whenToUse: ['Hierarchical data processing', 'Path finding in trees', 'BST operations (search, insert, validate)', 'Tree construction from traversals'],
      complexity: 'O(n) for traversals. O(h) space for recursion stack where h is height.',
    },
  },
  'tries': {
    id: 'tries', name: 'Tries', icon: '\u{1F524}', color: '#569cd6', order: 8,
    summary: {
      keyIdea: 'Tree-like structure for storing strings where each node represents a character. Enables O(m) prefix lookups where m is word length.',
      concepts: [
        { term: 'Prefix Tree', description: 'Each path from root to a node represents a prefix. End-of-word markers distinguish complete words.' },
        { term: 'Character Nodes', description: 'Each node has up to 26 children (for lowercase English). Space-efficient for shared prefixes.' },
      ],
      whenToUse: ['Autocomplete / prefix search', 'Dictionary word lookups', 'Word search in grids'],
      complexity: 'O(m) per operation where m is word length. O(n*m) space total.',
    },
  },
  'heap-priority-queue': {
    id: 'heap-priority-queue', name: 'Heap / Priority Queue', icon: '\u{26F0}\u{FE0F}', color: '#dcdcaa', order: 9,
    summary: {
      keyIdea: 'Efficiently retrieve the min or max element. Heaps maintain partial ordering with O(log n) insert and extract.',
      concepts: [
        { term: 'Min Heap / Max Heap', description: 'Parent is always smaller (min) or larger (max) than children. Root is the extreme element.' },
        { term: 'Top-K Pattern', description: 'Use a heap of size k to efficiently find the k largest or smallest elements in O(n log k).' },
        { term: 'Two Heaps', description: 'Use a max heap and min heap together to find running medians or balance partitions.' },
      ],
      whenToUse: ['Finding k-th largest/smallest', 'Merging k sorted lists', 'Running median', 'Task scheduling by priority'],
      complexity: 'O(log n) insert/extract. O(n) heapify.',
    },
  },
  'backtracking': {
    id: 'backtracking', name: 'Backtracking', icon: '\u{1F519}', color: '#c586c0', order: 10,
    summary: {
      keyIdea: 'Explore all candidates by building solutions incrementally and abandoning (backtracking) when a candidate cannot lead to a valid solution.',
      concepts: [
        { term: 'Decision Tree', description: 'Each recursive call makes a choice. The recursion tree represents all possible combinations.' },
        { term: 'Pruning', description: 'Skip branches that cannot lead to valid solutions to reduce the search space.' },
        { term: 'State Management', description: 'Add an element before recursing, remove it after returning (undo the choice).' },
      ],
      whenToUse: ['Generating all subsets, permutations, or combinations', 'Constraint satisfaction (N-Queens, Sudoku)', 'Path finding with constraints'],
      commonMistakes: ['Forgetting to undo choices when backtracking', 'Not pruning, leading to TLE'],
      complexity: 'Often exponential: O(2^n) for subsets, O(n!) for permutations.',
    },
  },
  'graphs': {
    id: 'graphs', name: 'Graphs', icon: '\u{1F578}\u{FE0F}', color: '#6a9955', order: 11,
    summary: {
      keyIdea: 'Model relationships between entities. Use BFS for shortest paths in unweighted graphs, DFS for connected components and cycle detection.',
      concepts: [
        { term: 'BFS', description: 'Level-by-level exploration using a queue. Finds shortest path in unweighted graphs.' },
        { term: 'DFS', description: 'Depth-first exploration using recursion or stack. Good for cycle detection and topological sort.' },
        { term: 'Adjacency List', description: 'Space-efficient graph representation mapping each node to its neighbors.' },
        { term: 'Topological Sort', description: 'Linear ordering of vertices in a DAG where every edge u->v has u before v.' },
      ],
      whenToUse: ['Finding connected components', 'Shortest path problems', 'Cycle detection', 'Course scheduling (topological sort)'],
      complexity: 'BFS/DFS: O(V + E) time and space.',
    },
  },
  'advanced-graphs': {
    id: 'advanced-graphs', name: 'Advanced Graphs', icon: '\u{1F5FA}\u{FE0F}', color: '#ce9178', order: 12,
    summary: {
      keyIdea: 'Weighted graph algorithms: Dijkstra for shortest paths, Prim/Kruskal for MST, and specialized traversals.',
      concepts: [
        { term: "Dijkstra's Algorithm", description: 'Shortest path from source to all vertices in weighted graph with non-negative edges. Uses priority queue.' },
        { term: 'Minimum Spanning Tree', description: "Connect all vertices with minimum total edge weight. Prim's (greedy) or Kruskal's (union-find)." },
        { term: 'Union-Find', description: 'Disjoint set data structure for efficiently tracking connected components with path compression.' },
      ],
      whenToUse: ['Weighted shortest paths', 'Minimum cost to connect all points', 'Network delay/flow problems'],
      complexity: "Dijkstra: O((V+E) log V). Kruskal: O(E log E).",
    },
  },
  '1d-dp': {
    id: '1d-dp', name: '1-D Dynamic Programming', icon: '\u{1F4CA}', color: '#4ec9b0', order: 13,
    summary: {
      keyIdea: 'Break problems into overlapping subproblems. Store results to avoid redundant computation. dp[i] depends on previous values.',
      concepts: [
        { term: 'Memoization (Top-down)', description: 'Cache recursive results. Start from the main problem and recurse into subproblems.' },
        { term: 'Tabulation (Bottom-up)', description: 'Fill a table iteratively from base cases. Often more space-efficient.' },
        { term: 'State Transition', description: 'Define how dp[i] relates to dp[i-1], dp[i-2], etc. The recurrence relation is the core of DP.' },
      ],
      whenToUse: ['Counting ways (climbing stairs, decode ways)', 'Optimization (min cost, max profit)', 'Sequence problems (LIS, palindromes)'],
      commonMistakes: ['Wrong base case', 'Incorrect state transition', 'Not recognizing overlapping subproblems'],
      complexity: 'Usually O(n) time and O(n) or O(1) space with optimization.',
    },
  },
  '2d-dp': {
    id: '2d-dp', name: '2-D Dynamic Programming', icon: '\u{1F4C8}', color: '#569cd6', order: 14,
    summary: {
      keyIdea: 'Problems with two changing parameters. dp[i][j] represents the solution for a subproblem defined by two indices.',
      concepts: [
        { term: '2D Table', description: 'Build a matrix where each cell depends on adjacent cells (left, above, diagonal).' },
        { term: 'String DP', description: 'Common for comparing two strings: LCS, edit distance. dp[i][j] = answer for s[0..i] and t[0..j].' },
        { term: 'Grid DP', description: 'Path counting or optimization in a 2D grid. Move right/down from top-left to bottom-right.' },
      ],
      whenToUse: ['Comparing two sequences', 'Path problems in grids', 'Knapsack-style problems', 'Interleaving or matching patterns'],
      complexity: 'Usually O(m*n) time and space.',
    },
  },
  'greedy': {
    id: 'greedy', name: 'Greedy', icon: '\u{1F911}', color: '#dcdcaa', order: 15,
    summary: {
      keyIdea: 'Make the locally optimal choice at each step, hoping it leads to a global optimum. Works when greedy choice property holds.',
      concepts: [
        { term: 'Greedy Choice Property', description: 'A globally optimal solution can be reached by making locally optimal choices.' },
        { term: 'Sorting First', description: 'Many greedy problems require sorting the input to enable the greedy strategy.' },
        { term: 'Proof of Correctness', description: 'Exchange argument: show swapping any non-greedy choice for a greedy one never worsens the solution.' },
      ],
      whenToUse: ['Activity selection / interval scheduling', 'Huffman coding', 'Jump game problems', 'When DP seems overkill and greedy property holds'],
      commonMistakes: ['Applying greedy when the greedy choice property does not hold', 'Not sorting when needed'],
      complexity: 'Often O(n log n) due to sorting, O(n) for the greedy pass.',
    },
  },
  'intervals': {
    id: 'intervals', name: 'Intervals', icon: '\u{1F4CF}', color: '#c586c0', order: 16,
    summary: {
      keyIdea: 'Sort intervals by start (or end) time, then process sequentially. Detect overlaps by comparing current start with previous end.',
      concepts: [
        { term: 'Merge Intervals', description: 'Sort by start, merge overlapping intervals by extending the end.' },
        { term: 'Sweep Line', description: 'Process events (starts and ends) in order. Track active intervals with a counter or heap.' },
        { term: 'Overlap Detection', description: 'Two intervals [a,b] and [c,d] overlap if a < d and c < b.' },
      ],
      whenToUse: ['Merging overlapping intervals', 'Finding meeting room conflicts', 'Inserting into sorted intervals', 'Minimum number of rooms/resources'],
      complexity: 'O(n log n) for sorting. O(n) for the merge pass.',
    },
  },
  'math-geometry': {
    id: 'math-geometry', name: 'Math & Geometry', icon: '\u{1F4D0}', color: '#6a9955', order: 17,
    summary: {
      keyIdea: 'Apply mathematical properties and geometric reasoning. Matrix operations, modular arithmetic, and number theory.',
      concepts: [
        { term: 'Matrix Rotation', description: 'Rotate 90 degrees by transposing then reversing each row.' },
        { term: 'Spiral Traversal', description: 'Traverse matrix in spiral order using four boundaries (top, bottom, left, right).' },
        { term: 'Number Theory', description: 'GCD, modular arithmetic, prime checking, fast exponentiation.' },
      ],
      whenToUse: ['Matrix transformations', 'Number manipulation', 'Geometric calculations', 'Detecting cycles in number sequences'],
      complexity: 'Varies widely by problem.',
    },
  },
  'bit-manipulation': {
    id: 'bit-manipulation', name: 'Bit Manipulation', icon: '\u{1F527}', color: '#ce9178', order: 18,
    summary: {
      keyIdea: 'Use bitwise operations (AND, OR, XOR, shift) for efficient computation. XOR is especially useful for finding unique elements.',
      concepts: [
        { term: 'XOR Properties', description: 'a ^ a = 0, a ^ 0 = a. XOR all elements to find the single unique number.' },
        { term: 'Bit Masking', description: 'Use individual bits as boolean flags. Set, clear, toggle, and check bits.' },
        { term: 'Counting Bits', description: 'Brian Kernighan algorithm: n & (n-1) removes the lowest set bit. Count iterations.' },
      ],
      whenToUse: ['Finding single/unique numbers', 'Subset representation', 'Power of 2 checks', 'Space-efficient boolean arrays'],
      complexity: 'O(1) per bitwise operation. O(log n) for counting bits.',
    },
  },
};

export function getOrderedTopics(): TopicMeta[] {
  return Object.values(TOPICS).sort((a, b) => a.order - b.order);
}

export function getTopicMeta(topicId: TopicId): TopicMeta | undefined {
  return TOPICS[topicId];
}
