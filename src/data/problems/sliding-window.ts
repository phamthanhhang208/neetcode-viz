import type { Problem } from '../types';

const bestTimeToBuyAndSellStock: Problem = {
  id: 'best-time-to-buy-and-sell-stock',
  name: 'Best Time to Buy and Sell Stock',
  number: 121,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
  description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy and a single day to sell. Return the maximum profit you can achieve.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'prices = [7, 1, 5, 3, 6, 4]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Min Tracking',
  hints: [
    'Track the minimum price seen so far as you iterate.',
    'At each step, calculate the profit if you sold today, and update the max profit.',
  ],
  code: `def maxProfit(prices):
    minPrice = float('inf')
    maxProfit = 0
    for i in range(len(prices)):
        if prices[i] < minPrice:
            minPrice = prices[i]
        elif prices[i] - minPrice > maxProfit:
            maxProfit = prices[i] - minPrice
    return maxProfit`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Given prices = [7, 1, 5, 3, 6, 4]. Initialize minPrice = Infinity and maxProfit = 0.',
      viz: {
        array: { values: [7, 1, 5, 3, 6, 4] },
        pointers: { buy: 0, sell: 0 },
        variables: { minPrice: 'Inf', maxProfit: 0 },
      },
    },
    {
      line: 4,
      label: 'i=0, price=7',
      message: 'Price 7 < Inf, so update minPrice = 7. Buy pointer set to index 0.',
      viz: {
        array: { values: [7, 1, 5, 3, 6, 4], highlights: [0] },
        pointers: { buy: 0, sell: 0 },
        variables: { minPrice: 7, maxProfit: 0, i: 0 },
      },
    },
    {
      line: 4,
      label: 'i=1, price=1',
      message: 'Price 1 < 7, so update minPrice = 1. Buy pointer moves to index 1.',
      viz: {
        array: { values: [7, 1, 5, 3, 6, 4], highlights: [1] },
        pointers: { buy: 1, sell: 1 },
        variables: { minPrice: 1, maxProfit: 0, i: 1 },
      },
      isKeyMoment: true,
    },
    {
      line: 6,
      label: 'i=2, price=5',
      message: 'Profit = 5 - 1 = 4 > maxProfit (0). Update maxProfit = 4. Sell pointer at index 2.',
      viz: {
        array: { values: [7, 1, 5, 3, 6, 4], highlights: [1, 2] },
        pointers: { buy: 1, sell: 2 },
        variables: { minPrice: 1, maxProfit: 4, profit: 4, i: 2 },
      },
    },
    {
      line: 6,
      label: 'i=3, price=3',
      message: 'Profit = 3 - 1 = 2, not greater than maxProfit (4). No update.',
      viz: {
        array: { values: [7, 1, 5, 3, 6, 4], highlights: [1, 3] },
        pointers: { buy: 1, sell: 2 },
        variables: { minPrice: 1, maxProfit: 4, profit: 2, i: 3 },
      },
    },
    {
      line: 6,
      label: 'i=4, price=6',
      message: 'Profit = 6 - 1 = 5 > maxProfit (4). Update maxProfit = 5! Sell pointer moves to index 4.',
      viz: {
        array: { values: [7, 1, 5, 3, 6, 4], highlights: [1, 4] },
        pointers: { buy: 1, sell: 4 },
        variables: { minPrice: 1, maxProfit: 5, profit: 5, i: 4 },
      },
      isKeyMoment: true,
    },
    {
      line: 8,
      label: 'Result',
      message: 'i=5, profit = 4 - 1 = 3, no update. Done scanning. Best profit is 5 (buy at index 1, sell at index 4).',
      viz: {
        array: { values: [7, 1, 5, 3, 6, 4], found: [1, 4] },
        pointers: { buy: 1, sell: 4 },
        variables: { minPrice: 1, maxProfit: 5, result: 5 },
      },
      isKeyMoment: true,
    },
  ],
};

const longestSubstringWithoutRepeating: Problem = {
  id: 'longest-substring-without-repeating',
  name: 'Longest Substring Without Repeating Characters',
  number: 3,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  description: 'Given a string s, find the length of the longest substring without repeating characters.',
  vizTypes: ['array', 'set'],
  language: 'python',
  testInput: 's = "abcabcbb"',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(min(n, m))',
  pattern: 'Sliding Window + Set',
  hints: [
    'Use a set to track characters in the current window.',
    'When you encounter a duplicate, shrink the window from the left until the duplicate is removed.',
  ],
  code: `def lengthOfLongestSubstring(s):
    charSet = set()
    L = 0
    result = 0
    for R in range(len(s)):
        while s[R] in charSet:
            charSet.remove(s[L])
            L += 1
        charSet.add(s[R])
        result = max(result, R - L + 1)
    return result`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Given s = "abcabcbb". Initialize empty set, L = 0, result = 0.',
      viz: {
        array: { values: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'] },
        set: { values: [] },
        pointers: { L: 0, R: 0 },
        variables: { result: 0 },
      },
    },
    {
      line: 5,
      label: 'R=0, char="a"',
      message: '"a" not in set. Add "a" to set. Window = "a", length = 1. Update result = 1.',
      viz: {
        array: { values: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'], highlights: [0] },
        set: { values: ['a'], justAdded: 'a' },
        pointers: { L: 0, R: 0 },
        variables: { result: 1 },
      },
    },
    {
      line: 5,
      label: 'R=1,2 expand',
      message: 'Add "b" and "c". Window = "abc", length = 3. Update result = 3.',
      viz: {
        array: { values: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'], highlights: [0, 1, 2] },
        set: { values: ['a', 'b', 'c'], justAdded: 'c' },
        pointers: { L: 0, R: 2 },
        variables: { result: 3 },
      },
      isKeyMoment: true,
    },
    {
      line: 6,
      label: 'R=3, duplicate "a"',
      message: 'R=3, s[R]="a" is already in the set! Must shrink window from left.',
      viz: {
        array: { values: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'], highlights: [0, 1, 2, 3], comparing: [0, 3] },
        set: { values: ['a', 'b', 'c'], checking: 'a' },
        pointers: { L: 0, R: 3 },
        variables: { result: 3, duplicate: 'a' },
      },
      isKeyMoment: true,
    },
    {
      line: 7,
      label: 'Shrink, remove "a"',
      message: 'Remove s[0]="a" from set, L moves to 1. Now add s[3]="a". Window = "bca", length = 3.',
      viz: {
        array: { values: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'], highlights: [1, 2, 3] },
        set: { values: ['b', 'c', 'a'], justAdded: 'a' },
        pointers: { L: 1, R: 3 },
        variables: { result: 3 },
      },
    },
    {
      line: 6,
      label: 'R=4, duplicate "b"',
      message: 'R=4, s[R]="b" is in the set. Remove s[1]="b", L moves to 2. Add "b" back. Window = "cab", length = 3.',
      viz: {
        array: { values: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'], highlights: [2, 3, 4] },
        set: { values: ['c', 'a', 'b'], justAdded: 'b' },
        pointers: { L: 2, R: 4 },
        variables: { result: 3 },
      },
    },
    {
      line: 6,
      label: 'R=5,6,7 shrink',
      message: 'Continuing to hit duplicates. Windows keep shrinking. Result never exceeds 3.',
      viz: {
        array: { values: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'], highlights: [7] },
        set: { values: ['b'] },
        pointers: { L: 7, R: 7 },
        variables: { result: 3 },
      },
    },
    {
      line: 11,
      label: 'Result',
      message: 'Finished scanning. The longest substring without repeating characters has length 3 ("abc").',
      viz: {
        array: { values: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'], found: [0, 1, 2] },
        set: { values: ['a', 'b', 'c'] },
        pointers: { L: 0, R: 2 },
        variables: { result: 3 },
      },
      isKeyMoment: true,
    },
  ],
};

const longestRepeatingCharacterReplacement: Problem = {
  id: 'longest-repeating-character-replacement',
  name: 'Longest Repeating Character Replacement',
  number: 424,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
  description: 'You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English letter at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.',
  vizTypes: ['array', 'hashmap'],
  language: 'python',
  testInput: 's = "AABABBA", k = 1',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Sliding Window + Frequency',
  hints: [
    'Track the frequency of each character in the current window.',
    'The window is valid when windowLen - maxFreq <= k (we can replace the non-majority chars).',
    'Shrink the window from the left when the condition is violated.',
  ],
  code: `def characterReplacement(s, k):
    count = {}
    L = 0
    maxFreq = 0
    result = 0
    for R in range(len(s)):
        count[s[R]] = count.get(s[R], 0) + 1
        maxFreq = max(maxFreq, count[s[R]])
        while (R - L + 1) - maxFreq > k:
            count[s[L]] -= 1
            L += 1
        result = max(result, R - L + 1)
    return result`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Given s = "AABABBA", k = 1. Initialize empty count map, L = 0, maxFreq = 0, result = 0.',
      viz: {
        array: { values: ['A', 'A', 'B', 'A', 'B', 'B', 'A'] },
        hashmap: { entries: [] },
        pointers: { L: 0, R: 0 },
        variables: { k: 1, maxFreq: 0, result: 0 },
      },
    },
    {
      line: 6,
      label: 'R=0,1 expand',
      message: 'Add "A" twice. count = {A:2}. maxFreq = 2. Window "AA", length 2. Replacements needed: 2-2 = 0 <= k. result = 2.',
      viz: {
        array: { values: ['A', 'A', 'B', 'A', 'B', 'B', 'A'], highlights: [0, 1] },
        hashmap: { entries: [['A', 2]], justAdded: 'A' },
        pointers: { L: 0, R: 1 },
        variables: { k: 1, maxFreq: 2, result: 2, replacements: 0 },
      },
    },
    {
      line: 7,
      label: 'R=2, add "B"',
      message: 'Add "B". count = {A:2, B:1}. maxFreq = 2. Window "AAB", length 3. Replacements: 3-2 = 1 <= k. Valid! result = 3.',
      viz: {
        array: { values: ['A', 'A', 'B', 'A', 'B', 'B', 'A'], highlights: [0, 1, 2] },
        hashmap: { entries: [['A', 2], ['B', 1]], justAdded: 'B' },
        pointers: { L: 0, R: 2 },
        variables: { k: 1, maxFreq: 2, result: 3, replacements: 1 },
      },
    },
    {
      line: 7,
      label: 'R=3, add "A"',
      message: 'Add "A". count = {A:3, B:1}. maxFreq = 3. Window "AABA", length 4. Replacements: 4-3 = 1 <= k. Valid! result = 4.',
      viz: {
        array: { values: ['A', 'A', 'B', 'A', 'B', 'B', 'A'], highlights: [0, 1, 2, 3] },
        hashmap: { entries: [['A', 3], ['B', 1]], highlighted: 'A' },
        pointers: { L: 0, R: 3 },
        variables: { k: 1, maxFreq: 3, result: 4, replacements: 1 },
      },
      isKeyMoment: true,
    },
    {
      line: 9,
      label: 'R=4, invalid window',
      message: 'Add "B". count = {A:3, B:2}. maxFreq = 3. Window length 5. Replacements: 5-3 = 2 > k. Must shrink!',
      viz: {
        array: { values: ['A', 'A', 'B', 'A', 'B', 'B', 'A'], highlights: [0, 1, 2, 3, 4] },
        hashmap: { entries: [['A', 3], ['B', 2]], highlighted: 'B' },
        pointers: { L: 0, R: 4 },
        variables: { k: 1, maxFreq: 3, result: 4, replacements: 2 },
      },
      isKeyMoment: true,
    },
    {
      line: 10,
      label: 'Shrink L',
      message: 'Remove s[0]="A", count[A] = 2, L = 1. Window "ABAB", length 4. Replacements: 4-2 = 2 > k. Shrink again. Remove s[1]="A", count[A] = 1, L = 2. Window "BAB", length 3. Replacements: 3-2 = 1 <= k. Valid. result stays 4.',
      viz: {
        array: { values: ['A', 'A', 'B', 'A', 'B', 'B', 'A'], highlights: [2, 3, 4] },
        hashmap: { entries: [['A', 1], ['B', 2]] },
        pointers: { L: 2, R: 4 },
        variables: { k: 1, maxFreq: 3, result: 4, replacements: 1 },
      },
    },
    {
      line: 7,
      label: 'R=5, add "B"',
      message: 'Add "B". count = {A:1, B:3}. maxFreq = 3. Window "BABB", length 4. Replacements: 4-3 = 1 <= k. Valid! result = 4.',
      viz: {
        array: { values: ['A', 'A', 'B', 'A', 'B', 'B', 'A'], highlights: [2, 3, 4, 5] },
        hashmap: { entries: [['A', 1], ['B', 3]], highlighted: 'B' },
        pointers: { L: 2, R: 5 },
        variables: { k: 1, maxFreq: 3, result: 4, replacements: 1 },
      },
    },
    {
      line: 13,
      label: 'Result',
      message: 'R=6, window adjusts. Final result = 4. The longest substring after at most 1 replacement is "AABA" (length 4).',
      viz: {
        array: { values: ['A', 'A', 'B', 'A', 'B', 'B', 'A'], found: [0, 1, 2, 3] },
        hashmap: { entries: [['A', 3], ['B', 1]] },
        pointers: { L: 0, R: 3 },
        variables: { result: 4 },
      },
      isKeyMoment: true,
    },
  ],
};


const permutationInString: Problem = {
  id: 'permutation-in-string',
  name: 'Permutation in String',
  number: 567,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/permutation-in-string/',
  description: 'Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.',
  vizTypes: ['array', 'hashmap'],
  language: 'python',
  testInput: 's1 = "ab", s2 = "eidbaooo"',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Fixed Sliding Window',
  hints: [
    'A permutation has the same character frequencies as the original.',
    'Use a fixed window of size len(s1) and slide it across s2.',
    'Compare character frequency maps instead of sorting.',
  ],
  code: `def checkInclusion(s1, s2):
    if len(s1) > len(s2):
        return False
    s1_count = {}
    for c in s1:
        s1_count[c] = s1_count.get(c, 0) + 1
    win_count = {}
    for i in range(len(s2)):
        win_count[s2[i]] = win_count.get(s2[i], 0) + 1
        if i >= len(s1):
            left_char = s2[i - len(s1)]
            win_count[left_char] -= 1
            if win_count[left_char] == 0:
                del win_count[left_char]
        if win_count == s1_count:
            return True
    return False`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Check if s2 = "eidbaooo" contains a permutation of s1 = "ab". Window size = 2.',
      viz: {
        array: { values: ['e', 'i', 'd', 'b', 'a', 'o', 'o', 'o'] },
        hashmap: { entries: [] },
        variables: { s1: 'ab', windowSize: 2 },
      },
    },
    {
      line: 4,
      label: 'Build s1 freq',
      message: 'Build frequency map for s1: {a: 1, b: 1}. This is our target to match.',
      viz: {
        array: { values: ['e', 'i', 'd', 'b', 'a', 'o', 'o', 'o'] },
        hashmap: { entries: [['a', 1], ['b', 1]], justAdded: 'b' },
        variables: { s1_count: '{a:1, b:1}' },
      },
    },
    {
      line: 7,
      label: 'Window [0,1]',
      message: 'First window "ei": win_count = {e:1, i:1}. Does not match s1_count.',
      viz: {
        array: { values: ['e', 'i', 'd', 'b', 'a', 'o', 'o', 'o'], highlights: [0, 1] },
        hashmap: { entries: [['a', 1], ['b', 1]] },
        pointers: { L: 0, R: 1 },
        variables: { win_count: '{e:1, i:1}', match: false },
      },
    },
    {
      line: 7,
      label: 'Window [1,2]',
      message: 'Slide right: add "d", remove "e". Window "id": win_count = {i:1, d:1}. No match.',
      viz: {
        array: { values: ['e', 'i', 'd', 'b', 'a', 'o', 'o', 'o'], highlights: [1, 2] },
        hashmap: { entries: [['a', 1], ['b', 1]] },
        pointers: { L: 1, R: 2 },
        variables: { win_count: '{i:1, d:1}', match: false },
      },
    },
    {
      line: 7,
      label: 'Window [2,3]',
      message: 'Slide right: add "b", remove "i". Window "db": win_count = {d:1, b:1}. No match.',
      viz: {
        array: { values: ['e', 'i', 'd', 'b', 'a', 'o', 'o', 'o'], highlights: [2, 3] },
        hashmap: { entries: [['a', 1], ['b', 1]] },
        pointers: { L: 2, R: 3 },
        variables: { win_count: '{d:1, b:1}', match: false },
      },
    },
    {
      line: 7,
      label: 'Window [3,4]',
      message: 'Slide right: add "a", remove "d". Window "ba": win_count = {b:1, a:1}.',
      viz: {
        array: { values: ['e', 'i', 'd', 'b', 'a', 'o', 'o', 'o'], highlights: [3, 4] },
        hashmap: { entries: [['a', 1], ['b', 1]], highlighted: 'a' },
        pointers: { L: 3, R: 4 },
        variables: { win_count: '{b:1, a:1}', match: '?' },
      },
    },
    {
      line: 14,
      label: 'Match!',
      message: 'win_count {b:1, a:1} == s1_count {a:1, b:1}. "ba" is a permutation of "ab"!',
      isKeyMoment: true,
      viz: {
        array: { values: ['e', 'i', 'd', 'b', 'a', 'o', 'o', 'o'], found: [3, 4] },
        hashmap: { entries: [['a', 1], ['b', 1]], highlighted: 'a' },
        pointers: { L: 3, R: 4 },
        variables: { win_count: '{b:1, a:1}', result: true },
      },
    },
    {
      line: 15,
      label: 'Return',
      message: 'Return true. Found permutation "ba" at index 3 in s2.',
      viz: {
        array: { values: ['e', 'i', 'd', 'b', 'a', 'o', 'o', 'o'], found: [3, 4] },
        hashmap: { entries: [['a', 1], ['b', 1]] },
        pointers: { L: 3, R: 4 },
        variables: { result: true },
      },
    },
  ],
};

const minWindowSubstring: Problem = {
  id: 'minimum-window-substring',
  name: 'Minimum Window Substring',
  number: 76,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/minimum-window-substring/',
  description: 'Given two strings s and t, return the minimum window substring of s such that every character in t is included in the window.',
  vizTypes: ['array', 'hashmap'],
  language: 'python',
  testInput: 's = "ADOBECODEBANC", t = "ABC"',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Variable Sliding Window',
  hints: [
    'Expand the window to the right until it contains all characters of t.',
    'Then shrink from the left to find the minimum valid window.',
    'Track how many required characters are satisfied with a counter.',
  ],
  code: `def minWindow(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    have, required = 0, len(need)
    window = {}
    res, resLen = [-1, -1], float("inf")
    l = 0
    for r in range(len(s)):
        window[s[r]] = window.get(s[r], 0) + 1
        if s[r] in need and window[s[r]] == need[s[r]]:
            have += 1
        while have == required:
            if (r - l + 1) < resLen:
                res, resLen = [l, r], r - l + 1
            window[s[l]] -= 1
            if s[l] in need and window[s[l]] < need[s[l]]:
                have -= 1
            l += 1
    return s[res[0]:res[1]+1] if resLen != float("inf") else ""`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find the minimum window in s = "ADOBECODEBANC" containing all chars of t = "ABC".',
      viz: {
        array: { values: ['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C'] },
        hashmap: { entries: [] },
        variables: { t: 'ABC', have: 0, required: 3 },
      },
    },
    {
      line: 2,
      label: 'Build need',
      message: 'Build frequency map for t: need = {A:1, B:1, C:1}. We need 3 unique chars satisfied.',
      viz: {
        array: { values: ['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C'] },
        hashmap: { entries: [['A', 1], ['B', 1], ['C', 1]], justAdded: 'C' },
        variables: { have: 0, required: 3 },
      },
    },
    {
      line: 8,
      label: 'Expand to C',
      message: 'Expand right pointer to index 5 ("C"). Window "ADOBEC" now has A:1, B:1, C:1. have = 3 = required!',
      viz: {
        array: { values: ['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C'], highlights: [0, 1, 2, 3, 4, 5] },
        hashmap: { entries: [['A', 1], ['B', 1], ['C', 1]] },
        pointers: { L: 0, R: 5 },
        variables: { have: 3, required: 3, window: 'ADOBEC', len: 6 },
      },
    },
    {
      line: 13,
      label: 'Shrink left',
      message: 'Valid window found: "ADOBEC" (len 6). Save as best. Shrink: remove "A", have drops to 2. Window invalid.',
      viz: {
        array: { values: ['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C'], highlights: [1, 2, 3, 4, 5] },
        hashmap: { entries: [['A', 1], ['B', 1], ['C', 1]] },
        pointers: { L: 1, R: 5 },
        variables: { have: 2, best: 'ADOBEC', bestLen: 6 },
      },
    },
    {
      line: 8,
      label: 'Expand to A',
      message: 'Keep expanding right. At index 10 ("A"), window "DOBECODEBAN" has all chars again. have = 3.',
      viz: {
        array: { values: ['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C'], highlights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        hashmap: { entries: [['A', 1], ['B', 1], ['C', 1]] },
        pointers: { L: 1, R: 10 },
        variables: { have: 3, best: 'ADOBEC', bestLen: 6 },
      },
    },
    {
      line: 13,
      label: 'Shrink again',
      message: 'Shrink from left aggressively. After removing D,O,B,E: window starts at 5 ("C"). Remove C, have drops. L = 6.',
      viz: {
        array: { values: ['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C'], highlights: [6, 7, 8, 9, 10] },
        hashmap: { entries: [['A', 1], ['B', 1], ['C', 1]] },
        pointers: { L: 6, R: 10 },
        variables: { have: 2, best: 'ADOBEC', bestLen: 6 },
      },
    },
    {
      line: 8,
      label: 'Expand to C',
      message: 'Expand to index 12 ("C"). Window "ODEBANC" has all chars. have = 3. Shrink left: remove O,D,E. Window "BANC" (len 4) is new best!',
      isKeyMoment: true,
      viz: {
        array: { values: ['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C'], found: [9, 10, 11, 12] },
        hashmap: { entries: [['A', 1], ['B', 1], ['C', 1]], highlighted: 'C' },
        pointers: { L: 9, R: 12 },
        variables: { have: 3, best: 'BANC', bestLen: 4 },
      },
    },
    {
      line: 19,
      label: 'Return',
      message: 'No more characters to expand. Return "BANC" as the minimum window substring.',
      viz: {
        array: { values: ['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C'], found: [9, 10, 11, 12] },
        hashmap: { entries: [['A', 1], ['B', 1], ['C', 1]] },
        pointers: { L: 9, R: 12 },
        variables: { result: 'BANC' },
      },
    },
  ],
};

const slidingWindowMax: Problem = {
  id: 'sliding-window-maximum',
  name: 'Sliding Window Maximum',
  number: 239,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/sliding-window-maximum/',
  description: 'Given an array nums and a sliding window of size k, return the max value in each window as it slides from left to right.',
  vizTypes: ['array', 'queue'],
  language: 'python',
  testInput: 'nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(k)',
  pattern: 'Monotonic Deque',
  hints: [
    'A brute-force approach checks all k elements per window — can we do better?',
    'Use a deque that keeps indices in decreasing order of their values.',
    'When adding a new element, remove all smaller elements from the back of the deque.',
  ],
  code: `from collections import deque

def maxSlidingWindow(nums, k):
    dq = deque()  # stores indices
    result = []
    for i in range(len(nums)):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,
  steps: [
    {
      line: 3,
      label: 'Init',
      message: 'Find the maximum in each window of size k = 3 over nums = [1, 3, -1, -3, 5, 3, 6, 7]. Use a monotonic deque.',
      viz: {
        array: { values: [1, 3, -1, -3, 5, 3, 6, 7] },
        queue: { values: [] },
        variables: { k: 3, result: [] },
      },
    },
    {
      line: 6,
      label: 'i=0, add 1',
      message: 'Process nums[0] = 1. Deque is empty, push index 0. Deque: [0]. Window not full yet.',
      viz: {
        array: { values: [1, 3, -1, -3, 5, 3, 6, 7], highlights: [0] },
        queue: { values: ['0(1)'], enqueueing: '0(1)' },
        pointers: { windowStart: 0, windowEnd: 0 },
        variables: { k: 3, result: [] },
      },
    },
    {
      line: 6,
      label: 'i=1, add 3',
      message: 'Process nums[1] = 3. Remove 1 from deque back (3 > 1). Push index 1. Deque: [1]. Window not full yet.',
      viz: {
        array: { values: [1, 3, -1, -3, 5, 3, 6, 7], highlights: [0, 1] },
        queue: { values: ['1(3)'], enqueueing: '1(3)' },
        pointers: { windowStart: 0, windowEnd: 1 },
        variables: { k: 3, result: [] },
      },
    },
    {
      line: 6,
      label: 'i=2, add -1',
      message: 'Process nums[2] = -1. -1 < 3, so just append. Deque: [1, 2]. First full window [1,3,-1], max = nums[1] = 3.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 3, -1, -3, 5, 3, 6, 7], highlights: [0, 1, 2] },
        queue: { values: ['1(3)', '2(-1)'] },
        pointers: { windowStart: 0, windowEnd: 2 },
        variables: { k: 3, result: [3] },
      },
    },
    {
      line: 6,
      label: 'i=3, add -3',
      message: 'Process nums[3] = -3. Append index 3. Deque: [1, 2, 3]. Window [3,-1,-3], max = nums[1] = 3.',
      viz: {
        array: { values: [1, 3, -1, -3, 5, 3, 6, 7], highlights: [1, 2, 3] },
        queue: { values: ['1(3)', '2(-1)', '3(-3)'] },
        pointers: { windowStart: 1, windowEnd: 3 },
        variables: { k: 3, result: [3, 3] },
      },
    },
    {
      line: 6,
      label: 'i=4, add 5',
      message: 'Process nums[4] = 5. Remove -3, -1, 3 from deque (all < 5). Pop front index 1 (out of window). Deque: [4]. Max = 5.',
      viz: {
        array: { values: [1, 3, -1, -3, 5, 3, 6, 7], highlights: [2, 3, 4] },
        queue: { values: ['4(5)'] },
        pointers: { windowStart: 2, windowEnd: 4 },
        variables: { k: 3, result: [3, 3, 5] },
      },
    },
    {
      line: 6,
      label: 'i=5,6',
      message: 'i=5: add 3, deque [4,5], max=5. i=6: add 6, clear deque (6>3,6>5), deque [6], max=6.',
      viz: {
        array: { values: [1, 3, -1, -3, 5, 3, 6, 7], highlights: [4, 5, 6] },
        queue: { values: ['6(6)'] },
        pointers: { windowStart: 4, windowEnd: 6 },
        variables: { k: 3, result: [3, 3, 5, 5, 6] },
      },
    },
    {
      line: 12,
      label: 'i=7, done',
      message: 'i=7: add 7, remove 6 (7>6). Deque: [7]. Max = 7. Final result = [3, 3, 5, 5, 6, 7].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 3, -1, -3, 5, 3, 6, 7], found: [7] },
        queue: { values: ['7(7)'] },
        pointers: { windowStart: 5, windowEnd: 7 },
        variables: { k: 3, result: [3, 3, 5, 5, 6, 7] },
      },
    },
  ],
};


export const slidingWindowProblems: Problem[] = [bestTimeToBuyAndSellStock, longestSubstringWithoutRepeating, longestRepeatingCharacterReplacement, permutationInString, minWindowSubstring, slidingWindowMax];
