import type { Problem } from '../types';

const subsets: Problem = {
  id: 'subsets',
  name: 'Subsets',
  number: 78,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/subsets/',
  description: 'Given an integer array nums of unique elements, return all possible subsets (the power set).',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [1, 2, 3]',
  timeComplexity: 'O(n * 2^n)',
  spaceComplexity: 'O(n)',
  pattern: 'Backtracking - Include/Exclude',
  hints: [
    'At each index, you have two choices: include the element or exclude it.',
    'Use a recursive function that builds subsets by choosing to add or skip each number.',
    'The base case is when you reach the end of the array.',
  ],
  code: `def subsets(nums):
    res = []
    subset = []
    def backtrack(i):
        if i >= len(nums):
            res.append(subset[:])
            return
        subset.append(nums[i])
        backtrack(i + 1)
        subset.pop()
        backtrack(i + 1)
    backtrack(0)
    return res`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start backtracking on nums=[1,2,3]. At each index, decide to include or exclude the element.',
      viz: {
        array: { values: [1, 2, 3], highlights: [] },
        variables: { subset: '[]', result: '[]' },
      },
    },
    {
      line: 7,
      label: 'Include 1,2,3',
      message: 'Include 1, then 2, then 3. Reached end of array, add [1,2,3] to result.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 3], highlights: [0, 1, 2] },
        variables: { subset: '[1,2,3]', result: '[[1,2,3]]' },
      },
    },
    {
      line: 9,
      label: 'Backtrack',
      message: 'Pop 3 (exclude it). Add [1,2]. Then pop 2, include 3 only: add [1,3].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 3], highlights: [0, 2] },
        variables: { subset: '[1,3]', result: '[[1,2,3],[1,2],[1,3]]' },
      },
    },
    {
      line: 9,
      label: 'Exclude 2,3',
      message: 'Exclude both 2 and 3 from the 1-branch, add [1]. Then backtrack to exclude 1.',
      viz: {
        array: { values: [1, 2, 3], highlights: [0] },
        variables: { subset: '[1]', result: '[[1,2,3],[1,2],[1,3],[1]]' },
      },
    },
    {
      line: 10,
      label: 'No 1 branch',
      message: 'Exclude 1. Now explore subsets of [2,3]: get [2,3], [2], [3].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 3], highlights: [1, 2] },
        variables: { subset: '[2,3]', result: '[[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3]]' },
      },
    },
    {
      line: 4,
      label: 'Empty subset',
      message: 'Finally exclude all elements, add []. Full result: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 3], found: [0, 1, 2] },
        variables: { subset: '[]', result: '[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]' },
      },
    },
  ],
};

const combinationSum: Problem = {
  id: 'combination-sum',
  name: 'Combination Sum',
  number: 39,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/combination-sum/',
  description: 'Given an array of distinct integers candidates and a target integer, return a list of all unique combinations where the chosen numbers sum to target.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'candidates = [2, 3, 6, 7], target = 7',
  timeComplexity: 'O(n^(t/m))',
  spaceComplexity: 'O(t/m)',
  pattern: 'Backtracking - Combination',
  hints: [
    'You can reuse the same number multiple times.',
    'Sort candidates and skip when the remaining target goes negative.',
    'Use an index to avoid generating duplicate combinations.',
  ],
  code: `def combinationSum(candidates, target):
    res = []
    def backtrack(i, cur, total):
        if total == target:
            res.append(cur[:])
            return
        if i >= len(candidates) or total > target:
            return
        cur.append(candidates[i])
        backtrack(i, cur, total + candidates[i])
        cur.pop()
        backtrack(i + 1, cur, total)
    backtrack(0, [], 0)
    return res`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find combinations in [2,3,6,7] that sum to 7. Elements can be reused.',
      viz: {
        array: { values: [2, 3, 6, 7], highlights: [] },
        variables: { target: 7, current: '[]', total: 0 },
      },
    },
    {
      line: 9,
      label: 'Pick 2',
      message: 'Start with candidate 2. We can reuse it, so try adding 2 again: [2,2], total=4.',
      viz: {
        array: { values: [2, 3, 6, 7], highlights: [0] },
        variables: { current: '[2,2]', total: 4 },
      },
    },
    {
      line: 9,
      label: 'Pick 2,2,3',
      message: 'Add another 2: total=6. Adding 2 again would exceed 7, so try 3 instead. [2,2,3] sums to 7!',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 3, 6, 7], highlights: [0, 1], found: [0] },
        variables: { current: '[2,2,3]', total: 7, result: '[[2,2,3]]' },
      },
    },
    {
      line: 11,
      label: 'Backtrack',
      message: 'Backtrack from [2,2,3]. Try [2,2,6] and [2,2,7] but both exceed target. Backtrack further.',
      viz: {
        array: { values: [2, 3, 6, 7], highlights: [0] },
        variables: { current: '[2]', total: 2, status: 'backtracking' },
      },
    },
    {
      line: 3,
      label: 'Try 7',
      message: 'After exhausting 2-combinations, try starting with 7. [7] sums to exactly 7!',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 3, 6, 7], highlights: [3], found: [3] },
        variables: { current: '[7]', total: 7, result: '[[2,2,3],[7]]' },
      },
    },
    {
      line: 4,
      label: 'Done',
      message: 'All branches explored. Two valid combinations found: [2,2,3] and [7].',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 3, 6, 7], found: [0, 1, 2, 3] },
        variables: { result: '[[2,2,3],[7]]' },
      },
    },
  ],
};

const permutations: Problem = {
  id: 'permutations',
  name: 'Permutations',
  number: 46,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/permutations/',
  description: 'Given an array nums of distinct integers, return all the possible permutations.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [1, 2, 3]',
  timeComplexity: 'O(n! * n)',
  spaceComplexity: 'O(n)',
  pattern: 'Backtracking - Permutation',
  hints: [
    'Swap each element into the current position and recurse on the rest.',
    'When the current index reaches the end, you have a complete permutation.',
    'Swap back after recursion to restore state.',
  ],
  code: `def permute(nums):
    res = []
    def backtrack(start):
        if start == len(nums):
            res.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
    backtrack(0)
    return res`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Generate all permutations of [1,2,3] by swapping elements into each position.',
      viz: {
        array: { values: [1, 2, 3], highlights: [] },
        variables: { start: 0, result: '[]' },
      },
    },
    {
      line: 7,
      label: 'Fix 1',
      message: 'Fix 1 at position 0. Recurse on [2,3]: swap to get [1,2,3] and [1,3,2].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 3], highlights: [0], labels: { 0: 'fixed' } },
        variables: { start: 1, result: '[[1,2,3],[1,3,2]]' },
      },
    },
    {
      line: 8,
      label: 'Swap 2<->1',
      message: 'Swap positions 0 and 1: [2,1,3]. Fix 2 at front, recurse to get [2,1,3] and [2,3,1].',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 1, 3], swapping: [0, 1], highlights: [0] },
        variables: { start: 0, result: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1]]' },
      },
    },
    {
      line: 10,
      label: 'Restore',
      message: 'Swap back to restore [1,2,3]. Now swap position 0 with position 2.',
      viz: {
        array: { values: [1, 2, 3], swapping: [0, 1] },
        variables: { action: 'undo swap', start: 0 },
      },
    },
    {
      line: 8,
      label: 'Swap 3<->1',
      message: 'Swap positions 0 and 2: [3,2,1]. Fix 3 at front, recurse to get [3,2,1] and [3,1,2].',
      isKeyMoment: true,
      viz: {
        array: { values: [3, 2, 1], swapping: [0, 2], highlights: [0] },
        variables: { start: 0, result: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]' },
      },
    },
    {
      line: 4,
      label: 'Done',
      message: 'All 6 permutations generated: [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 3], found: [0, 1, 2] },
        variables: { total: 6, result: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]' },
      },
    },
  ],
};

const subsetsII: Problem = {
  id: 'subsets-ii',
  name: 'Subsets II',
  number: 90,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/subsets-ii/',
  description: 'Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [1, 2, 2]',
  timeComplexity: 'O(n * 2^n)',
  spaceComplexity: 'O(n)',
  pattern: 'Backtracking - Skip Duplicates',
  hints: [
    'Sort the array first so duplicates are adjacent.',
    'When you skip an element, skip all its duplicates too.',
    'This prevents generating the same subset from different branches.',
  ],
  code: `def subsetsWithDup(nums):
    res = []
    nums.sort()
    subset = []
    def backtrack(i):
        res.append(subset[:])
        for j in range(i, len(nums)):
            if j > i and nums[j] == nums[j-1]:
                continue
            subset.append(nums[j])
            backtrack(j + 1)
            subset.pop()
    backtrack(0)
    return res`,
  steps: [
    {
      line: 3,
      label: 'Sort',
      message: 'Sort nums to [1,2,2]. Duplicates are now adjacent, making them easy to skip.',
      viz: {
        array: { values: [1, 2, 2], sorted: [0, 1, 2] },
        variables: { subset: '[]', result: '[]' },
      },
    },
    {
      line: 6,
      label: 'Add []',
      message: 'Add empty subset to result. Start iterating from index 0.',
      viz: {
        array: { values: [1, 2, 2], highlights: [] },
        variables: { subset: '[]', result: '[[]]' },
      },
    },
    {
      line: 10,
      label: 'Include 1',
      message: 'Pick 1 at index 0. Recurse: pick first 2, then second 2, generating [1], [1,2], [1,2,2].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 2], highlights: [0, 1, 2] },
        variables: { subset: '[1,2,2]', result: '[[],[1],[1,2],[1,2,2]]' },
      },
    },
    {
      line: 8,
      label: 'Skip dup 2',
      message: 'At j=2, nums[2]==nums[1] (both 2) and j>i, so skip to avoid duplicate [1,2]. Already have it.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 2], highlights: [0], comparing: [1, 2] },
        variables: { j: 2, 'nums[j]': 2, 'nums[j-1]': 2, action: 'SKIP duplicate' },
      },
    },
    {
      line: 10,
      label: 'Pick 2',
      message: 'Back at top level, pick first 2. Include second 2 to get [2,2]. Skip duplicate at top level.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 2], highlights: [1, 2] },
        variables: { subset: '[2,2]', result: '[[],[1],[1,2],[1,2,2],[2],[2,2]]' },
      },
    },
    {
      line: 6,
      label: 'Done',
      message: 'Complete! 6 unique subsets: [],[1],[1,2],[1,2,2],[2],[2,2]. No duplicates.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 2], found: [0, 1, 2] },
        variables: { result: '[[],[1],[1,2],[1,2,2],[2],[2,2]]', count: 6 },
      },
    },
  ],
};

const combinationSumII: Problem = {
  id: 'combination-sum-ii',
  name: 'Combination Sum II',
  number: 40,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/combination-sum-ii/',
  description: 'Given a collection of candidate numbers and a target, find all unique combinations where the candidate numbers sum to target. Each number may only be used once.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'candidates = [10, 1, 2, 7, 6, 1, 5], target = 8',
  timeComplexity: 'O(2^n)',
  spaceComplexity: 'O(n)',
  pattern: 'Backtracking - Combination with Dedup',
  hints: [
    'Sort the array first so duplicates are adjacent.',
    'Skip duplicate candidates at the same recursion level.',
    'Each candidate can only be used once, so advance the index after picking.',
  ],
  code: `def combinationSum2(candidates, target):
    res = []
    candidates.sort()
    def backtrack(i, cur, total):
        if total == target:
            res.append(cur[:])
            return
        if i >= len(candidates) or total > target:
            return
        cur.append(candidates[i])
        backtrack(i + 1, cur, total + candidates[i])
        cur.pop()
        while i + 1 < len(candidates) and candidates[i] == candidates[i+1]:
            i += 1
        backtrack(i + 1, cur, total)
    backtrack(0, [], 0)
    return res`,
  steps: [
    {
      line: 3,
      label: 'Sort',
      message: 'Sort candidates to [1,1,2,5,6,7,10]. Duplicates adjacent for easy skipping.',
      viz: {
        array: { values: [1, 1, 2, 5, 6, 7, 10], sorted: [0, 1, 2, 3, 4, 5, 6] },
        variables: { target: 8, current: '[]', total: 0 },
      },
    },
    {
      line: 10,
      label: 'Path 1+2+5',
      message: 'Pick 1, then 2, then 5: total = 8. Found [1,2,5]!',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 5, 6, 7, 10], highlights: [0, 2, 3] },
        variables: { current: '[1,2,5]', total: 8, result: '[[1,2,5]]' },
      },
    },
    {
      line: 10,
      label: 'Path 1+7',
      message: 'Backtrack. Try 1 + 7 = 8. Found [1,7]!',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 5, 6, 7, 10], highlights: [0, 5] },
        variables: { current: '[1,7]', total: 8, result: '[[1,2,5],[1,7]]' },
      },
    },
    {
      line: 13,
      label: 'Skip dup 1',
      message: 'Done with first 1. candidates[0]==candidates[1], skip second 1 at same level to avoid duplicates.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 5, 6, 7, 10], comparing: [0, 1] },
        variables: { action: 'SKIP duplicate 1', i: '0 -> 1' },
      },
    },
    {
      line: 10,
      label: 'Path 2+6',
      message: 'Try 2 + 6 = 8. Found [2,6]! Continue exploring remaining branches.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 5, 6, 7, 10], highlights: [2, 4] },
        variables: { current: '[2,6]', total: 8, result: '[[1,2,5],[1,7],[2,6]]' },
      },
    },
    {
      line: 5,
      label: 'Done',
      message: 'All branches explored. Three valid combinations: [1,2,5], [1,7], [2,6]. No duplicates.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 5, 6, 7, 10], found: [0, 1, 2, 3, 4, 5, 6] },
        variables: { result: '[[1,2,5],[1,7],[2,6]]', count: 3 },
      },
    },
  ],
};


const wordSearch: Problem = {
  id: 'word-search',
  name: 'Word Search',
  number: 79,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/word-search/',
  description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically).',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
  timeComplexity: 'O(m * n * 4^L)',
  spaceComplexity: 'O(L)',
  pattern: 'Grid DFS Backtracking',
  hints: [
    'Try starting DFS from every cell that matches the first character.',
    'Mark cells as visited to avoid reusing them in the same path.',
    'Backtrack by unmarking visited cells when returning from recursion.',
  ],
  code: `def exist(board, word):
    rows, cols = len(board), len(board[0])
    visited = set()

    def dfs(r, c, i):
        if i == len(word):
            return True
        if r < 0 or c < 0 or r >= rows or c >= cols:
            return False
        if (r, c) in visited or board[r][c] != word[i]:
            return False
        visited.add((r, c))
        res = (dfs(r+1,c,i+1) or dfs(r-1,c,i+1)
               or dfs(r,c+1,i+1) or dfs(r,c-1,i+1))
        visited.remove((r, c))
        return res

    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    return False`,
  steps: [
    {
      line: 1,
      label: 'Start A(0,0)',
      message: 'Begin DFS at (0,0) where board[0][0]="A" matches word[0]="A". Mark (0,0) visited.',
      viz: {
        matrix: {
          values: [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']],
          current: [0, 0],
          path: [[0, 0]],
        },
        variables: { word: 'ABCCED', i: 0, matched: 'A' },
      },
    },
    {
      line: 5,
      label: 'Match B(0,1)',
      message: 'Move right to (0,1). board[0][1]="B" matches word[1]="B". Mark visited.',
      viz: {
        matrix: {
          values: [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']],
          current: [0, 1],
          path: [[0, 0], [0, 1]],
        },
        variables: { word: 'ABCCED', i: 1, matched: 'AB' },
      },
    },
    {
      line: 5,
      label: 'Match C(0,2)',
      message: 'Move right to (0,2). board[0][2]="C" matches word[2]="C". Mark visited.',
      viz: {
        matrix: {
          values: [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']],
          current: [0, 2],
          path: [[0, 0], [0, 1], [0, 2]],
        },
        variables: { word: 'ABCCED', i: 2, matched: 'ABC' },
      },
    },
    {
      line: 5,
      label: 'Match C(1,2)',
      message: 'Move down to (1,2). board[1][2]="C" matches word[3]="C". Mark visited.',
      isKeyMoment: true,
      viz: {
        matrix: {
          values: [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']],
          current: [1, 2],
          path: [[0, 0], [0, 1], [0, 2], [1, 2]],
        },
        variables: { word: 'ABCCED', i: 3, matched: 'ABCC' },
      },
    },
    {
      line: 5,
      label: 'Match E(2,2)',
      message: 'Move down to (2,2). board[2][2]="E" matches word[4]="E". Mark visited.',
      viz: {
        matrix: {
          values: [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']],
          current: [2, 2],
          path: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
        },
        variables: { word: 'ABCCED', i: 4, matched: 'ABCCE' },
      },
    },
    {
      line: 5,
      label: 'Match D(2,1)',
      message: 'Move left to (2,1). board[2][1]="D" matches word[5]="D". All characters matched, return True!',
      isKeyMoment: true,
      viz: {
        matrix: {
          values: [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']],
          current: [2, 1],
          path: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 1]],
        },
        variables: { word: 'ABCCED', i: 5, matched: 'ABCCED', result: true },
      },
    },
  ],
};

const palindromePartitioning: Problem = {
  id: 'palindrome-partitioning',
  name: 'Palindrome Partitioning',
  number: 131,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/palindrome-partitioning/',
  description: 'Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitionings of s.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 's = "aab"',
  timeComplexity: 'O(n * 2^n)',
  spaceComplexity: 'O(n)',
  pattern: 'Backtracking Partitioning',
  hints: [
    'At each position, try every possible prefix that is a palindrome.',
    'Recursively partition the remaining substring.',
    'Backtrack by removing the last added palindrome when exploring other options.',
  ],
  code: `def partition(s):
    result = []
    part = []

    def dfs(i):
        if i >= len(s):
            result.append(part[:])
            return
        for j in range(i, len(s)):
            if isPalindrome(s, i, j):
                part.append(s[i:j+1])
                dfs(j + 1)
                part.pop()

    def isPalindrome(s, l, r):
        while l < r:
            if s[l] != s[r]:
                return False
            l, r = l + 1, r - 1
        return True

    dfs(0)
    return result`,
  steps: [
    {
      line: 1,
      label: 'Start',
      message: 'Partition s="aab" into palindromes. Begin DFS at index 0 with empty partition.',
      viz: {
        array: { values: ['a', 'a', 'b'], highlights: [] },
        variables: { s: 'aab', part: '[]', result: '[]' },
      },
    },
    {
      line: 8,
      label: 'Pick "a"',
      message: 'Try substring s[0:1]="a". It is a palindrome. Add to partition and recurse from index 1.',
      viz: {
        array: { values: ['a', 'a', 'b'], highlights: [0] },
        variables: { part: '["a"]', i: 1 },
      },
    },
    {
      line: 8,
      label: 'Pick "a"',
      message: 'Try substring s[1:2]="a". Palindrome. Add to partition and recurse from index 2.',
      viz: {
        array: { values: ['a', 'a', 'b'], highlights: [0, 1] },
        variables: { part: '["a","a"]', i: 2 },
      },
    },
    {
      line: 8,
      label: 'Pick "b"',
      message: 'Try substring s[2:3]="b". Palindrome. Add to partition. Reached end, save ["a","a","b"] to result.',
      isKeyMoment: true,
      viz: {
        array: { values: ['a', 'a', 'b'], highlights: [0, 1, 2] },
        variables: { part: '["a","a","b"]', result: '[["a","a","b"]]' },
      },
    },
    {
      line: 11,
      label: 'Backtrack',
      message: 'Backtrack to index 0. Try s[0:2]="aa". It is a palindrome. Add "aa" and recurse from index 2.',
      isKeyMoment: true,
      viz: {
        array: { values: ['a', 'a', 'b'], highlights: [0, 1] },
        variables: { part: '["aa"]', i: 2 },
      },
    },
    {
      line: 5,
      label: 'Complete',
      message: 'Try s[2:3]="b". Palindrome. Reached end, save ["aa","b"]. Final result: [["a","a","b"],["aa","b"]].',
      isKeyMoment: true,
      viz: {
        array: { values: ['a', 'a', 'b'], highlights: [0, 1, 2] },
        variables: { part: '["aa","b"]', result: '[["a","a","b"],["aa","b"]]' },
      },
    },
  ],
};

const letterCombinations: Problem = {
  id: 'letter-combinations-of-a-phone-number',
  name: 'Letter Combinations of a Phone Number',
  number: 17,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
  description: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent (like a phone keypad).',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'digits = "23"',
  timeComplexity: 'O(4^n)',
  spaceComplexity: 'O(n)',
  pattern: 'Backtracking Combinations',
  hints: [
    'Map each digit to its corresponding letters on a phone keypad.',
    'Use backtracking to build each combination one character at a time.',
    'The depth of recursion equals the number of digits.',
  ],
  code: `def letterCombinations(digits):
    if not digits:
        return []
    phone = {"2":"abc","3":"def","4":"ghi",
             "5":"jkl","6":"mno","7":"pqrs",
             "8":"tuv","9":"wxyz"}
    result = []

    def backtrack(i, cur):
        if i == len(digits):
            result.append(cur)
            return
        for ch in phone[digits[i]]:
            backtrack(i + 1, cur + ch)

    backtrack(0, "")
    return result`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'digits="23". Digit 2 maps to "abc", digit 3 maps to "def". Build all combinations via backtracking.',
      viz: {
        array: { values: ['2 -> abc', '3 -> def'] },
        variables: { digits: '23', result: '[]', cur: '""' },
      },
    },
    {
      line: 11,
      label: 'Digit 2: "a"',
      message: 'Process digit "2". Pick letter "a". Recurse to next digit.',
      viz: {
        array: { values: ['a', '_'], highlights: [0] },
        variables: { i: 0, cur: '"a"' },
      },
    },
    {
      line: 11,
      label: '"a" + "d","e","f"',
      message: 'Process digit "3" with prefix "a". Try each letter: "ad", "ae", "af" added to result.',
      isKeyMoment: true,
      viz: {
        array: { values: ['ad', 'ae', 'af'], highlights: [0, 1, 2] },
        variables: { i: 1, prefix: '"a"', result: '["ad","ae","af"]' },
      },
    },
    {
      line: 11,
      label: 'Digit 2: "b"',
      message: 'Backtrack to digit "2". Pick letter "b". Recurse to next digit.',
      viz: {
        array: { values: ['b', '_'], highlights: [0] },
        variables: { i: 0, cur: '"b"' },
      },
    },
    {
      line: 11,
      label: '"b" + "d","e","f"',
      message: 'Process digit "3" with prefix "b". Add "bd", "be", "bf" to result.',
      isKeyMoment: true,
      viz: {
        array: { values: ['bd', 'be', 'bf'], highlights: [0, 1, 2] },
        variables: { i: 1, prefix: '"b"', result: '["ad","ae","af","bd","be","bf"]' },
      },
    },
    {
      line: 14,
      label: 'Complete',
      message: 'Pick "c", generate "cd","ce","cf". Final result: ["ad","ae","af","bd","be","bf","cd","ce","cf"].',
      isKeyMoment: true,
      viz: {
        array: { values: ['ad','ae','af','bd','be','bf','cd','ce','cf'], highlights: [6, 7, 8] },
        variables: { result: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      },
    },
  ],
};

const nQueens: Problem = {
  id: 'n-queens',
  name: 'N-Queens',
  number: 51,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/n-queens/',
  description: 'Place n queens on an n x n chessboard such that no two queens attack each other. Return all distinct solutions.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'n = 4',
  timeComplexity: 'O(n!)',
  spaceComplexity: 'O(n^2)',
  pattern: 'Constraint Backtracking',
  hints: [
    'Place queens row by row. For each row, try every column.',
    'Track which columns and diagonals are already occupied.',
    'Backtrack when no valid column exists for the current row.',
  ],
  code: `def solveNQueens(n):
    cols = set()
    posDiag = set()  # (r + c)
    negDiag = set()  # (r - c)
    board = [["." for _ in range(n)] for _ in range(n)]
    result = []

    def backtrack(r):
        if r == n:
            result.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c in cols or (r+c) in posDiag or (r-c) in negDiag:
                continue
            cols.add(c)
            posDiag.add(r + c)
            negDiag.add(r - c)
            board[r][c] = "Q"
            backtrack(r + 1)
            cols.remove(c)
            posDiag.remove(r + c)
            negDiag.remove(r - c)
            board[r][c] = "."

    backtrack(0)
    return result`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Solve 4-Queens. Place queens row by row ensuring no two share a column, row, or diagonal.',
      viz: {
        matrix: {
          values: [['.','.','.','.'],['.','.','.','.'],['.','.','.','.'],['.','.','.','.',]],
          highlights: [],
        },
        variables: { n: 4, cols: '{}', row: 0 },
      },
    },
    {
      line: 16,
      label: 'Row 0: Q(0,1)',
      message: 'Row 0: Try col 0 -- later we find it leads to dead end. Place queen at (0,1).',
      viz: {
        matrix: {
          values: [['.',  'Q','.','.'],['.','.','.','.'],['.','.','.','.'],['.','.','.','.']],
          current: [0, 1],
          highlights: [[0, 1]],
        },
        variables: { cols: '{1}', posDiag: '{1}', negDiag: '{-1}' },
      },
    },
    {
      line: 16,
      label: 'Row 1: Q(1,3)',
      message: 'Row 1: Col 0 conflicts on negDiag. Col 1 conflicts on cols. Col 2 conflicts on posDiag. Place queen at (1,3).',
      isKeyMoment: true,
      viz: {
        matrix: {
          values: [['.','Q','.','.'],['.','.','.',  'Q'],['.','.','.','.'],['.','.','.','.']],
          current: [1, 3],
          highlights: [[0, 1], [1, 3]],
        },
        variables: { cols: '{1,3}', posDiag: '{1,4}', negDiag: '{-1,-2}' },
      },
    },
    {
      line: 16,
      label: 'Row 2: Q(2,0)',
      message: 'Row 2: Col 0 is free and no diagonal conflicts. Place queen at (2,0).',
      viz: {
        matrix: {
          values: [['.','Q','.','.'],['.','.','.',  'Q'],['Q','.','.','.'],['.','.','.','.']],
          current: [2, 0],
          highlights: [[0, 1], [1, 3], [2, 0]],
        },
        variables: { cols: '{0,1,3}', posDiag: '{1,2,4}', negDiag: '{-2,-1,2}' },
      },
    },
    {
      line: 16,
      label: 'Row 3: Q(3,2)',
      message: 'Row 3: Col 0 in cols. Col 1 in cols. Col 2 is free, no diagonal conflicts. Place queen at (3,2).',
      isKeyMoment: true,
      viz: {
        matrix: {
          values: [['.','Q','.','.'],['.','.','.',  'Q'],['Q','.','.','.'],['.','.','Q','.']],
          current: [3, 2],
          highlights: [[0, 1], [1, 3], [2, 0], [3, 2]],
        },
        variables: { cols: '{0,1,2,3}', posDiag: '{1,2,4,5}', negDiag: '{-2,-1,1,2}' },
      },
    },
    {
      line: 8,
      label: 'Solution 1',
      message: 'All 4 queens placed! Record solution: [".Q..","...Q","Q...","..Q."]. This is one valid arrangement.',
      isKeyMoment: true,
      viz: {
        matrix: {
          values: [['.','Q','.','.'],['.','.','.',  'Q'],['Q','.','.','.'],['.','.','Q','.']],
          highlights: [[0, 1], [1, 3], [2, 0], [3, 2]],
        },
        variables: { result: '[[".Q..","...Q","Q...","..Q."]]', solutionCount: 1 },
      },
    },
    {
      line: 23,
      label: 'Solution 2',
      message: 'Continue backtracking to find second solution: ["..Q.","Q...","...Q",".Q.."] with queens at (0,2),(1,0),(2,3),(3,1).',
      isKeyMoment: true,
      viz: {
        matrix: {
          values: [['.','.','Q','.'],['Q','.','.','.'],['.','.','.','Q'],['.','Q','.','.']],
          highlights: [[0, 2], [1, 0], [2, 3], [3, 1]],
        },
        variables: { result: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]', solutionCount: 2 },
      },
    },
  ],
};


export const backtrackingProblems: Problem[] = [subsets, combinationSum, permutations, subsetsII, combinationSumII, wordSearch, palindromePartitioning, letterCombinations, nQueens];
