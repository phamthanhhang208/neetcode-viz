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

const searchA2DMatrix: Problem = {
  id: 'search-a-2d-matrix',
  name: 'Search a 2D Matrix',
  number: 74,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/search-a-2d-matrix/',
  description: 'Write an efficient algorithm that searches for a value target in an m x n integer matrix. Integers in each row are sorted, and the first integer of each row is greater than the last integer of the previous row.',
  vizTypes: ['matrix', 'binary-search'],
  language: 'python',
  testInput: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
  timeComplexity: 'O(log(m * n))',
  spaceComplexity: 'O(1)',
  pattern: 'Binary Search on Virtual Array',
  hints: [
    'Treat the 2D matrix as a virtual 1D sorted array.',
    'Convert 1D index to 2D: row = idx // cols, col = idx % cols.',
    'Apply standard binary search on this virtual array.',
  ],
  code: `def searchMatrix(matrix, target):
    rows, cols = len(matrix), len(matrix[0])
    lo, hi = 0, rows * cols - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        row, col = mid // cols, mid % cols
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return False`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Search for target = 3 in a 3x4 matrix. Treat it as a virtual sorted array of length 12.',
      viz: {
        matrix: { values: [[1,3,5,7],[10,11,16,20],[23,30,34,60]] },
        binarySearch: { lo: 0, hi: 11, mid: 5, target: 3 },
        variables: { target: 3, rows: 3, cols: 4 },
      },
    },
    {
      line: 3,
      label: 'Set Bounds',
      message: 'Initialize lo = 0, hi = 11 (rows * cols - 1). The entire matrix is our search range.',
      viz: {
        matrix: { values: [[1,3,5,7],[10,11,16,20],[23,30,34,60]] },
        binarySearch: { lo: 0, hi: 11, mid: 5, target: 3 },
        variables: { target: 3, lo: 0, hi: 11 },
      },
    },
    {
      line: 5,
      label: 'First Mid',
      message: 'mid = (0 + 11) // 2 = 5. Convert: row = 5 // 4 = 1, col = 5 % 4 = 1. matrix[1][1] = 11.',
      viz: {
        matrix: { values: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], highlights: [[1, 1]] },
        binarySearch: { lo: 0, hi: 11, mid: 5, target: 3 },
        variables: { target: 3, lo: 0, hi: 11, mid: 5, row: 1, col: 1, 'matrix[row][col]': 11 },
      },
    },
    {
      line: 10,
      label: 'Go Left',
      message: 'matrix[1][1] = 11 > target = 3. Target is in the LEFT half. Set hi = mid - 1 = 4.',
      isKeyMoment: true,
      viz: {
        matrix: { values: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], highlights: [[1, 1]] },
        binarySearch: { lo: 0, hi: 11, mid: 5, target: 3, eliminated: 'right' },
        variables: { target: 3, lo: 0, hi: 4, comparison: '11 > 3' },
      },
    },
    {
      line: 5,
      label: 'Second Mid',
      message: 'mid = (0 + 4) // 2 = 2. Convert: row = 2 // 4 = 0, col = 2 % 4 = 2. matrix[0][2] = 5.',
      viz: {
        matrix: { values: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], highlights: [[0, 2]] },
        binarySearch: { lo: 0, hi: 4, mid: 2, target: 3 },
        variables: { target: 3, lo: 0, hi: 4, mid: 2, row: 0, col: 2, 'matrix[row][col]': 5 },
      },
    },
    {
      line: 10,
      label: 'Go Left Again',
      message: 'matrix[0][2] = 5 > target = 3. Set hi = mid - 1 = 1. Search narrowed to first two elements.',
      isKeyMoment: true,
      viz: {
        matrix: { values: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], highlights: [[0, 2]] },
        binarySearch: { lo: 0, hi: 4, mid: 2, target: 3, eliminated: 'right' },
        variables: { target: 3, lo: 0, hi: 1, comparison: '5 > 3' },
      },
    },
    {
      line: 7,
      label: 'Found!',
      message: 'mid = (0 + 1) // 2 = 0. Wait — row=0, col=0 gives 1 < 3, so lo=1. Then mid=1, row=0, col=1 gives matrix[0][1] = 3 == target. Found!',
      isKeyMoment: true,
      viz: {
        matrix: { values: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], highlights: [[0, 1]] },
        binarySearch: { lo: 1, hi: 1, mid: 1, target: 3 },
        variables: { target: 3, lo: 1, hi: 1, mid: 1, 'matrix[0][1]': 3, result: true },
      },
    },
  ],
};

const kokoEatingBananas: Problem = {
  id: 'koko-eating-bananas',
  name: 'Koko Eating Bananas',
  number: 875,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/koko-eating-bananas/',
  description: 'Koko loves to eat bananas. There are n piles of bananas. She can eat at speed k bananas/hour. Return the minimum integer k such that she can eat all bananas within h hours.',
  vizTypes: ['array', 'binary-search'],
  language: 'python',
  testInput: 'piles = [3, 6, 7, 11], h = 8',
  timeComplexity: 'O(n log m)',
  spaceComplexity: 'O(1)',
  pattern: 'Binary Search on Answer',
  hints: [
    'Binary search on the answer (eating speed k), not on the array itself.',
    'For each candidate k, compute total hours needed: sum(ceil(pile / k)).',
    'If total hours <= h, try a smaller k. Otherwise, try a larger k.',
  ],
  code: `import math

def minEatingSpeed(piles, h):
    lo, hi = 1, max(piles)
    result = hi
    while lo <= hi:
        k = (lo + hi) // 2
        hours = sum(math.ceil(p / k) for p in piles)
        if hours <= h:
            result = k
            hi = k - 1
        else:
            lo = k + 1
    return result`,
  steps: [
    {
      line: 3,
      label: 'Init',
      message: 'Find minimum eating speed k for piles = [3, 6, 7, 11] within h = 8 hours.',
      viz: {
        array: { values: [3, 6, 7, 11] },
        binarySearch: { lo: 1, hi: 11, mid: 6, target: 8 },
        variables: { h: 8, lo: 1, hi: 11 },
      },
    },
    {
      line: 4,
      label: 'Set Bounds',
      message: 'lo = 1 (minimum possible speed), hi = 11 (max pile size — eating faster is wasteful). Search for optimal k.',
      viz: {
        array: { values: [3, 6, 7, 11] },
        binarySearch: { lo: 1, hi: 11, mid: 6, target: 8 },
        variables: { h: 8, lo: 1, hi: 11, result: 11 },
      },
    },
    {
      line: 6,
      label: 'Try k=6',
      message: 'k = (1+11)//2 = 6. Hours: ceil(3/6)+ceil(6/6)+ceil(7/6)+ceil(11/6) = 1+1+2+2 = 6. 6 <= 8, so k=6 works!',
      isKeyMoment: true,
      viz: {
        array: { values: [3, 6, 7, 11], highlights: [0, 1, 2, 3] },
        binarySearch: { lo: 1, hi: 11, mid: 6, target: 8 },
        variables: { k: 6, hours: 6, h: 8, result: 6, '6 <= 8': true },
      },
    },
    {
      line: 9,
      label: 'Try Smaller',
      message: 'k=6 works, but maybe a smaller k also works. Set hi = k - 1 = 5. Search left half.',
      viz: {
        array: { values: [3, 6, 7, 11] },
        binarySearch: { lo: 1, hi: 11, mid: 6, target: 8, eliminated: 'right' },
        variables: { k: 6, result: 6, lo: 1, hi: 5 },
      },
    },
    {
      line: 6,
      label: 'Try k=3',
      message: 'k = (1+5)//2 = 3. Hours: ceil(3/3)+ceil(6/3)+ceil(7/3)+ceil(11/3) = 1+2+3+4 = 10. 10 > 8, too slow!',
      isKeyMoment: true,
      viz: {
        array: { values: [3, 6, 7, 11], highlights: [0, 1, 2, 3] },
        binarySearch: { lo: 1, hi: 5, mid: 3, target: 8 },
        variables: { k: 3, hours: 10, h: 8, '10 <= 8': false },
      },
    },
    {
      line: 11,
      label: 'Try Larger',
      message: 'k=3 is too slow. Set lo = k + 1 = 4. Eliminate speeds 1-3.',
      viz: {
        array: { values: [3, 6, 7, 11] },
        binarySearch: { lo: 1, hi: 5, mid: 3, target: 8, eliminated: 'left' },
        variables: { lo: 4, hi: 5, result: 6 },
      },
    },
    {
      line: 6,
      label: 'Try k=4',
      message: 'k = (4+5)//2 = 4. Hours: ceil(3/4)+ceil(6/4)+ceil(7/4)+ceil(11/4) = 1+2+2+3 = 8. 8 <= 8, works!',
      isKeyMoment: true,
      viz: {
        array: { values: [3, 6, 7, 11], highlights: [0, 1, 2, 3] },
        binarySearch: { lo: 4, hi: 5, mid: 4, target: 8 },
        variables: { k: 4, hours: 8, h: 8, result: 4, '8 <= 8': true },
      },
    },
    {
      line: 12,
      label: 'Result',
      message: 'After checking k=3 (hi=3 < lo=4, loop ends), minimum speed is k = 4. Koko eats all bananas in exactly 8 hours.',
      isKeyMoment: true,
      viz: {
        array: { values: [3, 6, 7, 11] },
        binarySearch: { lo: 4, hi: 3, mid: 4, target: 8 },
        variables: { result: 4, totalHours: 8 },
      },
    },
  ],
};

const findMinRotated: Problem = {
  id: 'find-minimum-in-rotated-sorted-array',
  name: 'Find Minimum in Rotated Sorted Array',
  number: 153,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
  description: 'Given a sorted rotated array of unique elements, return the minimum element. You must write an algorithm that runs in O(log n) time.',
  vizTypes: ['array', 'binary-search'],
  language: 'python',
  testInput: 'nums = [3, 4, 5, 1, 2]',
  timeComplexity: 'O(log n)',
  spaceComplexity: 'O(1)',
  pattern: 'Modified Binary Search',
  hints: [
    'The minimum is at the rotation point where the array "breaks".',
    'Compare mid with the rightmost element to decide which half to search.',
    'If nums[mid] > nums[hi], the minimum is in the right half.',
  ],
  code: `def findMin(nums):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] > nums[hi]:
            lo = mid + 1
        else:
            hi = mid
    return nums[lo]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find the minimum in rotated sorted array [3, 4, 5, 1, 2]. The array was sorted then rotated.',
      viz: {
        array: { values: [3, 4, 5, 1, 2] },
        binarySearch: { lo: 0, hi: 4, mid: 2, target: -1 },
        variables: { lo: 0, hi: 4 },
      },
    },
    {
      line: 2,
      label: 'Set Bounds',
      message: 'Initialize lo = 0, hi = 4. We use lo < hi (not lo <= hi) since we are narrowing to one element.',
      viz: {
        array: { values: [3, 4, 5, 1, 2], labels: { 0: 'lo', 4: 'hi' } },
        binarySearch: { lo: 0, hi: 4, mid: 2, target: -1 },
        variables: { lo: 0, hi: 4 },
      },
    },
    {
      line: 4,
      label: 'First Mid',
      message: 'mid = (0 + 4) // 2 = 2. nums[2] = 5. Compare with nums[hi] = nums[4] = 2.',
      viz: {
        array: { values: [3, 4, 5, 1, 2], highlights: [2], labels: { 0: 'lo', 2: 'mid', 4: 'hi' } },
        binarySearch: { lo: 0, hi: 4, mid: 2, target: -1 },
        variables: { lo: 0, hi: 4, mid: 2, 'nums[mid]': 5, 'nums[hi]': 2 },
      },
    },
    {
      line: 5,
      label: 'Go Right',
      message: 'nums[mid]=5 > nums[hi]=2. The rotation point (minimum) is in the RIGHT half. Set lo = mid + 1 = 3.',
      isKeyMoment: true,
      viz: {
        array: { values: [3, 4, 5, 1, 2], highlights: [2] },
        binarySearch: { lo: 0, hi: 4, mid: 2, target: -1, eliminated: 'left' },
        variables: { lo: 3, hi: 4, comparison: '5 > 2' },
      },
    },
    {
      line: 4,
      label: 'Second Mid',
      message: 'mid = (3 + 4) // 2 = 3. nums[3] = 1. Compare with nums[hi] = nums[4] = 2.',
      viz: {
        array: { values: [3, 4, 5, 1, 2], highlights: [3], labels: { 3: 'lo/mid', 4: 'hi' } },
        binarySearch: { lo: 3, hi: 4, mid: 3, target: -1 },
        variables: { lo: 3, hi: 4, mid: 3, 'nums[mid]': 1, 'nums[hi]': 2 },
      },
    },
    {
      line: 7,
      label: 'Go Left',
      message: 'nums[mid]=1 <= nums[hi]=2. Minimum is in the LEFT half (including mid). Set hi = mid = 3.',
      isKeyMoment: true,
      viz: {
        array: { values: [3, 4, 5, 1, 2], highlights: [3] },
        binarySearch: { lo: 3, hi: 4, mid: 3, target: -1, eliminated: 'right' },
        variables: { lo: 3, hi: 3, comparison: '1 <= 2' },
      },
    },
    {
      line: 8,
      label: 'Found Min',
      message: 'lo == hi == 3. Loop ends. nums[3] = 1 is the minimum. Found in O(log n) time!',
      isKeyMoment: true,
      viz: {
        array: { values: [3, 4, 5, 1, 2], found: [3] },
        binarySearch: { lo: 3, hi: 3, mid: 3, target: -1 },
        variables: { lo: 3, hi: 3, result: 1 },
      },
    },
  ],
};

const searchRotated: Problem = {
  id: 'search-in-rotated-sorted-array',
  name: 'Search in Rotated Sorted Array',
  number: 33,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
  description: 'Given a rotated sorted array and a target, return the index of target or -1 if not found. You must write an algorithm with O(log n) runtime.',
  vizTypes: ['array', 'binary-search'],
  language: 'python',
  testInput: 'nums = [4, 5, 6, 7, 0, 1, 2], target = 0',
  timeComplexity: 'O(log n)',
  spaceComplexity: 'O(1)',
  pattern: 'Modified Binary Search',
  hints: [
    'At least one half of the array (around mid) is always sorted.',
    'Determine which half is sorted, then check if target lies in that half.',
    'If target is in the sorted half, search there; otherwise search the other half.',
  ],
  code: `def search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:  # left half sorted
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:  # right half sorted
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Search for target = 0 in rotated array [4, 5, 6, 7, 0, 1, 2].',
      viz: {
        array: { values: [4, 5, 6, 7, 0, 1, 2] },
        binarySearch: { lo: 0, hi: 6, mid: 3, target: 0 },
        variables: { target: 0 },
      },
    },
    {
      line: 2,
      label: 'Set Bounds',
      message: 'Initialize lo = 0, hi = 6. Full array is the search range.',
      viz: {
        array: { values: [4, 5, 6, 7, 0, 1, 2], labels: { 0: 'lo', 6: 'hi' } },
        binarySearch: { lo: 0, hi: 6, mid: 3, target: 0 },
        variables: { target: 0, lo: 0, hi: 6 },
      },
    },
    {
      line: 4,
      label: 'First Mid',
      message: 'mid = (0 + 6) // 2 = 3. nums[3] = 7. Not the target.',
      viz: {
        array: { values: [4, 5, 6, 7, 0, 1, 2], highlights: [3], labels: { 0: 'lo', 3: 'mid', 6: 'hi' } },
        binarySearch: { lo: 0, hi: 6, mid: 3, target: 0 },
        variables: { target: 0, mid: 3, 'nums[mid]': 7 },
      },
    },
    {
      line: 7,
      label: 'Left Sorted',
      message: 'nums[lo]=4 <= nums[mid]=7, so LEFT half [4,5,6,7] is sorted. Is target=0 in range [4,7)? No (0 < 4).',
      isKeyMoment: true,
      viz: {
        array: { values: [4, 5, 6, 7, 0, 1, 2], highlights: [0, 1, 2, 3] },
        binarySearch: { lo: 0, hi: 6, mid: 3, target: 0 },
        variables: { target: 0, 'nums[lo]': 4, 'nums[mid]': 7, leftSorted: true, 'target in [4,7)': false },
      },
    },
    {
      line: 10,
      label: 'Go Right',
      message: 'Target not in sorted left half. Set lo = mid + 1 = 4. Search right half [0, 1, 2].',
      viz: {
        array: { values: [4, 5, 6, 7, 0, 1, 2] },
        binarySearch: { lo: 0, hi: 6, mid: 3, target: 0, eliminated: 'left' },
        variables: { target: 0, lo: 4, hi: 6 },
      },
    },
    {
      line: 4,
      label: 'Second Mid',
      message: 'mid = (4 + 6) // 2 = 5. nums[5] = 1. Not the target.',
      viz: {
        array: { values: [4, 5, 6, 7, 0, 1, 2], highlights: [5], labels: { 4: 'lo', 5: 'mid', 6: 'hi' } },
        binarySearch: { lo: 4, hi: 6, mid: 5, target: 0 },
        variables: { target: 0, mid: 5, 'nums[mid]': 1 },
      },
    },
    {
      line: 12,
      label: 'Right Sorted',
      message: 'nums[lo]=0 > nums[mid]=1? No — actually nums[lo]=0 <= nums[mid]=1, so LEFT half [0,1] is sorted. Is target=0 in [0,1)? Yes!',
      isKeyMoment: true,
      viz: {
        array: { values: [4, 5, 6, 7, 0, 1, 2], highlights: [4, 5] },
        binarySearch: { lo: 4, hi: 6, mid: 5, target: 0 },
        variables: { target: 0, 'nums[lo]': 0, 'nums[mid]': 1, 'target in [0,1)': true },
      },
    },
    {
      line: 5,
      label: 'Found!',
      message: 'Set hi = mid - 1 = 4. Now lo=hi=4, mid=4, nums[4] = 0 == target. Found target at index 4!',
      isKeyMoment: true,
      viz: {
        array: { values: [4, 5, 6, 7, 0, 1, 2], found: [4] },
        binarySearch: { lo: 4, hi: 4, mid: 4, target: 0 },
        variables: { target: 0, mid: 4, 'nums[mid]': 0, result: 4 },
      },
    },
  ],
};

const timeBasedKV: Problem = {
  id: 'time-based-key-value-store',
  name: 'Time Based Key-Value Store',
  number: 981,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/time-based-key-value-store/',
  description: 'Design a time-based key-value data structure that can store multiple values for the same key at different timestamps and retrieve the value at a certain timestamp.',
  vizTypes: ['hashmap', 'binary-search'],
  language: 'python',
  testInput: 'set("foo", "bar", 1), set("foo", "bar2", 4), get("foo", 4), get("foo", 3)',
  timeComplexity: 'O(log n) per get',
  spaceComplexity: 'O(n)',
  pattern: 'Binary Search on Timestamps',
  hints: [
    'Store values in a list of (timestamp, value) pairs for each key.',
    'Since timestamps are strictly increasing, the list is already sorted.',
    'Use binary search to find the largest timestamp <= the query timestamp.',
  ],
  code: `class TimeMap:
    def __init__(self):
        self.store = {}  # key -> [(timestamp, value)]

    def set(self, key, value, timestamp):
        if key not in self.store:
            self.store[key] = []
        self.store[key].append((timestamp, value))

    def get(self, key, timestamp):
        values = self.store.get(key, [])
        lo, hi = 0, len(values) - 1
        result = ""
        while lo <= hi:
            mid = (lo + hi) // 2
            if values[mid][0] <= timestamp:
                result = values[mid][1]
                lo = mid + 1
            else:
                hi = mid - 1
        return result`,
  steps: [
    {
      line: 5,
      label: 'Set 1',
      message: 'Call set("foo", "bar", 1). Store "bar" at timestamp 1 for key "foo".',
      viz: {
        hashmap: { entries: [['foo', [{ ts: 1, val: 'bar' }]]], justAdded: 'foo' },
        binarySearch: { lo: 0, hi: 0, mid: 0, target: 1 },
        variables: { key: 'foo', value: 'bar', timestamp: 1 },
      },
    },
    {
      line: 5,
      label: 'Set 2',
      message: 'Call set("foo", "bar2", 4). Append (4, "bar2") to the list for key "foo".',
      viz: {
        hashmap: { entries: [['foo', [{ ts: 1, val: 'bar' }, { ts: 4, val: 'bar2' }]]], justAdded: 'foo' },
        binarySearch: { lo: 0, hi: 1, mid: 0, target: 4 },
        variables: { key: 'foo', value: 'bar2', timestamp: 4 },
      },
    },
    {
      line: 10,
      label: 'Get(foo, 4)',
      message: 'Call get("foo", 4). Binary search for largest timestamp <= 4 in [(1,"bar"), (4,"bar2")].',
      viz: {
        hashmap: { entries: [['foo', [{ ts: 1, val: 'bar' }, { ts: 4, val: 'bar2' }]]], highlighted: 'foo' },
        binarySearch: { lo: 0, hi: 1, mid: 0, target: 4 },
        variables: { key: 'foo', timestamp: 4, lo: 0, hi: 1 },
      },
    },
    {
      line: 14,
      label: 'Check mid=0',
      message: 'mid = 0. values[0] = (1, "bar"). Timestamp 1 <= 4, so result = "bar", lo = 1.',
      isKeyMoment: true,
      viz: {
        hashmap: { entries: [['foo', [{ ts: 1, val: 'bar' }, { ts: 4, val: 'bar2' }]]], highlighted: 'foo' },
        binarySearch: { lo: 0, hi: 1, mid: 0, target: 4 },
        variables: { mid: 0, 'values[mid]': '(1, bar)', '1 <= 4': true, result: 'bar', lo: 1 },
      },
    },
    {
      line: 14,
      label: 'Check mid=1',
      message: 'mid = 1. values[1] = (4, "bar2"). Timestamp 4 <= 4, so result = "bar2", lo = 2.',
      isKeyMoment: true,
      viz: {
        hashmap: { entries: [['foo', [{ ts: 1, val: 'bar' }, { ts: 4, val: 'bar2' }]]], highlighted: 'foo' },
        binarySearch: { lo: 1, hi: 1, mid: 1, target: 4 },
        variables: { mid: 1, 'values[mid]': '(4, bar2)', '4 <= 4': true, result: 'bar2', lo: 2 },
      },
    },
    {
      line: 19,
      label: 'Return bar2',
      message: 'lo=2 > hi=1, loop ends. Return "bar2". Exact timestamp match found.',
      isKeyMoment: true,
      viz: {
        hashmap: { entries: [['foo', [{ ts: 1, val: 'bar' }, { ts: 4, val: 'bar2' }]]], highlighted: 'foo' },
        binarySearch: { lo: 2, hi: 1, mid: 1, target: 4 },
        variables: { result: 'bar2' },
      },
    },
    {
      line: 10,
      label: 'Get(foo, 3)',
      message: 'Call get("foo", 3). Binary search for largest timestamp <= 3. mid=0: ts=1 <= 3, result="bar", lo=1. mid=1: ts=4 > 3, hi=0.',
      isKeyMoment: true,
      viz: {
        hashmap: { entries: [['foo', [{ ts: 1, val: 'bar' }, { ts: 4, val: 'bar2' }]]], highlighted: 'foo' },
        binarySearch: { lo: 1, hi: 1, mid: 1, target: 3, eliminated: 'right' },
        variables: { timestamp: 3, 'ts=4 > 3': true, hi: 0 },
      },
    },
    {
      line: 19,
      label: 'Return bar',
      message: 'Loop ends. Return "bar" — the value at the largest timestamp (1) that is <= 3. No exact match, but closest earlier value returned.',
      isKeyMoment: true,
      viz: {
        hashmap: { entries: [['foo', [{ ts: 1, val: 'bar' }, { ts: 4, val: 'bar2' }]]], highlighted: 'foo' },
        binarySearch: { lo: 1, hi: 0, mid: 0, target: 3 },
        variables: { result: 'bar', closestTimestamp: 1 },
      },
    },
  ],
};

const medianTwoSorted: Problem = {
  id: 'median-of-two-sorted-arrays',
  name: 'Median of Two Sorted Arrays',
  number: 4,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
  description: 'Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays. The overall run time complexity should be O(log(min(m, n))).',
  vizTypes: ['array', 'binary-search'],
  language: 'python',
  testInput: 'nums1 = [1, 3], nums2 = [2]',
  timeComplexity: 'O(log(min(m, n)))',
  spaceComplexity: 'O(1)',
  pattern: 'Binary Search on Partition',
  hints: [
    'Binary search on the partition point of the shorter array.',
    'Partition both arrays such that left halves combined have half the total elements.',
    'Check if maxLeft1 <= minRight2 and maxLeft2 <= minRight1 for a valid partition.',
  ],
  code: `def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    lo, hi = 0, m
    while lo <= hi:
        i = (lo + hi) // 2  # partition in nums1
        j = (m + n + 1) // 2 - i  # partition in nums2
        left1 = nums1[i-1] if i > 0 else float('-inf')
        right1 = nums1[i] if i < m else float('inf')
        left2 = nums2[j-1] if j > 0 else float('-inf')
        right2 = nums2[j] if j < n else float('inf')
        if left1 <= right2 and left2 <= right1:
            if (m + n) % 2 == 0:
                return (max(left1,left2) + min(right1,right2)) / 2
            return max(left1, left2)
        elif left1 > right2:
            hi = i - 1
        else:
            lo = i + 1`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find median of nums1 = [1, 3] and nums2 = [2]. Total 3 elements, median is the 2nd element.',
      viz: {
        array: { values: [1, 3, '|', 2] },
        binarySearch: { lo: 0, hi: 2, mid: 1, target: -1 },
        variables: { nums1: '[1, 3]', nums2: '[2]', total: 3 },
      },
    },
    {
      line: 4,
      label: 'Ensure Shorter',
      message: 'nums1 has length 2, nums2 has length 1. Swap so nums1 is shorter: nums1=[2], nums2=[1,3].',
      isKeyMoment: true,
      viz: {
        array: { values: [2, '|', 1, 3] },
        binarySearch: { lo: 0, hi: 1, mid: 0, target: -1 },
        variables: { nums1: '[2]', nums2: '[1, 3]', m: 1, n: 2 },
      },
    },
    {
      line: 5,
      label: 'Set Bounds',
      message: 'Binary search on partition of nums1. lo = 0, hi = 1 (length of nums1). We try different split points.',
      viz: {
        array: { values: [2, '|', 1, 3] },
        binarySearch: { lo: 0, hi: 1, mid: 0, target: -1 },
        variables: { lo: 0, hi: 1, m: 1, n: 2, halfLen: 2 },
      },
    },
    {
      line: 7,
      label: 'Try i=0',
      message: 'i = (0+1)//2 = 0. Partition nums1 at 0 (nothing on left). j = (1+2+1)//2 - 0 = 2. Partition nums2 at 2 (both on left).',
      viz: {
        array: { values: [2, '|', 1, 3], highlights: [0, 2, 3] },
        binarySearch: { lo: 0, hi: 1, mid: 0, target: -1 },
        variables: { i: 0, j: 2, left1: '-inf', right1: 2, left2: 3, right2: 'inf' },
      },
    },
    {
      line: 13,
      label: 'Check Partition',
      message: 'left1=-inf <= right2=inf (yes) AND left2=3 <= right1=2? No! 3 > 2. Left side of nums2 is too large.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, '|', 1, 3] },
        binarySearch: { lo: 0, hi: 1, mid: 0, target: -1 },
        variables: { 'left1<=right2': true, 'left2<=right1': false, '3 > 2': true },
      },
    },
    {
      line: 19,
      label: 'Adjust Right',
      message: 'left2 > right1, so we need more elements from nums1 on the left. Set lo = i + 1 = 1.',
      viz: {
        array: { values: [2, '|', 1, 3] },
        binarySearch: { lo: 0, hi: 1, mid: 0, target: -1, eliminated: 'left' },
        variables: { lo: 1, hi: 1 },
      },
    },
    {
      line: 13,
      label: 'Found Partition',
      message: 'i=1, j=1. left1=2, right1=inf, left2=1, right2=3. left1=2<=right2=3 and left2=1<=right1=inf. Valid! Odd total: median = max(left1,left2) = max(2,1) = 2.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, '|', 1, 3], found: [0] },
        binarySearch: { lo: 1, hi: 1, mid: 1, target: -1 },
        variables: { i: 1, j: 1, left1: 2, left2: 1, right1: 'inf', right2: 3, median: 2 },
      },
    },
  ],
};

export const binarySearchProblems: Problem[] = [binarySearch, searchA2DMatrix, kokoEatingBananas, findMinRotated, searchRotated, timeBasedKV, medianTwoSorted];
