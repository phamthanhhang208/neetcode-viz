import type { TranslationMap } from './index';

export const backtrackingTranslations: TranslationMap = {
  'subsets': {
    javascript: {
      code: `function subsets(nums) {\n    const res = [];\n    const subset = [];\n    function backtrack(i) {\n        if (i >= nums.length) {\n            res.push([...subset]);\n            return;\n        }\n        subset.push(nums[i]);\n        backtrack(i + 1);\n        subset.pop();\n        backtrack(i + 1);\n    }\n    backtrack(0);\n    return res;\n}`,
    },
    go: {
      code: `func subsets(nums []int) [][]int {\n    res := [][]int{}\n    subset := []int{}\n    var backtrack func(i int)\n    backtrack = func(i int) {\n        if i >= len(nums) {\n            tmp := make([]int, len(subset))\n            copy(tmp, subset)\n            res = append(res, tmp)\n            return\n        }\n        subset = append(subset, nums[i])\n        backtrack(i + 1)\n        subset = subset[:len(subset)-1]\n        backtrack(i + 1)\n    }\n    backtrack(0)\n    return res\n}`,
    },
  },
  'combination-sum': {
    javascript: {
      code: `function combinationSum(candidates, target) {\n    const res = [];\n    function backtrack(i, cur, total) {\n        if (total === target) {\n            res.push([...cur]);\n            return;\n        }\n        if (i >= candidates.length || total > target) {\n            return;\n        }\n        cur.push(candidates[i]);\n        backtrack(i, cur, total + candidates[i]);\n        cur.pop();\n        backtrack(i + 1, cur, total);\n    }\n    backtrack(0, [], 0);\n    return res;\n}`,
    },
    go: {
      code: `func combinationSum(candidates []int, target int) [][]int {\n    res := [][]int{}\n    var backtrack func(i int, cur []int, total int)\n    backtrack = func(i int, cur []int, total int) {\n        if total == target {\n            tmp := make([]int, len(cur))\n            copy(tmp, cur)\n            res = append(res, tmp)\n            return\n        }\n        if i >= len(candidates) || total > target {\n            return\n        }\n        cur = append(cur, candidates[i])\n        backtrack(i, cur, total+candidates[i])\n        cur = cur[:len(cur)-1]\n        backtrack(i+1, cur, total)\n    }\n    backtrack(0, []int{}, 0)\n    return res\n}`,
    },
  },
  'permutations': {
    javascript: {
      code: `function permute(nums) {\n    const res = [];\n    function backtrack(start) {\n        if (start === nums.length) {\n            res.push([...nums]);\n            return;\n        }\n        for (let i = start; i < nums.length; i++) {\n            [nums[start], nums[i]] = [nums[i], nums[start]];\n            backtrack(start + 1);\n            [nums[start], nums[i]] = [nums[i], nums[start]];\n        }\n    }\n    backtrack(0);\n    return res;\n}`,
    },
    go: {
      code: `func permute(nums []int) [][]int {\n    res := [][]int{}\n    var backtrack func(start int)\n    backtrack = func(start int) {\n        if start == len(nums) {\n            tmp := make([]int, len(nums))\n            copy(tmp, nums)\n            res = append(res, tmp)\n            return\n        }\n        for i := start; i < len(nums); i++ {\n            nums[start], nums[i] = nums[i], nums[start]\n            backtrack(start + 1)\n            nums[start], nums[i] = nums[i], nums[start]\n        }\n    }\n    backtrack(0)\n    return res\n}`,
    },
  },
  'subsets-ii': {
    javascript: {
      code: `function subsetsWithDup(nums) {\n    const res = [];\n    nums.sort((a, b) => a - b);\n    const subset = [];\n    function backtrack(i) {\n        res.push([...subset]);\n        for (let j = i; j < nums.length; j++) {\n            if (j > i && nums[j] === nums[j - 1]) continue;\n            subset.push(nums[j]);\n            backtrack(j + 1);\n            subset.pop();\n        }\n    }\n    backtrack(0);\n    return res;\n}`,
    },
    go: {
      code: `func subsetsWithDup(nums []int) [][]int {\n    sort.Ints(nums)\n    res := [][]int{}\n    subset := []int{}\n    var backtrack func(i int)\n    backtrack = func(i int) {\n        tmp := make([]int, len(subset))\n        copy(tmp, subset)\n        res = append(res, tmp)\n        for j := i; j < len(nums); j++ {\n            if j > i && nums[j] == nums[j-1] {\n                continue\n            }\n            subset = append(subset, nums[j])\n            backtrack(j + 1)\n            subset = subset[:len(subset)-1]\n        }\n    }\n    backtrack(0)\n    return res\n}`,
    },
  },
  'combination-sum-ii': {
    javascript: {
      code: `function combinationSum2(candidates, target) {\n    const res = [];\n    candidates.sort((a, b) => a - b);\n    function backtrack(i, cur, total) {\n        if (total === target) {\n            res.push([...cur]);\n            return;\n        }\n        if (i >= candidates.length || total > target) {\n            return;\n        }\n        cur.push(candidates[i]);\n        backtrack(i + 1, cur, total + candidates[i]);\n        cur.pop();\n        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {\n            i++;\n        }\n        backtrack(i + 1, cur, total);\n    }\n    backtrack(0, [], 0);\n    return res;\n}`,
    },
    go: {
      code: `func combinationSum2(candidates []int, target int) [][]int {\n    sort.Ints(candidates)\n    res := [][]int{}\n    var backtrack func(i int, cur []int, total int)\n    backtrack = func(i int, cur []int, total int) {\n        if total == target {\n            tmp := make([]int, len(cur))\n            copy(tmp, cur)\n            res = append(res, tmp)\n            return\n        }\n        if i >= len(candidates) || total > target {\n            return\n        }\n        cur = append(cur, candidates[i])\n        backtrack(i+1, cur, total+candidates[i])\n        cur = cur[:len(cur)-1]\n        for i+1 < len(candidates) && candidates[i] == candidates[i+1] {\n            i++\n        }\n        backtrack(i+1, cur, total)\n    }\n    backtrack(0, []int{}, 0)\n    return res\n}`,
    },
  },
  'word-search': {
    javascript: {
      code: `function exist(board, word) {\n    const rows = board.length;\n    const cols = board[0].length;\n    const visited = new Set();\n\n    function dfs(r, c, i) {\n        if (i === word.length) return true;\n        if (r < 0 || c < 0 || r >= rows || c >= cols) return false;\n        const key = r + ',' + c;\n        if (visited.has(key) || board[r][c] !== word[i]) return false;\n        visited.add(key);\n        const res = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) ||\n                    dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1);\n        visited.delete(key);\n        return res;\n    }\n\n    for (let r = 0; r < rows; r++) {\n        for (let c = 0; c < cols; c++) {\n            if (dfs(r, c, 0)) return true;\n        }\n    }\n    return false;\n}`,
    },
    go: {
      code: `func exist(board [][]byte, word string) bool {\n    rows, cols := len(board), len(board[0])\n    visited := make(map[[2]int]bool)\n\n    var dfs func(r, c, i int) bool\n    dfs = func(r, c, i int) bool {\n        if i == len(word) {\n            return true\n        }\n        if r < 0 || c < 0 || r >= rows || c >= cols {\n            return false\n        }\n        pos := [2]int{r, c}\n        if visited[pos] || board[r][c] != word[i] {\n            return false\n        }\n        visited[pos] = true\n        res := dfs(r+1, c, i+1) || dfs(r-1, c, i+1) ||\n               dfs(r, c+1, i+1) || dfs(r, c-1, i+1)\n        delete(visited, pos)\n        return res\n    }\n\n    for r := 0; r < rows; r++ {\n        for c := 0; c < cols; c++ {\n            if dfs(r, c, 0) {\n                return true\n            }\n        }\n    }\n    return false\n}`,
    },
  },
  'palindrome-partitioning': {
    javascript: {
      code: `function partition(s) {\n    const result = [];\n    const part = [];\n\n    function dfs(i) {\n        if (i >= s.length) {\n            result.push([...part]);\n            return;\n        }\n        for (let j = i; j < s.length; j++) {\n            if (isPalindrome(s, i, j)) {\n                part.push(s.slice(i, j + 1));\n                dfs(j + 1);\n                part.pop();\n            }\n        }\n    }\n\n    function isPalindrome(s, l, r) {\n        while (l < r) {\n            if (s[l] !== s[r]) return false;\n            l++;\n            r--;\n        }\n        return true;\n    }\n\n    dfs(0);\n    return result;\n}`,
    },
    go: {
      code: `func partition(s string) [][]string {\n    result := [][]string{}\n    part := []string{}\n\n    isPalindrome := func(s string, l, r int) bool {\n        for l < r {\n            if s[l] != s[r] {\n                return false\n            }\n            l++\n            r--\n        }\n        return true\n    }\n\n    var dfs func(i int)\n    dfs = func(i int) {\n        if i >= len(s) {\n            tmp := make([]string, len(part))\n            copy(tmp, part)\n            result = append(result, tmp)\n            return\n        }\n        for j := i; j < len(s); j++ {\n            if isPalindrome(s, i, j) {\n                part = append(part, s[i:j+1])\n                dfs(j + 1)\n                part = part[:len(part)-1]\n            }\n        }\n    }\n\n    dfs(0)\n    return result\n}`,
    },
  },
  'letter-combinations-of-a-phone-number': {
    javascript: {
      code: `function letterCombinations(digits) {\n    if (!digits) return [];\n    const phone = {\n        '2': 'abc', '3': 'def', '4': 'ghi',\n        '5': 'jkl', '6': 'mno', '7': 'pqrs',\n        '8': 'tuv', '9': 'wxyz'\n    };\n    const result = [];\n\n    function backtrack(i, cur) {\n        if (i === digits.length) {\n            result.push(cur);\n            return;\n        }\n        for (const ch of phone[digits[i]]) {\n            backtrack(i + 1, cur + ch);\n        }\n    }\n\n    backtrack(0, '');\n    return result;\n}`,
    },
    go: {
      code: `func letterCombinations(digits string) []string {\n    if len(digits) == 0 {\n        return []string{}\n    }\n    phone := map[byte]string{\n        '2': \"abc\", '3': \"def\", '4': \"ghi\",\n        '5': \"jkl\", '6': \"mno\", '7': \"pqrs\",\n        '8': \"tuv\", '9': \"wxyz\",\n    }\n    result := []string{}\n\n    var backtrack func(i int, cur string)\n    backtrack = func(i int, cur string) {\n        if i == len(digits) {\n            result = append(result, cur)\n            return\n        }\n        for _, ch := range phone[digits[i]] {\n            backtrack(i+1, cur+string(ch))\n        }\n    }\n\n    backtrack(0, \"\")\n    return result\n}`,
    },
  },
  'n-queens': {
    javascript: {
      code: `function solveNQueens(n) {\n    const cols = new Set();\n    const posDiag = new Set();\n    const negDiag = new Set();\n    const board = Array.from({length: n}, () => Array(n).fill('.'));\n    const result = [];\n\n    function backtrack(r) {\n        if (r === n) {\n            result.push(board.map(row => row.join('')));\n            return;\n        }\n        for (let c = 0; c < n; c++) {\n            if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {\n                continue;\n            }\n            cols.add(c);\n            posDiag.add(r + c);\n            negDiag.add(r - c);\n            board[r][c] = 'Q';\n            backtrack(r + 1);\n            cols.delete(c);\n            posDiag.delete(r + c);\n            negDiag.delete(r - c);\n            board[r][c] = '.';\n        }\n    }\n\n    backtrack(0);\n    return result;\n}`,
    },
    go: {
      code: `func solveNQueens(n int) [][]string {\n    cols := map[int]bool{}\n    posDiag := map[int]bool{}\n    negDiag := map[int]bool{}\n    board := make([][]byte, n)\n    for i := range board {\n        board[i] = make([]byte, n)\n        for j := range board[i] {\n            board[i][j] = '.'\n        }\n    }\n    result := [][]string{}\n\n    var backtrack func(r int)\n    backtrack = func(r int) {\n        if r == n {\n            tmp := make([]string, n)\n            for i := range board {\n                tmp[i] = string(board[i])\n            }\n            result = append(result, tmp)\n            return\n        }\n        for c := 0; c < n; c++ {\n            if cols[c] || posDiag[r+c] || negDiag[r-c] {\n                continue\n            }\n            cols[c] = true\n            posDiag[r+c] = true\n            negDiag[r-c] = true\n            board[r][c] = 'Q'\n            backtrack(r + 1)\n            delete(cols, c)\n            delete(posDiag, r+c)\n            delete(negDiag, r-c)\n            board[r][c] = '.'\n        }\n    }\n\n    backtrack(0)\n    return result\n}`,
    },
  },
};
