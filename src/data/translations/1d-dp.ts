import type { TranslationMap } from './index';

export const oneDDPTranslations: TranslationMap = {
  'climbing-stairs': {
    javascript: {
      code: `function climbStairs(n) {\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}`,
    },
    go: {
      code: `func climbStairs(n int) int {\n\tdp := make([]int, n+1)\n\tdp[0] = 1\n\tdp[1] = 1\n\tfor i := 2; i <= n; i++ {\n\t\tdp[i] = dp[i-1] + dp[i-2]\n\t}\n\treturn dp[n]\n}`,
    },
  },
  'min-cost-climbing-stairs': {
    javascript: {
      code: `function minCostClimbingStairs(cost) {\n  const dp = new Array(cost.length).fill(0);\n  dp[0] = cost[0];\n  dp[1] = cost[1];\n  for (let i = 2; i < cost.length; i++) {\n    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];\n  }\n  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);\n}`,
    },
    go: {
      code: `func minCostClimbingStairs(cost []int) int {\n\tdp := make([]int, len(cost))\n\tdp[0] = cost[0]\n\tdp[1] = cost[1]\n\tfor i := 2; i < len(cost); i++ {\n\t\tdp[i] = min(dp[i-1], dp[i-2]) + cost[i]\n\t}\n\treturn min(dp[len(dp)-1], dp[len(dp)-2])\n}`,
    },
  },
  'house-robber': {
    javascript: {
      code: `function rob(nums) {\n  if (nums.length <= 2) return Math.max(...nums);\n  const dp = new Array(nums.length).fill(0);\n  dp[0] = nums[0];\n  dp[1] = Math.max(nums[0], nums[1]);\n  for (let i = 2; i < nums.length; i++) {\n    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);\n  }\n  return dp[dp.length - 1];\n}`,
    },
    go: {
      code: `func rob(nums []int) int {\n\tif len(nums) <= 2 {\n\t\tm := nums[0]\n\t\tfor _, v := range nums { if v > m { m = v } }\n\t\treturn m\n\t}\n\tdp := make([]int, len(nums))\n\tdp[0] = nums[0]\n\tdp[1] = max(nums[0], nums[1])\n\tfor i := 2; i < len(nums); i++ {\n\t\tdp[i] = max(nums[i]+dp[i-2], dp[i-1])\n\t}\n\treturn dp[len(dp)-1]\n}`,
    },
  },
  'house-robber-ii': {
    javascript: {
      code: `function rob(nums) {\n  if (nums.length === 1) return nums[0];\n  function helper(arr) {\n    let dp1 = 0, dp2 = 0;\n    for (const n of arr) {\n      const tmp = dp2;\n      dp2 = Math.max(dp2, dp1 + n);\n      dp1 = tmp;\n    }\n    return dp2;\n  }\n  return Math.max(helper(nums.slice(0, -1)), helper(nums.slice(1)));\n}`,
    },
    go: {
      code: `func rob(nums []int) int {\n\tif len(nums) == 1 { return nums[0] }\n\thelper := func(arr []int) int {\n\t\tdp1, dp2 := 0, 0\n\t\tfor _, n := range arr {\n\t\t\tdp1, dp2 = dp2, max(dp2, dp1+n)\n\t\t}\n\t\treturn dp2\n\t}\n\treturn max(helper(nums[:len(nums)-1]), helper(nums[1:]))\n}`,
    },
  },
  'longest-palindromic-substring': {
    javascript: {
      code: `function longestPalindrome(s) {\n  let res = "";\n  for (let i = 0; i < s.length; i++) {\n    for (const [l0, r0] of [[i, i], [i, i + 1]]) {\n      let l = l0, r = r0;\n      while (l >= 0 && r < s.length && s[l] === s[r]) {\n        if (r - l + 1 > res.length) res = s.slice(l, r + 1);\n        l--;\n        r++;\n      }\n    }\n  }\n  return res;\n}`,
    },
    go: {
      code: `func longestPalindrome(s string) string {\n\tres := ""\n\tfor i := 0; i < len(s); i++ {\n\t\tfor _, pair := range [][2]int{{i, i}, {i, i + 1}} {\n\t\t\tl, r := pair[0], pair[1]\n\t\t\tfor l >= 0 && r < len(s) && s[l] == s[r] {\n\t\t\t\tif r-l+1 > len(res) {\n\t\t\t\t\tres = s[l : r+1]\n\t\t\t\t}\n\t\t\t\tl--\n\t\t\t\tr++\n\t\t\t}\n\t\t}\n\t}\n\treturn res\n}`,
    },
  },
  'palindromic-substrings': {
    javascript: {
      code: `function countSubstrings(s) {\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    for (const [l0, r0] of [[i, i], [i, i + 1]]) {\n      let l = l0, r = r0;\n      while (l >= 0 && r < s.length && s[l] === s[r]) {\n        count++;\n        l--;\n        r++;\n      }\n    }\n  }\n  return count;\n}`,
    },
    go: {
      code: `func countSubstrings(s string) int {\n\tcount := 0\n\tfor i := 0; i < len(s); i++ {\n\t\tfor _, pair := range [][2]int{{i, i}, {i, i + 1}} {\n\t\t\tl, r := pair[0], pair[1]\n\t\t\tfor l >= 0 && r < len(s) && s[l] == s[r] {\n\t\t\t\tcount++\n\t\t\t\tl--\n\t\t\t\tr++\n\t\t\t}\n\t\t}\n\t}\n\treturn count\n}`,
    },
  },
  'decode-ways': {
    javascript: {
      code: `function numDecodings(s) {\n  const n = s.length;\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1;\n  dp[1] = s[0] !== '0' ? 1 : 0;\n  for (let i = 2; i <= n; i++) {\n    if (s[i - 1] !== '0') dp[i] += dp[i - 1];\n    const two = parseInt(s.substring(i - 2, i));\n    if (two >= 10 && two <= 26) dp[i] += dp[i - 2];\n  }\n  return dp[n];\n}`,
    },
    go: {
      code: `func numDecodings(s string) int {\n\tn := len(s)\n\tdp := make([]int, n+1)\n\tdp[0] = 1\n\tif s[0] != '0' { dp[1] = 1 }\n\tfor i := 2; i <= n; i++ {\n\t\tif s[i-1] != '0' {\n\t\t\tdp[i] += dp[i-1]\n\t\t}\n\t\ttwo, _ := strconv.Atoi(s[i-2 : i])\n\t\tif two >= 10 && two <= 26 {\n\t\t\tdp[i] += dp[i-2]\n\t\t}\n\t}\n\treturn dp[n]\n}`,
    },
  },
  'coin-change': {
    javascript: {
      code: `function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (const c of coins) {\n      if (a - c >= 0) {\n        dp[a] = Math.min(dp[a], dp[a - c] + 1);\n      }\n    }\n  }\n  return dp[amount] !== Infinity ? dp[amount] : -1;\n}`,
    },
    go: {
      code: `func coinChange(coins []int, amount int) int {\n\tdp := make([]int, amount+1)\n\tfor i := range dp { dp[i] = amount + 1 }\n\tdp[0] = 0\n\tfor a := 1; a <= amount; a++ {\n\t\tfor _, c := range coins {\n\t\t\tif a-c >= 0 && dp[a-c]+1 < dp[a] {\n\t\t\t\tdp[a] = dp[a-c] + 1\n\t\t\t}\n\t\t}\n\t}\n\tif dp[amount] > amount { return -1 }\n\treturn dp[amount]\n}`,
    },
  },
  'maximum-product-subarray': {
    javascript: {
      code: `function maxProduct(nums) {\n  let res = nums[0];\n  let curMin = 1, curMax = 1;\n  for (const n of nums) {\n    const tmp = curMax * n;\n    curMax = Math.max(n * curMax, n * curMin, n);\n    curMin = Math.min(tmp, n * curMin, n);\n    res = Math.max(res, curMax);\n  }\n  return res;\n}`,
    },
    go: {
      code: `func maxProduct(nums []int) int {\n\tres := nums[0]\n\tcurMin, curMax := 1, 1\n\tfor _, n := range nums {\n\t\ttmp := curMax * n\n\t\tcurMax = max(n*curMax, max(n*curMin, n))\n\t\tcurMin = min(tmp, min(n*curMin, n))\n\t\tif curMax > res { res = curMax }\n\t}\n\treturn res\n}`,
    },
  },
  'word-break': {
    javascript: {
      code: `function wordBreak(s, wordDict) {\n  const dp = new Array(s.length + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= s.length; i++) {\n    for (const w of wordDict) {\n      if (i >= w.length && dp[i - w.length]) {\n        if (s.substring(i - w.length, i) === w) {\n          dp[i] = true;\n        }\n      }\n    }\n  }\n  return dp[s.length];\n}`,
    },
    go: {
      code: `func wordBreak(s string, wordDict []string) bool {\n\tdp := make([]bool, len(s)+1)\n\tdp[0] = true\n\tfor i := 1; i <= len(s); i++ {\n\t\tfor _, w := range wordDict {\n\t\t\tif i >= len(w) && dp[i-len(w)] {\n\t\t\t\tif s[i-len(w):i] == w {\n\t\t\t\t\tdp[i] = true\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn dp[len(s)]\n}`,
    },
  },
  'longest-increasing-subsequence': {
    javascript: {
      code: `function lengthOfLIS(nums) {\n  const dp = new Array(nums.length).fill(1);\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[j] < nums[i]) {\n        dp[i] = Math.max(dp[i], dp[j] + 1);\n      }\n    }\n  }\n  return Math.max(...dp);\n}`,
    },
    go: {
      code: `func lengthOfLIS(nums []int) int {\n\tdp := make([]int, len(nums))\n\tfor i := range dp { dp[i] = 1 }\n\tfor i := 1; i < len(nums); i++ {\n\t\tfor j := 0; j < i; j++ {\n\t\t\tif nums[j] < nums[i] && dp[j]+1 > dp[i] {\n\t\t\t\tdp[i] = dp[j] + 1\n\t\t\t}\n\t\t}\n\t}\n\tres := 0\n\tfor _, v := range dp {\n\t\tif v > res { res = v }\n\t}\n\treturn res\n}`,
    },
  },
  'partition-equal-subset-sum': {
    javascript: {
      code: `function canPartition(nums) {\n  const total = nums.reduce((a, b) => a + b, 0);\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const n of nums) {\n    for (let j = target; j >= n; j--) {\n      dp[j] = dp[j] || dp[j - n];\n    }\n  }\n  return dp[target];\n}`,
    },
    go: {
      code: `func canPartition(nums []int) bool {\n\ttotal := 0\n\tfor _, n := range nums { total += n }\n\tif total%2 != 0 { return false }\n\ttarget := total / 2\n\tdp := make([]bool, target+1)\n\tdp[0] = true\n\tfor _, n := range nums {\n\t\tfor j := target; j >= n; j-- {\n\t\t\tdp[j] = dp[j] || dp[j-n]\n\t\t}\n\t}\n\treturn dp[target]\n}`,
    },
  },
};
