import type { TranslationMap } from './index';

export const greedyTranslations: TranslationMap = {
  'maximum-subarray': {
    javascript: {
      code: `function maxSubArray(nums) {\n  let maxSum = nums[0];\n  let curSum = 0;\n  for (const n of nums) {\n    curSum = Math.max(curSum + n, n);\n    maxSum = Math.max(maxSum, curSum);\n  }\n  return maxSum;\n}`,
    },
    go: {
      code: `func maxSubArray(nums []int) int {\n\tmaxSum := nums[0]\n\tcurSum := 0\n\tfor _, n := range nums {\n\t\tcurSum = max(curSum+n, n)\n\t\tif curSum > maxSum { maxSum = curSum }\n\t}\n\treturn maxSum\n}`,
    },
  },
  'jump-game': {
    javascript: {
      code: `function canJump(nums) {\n  let maxReach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n  }\n  return true;\n}`,
    },
    go: {
      code: `func canJump(nums []int) bool {\n\tmaxReach := 0\n\tfor i := 0; i < len(nums); i++ {\n\t\tif i > maxReach { return false }\n\t\tif i+nums[i] > maxReach { maxReach = i + nums[i] }\n\t}\n\treturn true\n}`,
    },
  },
  'jump-game-ii': {
    javascript: {
      code: `function jump(nums) {\n  let jumps = 0, end = 0, farthest = 0;\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === end) {\n      jumps++;\n      end = farthest;\n    }\n  }\n  return jumps;\n}`,
    },
    go: {
      code: `func jump(nums []int) int {\n\tjumps, end, farthest := 0, 0, 0\n\tfor i := 0; i < len(nums)-1; i++ {\n\t\tif i+nums[i] > farthest { farthest = i + nums[i] }\n\t\tif i == end {\n\t\t\tjumps++\n\t\t\tend = farthest\n\t\t}\n\t}\n\treturn jumps\n}`,
    },
  },
  'gas-station': {
    javascript: {
      code: `function canCompleteCircuit(gas, cost) {\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    total += gas[i] - cost[i];\n    tank += gas[i] - cost[i];\n    if (tank < 0) {\n      start = i + 1;\n      tank = 0;\n    }\n  }\n  return total >= 0 ? start : -1;\n}`,
    },
    go: {
      code: `func canCompleteCircuit(gas []int, cost []int) int {\n\ttotal, tank, start := 0, 0, 0\n\tfor i := 0; i < len(gas); i++ {\n\t\ttotal += gas[i] - cost[i]\n\t\ttank += gas[i] - cost[i]\n\t\tif tank < 0 {\n\t\t\tstart = i + 1\n\t\t\ttank = 0\n\t\t}\n\t}\n\tif total >= 0 { return start }\n\treturn -1\n}`,
    },
  },
  'hand-of-straights': {
    javascript: {
      code: `function isNStraightHand(hand, groupSize) {\n  const count = {};\n  for (const card of hand) count[card] = (count[card] || 0) + 1;\n  const sorted = Object.keys(count).map(Number).sort((a, b) => a - b);\n  for (const card of sorted) {\n    if (count[card] > 0) {\n      const freq = count[card];\n      for (let i = card; i < card + groupSize; i++) {\n        if ((count[i] || 0) < freq) return false;\n        count[i] -= freq;\n      }\n    }\n  }\n  return true;\n}`,
    },
    go: {
      code: `func isNStraightHand(hand []int, groupSize int) bool {\n\tcount := map[int]int{}\n\tfor _, card := range hand { count[card]++ }\n\tsort.Ints(hand)\n\tfor _, card := range hand {\n\t\tif count[card] > 0 {\n\t\t\tfreq := count[card]\n\t\t\tfor i := card; i < card+groupSize; i++ {\n\t\t\t\tif count[i] < freq { return false }\n\t\t\t\tcount[i] -= freq\n\t\t\t}\n\t\t}\n\t}\n\treturn true\n}`,
    },
  },
  'merge-triplets-to-form-target': {
    javascript: {
      code: `function mergeTriplets(triplets, target) {\n  const good = new Set();\n  for (const t of triplets) {\n    if (t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]) {\n      for (let i = 0; i < 3; i++) {\n        if (t[i] === target[i]) good.add(i);\n      }\n    }\n  }\n  return good.size === 3;\n}`,
    },
    go: {
      code: `func mergeTriplets(triplets [][]int, target []int) bool {\n\tgood := map[int]bool{}\n\tfor _, t := range triplets {\n\t\tif t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2] {\n\t\t\tfor i := 0; i < 3; i++ {\n\t\t\t\tif t[i] == target[i] { good[i] = true }\n\t\t\t}\n\t\t}\n\t}\n\treturn len(good) == 3\n}`,
    },
  },
  'partition-labels': {
    javascript: {
      code: `function partitionLabels(s) {\n  const last = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  let start = 0, end = 0;\n  const result = [];\n  for (let i = 0; i < s.length; i++) {\n    end = Math.max(end, last[s[i]]);\n    if (i === end) {\n      result.push(end - start + 1);\n      start = i + 1;\n    }\n  }\n  return result;\n}`,
    },
    go: {
      code: `func partitionLabels(s string) []int {\n\tlast := map[byte]int{}\n\tfor i := 0; i < len(s); i++ { last[s[i]] = i }\n\tstart, end := 0, 0\n\tresult := []int{}\n\tfor i := 0; i < len(s); i++ {\n\t\tif last[s[i]] > end { end = last[s[i]] }\n\t\tif i == end {\n\t\t\tresult = append(result, end-start+1)\n\t\t\tstart = i + 1\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
  'valid-parenthesis-string': {
    javascript: {
      code: `function checkValidString(s) {\n  let lo = 0, hi = 0;\n  for (const c of s) {\n    lo += c === '(' ? 1 : -1;\n    hi += c !== ')' ? 1 : -1;\n    if (hi < 0) return false;\n    lo = Math.max(lo, 0);\n  }\n  return lo === 0;\n}`,
    },
    go: {
      code: `func checkValidString(s string) bool {\n\tlo, hi := 0, 0\n\tfor _, c := range s {\n\t\tif c == '(' { lo++ } else { lo-- }\n\t\tif c != ')' { hi++ } else { hi-- }\n\t\tif hi < 0 { return false }\n\t\tif lo < 0 { lo = 0 }\n\t}\n\treturn lo == 0\n}`,
    },
  },
};
