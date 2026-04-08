import type { TranslationMap } from './index';

export const stackTranslations: TranslationMap = {
  'valid-parentheses': {
    javascript: {
      code: `function isValid(s) {\n  const stack = [];\n  const matching = { ')': '(', '}': '{', ']': '[' };\n  for (const char of s) {\n    if (char in matching) {\n      if (!stack.length || stack[stack.length - 1] !== matching[char]) {\n        return false;\n      }\n      stack.pop();\n    } else {\n      stack.push(char);\n    }\n  }\n  return stack.length === 0;\n}`,
    },
    go: {
      code: `func isValid(s string) bool {\n\tstack := []byte{}\n\tmatching := map[byte]byte{')': '(', '}': '{', ']': '['}\n\tfor i := 0; i < len(s); i++ {\n\t\tch := s[i]\n\t\tif m, ok := matching[ch]; ok {\n\t\t\tif len(stack) == 0 || stack[len(stack)-1] != m {\n\t\t\t\treturn false\n\t\t\t}\n\t\t\tstack = stack[:len(stack)-1]\n\t\t} else {\n\t\t\tstack = append(stack, ch)\n\t\t}\n\t}\n\treturn len(stack) == 0\n}`,
    },
  },
  'min-stack': {
    javascript: {
      code: `class MinStack {\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n\n  push(val) {\n    this.stack.push(val);\n    if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {\n      this.minStack.push(val);\n    }\n  }\n\n  pop() {\n    const val = this.stack.pop();\n    if (val === this.minStack[this.minStack.length - 1]) {\n      this.minStack.pop();\n    }\n  }\n\n  top() {\n    return this.stack[this.stack.length - 1];\n  }\n\n  getMin() {\n    return this.minStack[this.minStack.length - 1];\n  }\n}`,
    },
    go: {
      code: `type MinStack struct {\n\tstack    []int\n\tminStack []int\n}\n\nfunc Constructor() MinStack {\n\treturn MinStack{}\n}\n\nfunc (s *MinStack) Push(val int) {\n\ts.stack = append(s.stack, val)\n\tif len(s.minStack) == 0 || val <= s.minStack[len(s.minStack)-1] {\n\t\ts.minStack = append(s.minStack, val)\n\t}\n}\n\nfunc (s *MinStack) Pop() {\n\tval := s.stack[len(s.stack)-1]\n\ts.stack = s.stack[:len(s.stack)-1]\n\tif val == s.minStack[len(s.minStack)-1] {\n\t\ts.minStack = s.minStack[:len(s.minStack)-1]\n\t}\n}\n\nfunc (s *MinStack) Top() int {\n\treturn s.stack[len(s.stack)-1]\n}\n\nfunc (s *MinStack) GetMin() int {\n\treturn s.minStack[len(s.minStack)-1]\n}`,
    },
  },
  'evaluate-reverse-polish-notation': {
    javascript: {
      code: `function evalRPN(tokens) {\n  const stack = [];\n  for (const token of tokens) {\n    if ("+-*/".includes(token)) {\n      const b = stack.pop(), a = stack.pop();\n      if (token === '+') stack.push(a + b);\n      else if (token === '-') stack.push(a - b);\n      else if (token === '*') stack.push(a * b);\n      else stack.push(Math.trunc(a / b));\n    } else {\n      stack.push(parseInt(token));\n    }\n  }\n  return stack[0];\n}`,
    },
    go: {
      code: `func evalRPN(tokens []string) int {\n\tstack := []int{}\n\tfor _, token := range tokens {\n\t\tswitch token {\n\t\tcase "+", "-", "*", "/":\n\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]\n\t\t\tstack = stack[:len(stack)-2]\n\t\t\tswitch token {\n\t\t\tcase "+":\n\t\t\t\tstack = append(stack, a+b)\n\t\t\tcase "-":\n\t\t\t\tstack = append(stack, a-b)\n\t\t\tcase "*":\n\t\t\t\tstack = append(stack, a*b)\n\t\t\tcase "/":\n\t\t\t\tstack = append(stack, a/b)\n\t\t\t}\n\t\tdefault:\n\t\t\tnum, _ := strconv.Atoi(token)\n\t\t\tstack = append(stack, num)\n\t\t}\n\t}\n\treturn stack[0]\n}`,
    },
  },
  'generate-parentheses': {
    javascript: {
      code: `function generateParenthesis(n) {\n  const result = [];\n  const stack = [];\n\n  function backtrack(openCount, closeCount) {\n    if (openCount === closeCount && closeCount === n) {\n      result.push(stack.join(""));\n      return;\n    }\n    if (openCount < n) {\n      stack.push("(");\n      backtrack(openCount + 1, closeCount);\n      stack.pop();\n    }\n    if (closeCount < openCount) {\n      stack.push(")");\n      backtrack(openCount, closeCount + 1);\n      stack.pop();\n    }\n  }\n\n  backtrack(0, 0);\n  return result;\n}`,
    },
    go: {
      code: `func generateParenthesis(n int) []string {\n\tresult := []string{}\n\tstack := []byte{}\n\n\tvar backtrack func(openCount, closeCount int)\n\tbacktrack = func(openCount, closeCount int) {\n\t\tif openCount == n && closeCount == n {\n\t\t\tresult = append(result, string(stack))\n\t\t\treturn\n\t\t}\n\t\tif openCount < n {\n\t\t\tstack = append(stack, '(')\n\t\t\tbacktrack(openCount+1, closeCount)\n\t\t\tstack = stack[:len(stack)-1]\n\t\t}\n\t\tif closeCount < openCount {\n\t\t\tstack = append(stack, ')')\n\t\t\tbacktrack(openCount, closeCount+1)\n\t\t\tstack = stack[:len(stack)-1]\n\t\t}\n\t}\n\n\tbacktrack(0, 0)\n\treturn result\n}`,
    },
  },
  'daily-temperatures': {
    javascript: {
      code: `function dailyTemperatures(temperatures) {\n  const n = temperatures.length;\n  const answer = new Array(n).fill(0);\n  const stack = [];  // stores indices\n  for (let i = 0; i < n; i++) {\n    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {\n      const idx = stack.pop();\n      answer[idx] = i - idx;\n    }\n    stack.push(i);\n  }\n  return answer;\n}`,
    },
    go: {
      code: `func dailyTemperatures(temperatures []int) []int {\n\tn := len(temperatures)\n\tanswer := make([]int, n)\n\tstack := []int{}  // stores indices\n\tfor i := 0; i < n; i++ {\n\t\tfor len(stack) > 0 && temperatures[i] > temperatures[stack[len(stack)-1]] {\n\t\t\tidx := stack[len(stack)-1]\n\t\t\tstack = stack[:len(stack)-1]\n\t\t\tanswer[idx] = i - idx\n\t\t}\n\t\tstack = append(stack, i)\n\t}\n\treturn answer\n}`,
    },
  },
  'car-fleet': {
    javascript: {
      code: `function carFleet(target, position, speed) {\n  const pairs = position.map((p, i) => [p, speed[i]]);\n  pairs.sort((a, b) => b[0] - a[0]);\n  const stack = [];  // time-to-target for each fleet\n  for (const [pos, spd] of pairs) {\n    const time = (target - pos) / spd;\n    if (!stack.length || time > stack[stack.length - 1]) {\n      stack.push(time);\n    }\n  }\n  return stack.length;\n}`,
    },
    go: {
      code: `func carFleet(target int, position []int, speed []int) int {\n\tn := len(position)\n\tpairs := make([][2]int, n)\n\tfor i := 0; i < n; i++ {\n\t\tpairs[i] = [2]int{position[i], speed[i]}\n\t}\n\tsort.Slice(pairs, func(i, j int) bool {\n\t\treturn pairs[i][0] > pairs[j][0]\n\t})\n\tstack := []float64{}  // time-to-target for each fleet\n\tfor _, p := range pairs {\n\t\ttime := float64(target-p[0]) / float64(p[1])\n\t\tif len(stack) == 0 || time > stack[len(stack)-1] {\n\t\t\tstack = append(stack, time)\n\t\t}\n\t}\n\treturn len(stack)\n}`,
    },
  },
  'largest-rectangle-in-histogram': {
    javascript: {
      code: `function largestRectangleArea(heights) {\n  const stack = [];  // [index, height]\n  let maxArea = 0;\n  for (let i = 0; i < heights.length; i++) {\n    let start = i;\n    while (stack.length && stack[stack.length - 1][1] > heights[i]) {\n      const [idx, height] = stack.pop();\n      maxArea = Math.max(maxArea, height * (i - idx));\n      start = idx;\n    }\n    stack.push([start, heights[i]]);\n  }\n  for (const [idx, height] of stack) {\n    maxArea = Math.max(maxArea, height * (heights.length - idx));\n  }\n  return maxArea;\n}`,
    },
    go: {
      code: `func largestRectangleArea(heights []int) int {\n\tstack := [][2]int{}  // [index, height]\n\tmaxArea := 0\n\tfor i, h := range heights {\n\t\tstart := i\n\t\tfor len(stack) > 0 && stack[len(stack)-1][1] > h {\n\t\t\ttop := stack[len(stack)-1]\n\t\t\tstack = stack[:len(stack)-1]\n\t\t\tarea := top[1] * (i - top[0])\n\t\t\tif area > maxArea {\n\t\t\t\tmaxArea = area\n\t\t\t}\n\t\t\tstart = top[0]\n\t\t}\n\t\tstack = append(stack, [2]int{start, h})\n\t}\n\tfor _, s := range stack {\n\t\tarea := s[1] * (len(heights) - s[0])\n\t\tif area > maxArea {\n\t\t\tmaxArea = area\n\t\t}\n\t}\n\treturn maxArea\n}`,
    },
  },
};
