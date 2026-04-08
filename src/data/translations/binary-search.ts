import type { TranslationMap } from './index';

export const binarySearchTranslations: TranslationMap = {
  'binary-search': {
    javascript: {
      code: `function search(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) {\n      return mid;\n    } else if (nums[mid] < target) {\n      lo = mid + 1;\n    } else {\n      hi = mid - 1;\n    }\n  }\n  return -1;\n}`,
    },
    go: {
      code: `func search(nums []int, target int) int {\n\tlo, hi := 0, len(nums)-1\n\tfor lo <= hi {\n\t\tmid := (lo + hi) / 2\n\t\tif nums[mid] == target {\n\t\t\treturn mid\n\t\t} else if nums[mid] < target {\n\t\t\tlo = mid + 1\n\t\t} else {\n\t\t\thi = mid - 1\n\t\t}\n\t}\n\treturn -1\n}`,
    },
  },
  'search-a-2d-matrix': {
    javascript: {
      code: `function searchMatrix(matrix, target) {\n  const rows = matrix.length, cols = matrix[0].length;\n  let lo = 0, hi = rows * cols - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    const row = Math.floor(mid / cols), col = mid % cols;\n    if (matrix[row][col] === target) {\n      return true;\n    } else if (matrix[row][col] < target) {\n      lo = mid + 1;\n    } else {\n      hi = mid - 1;\n    }\n  }\n  return false;\n}`,
    },
    go: {
      code: `func searchMatrix(matrix [][]int, target int) bool {\n\trows, cols := len(matrix), len(matrix[0])\n\tlo, hi := 0, rows*cols-1\n\tfor lo <= hi {\n\t\tmid := (lo + hi) / 2\n\t\trow, col := mid/cols, mid%cols\n\t\tif matrix[row][col] == target {\n\t\t\treturn true\n\t\t} else if matrix[row][col] < target {\n\t\t\tlo = mid + 1\n\t\t} else {\n\t\t\thi = mid - 1\n\t\t}\n\t}\n\treturn false\n}`,
    },
  },
  'koko-eating-bananas': {
    javascript: {
      code: `function minEatingSpeed(piles, h) {\n  let lo = 1, hi = Math.max(...piles);\n  let result = hi;\n  while (lo <= hi) {\n    const k = Math.floor((lo + hi) / 2);\n    const hours = piles.reduce((sum, p) => sum + Math.ceil(p / k), 0);\n    if (hours <= h) {\n      result = k;\n      hi = k - 1;\n    } else {\n      lo = k + 1;\n    }\n  }\n  return result;\n}`,
    },
    go: {
      code: `func minEatingSpeed(piles []int, h int) int {\n\tlo, hi := 1, 0\n\tfor _, p := range piles {\n\t\tif p > hi {\n\t\t\thi = p\n\t\t}\n\t}\n\tresult := hi\n\tfor lo <= hi {\n\t\tk := (lo + hi) / 2\n\t\thours := 0\n\t\tfor _, p := range piles {\n\t\t\thours += (p + k - 1) / k\n\t\t}\n\t\tif hours <= h {\n\t\t\tresult = k\n\t\t\thi = k - 1\n\t\t} else {\n\t\t\tlo = k + 1\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
  'find-minimum-in-rotated-sorted-array': {
    javascript: {
      code: `function findMin(nums) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] > nums[hi]) {\n      lo = mid + 1;\n    } else {\n      hi = mid;\n    }\n  }\n  return nums[lo];\n}`,
    },
    go: {
      code: `func findMin(nums []int) int {\n\tlo, hi := 0, len(nums)-1\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\tif nums[mid] > nums[hi] {\n\t\t\tlo = mid + 1\n\t\t} else {\n\t\t\thi = mid\n\t\t}\n\t}\n\treturn nums[lo]\n}`,
    },
  },
  'search-in-rotated-sorted-array': {
    javascript: {
      code: `function search(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) {\n      return mid;\n    }\n    if (nums[lo] <= nums[mid]) {  // left half sorted\n      if (nums[lo] <= target && target < nums[mid]) {\n        hi = mid - 1;\n      } else {\n        lo = mid + 1;\n      }\n    } else {  // right half sorted\n      if (nums[mid] < target && target <= nums[hi]) {\n        lo = mid + 1;\n      } else {\n        hi = mid - 1;\n      }\n    }\n  }\n  return -1;\n}`,
    },
    go: {
      code: `func search(nums []int, target int) int {\n\tlo, hi := 0, len(nums)-1\n\tfor lo <= hi {\n\t\tmid := (lo + hi) / 2\n\t\tif nums[mid] == target {\n\t\t\treturn mid\n\t\t}\n\t\tif nums[lo] <= nums[mid] {  // left half sorted\n\t\t\tif nums[lo] <= target && target < nums[mid] {\n\t\t\t\thi = mid - 1\n\t\t\t} else {\n\t\t\t\tlo = mid + 1\n\t\t\t}\n\t\t} else {  // right half sorted\n\t\t\tif nums[mid] < target && target <= nums[hi] {\n\t\t\t\tlo = mid + 1\n\t\t\t} else {\n\t\t\t\thi = mid - 1\n\t\t\t}\n\t\t}\n\t}\n\treturn -1\n}`,
    },
  },
  'time-based-key-value-store': {
    javascript: {
      code: `class TimeMap {\n  constructor() {\n    this.store = {};  // key -> [[timestamp, value]]\n  }\n\n  set(key, value, timestamp) {\n    if (!(key in this.store)) {\n      this.store[key] = [];\n    }\n    this.store[key].push([timestamp, value]);\n  }\n\n  get(key, timestamp) {\n    const values = this.store[key] || [];\n    let lo = 0, hi = values.length - 1;\n    let result = "";\n    while (lo <= hi) {\n      const mid = Math.floor((lo + hi) / 2);\n      if (values[mid][0] <= timestamp) {\n        result = values[mid][1];\n        lo = mid + 1;\n      } else {\n        hi = mid - 1;\n      }\n    }\n    return result;\n  }\n}`,
    },
    go: {
      code: `type TimeMap struct {\n\tstore map[string][][2]interface{}  // key -> [[timestamp, value]]\n}\n\nfunc Constructor() TimeMap {\n\treturn TimeMap{store: make(map[string][][2]interface{})}\n}\n\nfunc (t *TimeMap) Set(key string, value string, timestamp int) {\n\tt.store[key] = append(t.store[key], [2]interface{}{timestamp, value})\n}\n\nfunc (t *TimeMap) Get(key string, timestamp int) string {\n\tvalues := t.store[key]\n\tlo, hi := 0, len(values)-1\n\tresult := ""\n\tfor lo <= hi {\n\t\tmid := (lo + hi) / 2\n\t\tif values[mid][0].(int) <= timestamp {\n\t\t\tresult = values[mid][1].(string)\n\t\t\tlo = mid + 1\n\t\t} else {\n\t\t\thi = mid - 1\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
  'median-of-two-sorted-arrays': {
    javascript: {
      code: `function findMedianSortedArrays(nums1, nums2) {\n  if (nums1.length > nums2.length) {\n    [nums1, nums2] = [nums2, nums1];\n  }\n  const m = nums1.length, n = nums2.length;\n  let lo = 0, hi = m;\n  while (lo <= hi) {\n    const i = Math.floor((lo + hi) / 2);  // partition in nums1\n    const j = Math.floor((m + n + 1) / 2) - i;  // partition in nums2\n    const left1 = i > 0 ? nums1[i - 1] : -Infinity;\n    const right1 = i < m ? nums1[i] : Infinity;\n    const left2 = j > 0 ? nums2[j - 1] : -Infinity;\n    const right2 = j < n ? nums2[j] : Infinity;\n    if (left1 <= right2 && left2 <= right1) {\n      if ((m + n) % 2 === 0) {\n        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;\n      }\n      return Math.max(left1, left2);\n    } else if (left1 > right2) {\n      hi = i - 1;\n    } else {\n      lo = i + 1;\n    }\n  }\n}`,
    },
    go: {
      code: `func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {\n\tif len(nums1) > len(nums2) {\n\t\tnums1, nums2 = nums2, nums1\n\t}\n\tm, n := len(nums1), len(nums2)\n\tlo, hi := 0, m\n\tfor lo <= hi {\n\t\ti := (lo + hi) / 2  // partition in nums1\n\t\tj := (m + n + 1) / 2 - i  // partition in nums2\n\t\tleft1 := math.MinInt64\n\t\tif i > 0 { left1 = nums1[i-1] }\n\t\tright1 := math.MaxInt64\n\t\tif i < m { right1 = nums1[i] }\n\t\tleft2 := math.MinInt64\n\t\tif j > 0 { left2 = nums2[j-1] }\n\t\tright2 := math.MaxInt64\n\t\tif j < n { right2 = nums2[j] }\n\t\tif left1 <= right2 && left2 <= right1 {\n\t\t\tif (m+n)%2 == 0 {\n\t\t\t\treturn (float64(max(left1, left2)) + float64(min(right1, right2))) / 2.0\n\t\t\t}\n\t\t\treturn float64(max(left1, left2))\n\t\t} else if left1 > right2 {\n\t\t\thi = i - 1\n\t\t} else {\n\t\t\tlo = i + 1\n\t\t}\n\t}\n\treturn 0.0\n}`,
    },
  },
};
