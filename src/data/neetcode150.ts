import type { NeetCodeProblem, TopicId } from './types';

export const NEETCODE_150: NeetCodeProblem[] = [
  // Arrays & Hashing (9)
  { id: 'contains-duplicate', name: 'Contains Duplicate', number: 217, difficulty: 'Easy', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/contains-duplicate/', hasVisualization: true },
  { id: 'valid-anagram', name: 'Valid Anagram', number: 242, difficulty: 'Easy', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/valid-anagram/', hasVisualization: true },
  { id: 'two-sum', name: 'Two Sum', number: 1, difficulty: 'Easy', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/two-sum/', hasVisualization: true },
  { id: 'group-anagrams', name: 'Group Anagrams', number: 49, difficulty: 'Medium', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/group-anagrams/', hasVisualization: true },
  { id: 'top-k-frequent-elements', name: 'Top K Frequent Elements', number: 347, difficulty: 'Medium', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/top-k-frequent-elements/', hasVisualization: true },
  { id: 'encode-and-decode-strings', name: 'Encode and Decode Strings', number: 271, difficulty: 'Medium', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/encode-and-decode-strings/', hasVisualization: true },
  { id: 'product-of-array-except-self', name: 'Product of Array Except Self', number: 238, difficulty: 'Medium', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/product-of-array-except-self/', hasVisualization: true },
  { id: 'valid-sudoku', name: 'Valid Sudoku', number: 36, difficulty: 'Medium', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/valid-sudoku/', hasVisualization: true },
  { id: 'longest-consecutive-sequence', name: 'Longest Consecutive Sequence', number: 128, difficulty: 'Medium', topicId: 'arrays-hashing', link: 'https://leetcode.com/problems/longest-consecutive-sequence/', hasVisualization: true },

  // Two Pointers (5)
  { id: 'valid-palindrome', name: 'Valid Palindrome', number: 125, difficulty: 'Easy', topicId: 'two-pointers', link: 'https://leetcode.com/problems/valid-palindrome/', hasVisualization: true },
  { id: 'two-sum-ii', name: 'Two Sum II', number: 167, difficulty: 'Medium', topicId: 'two-pointers', link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/', hasVisualization: true },
  { id: '3sum', name: '3Sum', number: 15, difficulty: 'Medium', topicId: 'two-pointers', link: 'https://leetcode.com/problems/3sum/', hasVisualization: true },
  { id: 'container-with-most-water', name: 'Container With Most Water', number: 11, difficulty: 'Medium', topicId: 'two-pointers', link: 'https://leetcode.com/problems/container-with-most-water/', hasVisualization: true },
  { id: 'trapping-rain-water', name: 'Trapping Rain Water', number: 42, difficulty: 'Hard', topicId: 'two-pointers', link: 'https://leetcode.com/problems/trapping-rain-water/', hasVisualization: true },

  // Sliding Window (6)
  { id: 'best-time-to-buy-and-sell-stock', name: 'Best Time to Buy and Sell Stock', number: 121, difficulty: 'Easy', topicId: 'sliding-window', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', hasVisualization: true },
  { id: 'longest-substring-without-repeating', name: 'Longest Substring Without Repeating Characters', number: 3, difficulty: 'Medium', topicId: 'sliding-window', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', hasVisualization: true },
  { id: 'longest-repeating-character-replacement', name: 'Longest Repeating Character Replacement', number: 424, difficulty: 'Medium', topicId: 'sliding-window', link: 'https://leetcode.com/problems/longest-repeating-character-replacement/', hasVisualization: true },
  { id: 'permutation-in-string', name: 'Permutation in String', number: 567, difficulty: 'Medium', topicId: 'sliding-window', link: 'https://leetcode.com/problems/permutation-in-string/', hasVisualization: true },
  { id: 'minimum-window-substring', name: 'Minimum Window Substring', number: 76, difficulty: 'Hard', topicId: 'sliding-window', link: 'https://leetcode.com/problems/minimum-window-substring/', hasVisualization: true },
  { id: 'sliding-window-maximum', name: 'Sliding Window Maximum', number: 239, difficulty: 'Hard', topicId: 'sliding-window', link: 'https://leetcode.com/problems/sliding-window-maximum/', hasVisualization: true },

  // Stack (7)
  { id: 'valid-parentheses', name: 'Valid Parentheses', number: 20, difficulty: 'Easy', topicId: 'stack', link: 'https://leetcode.com/problems/valid-parentheses/', hasVisualization: true },
  { id: 'min-stack', name: 'Min Stack', number: 155, difficulty: 'Medium', topicId: 'stack', link: 'https://leetcode.com/problems/min-stack/', hasVisualization: true },
  { id: 'evaluate-reverse-polish-notation', name: 'Evaluate Reverse Polish Notation', number: 150, difficulty: 'Medium', topicId: 'stack', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', hasVisualization: true },
  { id: 'generate-parentheses', name: 'Generate Parentheses', number: 22, difficulty: 'Medium', topicId: 'stack', link: 'https://leetcode.com/problems/generate-parentheses/', hasVisualization: true },
  { id: 'daily-temperatures', name: 'Daily Temperatures', number: 739, difficulty: 'Medium', topicId: 'stack', link: 'https://leetcode.com/problems/daily-temperatures/', hasVisualization: true },
  { id: 'car-fleet', name: 'Car Fleet', number: 853, difficulty: 'Medium', topicId: 'stack', link: 'https://leetcode.com/problems/car-fleet/', hasVisualization: true },
  { id: 'largest-rectangle-in-histogram', name: 'Largest Rectangle in Histogram', number: 84, difficulty: 'Hard', topicId: 'stack', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', hasVisualization: true },

  // Binary Search (7)
  { id: 'binary-search', name: 'Binary Search', number: 704, difficulty: 'Easy', topicId: 'binary-search', link: 'https://leetcode.com/problems/binary-search/', hasVisualization: true },
  { id: 'search-a-2d-matrix', name: 'Search a 2D Matrix', number: 74, difficulty: 'Medium', topicId: 'binary-search', link: 'https://leetcode.com/problems/search-a-2d-matrix/', hasVisualization: true },
  { id: 'koko-eating-bananas', name: 'Koko Eating Bananas', number: 875, difficulty: 'Medium', topicId: 'binary-search', link: 'https://leetcode.com/problems/koko-eating-bananas/', hasVisualization: true },
  { id: 'find-minimum-in-rotated-sorted-array', name: 'Find Minimum in Rotated Sorted Array', number: 153, difficulty: 'Medium', topicId: 'binary-search', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', hasVisualization: true },
  { id: 'search-in-rotated-sorted-array', name: 'Search in Rotated Sorted Array', number: 33, difficulty: 'Medium', topicId: 'binary-search', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', hasVisualization: true },
  { id: 'time-based-key-value-store', name: 'Time Based Key-Value Store', number: 981, difficulty: 'Medium', topicId: 'binary-search', link: 'https://leetcode.com/problems/time-based-key-value-store/', hasVisualization: true },
  { id: 'median-of-two-sorted-arrays', name: 'Median of Two Sorted Arrays', number: 4, difficulty: 'Hard', topicId: 'binary-search', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', hasVisualization: true },

  // Linked List (11)
  { id: 'reverse-linked-list', name: 'Reverse Linked List', number: 206, difficulty: 'Easy', topicId: 'linked-list', link: 'https://leetcode.com/problems/reverse-linked-list/', hasVisualization: true },
  { id: 'merge-two-sorted-lists', name: 'Merge Two Sorted Lists', number: 21, difficulty: 'Easy', topicId: 'linked-list', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', hasVisualization: true },
  { id: 'reorder-list', name: 'Reorder List', number: 143, difficulty: 'Medium', topicId: 'linked-list', link: 'https://leetcode.com/problems/reorder-list/', hasVisualization: true },
  { id: 'remove-nth-node-from-end', name: 'Remove Nth Node From End of List', number: 19, difficulty: 'Medium', topicId: 'linked-list', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', hasVisualization: true },
  { id: 'copy-list-with-random-pointer', name: 'Copy List with Random Pointer', number: 138, difficulty: 'Medium', topicId: 'linked-list', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/', hasVisualization: true },
  { id: 'add-two-numbers', name: 'Add Two Numbers', number: 2, difficulty: 'Medium', topicId: 'linked-list', link: 'https://leetcode.com/problems/add-two-numbers/', hasVisualization: true },
  { id: 'linked-list-cycle', name: 'Linked List Cycle', number: 141, difficulty: 'Easy', topicId: 'linked-list', link: 'https://leetcode.com/problems/linked-list-cycle/', hasVisualization: true },
  { id: 'find-the-duplicate-number', name: 'Find the Duplicate Number', number: 287, difficulty: 'Medium', topicId: 'linked-list', link: 'https://leetcode.com/problems/find-the-duplicate-number/', hasVisualization: true },
  { id: 'lru-cache', name: 'LRU Cache', number: 146, difficulty: 'Medium', topicId: 'linked-list', link: 'https://leetcode.com/problems/lru-cache/', hasVisualization: true },
  { id: 'merge-k-sorted-lists', name: 'Merge k Sorted Lists', number: 23, difficulty: 'Hard', topicId: 'linked-list', link: 'https://leetcode.com/problems/merge-k-sorted-lists/', hasVisualization: true },
  { id: 'reverse-nodes-in-k-group', name: 'Reverse Nodes in k-Group', number: 25, difficulty: 'Hard', topicId: 'linked-list', link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', hasVisualization: true },

  // Trees (15)
  { id: 'invert-binary-tree', name: 'Invert Binary Tree', number: 226, difficulty: 'Easy', topicId: 'trees', link: 'https://leetcode.com/problems/invert-binary-tree/', hasVisualization: true },
  { id: 'maximum-depth-of-binary-tree', name: 'Maximum Depth of Binary Tree', number: 104, difficulty: 'Easy', topicId: 'trees', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', hasVisualization: true },
  { id: 'diameter-of-binary-tree', name: 'Diameter of Binary Tree', number: 543, difficulty: 'Easy', topicId: 'trees', link: 'https://leetcode.com/problems/diameter-of-binary-tree/', hasVisualization: true },
  { id: 'balanced-binary-tree', name: 'Balanced Binary Tree', number: 110, difficulty: 'Easy', topicId: 'trees', link: 'https://leetcode.com/problems/balanced-binary-tree/', hasVisualization: true },
  { id: 'same-tree', name: 'Same Tree', number: 100, difficulty: 'Easy', topicId: 'trees', link: 'https://leetcode.com/problems/same-tree/', hasVisualization: true },
  { id: 'subtree-of-another-tree', name: 'Subtree of Another Tree', number: 572, difficulty: 'Easy', topicId: 'trees', link: 'https://leetcode.com/problems/subtree-of-another-tree/', hasVisualization: true },
  { id: 'lowest-common-ancestor-of-bst', name: 'Lowest Common Ancestor of BST', number: 235, difficulty: 'Medium', topicId: 'trees', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', hasVisualization: true },
  { id: 'binary-tree-level-order-traversal', name: 'Binary Tree Level Order Traversal', number: 102, difficulty: 'Medium', topicId: 'trees', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', hasVisualization: true },
  { id: 'binary-tree-right-side-view', name: 'Binary Tree Right Side View', number: 199, difficulty: 'Medium', topicId: 'trees', link: 'https://leetcode.com/problems/binary-tree-right-side-view/', hasVisualization: true },
  { id: 'count-good-nodes', name: 'Count Good Nodes in Binary Tree', number: 1448, difficulty: 'Medium', topicId: 'trees', link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/', hasVisualization: true },
  { id: 'validate-bst', name: 'Validate Binary Search Tree', number: 98, difficulty: 'Medium', topicId: 'trees', link: 'https://leetcode.com/problems/validate-binary-search-tree/', hasVisualization: true },
  { id: 'kth-smallest-element-in-bst', name: 'Kth Smallest Element in a BST', number: 230, difficulty: 'Medium', topicId: 'trees', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', hasVisualization: true },
  { id: 'construct-binary-tree', name: 'Construct Binary Tree from Preorder and Inorder', number: 105, difficulty: 'Medium', topicId: 'trees', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', hasVisualization: true },
  { id: 'binary-tree-maximum-path-sum', name: 'Binary Tree Maximum Path Sum', number: 124, difficulty: 'Hard', topicId: 'trees', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', hasVisualization: true },
  { id: 'serialize-and-deserialize-binary-tree', name: 'Serialize and Deserialize Binary Tree', number: 297, difficulty: 'Hard', topicId: 'trees', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', hasVisualization: true },

  // Tries (3)
  { id: 'implement-trie', name: 'Implement Trie (Prefix Tree)', number: 208, difficulty: 'Medium', topicId: 'tries', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/', hasVisualization: true },
  { id: 'design-add-and-search-words', name: 'Design Add and Search Words Data Structure', number: 211, difficulty: 'Medium', topicId: 'tries', link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', hasVisualization: true },
  { id: 'word-search-ii', name: 'Word Search II', number: 212, difficulty: 'Hard', topicId: 'tries', link: 'https://leetcode.com/problems/word-search-ii/', hasVisualization: true },

  // Heap / Priority Queue (7)
  { id: 'kth-largest-element-in-stream', name: 'Kth Largest Element in a Stream', number: 703, difficulty: 'Easy', topicId: 'heap-priority-queue', link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', hasVisualization: true },
  { id: 'last-stone-weight', name: 'Last Stone Weight', number: 1046, difficulty: 'Easy', topicId: 'heap-priority-queue', link: 'https://leetcode.com/problems/last-stone-weight/', hasVisualization: true },
  { id: 'k-closest-points-to-origin', name: 'K Closest Points to Origin', number: 973, difficulty: 'Medium', topicId: 'heap-priority-queue', link: 'https://leetcode.com/problems/k-closest-points-to-origin/', hasVisualization: true },
  { id: 'kth-largest-element-in-array', name: 'Kth Largest Element in an Array', number: 215, difficulty: 'Medium', topicId: 'heap-priority-queue', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', hasVisualization: true },
  { id: 'task-scheduler', name: 'Task Scheduler', number: 621, difficulty: 'Medium', topicId: 'heap-priority-queue', link: 'https://leetcode.com/problems/task-scheduler/', hasVisualization: true },
  { id: 'design-twitter', name: 'Design Twitter', number: 355, difficulty: 'Medium', topicId: 'heap-priority-queue', link: 'https://leetcode.com/problems/design-twitter/', hasVisualization: true },
  { id: 'find-median-from-data-stream', name: 'Find Median from Data Stream', number: 295, difficulty: 'Hard', topicId: 'heap-priority-queue', link: 'https://leetcode.com/problems/find-median-from-data-stream/', hasVisualization: true },

  // Backtracking (9)
  { id: 'subsets', name: 'Subsets', number: 78, difficulty: 'Medium', topicId: 'backtracking', link: 'https://leetcode.com/problems/subsets/', hasVisualization: true },
  { id: 'combination-sum', name: 'Combination Sum', number: 39, difficulty: 'Medium', topicId: 'backtracking', link: 'https://leetcode.com/problems/combination-sum/', hasVisualization: true },
  { id: 'permutations', name: 'Permutations', number: 46, difficulty: 'Medium', topicId: 'backtracking', link: 'https://leetcode.com/problems/permutations/', hasVisualization: true },
  { id: 'subsets-ii', name: 'Subsets II', number: 90, difficulty: 'Medium', topicId: 'backtracking', link: 'https://leetcode.com/problems/subsets-ii/', hasVisualization: true },
  { id: 'combination-sum-ii', name: 'Combination Sum II', number: 40, difficulty: 'Medium', topicId: 'backtracking', link: 'https://leetcode.com/problems/combination-sum-ii/', hasVisualization: true },
  { id: 'word-search', name: 'Word Search', number: 79, difficulty: 'Medium', topicId: 'backtracking', link: 'https://leetcode.com/problems/word-search/', hasVisualization: true },
  { id: 'palindrome-partitioning', name: 'Palindrome Partitioning', number: 131, difficulty: 'Medium', topicId: 'backtracking', link: 'https://leetcode.com/problems/palindrome-partitioning/', hasVisualization: true },
  { id: 'letter-combinations-of-a-phone-number', name: 'Letter Combinations of a Phone Number', number: 17, difficulty: 'Medium', topicId: 'backtracking', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/', hasVisualization: true },
  { id: 'n-queens', name: 'N-Queens', number: 51, difficulty: 'Hard', topicId: 'backtracking', link: 'https://leetcode.com/problems/n-queens/', hasVisualization: true },

  // Graphs (13)
  { id: 'number-of-islands', name: 'Number of Islands', number: 200, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/number-of-islands/', hasVisualization: true },
  { id: 'max-area-of-island', name: 'Max Area of Island', number: 695, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/max-area-of-island/', hasVisualization: true },
  { id: 'clone-graph', name: 'Clone Graph', number: 133, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/clone-graph/', hasVisualization: true },
  { id: 'walls-and-gates', name: 'Walls and Gates', number: 286, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/walls-and-gates/', hasVisualization: true },
  { id: 'rotting-oranges', name: 'Rotting Oranges', number: 994, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/rotting-oranges/', hasVisualization: true },
  { id: 'pacific-atlantic-water-flow', name: 'Pacific Atlantic Water Flow', number: 417, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', hasVisualization: true },
  { id: 'surrounded-regions', name: 'Surrounded Regions', number: 130, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/surrounded-regions/', hasVisualization: true },
  { id: 'course-schedule', name: 'Course Schedule', number: 207, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/course-schedule/', hasVisualization: true },
  { id: 'course-schedule-ii', name: 'Course Schedule II', number: 210, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/course-schedule-ii/', hasVisualization: true },
  { id: 'graph-valid-tree', name: 'Graph Valid Tree', number: 261, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/graph-valid-tree/', hasVisualization: true },
  { id: 'number-of-connected-components', name: 'Number of Connected Components', number: 323, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/', hasVisualization: true },
  { id: 'redundant-connection', name: 'Redundant Connection', number: 684, difficulty: 'Medium', topicId: 'graphs', link: 'https://leetcode.com/problems/redundant-connection/', hasVisualization: true },
  { id: 'word-ladder', name: 'Word Ladder', number: 127, difficulty: 'Hard', topicId: 'graphs', link: 'https://leetcode.com/problems/word-ladder/', hasVisualization: true },

  // Advanced Graphs (6)
  { id: 'reconstruct-itinerary', name: 'Reconstruct Itinerary', number: 332, difficulty: 'Hard', topicId: 'advanced-graphs', link: 'https://leetcode.com/problems/reconstruct-itinerary/', hasVisualization: true },
  { id: 'min-cost-to-connect-all-points', name: 'Min Cost to Connect All Points', number: 1584, difficulty: 'Medium', topicId: 'advanced-graphs', link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/', hasVisualization: true },
  { id: 'network-delay-time', name: 'Network Delay Time', number: 743, difficulty: 'Medium', topicId: 'advanced-graphs', link: 'https://leetcode.com/problems/network-delay-time/', hasVisualization: true },
  { id: 'swim-in-rising-water', name: 'Swim in Rising Water', number: 778, difficulty: 'Hard', topicId: 'advanced-graphs', link: 'https://leetcode.com/problems/swim-in-rising-water/', hasVisualization: true },
  { id: 'alien-dictionary', name: 'Alien Dictionary', number: 269, difficulty: 'Hard', topicId: 'advanced-graphs', link: 'https://leetcode.com/problems/alien-dictionary/', hasVisualization: true },
  { id: 'cheapest-flights-within-k-stops', name: 'Cheapest Flights Within K Stops', number: 787, difficulty: 'Medium', topicId: 'advanced-graphs', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', hasVisualization: true },

  // 1-D DP (12)
  { id: 'climbing-stairs', name: 'Climbing Stairs', number: 70, difficulty: 'Easy', topicId: '1d-dp', link: 'https://leetcode.com/problems/climbing-stairs/', hasVisualization: true },
  { id: 'min-cost-climbing-stairs', name: 'Min Cost Climbing Stairs', number: 746, difficulty: 'Easy', topicId: '1d-dp', link: 'https://leetcode.com/problems/min-cost-climbing-stairs/', hasVisualization: true },
  { id: 'house-robber', name: 'House Robber', number: 198, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/house-robber/', hasVisualization: true },
  { id: 'house-robber-ii', name: 'House Robber II', number: 213, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/house-robber-ii/', hasVisualization: true },
  { id: 'longest-palindromic-substring', name: 'Longest Palindromic Substring', number: 5, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/longest-palindromic-substring/', hasVisualization: true },
  { id: 'palindromic-substrings', name: 'Palindromic Substrings', number: 647, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/palindromic-substrings/', hasVisualization: true },
  { id: 'decode-ways', name: 'Decode Ways', number: 91, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/decode-ways/', hasVisualization: true },
  { id: 'coin-change', name: 'Coin Change', number: 322, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/coin-change/', hasVisualization: true },
  { id: 'maximum-product-subarray', name: 'Maximum Product Subarray', number: 152, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/maximum-product-subarray/', hasVisualization: true },
  { id: 'word-break', name: 'Word Break', number: 139, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/word-break/', hasVisualization: true },
  { id: 'longest-increasing-subsequence', name: 'Longest Increasing Subsequence', number: 300, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', hasVisualization: true },
  { id: 'partition-equal-subset-sum', name: 'Partition Equal Subset Sum', number: 416, difficulty: 'Medium', topicId: '1d-dp', link: 'https://leetcode.com/problems/partition-equal-subset-sum/', hasVisualization: true },

  // 2-D DP (11)
  { id: 'unique-paths', name: 'Unique Paths', number: 62, difficulty: 'Medium', topicId: '2d-dp', link: 'https://leetcode.com/problems/unique-paths/', hasVisualization: false },
  { id: 'longest-common-subsequence', name: 'Longest Common Subsequence', number: 1143, difficulty: 'Medium', topicId: '2d-dp', link: 'https://leetcode.com/problems/longest-common-subsequence/', hasVisualization: false },
  { id: 'best-time-to-buy-sell-stock-cooldown', name: 'Best Time to Buy and Sell Stock with Cooldown', number: 309, difficulty: 'Medium', topicId: '2d-dp', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/', hasVisualization: false },
  { id: 'coin-change-ii', name: 'Coin Change II', number: 518, difficulty: 'Medium', topicId: '2d-dp', link: 'https://leetcode.com/problems/coin-change-ii/', hasVisualization: false },
  { id: 'target-sum', name: 'Target Sum', number: 494, difficulty: 'Medium', topicId: '2d-dp', link: 'https://leetcode.com/problems/target-sum/', hasVisualization: false },
  { id: 'interleaving-string', name: 'Interleaving String', number: 97, difficulty: 'Medium', topicId: '2d-dp', link: 'https://leetcode.com/problems/interleaving-string/', hasVisualization: false },
  { id: 'longest-increasing-path-in-matrix', name: 'Longest Increasing Path in a Matrix', number: 329, difficulty: 'Hard', topicId: '2d-dp', link: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/', hasVisualization: false },
  { id: 'distinct-subsequences', name: 'Distinct Subsequences', number: 115, difficulty: 'Hard', topicId: '2d-dp', link: 'https://leetcode.com/problems/distinct-subsequences/', hasVisualization: false },
  { id: 'edit-distance', name: 'Edit Distance', number: 72, difficulty: 'Medium', topicId: '2d-dp', link: 'https://leetcode.com/problems/edit-distance/', hasVisualization: false },
  { id: 'burst-balloons', name: 'Burst Balloons', number: 312, difficulty: 'Hard', topicId: '2d-dp', link: 'https://leetcode.com/problems/burst-balloons/', hasVisualization: false },
  { id: 'regular-expression-matching', name: 'Regular Expression Matching', number: 10, difficulty: 'Hard', topicId: '2d-dp', link: 'https://leetcode.com/problems/regular-expression-matching/', hasVisualization: false },

  // Greedy (8)
  { id: 'maximum-subarray', name: 'Maximum Subarray', number: 53, difficulty: 'Medium', topicId: 'greedy', link: 'https://leetcode.com/problems/maximum-subarray/', hasVisualization: true },
  { id: 'jump-game', name: 'Jump Game', number: 55, difficulty: 'Medium', topicId: 'greedy', link: 'https://leetcode.com/problems/jump-game/', hasVisualization: true },
  { id: 'jump-game-ii', name: 'Jump Game II', number: 45, difficulty: 'Medium', topicId: 'greedy', link: 'https://leetcode.com/problems/jump-game-ii/', hasVisualization: true },
  { id: 'gas-station', name: 'Gas Station', number: 134, difficulty: 'Medium', topicId: 'greedy', link: 'https://leetcode.com/problems/gas-station/', hasVisualization: true },
  { id: 'hand-of-straights', name: 'Hand of Straights', number: 846, difficulty: 'Medium', topicId: 'greedy', link: 'https://leetcode.com/problems/hand-of-straights/', hasVisualization: true },
  { id: 'merge-triplets-to-form-target', name: 'Merge Triplets to Form Target Triplet', number: 1899, difficulty: 'Medium', topicId: 'greedy', link: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/', hasVisualization: true },
  { id: 'partition-labels', name: 'Partition Labels', number: 763, difficulty: 'Medium', topicId: 'greedy', link: 'https://leetcode.com/problems/partition-labels/', hasVisualization: true },
  { id: 'valid-parenthesis-string', name: 'Valid Parenthesis String', number: 678, difficulty: 'Medium', topicId: 'greedy', link: 'https://leetcode.com/problems/valid-parenthesis-string/', hasVisualization: true },

  // Intervals (6)
  { id: 'insert-interval', name: 'Insert Interval', number: 57, difficulty: 'Medium', topicId: 'intervals', link: 'https://leetcode.com/problems/insert-interval/', hasVisualization: true },
  { id: 'merge-intervals', name: 'Merge Intervals', number: 56, difficulty: 'Medium', topicId: 'intervals', link: 'https://leetcode.com/problems/merge-intervals/', hasVisualization: true },
  { id: 'non-overlapping-intervals', name: 'Non-overlapping Intervals', number: 435, difficulty: 'Medium', topicId: 'intervals', link: 'https://leetcode.com/problems/non-overlapping-intervals/', hasVisualization: true },
  { id: 'meeting-rooms', name: 'Meeting Rooms', number: 252, difficulty: 'Easy', topicId: 'intervals', link: 'https://leetcode.com/problems/meeting-rooms/', hasVisualization: true },
  { id: 'meeting-rooms-ii', name: 'Meeting Rooms II', number: 253, difficulty: 'Medium', topicId: 'intervals', link: 'https://leetcode.com/problems/meeting-rooms-ii/', hasVisualization: true },
  { id: 'minimum-interval-to-include-each-query', name: 'Minimum Interval to Include Each Query', number: 1851, difficulty: 'Hard', topicId: 'intervals', link: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/', hasVisualization: true },

  // Math & Geometry (8)
  { id: 'rotate-image', name: 'Rotate Image', number: 48, difficulty: 'Medium', topicId: 'math-geometry', link: 'https://leetcode.com/problems/rotate-image/', hasVisualization: true },
  { id: 'spiral-matrix', name: 'Spiral Matrix', number: 54, difficulty: 'Medium', topicId: 'math-geometry', link: 'https://leetcode.com/problems/spiral-matrix/', hasVisualization: true },
  { id: 'set-matrix-zeroes', name: 'Set Matrix Zeroes', number: 73, difficulty: 'Medium', topicId: 'math-geometry', link: 'https://leetcode.com/problems/set-matrix-zeroes/', hasVisualization: true },
  { id: 'happy-number', name: 'Happy Number', number: 202, difficulty: 'Easy', topicId: 'math-geometry', link: 'https://leetcode.com/problems/happy-number/', hasVisualization: true },
  { id: 'plus-one', name: 'Plus One', number: 66, difficulty: 'Easy', topicId: 'math-geometry', link: 'https://leetcode.com/problems/plus-one/', hasVisualization: true },
  { id: 'pow-x-n', name: 'Pow(x, n)', number: 50, difficulty: 'Medium', topicId: 'math-geometry', link: 'https://leetcode.com/problems/powx-n/', hasVisualization: true },
  { id: 'multiply-strings', name: 'Multiply Strings', number: 43, difficulty: 'Medium', topicId: 'math-geometry', link: 'https://leetcode.com/problems/multiply-strings/', hasVisualization: true },
  { id: 'detect-squares', name: 'Detect Squares', number: 2013, difficulty: 'Medium', topicId: 'math-geometry', link: 'https://leetcode.com/problems/detect-squares/', hasVisualization: true },

  // Bit Manipulation (7)
  { id: 'single-number', name: 'Single Number', number: 136, difficulty: 'Easy', topicId: 'bit-manipulation', link: 'https://leetcode.com/problems/single-number/', hasVisualization: true },
  { id: 'number-of-1-bits', name: 'Number of 1 Bits', number: 191, difficulty: 'Easy', topicId: 'bit-manipulation', link: 'https://leetcode.com/problems/number-of-1-bits/', hasVisualization: true },
  { id: 'counting-bits', name: 'Counting Bits', number: 338, difficulty: 'Easy', topicId: 'bit-manipulation', link: 'https://leetcode.com/problems/counting-bits/', hasVisualization: true },
  { id: 'reverse-bits', name: 'Reverse Bits', number: 190, difficulty: 'Easy', topicId: 'bit-manipulation', link: 'https://leetcode.com/problems/reverse-bits/', hasVisualization: true },
  { id: 'missing-number', name: 'Missing Number', number: 268, difficulty: 'Easy', topicId: 'bit-manipulation', link: 'https://leetcode.com/problems/missing-number/', hasVisualization: true },
  { id: 'sum-of-two-integers', name: 'Sum of Two Integers', number: 371, difficulty: 'Medium', topicId: 'bit-manipulation', link: 'https://leetcode.com/problems/sum-of-two-integers/', hasVisualization: true },
  { id: 'reverse-integer', name: 'Reverse Integer', number: 7, difficulty: 'Medium', topicId: 'bit-manipulation', link: 'https://leetcode.com/problems/reverse-integer/', hasVisualization: true },
];

export function getProblemsForTopicIndex(topicId: TopicId): NeetCodeProblem[] {
  return NEETCODE_150.filter((p) => p.topicId === topicId);
}

export function getVizCoverage(): { total: number; visualized: number } {
  return {
    total: NEETCODE_150.length,
    visualized: NEETCODE_150.filter((p) => p.hasVisualization).length,
  };
}
