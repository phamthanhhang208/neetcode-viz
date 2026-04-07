import type { Problem } from '../types';

const insertInterval: Problem = {
  id: 'insert-interval',
  name: 'Insert Interval',
  number: 57,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/insert-interval/',
  description: 'Insert a new interval into a sorted list of non-overlapping intervals, merging if necessary.',
  vizTypes: ['intervals'],
  language: 'python',
  testInput: 'intervals = [[1,3],[6,9]], newInterval = [2,5]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Linear Merge',
  hints: [
    'Add all intervals ending before newInterval starts.',
    'Merge overlapping intervals, then add remaining.',
  ],
  code: `def insert(intervals, newInterval):
    res = []
    for i, iv in enumerate(intervals):
        if iv[1] < newInterval[0]:
            res.append(iv)
        elif iv[0] > newInterval[1]:
            res.append(newInterval)
            return res + intervals[i:]
        else:
            newInterval = [min(iv[0], newInterval[0]), max(iv[1], newInterval[1])]
    res.append(newInterval)
    return res`,
  steps: [
    { line: 1, label: 'Init', message: 'intervals=[[1,3],[6,9]], newInterval=[2,5].', viz: { intervals: { items: [[1,3],[6,9]] }, variables: { newInterval: '[2,5]' } } },
    { line: 3, label: '[1,3]', message: '[1,3] overlaps [2,5]. Merge: newInterval=[1,5].', viz: { intervals: { items: [[1,3],[6,9]], highlighted: 0 }, variables: { newInterval: '[1,5]' } } },
    { line: 3, label: '[6,9]', message: '[6,9] starts after 5. Insert [1,5], append rest.', viz: { intervals: { items: [[1,3],[6,9]], highlighted: 1 }, variables: { newInterval: '[1,5]' } } },
    { line: 6, label: 'Insert', message: 'Add merged [1,5] then [6,9].', viz: { intervals: { items: [[1,5],[6,9]], merged: [[1,5]] }, variables: {} } },
    { line: 7, label: 'Build', message: 'Result so far: [[1,5],[6,9]].', viz: { intervals: { items: [[1,5],[6,9]] }, variables: { res: '[[1,5],[6,9]]' } } },
    { line: 9, label: 'Result', message: 'Final: [[1,5],[6,9]].', isKeyMoment: true, viz: { intervals: { items: [[1,5],[6,9]] }, variables: { result: '[[1,5],[6,9]]' } } },
  ],
};

const mergeIntervals: Problem = {
  id: 'merge-intervals',
  name: 'Merge Intervals',
  number: 56,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/merge-intervals/',
  description: 'Merge all overlapping intervals and return non-overlapping intervals.',
  vizTypes: ['intervals'],
  language: 'python',
  testInput: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(n)',
  pattern: 'Sort + Merge',
  hints: [
    'Sort intervals by start time.',
    'Merge if current start <= previous end.',
  ],
  code: `def merge(intervals):
    intervals.sort()
    res = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= res[-1][1]:
            res[-1][1] = max(res[-1][1], end)
        else:
            res.append([start, end])
    return res`,
  steps: [
    { line: 1, label: 'Sort', message: 'Already sorted: [[1,3],[2,6],[8,10],[15,18]].', viz: { intervals: { items: [[1,3],[2,6],[8,10],[15,18]] }, variables: {} } },
    { line: 2, label: 'Init', message: 'res=[[1,3]]. Start with first interval.', viz: { intervals: { items: [[1,3],[2,6],[8,10],[15,18]], highlighted: 0 }, variables: { res: '[[1,3]]' } } },
    { line: 4, label: '[2,6]', message: '2<=3, overlap. Merge to [1,6].', viz: { intervals: { items: [[1,6],[8,10],[15,18]], merged: [[1,6]] }, variables: { res: '[[1,6]]' } } },
    { line: 6, label: '[8,10]', message: '8>6, no overlap. Append [8,10].', viz: { intervals: { items: [[1,6],[8,10],[15,18]], highlighted: 1 }, variables: { res: '[[1,6],[8,10]]' } } },
    { line: 6, label: '[15,18]', message: '15>10, no overlap. Append [15,18].', viz: { intervals: { items: [[1,6],[8,10],[15,18]], highlighted: 2 }, variables: { res: '[[1,6],[8,10],[15,18]]' } } },
    { line: 8, label: 'Result', message: 'Merged: [[1,6],[8,10],[15,18]].', isKeyMoment: true, viz: { intervals: { items: [[1,6],[8,10],[15,18]] }, variables: { result: '[[1,6],[8,10],[15,18]]' } } },
  ],
};

const nonOverlappingIntervals: Problem = {
  id: 'non-overlapping-intervals',
  name: 'Non-overlapping Intervals',
  number: 435,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/non-overlapping-intervals/',
  description: 'Return the minimum number of intervals to remove to make the rest non-overlapping.',
  vizTypes: ['intervals'],
  language: 'python',
  testInput: 'intervals = [[1,2],[2,3],[3,4],[1,3]]',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(1)',
  pattern: 'Greedy by End Time',
  hints: [
    'Sort by end time. Greedily keep intervals that end earliest.',
    'Count removals when overlap is detected.',
  ],
  code: `def eraseOverlapIntervals(intervals):
    intervals.sort(key=lambda x: x[1])
    count = 0
    end = float('-inf')
    for s, e in intervals:
        if s >= end:
            end = e
        else:
            count += 1
    return count`,
  steps: [
    { line: 1, label: 'Sort', message: 'Sort by end: [[1,2],[1,3],[2,3],[3,4]].', viz: { intervals: { items: [[1,2],[1,3],[2,3],[3,4]] }, variables: { count: 0 } } },
    { line: 5, label: '[1,2]', message: '1>=-inf. Keep it. end=2.', viz: { intervals: { items: [[1,2],[1,3],[2,3],[3,4]], highlighted: 0 }, variables: { end: 2, count: 0 } } },
    { line: 5, label: '[1,3]', message: '1<2, overlap! Remove. count=1.', viz: { intervals: { items: [[1,2],[1,3],[2,3],[3,4]], highlighted: 1 }, variables: { end: 2, count: 1 } } },
    { line: 5, label: '[2,3]', message: '2>=2. Keep it. end=3.', viz: { intervals: { items: [[1,2],[1,3],[2,3],[3,4]], highlighted: 2 }, variables: { end: 3, count: 1 } } },
    { line: 5, label: '[3,4]', message: '3>=3. Keep it. end=4.', viz: { intervals: { items: [[1,2],[1,3],[2,3],[3,4]], highlighted: 3 }, variables: { end: 4, count: 1 } } },
    { line: 9, label: 'Result', message: 'Remove 1 interval ([1,3]) to eliminate overlaps.', isKeyMoment: true, viz: { intervals: { items: [[1,2],[2,3],[3,4]] }, variables: { result: 1 } } },
  ],
};

const meetingRooms: Problem = {
  id: 'meeting-rooms',
  name: 'Meeting Rooms',
  number: 252,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/meeting-rooms/',
  description: 'Determine if a person can attend all meetings (no overlaps).',
  vizTypes: ['intervals'],
  language: 'python',
  testInput: 'intervals = [[0,30],[5,10],[15,20]]',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(1)',
  pattern: 'Sort + Check Overlap',
  hints: [
    'Sort by start time.',
    'If any meeting starts before the previous one ends, return false.',
  ],
  code: `def canAttendMeetings(intervals):
    intervals.sort()
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:
            return False
    return True`,
  steps: [
    { line: 1, label: 'Sort', message: 'Sort by start: [[0,30],[5,10],[15,20]].', viz: { intervals: { items: [[0,30],[5,10],[15,20]] }, variables: {} } },
    { line: 3, label: 'i=1', message: 'Check [5,10]: 5 < 30? Yes, overlap!', viz: { intervals: { items: [[0,30],[5,10],[15,20]], highlighted: 1 }, variables: { prev_end: 30 } } },
    { line: 4, label: 'Overlap', message: '[5,10] starts during [0,30]. Cannot attend both.', viz: { intervals: { items: [[0,30],[5,10],[15,20]], highlighted: 0 }, variables: { overlap: true } } },
    { line: 4, label: 'Conflict', message: 'Meeting at 5 conflicts with meeting ending at 30.', viz: { intervals: { items: [[0,30],[5,10],[15,20]], merged: [[0,30],[5,10]] }, variables: {} } },
    { line: 4, label: 'Early Exit', message: 'No need to check further. Overlap found.', viz: { intervals: { items: [[0,30],[5,10],[15,20]] }, variables: { result: false } } },
    { line: 4, label: 'Result', message: 'Return False. Cannot attend all meetings.', isKeyMoment: true, viz: { intervals: { items: [[0,30],[5,10],[15,20]] }, variables: { result: false } } },
  ],
};

const meetingRoomsII: Problem = {
  id: 'meeting-rooms-ii',
  name: 'Meeting Rooms II',
  number: 253,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/meeting-rooms-ii/',
  description: 'Find the minimum number of conference rooms required.',
  vizTypes: ['intervals'],
  language: 'python',
  testInput: 'intervals = [[0,30],[5,10],[15,20]]',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(n)',
  pattern: 'Sweep Line',
  hints: [
    'Separate start and end times, sort each.',
    'Use two pointers to count overlapping meetings.',
  ],
  code: `def minMeetingRooms(intervals):
    starts = sorted(i[0] for i in intervals)
    ends = sorted(i[1] for i in intervals)
    rooms = maxRooms = e = 0
    for s in starts:
        if s < ends[e]:
            rooms += 1
        else:
            e += 1
        maxRooms = max(maxRooms, rooms)
    return maxRooms`,
  steps: [
    { line: 1, label: 'Init', message: 'starts=[0,5,15], ends=[10,20,30]. rooms=0.', viz: { intervals: { items: [[0,30],[5,10],[15,20]] }, variables: { starts: '[0,5,15]', ends: '[10,20,30]' } } },
    { line: 5, label: 's=0', message: '0<10(ends[0]). New room needed. rooms=1.', viz: { intervals: { items: [[0,30],[5,10],[15,20]], highlighted: 0 }, variables: { rooms: 1, e: 0 } } },
    { line: 5, label: 's=5', message: '5<10(ends[0]). Another room. rooms=2.', viz: { intervals: { items: [[0,30],[5,10],[15,20]], highlighted: 1 }, variables: { rooms: 2, e: 0 } } },
    { line: 5, label: 's=15', message: '15>=10(ends[0]). Reuse room. e=1. rooms=2.', viz: { intervals: { items: [[0,30],[5,10],[15,20]], highlighted: 2 }, variables: { rooms: 2, e: 1 } } },
    { line: 9, label: 'Max', message: 'Peak rooms=2 (at time 5, meetings [0,30] and [5,10] overlap).', viz: { intervals: { items: [[0,30],[5,10],[15,20]] }, variables: { maxRooms: 2 } } },
    { line: 10, label: 'Result', message: 'Minimum 2 meeting rooms required.', isKeyMoment: true, viz: { intervals: { items: [[0,30],[5,10],[15,20]] }, variables: { result: 2 } } },
  ],
};

const minIntervalQuery: Problem = {
  id: 'minimum-interval-to-include-each-query',
  name: 'Minimum Interval to Include Each Query',
  number: 1851,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/',
  description: 'For each query, find the size of the smallest interval containing that query.',
  vizTypes: ['intervals', 'array'],
  language: 'python',
  testInput: 'intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]',
  timeComplexity: 'O((n+q) log n)',
  spaceComplexity: 'O(n+q)',
  pattern: 'Sort + Min Heap',
  hints: [
    'Sort intervals by start. Sort queries. Use a min-heap by interval size.',
    'For each query, add valid intervals and remove expired ones.',
  ],
  code: `import heapq
def minInterval(intervals, queries):
    intervals.sort()
    res = {}
    heap = []
    i = 0
    for q in sorted(queries):
        while i < len(intervals) and intervals[i][0] <= q:
            l, r = intervals[i]
            heapq.heappush(heap, (r - l + 1, r))
            i += 1
        while heap and heap[0][1] < q:
            heapq.heappop(heap)
        res[q] = heap[0][0] if heap else -1
    return [res[q] for q in queries]`,
  steps: [
    { line: 1, label: 'Init', message: 'Sort intervals by start. Process queries in order.', viz: { intervals: { items: [[1,4],[2,4],[3,6],[4,4]] }, array: { values: [2,3,4,5], labels: { 0: 'queries' } }, variables: {} } },
    { line: 7, label: 'q=2', message: 'Add [1,4](size 4),[2,4](size 3). Smallest=3.', viz: { intervals: { items: [[1,4],[2,4],[3,6],[4,4]], highlighted: 0 }, variables: { q: 2, 'res[2]': 3 } } },
    { line: 7, label: 'q=3', message: 'Add [3,6](size 4). Heap has sizes [3,4,4]. Smallest=3.', viz: { intervals: { items: [[1,4],[2,4],[3,6],[4,4]], highlighted: 1 }, variables: { q: 3, 'res[3]': 3 } } },
    { line: 7, label: 'q=4', message: 'Add [4,4](size 1). Smallest=1.', viz: { intervals: { items: [[1,4],[2,4],[3,6],[4,4]], highlighted: 3 }, variables: { q: 4, 'res[4]': 1 } } },
    { line: 7, label: 'q=5', message: 'Remove expired intervals. Only [3,6] covers 5. Size=4.', viz: { intervals: { items: [[3,6]], highlighted: 0 }, variables: { q: 5, 'res[5]': 4 } } },
    { line: 15, label: 'Result', message: 'Result: [3,3,1,4].', isKeyMoment: true, viz: { array: { values: [3,3,1,4], found: [0,1,2,3] }, variables: { result: '[3,3,1,4]' } } },
  ],
};

export const intervalsProblems: Problem[] = [
  insertInterval,
  mergeIntervals,
  nonOverlappingIntervals,
  meetingRooms,
  meetingRoomsII,
  minIntervalQuery,
];
