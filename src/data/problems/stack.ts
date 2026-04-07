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

export const stackProblems: Problem[] = [validParentheses];
