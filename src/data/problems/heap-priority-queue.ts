import type { Problem } from '../types';

const kthLargestInStream: Problem = {
  id: 'kth-largest-element-in-stream',
  name: 'Kth Largest Element in a Stream',
  number: 703,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
  description: 'Design a class to find the kth largest element in a stream.',
  vizTypes: ['heap'],
  language: 'python',
  testInput: 'k=3, add [4, 5, 8, 2]',
  timeComplexity: 'O(n log k)',
  spaceComplexity: 'O(k)',
  pattern: 'Heap / Priority Queue',
  hints: [
    'Maintain a min-heap of size k.',
    'The root of the min-heap is always the kth largest.',
  ],
  code: `class KthLargest:
    def __init__(self, k, nums):
        self.k = k
        self.heap = nums
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val):
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Initialize with k=3. We maintain a min-heap of size k.',
      viz: {
        heap: { values: [] },
        variables: { k: 3 },
      },
    },
    {
      line: 3,
      label: 'Add 4',
      message: 'Push 4 into the heap. Size=1 <= k=3, keep it.',
      viz: {
        heap: { values: [4], inserting: 4 },
        variables: { k: 3, kthLargest: 4 },
      },
    },
    {
      line: 3,
      label: 'Add 5',
      message: 'Push 5. Heap = [4, 5]. Size=2 <= k, keep both.',
      viz: {
        heap: { values: [4, 5], inserting: 5 },
        variables: { k: 3, kthLargest: 4 },
      },
    },
    {
      line: 3,
      label: 'Add 8',
      message: 'Push 8. Heap = [4, 5, 8]. Size=3 = k. Root 4 is 3rd largest.',
      isKeyMoment: true,
      viz: {
        heap: { values: [4, 5, 8], inserting: 8 },
        variables: { k: 3, kthLargest: 4 },
      },
    },
    {
      line: 3,
      label: 'Add 2',
      message: 'Push 2. Heap = [2, 4, 8, 5]. Size=4 > k, pop min (2).',
      viz: {
        heap: { values: [2, 4, 8, 5], inserting: 2 },
        variables: { k: 3, size: 4, action: 'pop min' },
      },
    },
    {
      line: 4,
      label: 'Pop Min',
      message: 'Pop 2 (too small). Heap = [4, 5, 8]. 3rd largest = 4.',
      isKeyMoment: true,
      viz: {
        heap: { values: [4, 5, 8], removing: true },
        variables: { k: 3, removed: 2, kthLargest: 4 },
      },
    },
    {
      line: 4,
      label: 'Complete',
      message: 'Min-heap of size k always has the kth largest at root. O(log k) per add.',
      viz: {
        heap: { values: [4, 5, 8] },
        variables: { k: 3, kthLargest: 4 },
      },
    },
  ],
};

const lastStoneWeight: Problem = {
  id: 'last-stone-weight',
  name: 'Last Stone Weight',
  number: 1046,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/last-stone-weight/',
  description: 'Smash the two heaviest stones together. Return the weight of the last remaining stone.',
  vizTypes: ['heap'],
  language: 'python',
  testInput: '[2, 7, 4, 1, 8, 1]',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(n)',
  pattern: 'Heap / Priority Queue',
  hints: [
    'Use a max-heap (negate values in Python).',
    'Repeatedly pop two largest and push difference if nonzero.',
  ],
  code: `def lastStoneWeight(stones):
    heap = [-s for s in stones]
    heapq.heapify(heap)
    while len(heap) > 1:
        a = -heapq.heappop(heap)
        b = -heapq.heappop(heap)
        if a != b:
            heapq.heappush(heap, -(a - b))
    return -heap[0] if heap else 0`,
  steps: [
    {
      line: 1,
      label: 'Heapify',
      message: 'Build max-heap from [2,7,4,1,8,1]. Largest on top: 8.',
      viz: {
        heap: { values: [8, 7, 4, 1, 2, 1] },
      },
    },
    {
      line: 3,
      label: 'Smash 8 & 7',
      message: 'Pop 8 and 7. 8-7=1. Push 1 back.',
      isKeyMoment: true,
      viz: {
        heap: { values: [8, 7, 4, 1, 2, 1], comparing: [0, 1] },
        variables: { a: 8, b: 7, diff: 1 },
      },
    },
    {
      line: 3,
      label: 'After Smash',
      message: 'Heap after pushing 1: [4, 2, 1, 1, 1].',
      viz: {
        heap: { values: [4, 2, 1, 1, 1], inserting: 1 },
      },
    },
    {
      line: 3,
      label: 'Smash 4 & 2',
      message: 'Pop 4 and 2. 4-2=2. Push 2 back.',
      isKeyMoment: true,
      viz: {
        heap: { values: [4, 2, 1, 1, 1], comparing: [0, 1] },
        variables: { a: 4, b: 2, diff: 2 },
      },
    },
    {
      line: 3,
      label: 'Smash 2 & 1',
      message: 'Heap = [2, 1, 1, 1]. Pop 2 and 1. 2-1=1. Push 1.',
      viz: {
        heap: { values: [2, 1, 1, 1], comparing: [0, 1] },
        variables: { a: 2, b: 1, diff: 1 },
      },
    },
    {
      line: 3,
      label: 'Smash 1 & 1',
      message: 'Heap = [1, 1]. Pop 1 and 1. Equal, both destroyed.',
      viz: {
        heap: { values: [1, 1], comparing: [0, 1] },
        variables: { a: 1, b: 1, diff: 0, destroyed: true },
      },
    },
    {
      line: 5,
      label: 'Result',
      message: 'Heap has one stone left with weight 1. Return 1.',
      isKeyMoment: true,
      viz: {
        heap: { values: [1] },
        variables: { result: 1 },
      },
    },
  ],
};

const kClosestPoints: Problem = {
  id: 'k-closest-points-to-origin',
  name: 'K Closest Points to Origin',
  number: 973,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/k-closest-points-to-origin/',
  description: 'Given an array of points, return the k closest points to the origin.',
  vizTypes: ['heap', 'array'],
  language: 'python',
  testInput: 'points=[[1,3],[-2,2]], k=1',
  timeComplexity: 'O(n log k)',
  spaceComplexity: 'O(k)',
  pattern: 'Heap / Priority Queue',
  hints: [
    'Use a max-heap of size k to track the k smallest distances.',
    'Distance = x^2 + y^2 (no need for sqrt).',
  ],
  code: `def kClosest(points, k):
    heap = []
    for x, y in points:
        dist = x*x + y*y
        heapq.heappush(heap, (-dist, x, y))
        if len(heap) > k:
            heapq.heappop(heap)
    return [[x, y] for _, x, y in heap]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find k=1 closest point to origin from [[1,3],[-2,2]]. Use max-heap of size k.',
      viz: {
        heap: { values: [] },
        array: { values: ['[1,3]', '[-2,2]'] },
        variables: { k: 1 },
      },
    },
    {
      line: 2,
      label: 'Process [1,3]',
      message: 'Distance of [1,3] = 1+9 = 10. Push -10 to max-heap.',
      viz: {
        heap: { values: [10], inserting: 10 },
        array: { values: ['[1,3]', '[-2,2]'], highlights: [0] },
        variables: { point: '[1,3]', dist: 10 },
      },
    },
    {
      line: 2,
      label: 'Process [-2,2]',
      message: 'Distance of [-2,2] = 4+4 = 8. Push -8. Heap size=2 > k=1.',
      viz: {
        heap: { values: [10, 8], inserting: 8 },
        array: { values: ['[1,3]', '[-2,2]'], highlights: [1] },
        variables: { point: '[-2,2]', dist: 8 },
      },
    },
    {
      line: 3,
      label: 'Pop Farthest',
      message: 'Heap size > k. Pop max distance 10 (point [1,3]). Keep [-2,2].',
      isKeyMoment: true,
      viz: {
        heap: { values: [10, 8], removing: true },
        variables: { removed: '[1,3] (dist=10)', kept: '[-2,2] (dist=8)' },
      },
    },
    {
      line: 3,
      label: 'Heap After Pop',
      message: 'Heap = [8]. Only [-2,2] remains. This is the closest point.',
      viz: {
        heap: { values: [8] },
        variables: { k: 1, closest: '[-2,2]' },
      },
    },
    {
      line: 4,
      label: 'Result',
      message: 'Return [[-2,2]]. Distance 8 < 10, so [-2,2] is closer to origin.',
      isKeyMoment: true,
      viz: {
        heap: { values: [8] },
        variables: { result: '[[-2,2]]' },
      },
    },
    {
      line: 4,
      label: 'Complete',
      message: 'Max-heap of size k keeps k smallest. Pop removes the farthest among candidates.',
      viz: {
        heap: { values: [8] },
        variables: { result: '[[-2,2]]' },
      },
    },
  ],
};

const kthLargestInArray: Problem = {
  id: 'kth-largest-element-in-array',
  name: 'Kth Largest Element in an Array',
  number: 215,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
  description: 'Find the kth largest element in an unsorted array.',
  vizTypes: ['heap'],
  language: 'python',
  testInput: 'nums=[3,2,1,5,6,4], k=2',
  timeComplexity: 'O(n log k)',
  spaceComplexity: 'O(k)',
  pattern: 'Heap / Priority Queue',
  hints: [
    'Use a min-heap of size k. The root is the kth largest.',
    'Alternatively use quickselect for O(n) average.',
  ],
  code: `def findKthLargest(nums, k):
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find 2nd largest in [3,2,1,5,6,4]. Use min-heap of size k=2.',
      viz: {
        heap: { values: [] },
        variables: { k: 2, nums: [3,2,1,5,6,4] },
      },
    },
    {
      line: 2,
      label: 'Push 3, 2',
      message: 'Push 3 then 2. Heap = [2, 3]. Size=2=k, root 2 is 2nd largest so far.',
      viz: {
        heap: { values: [2, 3] },
        variables: { k: 2, processed: [3, 2] },
      },
    },
    {
      line: 2,
      label: 'Push 1, Pop',
      message: 'Push 1. Heap = [1, 3, 2]. Size > k, pop min 1. Heap = [2, 3].',
      viz: {
        heap: { values: [2, 3], removing: true },
        variables: { pushed: 1, popped: 1 },
      },
    },
    {
      line: 2,
      label: 'Push 5, Pop',
      message: 'Push 5. Heap = [2, 3, 5]. Size > k, pop min 2. Heap = [3, 5].',
      isKeyMoment: true,
      viz: {
        heap: { values: [3, 5], inserting: 5 },
        variables: { pushed: 5, popped: 2 },
      },
    },
    {
      line: 2,
      label: 'Push 6, Pop',
      message: 'Push 6. Heap = [3, 5, 6]. Size > k, pop min 3. Heap = [5, 6].',
      isKeyMoment: true,
      viz: {
        heap: { values: [5, 6], inserting: 6 },
        variables: { pushed: 6, popped: 3 },
      },
    },
    {
      line: 2,
      label: 'Push 4, Pop',
      message: 'Push 4. Heap = [4, 6, 5]. Size > k, pop min 4. Heap = [5, 6].',
      viz: {
        heap: { values: [5, 6], removing: true },
        variables: { pushed: 4, popped: 4 },
      },
    },
    {
      line: 3,
      label: 'Result',
      message: 'Heap = [5, 6]. Root = 5 is the 2nd largest element.',
      isKeyMoment: true,
      viz: {
        heap: { values: [5, 6] },
        variables: { result: 5, k: 2 },
      },
    },
  ],
};

const taskScheduler: Problem = {
  id: 'task-scheduler',
  name: 'Task Scheduler',
  number: 621,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/task-scheduler/',
  description: 'Given tasks and cooldown n, find the minimum intervals to execute all tasks.',
  vizTypes: ['heap', 'array'],
  language: 'python',
  testInput: 'tasks=["A","A","A","B","B","B"], n=2',
  timeComplexity: 'O(n * m)',
  spaceComplexity: 'O(1)',
  pattern: 'Heap / Priority Queue',
  hints: [
    'Use a max-heap for task frequencies. Most frequent tasks first.',
    'After executing a task, put it in a cooldown queue.',
  ],
  code: `def leastInterval(tasks, n):
    freq = Counter(tasks)
    heap = [-f for f in freq.values()]
    heapq.heapify(heap)
    time = 0
    q = deque()  # (remaining, available_at)
    while heap or q:
        time += 1
        if heap:
            cnt = 1 + heapq.heappop(heap)
            if cnt: q.append((cnt, time + n))
        if q and q[0][1] == time:
            heapq.heappush(heap, -q.popleft()[0])
    return time`,
  steps: [
    {
      line: 1,
      label: 'Count Frequencies',
      message: 'Tasks: A=3, B=3. Build max-heap of frequencies: [3, 3].',
      viz: {
        heap: { values: [3, 3] },
        array: { values: [] },
        variables: { n: 2, freq: { A: 3, B: 3 } },
      },
    },
    {
      line: 3,
      label: 'Time 1: Execute A',
      message: 'Pop 3 (A). Execute A, remaining=2. Cooldown until time 3. Schedule: [A].',
      isKeyMoment: true,
      viz: {
        heap: { values: [3], removing: true },
        array: { values: ['A'] },
        variables: { time: 1, cooldown: [['A:2', 'avail@3']] },
      },
    },
    {
      line: 3,
      label: 'Time 2: Execute B',
      message: 'Pop 3 (B). Execute B, remaining=2. Cooldown until time 4. Schedule: [A, B].',
      viz: {
        heap: { values: [] },
        array: { values: ['A', 'B'] },
        variables: { time: 2, cooldown: [['A:2', '@3'], ['B:2', '@4']] },
      },
    },
    {
      line: 3,
      label: 'Time 3: A available',
      message: 'A cooldown done. Push A(2) back. Pop and execute A. Schedule: [A, B, idle, A].',
      isKeyMoment: true,
      viz: {
        heap: { values: [2] },
        array: { values: ['A', 'B', 'idle', 'A'] },
        variables: { time: 4, remaining: { A: 1, B: 2 } },
      },
    },
    {
      line: 3,
      label: 'Time 5: Execute B',
      message: 'B available. Execute B, remaining=1. Schedule: [..., A, B].',
      viz: {
        heap: { values: [1] },
        array: { values: ['A', 'B', 'idle', 'A', 'B'] },
        variables: { time: 5, remaining: { A: 1, B: 1 } },
      },
    },
    {
      line: 3,
      label: 'Time 6-7: Finish',
      message: 'Continue alternating. Schedule: [A, B, idle, A, B, idle, A, B].',
      isKeyMoment: true,
      viz: {
        heap: { values: [] },
        array: { values: ['A', 'B', 'idle', 'A', 'B', 'idle', 'A', 'B'] },
        variables: { time: 8 },
      },
    },
    {
      line: 5,
      label: 'Result',
      message: 'Total intervals = 8. Greedy: always schedule the most frequent available task.',
      viz: {
        heap: { values: [] },
        array: { values: ['A', 'B', 'idle', 'A', 'B', 'idle', 'A', 'B'] },
        variables: { result: 8 },
      },
    },
  ],
};

const designTwitter: Problem = {
  id: 'design-twitter',
  name: 'Design Twitter',
  number: 355,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/design-twitter/',
  description: 'Design a simplified Twitter with postTweet, getNewsFeed, follow, and unfollow.',
  vizTypes: ['heap', 'hashmap'],
  language: 'python',
  testInput: 'postTweet(1,"t1"), follow(1,2), postTweet(2,"t2"), getNewsFeed(1)',
  timeComplexity: 'O(k log n) for feed',
  spaceComplexity: 'O(n)',
  pattern: 'Heap / Priority Queue',
  hints: [
    'Use a hash map for followees and tweets per user.',
    'Merge k sorted lists using a min-heap for getNewsFeed.',
  ],
  code: `class Twitter:
    def __init__(self):
        self.time = 0
        self.tweets = defaultdict(list)
        self.following = defaultdict(set)

    def postTweet(self, userId, tweetId):
        self.tweets[userId].append((self.time, tweetId))
        self.time += 1

    def getNewsFeed(self, userId):
        heap = []
        users = self.following[userId] | {userId}
        for u in users:
            if self.tweets[u]:
                idx = len(self.tweets[u]) - 1
                t, tid = self.tweets[u][idx]
                heapq.heappush(heap, (-t, tid, u, idx))
        feed = []
        while heap and len(feed) < 10:
            _, tid, u, idx = heapq.heappop(heap)
            feed.append(tid)
            if idx > 0:
                t, tid2 = self.tweets[u][idx-1]
                heapq.heappush(heap, (-t, tid2, u, idx-1))
        return feed`,
  steps: [
    {
      line: 1,
      label: 'Init Twitter',
      message: 'Create Twitter with empty tweets map and following map.',
      viz: {
        heap: { values: [] },
        hashmap: { entries: [] },
      },
    },
    {
      line: 3,
      label: 'postTweet(1, "t1")',
      message: 'User 1 posts tweet "t1" at time 0.',
      viz: {
        heap: { values: [] },
        hashmap: {
          entries: [['user1_tweets', ['t1@0']]],
          justAdded: 'user1_tweets',
        },
        variables: { time: 1 },
      },
    },
    {
      line: 5,
      label: 'follow(1, 2)',
      message: 'User 1 follows user 2. Now user 1 sees tweets from self and user 2.',
      viz: {
        heap: { values: [] },
        hashmap: {
          entries: [['user1_tweets', ['t1@0']], ['user1_follows', [2]]],
          justAdded: 'user1_follows',
        },
      },
    },
    {
      line: 3,
      label: 'postTweet(2, "t2")',
      message: 'User 2 posts tweet "t2" at time 1.',
      viz: {
        heap: { values: [] },
        hashmap: {
          entries: [['user1_tweets', ['t1@0']], ['user1_follows', [2]], ['user2_tweets', ['t2@1']]],
          justAdded: 'user2_tweets',
        },
        variables: { time: 2 },
      },
    },
    {
      line: 6,
      label: 'getNewsFeed(1) - Build Heap',
      message: 'Merge feeds: push latest tweet from user 1 (t1@0) and user 2 (t2@1) into max-heap.',
      isKeyMoment: true,
      viz: {
        heap: { values: [1, 0] },
        hashmap: {
          entries: [['user1_tweets', ['t1@0']], ['user2_tweets', ['t2@1']]],
        },
        variables: { heapEntries: ['t2@1', 't1@0'] },
      },
    },
    {
      line: 6,
      label: 'Pop Feed Items',
      message: 'Pop t2 (time 1), then t1 (time 0). Feed = ["t2", "t1"]. Most recent first.',
      isKeyMoment: true,
      viz: {
        heap: { values: [], removing: true },
        hashmap: {
          entries: [['feed', ['t2', 't1']]],
          highlighted: 'feed',
        },
        variables: { result: ['t2', 't1'] },
      },
    },
    {
      line: 6,
      label: 'Complete',
      message: 'Heap merges k sorted tweet lists efficiently. Only fetches up to 10 most recent.',
      viz: {
        heap: { values: [] },
        hashmap: {
          entries: [['feed', ['t2', 't1']]],
        },
        variables: { result: ['t2', 't1'] },
      },
    },
  ],
};

const findMedian: Problem = {
  id: 'find-median-from-data-stream',
  name: 'Find Median from Data Stream',
  number: 295,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/find-median-from-data-stream/',
  description: 'Design a data structure that supports addNum and findMedian in O(log n) time.',
  vizTypes: ['heap'],
  language: 'python',
  testInput: 'addNum(1), addNum(2), findMedian(), addNum(3), findMedian()',
  timeComplexity: 'O(log n) add, O(1) median',
  spaceComplexity: 'O(n)',
  pattern: 'Heap / Priority Queue',
  hints: [
    'Use two heaps: max-heap for lower half, min-heap for upper half.',
    'Keep heaps balanced (sizes differ by at most 1).',
  ],
  code: `class MedianFinder:
    def __init__(self):
        self.lo = []  # max-heap (negated)
        self.hi = []  # min-heap

    def addNum(self, num):
        heapq.heappush(self.lo, -num)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))

    def findMedian(self):
        if len(self.lo) > len(self.hi):
            return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Two heaps: maxHeap (lower half) and minHeap (upper half). Both empty.',
      viz: {
        heap: { values: [] },
        variables: { maxHeap: '[]', minHeap: '[]' },
      },
    },
    {
      line: 3,
      label: 'addNum(1)',
      message: 'Push 1 to maxHeap. Move top to minHeap. Rebalance. maxHeap=[1], minHeap=[].',
      viz: {
        heap: { values: [1], inserting: 1 },
        variables: { maxHeap: [1], minHeap: [], sizes: '1 vs 0' },
      },
    },
    {
      line: 3,
      label: 'addNum(2)',
      message: 'Push 2. After balancing: maxHeap=[1], minHeap=[2]. Equal sizes.',
      isKeyMoment: true,
      viz: {
        heap: { values: [1, 2], inserting: 2 },
        variables: { maxHeap: [1], minHeap: [2], sizes: '1 vs 1' },
      },
    },
    {
      line: 5,
      label: 'findMedian()',
      message: 'Equal sizes: median = (maxTop + minTop) / 2 = (1 + 2) / 2 = 1.5.',
      isKeyMoment: true,
      viz: {
        heap: { values: [1, 2], comparing: [0, 1] },
        variables: { maxTop: 1, minTop: 2, median: 1.5 },
      },
    },
    {
      line: 3,
      label: 'addNum(3)',
      message: 'Push 3. After balancing: maxHeap=[2,1], minHeap=[3]. maxHeap has one more.',
      viz: {
        heap: { values: [2, 1, 3], inserting: 3 },
        variables: { maxHeap: [2, 1], minHeap: [3], sizes: '2 vs 1' },
      },
    },
    {
      line: 5,
      label: 'findMedian()',
      message: 'maxHeap is larger: median = maxTop = 2. The middle element of [1, 2, 3].',
      isKeyMoment: true,
      viz: {
        heap: { values: [2, 1, 3] },
        variables: { maxTop: 2, median: 2, stream: [1, 2, 3] },
      },
    },
    {
      line: 5,
      label: 'Complete',
      message: 'Two heaps split data at median. maxHeap root >= all lower, minHeap root <= all upper.',
      viz: {
        heap: { values: [2, 1, 3] },
        variables: { maxHeap: [2, 1], minHeap: [3], pattern: 'two heaps' },
      },
    },
  ],
};

export const heapProblems: Problem[] = [
  kthLargestInStream,
  lastStoneWeight,
  kClosestPoints,
  kthLargestInArray,
  taskScheduler,
  designTwitter,
  findMedian,
];
