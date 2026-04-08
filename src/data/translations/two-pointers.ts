import type { TranslationMap } from './index';

export const twoPointersTranslations: TranslationMap = {
  'valid-palindrome': {
    javascript: {
      code: `function isPalindrome(s) {\n  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();\n  let L = 0;\n  let R = cleaned.length - 1;\n  while (L < R) {\n    if (cleaned[L] !== cleaned[R]) {\n      return false;\n    }\n    L++;\n    R--;\n  }\n  return true;\n}`,
    },
    go: {
      code: `func isPalindrome(s string) bool {\n\tcleaned := []rune{}\n\tfor _, c := range strings.ToLower(s) {\n\t\tif unicode.IsLetter(c) || unicode.IsDigit(c) {\n\t\t\tcleaned = append(cleaned, c)\n\t\t}\n\t}\n\tL, R := 0, len(cleaned)-1\n\tfor L < R {\n\t\tif cleaned[L] != cleaned[R] {\n\t\t\treturn false\n\t\t}\n\t\tL++\n\t\tR--\n\t}\n\treturn true\n}`,
    },
  },
  'two-sum-ii': {
    javascript: {
      code: `function twoSum(numbers, target) {\n  let L = 0;\n  let R = numbers.length - 1;\n  while (L < R) {\n    const currSum = numbers[L] + numbers[R];\n    if (currSum === target) {\n      return [L + 1, R + 1];\n    } else if (currSum < target) {\n      L++;\n    } else {\n      R--;\n    }\n  }\n}`,
    },
    go: {
      code: `func twoSum(numbers []int, target int) []int {\n\tL, R := 0, len(numbers)-1\n\tfor L < R {\n\t\tcurrSum := numbers[L] + numbers[R]\n\t\tif currSum == target {\n\t\t\treturn []int{L + 1, R + 1}\n\t\t} else if currSum < target {\n\t\t\tL++\n\t\t} else {\n\t\t\tR--\n\t\t}\n\t}\n\treturn nil\n}`,
    },
  },
  '3sum': {
    javascript: {
      code: `function threeSum(nums) {\n  nums.sort((a, b) => a - b);\n  const result = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i - 1]) {\n      continue;\n    }\n    let L = i + 1;\n    let R = nums.length - 1;\n    while (L < R) {\n      const total = nums[i] + nums[L] + nums[R];\n      if (total === 0) {\n        result.push([nums[i], nums[L], nums[R]]);\n        L++;\n        while (L < R && nums[L] === nums[L - 1]) {\n          L++;\n        }\n      } else if (total < 0) {\n        L++;\n      } else {\n        R--;\n      }\n    }\n  }\n  return result;\n}`,
    },
    go: {
      code: `func threeSum(nums []int) [][]int {\n\tsort.Ints(nums)\n\tresult := [][]int{}\n\tfor i := 0; i < len(nums)-2; i++ {\n\t\tif i > 0 && nums[i] == nums[i-1] {\n\t\t\tcontinue\n\t\t}\n\t\tL, R := i+1, len(nums)-1\n\t\tfor L < R {\n\t\t\ttotal := nums[i] + nums[L] + nums[R]\n\t\t\tif total == 0 {\n\t\t\t\tresult = append(result, []int{nums[i], nums[L], nums[R]})\n\t\t\t\tL++\n\t\t\t\tfor L < R && nums[L] == nums[L-1] {\n\t\t\t\t\tL++\n\t\t\t\t}\n\t\t\t} else if total < 0 {\n\t\t\t\tL++\n\t\t\t} else {\n\t\t\t\tR--\n\t\t\t}\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
  'container-with-most-water': {
    javascript: {
      code: `function maxArea(height) {\n  let L = 0;\n  let R = height.length - 1;\n  let maxArea = 0;\n  while (L < R) {\n    const area = Math.min(height[L], height[R]) * (R - L);\n    maxArea = Math.max(maxArea, area);\n    if (height[L] < height[R]) {\n      L++;\n    } else {\n      R--;\n    }\n  }\n  return maxArea;\n}`,
    },
    go: {
      code: `func maxArea(height []int) int {\n\tL, R := 0, len(height)-1\n\tmaxArea := 0\n\tfor L < R {\n\t\th := min(height[L], height[R])\n\t\tarea := h * (R - L)\n\t\tif area > maxArea {\n\t\t\tmaxArea = area\n\t\t}\n\t\tif height[L] < height[R] {\n\t\t\tL++\n\t\t} else {\n\t\t\tR--\n\t\t}\n\t}\n\treturn maxArea\n}`,
    },
  },
  'trapping-rain-water': {
    javascript: {
      code: `function trap(height) {\n  let L = 0;\n  let R = height.length - 1;\n  let leftMax = 0;\n  let rightMax = 0;\n  let water = 0;\n  while (L < R) {\n    if (height[L] < height[R]) {\n      if (height[L] >= leftMax) {\n        leftMax = height[L];\n      } else {\n        water += leftMax - height[L];\n      }\n      L++;\n    } else {\n      if (height[R] >= rightMax) {\n        rightMax = height[R];\n      } else {\n        water += rightMax - height[R];\n      }\n      R--;\n    }\n  }\n  return water;\n}`,
    },
    go: {
      code: `func trap(height []int) int {\n\tL, R := 0, len(height)-1\n\tleftMax, rightMax := 0, 0\n\twater := 0\n\tfor L < R {\n\t\tif height[L] < height[R] {\n\t\t\tif height[L] >= leftMax {\n\t\t\t\tleftMax = height[L]\n\t\t\t} else {\n\t\t\t\twater += leftMax - height[L]\n\t\t\t}\n\t\t\tL++\n\t\t} else {\n\t\t\tif height[R] >= rightMax {\n\t\t\t\trightMax = height[R]\n\t\t\t} else {\n\t\t\t\twater += rightMax - height[R]\n\t\t\t}\n\t\t\tR--\n\t\t}\n\t}\n\treturn water\n}`,
    },
  },
};
