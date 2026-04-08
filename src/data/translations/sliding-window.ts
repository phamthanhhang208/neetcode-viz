import type { TranslationMap } from './index';

export const slidingWindowTranslations: TranslationMap = {
  'best-time-to-buy-and-sell-stock': {
    javascript: {
      code: `function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (let i = 0; i < prices.length; i++) {\n    if (prices[i] < minPrice) {\n      minPrice = prices[i];\n    } else if (prices[i] - minPrice > maxProfit) {\n      maxProfit = prices[i] - minPrice;\n    }\n  }\n  return maxProfit;\n}`,
    },
    go: {
      code: `func maxProfit(prices []int) int {\n\tminPrice := math.MaxInt64\n\tmaxProfit := 0\n\tfor i := 0; i < len(prices); i++ {\n\t\tif prices[i] < minPrice {\n\t\t\tminPrice = prices[i]\n\t\t} else if prices[i]-minPrice > maxProfit {\n\t\t\tmaxProfit = prices[i] - minPrice\n\t\t}\n\t}\n\treturn maxProfit\n}`,
    },
  },
  'longest-substring-without-repeating': {
    javascript: {
      code: `function lengthOfLongestSubstring(s) {\n  const charSet = new Set();\n  let L = 0;\n  let result = 0;\n  for (let R = 0; R < s.length; R++) {\n    while (charSet.has(s[R])) {\n      charSet.delete(s[L]);\n      L++;\n    }\n    charSet.add(s[R]);\n    result = Math.max(result, R - L + 1);\n  }\n  return result;\n}`,
    },
    go: {
      code: `func lengthOfLongestSubstring(s string) int {\n\tcharSet := map[byte]bool{}\n\tL := 0\n\tresult := 0\n\tfor R := 0; R < len(s); R++ {\n\t\tfor charSet[s[R]] {\n\t\t\tdelete(charSet, s[L])\n\t\t\tL++\n\t\t}\n\t\tcharSet[s[R]] = true\n\t\tif R-L+1 > result {\n\t\t\tresult = R - L + 1\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
  'longest-repeating-character-replacement': {
    javascript: {
      code: `function characterReplacement(s, k) {\n  const count = {};\n  let L = 0;\n  let maxFreq = 0;\n  let result = 0;\n  for (let R = 0; R < s.length; R++) {\n    count[s[R]] = (count[s[R]] || 0) + 1;\n    maxFreq = Math.max(maxFreq, count[s[R]]);\n    while ((R - L + 1) - maxFreq > k) {\n      count[s[L]]--;\n      L++;\n    }\n    result = Math.max(result, R - L + 1);\n  }\n  return result;\n}`,
    },
    go: {
      code: `func characterReplacement(s string, k int) int {\n\tcount := map[byte]int{}\n\tL := 0\n\tmaxFreq := 0\n\tresult := 0\n\tfor R := 0; R < len(s); R++ {\n\t\tcount[s[R]]++\n\t\tif count[s[R]] > maxFreq {\n\t\t\tmaxFreq = count[s[R]]\n\t\t}\n\t\tfor (R-L+1)-maxFreq > k {\n\t\t\tcount[s[L]]--\n\t\t\tL++\n\t\t}\n\t\tif R-L+1 > result {\n\t\t\tresult = R - L + 1\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
  'permutation-in-string': {
    javascript: {
      code: `function checkInclusion(s1, s2) {\n  if (s1.length > s2.length) {\n    return false;\n  }\n  const s1Count = {};\n  for (const c of s1) {\n    s1Count[c] = (s1Count[c] || 0) + 1;\n  }\n  const winCount = {};\n  for (let i = 0; i < s2.length; i++) {\n    winCount[s2[i]] = (winCount[s2[i]] || 0) + 1;\n    if (i >= s1.length) {\n      const leftChar = s2[i - s1.length];\n      winCount[leftChar]--;\n      if (winCount[leftChar] === 0) {\n        delete winCount[leftChar];\n      }\n    }\n    if (JSON.stringify(Object.keys(winCount).sort().reduce((a, k) => { a[k] = winCount[k]; return a; }, {})) ===\n        JSON.stringify(Object.keys(s1Count).sort().reduce((a, k) => { a[k] = s1Count[k]; return a; }, {}))) {\n      return true;\n    }\n  }\n  return false;\n}`,
    },
    go: {
      code: `func checkInclusion(s1 string, s2 string) bool {\n\tif len(s1) > len(s2) {\n\t\treturn false\n\t}\n\ts1Count := map[byte]int{}\n\tfor i := 0; i < len(s1); i++ {\n\t\ts1Count[s1[i]]++\n\t}\n\twinCount := map[byte]int{}\n\tfor i := 0; i < len(s2); i++ {\n\t\twinCount[s2[i]]++\n\t\tif i >= len(s1) {\n\t\t\tleftChar := s2[i-len(s1)]\n\t\t\twinCount[leftChar]--\n\t\t\tif winCount[leftChar] == 0 {\n\t\t\t\tdelete(winCount, leftChar)\n\t\t\t}\n\t\t}\n\t\tif mapsEqual(winCount, s1Count) {\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}`,
    },
  },
  'minimum-window-substring': {
    javascript: {
      code: `function minWindow(s, t) {\n  const need = {};\n  for (const c of t) {\n    need[c] = (need[c] || 0) + 1;\n  }\n  let have = 0;\n  const required = Object.keys(need).length;\n  const window = {};\n  let res = [-1, -1];\n  let resLen = Infinity;\n  let l = 0;\n  for (let r = 0; r < s.length; r++) {\n    window[s[r]] = (window[s[r]] || 0) + 1;\n    if (s[r] in need && window[s[r]] === need[s[r]]) {\n      have++;\n    }\n    while (have === required) {\n      if ((r - l + 1) < resLen) {\n        res = [l, r];\n        resLen = r - l + 1;\n      }\n      window[s[l]]--;\n      if (s[l] in need && window[s[l]] < need[s[l]]) {\n        have--;\n      }\n      l++;\n    }\n  }\n  return resLen !== Infinity ? s.substring(res[0], res[1] + 1) : "";\n}`,
    },
    go: {
      code: `func minWindow(s string, t string) string {\n\tneed := map[byte]int{}\n\tfor i := 0; i < len(t); i++ {\n\t\tneed[t[i]]++\n\t}\n\thave, required := 0, len(need)\n\twindow := map[byte]int{}\n\tres := [2]int{-1, -1}\n\tresLen := math.MaxInt64\n\tl := 0\n\tfor r := 0; r < len(s); r++ {\n\t\twindow[s[r]]++\n\t\tif cnt, ok := need[s[r]]; ok && window[s[r]] == cnt {\n\t\t\thave++\n\t\t}\n\t\tfor have == required {\n\t\t\tif (r - l + 1) < resLen {\n\t\t\t\tres = [2]int{l, r}\n\t\t\t\tresLen = r - l + 1\n\t\t\t}\n\t\t\twindow[s[l]]--\n\t\t\tif cnt, ok := need[s[l]]; ok && window[s[l]] < cnt {\n\t\t\t\thave--\n\t\t\t}\n\t\t\tl++\n\t\t}\n\t}\n\tif resLen != math.MaxInt64 {\n\t\treturn s[res[0] : res[1]+1]\n\t}\n\treturn ""\n}`,
    },
  },
  'sliding-window-maximum': {
    javascript: {
      code: `function maxSlidingWindow(nums, k) {\n  const dq = [];  // stores indices\n  const result = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (dq.length && dq[0] < i - k + 1) {\n      dq.shift();\n    }\n    while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {\n      dq.pop();\n    }\n    dq.push(i);\n    if (i >= k - 1) {\n      result.push(nums[dq[0]]);\n    }\n  }\n  return result;\n}`,
    },
    go: {
      code: `func maxSlidingWindow(nums []int, k int) []int {\n\tdq := []int{}  // stores indices\n\tresult := []int{}\n\tfor i := 0; i < len(nums); i++ {\n\t\tfor len(dq) > 0 && dq[0] < i-k+1 {\n\t\t\tdq = dq[1:]\n\t\t}\n\t\tfor len(dq) > 0 && nums[dq[len(dq)-1]] < nums[i] {\n\t\t\tdq = dq[:len(dq)-1]\n\t\t}\n\t\tdq = append(dq, i)\n\t\tif i >= k-1 {\n\t\t\tresult = append(result, nums[dq[0]])\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
};
