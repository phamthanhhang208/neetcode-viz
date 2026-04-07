import type { Problem } from '../types';

const validParentheses: Problem = {
  id: 'valid-parentheses',
  name: 'Valid Parentheses',
  number: 20,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/valid-parentheses/',
  description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
  vizTypes: ['stack'],
  language: 'python',
  testInput: 's = "({[]})"',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Stack Matching',
  hints: [
    'Use a stack to track opening brackets.',
    'When you see a closing bracket, check if it matches the top of the stack.',
    'At the end, the stack should be empty if all brackets are matched.',
  ],
  code: `def isValid(s):
    stack = []
    matching = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in matching:
            if not stack or stack[-1] != matching[char]:
                return False
            stack.pop()
        else:
            stack.append(char)
    return len(stack) == 0`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Check if s = "({[]})" has valid bracket matching. Process each character left to right.',
      viz: {
        stack: { values: [] },
        variables: { s: '({[]})', i: '-' },
      },
    },
    {
      line: 2,
      label: 'Empty Stack',
      message: 'Initialize an empty stack to track unmatched opening brackets.',
      viz: {
        stack: { values: [] },
        variables: { s: '({[]})', stack: '[]' },
      },
    },
    {
      line: 4,
      label: "Push '('",
      message: "char = '('. It's an opening bracket, push onto the stack.",
      viz: {
        stack: { values: ['('], pushing: '(' },
        variables: { char: '(', action: 'push' },
      },
    },
    {
      line: 4,
      label: "Push '{'",
      message: "char = '{'. Opening bracket, push onto the stack.",
      viz: {
        stack: { values: ['(', '{'], pushing: '{' },
        variables: { char: '{', action: 'push' },
      },
    },
    {
      line: 4,
      label: "Push '['",
      message: "char = '['. Opening bracket, push onto the stack.",
      viz: {
        stack: { values: ['(', '{', '['], pushing: '[' },
        variables: { char: '[', action: 'push' },
      },
    },
    {
      line: 5,
      label: "Match ']'",
      message: "char = ']'. It's a closing bracket. Check top of stack: '[' matches ']'. Pop!",
      isKeyMoment: true,
      viz: {
        stack: { values: ['(', '{', '['], popping: true, peeking: true },
        variables: { char: ']', top: '[', match: true },
      },
    },
    {
      line: 7,
      label: 'Pop',
      message: "Popped '[' from stack. Brackets matched successfully.",
      viz: {
        stack: { values: ['(', '{'] },
        variables: { char: ']', action: 'pop' },
      },
    },
    {
      line: 5,
      label: "Match '}'",
      message: "char = '}'. Closing bracket. Top of stack is '{' which matches '}'.",
      isKeyMoment: true,
      viz: {
        stack: { values: ['(', '{'], popping: true, peeking: true },
        variables: { char: '}', top: '{', match: true },
      },
    },
    {
      line: 7,
      label: 'Pop',
      message: "Popped '{'. Stack now has just '('.",
      viz: {
        stack: { values: ['('] },
        variables: { char: '}', action: 'pop' },
      },
    },
    {
      line: 5,
      label: "Match ')'",
      message: "char = ')'. Closing bracket. Top of stack is '(' which matches ')'.",
      isKeyMoment: true,
      viz: {
        stack: { values: ['('], popping: true, peeking: true },
        variables: { char: ')', top: '(', match: true },
      },
    },
    {
      line: 7,
      label: 'Pop',
      message: "Popped '('. Stack is now empty!",
      viz: {
        stack: { values: [] },
        variables: { char: ')', action: 'pop' },
      },
    },
    {
      line: 10,
      label: 'Result',
      message: 'Stack is empty after processing all characters. All brackets are properly matched. Return True!',
      isKeyMoment: true,
      viz: {
        stack: { values: [] },
        variables: { result: true, stackEmpty: true },
      },
    },
  ],
};

const minStack: Problem = {
  id: 'min-stack',
  name: 'Min Stack',
  number: 155,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/min-stack/',
  description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
  vizTypes: ['stack'],
  language: 'python',
  testInput: 'push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()',
  timeComplexity: 'O(1)',
  spaceComplexity: 'O(n)',
  pattern: 'Two Stacks',
  hints: [
    'Use two stacks: one for all values and one to track the current minimum.',
    'When pushing, also push onto the min stack if the value is <= current min.',
    'When popping, also pop from min stack if the popped value equals the current min.',
  ],
  code: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self):
        val = self.stack.pop()
        if val == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Initialize MinStack with two empty stacks: main stack and min stack.',
      viz: {
        stack: { values: [] },
        variables: { stack: '[]', min_stack: '[]' },
      },
    },
    {
      line: 6,
      label: 'Push -2',
      message: 'Push -2 onto both stacks. -2 is the first element so it is the current minimum.',
      viz: {
        stack: { values: ['-2'], pushing: '-2' },
        variables: { stack: '[-2]', min_stack: '[-2]' },
      },
    },
    {
      line: 6,
      label: 'Push 0',
      message: 'Push 0 onto main stack. 0 > -2 so min stack unchanged.',
      viz: {
        stack: { values: ['-2', '0'], pushing: '0' },
        variables: { stack: '[-2, 0]', min_stack: '[-2]' },
      },
    },
    {
      line: 6,
      label: 'Push -3',
      message: 'Push -3 onto main stack. -3 <= -2 so also push onto min stack.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['-2', '0', '-3'], pushing: '-3' },
        variables: { stack: '[-2, 0, -3]', min_stack: '[-2, -3]' },
      },
    },
    {
      line: 19,
      label: 'getMin()',
      message: 'Return top of min stack: -3. This is the current minimum.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['-2', '0', '-3'], peeking: true },
        variables: { min: -3, min_stack: '[-2, -3]' },
      },
    },
    {
      line: 12,
      label: 'Pop -3',
      message: 'Pop -3 from main stack. -3 equals min stack top, so also pop from min stack.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['-2', '0', '-3'], popping: true },
        variables: { popped: -3, stack: '[-2, 0]', min_stack: '[-2]' },
      },
    },
    {
      line: 16,
      label: 'top()',
      message: 'Return top of main stack: 0.',
      viz: {
        stack: { values: ['-2', '0'], peeking: true },
        variables: { top: 0, stack: '[-2, 0]' },
      },
    },
    {
      line: 19,
      label: 'getMin()',
      message: 'Return top of min stack: -2. After removing -3, the minimum reverts to -2.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['-2', '0'] },
        variables: { min: -2, min_stack: '[-2]', result: -2 },
      },
    },
  ],
};

const evalRPN: Problem = {
  id: 'evaluate-reverse-polish-notation',
  name: 'Evaluate Reverse Polish Notation',
  number: 150,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
  description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /.',
  vizTypes: ['stack'],
  language: 'python',
  testInput: 'tokens = ["2","1","+","3","*"]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Stack Evaluation',
  hints: [
    'Push numbers onto the stack.',
    'When you encounter an operator, pop two operands, apply the operator, and push the result.',
    'The final value on the stack is the answer.',
  ],
  code: `def evalRPN(tokens):
    stack = []
    for token in tokens:
        if token in "+-*/":
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            else: stack.append(int(a / b))
        else:
            stack.append(int(token))
    return stack[0]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Evaluate tokens ["2","1","+","3","*"] in Reverse Polish Notation.',
      viz: {
        stack: { values: [] },
        variables: { tokens: '["2","1","+","3","*"]', i: 0 },
      },
    },
    {
      line: 11,
      label: 'Push 2',
      message: 'Token "2" is a number. Push 2 onto the stack.',
      viz: {
        stack: { values: ['2'], pushing: '2' },
        variables: { token: '2', action: 'push' },
      },
    },
    {
      line: 11,
      label: 'Push 1',
      message: 'Token "1" is a number. Push 1 onto the stack.',
      viz: {
        stack: { values: ['2', '1'], pushing: '1' },
        variables: { token: '1', action: 'push' },
      },
    },
    {
      line: 5,
      label: 'Apply +',
      message: 'Token "+". Pop b=1 and a=2. Compute 2 + 1 = 3.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['2', '1'], popping: true },
        variables: { token: '+', a: 2, b: 1, result: 3 },
      },
    },
    {
      line: 6,
      label: 'Push 3',
      message: 'Push result 3 onto the stack.',
      viz: {
        stack: { values: ['3'], pushing: '3' },
        variables: { token: '+', pushed: 3 },
      },
    },
    {
      line: 11,
      label: 'Push 3',
      message: 'Token "3" is a number. Push 3 onto the stack.',
      viz: {
        stack: { values: ['3', '3'], pushing: '3' },
        variables: { token: '3', action: 'push' },
      },
    },
    {
      line: 5,
      label: 'Apply *',
      message: 'Token "*". Pop b=3 and a=3. Compute 3 * 3 = 9.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['3', '3'], popping: true },
        variables: { token: '*', a: 3, b: 3, result: 9 },
      },
    },
    {
      line: 12,
      label: 'Result',
      message: 'Push 9. No more tokens. Return stack[0] = 9.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['9'] },
        variables: { result: 9 },
      },
    },
  ],
};

const generateParentheses: Problem = {
  id: 'generate-parentheses',
  name: 'Generate Parentheses',
  number: 22,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/generate-parentheses/',
  description: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
  vizTypes: ['stack', 'array'],
  language: 'python',
  testInput: 'n = 2',
  timeComplexity: 'O(4^n / sqrt(n))',
  spaceComplexity: 'O(n)',
  pattern: 'Backtracking with Stack',
  hints: [
    'Use backtracking: at each step you can add "(" if open < n, or ")" if close < open.',
    'Track the current combination on a stack.',
    'When open == close == n, you have a valid combination.',
  ],
  code: `def generateParenthesis(n):
    result = []
    stack = []

    def backtrack(open_count, close_count):
        if open_count == close_count == n:
            result.append("".join(stack))
            return
        if open_count < n:
            stack.append("(")
            backtrack(open_count + 1, close_count)
            stack.pop()
        if close_count < open_count:
            stack.append(")")
            backtrack(open_count, close_count + 1)
            stack.pop()

    backtrack(0, 0)
    return result`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Generate all valid parentheses combinations for n=2. Use backtracking.',
      viz: {
        stack: { values: [] },
        array: { values: [], label: 'result' },
        variables: { n: 2, open: 0, close: 0 },
      },
    },
    {
      line: 10,
      label: 'Push (',
      message: 'open < n, push "(" onto stack. open=1, close=0.',
      viz: {
        stack: { values: ['('], pushing: '(' },
        array: { values: [], label: 'result' },
        variables: { open: 1, close: 0 },
      },
    },
    {
      line: 10,
      label: 'Push (',
      message: 'open < n, push another "(". open=2, close=0.',
      viz: {
        stack: { values: ['(', '('], pushing: '(' },
        array: { values: [], label: 'result' },
        variables: { open: 2, close: 0 },
      },
    },
    {
      line: 14,
      label: 'Push )',
      message: 'open == n, so try ")". close < open, push ")". open=2, close=1.',
      viz: {
        stack: { values: ['(', '(', ')'], pushing: ')' },
        array: { values: [], label: 'result' },
        variables: { open: 2, close: 1 },
      },
    },
    {
      line: 6,
      label: 'Found (())',
      message: 'Push ")". open == close == n. Save "(())" to result.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['(', '(', ')', ')'] },
        array: { values: ['(())'], label: 'result', highlights: [0] },
        variables: { open: 2, close: 2, found: '(())' },
      },
    },
    {
      line: 12,
      label: 'Backtrack',
      message: 'Pop back to explore other paths. Remove last two ")"s, then pop "(".',
      viz: {
        stack: { values: ['('], popping: true },
        array: { values: ['(())'], label: 'result' },
        variables: { open: 1, close: 0, action: 'backtrack' },
      },
    },
    {
      line: 14,
      label: 'Push )',
      message: 'Now try ")" first. close < open, push ")". Then push "(", then ")".',
      viz: {
        stack: { values: ['(', ')'], pushing: ')' },
        array: { values: ['(())'], label: 'result' },
        variables: { open: 1, close: 1 },
      },
    },
    {
      line: 6,
      label: 'Found ()()',
      message: 'Build "()()" and save to result. open == close == n.',
      isKeyMoment: true,
      viz: {
        stack: { values: ['(', ')', '(', ')'] },
        array: { values: ['(())', '()()'], label: 'result', highlights: [1] },
        variables: { open: 2, close: 2, found: '()()' },
      },
    },
    {
      line: 18,
      label: 'Result',
      message: 'All paths explored. Return ["(())", "()()"].',
      isKeyMoment: true,
      viz: {
        stack: { values: [] },
        array: { values: ['(())', '()()'], label: 'result' },
        variables: { result: '["(())", "()()"]' },
      },
    },
  ],
};

const dailyTemperatures: Problem = {
  id: 'daily-temperatures',
  name: 'Daily Temperatures',
  number: 739,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/daily-temperatures/',
  description: 'Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.',
  vizTypes: ['array', 'stack'],
  language: 'python',
  testInput: 'temperatures = [73, 74, 75, 71, 69, 72, 76, 73]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Monotonic Stack',
  hints: [
    'Use a stack to store indices of days with unresolved temperatures.',
    'When you find a warmer day, pop indices from the stack and calculate the difference.',
    'The stack maintains a decreasing order of temperatures.',
  ],
  code: `def dailyTemperatures(temperatures):
    n = len(temperatures)
    answer = [0] * n
    stack = []  # stores indices
    for i in range(n):
        while stack and temperatures[i] > temperatures[stack[-1]]:
            idx = stack.pop()
            answer[idx] = i - idx
        stack.append(i)
    return answer`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find days until warmer temperature for [73, 74, 75, 71, 69, 72, 76, 73].',
      viz: {
        array: { values: [73, 74, 75, 71, 69, 72, 76, 73], label: 'temps' },
        stack: { values: [] },
        variables: { answer: '[0,0,0,0,0,0,0,0]' },
      },
    },
    {
      line: 9,
      label: 'i=0: Push 0',
      message: 'Day 0 (73°). Stack empty, push index 0.',
      viz: {
        array: { values: [73, 74, 75, 71, 69, 72, 76, 73], label: 'temps', highlights: [0] },
        stack: { values: ['0(73)'], pushing: '0(73)' },
        variables: { i: 0, temp: 73 },
      },
    },
    {
      line: 6,
      label: 'i=1: Pop 0',
      message: 'Day 1 (74°) > Day 0 (73°). Pop index 0, answer[0] = 1-0 = 1. Push index 1.',
      isKeyMoment: true,
      viz: {
        array: { values: [73, 74, 75, 71, 69, 72, 76, 73], label: 'temps', highlights: [1] },
        stack: { values: ['1(74)'] },
        variables: { i: 1, temp: 74, 'answer[0]': 1 },
      },
    },
    {
      line: 6,
      label: 'i=2: Pop 1',
      message: 'Day 2 (75°) > Day 1 (74°). Pop index 1, answer[1] = 1. Push index 2.',
      isKeyMoment: true,
      viz: {
        array: { values: [73, 74, 75, 71, 69, 72, 76, 73], label: 'temps', highlights: [2] },
        stack: { values: ['2(75)'] },
        variables: { i: 2, temp: 75, 'answer[1]': 1 },
      },
    },
    {
      line: 9,
      label: 'i=3,4: Push',
      message: 'Day 3 (71°) and Day 4 (69°) are not warmer. Push indices 3 and 4.',
      viz: {
        array: { values: [73, 74, 75, 71, 69, 72, 76, 73], label: 'temps', highlights: [3, 4] },
        stack: { values: ['2(75)', '3(71)', '4(69)'] },
        variables: { i: 4, stack: '[2, 3, 4]' },
      },
    },
    {
      line: 6,
      label: 'i=5: Pop 4,3',
      message: 'Day 5 (72°) > 69° and > 71°. Pop 4: answer[4]=1, Pop 3: answer[3]=2. Push 5.',
      isKeyMoment: true,
      viz: {
        array: { values: [73, 74, 75, 71, 69, 72, 76, 73], label: 'temps', highlights: [5] },
        stack: { values: ['2(75)', '5(72)'], popping: true },
        variables: { i: 5, temp: 72, 'answer[3]': 2, 'answer[4]': 1 },
      },
    },
    {
      line: 6,
      label: 'i=6: Pop 5,2',
      message: 'Day 6 (76°) > 72° and > 75°. Pop 5: answer[5]=1, Pop 2: answer[2]=4. Push 6.',
      isKeyMoment: true,
      viz: {
        array: { values: [73, 74, 75, 71, 69, 72, 76, 73], label: 'temps', highlights: [6] },
        stack: { values: ['6(76)'], popping: true },
        variables: { i: 6, temp: 76, 'answer[2]': 4, 'answer[5]': 1 },
      },
    },
    {
      line: 9,
      label: 'i=7: Push 7',
      message: 'Day 7 (73°) < 76°. Push index 7. No warmer day after it.',
      viz: {
        array: { values: [73, 74, 75, 71, 69, 72, 76, 73], label: 'temps', highlights: [7] },
        stack: { values: ['6(76)', '7(73)'], pushing: '7(73)' },
        variables: { i: 7, temp: 73 },
      },
    },
    {
      line: 10,
      label: 'Result',
      message: 'Done. Indices 6 and 7 remain (no warmer day). Answer: [1,1,4,2,1,1,0,0].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 4, 2, 1, 1, 0, 0], label: 'answer' },
        stack: { values: ['6(76)', '7(73)'] },
        variables: { result: '[1,1,4,2,1,1,0,0]' },
      },
    },
  ],
};

const carFleet: Problem = {
  id: 'car-fleet',
  name: 'Car Fleet',
  number: 853,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/car-fleet/',
  description: 'There are n cars going to the same target. Return the number of car fleets that will arrive at the destination.',
  vizTypes: ['array', 'stack'],
  language: 'python',
  testInput: 'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(n)',
  pattern: 'Sort + Stack',
  hints: [
    'Sort cars by position in descending order (closest to target first).',
    'Calculate time to reach target for each car.',
    'If a car behind takes less time, it merges into the fleet ahead.',
  ],
  code: `def carFleet(target, position, speed):
    pairs = sorted(zip(position, speed), reverse=True)
    stack = []  # time-to-target for each fleet
    for pos, spd in pairs:
        time = (target - pos) / spd
        if not stack or time > stack[-1]:
            stack.append(time)
    return len(stack)`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Cars at positions [10,8,0,5,3] with speeds [2,4,1,1,3]. Target = 12.',
      viz: {
        array: { values: ['10@2', '8@4', '0@1', '5@1', '3@3'], label: 'pos@speed' },
        stack: { values: [] },
        variables: { target: 12 },
      },
    },
    {
      line: 2,
      label: 'Sort',
      message: 'Sort by position descending: [(10,2), (8,4), (5,1), (3,3), (0,1)].',
      viz: {
        array: { values: ['10@2', '8@4', '5@1', '3@3', '0@1'], label: 'sorted' },
        stack: { values: [] },
        variables: { action: 'sort by position desc' },
      },
    },
    {
      line: 5,
      label: 'Car at 10',
      message: 'Time = (12-10)/2 = 1.0. Stack empty, push 1.0. First fleet.',
      viz: {
        array: { values: ['10@2', '8@4', '5@1', '3@3', '0@1'], label: 'sorted', highlights: [0] },
        stack: { values: ['1.0'], pushing: '1.0' },
        variables: { pos: 10, speed: 2, time: 1.0 },
      },
    },
    {
      line: 5,
      label: 'Car at 8',
      message: 'Time = (12-8)/4 = 1.0. 1.0 is not > 1.0, so this car merges into fleet ahead.',
      isKeyMoment: true,
      viz: {
        array: { values: ['10@2', '8@4', '5@1', '3@3', '0@1'], label: 'sorted', highlights: [1] },
        stack: { values: ['1.0'] },
        variables: { pos: 8, speed: 4, time: 1.0, merged: true },
      },
    },
    {
      line: 5,
      label: 'Car at 5',
      message: 'Time = (12-5)/1 = 7.0. 7.0 > 1.0, cannot catch up. New fleet! Push 7.0.',
      isKeyMoment: true,
      viz: {
        array: { values: ['10@2', '8@4', '5@1', '3@3', '0@1'], label: 'sorted', highlights: [2] },
        stack: { values: ['1.0', '7.0'], pushing: '7.0' },
        variables: { pos: 5, speed: 1, time: 7.0 },
      },
    },
    {
      line: 5,
      label: 'Car at 3',
      message: 'Time = (12-3)/3 = 3.0. 3.0 < 7.0, merges into fleet ahead.',
      isKeyMoment: true,
      viz: {
        array: { values: ['10@2', '8@4', '5@1', '3@3', '0@1'], label: 'sorted', highlights: [3] },
        stack: { values: ['1.0', '7.0'] },
        variables: { pos: 3, speed: 3, time: 3.0, merged: true },
      },
    },
    {
      line: 5,
      label: 'Car at 0',
      message: 'Time = (12-0)/1 = 12.0. 12.0 > 7.0, new fleet! Push 12.0.',
      isKeyMoment: true,
      viz: {
        array: { values: ['10@2', '8@4', '5@1', '3@3', '0@1'], label: 'sorted', highlights: [4] },
        stack: { values: ['1.0', '7.0', '12.0'], pushing: '12.0' },
        variables: { pos: 0, speed: 1, time: 12.0 },
      },
    },
    {
      line: 8,
      label: 'Result',
      message: 'Stack has 3 entries = 3 car fleets. Return 3.',
      isKeyMoment: true,
      viz: {
        array: { values: ['10@2', '8@4', '5@1', '3@3', '0@1'], label: 'sorted' },
        stack: { values: ['1.0', '7.0', '12.0'] },
        variables: { fleets: 3, result: 3 },
      },
    },
  ],
};

const largestRectangle: Problem = {
  id: 'largest-rectangle-in-histogram',
  name: 'Largest Rectangle in Histogram',
  number: 84,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  description: 'Given an array of integers heights representing the histogram bar heights, find the area of the largest rectangle in the histogram.',
  vizTypes: ['array', 'stack'],
  language: 'python',
  testInput: 'heights = [2, 1, 5, 6, 2, 3]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Monotonic Stack',
  hints: [
    'Use a stack to store indices of bars in increasing height order.',
    'When a shorter bar is encountered, pop and calculate area with the popped bar as the shortest.',
    'The width extends from the current stack top to the current index.',
  ],
  code: `def largestRectangleArea(heights):
    stack = []  # (index, height)
    max_area = 0
    for i, h in enumerate(heights):
        start = i
        while stack and stack[-1][1] > h:
            idx, height = stack.pop()
            max_area = max(max_area, height * (i - idx))
            start = idx
        stack.append((start, h))
    for idx, height in stack:
        max_area = max(max_area, height * (len(heights) - idx))
    return max_area`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find largest rectangle in histogram [2, 1, 5, 6, 2, 3].',
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights' },
        stack: { values: [] },
        variables: { max_area: 0 },
      },
    },
    {
      line: 10,
      label: 'i=0: Push',
      message: 'Height 2 at index 0. Stack empty, push (0, 2).',
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights', highlights: [0] },
        stack: { values: ['0:h2'], pushing: '0:h2' },
        variables: { i: 0, h: 2, max_area: 0 },
      },
    },
    {
      line: 6,
      label: 'i=1: Pop, Push',
      message: 'Height 1 < 2. Pop (0,2): area = 2*(1-0) = 2. Push (0, 1) — extends back.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights', highlights: [1] },
        stack: { values: ['0:h1'], popping: true },
        variables: { i: 1, h: 1, popped: '(0,2)', area: 2, max_area: 2 },
      },
    },
    {
      line: 10,
      label: 'i=2,3: Push',
      message: 'Heights 5 and 6 are increasing. Push (2, 5) and (3, 6).',
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights', highlights: [2, 3] },
        stack: { values: ['0:h1', '2:h5', '3:h6'] },
        variables: { i: 3, stack: '[(0,1),(2,5),(3,6)]' },
      },
    },
    {
      line: 6,
      label: 'i=4: Pop 6',
      message: 'Height 2 < 6. Pop (3,6): area = 6*(4-3) = 6. max_area = 6.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights', highlights: [4] },
        stack: { values: ['0:h1', '2:h5'], popping: true },
        variables: { i: 4, h: 2, popped: '(3,6)', area: 6, max_area: 6 },
      },
    },
    {
      line: 6,
      label: 'i=4: Pop 5',
      message: 'Still 2 < 5. Pop (2,5): area = 5*(4-2) = 10. max_area = 10!',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights', highlights: [4] },
        stack: { values: ['0:h1'], popping: true },
        variables: { i: 4, h: 2, popped: '(2,5)', area: 10, max_area: 10 },
      },
    },
    {
      line: 10,
      label: 'i=4,5: Push',
      message: 'Push (2, 2) — extends back to index 2. Then push (5, 3).',
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights', highlights: [4, 5] },
        stack: { values: ['0:h1', '2:h2', '5:h3'] },
        variables: { i: 5, stack: '[(0,1),(2,2),(5,3)]' },
      },
    },
    {
      line: 11,
      label: 'Process Remaining',
      message: 'Process remaining stack. (5,3): area=3*1=3. (2,2): area=2*4=8. (0,1): area=1*6=6.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights' },
        stack: { values: [], popping: true },
        variables: { 'area(5,3)': 3, 'area(2,2)': 8, 'area(0,1)': 6, max_area: 10 },
      },
    },
    {
      line: 13,
      label: 'Result',
      message: 'Largest rectangle area is 10 (height 5, width 2, columns 2-3).',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 1, 5, 6, 2, 3], label: 'heights', highlights: [2, 3] },
        stack: { values: [] },
        variables: { result: 10, rect: 'h=5, w=2, cols 2-3' },
      },
    },
  ],
};

export const stackProblems: Problem[] = [validParentheses, minStack, evalRPN, generateParentheses, dailyTemperatures, carFleet, largestRectangle];
