import type { Problem } from '../types';

const binarySearch: Problem = {
  id: 'binary-search',
  name: 'Binary Search',
  number: 704,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/binary-search/',
  description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.',
  vizTypes: ['array', 'binary-search'],
  language: 'python',
  testInput: 'nums = [-1, 0, 3, 5, 9, 12], target = 9',
  timeComplexity: 'O(log n)',
  spaceComplexity: 'O(1)',
  pattern: 'Binary Search',
  hints: [
    'Compare the target with the middle element.',
    'If target > mid, search the right half. If target < mid, search the left half.',
    'What happens when lo > hi?',
  ],
  code: `def search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Search for target = 9 in sorted array [-1, 0, 3, 5, 9, 12].',
      viz: {
        array: { values: [-1, 0, 3, 5, 9, 12] },
        binarySearch: { lo: 0, hi: 5, mid: 2, target: 9 },
        variables: { target: 9 },
      },
    },
    {
      line: 2,
      label: 'Set Bounds',
      message: 'Initialize lo = 0 (start) and hi = 5 (end). The search range is the entire array.',
      viz: {
        array: { values: [-1, 0, 3, 5, 9, 12] },
        binarySearch: { lo: 0, hi: 5, mid: 2, target: 9 },
        variables: { target: 9, lo: 0, hi: 5 },
      },
    },
    {
      line: 4,
      label: 'First Mid',
      message: 'Calculate mid = (0 + 5) // 2 = 2. nums[2] = 3. Compare 3 with target 9.',
      viz: {
        array: { values: [-1, 0, 3, 5, 9, 12], highlights: [2] },
        binarySearch: { lo: 0, hi: 5, mid: 2, target: 9 },
        variables: { target: 9, lo: 0, hi: 5, mid: 2, 'nums[mid]': 3 },
      },
    },
    {
      line: 7,
      label: 'Go Right',
      message: 'nums[2] = 3 < target = 9. Target is in the RIGHT half. Set lo = mid + 1 = 3. Eliminate left half.',
      isKeyMoment: true,
      viz: {
        array: { values: [-1, 0, 3, 5, 9, 12], highlights: [2] },
        binarySearch: { lo: 0, hi: 5, mid: 2, target: 9, eliminated: 'left' },
        variables: { target: 9, lo: 3, hi: 5, mid: 2, comparison: '3 < 9' },
      },
    },
    {
      line: 4,
      label: 'Second Mid',
      message: 'New range: [3, 5]. Calculate mid = (3 + 5) // 2 = 4. nums[4] = 9.',
      viz: {
        array: { values: [-1, 0, 3, 5, 9, 12], highlights: [4] },
        binarySearch: { lo: 3, hi: 5, mid: 4, target: 9 },
        variables: { target: 9, lo: 3, hi: 5, mid: 4, 'nums[mid]': 9 },
      },
    },
    {
      line: 5,
      label: 'Found!',
      message: 'nums[4] = 9 == target = 9. Found the target at index 4!',
      isKeyMoment: true,
      viz: {
        array: { values: [-1, 0, 3, 5, 9, 12], found: [4] },
        binarySearch: { lo: 3, hi: 5, mid: 4, target: 9 },
        variables: { target: 9, lo: 3, hi: 5, mid: 4, 'nums[mid]': 9, result: 4 },
      },
    },
    {
      line: 6,
      label: 'Return',
      message: 'Return index 4. Found target 9 in just 2 comparisons using binary search (O(log n))!',
      isKeyMoment: true,
      viz: {
        array: { values: [-1, 0, 3, 5, 9, 12], found: [4] },
        binarySearch: { lo: 3, hi: 5, mid: 4, target: 9 },
        variables: { result: 4, comparisons: 2 },
      },
    },
  ],
};

export const binarySearchProblems: Problem[] = [binarySearch];
