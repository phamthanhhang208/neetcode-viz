import type { Problem } from '../types';

const maximumSubarray: Problem = {
  id: 'maximum-subarray',
  name: 'Maximum Subarray',
  number: 53,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/maximum-subarray/',
  description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: "Kadane's Algorithm",
  hints: [
    'Track current subarray sum; reset to 0 when it goes negative.',
    'At each element, decide: extend current subarray or start fresh.',
  ],
  code: `def maxSubArray(nums):
    maxSum = nums[0]
    curSum = 0
    for n in nums:
        curSum = max(curSum + n, n)
        maxSum = max(maxSum, curSum)
    return maxSum`,
  steps: [
    { line: 1, label: 'Init', message: 'Start with maxSum=-2, curSum=0.', viz: { array: { values: [-2,1,-3,4,-1,2,1,-5,4] }, variables: { maxSum: -2, curSum: 0 } } },
    { line: 3, label: 'i=0', message: 'curSum=max(0+(-2),-2)=-2. maxSum=-2.', viz: { array: { values: [-2,1,-3,4,-1,2,1,-5,4], highlights: [0] }, variables: { curSum: -2, maxSum: -2 } } },
    { line: 3, label: 'i=1', message: 'curSum=max(-2+1,1)=1. maxSum=1. Reset to start fresh at 1.', viz: { array: { values: [-2,1,-3,4,-1,2,1,-5,4], highlights: [1] }, variables: { curSum: 1, maxSum: 1 } } },
    { line: 3, label: 'i=3..6', message: 'Subarray [4,-1,2,1] has curSum=6. maxSum=6.', viz: { array: { values: [-2,1,-3,4,-1,2,1,-5,4], highlights: [3,4,5,6] }, variables: { curSum: 6, maxSum: 6 } } },
    { line: 3, label: 'i=7', message: 'curSum=6+(-5)=1. maxSum still 6.', viz: { array: { values: [-2,1,-3,4,-1,2,1,-5,4], highlights: [7] }, variables: { curSum: 1, maxSum: 6 } } },
    { line: 5, label: 'Result', message: 'Max subarray sum is 6 from [4,-1,2,1].', isKeyMoment: true, viz: { array: { values: [-2,1,-3,4,-1,2,1,-5,4], found: [3,4,5,6] }, variables: { result: 6 } } },
  ],
};

const jumpGame: Problem = {
  id: 'jump-game',
  name: 'Jump Game',
  number: 55,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/jump-game/',
  description: 'Given an array of non-negative integers, determine if you can reach the last index.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [2, 3, 1, 1, 4]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Greedy Max Reach',
  hints: [
    'Track the farthest index you can reach so far.',
    'If current index exceeds max reach, you are stuck.',
  ],
  code: `def canJump(nums):
    maxReach = 0
    for i in range(len(nums)):
        if i > maxReach:
            return False
        maxReach = max(maxReach, i + nums[i])
    return True`,
  steps: [
    { line: 1, label: 'Init', message: 'maxReach=0. Start from index 0.', viz: { array: { values: [2,3,1,1,4], labels: { 0: 'i' } }, variables: { maxReach: 0 } } },
    { line: 4, label: 'i=0', message: 'maxReach=max(0,0+2)=2. Can reach index 2.', viz: { array: { values: [2,3,1,1,4], highlights: [0] }, variables: { i: 0, maxReach: 2 } } },
    { line: 4, label: 'i=1', message: 'maxReach=max(2,1+3)=4. Can reach the end!', viz: { array: { values: [2,3,1,1,4], highlights: [1] }, variables: { i: 1, maxReach: 4 } } },
    { line: 4, label: 'i=2', message: 'maxReach=max(4,2+1)=4. Still reachable.', viz: { array: { values: [2,3,1,1,4], highlights: [2] }, variables: { i: 2, maxReach: 4 } } },
    { line: 4, label: 'i=3', message: 'maxReach=max(4,3+1)=4. Still reachable.', viz: { array: { values: [2,3,1,1,4], highlights: [3] }, variables: { i: 3, maxReach: 4 } } },
    { line: 6, label: 'Result', message: 'maxReach >= last index. Return True.', isKeyMoment: true, viz: { array: { values: [2,3,1,1,4], found: [0,1,2,3,4] }, variables: { result: true } } },
  ],
};

const jumpGameII: Problem = {
  id: 'jump-game-ii',
  name: 'Jump Game II',
  number: 45,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/jump-game-ii/',
  description: 'Return the minimum number of jumps to reach the last index.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [2, 3, 1, 1, 4]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Greedy BFS-like',
  hints: [
    'Think of it as BFS levels: each jump is a level.',
    'Track the end of current level and farthest reach.',
  ],
  code: `def jump(nums):
    jumps = 0
    end = 0
    farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == end:
            jumps += 1
            end = farthest
    return jumps`,
  steps: [
    { line: 1, label: 'Init', message: 'jumps=0, end=0, farthest=0.', viz: { array: { values: [2,3,1,1,4] }, variables: { jumps: 0, end: 0, farthest: 0 } } },
    { line: 5, label: 'i=0', message: 'farthest=2. i==end, so jump! jumps=1, end=2.', viz: { array: { values: [2,3,1,1,4], highlights: [0] }, variables: { jumps: 1, end: 2, farthest: 2 } } },
    { line: 5, label: 'i=1', message: 'farthest=max(2,4)=4. Not at end yet.', viz: { array: { values: [2,3,1,1,4], highlights: [1] }, variables: { jumps: 1, end: 2, farthest: 4 } } },
    { line: 5, label: 'i=2', message: 'farthest=max(4,3)=4. i==end, jump! jumps=2, end=4.', viz: { array: { values: [2,3,1,1,4], highlights: [2] }, variables: { jumps: 2, end: 4, farthest: 4 } } },
    { line: 5, label: 'i=3', message: 'farthest=max(4,4)=4. Not at end, continue.', viz: { array: { values: [2,3,1,1,4], highlights: [3] }, variables: { jumps: 2, end: 4, farthest: 4 } } },
    { line: 9, label: 'Result', message: 'Minimum 2 jumps: 0->1->4.', isKeyMoment: true, viz: { array: { values: [2,3,1,1,4], found: [0,1,4] }, variables: { result: 2 } } },
  ],
};

const gasStation: Problem = {
  id: 'gas-station',
  name: 'Gas Station',
  number: 134,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/gas-station/',
  description: 'Find the starting gas station index to complete a circuit, or return -1.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Greedy Start',
  hints: [
    'If total gas >= total cost, a solution exists.',
    'If tank goes negative, reset start to next station.',
  ],
  code: `def canCompleteCircuit(gas, cost):
    total = 0
    tank = 0
    start = 0
    for i in range(len(gas)):
        total += gas[i] - cost[i]
        tank += gas[i] - cost[i]
        if tank < 0:
            start = i + 1
            tank = 0
    return start if total >= 0 else -1`,
  steps: [
    { line: 1, label: 'Init', message: 'total=0, tank=0, start=0. Net at each station: [-2,-2,-2,3,3].', viz: { array: { values: [-2,-2,-2,3,3], labels: { 0: 'net' } }, variables: { total: 0, tank: 0, start: 0 } } },
    { line: 5, label: 'i=0', message: 'tank=-2<0. Reset start=1, tank=0.', viz: { array: { values: [-2,-2,-2,3,3], highlights: [0] }, variables: { tank: 0, start: 1, total: -2 } } },
    { line: 5, label: 'i=1', message: 'tank=-2<0. Reset start=2, tank=0.', viz: { array: { values: [-2,-2,-2,3,3], highlights: [1] }, variables: { tank: 0, start: 2, total: -4 } } },
    { line: 5, label: 'i=2', message: 'tank=-2<0. Reset start=3, tank=0.', viz: { array: { values: [-2,-2,-2,3,3], highlights: [2] }, variables: { tank: 0, start: 3, total: -6 } } },
    { line: 5, label: 'i=3', message: 'tank=3>=0. Keep going.', viz: { array: { values: [-2,-2,-2,3,3], highlights: [3] }, variables: { tank: 3, start: 3, total: -3 } } },
    { line: 10, label: 'Result', message: 'total=0>=0, answer is start=3.', isKeyMoment: true, viz: { array: { values: [-2,-2,-2,3,3], found: [3] }, variables: { total: 0, result: 3 } } },
  ],
};

const handOfStraights: Problem = {
  id: 'hand-of-straights',
  name: 'Hand of Straights',
  number: 846,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/hand-of-straights/',
  description: 'Determine if you can rearrange the hand into groups of consecutive cards of given size.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize = 3',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(n)',
  pattern: 'Sort + Greedy Group',
  hints: [
    'Sort and use a frequency map.',
    'For each smallest available card, try to form a group of groupSize consecutive cards.',
  ],
  code: `def isNStraightHand(hand, groupSize):
    from collections import Counter
    count = Counter(hand)
    for card in sorted(count):
        if count[card] > 0:
            freq = count[card]
            for i in range(card, card + groupSize):
                if count[i] < freq:
                    return False
                count[i] -= freq
    return True`,
  steps: [
    { line: 1, label: 'Init', message: 'Sort: [1,2,2,3,3,4,6,7,8]. Count frequencies.', viz: { array: { values: [1,2,2,3,3,4,6,7,8] }, variables: { groupSize: 3 } } },
    { line: 4, label: 'Group 1', message: 'Start at 1. Form group [1,2,3]. Decrement counts.', viz: { array: { values: [1,2,3], highlights: [0,1,2] }, variables: { group: '[1,2,3]' } } },
    { line: 4, label: 'Group 2', message: 'Start at 2 (remaining). Form group [2,3,4].', viz: { array: { values: [2,3,4], highlights: [0,1,2] }, variables: { group: '[2,3,4]' } } },
    { line: 4, label: 'Group 3', message: 'Start at 6. Form group [6,7,8].', viz: { array: { values: [6,7,8], highlights: [0,1,2] }, variables: { group: '[6,7,8]' } } },
    { line: 9, label: 'Check', message: 'All cards used. All groups are valid consecutive runs.', viz: { array: { values: [1,2,3,2,3,4,6,7,8], sorted: [0,1,2,3,4,5,6,7,8] }, variables: { groups: 3 } } },
    { line: 10, label: 'Result', message: 'Return True. 3 valid groups formed.', isKeyMoment: true, viz: { array: { values: [1,2,3,2,3,4,6,7,8] }, variables: { result: true } } },
  ],
};

const mergeTriplets: Problem = {
  id: 'merge-triplets-to-form-target',
  name: 'Merge Triplets to Form Target Triplet',
  number: 1899,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/',
  description: 'Determine if target triplet can be obtained by taking element-wise max of selected triplets.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Greedy Select',
  hints: [
    'A triplet is usable only if none of its values exceed the target.',
    'Check if usable triplets collectively cover all target values.',
  ],
  code: `def mergeTriplets(triplets, target):
    good = set()
    for t in triplets:
        if t[0] <= target[0] and t[1] <= target[1] and t[2] <= target[2]:
            for i in range(3):
                if t[i] == target[i]:
                    good.add(i)
    return len(good) == 3`,
  steps: [
    { line: 1, label: 'Init', message: 'Target=[2,7,5]. Check which triplets are usable.', viz: { array: { values: [2,7,5], labels: { 0: 'target' } }, variables: { good: '{}' } } },
    { line: 3, label: '[2,5,3]', message: 'All <= target. Matches target[0]=2. good={0}.', viz: { array: { values: [2,5,3], highlights: [0] }, variables: { good: '{0}' } } },
    { line: 3, label: '[1,8,4]', message: '8>7 exceeds target[1]. Skip this triplet.', viz: { array: { values: [1,8,4], highlights: [1] }, variables: { good: '{0}', skip: true } } },
    { line: 3, label: '[1,7,5]', message: 'All <= target. Matches target[1]=7, target[2]=5. good={0,1,2}.', viz: { array: { values: [1,7,5], highlights: [1,2] }, variables: { good: '{0,1,2}' } } },
    { line: 7, label: 'Check', message: 'good has all 3 indices. All target values achievable.', viz: { array: { values: [2,7,5] }, variables: { good: '{0,1,2}', covered: 3 } } },
    { line: 7, label: 'Result', message: 'Return True. Target [2,7,5] is achievable.', isKeyMoment: true, viz: { array: { values: [2,7,5], found: [0,1,2] }, variables: { result: true } } },
  ],
};

const partitionLabels: Problem = {
  id: 'partition-labels',
  name: 'Partition Labels',
  number: 763,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/partition-labels/',
  description: 'Partition a string so each letter appears in at most one part. Return the sizes.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 's = "ababcbacadefegdehijhklij"',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Last Occurrence Greedy',
  hints: [
    'Record last occurrence of each character.',
    'Expand partition end to cover all characters within it.',
  ],
  code: `def partitionLabels(s):
    last = {c: i for i, c in enumerate(s)}
    start = end = 0
    result = []
    for i, c in enumerate(s):
        end = max(end, last[c])
        if i == end:
            result.append(end - start + 1)
            start = i + 1
    return result`,
  steps: [
    { line: 1, label: 'Init', message: 'Compute last occurrence of each char in "ababcbacadefegdehijhklij".', viz: { array: { values: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'] }, variables: { 'last[a]': 8, 'last[b]': 5 } } },
    { line: 5, label: 'Scan 0-8', message: 'Start at a(last=8). Expand through b(5),c(7). End=8 at i=8.', viz: { array: { values: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'], highlights: [0,1,2,3,4,5,6,7,8] }, variables: { start: 0, end: 8, size: 9 } } },
    { line: 7, label: 'Part 1', message: 'Partition 1: "ababcbaca" size=9. Reset start=9.', viz: { array: { values: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'], found: [0,1,2,3,4,5,6,7,8] }, variables: { result: [9], start: 9 } } },
    { line: 5, label: 'Scan 9-15', message: 'd(last=14),e(last=15),f(11),g(13). End=15 at i=15.', viz: { array: { values: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'], highlights: [9,10,11,12,13,14,15] }, variables: { start: 9, end: 15, size: 7 } } },
    { line: 7, label: 'Part 2', message: 'Partition 2: "defegde" size=7. Reset start=16.', viz: { array: { values: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'], found: [9,10,11,12,13,14,15] }, variables: { result: [9,7], start: 16 } } },
    { line: 9, label: 'Result', message: 'Partition 3: "hijhklij" size=8. Result=[9,7,8].', isKeyMoment: true, viz: { array: { values: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'], found: [16,17,18,19,20,21,22,23] }, variables: { result: [9,7,8] } } },
  ],
};

const validParenthesisString: Problem = {
  id: 'valid-parenthesis-string',
  name: 'Valid Parenthesis String',
  number: 678,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/valid-parenthesis-string/',
  description: 'Given string with (, ), and *, determine if it can be valid. * can be (, ), or empty.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 's = "(*))"\n',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Greedy Lo/Hi Range',
  hints: [
    'Track min and max possible open count.',
    'lo = min open (treating * as ) or empty), hi = max open (treating * as ().',
  ],
  code: `def checkValidString(s):
    lo = hi = 0
    for c in s:
        lo += 1 if c == '(' else -1
        hi += 1 if c != ')' else -1
        if hi < 0: return False
        lo = max(lo, 0)
    return lo == 0`,
  steps: [
    { line: 1, label: 'Init', message: 'lo=0, hi=0. Track range of possible open parens.', viz: { array: { values: ['(','*',')',')'] }, variables: { lo: 0, hi: 0 } } },
    { line: 3, label: '"("', message: 'Open paren: lo=1, hi=1. Must have 1 open.', viz: { array: { values: ['(','*',')',')'], highlights: [0] }, variables: { lo: 1, hi: 1 } } },
    { line: 3, label: '"*"', message: '* can be ( or ) or empty. lo=0, hi=2.', viz: { array: { values: ['(','*',')',')'], highlights: [1] }, variables: { lo: 0, hi: 2 } } },
    { line: 3, label: '")" #1', message: 'Close paren: lo=max(-1,0)=0, hi=1.', viz: { array: { values: ['(','*',')',')'], highlights: [2] }, variables: { lo: 0, hi: 1 } } },
    { line: 3, label: '")" #2', message: 'Close paren: lo=max(-1,0)=0, hi=0. hi>=0 ok.', viz: { array: { values: ['(','*',')',')'], highlights: [3] }, variables: { lo: 0, hi: 0 } } },
    { line: 7, label: 'Result', message: 'lo==0. String "(*))\" is valid (* acts as open paren).', isKeyMoment: true, viz: { array: { values: ['(','*',')',')'], found: [0,1,2,3] }, variables: { result: true } } },
  ],
};

export const greedyProblems: Problem[] = [
  maximumSubarray,
  jumpGame,
  jumpGameII,
  gasStation,
  handOfStraights,
  mergeTriplets,
  partitionLabels,
  validParenthesisString,
];
