import type { Problem } from '../types';

const validPalindrome: Problem = {
  id: 'valid-palindrome',
  name: 'Valid Palindrome',
  number: 125,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/valid-palindrome/',
  description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 's = "A man, a plan, a canal: Panama"',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Two Pointers (Opposite Direction)',
  hints: [
    'First clean the string by keeping only alphanumeric characters and converting to lowercase.',
    'Use two pointers starting from the beginning and end, moving inward and comparing characters.',
  ],
  code: `def isPalindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    L, R = 0, len(cleaned) - 1
    while L < R:
        if cleaned[L] != cleaned[R]:
            return False
        L += 1
        R -= 1
    return True`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Given s = "A man, a plan, a canal: Panama". We need to check if this is a valid palindrome after cleaning.',
      viz: {
        array: { values: ['A',' ','m','a','n',',',' ','a',' ','p','l','a','n',',',' ','a',' ','c','a','n','a','l',':',' ','P','a','n','a','m','a'] },
        variables: { s: '"A man, a plan, a canal: Panama"' },
      },
    },
    {
      line: 2,
      label: 'Clean String',
      message: 'Remove non-alphanumeric characters and convert to lowercase: "amanaplanacanalpanama".',
      viz: {
        array: { values: ['a','m','a','n','a','p','l','a','n','a','c','a','n','a','l','p','a','n','a','m','a'] },
        variables: { cleaned: '"amanaplanacanalpanama"' },
      },
    },
    {
      line: 3,
      label: 'Set Pointers',
      message: 'Initialize L = 0 and R = 20 (last index). Compare characters from both ends.',
      viz: {
        array: { values: ['a','m','a','n','a','p','l','a','n','a','c','a','n','a','l','p','a','n','a','m','a'], highlights: [0, 20] },
        pointers: { L: 0, R: 20 },
        variables: { cleaned: '"amanaplanacanalpanama"', L: 0, R: 20 },
      },
    },
    {
      line: 4,
      label: 'Compare L=0, R=20',
      message: 'cleaned[0] = "a" and cleaned[20] = "a". They match! Move pointers inward.',
      viz: {
        array: { values: ['a','m','a','n','a','p','l','a','n','a','c','a','n','a','l','p','a','n','a','m','a'], highlights: [0, 20], comparing: [0, 20] },
        pointers: { L: 0, R: 20 },
        variables: { L: 0, R: 20, 'cleaned[L]': 'a', 'cleaned[R]': 'a', match: true },
      },
    },
    {
      line: 7,
      label: 'Compare L=1, R=19',
      message: 'L = 1, R = 19. cleaned[1] = "m" and cleaned[19] = "m". Match! Continue.',
      viz: {
        array: { values: ['a','m','a','n','a','p','l','a','n','a','c','a','n','a','l','p','a','n','a','m','a'], highlights: [1, 19], found: [0, 20], comparing: [1, 19] },
        pointers: { L: 1, R: 19 },
        variables: { L: 1, R: 19, 'cleaned[L]': 'm', 'cleaned[R]': 'm', match: true },
      },
    },
    {
      line: 7,
      label: 'Compare L=5, R=15',
      message: 'Skipping ahead... L = 5, R = 15. cleaned[5] = "p" and cleaned[15] = "p". Match!',
      viz: {
        array: { values: ['a','m','a','n','a','p','l','a','n','a','c','a','n','a','l','p','a','n','a','m','a'], highlights: [5, 15], found: [0, 1, 2, 3, 4, 16, 17, 18, 19, 20], comparing: [5, 15] },
        pointers: { L: 5, R: 15 },
        variables: { L: 5, R: 15, 'cleaned[L]': 'p', 'cleaned[R]': 'p', match: true },
      },
    },
    {
      line: 7,
      label: 'Compare L=9, R=11',
      message: 'L = 9, R = 11. cleaned[9] = "a" and cleaned[11] = "a". Match! Approaching the center.',
      viz: {
        array: { values: ['a','m','a','n','a','p','l','a','n','a','c','a','n','a','l','p','a','n','a','m','a'], highlights: [9, 11], found: [0,1,2,3,4,5,6,7,8,12,13,14,15,16,17,18,19,20], comparing: [9, 11] },
        pointers: { L: 9, R: 11 },
        variables: { L: 9, R: 11, 'cleaned[L]': 'a', 'cleaned[R]': 'a', match: true },
      },
    },
    {
      line: 9,
      label: 'Palindrome Confirmed',
      message: 'L = 10, R = 10. L is no longer less than R (they meet at the center "c"). All characters matched, so the string IS a palindrome. Return True.',
      viz: {
        array: { values: ['a','m','a','n','a','p','l','a','n','a','c','a','n','a','l','p','a','n','a','m','a'], highlights: [10], found: [0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20] },
        pointers: { L: 10, R: 10 },
        variables: { result: true },
      },
      isKeyMoment: true,
    },
  ],
};

const twoSumII: Problem = {
  id: 'two-sum-ii',
  name: 'Two Sum II - Input Array Is Sorted',
  number: 167,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
  description: 'Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-indexed).',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'numbers = [2, 7, 11, 15], target = 9',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Two Pointers on Sorted Array',
  hints: [
    'Since the array is sorted, think about what happens to the sum when you move the left pointer right vs the right pointer left.',
    'If the current sum is too small, you need a larger number. If too large, you need a smaller number.',
    'Use two pointers at opposite ends and adjust based on the sum comparison with target.',
  ],
  code: `def twoSum(numbers, target):
    L, R = 0, len(numbers) - 1
    while L < R:
        curr_sum = numbers[L] + numbers[R]
        if curr_sum == target:
            return [L + 1, R + 1]
        elif curr_sum < target:
            L += 1
        else:
            R -= 1`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Given sorted array numbers = [2, 7, 11, 15] and target = 9. We need to find two numbers that add up to 9.',
      viz: {
        array: { values: [2, 7, 11, 15], sorted: [0, 1, 2, 3] },
        variables: { target: 9 },
      },
    },
    {
      line: 2,
      label: 'Set Pointers',
      message: 'Initialize L = 0 (pointing to 2) and R = 3 (pointing to 15).',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0, 3], sorted: [0, 1, 2, 3] },
        pointers: { L: 0, R: 3 },
        variables: { target: 9, L: 0, R: 3 },
      },
    },
    {
      line: 4,
      label: 'Sum = 17',
      message: 'curr_sum = numbers[0] + numbers[3] = 2 + 15 = 17. Since 17 > 9 (target), the sum is too large.',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0, 3], sorted: [0, 1, 2, 3], comparing: [0, 3] },
        pointers: { L: 0, R: 3 },
        variables: { target: 9, L: 0, R: 3, curr_sum: 17, comparison: '17 > 9' },
      },
    },
    {
      line: 9,
      label: 'Move R Left',
      message: 'Sum too large, so move R left to decrease the sum. R = 2 (pointing to 11).',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0, 2], sorted: [0, 1, 2, 3] },
        pointers: { L: 0, R: 2 },
        variables: { target: 9, L: 0, R: 2 },
      },
    },
    {
      line: 4,
      label: 'Sum = 13',
      message: 'curr_sum = numbers[0] + numbers[2] = 2 + 11 = 13. Since 13 > 9, still too large.',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0, 2], sorted: [0, 1, 2, 3], comparing: [0, 2] },
        pointers: { L: 0, R: 2 },
        variables: { target: 9, L: 0, R: 2, curr_sum: 13, comparison: '13 > 9' },
      },
    },
    {
      line: 9,
      label: 'Move R Left',
      message: 'Sum still too large, move R left again. R = 1 (pointing to 7).',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0, 1], sorted: [0, 1, 2, 3] },
        pointers: { L: 0, R: 1 },
        variables: { target: 9, L: 0, R: 1 },
      },
    },
    {
      line: 4,
      label: 'Sum = 9',
      message: 'curr_sum = numbers[0] + numbers[1] = 2 + 7 = 9. This equals the target!',
      viz: {
        array: { values: [2, 7, 11, 15], highlights: [0, 1], sorted: [0, 1, 2, 3], comparing: [0, 1] },
        pointers: { L: 0, R: 1 },
        variables: { target: 9, L: 0, R: 1, curr_sum: 9, comparison: '9 == 9' },
      },
      isKeyMoment: true,
    },
    {
      line: 6,
      label: 'Return Result',
      message: 'Found the pair! Return [L+1, R+1] = [1, 2] (1-indexed). numbers[0]=2 and numbers[1]=7 sum to 9.',
      viz: {
        array: { values: [2, 7, 11, 15], found: [0, 1], sorted: [0, 1, 2, 3] },
        pointers: { L: 0, R: 1 },
        variables: { result: '[1, 2]' },
      },
      isKeyMoment: true,
    },
  ],
};

const threeSum: Problem = {
  id: '3sum',
  name: '3Sum',
  number: 15,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/3sum/',
  description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [-1, 0, 1, 2, -1, -4]',
  timeComplexity: 'O(n^2)',
  spaceComplexity: 'O(1)',
  pattern: 'Sort + Two Pointers',
  hints: [
    'Sort the array first. This lets you skip duplicates and use two pointers efficiently.',
    'Fix one element, then use two pointers to find the remaining two that sum to the negative of the fixed element.',
    'Be careful to skip duplicate values for all three positions to avoid duplicate triplets.',
  ],
  code: `def threeSum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        L, R = i + 1, len(nums) - 1
        while L < R:
            total = nums[i] + nums[L] + nums[R]
            if total == 0:
                result.append([nums[i], nums[L], nums[R]])
                L += 1
                while L < R and nums[L] == nums[L - 1]:
                    L += 1
            elif total < 0:
                L += 1
            else:
                R -= 1
    return result`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Given nums = [-1, 0, 1, 2, -1, -4]. We need to find all unique triplets that sum to zero.',
      viz: {
        array: { values: [-1, 0, 1, 2, -1, -4] },
        variables: { target: 0 },
      },
    },
    {
      line: 2,
      label: 'Sort Array',
      message: 'Sort the array: [-4, -1, -1, 0, 1, 2]. Sorting enables two-pointer approach and duplicate skipping.',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], sorted: [0, 1, 2, 3, 4, 5] },
        variables: { result: '[]' },
      },
    },
    {
      line: 4,
      label: 'Fix i=0',
      message: 'Fix nums[0] = -4. Set L = 1, R = 5. We need L + R values summing to 4.',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], highlights: [0, 1, 5], sorted: [0, 1, 2, 3, 4, 5] },
        pointers: { i: 0, L: 1, R: 5 },
        variables: { 'nums[i]': -4, need: 4, L: 1, R: 5 },
      },
    },
    {
      line: 8,
      label: 'i=0: Sum = -3',
      message: 'total = -4 + (-1) + 2 = -3. Since -3 < 0, sum too small. Move L right.',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], highlights: [0, 1, 5], sorted: [0, 1, 2, 3, 4, 5], comparing: [0, 1, 5] },
        pointers: { i: 0, L: 1, R: 5 },
        variables: { total: -3, comparison: '-3 < 0' },
      },
    },
    {
      line: 15,
      label: 'i=0: No Triplet',
      message: 'Continue moving pointers... No triplet sums to 0 with nums[i] = -4. Move to i = 1.',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], highlights: [0], sorted: [0, 1, 2, 3, 4, 5] },
        pointers: { i: 0 },
        variables: { result: '[]', 'nums[i]': -4, note: 'no valid triplet' },
      },
    },
    {
      line: 6,
      label: 'Fix i=1',
      message: 'Fix nums[1] = -1. Set L = 2, R = 5. Need two values summing to 1.',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], highlights: [1, 2, 5], sorted: [0, 1, 2, 3, 4, 5] },
        pointers: { i: 1, L: 2, R: 5 },
        variables: { 'nums[i]': -1, need: 1, L: 2, R: 5 },
      },
    },
    {
      line: 8,
      label: 'i=1: Sum = 0',
      message: 'total = -1 + (-1) + 2 = 0. Found a triplet! Add [-1, -1, 2] to result.',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], highlights: [1, 2, 5], sorted: [0, 1, 2, 3, 4, 5], found: [1, 2, 5] },
        pointers: { i: 1, L: 2, R: 5 },
        variables: { total: 0, triplet: '[-1, -1, 2]' },
      },
      isKeyMoment: true,
    },
    {
      line: 11,
      label: 'Skip Dupes, Continue',
      message: 'After finding triplet, move L right and skip duplicates. L = 3, R = 4.',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], highlights: [1, 3, 4], sorted: [0, 1, 2, 3, 4, 5] },
        pointers: { i: 1, L: 3, R: 4 },
        variables: { 'nums[i]': -1, L: 3, R: 4, result: '[[-1, -1, 2]]' },
      },
    },
    {
      line: 8,
      label: 'i=1: Sum = 0',
      message: 'total = -1 + 0 + 1 = 0. Found another triplet! Add [-1, 0, 1] to result.',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], highlights: [1, 3, 4], sorted: [0, 1, 2, 3, 4, 5], found: [1, 3, 4] },
        pointers: { i: 1, L: 3, R: 4 },
        variables: { total: 0, triplet: '[-1, 0, 1]' },
      },
      isKeyMoment: true,
    },
    {
      line: 5,
      label: 'Skip i=2 (Dup)',
      message: 'i = 2, nums[2] = -1 == nums[1] = -1. Skip duplicate to avoid repeated triplets. Final result: [[-1,-1,2], [-1,0,1]].',
      viz: {
        array: { values: [-4, -1, -1, 0, 1, 2], sorted: [0, 1, 2, 3, 4, 5], found: [1, 2, 3, 4, 5] },
        pointers: { i: 2 },
        variables: { result: '[[-1, -1, 2], [-1, 0, 1]]', note: 'skip duplicate' },
      },
      isKeyMoment: true,
    },
  ],
};

const containerWithMostWater: Problem = {
  id: 'container-with-most-water',
  name: 'Container With Most Water',
  number: 11,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/container-with-most-water/',
  description: 'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis forms a container, such that the container contains the most water.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'height = [1, 8, 6, 2, 5, 4, 8, 3, 7]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Two Pointers (Greedy)',
  hints: [
    'Start with the widest container (pointers at both ends) and try to find a taller one.',
    'The area is limited by the shorter line. Moving the pointer at the shorter line inward might find a taller line and increase the area.',
  ],
  code: `def maxArea(height):
    L, R = 0, len(height) - 1
    max_area = 0
    while L < R:
        area = min(height[L], height[R]) * (R - L)
        max_area = max(max_area, area)
        if height[L] < height[R]:
            L += 1
        else:
            R -= 1
    return max_area`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Given height = [1, 8, 6, 2, 5, 4, 8, 3, 7]. Find two lines forming the container with most water.',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7] },
        variables: { max_area: 0 },
      },
    },
    {
      line: 2,
      label: 'Set Pointers',
      message: 'L = 0, R = 8. Start with the widest possible container.',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7], highlights: [0, 8] },
        pointers: { L: 0, R: 8 },
        variables: { L: 0, R: 8, max_area: 0 },
      },
    },
    {
      line: 5,
      label: 'Area = 8',
      message: 'area = min(1, 7) * (8 - 0) = 1 * 8 = 8. max_area = 8. height[L]=1 < height[R]=7, so move L right.',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7], highlights: [0, 8], comparing: [0, 8] },
        pointers: { L: 0, R: 8 },
        variables: { area: 8, max_area: 8, 'height[L]': 1, 'height[R]': 7, width: 8 },
      },
    },
    {
      line: 8,
      label: 'L=1, R=8',
      message: 'L = 1. area = min(8, 7) * (8 - 1) = 7 * 7 = 49. max_area = 49! height[L]=8 > height[R]=7, move R left.',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7], highlights: [1, 8], comparing: [1, 8] },
        pointers: { L: 1, R: 8 },
        variables: { area: 49, max_area: 49, 'height[L]': 8, 'height[R]': 7, width: 7 },
      },
      isKeyMoment: true,
    },
    {
      line: 10,
      label: 'L=1, R=7',
      message: 'R = 7. area = min(8, 3) * (7 - 1) = 3 * 6 = 18. 18 < 49, max_area stays 49. height[L]=8 > height[R]=3, move R left.',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7], highlights: [1, 7], comparing: [1, 7] },
        pointers: { L: 1, R: 7 },
        variables: { area: 18, max_area: 49, 'height[L]': 8, 'height[R]': 3, width: 6 },
      },
    },
    {
      line: 10,
      label: 'L=1, R=6',
      message: 'R = 6. area = min(8, 8) * (6 - 1) = 8 * 5 = 40. 40 < 49, max_area stays 49. Equal heights, move R left.',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7], highlights: [1, 6], comparing: [1, 6] },
        pointers: { L: 1, R: 6 },
        variables: { area: 40, max_area: 49, 'height[L]': 8, 'height[R]': 8, width: 5 },
      },
    },
    {
      line: 10,
      label: 'L=1, R=5',
      message: 'R = 5. area = min(8, 4) * (5 - 1) = 4 * 4 = 16. max_area stays 49. height[L]=8 > height[R]=4, move R left.',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7], highlights: [1, 5], comparing: [1, 5] },
        pointers: { L: 1, R: 5 },
        variables: { area: 16, max_area: 49, 'height[L]': 8, 'height[R]': 4, width: 4 },
      },
    },
    {
      line: 10,
      label: 'L=1, R=4',
      message: 'R = 4. area = min(8, 5) * (4 - 1) = 5 * 3 = 15. max_area stays 49. Pointers continue converging.',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7], highlights: [1, 4], comparing: [1, 4] },
        pointers: { L: 1, R: 4 },
        variables: { area: 15, max_area: 49, 'height[L]': 8, 'height[R]': 5, width: 3 },
      },
    },
    {
      line: 11,
      label: 'Result',
      message: 'Pointers continue until L >= R. No larger area found. Return max_area = 49. The best container uses lines at indices 1 (h=8) and 8 (h=7).',
      viz: {
        array: { values: [1, 8, 6, 2, 5, 4, 8, 3, 7], found: [1, 8] },
        pointers: { L: 1, R: 8 },
        variables: { max_area: 49, best_L: 1, best_R: 8 },
      },
      isKeyMoment: true,
    },
  ],
};

const trappingRainWater: Problem = {
  id: 'trapping-rain-water',
  name: 'Trapping Rain Water',
  number: 42,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/trapping-rain-water/',
  description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Two Pointers with Max Tracking',
  hints: [
    'Water trapped at each position depends on the minimum of the max height to its left and the max height to its right, minus its own height.',
    'Use two pointers and track leftMax and rightMax. Process the side with the smaller max, since that side determines the water level.',
    'If leftMax < rightMax, the water at L is determined by leftMax. Otherwise, water at R is determined by rightMax.',
  ],
  code: `def trap(height):
    L, R = 0, len(height) - 1
    left_max, right_max = 0, 0
    water = 0
    while L < R:
        if height[L] < height[R]:
            if height[L] >= left_max:
                left_max = height[L]
            else:
                water += left_max - height[L]
            L += 1
        else:
            if height[R] >= right_max:
                right_max = height[R]
            else:
                water += right_max - height[R]
            R -= 1
    return water`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Given height = [0,1,0,2,1,0,1,3,2,1,2,1]. Calculate total trapped rain water.',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] },
        variables: { water: 0 },
      },
    },
    {
      line: 2,
      label: 'Set Pointers',
      message: 'Initialize L = 0, R = 11, left_max = 0, right_max = 0, water = 0.',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], highlights: [0, 11] },
        pointers: { L: 0, R: 11 },
        variables: { L: 0, R: 11, left_max: 0, right_max: 0, water: 0 },
      },
    },
    {
      line: 6,
      label: 'L=0: h[L]=0 < h[R]=1',
      message: 'height[0]=0 < height[11]=1, process left side. height[0]=0 >= left_max=0, so update left_max = 0. No water trapped. Move L to 1.',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], highlights: [0, 11], comparing: [0, 11] },
        pointers: { L: 0, R: 11 },
        variables: { left_max: 0, right_max: 0, water: 0, 'height[L]': 0, 'height[R]': 1 },
      },
    },
    {
      line: 6,
      label: 'L=1: Update left_max',
      message: 'height[1]=1 < height[11]=1 is false (equal), process right. height[11]=1 >= right_max=0, so update right_max = 1. Move R to 10.',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], highlights: [1, 11] },
        pointers: { L: 1, R: 11 },
        variables: { left_max: 0, right_max: 1, water: 0, 'height[L]': 1, 'height[R]': 1 },
      },
    },
    {
      line: 6,
      label: 'L=1, R=10',
      message: 'height[1]=1 < height[10]=2, process left. height[1]=1 >= left_max=0, update left_max = 1. No water. Move L to 2.',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], highlights: [1, 10], comparing: [1, 10] },
        pointers: { L: 1, R: 10 },
        variables: { left_max: 1, right_max: 1, water: 0, 'height[L]': 1, 'height[R]': 2 },
      },
    },
    {
      line: 9,
      label: 'L=2: Trap Water',
      message: 'height[2]=0 < height[10]=2, process left. height[2]=0 < left_max=1, so trap water: 1 - 0 = 1. water = 1. Move L to 3.',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], highlights: [2, 10], found: [2] },
        pointers: { L: 2, R: 10 },
        variables: { left_max: 1, right_max: 1, water: 1, trapped_here: 1, 'height[L]': 0 },
      },
      isKeyMoment: true,
    },
    {
      line: 7,
      label: 'L=3: Update left_max',
      message: 'height[3]=2 < height[10]=2 is false (equal), process right. height[10]=2 >= right_max=1, update right_max = 2. Move R to 9.',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], highlights: [3, 10] },
        pointers: { L: 3, R: 10 },
        variables: { left_max: 1, right_max: 2, water: 1, 'height[L]': 2, 'height[R]': 2 },
      },
    },
    {
      line: 9,
      label: 'R=9: Trap Water',
      message: 'height[3]=2 < height[9]=1 is false, process right. height[9]=1 < right_max=2, trap: 2 - 1 = 1. water = 2. Move R to 8.',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], highlights: [3, 9], found: [2, 9] },
        pointers: { L: 3, R: 9 },
        variables: { left_max: 2, right_max: 2, water: 2, trapped_here: 1, 'height[R]': 1 },
      },
      isKeyMoment: true,
    },
    {
      line: 6,
      label: 'Continue Processing',
      message: 'L=3, R=8. height[3]=2 < height[8]=2 is false, process right. height[8]=2 >= right_max=2, update right_max=2. Move R to 7. Then process remaining positions, trapping water at indices 4 (1 unit) and 5 (2 units) and 6 (1 unit).',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], highlights: [3, 8], found: [2, 4, 5, 6, 9] },
        pointers: { L: 3, R: 8 },
        variables: { left_max: 2, right_max: 2, water: 2, note: 'more water to collect' },
      },
    },
    {
      line: 18,
      label: 'Final Result',
      message: 'All positions processed. Total trapped water = 6 units. Water collected at indices 2(1), 4(1), 5(2), 6(1), 9(1).',
      viz: {
        array: { values: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], found: [2, 4, 5, 6, 9] },
        pointers: { L: 7, R: 7 },
        variables: { water: 6, left_max: 3, right_max: 3 },
      },
      isKeyMoment: true,
    },
  ],
};

export const twoPointersProblems: Problem[] = [
  validPalindrome,
  twoSumII,
  threeSum,
  containerWithMostWater,
  trappingRainWater,
];
