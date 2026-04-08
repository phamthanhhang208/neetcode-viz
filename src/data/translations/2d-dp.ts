import type { TranslationMap } from './index';

export const twoDDPTranslations: TranslationMap = {
  'unique-paths': {
    javascript: {
      code: `function uniquePaths(m, n) {\n  const dp = Array.from({length: m}, () => new Array(n).fill(1));\n  for (let r = 1; r < m; r++) {\n    for (let c = 1; c < n; c++) {\n      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];\n    }\n  }\n  return dp[m - 1][n - 1];\n}`,
    },
    go: {
      code: `func uniquePaths(m int, n int) int {\n\tdp := make([][]int, m)\n\tfor i := range dp {\n\t\tdp[i] = make([]int, n)\n\t\tfor j := range dp[i] { dp[i][j] = 1 }\n\t}\n\tfor r := 1; r < m; r++ {\n\t\tfor c := 1; c < n; c++ {\n\t\t\tdp[r][c] = dp[r-1][c] + dp[r][c-1]\n\t\t}\n\t}\n\treturn dp[m-1][n-1]\n}`,
    },
  },
  'longest-common-subsequence': {
    javascript: {
      code: `function longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}`,
    },
    go: {
      code: `func longestCommonSubsequence(text1 string, text2 string) int {\n\tm, n := len(text1), len(text2)\n\tdp := make([][]int, m+1)\n\tfor i := range dp { dp[i] = make([]int, n+1) }\n\tfor i := 1; i <= m; i++ {\n\t\tfor j := 1; j <= n; j++ {\n\t\t\tif text1[i-1] == text2[j-1] {\n\t\t\t\tdp[i][j] = dp[i-1][j-1] + 1\n\t\t\t} else {\n\t\t\t\tdp[i][j] = max(dp[i-1][j], dp[i][j-1])\n\t\t\t}\n\t\t}\n\t}\n\treturn dp[m][n]\n}`,
    },
  },
  'best-time-to-buy-sell-stock-cooldown': {
    javascript: {
      code: `function maxProfit(prices) {\n  let hold = -prices[0], sold = 0, rest = 0;\n  for (let i = 1; i < prices.length; i++) {\n    const h = hold, s = sold, r = rest;\n    hold = Math.max(h, r - prices[i]);\n    sold = h + prices[i];\n    rest = Math.max(r, s);\n  }\n  return Math.max(sold, rest);\n}`,
    },
    go: {
      code: `func maxProfit(prices []int) int {\n\thold, sold, rest := -prices[0], 0, 0\n\tfor i := 1; i < len(prices); i++ {\n\t\th, s, r := hold, sold, rest\n\t\thold = max(h, r-prices[i])\n\t\tsold = h + prices[i]\n\t\trest = max(r, s)\n\t}\n\treturn max(sold, rest)\n}`,
    },
  },
  'coin-change-ii': {
    javascript: {
      code: `function change(amount, coins) {\n  const dp = Array.from({length: coins.length + 1}, () => new Array(amount + 1).fill(0));\n  for (let i = 0; i <= coins.length; i++) dp[i][0] = 1;\n  for (let i = 1; i <= coins.length; i++) {\n    for (let a = 1; a <= amount; a++) {\n      dp[i][a] = dp[i - 1][a];\n      if (coins[i - 1] <= a) {\n        dp[i][a] += dp[i][a - coins[i - 1]];\n      }\n    }\n  }\n  return dp[coins.length][amount];\n}`,
    },
    go: {
      code: `func change(amount int, coins []int) int {\n\tdp := make([][]int, len(coins)+1)\n\tfor i := range dp {\n\t\tdp[i] = make([]int, amount+1)\n\t\tdp[i][0] = 1\n\t}\n\tfor i := 1; i <= len(coins); i++ {\n\t\tfor a := 1; a <= amount; a++ {\n\t\t\tdp[i][a] = dp[i-1][a]\n\t\t\tif coins[i-1] <= a {\n\t\t\t\tdp[i][a] += dp[i][a-coins[i-1]]\n\t\t\t}\n\t\t}\n\t}\n\treturn dp[len(coins)][amount]\n}`,
    },
  },
  'target-sum': {
    javascript: {
      code: `function findTargetSumWays(nums, target) {\n  let dp = {0: 1};\n  for (const n of nums) {\n    const nxt = {};\n    for (const [s, cnt] of Object.entries(dp)) {\n      const sum = Number(s);\n      nxt[sum + n] = (nxt[sum + n] || 0) + cnt;\n      nxt[sum - n] = (nxt[sum - n] || 0) + cnt;\n    }\n    dp = nxt;\n  }\n  return dp[target] || 0;\n}`,
    },
    go: {
      code: `func findTargetSumWays(nums []int, target int) int {\n\tdp := map[int]int{0: 1}\n\tfor _, n := range nums {\n\t\tnxt := map[int]int{}\n\t\tfor s, cnt := range dp {\n\t\t\tnxt[s+n] += cnt\n\t\t\tnxt[s-n] += cnt\n\t\t}\n\t\tdp = nxt\n\t}\n\treturn dp[target]\n}`,
    },
  },
  'interleaving-string': {
    javascript: {
      code: `function isInterleave(s1, s2, s3) {\n  const m = s1.length, n = s2.length;\n  if (m + n !== s3.length) return false;\n  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(false));\n  dp[0][0] = true;\n  for (let i = 1; i <= m; i++) dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];\n  for (let j = 1; j <= n; j++) dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||\n                 (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);\n    }\n  }\n  return dp[m][n];\n}`,
    },
    go: {
      code: `func isInterleave(s1 string, s2 string, s3 string) bool {\n\tm, n := len(s1), len(s2)\n\tif m+n != len(s3) { return false }\n\tdp := make([][]bool, m+1)\n\tfor i := range dp { dp[i] = make([]bool, n+1) }\n\tdp[0][0] = true\n\tfor i := 1; i <= m; i++ { dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1] }\n\tfor j := 1; j <= n; j++ { dp[0][j] = dp[0][j-1] && s2[j-1] == s3[j-1] }\n\tfor i := 1; i <= m; i++ {\n\t\tfor j := 1; j <= n; j++ {\n\t\t\tdp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) ||\n\t\t\t\t(dp[i][j-1] && s2[j-1] == s3[i+j-1])\n\t\t}\n\t}\n\treturn dp[m][n]\n}`,
    },
  },
  'longest-increasing-path-in-matrix': {
    javascript: {
      code: `function longestIncreasingPath(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  const memo = {};\n  function dfs(r, c) {\n    const key = r + ',' + c;\n    if (key in memo) return memo[key];\n    let best = 1;\n    for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < m && nc >= 0 && nc < n && matrix[nr][nc] > matrix[r][c]) {\n        best = Math.max(best, 1 + dfs(nr, nc));\n      }\n    }\n    memo[key] = best;\n    return best;\n  }\n  let res = 0;\n  for (let r = 0; r < m; r++) {\n    for (let c = 0; c < n; c++) {\n      res = Math.max(res, dfs(r, c));\n    }\n  }\n  return res;\n}`,
    },
    go: {
      code: `func longestIncreasingPath(matrix [][]int) int {\n\tm, n := len(matrix), len(matrix[0])\n\tmemo := make([][]int, m)\n\tfor i := range memo { memo[i] = make([]int, n) }\n\tvar dfs func(r, c int) int\n\tdfs = func(r, c int) int {\n\t\tif memo[r][c] != 0 { return memo[r][c] }\n\t\tbest := 1\n\t\tfor _, d := range [][2]int{{-1,0},{1,0},{0,-1},{0,1}} {\n\t\t\tnr, nc := r+d[0], c+d[1]\n\t\t\tif nr >= 0 && nr < m && nc >= 0 && nc < n && matrix[nr][nc] > matrix[r][c] {\n\t\t\t\tif v := 1 + dfs(nr, nc); v > best { best = v }\n\t\t\t}\n\t\t}\n\t\tmemo[r][c] = best\n\t\treturn best\n\t}\n\tres := 0\n\tfor r := 0; r < m; r++ {\n\t\tfor c := 0; c < n; c++ {\n\t\t\tif v := dfs(r, c); v > res { res = v }\n\t\t}\n\t}\n\treturn res\n}`,
    },
  },
  'distinct-subsequences': {
    javascript: {
      code: `function numDistinct(s, t) {\n  const m = s.length, n = t.length;\n  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));\n  for (let i = 0; i <= m; i++) dp[i][0] = 1;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      dp[i][j] = dp[i - 1][j];\n      if (s[i - 1] === t[j - 1]) {\n        dp[i][j] += dp[i - 1][j - 1];\n      }\n    }\n  }\n  return dp[m][n];\n}`,
    },
    go: {
      code: `func numDistinct(s string, t string) int {\n\tm, n := len(s), len(t)\n\tdp := make([][]int, m+1)\n\tfor i := range dp {\n\t\tdp[i] = make([]int, n+1)\n\t\tdp[i][0] = 1\n\t}\n\tfor i := 1; i <= m; i++ {\n\t\tfor j := 1; j <= n; j++ {\n\t\t\tdp[i][j] = dp[i-1][j]\n\t\t\tif s[i-1] == t[j-1] {\n\t\t\t\tdp[i][j] += dp[i-1][j-1]\n\t\t\t}\n\t\t}\n\t}\n\treturn dp[m][n]\n}`,
    },
  },
  'edit-distance': {
    javascript: {
      code: `function minDistance(word1, word2) {\n  const m = word1.length, n = word2.length;\n  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));\n  for (let i = 0; i <= m; i++) dp[i][0] = i;\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (word1[i - 1] === word2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}`,
    },
    go: {
      code: `func minDistance(word1 string, word2 string) int {\n\tm, n := len(word1), len(word2)\n\tdp := make([][]int, m+1)\n\tfor i := range dp {\n\t\tdp[i] = make([]int, n+1)\n\t\tdp[i][0] = i\n\t}\n\tfor j := 0; j <= n; j++ { dp[0][j] = j }\n\tfor i := 1; i <= m; i++ {\n\t\tfor j := 1; j <= n; j++ {\n\t\t\tif word1[i-1] == word2[j-1] {\n\t\t\t\tdp[i][j] = dp[i-1][j-1]\n\t\t\t} else {\n\t\t\t\tdp[i][j] = 1 + min(dp[i-1][j], min(dp[i][j-1], dp[i-1][j-1]))\n\t\t\t}\n\t\t}\n\t}\n\treturn dp[m][n]\n}`,
    },
  },
  'burst-balloons': {
    javascript: {
      code: `function maxCoins(nums) {\n  nums = [1, ...nums, 1];\n  const n = nums.length;\n  const dp = Array.from({length: n}, () => new Array(n).fill(0));\n  for (let length = 2; length < n; length++) {\n    for (let l = 0; l < n - length; l++) {\n      const r = l + length;\n      for (let k = l + 1; k < r; k++) {\n        dp[l][r] = Math.max(dp[l][r],\n          dp[l][k] + dp[k][r] + nums[l] * nums[k] * nums[r]);\n      }\n    }\n  }\n  return dp[0][n - 1];\n}`,
    },
    go: {
      code: `func maxCoins(nums []int) int {\n\tnums = append([]int{1}, append(nums, 1)...)\n\tn := len(nums)\n\tdp := make([][]int, n)\n\tfor i := range dp { dp[i] = make([]int, n) }\n\tfor length := 2; length < n; length++ {\n\t\tfor l := 0; l < n-length; l++ {\n\t\t\tr := l + length\n\t\t\tfor k := l + 1; k < r; k++ {\n\t\t\t\tval := dp[l][k] + dp[k][r] + nums[l]*nums[k]*nums[r]\n\t\t\t\tif val > dp[l][r] { dp[l][r] = val }\n\t\t\t}\n\t\t}\n\t}\n\treturn dp[0][n-1]\n}`,
    },
  },
  'regular-expression-matching': {
    javascript: {
      code: `function isMatch(s, p) {\n  const m = s.length, n = p.length;\n  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(false));\n  dp[0][0] = true;\n  for (let j = 1; j <= n; j++) {\n    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];\n  }\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (p[j - 1] === '*') {\n        dp[i][j] = dp[i][j - 2];\n        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {\n          dp[i][j] = dp[i][j] || dp[i - 1][j];\n        }\n      } else if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      }\n    }\n  }\n  return dp[m][n];\n}`,
    },
    go: {
      code: `func isMatch(s string, p string) bool {\n\tm, n := len(s), len(p)\n\tdp := make([][]bool, m+1)\n\tfor i := range dp { dp[i] = make([]bool, n+1) }\n\tdp[0][0] = true\n\tfor j := 1; j <= n; j++ {\n\t\tif p[j-1] == '*' { dp[0][j] = dp[0][j-2] }\n\t}\n\tfor i := 1; i <= m; i++ {\n\t\tfor j := 1; j <= n; j++ {\n\t\t\tif p[j-1] == '*' {\n\t\t\t\tdp[i][j] = dp[i][j-2]\n\t\t\t\tif p[j-2] == '.' || p[j-2] == s[i-1] {\n\t\t\t\t\tdp[i][j] = dp[i][j] || dp[i-1][j]\n\t\t\t\t}\n\t\t\t} else if p[j-1] == '.' || p[j-1] == s[i-1] {\n\t\t\t\tdp[i][j] = dp[i-1][j-1]\n\t\t\t}\n\t\t}\n\t}\n\treturn dp[m][n]\n}`,
    },
  },
};
