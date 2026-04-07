import type { Problem } from '../types';

const twoSum: Problem = {
  id: 'two-sum',
  name: 'Two Sum',
  number: 1,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/two-sum/',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  vizTypes: ['array', 'hashmap'],
  language: 'python',
  testInput: 'nums = [2, 7, 11, 15], target = 9',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Hash Map Lookup',
  hints: [
    'Think about what value you need to find for each element.',
    'Can you use a hash map to store values you\'ve seen?',
    'For each element, check if target - element exists in the map.',
  ],
  code: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start with nums = [2, 7, 11, 15] and target = 9. We need to find two numbers that add up to 9.',
      viz: {
        array: { values: [2, 7, 11, 15] },
        hashmap: { entries: [] },
        variables: { target: 9, i: '-', num: '-', complement: '-' },
      },
    },
    {
      line: 2,
      label: 'Init HashMap',
      message: 'Create an empty hash map "seen" to store numbers we\'ve visited and their indices.',
      viz: {
        array: { values: [2, 7, 11, 15] },
        hashmap: { entries: [] },
        variables: { target: 9, seen: '{}' },
      },
    },
    {
      line: 3,
      label: 'Iterate i=0',
      message: 'Start iterating. i = 0, num = 2.',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0] },
        hashmap: { entries: [] },
        variables: { target: 9, i: 0, num: 2 },
      },
    },
    {
      line: 4,
      label: 'Complement',
      message: 'Calculate complement = target - num = 9 - 2 = 7. We need to find 7 in our map.',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0] },
        hashmap: { entries: [] },
        variables: { target: 9, i: 0, num: 2, complement: 7 },
      },
    },
    {
      line: 5,
      label: 'Check Map',
      message: '7 is NOT in "seen" (map is empty). So we can\'t form a pair yet.',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0] },
        hashmap: { entries: [] },
        variables: { target: 9, i: 0, num: 2, complement: 7 },
      },
    },
    {
      line: 7,
      label: 'Store',
      message: 'Store seen[2] = 0. Now if we later find a number that needs 2 as its complement, we know it\'s at index 0.',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0] },
        hashmap: { entries: [['2', 0]], justAdded: '2' },
        variables: { target: 9, i: 0, num: 2, complement: 7 },
      },
    },
    {
      line: 3,
      label: 'Iterate i=1',
      message: 'Next iteration. i = 1, num = 7.',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [1] },
        hashmap: { entries: [['2', 0]] },
        variables: { target: 9, i: 1, num: 7 },
      },
    },
    {
      line: 4,
      label: 'Complement',
      message: 'Calculate complement = target - num = 9 - 7 = 2. We need to check if 2 is in our map.',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [1] },
        hashmap: { entries: [['2', 0]], highlighted: '2' },
        variables: { target: 9, i: 1, num: 7, complement: 2 },
      },
    },
    {
      line: 5,
      label: 'Found!',
      message: '2 IS in "seen"! seen[2] = 0. The pair is at indices [0, 1]. nums[0] + nums[1] = 2 + 7 = 9.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 7, 11, 15], found: [0, 1] },
        hashmap: { entries: [['2', 0]], highlighted: '2' },
        variables: { target: 9, i: 1, num: 7, complement: 2, result: [0, 1] },
      },
    },
    {
      line: 6,
      label: 'Return',
      message: 'Return [0, 1]. Two Sum solved in O(n) time using a hash map!',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 7, 11, 15], found: [0, 1] },
        hashmap: { entries: [['2', 0]], highlighted: '2' },
        variables: { target: 9, result: [0, 1] },
      },
    },
  ],
};

const validAnagram: Problem = {
  id: 'valid-anagram',
  name: 'Valid Anagram',
  number: 242,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/valid-anagram/',
  description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
  vizTypes: ['hashmap'],
  language: 'python',
  testInput: 's = "anagram", t = "nagaram"',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Frequency Count',
  hints: [
    'Count character frequencies in both strings.',
    'Compare the frequency maps - they must be identical for anagrams.',
  ],
  code: `def isAnagram(s, t):
    if len(s) != len(t):
        return False
    count = {}
    for c in s:
        count[c] = count.get(c, 0) + 1
    for c in t:
        count[c] = count.get(c, 0) - 1
    return all(v == 0 for v in count.values())`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Check if s = "anagram" and t = "nagaram" are anagrams. Both have length 7.',
      viz: {
        hashmap: { entries: [] },
        variables: { s: 'anagram', t: 'nagaram' },
      },
    },
    {
      line: 2,
      label: 'Length Check',
      message: 'len(s) = 7, len(t) = 7. Lengths match, so we proceed.',
      viz: {
        hashmap: { entries: [] },
        variables: { s: 'anagram', t: 'nagaram', 'len(s)': 7, 'len(t)': 7 },
      },
    },
    {
      line: 4,
      label: 'Init Count',
      message: 'Create empty count dictionary to track character frequencies.',
      viz: {
        hashmap: { entries: [] },
        variables: { s: 'anagram', t: 'nagaram' },
      },
    },
    {
      line: 5,
      label: 'Count s',
      message: 'Count all characters in s = "anagram": a:3, n:1, g:1, r:1, m:1',
      viz: {
        hashmap: {
          entries: [['a', 3], ['n', 1], ['g', 1], ['r', 1], ['m', 1]],
          justAdded: 'm',
        },
        variables: { phase: 'counting s' },
      },
    },
    {
      line: 7,
      label: 'Process t: n',
      message: 'Now subtract characters from t. Process "n": count[n] = 1 - 1 = 0.',
      viz: {
        hashmap: {
          entries: [['a', 3], ['n', 0], ['g', 1], ['r', 1], ['m', 1]],
          highlighted: 'n',
        },
        variables: { phase: 'subtracting t', char: 'n' },
      },
    },
    {
      line: 7,
      label: 'Process t: a,g,a',
      message: 'Process "a","g","a": count[a] = 3-1-1 = 1, count[g] = 1-1 = 0.',
      viz: {
        hashmap: {
          entries: [['a', 1], ['n', 0], ['g', 0], ['r', 1], ['m', 1]],
          highlighted: 'a',
        },
        variables: { phase: 'subtracting t', remaining: 'ram' },
      },
    },
    {
      line: 7,
      label: 'Process t: r,a,m',
      message: 'Process "r","a","m": count[r] = 0, count[a] = 0, count[m] = 0. All counts are now 0!',
      viz: {
        hashmap: {
          entries: [['a', 0], ['n', 0], ['g', 0], ['r', 0], ['m', 0]],
          highlighted: 'm',
        },
        variables: { phase: 'subtracting t' },
      },
    },
    {
      line: 9,
      label: 'Verify',
      message: 'Check if all values are 0. Yes! Every character in s appears the same number of times in t.',
      isKeyMoment: true,
      viz: {
        hashmap: {
          entries: [['a', 0], ['n', 0], ['g', 0], ['r', 0], ['m', 0]],
        },
        variables: { result: true },
      },
    },
    {
      line: 9,
      label: 'Return',
      message: 'Return True. "anagram" and "nagaram" are anagrams!',
      isKeyMoment: true,
      viz: {
        hashmap: {
          entries: [['a', 0], ['n', 0], ['g', 0], ['r', 0], ['m', 0]],
        },
        variables: { result: true },
      },
    },
  ],
};

export const arraysHashingProblems: Problem[] = [twoSum, validAnagram];
