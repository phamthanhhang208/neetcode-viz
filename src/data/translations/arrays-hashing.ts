import type { TranslationMap } from './index';

export const arraysHashingTranslations: TranslationMap = {
  'two-sum': {
    javascript: {
      code: `function twoSum(nums, target) {\n  const seen = {};\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (complement in seen) {\n      return [seen[complement], i];\n    }\n    seen[nums[i]] = i;\n  }\n  return [];\n}`,
    },
    go: {
      code: `func twoSum(nums []int, target int) []int {\n\tseen := map[int]int{}\n\tfor i, num := range nums {\n\t\tcomplement := target - num\n\t\tif j, ok := seen[complement]; ok {\n\t\t\treturn []int{j, i}\n\t\t}\n\t\tseen[num] = i\n\t}\n\treturn []int{}\n}`,
    },
  },
  'valid-anagram': {
    javascript: {
      code: `function isAnagram(s, t) {\n  if (s.length !== t.length) {\n    return false;\n  }\n  const count = {};\n  for (const c of s) {\n    count[c] = (count[c] || 0) + 1;\n  }\n  for (const c of t) {\n    count[c] = (count[c] || 0) - 1;\n  }\n  return Object.values(count).every(v => v === 0);\n}`,
    },
    go: {
      code: `func isAnagram(s string, t string) bool {\n\tif len(s) != len(t) {\n\t\treturn false\n\t}\n\tcount := map[rune]int{}\n\tfor _, c := range s {\n\t\tcount[c]++\n\t}\n\tfor _, c := range t {\n\t\tcount[c]--\n\t}\n\tfor _, v := range count {\n\t\tif v != 0 {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true\n}`,
    },
  },
  'contains-duplicate': {
    javascript: {
      code: `function containsDuplicate(nums) {\n  const seen = new Set();\n  for (const num of nums) {\n    if (seen.has(num)) {\n      return true;\n    }\n    seen.add(num);\n  }\n  return false;\n}`,
    },
    go: {
      code: `func containsDuplicate(nums []int) bool {\n\tseen := map[int]bool{}\n\tfor _, num := range nums {\n\t\tif seen[num] {\n\t\t\treturn true\n\t\t}\n\t\tseen[num] = true\n\t}\n\treturn false\n}`,
    },
  },
  'group-anagrams': {
    javascript: {
      code: `function groupAnagrams(strs) {\n  const groups = {};\n  for (const word of strs) {\n    const key = word.split('').sort().join('');\n    if (!(key in groups)) {\n      groups[key] = [];\n    }\n    groups[key].push(word);\n  }\n  return Object.values(groups);\n}`,
    },
    go: {
      code: `func groupAnagrams(strs []string) [][]string {\n\tgroups := map[string][]string{}\n\tfor _, word := range strs {\n\t\trunes := []rune(word)\n\t\tsort.Slice(runes, func(i, j int) bool { return runes[i] < runes[j] })\n\t\tkey := string(runes)\n\t\tgroups[key] = append(groups[key], word)\n\t}\n\tresult := [][]string{}\n\tfor _, v := range groups {\n\t\tresult = append(result, v)\n\t}\n\treturn result\n}`,
    },
  },
  'top-k-frequent-elements': {
    javascript: {
      code: `function topKFrequent(nums, k) {\n  const count = {};\n  for (const num of nums) {\n    count[num] = (count[num] || 0) + 1;\n  }\n  const buckets = Array.from({ length: nums.length + 1 }, () => []);\n  for (const [num, freq] of Object.entries(count)) {\n    buckets[freq].push(Number(num));\n  }\n  const result = [];\n  for (let i = buckets.length - 1; i > 0; i--) {\n    for (const num of buckets[i]) {\n      result.push(num);\n      if (result.length === k) {\n        return result;\n      }\n    }\n  }\n  return result;\n}`,
    },
    go: {
      code: `func topKFrequent(nums []int, k int) []int {\n\tcount := map[int]int{}\n\tfor _, num := range nums {\n\t\tcount[num]++\n\t}\n\tbuckets := make([][]int, len(nums)+1)\n\tfor num, freq := range count {\n\t\tbuckets[freq] = append(buckets[freq], num)\n\t}\n\tresult := []int{}\n\tfor i := len(buckets) - 1; i > 0; i-- {\n\t\tfor _, num := range buckets[i] {\n\t\t\tresult = append(result, num)\n\t\t\tif len(result) == k {\n\t\t\t\treturn result\n\t\t\t}\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
  'product-of-array-except-self': {
    javascript: {
      code: `function productExceptSelf(nums) {\n  const n = nums.length;\n  const result = new Array(n).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < n; i++) {\n    result[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    result[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return result;\n}`,
    },
    go: {
      code: `func productExceptSelf(nums []int) []int {\n\tn := len(nums)\n\tresult := make([]int, n)\n\tfor i := range result {\n\t\tresult[i] = 1\n\t}\n\tprefix := 1\n\tfor i := 0; i < n; i++ {\n\t\tresult[i] = prefix\n\t\tprefix *= nums[i]\n\t}\n\tsuffix := 1\n\tfor i := n - 1; i >= 0; i-- {\n\t\tresult[i] *= suffix\n\t\tsuffix *= nums[i]\n\t}\n\treturn result\n}`,
    },
  },
  'encode-and-decode-strings': {
    javascript: {
      code: `function encode(strs) {\n  let res = "";\n  for (const s of strs) {\n    res += s.length + "#" + s;\n  }\n  return res;\n}\n\nfunction decode(s) {\n  const res = [];\n  let i = 0;\n  while (i < s.length) {\n    let j = i;\n    while (s[j] !== "#") {\n      j++;\n    }\n    const length = parseInt(s.substring(i, j));\n    const word = s.substring(j + 1, j + 1 + length);\n    res.push(word);\n    i = j + 1 + length;\n  }\n  return res;\n}`,
    },
    go: {
      code: `func encode(strs []string) string {\n\tres := ""\n\tfor _, s := range strs {\n\t\tres += fmt.Sprintf("%d#%s", len(s), s)\n\t}\n\treturn res\n}\n\nfunc decode(s string) []string {\n\tres := []string{}\n\ti := 0\n\tfor i < len(s) {\n\t\tj := i\n\t\tfor s[j] != '#' {\n\t\t\tj++\n\t\t}\n\t\tlength, _ := strconv.Atoi(s[i:j])\n\t\tword := s[j+1 : j+1+length]\n\t\tres = append(res, word)\n\t\ti = j + 1 + length\n\t}\n\treturn res\n}`,
    },
  },
  'valid-sudoku': {
    javascript: {
      code: `function isValidSudoku(board) {\n  const rows = {};\n  const cols = {};\n  const boxes = {};\n\n  for (let r = 0; r < 9; r++) {\n    for (let c = 0; c < 9; c++) {\n      const num = board[r][c];\n      if (num === ".") {\n        continue;\n      }\n      const box = Math.floor(r / 3) + "," + Math.floor(c / 3);\n      if (!rows[r]) rows[r] = new Set();\n      if (!cols[c]) cols[c] = new Set();\n      if (!boxes[box]) boxes[box] = new Set();\n      if (rows[r].has(num) ||\n          cols[c].has(num) ||\n          boxes[box].has(num)) {\n        return false;\n      }\n      rows[r].add(num);\n      cols[c].add(num);\n      boxes[box].add(num);\n    }\n  }\n  return true;\n}`,
    },
    go: {
      code: `func isValidSudoku(board [][]byte) bool {\n\trows := map[int]map[byte]bool{}\n\tcols := map[int]map[byte]bool{}\n\tboxes := map[[2]int]map[byte]bool{}\n\n\tfor r := 0; r < 9; r++ {\n\t\tfor c := 0; c < 9; c++ {\n\t\t\tnum := board[r][c]\n\t\t\tif num == '.' {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tbox := [2]int{r / 3, c / 3}\n\t\t\tif rows[r] == nil { rows[r] = map[byte]bool{} }\n\t\t\tif cols[c] == nil { cols[c] = map[byte]bool{} }\n\t\t\tif boxes[box] == nil { boxes[box] = map[byte]bool{} }\n\t\t\tif rows[r][num] ||\n\t\t\t\tcols[c][num] ||\n\t\t\t\tboxes[box][num] {\n\t\t\t\treturn false\n\t\t\t}\n\t\t\trows[r][num] = true\n\t\t\tcols[c][num] = true\n\t\t\tboxes[box][num] = true\n\t\t}\n\t}\n\treturn true\n}`,
    },
  },
  'longest-consecutive-sequence': {
    javascript: {
      code: `function longestConsecutive(nums) {\n  const numSet = new Set(nums);\n  let longest = 0;\n\n  for (const num of numSet) {\n    if (!numSet.has(num - 1)) {\n      let length = 1;\n      while (numSet.has(num + length)) {\n        length++;\n      }\n      longest = Math.max(longest, length);\n    }\n  }\n  return longest;\n}`,
    },
    go: {
      code: `func longestConsecutive(nums []int) int {\n\tnumSet := map[int]bool{}\n\tfor _, num := range nums {\n\t\tnumSet[num] = true\n\t}\n\tlongest := 0\n\n\tfor num := range numSet {\n\t\tif !numSet[num-1] {\n\t\t\tlength := 1\n\t\t\tfor numSet[num+length] {\n\t\t\t\tlength++\n\t\t\t}\n\t\t\tif length > longest {\n\t\t\t\tlongest = length\n\t\t\t}\n\t\t}\n\t}\n\treturn longest\n}`,
    },
  },
};
