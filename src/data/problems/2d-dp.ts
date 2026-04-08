import type { Problem } from '../types';

const uniquePaths: Problem = {
  id: 'unique-paths',
  name: 'Unique Paths',
  number: 62,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/unique-paths/',
  description: 'Given an m x n grid, find the number of unique paths from top-left to bottom-right. You can only move right or down.',
  vizTypes: ['dp-table'],
  language: 'python',
  testInput: 'm = 3, n = 3',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'Grid DP',
  hints: ['Each cell can only be reached from above or from the left.', 'dp[r][c] = dp[r-1][c] + dp[r][c-1].'],
  code: `def uniquePaths(m, n):
    dp = [[1]*n for _ in range(m)]
    for r in range(1, m):
        for c in range(1, n):
            dp[r][c] = dp[r-1][c] + dp[r][c-1]
    return dp[m-1][n-1]`,
  steps: [
    {
      line: 1, label: 'Init', message: '3x3 grid. First row and column are all 1 (only one path along edges).',
      viz: { dpTable: { values: [[1,1,1],[1,0,0],[1,0,0]], current: [0,0], labels: { rows: ['r0','r1','r2'], cols: ['c0','c1','c2'] } } },
    },
    {
      line: 4, label: 'dp[1][1]', message: 'dp[1][1] = dp[0][1] + dp[1][0] = 1 + 1 = 2.',
      viz: { dpTable: { values: [[1,1,1],[1,2,0],[1,0,0]], current: [1,1], dependencies: [[0,1],[1,0]] } },
    },
    {
      line: 4, label: 'dp[1][2]', message: 'dp[1][2] = dp[0][2] + dp[1][1] = 1 + 2 = 3.',
      viz: { dpTable: { values: [[1,1,1],[1,2,3],[1,0,0]], current: [1,2], dependencies: [[0,2],[1,1]] } },
    },
    {
      line: 4, label: 'dp[2][1]', message: 'dp[2][1] = dp[1][1] + dp[2][0] = 2 + 1 = 3.',
      viz: { dpTable: { values: [[1,1,1],[1,2,3],[1,3,0]], current: [2,1], dependencies: [[1,1],[2,0]] } },
    },
    {
      line: 4, label: 'dp[2][2]', message: 'dp[2][2] = dp[1][2] + dp[2][1] = 3 + 3 = 6.',
      viz: { dpTable: { values: [[1,1,1],[1,2,3],[1,3,6]], current: [2,2], dependencies: [[1,2],[2,1]] } },
    },
    {
      line: 5, label: 'Result', message: '6 unique paths from top-left to bottom-right.', isKeyMoment: true,
      viz: { dpTable: { values: [[1,1,1],[1,2,3],[1,3,6]], current: [2,2] }, variables: { result: 6 } },
    },
  ],
};

const longestCommonSubsequence: Problem = {
  id: 'longest-common-subsequence',
  name: 'Longest Common Subsequence',
  number: 1143,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/longest-common-subsequence/',
  description: 'Given two strings, return the length of their longest common subsequence.',
  vizTypes: ['dp-table'],
  language: 'python',
  testInput: 'text1 = "abcde", text2 = "ace"',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: '2D String Match DP',
  hints: ['If characters match, extend the diagonal.', 'If not, take the max of skipping either character.'],
  code: `def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]`,
  steps: [
    {
      line: 2, label: 'Init', message: 'Compare "abcde" and "ace". Build (6x4) DP table with 0s.',
      viz: { dpTable: { values: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], labels: { rows: ['','a','b','c','d','e'], cols: ['','a','c','e'] } } },
    },
    {
      line: 6, label: 'Match a=a', message: 'text1[0]=a matches text2[0]=a. dp[1][1] = dp[0][0]+1 = 1.',
      viz: { dpTable: { values: [[0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], current: [1,1], dependencies: [[0,0]], labels: { rows: ['','a','b','c','d','e'], cols: ['','a','c','e'] } } },
    },
    {
      line: 8, label: 'Row b', message: 'b does not match a,c,e. Carry forward max from neighbors. dp[2][1..3] = [1,1,1].',
      viz: { dpTable: { values: [[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]], current: [2,1], labels: { rows: ['','a','b','c','d','e'], cols: ['','a','c','e'] } } },
    },
    {
      line: 6, label: 'Match c=c', message: 'text1[2]=c matches text2[1]=c. dp[3][2] = dp[2][1]+1 = 2.',
      viz: { dpTable: { values: [[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,2,2],[0,0,0,0],[0,0,0,0]], current: [3,2], dependencies: [[2,1]], labels: { rows: ['','a','b','c','d','e'], cols: ['','a','c','e'] } } },
    },
    {
      line: 6, label: 'Match e=e', message: 'text1[4]=e matches text2[2]=e. dp[5][3] = dp[4][2]+1 = 3.',
      viz: { dpTable: { values: [[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,2,2],[0,1,2,2],[0,1,2,3]], current: [5,3], dependencies: [[4,2]], labels: { rows: ['','a','b','c','d','e'], cols: ['','a','c','e'] } } },
    },
    {
      line: 9, label: 'Result', message: 'LCS length = 3. The subsequence is "ace".', isKeyMoment: true,
      viz: { dpTable: { values: [[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,2,2],[0,1,2,2],[0,1,2,3]], current: [5,3] }, variables: { result: 3, lcs: 'ace' } },
    },
  ],
};

const bestTimeBuySellCooldown: Problem = {
  id: 'best-time-to-buy-sell-stock-cooldown',
  name: 'Best Time to Buy and Sell Stock with Cooldown',
  number: 309,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
  description: 'Find max profit with cooldown: after selling, you must wait one day before buying again.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'prices = [1, 2, 3, 0, 2]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'State Machine DP',
  hints: ['Track three states: hold, sold, rest.', 'hold = max(hold, rest-price), sold = hold+price, rest = max(rest, sold).'],
  code: `def maxProfit(prices):
    hold, sold, rest = -prices[0], 0, 0
    for p in prices[1:]:
        h, s, r = hold, sold, rest
        hold = max(h, r - p)
        sold = h + p
        rest = max(r, s)
    return max(sold, rest)`,
  steps: [
    {
      line: 1, label: 'Init', message: 'prices=[1,2,3,0,2]. States: hold=-1 (bought day0), sold=0, rest=0.',
      viz: { array: { values: [1,2,3,0,2], highlights: [0], labels: { 0: 'prices' } }, variables: { hold: -1, sold: 0, rest: 0 } },
    },
    {
      line: 4, label: 'Day 1 (p=2)', message: 'hold=max(-1, 0-2)=-1 (keep). sold=-1+2=1 (sell). rest=max(0,0)=0.',
      viz: { array: { values: [1,2,3,0,2], highlights: [1] }, variables: { hold: -1, sold: 1, rest: 0 } },
    },
    {
      line: 4, label: 'Day 2 (p=3)', message: 'hold=max(-1, 0-3)=-1. sold=-1+3=2 (sell for profit 2). rest=max(0,1)=1.',
      viz: { array: { values: [1,2,3,0,2], highlights: [2] }, variables: { hold: -1, sold: 2, rest: 1 } },
    },
    {
      line: 4, label: 'Day 3 (p=0)', message: 'hold=max(-1, 1-0)=1 (buy at 0 after cooldown!). sold=-1+0=-1. rest=max(1,2)=2.',
      viz: { array: { values: [1,2,3,0,2], highlights: [3] }, variables: { hold: 1, sold: -1, rest: 2 } },
    },
    {
      line: 4, label: 'Day 4 (p=2)', message: 'hold=max(1, 2-2)=1. sold=1+2=3 (sell for total 3). rest=max(2,-1)=2.',
      viz: { array: { values: [1,2,3,0,2], highlights: [4] }, variables: { hold: 1, sold: 3, rest: 2 } },
    },
    {
      line: 7, label: 'Result', message: 'max(sold=3, rest=2) = 3. Buy@1, sell@3, cooldown, buy@0, sell@2.', isKeyMoment: true,
      viz: { array: { values: [1,2,3,0,2], found: [0,2,3,4] }, variables: { result: 3, trades: 'buy@1,sell@3,buy@0,sell@2' } },
    },
  ],
};

const coinChangeII: Problem = {
  id: 'coin-change-ii',
  name: 'Coin Change II',
  number: 518,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/coin-change-ii/',
  description: 'Return the number of combinations that make up the given amount using the given coin denominations.',
  vizTypes: ['dp-table'],
  language: 'python',
  testInput: 'amount = 5, coins = [1, 2, 5]',
  timeComplexity: 'O(n * amount)',
  spaceComplexity: 'O(n * amount)',
  pattern: 'Unbounded Knapsack DP',
  hints: ['Process one coin at a time to avoid counting permutations.', 'dp[i][a] = ways using first i coins to make amount a.'],
  code: `def change(amount, coins):
    dp = [[0]*(amount+1) for _ in range(len(coins)+1)]
    for i in range(len(coins)+1): dp[i][0] = 1
    for i in range(1, len(coins)+1):
        for a in range(1, amount+1):
            dp[i][a] = dp[i-1][a]
            if coins[i-1] <= a:
                dp[i][a] += dp[i][a-coins[i-1]]
    return dp[-1][-1]`,
  steps: [
    {
      line: 2, label: 'Init', message: 'amount=5, coins=[1,2,5]. dp[i][0]=1 for all i (one way to make 0).',
      viz: { dpTable: { values: [[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0]], labels: { rows: ['none','1','2','5'], cols: ['0','1','2','3','4','5'] } } },
    },
    {
      line: 5, label: 'Coin 1', message: 'Using coin=1 only: exactly 1 way to make every amount. Row filled with 1s.',
      viz: { dpTable: { values: [[1,0,0,0,0,0],[1,1,1,1,1,1],[1,0,0,0,0,0],[1,0,0,0,0,0]], current: [1,5], labels: { rows: ['none','1','2','5'], cols: ['0','1','2','3','4','5'] } } },
    },
    {
      line: 5, label: 'Coin 2, a=1..2', message: 'coin=2: dp[2][1]=dp[1][1]=1. dp[2][2]=dp[1][2]+dp[2][0]=1+1=2.',
      viz: { dpTable: { values: [[1,0,0,0,0,0],[1,1,1,1,1,1],[1,1,2,0,0,0],[1,0,0,0,0,0]], current: [2,2], dependencies: [[1,2],[2,0]], labels: { rows: ['none','1','2','5'], cols: ['0','1','2','3','4','5'] } } },
    },
    {
      line: 5, label: 'Coin 2 done', message: 'Coins {1,2}: amounts 3->2, 4->3, 5->3 ways.',
      viz: { dpTable: { values: [[1,0,0,0,0,0],[1,1,1,1,1,1],[1,1,2,2,3,3],[1,0,0,0,0,0]], current: [2,5], labels: { rows: ['none','1','2','5'], cols: ['0','1','2','3','4','5'] } } },
    },
    {
      line: 7, label: 'Coin 5', message: 'coin=5: dp[3][5]=dp[2][5]+dp[3][0]=3+1=4. Only amount>=5 changes.',
      viz: { dpTable: { values: [[1,0,0,0,0,0],[1,1,1,1,1,1],[1,1,2,2,3,3],[1,1,2,2,3,4]], current: [3,5], dependencies: [[2,5],[3,0]], labels: { rows: ['none','1','2','5'], cols: ['0','1','2','3','4','5'] } } },
    },
    {
      line: 8, label: 'Result', message: '4 combinations: {1x5}, {1+1+1+1+1}, {1+1+1+2}, {1+2+2}.', isKeyMoment: true,
      viz: { dpTable: { values: [[1,0,0,0,0,0],[1,1,1,1,1,1],[1,1,2,2,3,3],[1,1,2,2,3,4]], current: [3,5] }, variables: { result: 4 } },
    },
  ],
};

const targetSum: Problem = {
  id: 'target-sum',
  name: 'Target Sum',
  number: 494,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/target-sum/',
  description: 'Assign + or - to each number to achieve the target sum. Return the count of ways.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [1, 1, 1, 1, 1], target = 3',
  timeComplexity: 'O(n * totalSum)',
  spaceComplexity: 'O(totalSum)',
  pattern: 'Subset Sum / Count DP',
  hints: ['Convert to subset sum: find subset P where sum(P) = (target+total)/2.', 'Use a hashmap/dict of {sum: count} at each step.'],
  code: `def findTargetSumWays(nums, target):
    dp = {0: 1}
    for n in nums:
        nxt = {}
        for s, cnt in dp.items():
            nxt[s+n] = nxt.get(s+n, 0) + cnt
            nxt[s-n] = nxt.get(s-n, 0) + cnt
        dp = nxt
    return dp.get(target, 0)`,
  steps: [
    {
      line: 1, label: 'Init', message: 'nums=[1,1,1,1,1], target=3. Start with dp={0:1}.',
      viz: { array: { values: [1,1,1,1,1], labels: { 0: 'nums' } }, variables: { dp: '{0:1}', target: 3 } },
    },
    {
      line: 3, label: 'Process nums[0]=1', message: '+1 or -1. dp = {1:1, -1:1}.',
      viz: { array: { values: [1,1,1,1,1], highlights: [0] }, variables: { dp: '{1:1, -1:1}' } },
    },
    {
      line: 3, label: 'Process nums[1]=1', message: 'From 1: 2,0. From -1: 0,-2. dp={2:1, 0:2, -2:1}.',
      viz: { array: { values: [1,1,1,1,1], highlights: [1] }, variables: { dp: '{2:1, 0:2, -2:1}' } },
    },
    {
      line: 3, label: 'Process nums[2]=1', message: 'dp={3:1, 1:3, -1:3, -3:1}. Sums spread out symmetrically.',
      viz: { array: { values: [1,1,1,1,1], highlights: [2] }, variables: { dp: '{3:1, 1:3, -1:3, -3:1}' } },
    },
    {
      line: 3, label: 'Process nums[3]=1', message: 'dp={4:1, 2:4, 0:6, -2:4, -4:1}.',
      viz: { array: { values: [1,1,1,1,1], highlights: [3] }, variables: { dp: '{4:1, 2:4, 0:6, -2:4, -4:1}' } },
    },
    {
      line: 8, label: 'Result', message: 'After nums[4]: dp[3]=5. There are 5 ways to assign +/- to reach 3.', isKeyMoment: true,
      viz: { array: { values: [1,1,1,1,1], found: [0,1,2,3,4] }, variables: { 'dp[3]': 5, result: 5 } },
    },
  ],
};

const interleavingString: Problem = {
  id: 'interleaving-string',
  name: 'Interleaving String',
  number: 97,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/interleaving-string/',
  description: 'Given s1, s2, s3, determine if s3 is formed by interleaving s1 and s2.',
  vizTypes: ['dp-table'],
  language: 'python',
  testInput: 's1 = "aab", s2 = "axy", s3 = "aaxaby"',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: '2D Boolean DP',
  hints: ['dp[i][j] = can s1[:i] and s2[:j] interleave to form s3[:i+j]?', 'Check if current char of s3 matches s1 or s2 and the predecessor is True.'],
  code: `def isInterleave(s1, s2, s3):
    m, n = len(s1), len(s2)
    if m + n != len(s3): return False
    dp = [[False]*(n+1) for _ in range(m+1)]
    dp[0][0] = True
    for i in range(1, m+1): dp[i][0] = dp[i-1][0] and s1[i-1]==s3[i-1]
    for j in range(1, n+1): dp[0][j] = dp[0][j-1] and s2[j-1]==s3[j-1]
    for i in range(1, m+1):
        for j in range(1, n+1):
            dp[i][j] = (dp[i-1][j] and s1[i-1]==s3[i+j-1]) or (dp[i][j-1] and s2[j-1]==s3[i+j-1])
    return dp[m][n]`,
  steps: [
    {
      line: 4, label: 'Init', message: 's1="aab", s2="axy", s3="aaxaby". Build 4x4 bool table. dp[0][0]=T.',
      viz: { dpTable: { values: [['T','F','F','F'],['F','F','F','F'],['F','F','F','F'],['F','F','F','F']], current: [0,0], labels: { rows: ['','a','a','b'], cols: ['','a','x','y'] } } },
    },
    {
      line: 5, label: 'Edges', message: 'Fill first row/col. dp[1][0]=T (s1[0]=a=s3[0]). dp[2][0]=T. dp[0][1]=T (s2[0]=a=s3[0]).',
      viz: { dpTable: { values: [['T','T','F','F'],['T','F','F','F'],['T','F','F','F'],['F','F','F','F']], labels: { rows: ['','a','a','b'], cols: ['','a','x','y'] } } },
    },
    {
      line: 9, label: 'dp[1][1]', message: 's3[1]=a. From top: dp[0][1]=T and s1[0]=a=s3[1]? Yes. dp[1][1]=T.',
      viz: { dpTable: { values: [['T','T','F','F'],['T','T','F','F'],['T','F','F','F'],['F','F','F','F']], current: [1,1], dependencies: [[0,1]] } },
    },
    {
      line: 9, label: 'dp[1][2],dp[2][1]', message: 'dp[1][2]: s3[2]=x, left dp[1][1]=T, s2[1]=x=s3[2]. T. dp[2][1]: s3[2]=x, top dp[1][1]=T, s1[1]=a!=x. Left dp[2][0]=T, s2[0]=a=s3[2]? No. F.',
      viz: { dpTable: { values: [['T','T','F','F'],['T','T','T','F'],['T','F','F','F'],['F','F','F','F']], current: [1,2] } },
    },
    {
      line: 9, label: 'Fill rest', message: 'Continue filling. dp[2][2]=T, dp[3][2]=T, dp[3][3]=T. Path found through table.',
      viz: { dpTable: { values: [['T','T','F','F'],['T','T','T','F'],['T','F','T','F'],['F','F','T','T']], current: [3,3], labels: { rows: ['','a','a','b'], cols: ['','a','x','y'] } } },
    },
    {
      line: 10, label: 'Result', message: 'dp[3][3]=True. "aaxaby" is a valid interleaving of "aab" and "axy".', isKeyMoment: true,
      viz: { dpTable: { values: [['T','T','F','F'],['T','T','T','F'],['T','F','T','F'],['F','F','T','T']], current: [3,3] }, variables: { result: true } },
    },
  ],
};


const longestIncreasingPath: Problem = {
  id: 'longest-increasing-path-in-matrix',
  name: 'Longest Increasing Path in Matrix',
  number: 329,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/longest-increasing-path-in-matrix/',
  description: 'Given an m x n integer matrix, return the length of the longest increasing path. You can move in four directions.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'DFS + Memoization on Matrix',
  hints: ['Each cell\'s result depends only on strictly smaller neighbors -- no cycles.', 'Memoize DFS results so each cell is computed at most once.'],
  code: `def longestIncreasingPath(matrix):
    m, n = len(matrix), len(matrix[0])
    memo = {}
    def dfs(r, c):
        if (r,c) in memo: return memo[(r,c)]
        best = 1
        for dr,dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<m and 0<=nc<n and matrix[nr][nc]>matrix[r][c]:
                best = max(best, 1+dfs(nr,nc))
        memo[(r,c)] = best
        return best
    return max(dfs(r,c) for r in range(m) for c in range(n))`,
  steps: [
    {
      line: 1, label: 'Init', message: 'Matrix [[9,9,4],[6,6,8],[2,1,1]]. Find longest strictly increasing path via DFS+memo.',
      viz: { matrix: { values: [[9,9,4],[6,6,8],[2,1,1]] } },
    },
    {
      line: 4, label: 'DFS(2,1)=1', message: 'Start at cell (2,1)=1. No smaller neighbors to come from; this is a valley. memo[(2,1)]=1.',
      viz: { matrix: { values: [[9,9,4],[6,6,8],[2,1,1]], current: [2,1], highlights: [[2,1]] } },
    },
    {
      line: 9, label: 'DFS(2,0)=2', message: 'Cell (2,0)=2. Neighbor (2,1)=1 is smaller so not valid going up. Neighbor (1,0)=6 > 2, so dfs(1,0). Path: 2->6. memo[(2,0)]=2.',
      viz: { matrix: { values: [[9,9,4],[6,6,8],[2,1,1]], current: [2,0], path: [[2,0],[1,0]], highlights: [[2,0],[1,0]] } },
    },
    {
      line: 9, label: 'DFS(1,0)=3', message: 'Cell (1,0)=6. Can go to (0,0)=9 > 6. dfs(0,0)=1 (9 is a peak). Path: 6->9. memo[(1,0)]=2, chain 2->6->9 = 3.',
      viz: { matrix: { values: [[9,9,4],[6,6,8],[2,1,1]], current: [1,0], path: [[2,0],[1,0],[0,0]], highlights: [[2,0],[1,0],[0,0]] } },
    },
    {
      line: 9, label: 'Best path found', message: 'Exploring all cells, the longest path is 1->2->6->9 with length 4.',
      viz: { matrix: { values: [[9,9,4],[6,6,8],[2,1,1]], path: [[2,1],[2,0],[1,0],[0,0]], highlights: [[2,1],[2,0],[1,0],[0,0]] } },
    },
    {
      line: 12, label: 'Result', message: 'Longest increasing path = 4. Path: 1(2,1)->2(2,0)->6(1,0)->9(0,0).', isKeyMoment: true,
      viz: { matrix: { values: [[9,9,4],[6,6,8],[2,1,1]], path: [[2,1],[2,0],[1,0],[0,0]] }, variables: { result: 4, path: '1->2->6->9' } },
    },
  ],
};

const distinctSubsequences: Problem = {
  id: 'distinct-subsequences',
  name: 'Distinct Subsequences',
  number: 115,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/distinct-subsequences/',
  description: 'Given strings s and t, return the number of distinct subsequences of s which equals t.',
  vizTypes: ['dp-table'],
  language: 'python',
  testInput: 's = "rabbbit", t = "rabbit"',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: '2D Subsequence Count DP',
  hints: ['dp[i][j] = ways to form t[:j] from s[:i].', 'If s[i-1]==t[j-1], we can match it or skip it: dp[i-1][j-1] + dp[i-1][j].'],
  code: `def numDistinct(s, t):
    m, n = len(s), len(t)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = 1
    for i in range(1, m+1):
        for j in range(1, n+1):
            dp[i][j] = dp[i-1][j]
            if s[i-1] == t[j-1]:
                dp[i][j] += dp[i-1][j-1]
    return dp[m][n]`,
  steps: [
    {
      line: 3, label: 'Init', message: 's="rabbbit", t="rabbit". Build 8x7 DP table. dp[i][0]=1 (empty t matched by empty subseq).',
      viz: { dpTable: { values: [[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0]], labels: { rows: ['','r','a','b','b','b','i','t'], cols: ['','r','a','b','b','i','t'] } } },
    },
    {
      line: 7, label: 'Row r,a', message: 'i=1: s[0]=r=t[0]=r, dp[1][1]=dp[0][0]+dp[0][1]=1. i=2: s[1]=a=t[1]=a, dp[2][2]=1.',
      viz: { dpTable: { values: [[1,0,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0]], current: [2,2], labels: { rows: ['','r','a','b','b','b','i','t'], cols: ['','r','a','b','b','i','t'] } } },
    },
    {
      line: 8, label: 'Rows b,b,b', message: 'Three b\'s in s match two b\'s in t. dp[5][4]=3 -- three ways to pick 2 b\'s from 3.',
      viz: { dpTable: { values: [[1,0,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,1,0,0,0],[1,1,1,2,1,0,0],[1,1,1,3,3,0,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0]], current: [5,4], dependencies: [[4,3],[4,4]], labels: { rows: ['','r','a','b','b','b','i','t'], cols: ['','r','a','b','b','i','t'] } } },
    },
    {
      line: 8, label: 'Row i', message: 's[5]=i=t[4]=i. dp[6][5]=dp[5][4]+dp[5][5]=3+0=3.',
      viz: { dpTable: { values: [[1,0,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,1,0,0,0],[1,1,1,2,1,0,0],[1,1,1,3,3,0,0],[1,1,1,3,3,3,0],[1,0,0,0,0,0,0]], current: [6,5], dependencies: [[5,4],[5,5]], labels: { rows: ['','r','a','b','b','b','i','t'], cols: ['','r','a','b','b','i','t'] } } },
    },
    {
      line: 8, label: 'Row t', message: 's[6]=t=t[5]=t. dp[7][6]=dp[6][5]+dp[6][6]=3+0=3.',
      viz: { dpTable: { values: [[1,0,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,1,0,0,0],[1,1,1,2,1,0,0],[1,1,1,3,3,0,0],[1,1,1,3,3,3,0],[1,1,1,3,3,3,3]], current: [7,6], dependencies: [[6,5],[6,6]], labels: { rows: ['','r','a','b','b','b','i','t'], cols: ['','r','a','b','b','i','t'] } } },
    },
    {
      line: 9, label: 'Result', message: '3 distinct subsequences of "rabbbit" equal "rabbit" (choosing each of the 3 b\'s to skip).', isKeyMoment: true,
      viz: { dpTable: { values: [[1,0,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,1,0,0,0],[1,1,1,2,1,0,0],[1,1,1,3,3,0,0],[1,1,1,3,3,3,0],[1,1,1,3,3,3,3]], current: [7,6] }, variables: { result: 3 } },
    },
  ],
};

const editDistance: Problem = {
  id: 'edit-distance',
  name: 'Edit Distance',
  number: 72,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/edit-distance/',
  description: 'Given two strings word1 and word2, return the minimum number of operations (insert, delete, replace) to convert word1 into word2.',
  vizTypes: ['dp-table'],
  language: 'python',
  testInput: 'word1 = "horse", word2 = "ros"',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'Edit Distance DP',
  hints: ['dp[i][j] = min ops to convert word1[:i] to word2[:j].', 'If chars match, dp[i][j]=dp[i-1][j-1]. Otherwise min(insert, delete, replace)+1.'],
  code: `def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = i
    for j in range(n+1): dp[0][j] = j
    for i in range(1, m+1):
        for j in range(1, n+1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[m][n]`,
  steps: [
    {
      line: 3, label: 'Init', message: 'word1="horse", word2="ros". Fill base cases: dp[i][0]=i, dp[0][j]=j.',
      viz: { dpTable: { values: [[0,1,2,3],[1,0,0,0],[2,0,0,0],[3,0,0,0],[4,0,0,0],[5,0,0,0]], labels: { rows: ['','h','o','r','s','e'], cols: ['','r','o','s'] } } },
    },
    {
      line: 7, label: 'dp[1][1]', message: 'h!=r. min(dp[0][1], dp[1][0], dp[0][0])+1 = min(1,1,0)+1 = 1 (replace h->r).',
      viz: { dpTable: { values: [[0,1,2,3],[1,1,0,0],[2,0,0,0],[3,0,0,0],[4,0,0,0],[5,0,0,0]], current: [1,1], dependencies: [[0,0],[0,1],[1,0]], labels: { rows: ['','h','o','r','s','e'], cols: ['','r','o','s'] } } },
    },
    {
      line: 8, label: 'dp[2][2]', message: 'o==o. dp[2][2]=dp[1][1]=1. Characters match, no extra cost.',
      viz: { dpTable: { values: [[0,1,2,3],[1,1,2,3],[2,1,1,0],[3,0,0,0],[4,0,0,0],[5,0,0,0]], current: [2,2], dependencies: [[1,1]], labels: { rows: ['','h','o','r','s','e'], cols: ['','r','o','s'] } } },
    },
    {
      line: 8, label: 'dp[3][1]', message: 'r==r. dp[3][1]=dp[2][0]=2. Match! But we still need 2 ops for prior chars.',
      viz: { dpTable: { values: [[0,1,2,3],[1,1,2,3],[2,1,1,2],[3,2,2,0],[4,0,0,0],[5,0,0,0]], current: [3,1], dependencies: [[2,0]], labels: { rows: ['','h','o','r','s','e'], cols: ['','r','o','s'] } } },
    },
    {
      line: 10, label: 'Fill rest', message: 'Complete the table. dp[4][3]=2, dp[5][3]=3 after processing s and e.',
      viz: { dpTable: { values: [[0,1,2,3],[1,1,2,3],[2,1,1,2],[3,2,2,2],[4,3,3,2],[5,4,4,3]], current: [5,3], labels: { rows: ['','h','o','r','s','e'], cols: ['','r','o','s'] } } },
    },
    {
      line: 11, label: 'Result', message: 'Edit distance = 3. Ops: replace h->r, remove r, remove e.', isKeyMoment: true,
      viz: { dpTable: { values: [[0,1,2,3],[1,1,2,3],[2,1,1,2],[3,2,2,2],[4,3,3,2],[5,4,4,3]], current: [5,3] }, variables: { result: 3, ops: 'replace h->r, remove r, remove e' } },
    },
  ],
};

const burstBalloons: Problem = {
  id: 'burst-balloons',
  name: 'Burst Balloons',
  number: 312,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/burst-balloons/',
  description: 'Given n balloons with numbers, burst them to collect maximum coins. Bursting balloon i gives nums[left]*nums[i]*nums[right] coins.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [3, 1, 5, 8]',
  timeComplexity: 'O(n^3)',
  spaceComplexity: 'O(n^2)',
  pattern: 'Interval DP',
  hints: ['Think of which balloon to burst LAST in each interval.', 'dp[l][r] = max coins from bursting all balloons in (l,r) exclusive.'],
  code: `def maxCoins(nums):
    nums = [1] + nums + [1]
    n = len(nums)
    dp = [[0]*n for _ in range(n)]
    for length in range(2, n):
        for l in range(0, n-length):
            r = l + length
            for k in range(l+1, r):
                dp[l][r] = max(dp[l][r],
                    dp[l][k] + dp[k][r] + nums[l]*nums[k]*nums[r])
    return dp[0][n-1]`,
  steps: [
    {
      line: 1, label: 'Init', message: 'nums=[3,1,5,8]. Add boundaries: [1,3,1,5,8,1]. dp[l][r] = max coins in open interval (l,r).',
      viz: { array: { values: [1,3,1,5,8,1], labels: { 0:'L', 5:'R' } }, variables: { padded: '[1,3,1,5,8,1]' } },
    },
    {
      line: 5, label: 'Len 2', message: 'Intervals of length 2: one balloon to burst. dp[0][2]=1*3*1=3, dp[1][3]=3*1*5=15, dp[2][4]=1*5*8=40, dp[3][5]=5*8*1=40.',
      viz: { array: { values: [1,3,1,5,8,1], highlights: [1,2,3,4] }, variables: { 'dp[0][2]': 3, 'dp[1][3]': 15, 'dp[2][4]': 40, 'dp[3][5]': 40 } },
    },
    {
      line: 7, label: 'Len 3', message: 'dp[0][3]: burst k=1 last: dp[0][1]+dp[1][3]+1*3*5=0+15+15=30. k=2: dp[0][2]+dp[2][3]+1*1*5=3+0+5=8. Best=30.',
      viz: { array: { values: [1,3,1,5,8,1], highlights: [1,2] }, variables: { 'dp[0][3]': 30, 'dp[1][4]': 135, 'dp[2][5]': 48 } },
    },
    {
      line: 7, label: 'Len 4', message: 'dp[0][4]: try k=1,2,3. Best k=3: dp[0][3]+dp[3][4]+1*5*8=30+0+40=70. dp[1][5]: best=159.',
      viz: { array: { values: [1,3,1,5,8,1], highlights: [1,2,3,4] }, variables: { 'dp[0][4]': 70, 'dp[1][5]': 159 } },
    },
    {
      line: 7, label: 'Len 5', message: 'dp[0][5]: try all k. k=3: dp[0][3]+dp[3][5]+1*5*1=30+40+5=75. k=4: dp[0][4]+dp[4][5]+1*8*1=70+0+8=78. Best k=1: 0+159+3=162.',
      viz: { array: { values: [1,3,1,5,8,1], highlights: [1,2,3,4] }, variables: { 'dp[0][5]': 167, best_k: 3 } },
    },
    {
      line: 9, label: 'Result', message: 'Max coins = 167. Optimal burst order: 1, then 5, then 8, then 3.', isKeyMoment: true,
      viz: { array: { values: [3,1,5,8], found: [0,1,2,3] }, variables: { result: 167 } },
    },
  ],
};

const regexMatching: Problem = {
  id: 'regular-expression-matching',
  name: 'Regular Expression Matching',
  number: 10,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/regular-expression-matching/',
  description: 'Implement regex matching with . (any char) and * (zero or more of preceding element).',
  vizTypes: ['dp-table'],
  language: 'python',
  testInput: 's = "aa", p = "a*"',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: '2D Regex DP',
  hints: ['dp[i][j] = does s[:i] match p[:j]?', 'For *, either use zero occurrences (dp[i][j-2]) or match one more (dp[i-1][j] if chars match).'],
  code: `def isMatch(s, p):
    m, n = len(s), len(p)
    dp = [[False]*(n+1) for _ in range(m+1)]
    dp[0][0] = True
    for j in range(1, n+1):
        if p[j-1] == '*': dp[0][j] = dp[0][j-2]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if p[j-1] == '*':
                dp[i][j] = dp[i][j-2]
                if p[j-2] == '.' or p[j-2] == s[i-1]:
                    dp[i][j] = dp[i][j] or dp[i-1][j]
            elif p[j-1] == '.' or p[j-1] == s[i-1]:
                dp[i][j] = dp[i-1][j-1]
    return dp[m][n]`,
  steps: [
    {
      line: 3, label: 'Init', message: 's="aa", p="a*". Build 3x3 DP table. dp[0][0]=True (empty matches empty).',
      viz: { dpTable: { values: [['T','F','F'],['F','F','F'],['F','F','F']], current: [0,0], labels: { rows: ['','a','a'], cols: ['','a','*'] } } },
    },
    {
      line: 5, label: 'Base row', message: 'p[1]=*: dp[0][2]=dp[0][0]=True. "a*" can match empty string (zero a\'s).',
      viz: { dpTable: { values: [['T','F','T'],['F','F','F'],['F','F','F']], current: [0,2], dependencies: [[0,0]], labels: { rows: ['','a','a'], cols: ['','a','*'] } } },
    },
    {
      line: 13, label: 'dp[1][1]', message: 'p[0]=a=s[0]=a. Chars match. dp[1][1]=dp[0][0]=True.',
      viz: { dpTable: { values: [['T','F','T'],['F','T','F'],['F','F','F']], current: [1,1], dependencies: [[0,0]], labels: { rows: ['','a','a'], cols: ['','a','*'] } } },
    },
    {
      line: 9, label: 'dp[1][2]', message: 'p[1]=*. Zero a\'s: dp[1][0]=F. One+ a\'s: p[0]=a=s[0]=a, so dp[0][2]=T. dp[1][2]=True.',
      viz: { dpTable: { values: [['T','F','T'],['F','T','T'],['F','F','F']], current: [1,2], dependencies: [[1,0],[0,2]], labels: { rows: ['','a','a'], cols: ['','a','*'] } } },
    },
    {
      line: 9, label: 'dp[2][2]', message: 'p[1]=*. Zero a\'s: dp[2][0]=F. One+ a\'s: p[0]=a=s[1]=a, so dp[1][2]=T. dp[2][2]=True.',
      viz: { dpTable: { values: [['T','F','T'],['F','T','T'],['F','F','T']], current: [2,2], dependencies: [[2,0],[1,2]], labels: { rows: ['','a','a'], cols: ['','a','*'] } } },
    },
    {
      line: 14, label: 'Result', message: 'dp[2][2]=True. "aa" matches pattern "a*" (two a\'s from a*).', isKeyMoment: true,
      viz: { dpTable: { values: [['T','F','T'],['F','T','T'],['F','F','T']], current: [2,2] }, variables: { result: true } },
    },
  ],
};


export const twoDDPProblems: Problem[] = [uniquePaths, longestCommonSubsequence, buySellCooldown, coinChangeII, targetSum, interleavingString, longestIncreasingPath, distinctSubsequences, editDistance, burstBalloons, regexMatching];
