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

const containsDuplicate: Problem = {
  id: 'contains-duplicate',
  name: 'Contains Duplicate',
  number: 217,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/contains-duplicate/',
  description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
  vizTypes: ['array', 'set'],
  language: 'python',
  testInput: 'nums = [1, 2, 3, 1]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Hash Set Lookup',
  hints: [
    'A set stores only unique values. What happens when you try to add a duplicate?',
    'For each number, check if it already exists in the set before adding it.',
  ],
  code: `def containsDuplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start with nums = [1, 2, 3, 1]. We need to check if any value appears more than once.',
      viz: {
        array: { values: [1, 2, 3, 1] },
        set: { values: [] },
        variables: { i: '-', num: '-', found: false },
      },
    },
    {
      line: 2,
      label: 'Init Set',
      message: 'Create an empty set "seen" to track numbers we have encountered.',
      viz: {
        array: { values: [1, 2, 3, 1] },
        set: { values: [] },
        variables: { i: '-', num: '-', found: false },
      },
    },
    {
      line: 3,
      label: 'Check num=1',
      message: 'num = 1. Check if 1 is in the set. The set is empty, so 1 is not found.',
      viz: {
        array: { values: [1, 2, 3, 1], highlights: [0] },
        set: { values: [], checking: 1 },
        variables: { i: 0, num: 1, found: false },
      },
    },
    {
      line: 6,
      label: 'Add 1',
      message: 'Add 1 to the set.',
      viz: {
        array: { values: [1, 2, 3, 1], highlights: [0] },
        set: { values: [1], justAdded: 1 },
        variables: { i: 0, num: 1, found: false },
      },
    },
    {
      line: 3,
      label: 'Check num=2',
      message: 'num = 2. Check if 2 is in the set. It is not.',
      viz: {
        array: { values: [1, 2, 3, 1], highlights: [1] },
        set: { values: [1], checking: 2 },
        variables: { i: 1, num: 2, found: false },
      },
    },
    {
      line: 6,
      label: 'Add 2',
      message: 'Add 2 to the set.',
      viz: {
        array: { values: [1, 2, 3, 1], highlights: [1] },
        set: { values: [1, 2], justAdded: 2 },
        variables: { i: 1, num: 2, found: false },
      },
    },
    {
      line: 3,
      label: 'Check num=3',
      message: 'num = 3. Check if 3 is in the set. It is not. Add 3 to the set.',
      viz: {
        array: { values: [1, 2, 3, 1], highlights: [2] },
        set: { values: [1, 2, 3], justAdded: 3 },
        variables: { i: 2, num: 3, found: false },
      },
    },
    {
      line: 4,
      label: 'Duplicate!',
      message: 'num = 1. Check if 1 is in the set. YES! 1 is already in the set. We found a duplicate!',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 3, 1], highlights: [3], found: [0, 3] },
        set: { values: [1, 2, 3], checking: 1 },
        variables: { i: 3, num: 1, found: true },
      },
    },
    {
      line: 5,
      label: 'Return',
      message: 'Return True. The array contains a duplicate (1 appears at index 0 and 3). Solved in O(n) time using a set!',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 3, 1], found: [0, 3] },
        set: { values: [1, 2, 3], highlighted: 1 },
        variables: { i: 3, num: 1, found: true },
      },
    },
  ],
};

const groupAnagrams: Problem = {
  id: 'group-anagrams',
  name: 'Group Anagrams',
  number: 49,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/group-anagrams/',
  description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
  vizTypes: ['hashmap'],
  language: 'python',
  testInput: 'strs = ["eat","tea","tan","ate","nat","bat"]',
  timeComplexity: 'O(n * k log k)',
  spaceComplexity: 'O(n * k)',
  pattern: 'Hash Map Grouping',
  hints: [
    'Two words are anagrams if they have the same characters in the same frequencies.',
    'If you sort each word, anagrams will produce the same sorted string.',
    'Use the sorted string as a hash map key to group anagrams together.',
  ],
  code: `def groupAnagrams(strs):
    groups = {}
    for word in strs:
        key = ''.join(sorted(word))
        if key not in groups:
            groups[key] = []
        groups[key].append(word)
    return list(groups.values())`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start with strs = ["eat","tea","tan","ate","nat","bat"]. We need to group words that are anagrams of each other.',
      viz: {
        hashmap: { entries: [] },
        variables: { word: '-', key: '-', groups: '{}' },
      },
    },
    {
      line: 2,
      label: 'Init Map',
      message: 'Create an empty hash map "groups" where sorted characters will be the key and lists of anagram words will be the values.',
      viz: {
        hashmap: { entries: [] },
        variables: { word: '-', key: '-', groups: '{}' },
      },
    },
    {
      line: 3,
      label: 'Process "eat"',
      message: 'word = "eat". Sort it to get key = "aet". Key "aet" is new, so create a new group and add "eat".',
      isKeyMoment: true,
      viz: {
        hashmap: { entries: [['aet', ['eat']]], justAdded: 'aet' },
        variables: { word: 'eat', key: 'aet' },
      },
    },
    {
      line: 3,
      label: 'Process "tea"',
      message: 'word = "tea". Sort it to get key = "aet". Key "aet" already exists! Append "tea" to that group.',
      viz: {
        hashmap: { entries: [['aet', ['eat', 'tea']]], highlighted: 'aet' },
        variables: { word: 'tea', key: 'aet' },
      },
    },
    {
      line: 3,
      label: 'Process "tan"',
      message: 'word = "tan". Sort it to get key = "ant". Key "ant" is new, so create a new group.',
      viz: {
        hashmap: { entries: [['aet', ['eat', 'tea']], ['ant', ['tan']]], justAdded: 'ant' },
        variables: { word: 'tan', key: 'ant' },
      },
    },
    {
      line: 3,
      label: 'Process "ate"',
      message: 'word = "ate". Sort it to get key = "aet". Key "aet" exists! Append "ate" to that group.',
      viz: {
        hashmap: { entries: [['aet', ['eat', 'tea', 'ate']], ['ant', ['tan']]], highlighted: 'aet' },
        variables: { word: 'ate', key: 'aet' },
      },
    },
    {
      line: 3,
      label: 'Process "nat"',
      message: 'word = "nat". Sort it to get key = "ant". Key "ant" exists! Append "nat" to that group.',
      viz: {
        hashmap: { entries: [['aet', ['eat', 'tea', 'ate']], ['ant', ['tan', 'nat']]], highlighted: 'ant' },
        variables: { word: 'nat', key: 'ant' },
      },
    },
    {
      line: 3,
      label: 'Process "bat"',
      message: 'word = "bat". Sort it to get key = "abt". Key "abt" is new, so create a new group.',
      viz: {
        hashmap: { entries: [['aet', ['eat', 'tea', 'ate']], ['ant', ['tan', 'nat']], ['abt', ['bat']]], justAdded: 'abt' },
        variables: { word: 'bat', key: 'abt' },
      },
    },
    {
      line: 8,
      label: 'Return',
      message: 'Return all groups: [["eat","tea","ate"], ["tan","nat"], ["bat"]]. Anagrams grouped in O(n * k log k) time!',
      isKeyMoment: true,
      viz: {
        hashmap: { entries: [['aet', ['eat', 'tea', 'ate']], ['ant', ['tan', 'nat']], ['abt', ['bat']]] },
        variables: { groups: 3 },
      },
    },
  ],
};

const topKFrequent: Problem = {
  id: 'top-k-frequent-elements',
  name: 'Top K Frequent Elements',
  number: 347,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/top-k-frequent-elements/',
  description: 'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.',
  vizTypes: ['array', 'hashmap'],
  language: 'python',
  testInput: 'nums = [1,1,1,2,2,3], k = 2',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Bucket Sort / Frequency Count',
  hints: [
    'First, count the frequency of each element using a hash map.',
    'Use bucket sort: create an array where index = frequency, value = list of elements with that frequency.',
    'Collect elements from the highest frequency bucket down until you have k elements.',
  ],
  code: `def topKFrequent(nums, k):
    count = {}
    for num in nums:
        count[num] = count.get(num, 0) + 1
    buckets = [[] for _ in range(len(nums) + 1)]
    for num, freq in count.items():
        buckets[freq].append(num)
    result = []
    for i in range(len(buckets) - 1, 0, -1):
        for num in buckets[i]:
            result.append(num)
            if len(result) == k:
                return result`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start with nums = [1,1,1,2,2,3] and k = 2. We need to find the 2 most frequent elements.',
      viz: {
        array: { values: [1, 1, 1, 2, 2, 3] },
        hashmap: { entries: [] },
        variables: { k: 2, count: '{}', result: [] },
      },
    },
    {
      line: 2,
      label: 'Count Frequencies',
      message: 'Count the frequency of each number: 1 appears 3 times, 2 appears 2 times, 3 appears 1 time.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 1, 2, 2, 3] },
        hashmap: { entries: [['1', 3], ['2', 2], ['3', 1]], justAdded: '3' },
        variables: { k: 2, count: '{1:3, 2:2, 3:1}' },
      },
    },
    {
      line: 5,
      label: 'Create Buckets',
      message: 'Create bucket array of size n+1 = 7. Index represents frequency, value is list of numbers with that frequency.',
      viz: {
        array: { values: ['[]', '[]', '[]', '[]', '[]', '[]', '[]'], labels: { 0: 'freq 0', 1: 'freq 1', 2: 'freq 2', 3: 'freq 3', 4: 'freq 4', 5: 'freq 5', 6: 'freq 6' } },
        hashmap: { entries: [['1', 3], ['2', 2], ['3', 1]] },
        variables: { k: 2, count: '{1:3, 2:2, 3:1}' },
      },
    },
    {
      line: 6,
      label: 'Fill Bucket: 1',
      message: 'Number 1 has frequency 3, so place it in bucket[3].',
      viz: {
        array: { values: ['[]', '[]', '[]', '[1]', '[]', '[]', '[]'], highlights: [3], labels: { 0: 'freq 0', 1: 'freq 1', 2: 'freq 2', 3: 'freq 3', 4: 'freq 4', 5: 'freq 5', 6: 'freq 6' } },
        hashmap: { entries: [['1', 3], ['2', 2], ['3', 1]], highlighted: '1' },
        variables: { k: 2 },
      },
    },
    {
      line: 6,
      label: 'Fill Bucket: 2',
      message: 'Number 2 has frequency 2, so place it in bucket[2]. Number 3 has frequency 1, place in bucket[1].',
      viz: {
        array: { values: ['[]', '[3]', '[2]', '[1]', '[]', '[]', '[]'], highlights: [1, 2], labels: { 0: 'freq 0', 1: 'freq 1', 2: 'freq 2', 3: 'freq 3', 4: 'freq 4', 5: 'freq 5', 6: 'freq 6' } },
        hashmap: { entries: [['1', 3], ['2', 2], ['3', 1]] },
        variables: { k: 2 },
      },
    },
    {
      line: 8,
      label: 'Init Result',
      message: 'Now traverse buckets from highest frequency to lowest, collecting elements until we have k = 2 results.',
      viz: {
        array: { values: ['[]', '[3]', '[2]', '[1]', '[]', '[]', '[]'], labels: { 0: 'freq 0', 1: 'freq 1', 2: 'freq 2', 3: 'freq 3', 4: 'freq 4', 5: 'freq 5', 6: 'freq 6' } },
        hashmap: { entries: [['1', 3], ['2', 2], ['3', 1]] },
        variables: { k: 2, result: [] },
      },
    },
    {
      line: 9,
      label: 'Bucket[3]',
      message: 'Bucket[3] contains [1]. Add 1 to result. result = [1]. Need 1 more.',
      viz: {
        array: { values: ['[]', '[3]', '[2]', '[1]', '[]', '[]', '[]'], highlights: [3], labels: { 0: 'freq 0', 1: 'freq 1', 2: 'freq 2', 3: 'freq 3', 4: 'freq 4', 5: 'freq 5', 6: 'freq 6' } },
        hashmap: { entries: [['1', 3], ['2', 2], ['3', 1]], highlighted: '1' },
        variables: { k: 2, result: [1] },
      },
    },
    {
      line: 9,
      label: 'Bucket[2]',
      message: 'Bucket[2] contains [2]. Add 2 to result. result = [1, 2]. We have k = 2 elements!',
      isKeyMoment: true,
      viz: {
        array: { values: ['[]', '[3]', '[2]', '[1]', '[]', '[]', '[]'], highlights: [2], labels: { 0: 'freq 0', 1: 'freq 1', 2: 'freq 2', 3: 'freq 3', 4: 'freq 4', 5: 'freq 5', 6: 'freq 6' } },
        hashmap: { entries: [['1', 3], ['2', 2], ['3', 1]], highlighted: '2' },
        variables: { k: 2, result: [1, 2] },
      },
    },
    {
      line: 12,
      label: 'Return',
      message: 'Return [1, 2]. The top 2 frequent elements are 1 (freq 3) and 2 (freq 2). Solved in O(n) using bucket sort!',
      isKeyMoment: true,
      viz: {
        array: { values: ['[]', '[3]', '[2]', '[1]', '[]', '[]', '[]'], found: [2, 3], labels: { 0: 'freq 0', 1: 'freq 1', 2: 'freq 2', 3: 'freq 3', 4: 'freq 4', 5: 'freq 5', 6: 'freq 6' } },
        hashmap: { entries: [['1', 3], ['2', 2], ['3', 1]] },
        variables: { k: 2, result: [1, 2] },
      },
    },
  ],
};

const productExceptSelf: Problem = {
  id: 'product-of-array-except-self',
  name: 'Product of Array Except Self',
  number: 238,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/product-of-array-except-self/',
  description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [1, 2, 3, 4]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Prefix/Suffix Products',
  hints: [
    'The product of all elements except self equals prefix product * suffix product.',
    'First pass: compute prefix products from left to right.',
    'Second pass: multiply by suffix products from right to left.',
  ],
  code: `def productExceptSelf(nums):
    n = len(nums)
    result = [1] * n
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start with nums = [1, 2, 3, 4]. We need result[i] = product of all elements except nums[i], without using division.',
      viz: {
        array: { values: [1, 2, 3, 4], labels: { 0: 'nums' } },
        variables: { prefix: '-', suffix: '-', result: '-' },
      },
    },
    {
      line: 3,
      label: 'Init Result',
      message: 'Initialize result = [1, 1, 1, 1] and prefix = 1. We will first fill result with prefix products.',
      viz: {
        array: { values: [1, 1, 1, 1], labels: { 0: 'result' } },
        variables: { prefix: 1, suffix: '-', result: [1, 1, 1, 1] },
      },
    },
    {
      line: 5,
      label: 'Prefix i=0',
      message: 'i = 0: result[0] = prefix = 1. Then prefix *= nums[0] = 1. prefix is now 1.',
      viz: {
        array: { values: [1, 1, 1, 1], highlights: [0], labels: { 0: 'prefix' } },
        variables: { prefix: 1, i: 0, result: [1, 1, 1, 1] },
      },
    },
    {
      line: 5,
      label: 'Prefix i=1,2,3',
      message: 'i=1: result[1]=1, prefix=2. i=2: result[2]=2, prefix=6. i=3: result[3]=6, prefix=24. Result now holds all prefix products.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 6], highlights: [0, 1, 2, 3], labels: { 0: 'prefix', 1: 'prefix', 2: 'prefix', 3: 'prefix' } },
        variables: { prefix: 24, result: [1, 1, 2, 6] },
      },
    },
    {
      line: 8,
      label: 'Init Suffix',
      message: 'Now do the second pass right-to-left. Initialize suffix = 1.',
      viz: {
        array: { values: [1, 1, 2, 6], labels: { 0: 'prefix', 1: 'prefix', 2: 'prefix', 3: 'prefix' } },
        variables: { prefix: 24, suffix: 1, result: [1, 1, 2, 6] },
      },
    },
    {
      line: 9,
      label: 'Suffix i=3',
      message: 'i = 3: result[3] *= suffix = 6 * 1 = 6. Then suffix *= nums[3] = 4. suffix is now 4.',
      viz: {
        array: { values: [1, 1, 2, 6], highlights: [3], labels: { 3: 'suffix' } },
        variables: { suffix: 4, i: 3, result: [1, 1, 2, 6] },
      },
    },
    {
      line: 9,
      label: 'Suffix i=2',
      message: 'i = 2: result[2] *= suffix = 2 * 4 = 8. Then suffix *= nums[2] = 3. suffix is now 12.',
      viz: {
        array: { values: [1, 1, 8, 6], highlights: [2], labels: { 2: 'suffix', 3: 'done' } },
        variables: { suffix: 12, i: 2, result: [1, 1, 8, 6] },
      },
    },
    {
      line: 9,
      label: 'Suffix i=1',
      message: 'i = 1: result[1] *= suffix = 1 * 12 = 12. Then suffix *= nums[1] = 2. suffix is now 24.',
      viz: {
        array: { values: [1, 12, 8, 6], highlights: [1], labels: { 1: 'suffix', 2: 'done', 3: 'done' } },
        variables: { suffix: 24, i: 1, result: [1, 12, 8, 6] },
      },
    },
    {
      line: 9,
      label: 'Suffix i=0',
      message: 'i = 0: result[0] *= suffix = 1 * 24 = 24. Then suffix *= nums[0] = 1. suffix is now 24.',
      isKeyMoment: true,
      viz: {
        array: { values: [24, 12, 8, 6], highlights: [0], labels: { 0: 'suffix', 1: 'done', 2: 'done', 3: 'done' } },
        variables: { suffix: 24, i: 0, result: [24, 12, 8, 6] },
      },
    },
    {
      line: 12,
      label: 'Return',
      message: 'Return [24, 12, 8, 6]. Each element is the product of all other elements. Solved in O(n) time and O(1) extra space!',
      isKeyMoment: true,
      viz: {
        array: { values: [24, 12, 8, 6], found: [0, 1, 2, 3] },
        variables: { result: [24, 12, 8, 6] },
      },
    },
  ],
};

const encodeDecodeStrings: Problem = {
  id: 'encode-and-decode-strings',
  name: 'Encode and Decode Strings',
  number: 271,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/encode-and-decode-strings/',
  description: 'Design an algorithm to encode a list of strings to a single string and decode it back to the original list of strings.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'strs = ["hello","world"]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Length Prefix Encoding',
  hints: [
    'Think about how to delimit strings when they could contain any character.',
    'If you prefix each string with its length and a separator, you can always parse it unambiguously.',
    'Use the format "length#string" so the decoder knows exactly how many characters to read.',
  ],
  code: `def encode(strs):
    res = ""
    for s in strs:
        res += str(len(s)) + "#" + s
    return res

def decode(s):
    res = []
    i = 0
    while i < len(s):
        j = i
        while s[j] != "#":
            j += 1
        length = int(s[i:j])
        word = s[j + 1 : j + 1 + length]
        res.append(word)
        i = j + 1 + length
    return res`,
  steps: [
    {
      line: 1,
      label: 'Init Encode',
      message: 'Start encoding strs = ["hello", "world"]. We will build an encoded string using the format "length#string" for each word.',
      viz: {
        array: { values: ['hello', 'world'] },
        variables: { encoded: '""', i: '-' },
      },
    },
    {
      line: 3,
      label: 'Encode "hello"',
      message: 'Process "hello": length is 5. Append "5#hello" to result. The prefix "5#" tells the decoder to read the next 5 characters.',
      viz: {
        array: { values: ['hello', 'world'], highlights: [0] },
        variables: { encoded: '"5#hello"', s: 'hello', length: 5 },
      },
    },
    {
      line: 3,
      label: 'Encode "world"',
      message: 'Process "world": length is 5. Append "5#world" to result. Encoded string is now "5#hello5#world".',
      viz: {
        array: { values: ['hello', 'world'], highlights: [1] },
        variables: { encoded: '"5#hello5#world"', s: 'world', length: 5 },
      },
      isKeyMoment: true,
    },
    {
      line: 5,
      label: 'Encode Complete',
      message: 'Encoding done. The full encoded string is "5#hello5#world". Now let\'s decode it back.',
      viz: {
        array: { values: ['5', '#', 'h', 'e', 'l', 'l', 'o', '5', '#', 'w', 'o', 'r', 'l', 'd'], labels: { 0: 'len', 1: '#', 7: 'len', 8: '#' } },
        variables: { encoded: '"5#hello5#world"' },
      },
    },
    {
      line: 8,
      label: 'Start Decode',
      message: 'Begin decoding. Set i = 0. We will scan for "#" to find the length prefix, then extract that many characters.',
      viz: {
        array: { values: ['5', '#', 'h', 'e', 'l', 'l', 'o', '5', '#', 'w', 'o', 'r', 'l', 'd'], highlights: [0] },
        variables: { i: 0, decoded: '[]' },
      },
    },
    {
      line: 12,
      label: 'Read Length 5',
      message: 'Scan from i=0 to find "#" at j=1. The length prefix is s[0:1] = "5". Read the next 5 characters starting at j+1 = 2.',
      viz: {
        array: { values: ['5', '#', 'h', 'e', 'l', 'l', 'o', '5', '#', 'w', 'o', 'r', 'l', 'd'], highlights: [0, 1], found: [2, 3, 4, 5, 6] },
        variables: { i: 0, j: 1, length: 5, decoded: '[]' },
      },
    },
    {
      line: 14,
      label: 'Extract "hello"',
      message: 'Extract word = s[2:7] = "hello". Append to result. Move i to 7 (j + 1 + length = 1 + 1 + 5).',
      viz: {
        array: { values: ['5', '#', 'h', 'e', 'l', 'l', 'o', '5', '#', 'w', 'o', 'r', 'l', 'd'], found: [2, 3, 4, 5, 6], highlights: [7] },
        variables: { i: 7, length: 5, decoded: '["hello"]' },
      },
    },
    {
      line: 14,
      label: 'Extract "world"',
      message: 'Scan from i=7, find "#" at j=8. Length = 5. Extract s[9:14] = "world". Decoded list is ["hello", "world"].',
      isKeyMoment: true,
      viz: {
        array: { values: ['5', '#', 'h', 'e', 'l', 'l', 'o', '5', '#', 'w', 'o', 'r', 'l', 'd'], found: [9, 10, 11, 12, 13] },
        variables: { i: 14, length: 5, decoded: '["hello", "world"]' },
      },
    },
  ],
};

const validSudoku: Problem = {
  id: 'valid-sudoku',
  name: 'Valid Sudoku',
  number: 36,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/valid-sudoku/',
  description: 'Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the rules: each row, column, and 3x3 sub-box must contain the digits 1-9 without repetition.',
  vizTypes: ['matrix', 'set'],
  language: 'python',
  testInput: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
  timeComplexity: 'O(1)',
  spaceComplexity: 'O(1)',
  pattern: 'Hash Set Validation',
  hints: [
    'Use sets to track which numbers have been seen in each row, column, and 3x3 box.',
    'The box index can be computed as (row // 3, col // 3).',
    'If a number is already in the corresponding row, col, or box set, the board is invalid.',
  ],
  code: `def isValidSudoku(board):
    rows = defaultdict(set)
    cols = defaultdict(set)
    boxes = defaultdict(set)

    for r in range(9):
        for c in range(9):
            num = board[r][c]
            if num == ".":
                continue
            box = (r // 3, c // 3)
            if (num in rows[r] or
                num in cols[c] or
                num in boxes[box]):
                return False
            rows[r].add(num)
            cols[c].add(num)
            boxes[box].add(num)
    return True`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start validating the Sudoku board. We create sets to track seen digits per row, column, and 3x3 box.',
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
        },
        set: { values: [] },
        variables: { row: '-', col: '-', num: '-', valid: true },
      },
    },
    {
      line: 7,
      label: 'Check (0,0) = "5"',
      message: 'Cell (0,0) = "5". Check row 0 set, col 0 set, and box (0,0) set. None contain "5" yet, so it\'s valid. Add "5" to all three sets.',
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
          current: [0, 0],
        },
        set: { values: ['row0: 5'], justAdded: 'row0: 5' },
        variables: { row: 0, col: 0, num: '5', box: '(0,0)', valid: true },
      },
    },
    {
      line: 7,
      label: 'Check (0,1) = "3"',
      message: 'Cell (0,1) = "3". Not in row 0, col 1, or box (0,0) sets. Valid! Add "3" to each.',
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
          current: [0, 1],
          highlights: [[0, 0]],
        },
        set: { values: ['row0: 5, 3', 'col0: 5', 'col1: 3', 'box(0,0): 5, 3'], justAdded: 'col1: 3' },
        variables: { row: 0, col: 1, num: '3', box: '(0,0)', valid: true },
      },
    },
    {
      line: 9,
      label: 'Skip (0,2) = "."',
      message: 'Cell (0,2) = ".". Empty cell, skip it. Continue scanning.',
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
          current: [0, 2],
        },
        set: { values: ['row0: 5, 3', 'col0: 5', 'col1: 3', 'box(0,0): 5, 3'] },
        variables: { row: 0, col: 2, num: '.', valid: true },
      },
    },
    {
      line: 7,
      label: 'Check (0,4) = "7"',
      message: 'Cell (0,4) = "7". Not in row 0, col 4, or box (0,1). Valid! Add "7".',
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
          current: [0, 4],
        },
        set: { values: ['row0: 5, 3, 7', 'col4: 7', 'box(0,1): 7'], justAdded: 'col4: 7' },
        variables: { row: 0, col: 4, num: '7', box: '(0,1)', valid: true },
      },
    },
    {
      line: 7,
      label: 'Check (1,0) = "6"',
      message: 'Move to row 1. Cell (1,0) = "6". Check col 0 set: contains {5}, not "6". Check row 1 set: empty. Check box (0,0): contains {5, 3}, not "6". Valid!',
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
          current: [1, 0],
        },
        set: { values: ['row1: 6', 'col0: 5, 6', 'box(0,0): 5, 3, 6'], justAdded: 'row1: 6' },
        variables: { row: 1, col: 0, num: '6', box: '(0,0)', valid: true },
      },
    },
    {
      line: 7,
      label: 'Check (1,3) = "1"',
      message: 'Cell (1,3) = "1". Checking row 1 set: {6}, col 3 set: empty, box (0,1) set: {7}. No conflicts. Valid!',
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
          current: [1, 3],
        },
        set: { values: ['row1: 6, 1', 'col3: 1', 'box(0,1): 7, 1'], justAdded: 'col3: 1' },
        variables: { row: 1, col: 3, num: '1', box: '(0,1)', valid: true },
      },
    },
    {
      line: 7,
      label: 'Check (2,1) = "9"',
      message: 'Cell (2,1) = "9". Col 1 set: {3}, row 2 set: empty, box (0,0): {5, 3, 6}. No conflict. Valid!',
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
          current: [2, 1],
        },
        set: { values: ['row2: 9', 'col1: 3, 9', 'box(0,0): 5, 3, 6, 9'], justAdded: 'row2: 9' },
        variables: { row: 2, col: 1, num: '9', box: '(0,0)', valid: true },
      },
    },
    {
      line: 18,
      label: 'Board Valid',
      message: 'After checking all filled cells, no duplicates were found in any row, column, or 3x3 box. The board is valid! Return True.',
      isKeyMoment: true,
      viz: {
        matrix: {
          values: [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ],
        },
        set: { values: ['All sets validated - no duplicates'] },
        variables: { valid: true },
      },
    },
  ],
};

const longestConsecutiveSequence: Problem = {
  id: 'longest-consecutive-sequence',
  name: 'Longest Consecutive Sequence',
  number: 128,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/longest-consecutive-sequence/',
  description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
  vizTypes: ['array', 'set'],
  language: 'python',
  testInput: 'nums = [100, 4, 200, 1, 3, 2]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Hash Set + Sequence Building',
  hints: [
    'Put all numbers in a set for O(1) lookup.',
    'A sequence start is a number n where n-1 is NOT in the set.',
    'From each start, count consecutive numbers (n+1, n+2, ...) in the set.',
    'Track the longest streak found.',
  ],
  code: `def longestConsecutive(nums):
    numSet = set(nums)
    longest = 0

    for num in numSet:
        if (num - 1) not in numSet:
            length = 1
            while (num + length) in numSet:
                length += 1
            longest = max(longest, length)
    return longest`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start with nums = [100, 4, 200, 1, 3, 2]. We need to find the longest consecutive sequence in O(n) time.',
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2] },
        set: { values: [] },
        variables: { longest: 0 },
      },
    },
    {
      line: 2,
      label: 'Build Set',
      message: 'Convert the array to a set for O(1) lookups: {100, 4, 200, 1, 3, 2}. This lets us quickly check if a number exists.',
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2] },
        set: { values: [1, 2, 3, 4, 100, 200] },
        variables: { longest: 0 },
      },
    },
    {
      line: 6,
      label: 'Check 100',
      message: 'Check num = 100. Is 99 in the set? No! So 100 is a sequence start. Count: 101 in set? No. Streak = 1.',
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2], highlights: [0] },
        set: { values: [1, 2, 3, 4, 100, 200], highlighted: 100, checking: 99 },
        variables: { num: 100, streak: 1, longest: 1 },
      },
    },
    {
      line: 6,
      label: 'Skip 4',
      message: 'Check num = 4. Is 3 in the set? Yes! So 4 is NOT a sequence start. Skip it -- we\'ll count it when we start from 1.',
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2], highlights: [1] },
        set: { values: [1, 2, 3, 4, 100, 200], highlighted: 4, checking: 3 },
        variables: { num: 4, longest: 1 },
      },
    },
    {
      line: 6,
      label: 'Check 200',
      message: 'Check num = 200. Is 199 in the set? No! Sequence start. Count: 201 in set? No. Streak = 1. longest stays 1.',
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2], highlights: [2] },
        set: { values: [1, 2, 3, 4, 100, 200], highlighted: 200, checking: 199 },
        variables: { num: 200, streak: 1, longest: 1 },
      },
    },
    {
      line: 6,
      label: 'Start from 1',
      message: 'Check num = 1. Is 0 in the set? No! So 1 is a sequence start. Begin counting the consecutive run from 1.',
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2], highlights: [3] },
        set: { values: [1, 2, 3, 4, 100, 200], highlighted: 1, checking: 0 },
        variables: { num: 1, currentNum: 1, streak: 1, longest: 1 },
      },
    },
    {
      line: 8,
      label: 'Extend: 2, 3, 4',
      message: 'Extend sequence from 1: is 2 in set? Yes (streak=2). Is 3 in set? Yes (streak=3). Is 4 in set? Yes (streak=4). Is 5 in set? No. Streak = 4.',
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2], found: [1, 3, 4, 5] },
        set: { values: [1, 2, 3, 4, 100, 200], highlighted: 4 },
        variables: { num: 1, currentNum: 4, streak: 4, longest: 1 },
      },
    },
    {
      line: 9,
      label: 'Update Longest',
      message: 'Streak of 4 > current longest of 1. Update longest = max(1, 4) = 4. The sequence [1, 2, 3, 4] is the longest found so far.',
      isKeyMoment: true,
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2], found: [1, 3, 4, 5] },
        set: { values: [1, 2, 3, 4, 100, 200] },
        variables: { num: 1, streak: 4, longest: 4 },
      },
    },
    {
      line: 6,
      label: 'Skip 3, 2',
      message: 'Check 3: 2 is in set, so skip. Check 2: 1 is in set, so skip. These are already counted in the sequence starting at 1.',
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2] },
        set: { values: [1, 2, 3, 4, 100, 200], checking: 2 },
        variables: { longest: 4 },
      },
    },
    {
      line: 10,
      label: 'Return 4',
      message: 'All numbers checked. The longest consecutive sequence is [1, 2, 3, 4] with length 4. Return 4.',
      isKeyMoment: true,
      viz: {
        array: { values: [100, 4, 200, 1, 3, 2], found: [1, 3, 4, 5] },
        set: { values: [1, 2, 3, 4, 100, 200] },
        variables: { longest: 4, result: 4 },
      },
    },
  ],
};


export const arraysHashingProblems: Problem[] = [twoSum, validAnagram, containsDuplicate, groupAnagrams, topKFrequent, productExceptSelf, encodeDecodeStrings, validSudoku, longestConsecutiveSequence];
