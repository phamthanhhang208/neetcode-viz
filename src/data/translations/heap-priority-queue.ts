import type { TranslationMap } from './index';

export const heapPriorityQueueTranslations: TranslationMap = {
  'kth-largest-element-in-stream': {
    javascript: {
      code: `class KthLargest {\n    constructor(k, nums) {\n        this.k = k;\n        this.heap = new MinHeap();\n        for (const num of nums) {\n            this.add(num);\n        }\n    }\n\n    add(val) {\n        this.heap.push(val);\n        if (this.heap.size() > this.k) {\n            this.heap.pop();\n        }\n        return this.heap.peek();\n    }\n}`,
    },
    go: {
      code: `type KthLargest struct {\n    k    int\n    heap *MinHeap\n}\n\nfunc Constructor(k int, nums []int) KthLargest {\n    h := &MinHeap{}\n    heap.Init(h)\n    kl := KthLargest{k: k, heap: h}\n    for _, num := range nums {\n        kl.Add(num)\n    }\n    return kl\n}\n\nfunc (kl *KthLargest) Add(val int) int {\n    heap.Push(kl.heap, val)\n    if kl.heap.Len() > kl.k {\n        heap.Pop(kl.heap)\n    }\n    return (*kl.heap)[0]\n}`,
    },
  },
  'last-stone-weight': {
    javascript: {
      code: `function lastStoneWeight(stones) {\n    const heap = new MaxHeap(stones);\n    while (heap.size() > 1) {\n        const a = heap.pop();\n        const b = heap.pop();\n        if (a !== b) {\n            heap.push(a - b);\n        }\n    }\n    return heap.size() > 0 ? heap.peek() : 0;\n}`,
    },
    go: {
      code: `func lastStoneWeight(stones []int) int {\n    h := &MaxHeap{}\n    for _, s := range stones {\n        heap.Push(h, s)\n    }\n    for h.Len() > 1 {\n        a := heap.Pop(h).(int)\n        b := heap.Pop(h).(int)\n        if a != b {\n            heap.Push(h, a-b)\n        }\n    }\n    if h.Len() > 0 {\n        return (*h)[0]\n    }\n    return 0\n}`,
    },
  },
  'k-closest-points-to-origin': {
    javascript: {
      code: `function kClosest(points, k) {\n    const heap = new MaxHeap();\n    for (const [x, y] of points) {\n        const dist = x * x + y * y;\n        heap.push([dist, x, y]);\n        if (heap.size() > k) {\n            heap.pop();\n        }\n    }\n    return heap.toArray().map(([_, x, y]) => [x, y]);\n}`,
    },
    go: {
      code: `func kClosest(points [][]int, k int) [][]int {\n    h := &MaxHeap{}\n    heap.Init(h)\n    for _, p := range points {\n        dist := p[0]*p[0] + p[1]*p[1]\n        heap.Push(h, [3]int{dist, p[0], p[1]})\n        if h.Len() > k {\n            heap.Pop(h)\n        }\n    }\n    result := [][]int{}\n    for h.Len() > 0 {\n        item := heap.Pop(h).([3]int)\n        result = append(result, []int{item[1], item[2]})\n    }\n    return result\n}`,
    },
  },
  'kth-largest-element-in-array': {
    javascript: {
      code: `function findKthLargest(nums, k) {\n    const heap = new MinHeap();\n    for (const num of nums) {\n        heap.push(num);\n        if (heap.size() > k) {\n            heap.pop();\n        }\n    }\n    return heap.peek();\n}`,
    },
    go: {
      code: `func findKthLargest(nums []int, k int) int {\n    h := &MinHeap{}\n    heap.Init(h)\n    for _, num := range nums {\n        heap.Push(h, num)\n        if h.Len() > k {\n            heap.Pop(h)\n        }\n    }\n    return (*h)[0]\n}`,
    },
  },
  'task-scheduler': {
    javascript: {
      code: `function leastInterval(tasks, n) {\n    const freq = {};\n    for (const t of tasks) {\n        freq[t] = (freq[t] || 0) + 1;\n    }\n    const heap = new MaxHeap();\n    for (const f of Object.values(freq)) {\n        heap.push(f);\n    }\n    let time = 0;\n    const queue = [];\n    while (heap.size() > 0 || queue.length > 0) {\n        time++;\n        if (heap.size() > 0) {\n            const cnt = heap.pop() - 1;\n            if (cnt > 0) {\n                queue.push([cnt, time + n]);\n            }\n        }\n        if (queue.length > 0 && queue[0][1] === time) {\n            heap.push(queue.shift()[0]);\n        }\n    }\n    return time;\n}`,
    },
    go: {
      code: `func leastInterval(tasks []byte, n int) int {\n    freq := make(map[byte]int)\n    for _, t := range tasks {\n        freq[t]++\n    }\n    h := &MaxHeap{}\n    heap.Init(h)\n    for _, f := range freq {\n        heap.Push(h, f)\n    }\n    time := 0\n    queue := [][2]int{}\n    for h.Len() > 0 || len(queue) > 0 {\n        time++\n        if h.Len() > 0 {\n            cnt := heap.Pop(h).(int) - 1\n            if cnt > 0 {\n                queue = append(queue, [2]int{cnt, time + n})\n            }\n        }\n        if len(queue) > 0 && queue[0][1] == time {\n            heap.Push(h, queue[0][0])\n            queue = queue[1:]\n        }\n    }\n    return time\n}`,
    },
  },
  'design-twitter': {
    javascript: {
      code: `class Twitter {\n    constructor() {\n        this.time = 0;\n        this.tweets = {};\n        this.following = {};\n    }\n\n    postTweet(userId, tweetId) {\n        if (!this.tweets[userId]) this.tweets[userId] = [];\n        this.tweets[userId].push([this.time++, tweetId]);\n    }\n\n    getNewsFeed(userId) {\n        const heap = new MaxHeap();\n        const users = new Set([userId, ...(this.following[userId] || [])]);\n        for (const u of users) {\n            const tw = this.tweets[u] || [];\n            if (tw.length > 0) {\n                const idx = tw.length - 1;\n                heap.push([tw[idx][0], tw[idx][1], u, idx]);\n            }\n        }\n        const feed = [];\n        while (heap.size() > 0 && feed.length < 10) {\n            const [_, tid, u, idx] = heap.pop();\n            feed.push(tid);\n            if (idx > 0) {\n                const tw = this.tweets[u];\n                heap.push([tw[idx - 1][0], tw[idx - 1][1], u, idx - 1]);\n            }\n        }\n        return feed;\n    }\n\n    follow(followerId, followeeId) {\n        if (!this.following[followerId]) this.following[followerId] = new Set();\n        this.following[followerId].add(followeeId);\n    }\n\n    unfollow(followerId, followeeId) {\n        if (this.following[followerId]) {\n            this.following[followerId].delete(followeeId);\n        }\n    }\n}`,
    },
    go: {
      code: `type Twitter struct {\n    time      int\n    tweets    map[int][][2]int\n    following map[int]map[int]bool\n}\n\nfunc Constructor() Twitter {\n    return Twitter{\n        tweets:    make(map[int][][2]int),\n        following: make(map[int]map[int]bool),\n    }\n}\n\nfunc (t *Twitter) PostTweet(userId, tweetId int) {\n    t.tweets[userId] = append(t.tweets[userId], [2]int{t.time, tweetId})\n    t.time++\n}\n\nfunc (t *Twitter) GetNewsFeed(userId int) []int {\n    h := &MaxHeap{}\n    heap.Init(h)\n    users := map[int]bool{userId: true}\n    for u := range t.following[userId] {\n        users[u] = true\n    }\n    for u := range users {\n        tw := t.tweets[u]\n        if len(tw) > 0 {\n            idx := len(tw) - 1\n            heap.Push(h, [4]int{tw[idx][0], tw[idx][1], u, idx})\n        }\n    }\n    feed := []int{}\n    for h.Len() > 0 && len(feed) < 10 {\n        item := heap.Pop(h).([4]int)\n        feed = append(feed, item[1])\n        idx := item[3]\n        u := item[2]\n        if idx > 0 {\n            tw := t.tweets[u]\n            heap.Push(h, [4]int{tw[idx-1][0], tw[idx-1][1], u, idx - 1})\n        }\n    }\n    return feed\n}\n\nfunc (t *Twitter) Follow(followerId, followeeId int) {\n    if t.following[followerId] == nil {\n        t.following[followerId] = make(map[int]bool)\n    }\n    t.following[followerId][followeeId] = true\n}\n\nfunc (t *Twitter) Unfollow(followerId, followeeId int) {\n    delete(t.following[followerId], followeeId)\n}`,
    },
  },
  'find-median-from-data-stream': {
    javascript: {
      code: `class MedianFinder {\n    constructor() {\n        this.lo = new MaxHeap();\n        this.hi = new MinHeap();\n    }\n\n    addNum(num) {\n        this.lo.push(num);\n        this.hi.push(this.lo.pop());\n        if (this.hi.size() > this.lo.size()) {\n            this.lo.push(this.hi.pop());\n        }\n    }\n\n    findMedian() {\n        if (this.lo.size() > this.hi.size()) {\n            return this.lo.peek();\n        }\n        return (this.lo.peek() + this.hi.peek()) / 2;\n    }\n}`,
    },
    go: {
      code: `type MedianFinder struct {\n    lo *MaxHeap\n    hi *MinHeap\n}\n\nfunc Constructor() MedianFinder {\n    lo := &MaxHeap{}\n    hi := &MinHeap{}\n    heap.Init(lo)\n    heap.Init(hi)\n    return MedianFinder{lo: lo, hi: hi}\n}\n\nfunc (mf *MedianFinder) AddNum(num int) {\n    heap.Push(mf.lo, num)\n    heap.Push(mf.hi, heap.Pop(mf.lo))\n    if mf.hi.Len() > mf.lo.Len() {\n        heap.Push(mf.lo, heap.Pop(mf.hi))\n    }\n}\n\nfunc (mf *MedianFinder) FindMedian() float64 {\n    if mf.lo.Len() > mf.hi.Len() {\n        return float64((*mf.lo)[0])\n    }\n    return float64((*mf.lo)[0]+(*mf.hi)[0]) / 2.0\n}`,
    },
  },
};
