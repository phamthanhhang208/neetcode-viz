import type { TranslationMap } from './index';

export const mathGeometryTranslations: TranslationMap = {
  'rotate-image': {
    javascript: {
      code: `function rotate(matrix) {\n  const n = matrix.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = i + 1; j < n; j++) {\n      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\n    }\n  }\n  for (const row of matrix) row.reverse();\n}`,
    },
    go: {
      code: `func rotate(matrix [][]int) {\n\tn := len(matrix)\n\tfor i := 0; i < n; i++ {\n\t\tfor j := i + 1; j < n; j++ {\n\t\t\tmatrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n\t\t}\n\t}\n\tfor _, row := range matrix {\n\t\tfor l, r := 0, len(row)-1; l < r; l, r = l+1, r-1 {\n\t\t\trow[l], row[r] = row[r], row[l]\n\t\t}\n\t}\n}`,
    },
  },
  'spiral-matrix': {
    javascript: {
      code: `function spiralOrder(matrix) {\n  const res = [];\n  let top = 0, bot = matrix.length - 1, left = 0, right = matrix[0].length - 1;\n  while (top <= bot && left <= right) {\n    for (let i = left; i <= right; i++) res.push(matrix[top][i]);\n    top++;\n    for (let i = top; i <= bot; i++) res.push(matrix[i][right]);\n    right--;\n    if (top <= bot) {\n      for (let i = right; i >= left; i--) res.push(matrix[bot][i]);\n      bot--;\n    }\n    if (left <= right) {\n      for (let i = bot; i >= top; i--) res.push(matrix[i][left]);\n      left++;\n    }\n  }\n  return res;\n}`,
    },
    go: {
      code: `func spiralOrder(matrix [][]int) []int {\n\tres := []int{}\n\ttop, bot, left, right := 0, len(matrix)-1, 0, len(matrix[0])-1\n\tfor top <= bot && left <= right {\n\t\tfor i := left; i <= right; i++ { res = append(res, matrix[top][i]) }\n\t\ttop++\n\t\tfor i := top; i <= bot; i++ { res = append(res, matrix[i][right]) }\n\t\tright--\n\t\tif top <= bot {\n\t\t\tfor i := right; i >= left; i-- { res = append(res, matrix[bot][i]) }\n\t\t\tbot--\n\t\t}\n\t\tif left <= right {\n\t\t\tfor i := bot; i >= top; i-- { res = append(res, matrix[i][left]) }\n\t\t\tleft++\n\t\t}\n\t}\n\treturn res\n}`,
    },
  },
  'set-matrix-zeroes': {
    javascript: {
      code: `function setZeroes(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  let rowZero = false;\n  for (let j = 0; j < n; j++) if (matrix[0][j] === 0) rowZero = true;\n  for (let i = 1; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      if (matrix[i][j] === 0) {\n        matrix[0][j] = 0;\n        matrix[i][0] = 0;\n      }\n    }\n  }\n  for (let i = 1; i < m; i++) {\n    for (let j = n - 1; j >= 0; j--) {\n      if (matrix[0][j] === 0 || matrix[i][0] === 0) matrix[i][j] = 0;\n    }\n  }\n  if (rowZero) for (let j = 0; j < n; j++) matrix[0][j] = 0;\n}`,
    },
    go: {
      code: `func setZeroes(matrix [][]int) {\n\tm, n := len(matrix), len(matrix[0])\n\trowZero := false\n\tfor j := 0; j < n; j++ {\n\t\tif matrix[0][j] == 0 { rowZero = true }\n\t}\n\tfor i := 1; i < m; i++ {\n\t\tfor j := 0; j < n; j++ {\n\t\t\tif matrix[i][j] == 0 {\n\t\t\t\tmatrix[0][j] = 0\n\t\t\t\tmatrix[i][0] = 0\n\t\t\t}\n\t\t}\n\t}\n\tfor i := 1; i < m; i++ {\n\t\tfor j := n - 1; j >= 0; j-- {\n\t\t\tif matrix[0][j] == 0 || matrix[i][0] == 0 {\n\t\t\t\tmatrix[i][j] = 0\n\t\t\t}\n\t\t}\n\t}\n\tif rowZero {\n\t\tfor j := 0; j < n; j++ { matrix[0][j] = 0 }\n\t}\n}`,
    },
  },
  'happy-number': {
    javascript: {
      code: `function isHappy(n) {\n  const seen = new Set();\n  while (n !== 1 && !seen.has(n)) {\n    seen.add(n);\n    let sum = 0;\n    while (n > 0) {\n      const d = n % 10;\n      sum += d * d;\n      n = Math.floor(n / 10);\n    }\n    n = sum;\n  }\n  return n === 1;\n}`,
    },
    go: {
      code: `func isHappy(n int) bool {\n\tseen := map[int]bool{}\n\tfor n != 1 && !seen[n] {\n\t\tseen[n] = true\n\t\tsum := 0\n\t\tfor n > 0 {\n\t\t\td := n % 10\n\t\t\tsum += d * d\n\t\t\tn /= 10\n\t\t}\n\t\tn = sum\n\t}\n\treturn n == 1\n}`,
    },
  },
  'plus-one': {
    javascript: {
      code: `function plusOne(digits) {\n  for (let i = digits.length - 1; i >= 0; i--) {\n    if (digits[i] < 9) {\n      digits[i]++;\n      return digits;\n    }\n    digits[i] = 0;\n  }\n  return [1, ...digits];\n}`,
    },
    go: {
      code: `func plusOne(digits []int) []int {\n\tfor i := len(digits) - 1; i >= 0; i-- {\n\t\tif digits[i] < 9 {\n\t\t\tdigits[i]++\n\t\t\treturn digits\n\t\t}\n\t\tdigits[i] = 0\n\t}\n\treturn append([]int{1}, digits...)\n}`,
    },
  },
  'pow-x-n': {
    javascript: {
      code: `function myPow(x, n) {\n  if (n === 0) return 1;\n  if (n < 0) return 1 / myPow(x, -n);\n  if (n % 2 === 0) {\n    const half = myPow(x, n / 2);\n    return half * half;\n  }\n  return x * myPow(x, n - 1);\n}`,
    },
    go: {
      code: `func myPow(x float64, n int) float64 {\n\tif n == 0 { return 1 }\n\tif n < 0 { return 1 / myPow(x, -n) }\n\tif n%2 == 0 {\n\t\thalf := myPow(x, n/2)\n\t\treturn half * half\n\t}\n\treturn x * myPow(x, n-1)\n}`,
    },
  },
  'multiply-strings': {
    javascript: {
      code: `function multiply(num1, num2) {\n  const m = num1.length, n = num2.length;\n  const res = new Array(m + n).fill(0);\n  for (let i = m - 1; i >= 0; i--) {\n    for (let j = n - 1; j >= 0; j--) {\n      const mul = Number(num1[i]) * Number(num2[j]);\n      res[i + j + 1] += mul;\n      res[i + j] += Math.floor(res[i + j + 1] / 10);\n      res[i + j + 1] %= 10;\n    }\n  }\n  const str = res.join('');\n  return str.replace(/^0+/, '') || '0';\n}`,
    },
    go: {
      code: `func multiply(num1 string, num2 string) string {\n\tm, n := len(num1), len(num2)\n\tres := make([]int, m+n)\n\tfor i := m - 1; i >= 0; i-- {\n\t\tfor j := n - 1; j >= 0; j-- {\n\t\t\tmul := int(num1[i]-'0') * int(num2[j]-'0')\n\t\t\tres[i+j+1] += mul\n\t\t\tres[i+j] += res[i+j+1] / 10\n\t\t\tres[i+j+1] %= 10\n\t\t}\n\t}\n\tstr := ""\n\tfor _, d := range res { str += strconv.Itoa(d) }\n\tfor len(str) > 1 && str[0] == '0' { str = str[1:] }\n\treturn str\n}`,
    },
  },
  'detect-squares': {
    javascript: {
      code: `class DetectSquares {\n  constructor() {\n    this.counts = {};\n  }\n  add(point) {\n    const key = point[0] + ',' + point[1];\n    this.counts[key] = (this.counts[key] || 0) + 1;\n  }\n  count(point) {\n    let res = 0;\n    const [px, py] = point;\n    for (const key in this.counts) {\n      const [x, y] = key.split(',').map(Number);\n      if (Math.abs(px - x) !== Math.abs(py - y) || (x === px && y === py)) continue;\n      const cnt = this.counts[key];\n      const k1 = x + ',' + py;\n      const k2 = px + ',' + y;\n      res += cnt * (this.counts[k1] || 0) * (this.counts[k2] || 0);\n    }\n    return res;\n  }\n}`,
    },
    go: {
      code: `type DetectSquares struct {\n\tcounts map[[2]int]int\n}\n\nfunc Constructor() DetectSquares {\n\treturn DetectSquares{counts: map[[2]int]int{}}\n}\n\nfunc (ds *DetectSquares) Add(point []int) {\n\tds.counts[[2]int{point[0], point[1]}]++\n}\n\nfunc (ds *DetectSquares) Count(point []int) int {\n\tres := 0\n\tpx, py := point[0], point[1]\n\tfor key, cnt := range ds.counts {\n\t\tx, y := key[0], key[1]\n\t\tdx := px - x\n\t\tif dx < 0 { dx = -dx }\n\t\tdy := py - y\n\t\tif dy < 0 { dy = -dy }\n\t\tif dx != dy || (x == px && y == py) { continue }\n\t\tres += cnt * ds.counts[[2]int{x, py}] * ds.counts[[2]int{px, y}]\n\t}\n\treturn res\n}`,
    },
  },
};
