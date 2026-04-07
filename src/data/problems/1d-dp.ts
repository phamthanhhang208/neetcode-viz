import type { Problem } from '../types';

const climbingStairs: Problem = {
  id: 'climbing-stairs',
  name: 'Climbing Stairs',
  number: 70,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/climbing-stairs/',
  description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'n = 5',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Fibonacci DP',
  hints: [
    'The number of ways to reach step i depends on the previous two steps.',
    'dp[i] = dp[i-1] + dp[i-2], just like Fibonacci.',
  ],
  code: `def climbStairs(n):
    dp = [0] * (n + 1)
    dp[0], dp[1] = 1, 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Climb n=5 stairs. dp[i] = number of ways to reach step i.',
      viz: {
        array: { values: [0, 0, 0, 0, 0, 0], labels: { 0: 'dp[0]', 5: 'dp[5]' } },
        variables: { n: 5 },
      },
    },
    {
      line: 2,
      label: 'Base Cases',
      message: 'dp[0]=1 (one way to stay), dp[1]=1 (one way to take 1 step).',
      viz: {
        array: { values: [1, 1, 0, 0, 0, 0], highlights: [0, 1] },
        variables: { n: 5, 'dp[0]': 1, 'dp[1]': 1 },
      },
    },
    {
      line: 4,
      label: 'dp[2]',
      message: 'dp[2] = dp[1] + dp[0] = 1 + 1 = 2. Two ways to reach step 2.',
      viz: {
        array: { values: [1, 1, 2, 0, 0, 0], highlights: [2], sorted: [0, 1] },
        variables: { i: 2, 'dp[i-1]': 1, 'dp[i-2]': 1, 'dp[2]': 2 },
      },
    },
    {
      line: 4,
      label: 'dp[3]',
      message: 'dp[3] = dp[2] + dp[1] = 2 + 1 = 3. Three ways to reach step 3.',
      viz: {
        array: { values: [1, 1, 2, 3, 0, 0], highlights: [3], sorted: [0, 1, 2] },
        variables: { i: 3, 'dp[i-1]': 2, 'dp[i-2]': 1, 'dp[3]': 3 },
      },
    },
    {
      line: 4,
      label: 'dp[4]',
      message: 'dp[4] = dp[3] + dp[2] = 3 + 2 = 5. Five ways to reach step 4.',
      viz: {
        array: { values: [1, 1, 2, 3, 5, 0], highlights: [4], sorted: [0, 1, 2, 3] },
        variables: { i: 4, 'dp[i-1]': 3, 'dp[i-2]': 2, 'dp[4]': 5 },
      },
    },
    {
      line: 5,
      label: 'Result',
      message: 'dp[5] = dp[4] + dp[3] = 5 + 3 = 8. There are 8 ways to climb 5 stairs.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 3, 5, 8], highlights: [5], sorted: [0, 1, 2, 3, 4] },
        variables: { i: 5, 'dp[5]': 8, result: 8 },
      },
    },
  ],
};

const minCostClimbingStairs: Problem = {
  id: 'min-cost-climbing-stairs',
  name: 'Min Cost Climbing Stairs',
  number: 746,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
  description: 'Given an integer array cost where cost[i] is the cost of the ith step, return the minimum cost to reach the top of the floor. You can start from step 0 or step 1.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'cost = [10, 15, 20]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Min Cost DP',
  hints: [
    'dp[i] = min cost to reach step i.',
    'dp[i] = min(dp[i-1], dp[i-2]) + cost[i].',
  ],
  code: `def minCostClimbingStairs(cost):
    dp = [0] * len(cost)
    dp[0], dp[1] = cost[0], cost[1]
    for i in range(2, len(cost)):
        dp[i] = min(dp[i-1], dp[i-2]) + cost[i]
    return min(dp[-1], dp[-2])`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'cost = [10, 15, 20]. Find minimum cost to reach the top.',
      viz: {
        array: { values: [10, 15, 20], labels: { 0: 'cost' } },
        variables: { cost: [10, 15, 20] },
      },
    },
    {
      line: 2,
      label: 'Base Cases',
      message: 'dp[0]=10, dp[1]=15. Cost to stand on step 0 or 1 is just their cost.',
      viz: {
        array: { values: [10, 15, 0], highlights: [0, 1] },
        variables: { 'dp[0]': 10, 'dp[1]': 15 },
      },
    },
    {
      line: 4,
      label: 'dp[2]',
      message: 'dp[2] = min(dp[1], dp[0]) + cost[2] = min(15, 10) + 20 = 30.',
      viz: {
        array: { values: [10, 15, 30], highlights: [2], sorted: [0, 1] },
        variables: { i: 2, 'dp[i-1]': 15, 'dp[i-2]': 10, min: 10, 'dp[2]': 30 },
      },
    },
    {
      line: 5,
      label: 'Choose End',
      message: 'We can step from dp[-1]=30 or dp[-2]=15 to the top. min(30, 15) = 15.',
      isKeyMoment: true,
      viz: {
        array: { values: [10, 15, 30], found: [1] },
        variables: { 'dp[-1]': 30, 'dp[-2]': 15, result: 15 },
      },
    },
    {
      line: 5,
      label: 'Verify',
      message: 'Optimal path: start at step 1 (cost 15), jump 2 steps to top. Total = 15.',
      viz: {
        array: { values: [10, 15, 30], found: [1] },
        variables: { result: 15, path: 'step1 -> top' },
      },
    },
    {
      line: 5,
      label: 'Done',
      message: 'Minimum cost to climb stairs is 15.',
      viz: {
        array: { values: [10, 15, 30], sorted: [0, 1, 2] },
        variables: { result: 15 },
      },
    },
  ],
};

const houseRobber: Problem = {
  id: 'house-robber',
  name: 'House Robber',
  number: 198,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/house-robber/',
  description: 'Given an array of non-negative integers representing the amount of money at each house, return the maximum amount you can rob without robbing two adjacent houses.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [1, 2, 3, 1]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Rob or Skip DP',
  hints: [
    'At each house decide: rob it + dp[i-2], or skip it and take dp[i-1].',
    'dp[i] = max(nums[i] + dp[i-2], dp[i-1]).',
  ],
  code: `def rob(nums):
    if len(nums) <= 2:
        return max(nums)
    dp = [0] * len(nums)
    dp[0], dp[1] = nums[0], max(nums[0], nums[1])
    for i in range(2, len(nums)):
        dp[i] = max(nums[i] + dp[i-2], dp[i-1])
    return dp[-1]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Houses have values [1, 2, 3, 1]. Cannot rob two adjacent houses.',
      viz: {
        array: { values: [1, 2, 3, 1], labels: { 0: 'nums' } },
        variables: { nums: [1, 2, 3, 1] },
      },
    },
    {
      line: 4,
      label: 'Base Cases',
      message: 'dp[0]=1 (rob house 0). dp[1]=max(1,2)=2 (best of first two).',
      viz: {
        array: { values: [1, 2, 0, 0], highlights: [0, 1] },
        variables: { 'dp[0]': 1, 'dp[1]': 2 },
      },
    },
    {
      line: 6,
      label: 'dp[2]',
      message: 'dp[2] = max(nums[2]+dp[0], dp[1]) = max(3+1, 2) = max(4, 2) = 4. Rob house 2.',
      viz: {
        array: { values: [1, 2, 4, 0], highlights: [2], sorted: [0, 1] },
        variables: { i: 2, rob: '3+1=4', skip: 2, 'dp[2]': 4 },
      },
    },
    {
      line: 6,
      label: 'dp[3]',
      message: 'dp[3] = max(nums[3]+dp[1], dp[2]) = max(1+2, 4) = max(3, 4) = 4. Skip house 3.',
      viz: {
        array: { values: [1, 2, 4, 4], highlights: [3], sorted: [0, 1, 2] },
        variables: { i: 3, rob: '1+2=3', skip: 4, 'dp[3]': 4 },
      },
    },
    {
      line: 7,
      label: 'Result',
      message: 'Maximum robbery is dp[3] = 4. Rob houses 0 and 2 (1 + 3 = 4).',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 2, 4, 4], found: [0, 2] },
        variables: { result: 4, robbed: 'house 0, house 2' },
      },
    },
    {
      line: 7,
      label: 'Done',
      message: 'Optimal strategy: rob house 0 ($1) and house 2 ($3) for total $4.',
      viz: {
        array: { values: [1, 2, 4, 4], sorted: [0, 1, 2, 3] },
        variables: { result: 4 },
      },
    },
  ],
};

const houseRobberII: Problem = {
  id: 'house-robber-ii',
  name: 'House Robber II',
  number: 213,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/house-robber-ii/',
  description: 'Houses are arranged in a circle. You cannot rob two adjacent houses. Return the maximum amount you can rob.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [2, 3, 2]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Circular Rob DP',
  hints: [
    'Since houses are circular, you can\'t rob both house 0 and house n-1.',
    'Run House Robber on nums[0..n-2] and nums[1..n-1], take the max.',
  ],
  code: `def rob(nums):
    if len(nums) == 1:
        return nums[0]
    def helper(arr):
        dp1, dp2 = 0, 0
        for n in arr:
            dp1, dp2 = dp2, max(dp2, dp1 + n)
        return dp2
    return max(helper(nums[:-1]), helper(nums[1:]))`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Circular houses [2, 3, 2]. House 0 and house 2 are adjacent (circle).',
      viz: {
        array: { values: [2, 3, 2], labels: { 0: 'nums' } },
        variables: { nums: [2, 3, 2] },
      },
    },
    {
      line: 8,
      label: 'Range 1',
      message: 'First run: rob from houses [0..1] = [2, 3]. Excludes last house.',
      viz: {
        array: { values: [2, 3, 2], highlights: [0, 1] },
        variables: { range1: '[2, 3]', dp1: 0, dp2: 0 },
      },
    },
    {
      line: 6,
      label: 'Range 1 Result',
      message: 'helper([2,3]): n=2 -> dp2=2; n=3 -> dp2=max(2,0+3)=3. Result = 3.',
      viz: {
        array: { values: [2, 3, 2], found: [1] },
        variables: { range1_result: 3, best: 'rob house 1' },
      },
    },
    {
      line: 8,
      label: 'Range 2',
      message: 'Second run: rob from houses [1..2] = [3, 2]. Excludes first house.',
      viz: {
        array: { values: [2, 3, 2], highlights: [1, 2] },
        variables: { range2: '[3, 2]', dp1: 0, dp2: 0 },
      },
    },
    {
      line: 6,
      label: 'Range 2 Result',
      message: 'helper([3,2]): n=3 -> dp2=3; n=2 -> dp2=max(3,0+2)=3. Result = 3.',
      viz: {
        array: { values: [2, 3, 2], found: [1] },
        variables: { range2_result: 3, best: 'rob house 1' },
      },
    },
    {
      line: 8,
      label: 'Result',
      message: 'max(3, 3) = 3. Rob house 1 ($3) for maximum profit.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 3, 2], found: [1] },
        variables: { result: 3, range1: 3, range2: 3 },
      },
    },
  ],
};

const longestPalindromicSubstring: Problem = {
  id: 'longest-palindromic-substring',
  name: 'Longest Palindromic Substring',
  number: 5,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/longest-palindromic-substring/',
  description: 'Given a string s, return the longest palindromic substring in s.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 's = "babad"',
  timeComplexity: 'O(n^2)',
  spaceComplexity: 'O(1)',
  pattern: 'Expand Around Center',
  hints: [
    'A palindrome mirrors around its center.',
    'Expand from each character (and between chars) as center.',
  ],
  code: `def longestPalindrome(s):
    res = ""
    for i in range(len(s)):
        for l, r in [(i, i), (i, i+1)]:
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if r - l + 1 > len(res):
                    res = s[l:r+1]
                l -= 1; r += 1
    return res`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 's = "babad". Find the longest palindromic substring by expanding around centers.',
      viz: {
        array: { values: ['b', 'a', 'b', 'a', 'd'] },
        variables: { s: 'babad', res: '' },
      },
    },
    {
      line: 3,
      label: 'Center i=0',
      message: 'Expand around center "b" at index 0. Palindrome: "b" (length 1).',
      viz: {
        array: { values: ['b', 'a', 'b', 'a', 'd'], highlights: [0] },
        variables: { i: 0, res: 'b', len: 1 },
      },
    },
    {
      line: 4,
      label: 'Center i=1',
      message: 'Expand around "a" at index 1. l=0,r=2: s[0]="b"==s[2]="b" -> "bab" (length 3).',
      viz: {
        array: { values: ['b', 'a', 'b', 'a', 'd'], highlights: [1], found: [0, 1, 2] },
        variables: { i: 1, l: 0, r: 2, res: 'bab', len: 3 },
      },
    },
    {
      line: 4,
      label: 'Center i=2',
      message: 'Expand around "b" at index 2. l=1,r=3: s[1]="a"==s[3]="a" -> "abad"? No, "abab"? Check: "aba" then expand to l=0,r=4: "b"!="d". Palindrome "aba" (length 3).',
      viz: {
        array: { values: ['b', 'a', 'b', 'a', 'd'], highlights: [2], found: [1, 2, 3] },
        variables: { i: 2, l: 1, r: 3, palindrome: 'aba', res: 'bab' },
      },
    },
    {
      line: 4,
      label: 'Center i=3',
      message: 'Expand around "a" at index 3. Only "a" (length 1). No improvement.',
      viz: {
        array: { values: ['b', 'a', 'b', 'a', 'd'], highlights: [3] },
        variables: { i: 3, palindrome: 'a', res: 'bab' },
      },
    },
    {
      line: 8,
      label: 'Result',
      message: 'Longest palindromic substring is "bab" (length 3). "aba" also valid.',
      isKeyMoment: true,
      viz: {
        array: { values: ['b', 'a', 'b', 'a', 'd'], found: [0, 1, 2] },
        variables: { result: 'bab', length: 3 },
      },
    },
  ],
};

const palindromicSubstrings: Problem = {
  id: 'palindromic-substrings',
  name: 'Palindromic Substrings',
  number: 647,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/palindromic-substrings/',
  description: 'Given a string s, return the number of palindromic substrings in it.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 's = "abc"',
  timeComplexity: 'O(n^2)',
  spaceComplexity: 'O(1)',
  pattern: 'Expand Around Center',
  hints: [
    'Every single character is a palindrome.',
    'Expand from each center and count all palindromes found.',
  ],
  code: `def countSubstrings(s):
    count = 0
    for i in range(len(s)):
        for l, r in [(i, i), (i, i+1)]:
            while l >= 0 and r < len(s) and s[l] == s[r]:
                count += 1
                l -= 1; r += 1
    return count`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 's = "abc". Count all palindromic substrings by expanding from each center.',
      viz: {
        array: { values: ['a', 'b', 'c'] },
        variables: { s: 'abc', count: 0 },
      },
    },
    {
      line: 3,
      label: 'Center i=0',
      message: 'Expand around "a". Palindrome found: "a". Count = 1.',
      viz: {
        array: { values: ['a', 'b', 'c'], highlights: [0] },
        variables: { i: 0, count: 1, found: 'a' },
      },
    },
    {
      line: 3,
      label: 'Center i=0 pair',
      message: 'Check between index 0-1: s[0]="a" != s[1]="b". No even-length palindrome.',
      viz: {
        array: { values: ['a', 'b', 'c'], comparing: [0, 1] },
        variables: { i: 0, count: 1, 'a==b?': false },
      },
    },
    {
      line: 3,
      label: 'Center i=1',
      message: 'Expand around "b". Palindrome: "b". Count = 2. Check "abc": a!=c, not palindrome.',
      viz: {
        array: { values: ['a', 'b', 'c'], highlights: [1] },
        variables: { i: 1, count: 2, found: 'b' },
      },
    },
    {
      line: 3,
      label: 'Center i=2',
      message: 'Expand around "c". Palindrome: "c". Count = 3. No even-length pair after.',
      viz: {
        array: { values: ['a', 'b', 'c'], highlights: [2] },
        variables: { i: 2, count: 3, found: 'c' },
      },
    },
    {
      line: 7,
      label: 'Result',
      message: 'Total palindromic substrings = 3. Each single character: "a", "b", "c".',
      isKeyMoment: true,
      viz: {
        array: { values: ['a', 'b', 'c'], found: [0, 1, 2] },
        variables: { result: 3, palindromes: ['a', 'b', 'c'] },
      },
    },
  ],
};


const decodeWays: Problem = {
  id: 'decode-ways',
  name: 'Decode Ways',
  number: 91,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/decode-ways/',
  description: 'Given a string s containing only digits, return the number of ways to decode it, where "1"→A, "2"→B, ..., "26"→Z.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 's = "226"',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: '1-D Dynamic Programming',
  hints: [
    'dp[i] represents the number of ways to decode s[0..i-1].',
    'A single digit (1-9) adds dp[i-1]. A two-digit number (10-26) adds dp[i-2].',
    'Zero can only be part of a two-digit decode (10 or 20).',
  ],
  code: `def numDecodings(s):
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1 if s[0] != '0' else 0
    for i in range(2, n + 1):
        if s[i-1] != '0':
            dp[i] += dp[i-1]
        two = int(s[i-2:i])
        if 10 <= two <= 26:
            dp[i] += dp[i-2]
    return dp[n]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Decode s="226". dp[i] = ways to decode first i chars. dp[0]=1 (empty), dp[1]=1 ("2"→B).',
      viz: {
        array: { values: [1, 1, 0, 0], labels: { 0: 'dp[0]', 1: 'dp[1]', 2: 'dp[2]', 3: 'dp[3]' }, highlights: [0, 1] },
        variables: { s: '226', i: '-' },
      },
    },
    {
      line: 6,
      label: 'i=2 single',
      message: 'i=2: s[1]="2"≠"0", so dp[2] += dp[1] = 1. Single-digit decode: "2"→B.',
      viz: {
        array: { values: [1, 1, 1, 0], highlights: [2] },
        variables: { i: 2, 's[1]': '2', dp_i: 1 },
      },
    },
    {
      line: 8,
      label: 'i=2 double',
      message: 'Two-digit "22" is between 10-26, so dp[2] += dp[0] = 1. Now dp[2]=2.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 0], highlights: [2], found: [0] },
        variables: { i: 2, two: 22, dp_i: 2 },
      },
    },
    {
      line: 6,
      label: 'i=3 single',
      message: 'i=3: s[2]="6"≠"0", so dp[3] += dp[2] = 2. Single-digit decode: "6"→F.',
      viz: {
        array: { values: [1, 1, 2, 2], highlights: [3] },
        variables: { i: 3, 's[2]': '6', dp_i: 2 },
      },
    },
    {
      line: 8,
      label: 'i=3 double',
      message: 'Two-digit "26" is between 10-26, so dp[3] += dp[1] = 1. Now dp[3]=3.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 3], highlights: [3], found: [1] },
        variables: { i: 3, two: 26, dp_i: 3 },
      },
    },
    {
      line: 11,
      label: 'Result',
      message: 'Return dp[3]=3. Decodings: "2,2,6"→BBF, "22,6"→VF, "2,26"→BZ.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 2, 3], found: [3] },
        variables: { result: 3, decodings: 'BBF, VF, BZ' },
      },
    },
  ],
};

const coinChange: Problem = {
  id: 'coin-change',
  name: 'Coin Change',
  number: 322,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/coin-change/',
  description: 'Given coins of different denominations and a total amount, return the fewest number of coins needed to make up that amount.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'coins = [1, 2, 5], amount = 11',
  timeComplexity: 'O(amount * len(coins))',
  spaceComplexity: 'O(amount)',
  pattern: '1-D Dynamic Programming',
  hints: [
    'dp[a] = minimum coins to make amount a.',
    'For each amount, try every coin and take the min.',
    'Initialize dp with infinity; dp[0] = 0.',
  ],
  code: `def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if a - c >= 0:
                dp[a] = min(dp[a], dp[a-c] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'coins=[1,2,5], amount=11. dp[0]=0, rest=inf. Build dp bottom-up.',
      viz: {
        array: { values: [0, 'inf', 'inf', 'inf', 'inf', 'inf', 'inf', 'inf', 'inf', 'inf', 'inf', 'inf'], highlights: [0] },
        variables: { coins: [1, 2, 5], amount: 11 },
      },
    },
    {
      line: 4,
      label: 'dp[1..2]',
      message: 'dp[1]=1 (one 1-coin), dp[2]=1 (one 2-coin, better than two 1-coins).',
      viz: {
        array: { values: [0, 1, 1, 'inf', 'inf', 'inf', 'inf', 'inf', 'inf', 'inf', 'inf', 'inf'], highlights: [1, 2] },
        variables: { 'dp[1]': 1, 'dp[2]': 1 },
      },
    },
    {
      line: 4,
      label: 'dp[3..5]',
      message: 'dp[3]=2 (1+2), dp[4]=2 (2+2), dp[5]=1 (one 5-coin!).',
      isKeyMoment: true,
      viz: {
        array: { values: [0, 1, 1, 2, 2, 1, 'inf', 'inf', 'inf', 'inf', 'inf', 'inf'], highlights: [3, 4, 5] },
        variables: { 'dp[5]': 1, reason: 'coin 5' },
      },
    },
    {
      line: 4,
      label: 'dp[6..8]',
      message: 'dp[6]=2 (1+5), dp[7]=2 (2+5), dp[8]=3 (1+2+5).',
      viz: {
        array: { values: [0, 1, 1, 2, 2, 1, 2, 2, 3, 'inf', 'inf', 'inf'], highlights: [6, 7, 8] },
        variables: { 'dp[6]': 2, 'dp[7]': 2, 'dp[8]': 3 },
      },
    },
    {
      line: 4,
      label: 'dp[9..10]',
      message: 'dp[9]=3 (2+2+5), dp[10]=2 (5+5).',
      viz: {
        array: { values: [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 'inf'], highlights: [9, 10] },
        variables: { 'dp[9]': 3, 'dp[10]': 2 },
      },
    },
    {
      line: 7,
      label: 'Result',
      message: 'dp[11]=3. Min coins for 11 = 3 (5+5+1). Return 3.',
      isKeyMoment: true,
      viz: {
        array: { values: [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3], found: [11] },
        variables: { result: 3, coins_used: '5+5+1' },
      },
    },
  ],
};

const maxProductSubarray: Problem = {
  id: 'maximum-product-subarray',
  name: 'Maximum Product Subarray',
  number: 152,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/maximum-product-subarray/',
  description: 'Given an integer array nums, find a contiguous subarray that has the largest product, and return the product.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [2, 3, -2, 4]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: '1-D Dynamic Programming',
  hints: [
    'A negative times a negative is positive, so track both min and max.',
    'At each element, curMax and curMin can swap when multiplied by a negative.',
    'Reset to nums[i] if starting fresh gives a better result.',
  ],
  code: `def maxProduct(nums):
    res = nums[0]
    curMin, curMax = 1, 1
    for n in nums:
        tmp = curMax * n
        curMax = max(n * curMax, n * curMin, n)
        curMin = min(tmp, n * curMin, n)
        res = max(res, curMax)
    return res`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'nums=[2,3,-2,4]. Track curMin=1, curMax=1, res=2.',
      viz: {
        array: { values: [2, 3, -2, 4] },
        variables: { curMin: 1, curMax: 1, res: 2 },
      },
    },
    {
      line: 4,
      label: 'n=2',
      message: 'n=2: curMax=max(2,2,2)=2, curMin=min(2,2,2)=2. res=2.',
      viz: {
        array: { values: [2, 3, -2, 4], highlights: [0] },
        variables: { n: 2, curMax: 2, curMin: 2, res: 2 },
      },
    },
    {
      line: 4,
      label: 'n=3',
      message: 'n=3: curMax=max(6,6,3)=6, curMin=min(6,6,3)=3. res=6.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 3, -2, 4], highlights: [1] },
        variables: { n: 3, curMax: 6, curMin: 3, res: 6 },
      },
    },
    {
      line: 4,
      label: 'n=-2',
      message: 'n=-2: curMax=max(-12,-6,-2)=-2, curMin=min(-12,-6,-2)=-12. Negative flips!',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 3, -2, 4], highlights: [2] },
        variables: { n: -2, curMax: -2, curMin: -12, res: 6 },
      },
    },
    {
      line: 4,
      label: 'n=4',
      message: 'n=4: curMax=max(-8,-48,4)=4, curMin=min(-8,-48,4)=-48. res stays 6.',
      viz: {
        array: { values: [2, 3, -2, 4], highlights: [3] },
        variables: { n: 4, curMax: 4, curMin: -48, res: 6 },
      },
    },
    {
      line: 8,
      label: 'Result',
      message: 'Return res=6. Max product subarray is [2,3] with product 6.',
      isKeyMoment: true,
      viz: {
        array: { values: [2, 3, -2, 4], found: [0, 1] },
        variables: { result: 6, subarray: '[2, 3]' },
      },
    },
  ],
};

const wordBreak: Problem = {
  id: 'word-break',
  name: 'Word Break',
  number: 139,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/word-break/',
  description: 'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of dictionary words.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 's = "leetcode", wordDict = ["leet", "code"]',
  timeComplexity: 'O(n^2)',
  spaceComplexity: 'O(n)',
  pattern: '1-D Dynamic Programming',
  hints: [
    'dp[i] = True if s[0..i-1] can be segmented using the dictionary.',
    'For each position i, check all words that could end at i.',
    'dp[0] = True (empty string). Check if dp[j] and s[j:i] in wordDict.',
  ],
  code: `def wordBreak(s, wordDict):
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for w in wordDict:
            if i >= len(w) and dp[i - len(w)]:
                if s[i - len(w):i] == w:
                    dp[i] = True
    return dp[len(s)]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 's="leetcode", wordDict=["leet","code"]. dp[0]=True, rest False.',
      viz: {
        array: { values: ['T', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F'], labels: { 0: '""', 4: '"leet"', 8: '"leetcode"' }, highlights: [0] },
        variables: { s: 'leetcode', wordDict: ['leet', 'code'] },
      },
    },
    {
      line: 4,
      label: 'i=1..3',
      message: 'i=1,2,3: No word in dict matches s[0:1], s[0:2], or s[0:3]. dp stays False.',
      viz: {
        array: { values: ['T', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F'], highlights: [1, 2, 3] },
        variables: { i: '1-3', status: 'no match' },
      },
    },
    {
      line: 4,
      label: 'i=4',
      message: 'i=4: dp[0]=True and s[0:4]="leet" is in dict! Set dp[4]=True.',
      isKeyMoment: true,
      viz: {
        array: { values: ['T', 'F', 'F', 'F', 'T', 'F', 'F', 'F', 'F'], highlights: [4], found: [0] },
        variables: { i: 4, word: 'leet', 'dp[0]': true },
      },
    },
    {
      line: 4,
      label: 'i=5..7',
      message: 'i=5,6,7: No valid segmentation found. dp stays False.',
      viz: {
        array: { values: ['T', 'F', 'F', 'F', 'T', 'F', 'F', 'F', 'F'], highlights: [5, 6, 7] },
        variables: { i: '5-7', status: 'no match' },
      },
    },
    {
      line: 4,
      label: 'i=8',
      message: 'i=8: dp[4]=True and s[4:8]="code" is in dict! Set dp[8]=True.',
      isKeyMoment: true,
      viz: {
        array: { values: ['T', 'F', 'F', 'F', 'T', 'F', 'F', 'F', 'T'], highlights: [8], found: [4] },
        variables: { i: 8, word: 'code', 'dp[4]': true },
      },
    },
    {
      line: 9,
      label: 'Result',
      message: 'dp[8]=True. "leetcode" can be segmented as "leet" + "code". Return True.',
      isKeyMoment: true,
      viz: {
        array: { values: ['T', 'F', 'F', 'F', 'T', 'F', 'F', 'F', 'T'], found: [0, 4, 8] },
        variables: { result: true, segmentation: 'leet | code' },
      },
    },
  ],
};

const longestIncreasingSubsequence: Problem = {
  id: 'longest-increasing-subsequence',
  name: 'Longest Increasing Subsequence',
  number: 300,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/longest-increasing-subsequence/',
  description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [10, 9, 2, 5, 3, 7, 101, 18]',
  timeComplexity: 'O(n^2)',
  spaceComplexity: 'O(n)',
  pattern: '1-D Dynamic Programming',
  hints: [
    'dp[i] = length of LIS ending at index i.',
    'For each i, check all j < i where nums[j] < nums[i].',
    'dp[i] = max(dp[j] + 1) for all valid j.',
  ],
  code: `def lengthOfLIS(nums):
    dp = [1] * len(nums)
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'nums=[10,9,2,5,3,7,101,18]. Initialize dp=[1,1,1,1,1,1,1,1] (each element is an LIS of length 1).',
      viz: {
        array: { values: [1, 1, 1, 1, 1, 1, 1, 1], labels: { 0: '10', 1: '9', 2: '2', 3: '5', 4: '3', 5: '7', 6: '101', 7: '18' } },
        variables: { nums: [10, 9, 2, 5, 3, 7, 101, 18] },
      },
    },
    {
      line: 3,
      label: 'i=3 (5)',
      message: 'nums[2]=2 < 5, so dp[3]=max(1, dp[2]+1)=2. LIS ending at 5: [2,5].',
      viz: {
        array: { values: [1, 1, 1, 2, 1, 1, 1, 1], highlights: [3], comparing: [2, 3] },
        variables: { i: 3, 'nums[i]': 5, 'dp[3]': 2 },
      },
    },
    {
      line: 3,
      label: 'i=4 (3)',
      message: 'nums[2]=2 < 3, so dp[4]=max(1, dp[2]+1)=2. LIS ending at 3: [2,3].',
      viz: {
        array: { values: [1, 1, 1, 2, 2, 1, 1, 1], highlights: [4], comparing: [2, 4] },
        variables: { i: 4, 'nums[i]': 3, 'dp[4]': 2 },
      },
    },
    {
      line: 3,
      label: 'i=5 (7)',
      message: '2<7 (dp=2), 5<7 (dp=3), 3<7 (dp=3). dp[5]=3. LIS: [2,5,7] or [2,3,7].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 1, 2, 2, 3, 1, 1], highlights: [5], comparing: [3, 5] },
        variables: { i: 5, 'nums[i]': 7, 'dp[5]': 3 },
      },
    },
    {
      line: 3,
      label: 'i=6 (101)',
      message: '101 > all previous. Best: dp[5]+1=4. LIS: [2,5,7,101] or [2,3,7,101].',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 1, 2, 2, 3, 4, 1], highlights: [6], comparing: [5, 6] },
        variables: { i: 6, 'nums[i]': 101, 'dp[6]': 4 },
      },
    },
    {
      line: 6,
      label: 'Result',
      message: 'i=7 (18): dp[7]=4 (e.g. [2,5,7,18]). max(dp)=4. Return 4.',
      isKeyMoment: true,
      viz: {
        array: { values: [1, 1, 1, 2, 2, 3, 4, 4], found: [6, 7] },
        variables: { result: 4, LIS: '[2,3,7,101] or [2,3,7,18]' },
      },
    },
  ],
};

const partitionEqualSubset: Problem = {
  id: 'partition-equal-subset-sum',
  name: 'Partition Equal Subset Sum',
  number: 416,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/partition-equal-subset-sum/',
  description: 'Given an integer array nums, return true if you can partition the array into two subsets such that the sum of elements in both subsets is equal.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [1, 5, 11, 5]',
  timeComplexity: 'O(n * target)',
  spaceComplexity: 'O(target)',
  pattern: '1-D Dynamic Programming',
  hints: [
    'Total sum must be even. Target = sum / 2.',
    'This is a 0/1 knapsack: can we pick a subset summing to target?',
    'dp[j] = True if sum j is achievable. Iterate nums, update dp right-to-left.',
  ],
  code: `def canPartition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for n in nums:
        for j in range(target, n - 1, -1):
            dp[j] = dp[j] or dp[j - n]
    return dp[target]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'nums=[1,5,11,5]. total=22, target=11. dp[0]=True, rest False.',
      viz: {
        array: { values: ['T', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F'], highlights: [0] },
        variables: { total: 22, target: 11, nums: [1, 5, 11, 5] },
      },
    },
    {
      line: 8,
      label: 'n=1',
      message: 'Process n=1. dp[1] = dp[1] or dp[0] = True. Can make sum 1.',
      viz: {
        array: { values: ['T', 'T', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F'], highlights: [1] },
        variables: { n: 1, reachable: '{0, 1}' },
      },
    },
    {
      line: 8,
      label: 'n=5',
      message: 'Process n=5. dp[6]=dp[1]=T, dp[5]=dp[0]=T. Reachable: {0,1,5,6}.',
      isKeyMoment: true,
      viz: {
        array: { values: ['T', 'T', 'F', 'F', 'F', 'T', 'T', 'F', 'F', 'F', 'F', 'F'], highlights: [5, 6] },
        variables: { n: 5, reachable: '{0, 1, 5, 6}' },
      },
    },
    {
      line: 8,
      label: 'n=11',
      message: 'Process n=11. dp[11]=dp[0]=T! Also fills sums from adding 11 to existing.',
      isKeyMoment: true,
      viz: {
        array: { values: ['T', 'T', 'F', 'F', 'F', 'T', 'T', 'F', 'F', 'F', 'F', 'T'], highlights: [11] },
        variables: { n: 11, 'dp[11]': true },
      },
    },
    {
      line: 8,
      label: 'n=5 (2nd)',
      message: 'Process n=5 again. dp[10]=dp[5]=T, dp[11] already T. More sums reachable.',
      viz: {
        array: { values: ['T', 'T', 'F', 'F', 'F', 'T', 'T', 'F', 'F', 'F', 'T', 'T'], highlights: [10, 11] },
        variables: { n: 5, reachable: '{0,1,5,6,10,11}' },
      },
    },
    {
      line: 10,
      label: 'Result',
      message: 'dp[11]=True. Partition: {11} and {1,5,5}. Both sum to 11. Return True.',
      isKeyMoment: true,
      viz: {
        array: { values: ['T', 'T', 'F', 'F', 'F', 'T', 'T', 'F', 'F', 'F', 'T', 'T'], found: [11] },
        variables: { result: true, partition: '{11} | {1, 5, 5}' },
      },
    },
  ],
};


export const oneDDPProblems: Problem[] = [climbingStairs, minCostClimbingStairs, houseRobber, houseRobberII, longestPalindromicSubstring, palindromicSubstrings, decodeWays, coinChange, maxProductSubarray, wordBreak, longestIncreasingSubsequence, partitionEqualSubset];
