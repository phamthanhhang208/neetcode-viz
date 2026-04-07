import type { Problem } from '../types';

const singleNumber: Problem = {
  id: 'single-number',
  name: 'Single Number',
  number: 136,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/single-number/',
  description: 'Every element appears twice except one. Find the single number.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [2, 2, 1]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'XOR All Elements',
  hints: [
    'a XOR a = 0 and a XOR 0 = a.',
    'XOR all elements; duplicates cancel out.',
  ],
  code: `def singleNumber(nums):
    res = 0
    for n in nums:
        res ^= n
    return res`,
  steps: [
    { line: 1, label: 'Init', message: 'res=0. XOR all elements.', viz: { array: { values: [2,2,1] }, variables: { res: 0 } } },
    { line: 3, label: 'n=2', message: 'res = 0 XOR 2 = 2 (binary: 00 ^ 10 = 10).', viz: { array: { values: [2,2,1], highlights: [0] }, variables: { res: 2 } } },
    { line: 3, label: 'n=2', message: 'res = 2 XOR 2 = 0 (binary: 10 ^ 10 = 00). Pair cancels.', viz: { array: { values: [2,2,1], highlights: [1] }, variables: { res: 0 } } },
    { line: 3, label: 'n=1', message: 'res = 0 XOR 1 = 1 (binary: 00 ^ 01 = 01).', viz: { array: { values: [2,2,1], highlights: [2] }, variables: { res: 1 } } },
    { line: 4, label: 'Done', message: 'All pairs cancelled. Only single number remains.', viz: { array: { values: [2,2,1], found: [2] }, variables: { res: 1 } } },
    { line: 4, label: 'Result', message: 'Single number is 1.', isKeyMoment: true, viz: { array: { values: [2,2,1], found: [2] }, variables: { result: 1 } } },
  ],
};

const numberOfOneBits: Problem = {
  id: 'number-of-1-bits',
  name: 'Number of 1 Bits',
  number: 191,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/number-of-1-bits/',
  description: 'Return the number of 1 bits in the binary representation of a positive integer.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'n = 11',
  timeComplexity: 'O(log n)',
  spaceComplexity: 'O(1)',
  pattern: 'Bit Count (Brian Kernighan)',
  hints: [
    'n & (n-1) removes the lowest set bit.',
    'Count how many times until n becomes 0.',
  ],
  code: `def hammingWeight(n):
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count`,
  steps: [
    { line: 1, label: 'Init', message: 'n=11 (binary: 1011). Count 1 bits.', viz: { array: { values: [1,0,1,1], labels: { 0: 'bit3', 3: 'bit0' } }, variables: { n: 11, count: 0 } } },
    { line: 3, label: 'Step 1', message: '11 & 10 = 1011 & 1010 = 1010 = 10. Removed lowest 1.', viz: { array: { values: [1,0,1,0], highlights: [3] }, variables: { n: 10, count: 1 } } },
    { line: 3, label: 'Step 2', message: '10 & 9 = 1010 & 1001 = 1000 = 8. Removed next 1.', viz: { array: { values: [1,0,0,0], highlights: [2] }, variables: { n: 8, count: 2 } } },
    { line: 3, label: 'Step 3', message: '8 & 7 = 1000 & 0111 = 0000 = 0. Removed last 1.', viz: { array: { values: [0,0,0,0], highlights: [0] }, variables: { n: 0, count: 3 } } },
    { line: 5, label: 'Done', message: 'n=0, loop ends. Found 3 set bits.', viz: { array: { values: [1,0,1,1], found: [0,2,3] }, variables: { count: 3 } } },
    { line: 5, label: 'Result', message: '11 (1011) has 3 one-bits.', isKeyMoment: true, viz: { array: { values: [1,0,1,1], found: [0,2,3] }, variables: { result: 3 } } },
  ],
};

const countingBits: Problem = {
  id: 'counting-bits',
  name: 'Counting Bits',
  number: 338,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/counting-bits/',
  description: 'For every number 0 to n, count the number of 1 bits.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'n = 5',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'DP with Bit Shift',
  hints: [
    'dp[i] = dp[i >> 1] + (i & 1).',
    'Number of bits in i = bits in i/2, plus 1 if i is odd.',
  ],
  code: `def countBits(n):
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp`,
  steps: [
    { line: 1, label: 'Init', message: 'dp[0]=0. Build up to n=5.', viz: { array: { values: [0,0,0,0,0,0], labels: { 0: 'dp[0]', 5: 'dp[5]' } }, variables: { n: 5 } } },
    { line: 3, label: 'i=1', message: 'dp[1]=dp[0]+(1&1)=0+1=1. Binary 1 has 1 bit.', viz: { array: { values: [0,1,0,0,0,0], highlights: [1] }, variables: { i: 1 } } },
    { line: 3, label: 'i=2', message: 'dp[2]=dp[1]+(2&1)=1+0=1. Binary 10 has 1 bit.', viz: { array: { values: [0,1,1,0,0,0], highlights: [2] }, variables: { i: 2 } } },
    { line: 3, label: 'i=3', message: 'dp[3]=dp[1]+(3&1)=1+1=2. Binary 11 has 2 bits.', viz: { array: { values: [0,1,1,2,0,0], highlights: [3] }, variables: { i: 3 } } },
    { line: 3, label: 'i=4,5', message: 'dp[4]=dp[2]+0=1. dp[5]=dp[2]+1=2.', viz: { array: { values: [0,1,1,2,1,2], highlights: [4,5] }, variables: { i: 5 } } },
    { line: 4, label: 'Result', message: 'Result: [0,1,1,2,1,2].', isKeyMoment: true, viz: { array: { values: [0,1,1,2,1,2], found: [0,1,2,3,4,5] }, variables: { result: '[0,1,1,2,1,2]' } } },
  ],
};

const reverseBits: Problem = {
  id: 'reverse-bits',
  name: 'Reverse Bits',
  number: 190,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/reverse-bits/',
  description: 'Reverse bits of a given 32-bit unsigned integer.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'n = 43261596',
  timeComplexity: 'O(1)',
  spaceComplexity: 'O(1)',
  pattern: 'Bit-by-Bit Reversal',
  hints: [
    'Extract each bit from right, place it from left.',
    'Use shift and OR to build the result.',
  ],
  code: `def reverseBits(n):
    res = 0
    for i in range(32):
        res = (res << 1) | (n & 1)
        n >>= 1
    return res`,
  steps: [
    { line: 1, label: 'Init', message: 'n=43261596 = 0000...10100100. res=0.', viz: { array: { values: [0,0,0,0,1,0,1,0], labels: { 0: 'MSB' } }, variables: { n: 43261596, res: 0 } } },
    { line: 3, label: 'Bit 0', message: 'Extract LSB of n (0). res=0. Shift n right.', viz: { array: { values: [0,0,0,0,0,0,0,0], highlights: [7] }, variables: { bit: 0, res: 0 } } },
    { line: 3, label: 'Bit 1', message: 'Extract LSB (0). res=0. Continue shifting.', viz: { array: { values: [0,0,0,0,0,0,0,0], highlights: [6] }, variables: { bit: 0, res: 0 } } },
    { line: 3, label: 'Bits 2-15', message: 'Process middle bits. Build reversed result.', viz: { array: { values: [0,0,1,0,0,1,0,1], highlights: [2,5,7] }, variables: { i: 15 } } },
    { line: 3, label: 'Bits 16-31', message: 'Process remaining bits. Complete reversal.', viz: { array: { values: [0,0,1,1,1,0,0,1], highlights: [2,3,4,7] }, variables: { i: 31 } } },
    { line: 5, label: 'Result', message: 'Reversed bits: 964176192.', isKeyMoment: true, viz: { array: { values: [0,0,1,1,1,0,0,1], found: [0,1,2,3,4,5,6,7] }, variables: { result: 964176192 } } },
  ],
};

const missingNumber: Problem = {
  id: 'missing-number',
  name: 'Missing Number',
  number: 268,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/missing-number/',
  description: 'Given array containing n distinct numbers in [0,n], find the missing one.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [3, 0, 1]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'XOR Trick',
  hints: [
    'XOR all numbers with all indices (0..n).',
    'Duplicates cancel, leaving the missing number.',
  ],
  code: `def missingNumber(nums):
    res = len(nums)
    for i, n in enumerate(nums):
        res ^= i ^ n
    return res`,
  steps: [
    { line: 1, label: 'Init', message: 'nums=[3,0,1], n=3. res=3 (start with n).', viz: { array: { values: [3,0,1] }, variables: { res: 3, n: 3 } } },
    { line: 3, label: 'i=0', message: 'res = 3 ^ 0 ^ 3 = 0. Index 0 and value 3 processed.', viz: { array: { values: [3,0,1], highlights: [0] }, variables: { res: 0 } } },
    { line: 3, label: 'i=1', message: 'res = 0 ^ 1 ^ 0 = 1. Index 1 and value 0 processed.', viz: { array: { values: [3,0,1], highlights: [1] }, variables: { res: 1 } } },
    { line: 3, label: 'i=2', message: 'res = 1 ^ 2 ^ 1 = 2. Index 2 and value 1 processed.', viz: { array: { values: [3,0,1], highlights: [2] }, variables: { res: 2 } } },
    { line: 4, label: 'Logic', message: 'XOR of {0,1,2,3} ^ {3,0,1} = 2. The 2 has no pair.', viz: { array: { values: [3,0,1], found: [0,1,2] }, variables: { res: 2 } } },
    { line: 4, label: 'Result', message: 'Missing number is 2.', isKeyMoment: true, viz: { array: { values: [3,0,1] }, variables: { result: 2 } } },
  ],
};

const sumOfTwoIntegers: Problem = {
  id: 'sum-of-two-integers',
  name: 'Sum of Two Integers',
  number: 371,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/sum-of-two-integers/',
  description: 'Calculate the sum of two integers without using + or -.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'a = 1, b = 2',
  timeComplexity: 'O(1)',
  spaceComplexity: 'O(1)',
  pattern: 'Bit Manipulation Add',
  hints: [
    'XOR gives sum without carry. AND + shift gives carry.',
    'Repeat until carry is 0.',
  ],
  code: `def getSum(a, b):
    mask = 0xFFFFFFFF
    while b & mask:
        carry = (a & b) << 1
        a = a ^ b
        b = carry
    return a if b == 0 else a & mask`,
  steps: [
    { line: 1, label: 'Init', message: 'a=1 (01), b=2 (10). Add without + operator.', viz: { array: { values: [0,1,1,0], labels: { 0: 'a=01', 2: 'b=10' } }, variables: { a: 1, b: 2 } } },
    { line: 3, label: 'XOR', message: 'a XOR b = 01 ^ 10 = 11 = 3. Sum without carry.', viz: { array: { values: [1,1], labels: { 0: 'XOR' } }, variables: { 'a^b': 3 } } },
    { line: 3, label: 'AND', message: '(a AND b) << 1 = (00) << 1 = 0. No carry.', viz: { array: { values: [0,0], labels: { 0: 'carry' } }, variables: { carry: 0 } } },
    { line: 4, label: 'Update', message: 'a=3, b=0. Carry is 0, loop ends.', viz: { array: { values: [1,1], labels: { 0: 'a=11' } }, variables: { a: 3, b: 0 } } },
    { line: 6, label: 'Done', message: 'No more carry bits to process.', viz: { array: { values: [1,1], found: [0,1] }, variables: { a: 3 } } },
    { line: 6, label: 'Result', message: '1 + 2 = 3 using only bit operations.', isKeyMoment: true, viz: { array: { values: [1,1], found: [0,1] }, variables: { result: 3 } } },
  ],
};

const reverseInteger: Problem = {
  id: 'reverse-integer',
  name: 'Reverse Integer',
  number: 7,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/reverse-integer/',
  description: 'Reverse digits of a 32-bit signed integer. Return 0 if overflow.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'x = 123',
  timeComplexity: 'O(log x)',
  spaceComplexity: 'O(1)',
  pattern: 'Digit Extraction',
  hints: [
    'Extract last digit with x % 10, build reversed number.',
    'Check for 32-bit overflow before each step.',
  ],
  code: `def reverse(x):
    res = 0
    sign = 1 if x >= 0 else -1
    x = abs(x)
    while x:
        res = res * 10 + x % 10
        x //= 10
    res *= sign
    return res if -2**31 <= res <= 2**31-1 else 0`,
  steps: [
    { line: 1, label: 'Init', message: 'x=123, sign=1, res=0.', viz: { array: { values: [1,2,3], labels: { 0: 'digits' } }, variables: { x: 123, res: 0 } } },
    { line: 5, label: 'Digit 3', message: 'x%10=3. res=0*10+3=3. x=12.', viz: { array: { values: [1,2,3], highlights: [2] }, variables: { res: 3, x: 12 } } },
    { line: 5, label: 'Digit 2', message: 'x%10=2. res=3*10+2=32. x=1.', viz: { array: { values: [1,2,3], highlights: [1] }, variables: { res: 32, x: 1 } } },
    { line: 5, label: 'Digit 1', message: 'x%10=1. res=32*10+1=321. x=0.', viz: { array: { values: [1,2,3], highlights: [0] }, variables: { res: 321, x: 0 } } },
    { line: 8, label: 'Overflow', message: '321 is within [-2^31, 2^31-1]. No overflow.', viz: { array: { values: [3,2,1], sorted: [0,1,2] }, variables: { res: 321 } } },
    { line: 8, label: 'Result', message: 'Reverse of 123 is 321.', isKeyMoment: true, viz: { array: { values: [3,2,1], found: [0,1,2] }, variables: { result: 321 } } },
  ],
};

export const bitManipulationProblems: Problem[] = [
  singleNumber,
  numberOfOneBits,
  countingBits,
  reverseBits,
  missingNumber,
  sumOfTwoIntegers,
  reverseInteger,
];
