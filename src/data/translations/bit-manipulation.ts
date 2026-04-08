import type { TranslationMap } from './index';

export const bitManipulationTranslations: TranslationMap = {
  'single-number': {
    javascript: {
      code: `function singleNumber(nums) {\n  let res = 0;\n  for (const n of nums) {\n    res ^= n;\n  }\n  return res;\n}`,
    },
    go: {
      code: `func singleNumber(nums []int) int {\n\tres := 0\n\tfor _, n := range nums {\n\t\tres ^= n\n\t}\n\treturn res\n}`,
    },
  },
  'number-of-1-bits': {
    javascript: {
      code: `function hammingWeight(n) {\n  let count = 0;\n  while (n) {\n    n &= n - 1;\n    count++;\n  }\n  return count;\n}`,
    },
    go: {
      code: `func hammingWeight(n uint32) int {\n\tcount := 0\n\tfor n != 0 {\n\t\tn &= n - 1\n\t\tcount++\n\t}\n\treturn count\n}`,
    },
  },
  'counting-bits': {
    javascript: {
      code: `function countBits(n) {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) {\n    dp[i] = dp[i >> 1] + (i & 1);\n  }\n  return dp;\n}`,
    },
    go: {
      code: `func countBits(n int) []int {\n\tdp := make([]int, n+1)\n\tfor i := 1; i <= n; i++ {\n\t\tdp[i] = dp[i>>1] + (i & 1)\n\t}\n\treturn dp\n}`,
    },
  },
  'reverse-bits': {
    javascript: {
      code: `function reverseBits(n) {\n  let res = 0;\n  for (let i = 0; i < 32; i++) {\n    res = (res << 1) | (n & 1);\n    n >>>= 1;\n  }\n  return res >>> 0;\n}`,
    },
    go: {
      code: `func reverseBits(n uint32) uint32 {\n\tvar res uint32\n\tfor i := 0; i < 32; i++ {\n\t\tres = (res << 1) | (n & 1)\n\t\tn >>= 1\n\t}\n\treturn res\n}`,
    },
  },
  'missing-number': {
    javascript: {
      code: `function missingNumber(nums) {\n  let res = nums.length;\n  for (let i = 0; i < nums.length; i++) {\n    res ^= i ^ nums[i];\n  }\n  return res;\n}`,
    },
    go: {
      code: `func missingNumber(nums []int) int {\n\tres := len(nums)\n\tfor i, n := range nums {\n\t\tres ^= i ^ n\n\t}\n\treturn res\n}`,
    },
  },
  'sum-of-two-integers': {
    javascript: {
      code: `function getSum(a, b) {\n  while (b !== 0) {\n    const carry = (a & b) << 1;\n    a = a ^ b;\n    b = carry;\n  }\n  return a;\n}`,
    },
    go: {
      code: `func getSum(a int, b int) int {\n\tfor b != 0 {\n\t\tcarry := (a & b) << 1\n\t\ta = a ^ b\n\t\tb = carry\n\t}\n\treturn a\n}`,
    },
  },
  'reverse-integer': {
    javascript: {
      code: `function reverse(x) {\n  let res = 0;\n  const sign = x >= 0 ? 1 : -1;\n  x = Math.abs(x);\n  while (x) {\n    res = res * 10 + x % 10;\n    x = Math.floor(x / 10);\n  }\n  res *= sign;\n  if (res < -(2 ** 31) || res > 2 ** 31 - 1) return 0;\n  return res;\n}`,
    },
    go: {
      code: `func reverse(x int) int {\n\tres := 0\n\tsign := 1\n\tif x < 0 { sign = -1; x = -x }\n\tfor x > 0 {\n\t\tres = res*10 + x%10\n\t\tx /= 10\n\t}\n\tres *= sign\n\tif res < -(1<<31) || res > (1<<31)-1 { return 0 }\n\treturn res\n}`,
    },
  },
};
