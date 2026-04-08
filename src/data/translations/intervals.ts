import type { TranslationMap } from './index';

export const intervalsTranslations: TranslationMap = {
  'insert-interval': {
    javascript: {
      code: `function insert(intervals, newInterval) {\n  const res = [];\n  for (let i = 0; i < intervals.length; i++) {\n    if (intervals[i][1] < newInterval[0]) {\n      res.push(intervals[i]);\n    } else if (intervals[i][0] > newInterval[1]) {\n      res.push(newInterval);\n      return res.concat(intervals.slice(i));\n    } else {\n      newInterval = [\n        Math.min(intervals[i][0], newInterval[0]),\n        Math.max(intervals[i][1], newInterval[1]),\n      ];\n    }\n  }\n  res.push(newInterval);\n  return res;\n}`,
    },
    go: {
      code: `func insert(intervals [][]int, newInterval []int) [][]int {\n\tres := [][]int{}\n\tfor i, iv := range intervals {\n\t\tif iv[1] < newInterval[0] {\n\t\t\tres = append(res, iv)\n\t\t} else if iv[0] > newInterval[1] {\n\t\t\tres = append(res, newInterval)\n\t\t\treturn append(res, intervals[i:]...)\n\t\t} else {\n\t\t\tnewInterval[0] = min(iv[0], newInterval[0])\n\t\t\tnewInterval[1] = max(iv[1], newInterval[1])\n\t\t}\n\t}\n\tres = append(res, newInterval)\n\treturn res\n}`,
    },
  },
  'merge-intervals': {
    javascript: {
      code: `function merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const res = [intervals[0]];\n  for (let i = 1; i < intervals.length; i++) {\n    const [start, end] = intervals[i];\n    if (start <= res[res.length - 1][1]) {\n      res[res.length - 1][1] = Math.max(res[res.length - 1][1], end);\n    } else {\n      res.push([start, end]);\n    }\n  }\n  return res;\n}`,
    },
    go: {
      code: `func merge(intervals [][]int) [][]int {\n\tsort.Slice(intervals, func(i, j int) bool {\n\t\treturn intervals[i][0] < intervals[j][0]\n\t})\n\tres := [][]int{intervals[0]}\n\tfor i := 1; i < len(intervals); i++ {\n\t\tlast := res[len(res)-1]\n\t\tif intervals[i][0] <= last[1] {\n\t\t\tif intervals[i][1] > last[1] { last[1] = intervals[i][1] }\n\t\t} else {\n\t\t\tres = append(res, intervals[i])\n\t\t}\n\t}\n\treturn res\n}`,
    },
  },
  'non-overlapping-intervals': {
    javascript: {
      code: `function eraseOverlapIntervals(intervals) {\n  intervals.sort((a, b) => a[1] - b[1]);\n  let count = 0;\n  let end = -Infinity;\n  for (const [s, e] of intervals) {\n    if (s >= end) {\n      end = e;\n    } else {\n      count++;\n    }\n  }\n  return count;\n}`,
    },
    go: {
      code: `func eraseOverlapIntervals(intervals [][]int) int {\n\tsort.Slice(intervals, func(i, j int) bool {\n\t\treturn intervals[i][1] < intervals[j][1]\n\t})\n\tcount := 0\n\tend := -1 << 31\n\tfor _, iv := range intervals {\n\t\tif iv[0] >= end {\n\t\t\tend = iv[1]\n\t\t} else {\n\t\t\tcount++\n\t\t}\n\t}\n\treturn count\n}`,
    },
  },
  'meeting-rooms': {
    javascript: {
      code: `function canAttendMeetings(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  for (let i = 1; i < intervals.length; i++) {\n    if (intervals[i][0] < intervals[i - 1][1]) {\n      return false;\n    }\n  }\n  return true;\n}`,
    },
    go: {
      code: `func canAttendMeetings(intervals [][]int) bool {\n\tsort.Slice(intervals, func(i, j int) bool {\n\t\treturn intervals[i][0] < intervals[j][0]\n\t})\n\tfor i := 1; i < len(intervals); i++ {\n\t\tif intervals[i][0] < intervals[i-1][1] {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true\n}`,
    },
  },
  'meeting-rooms-ii': {
    javascript: {
      code: `function minMeetingRooms(intervals) {\n  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);\n  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);\n  let rooms = 0, maxRooms = 0, e = 0;\n  for (const s of starts) {\n    if (s < ends[e]) {\n      rooms++;\n    } else {\n      e++;\n    }\n    maxRooms = Math.max(maxRooms, rooms);\n  }\n  return maxRooms;\n}`,
    },
    go: {
      code: `func minMeetingRooms(intervals [][]int) int {\n\tstarts := make([]int, len(intervals))\n\tends := make([]int, len(intervals))\n\tfor i, iv := range intervals {\n\t\tstarts[i] = iv[0]\n\t\tends[i] = iv[1]\n\t}\n\tsort.Ints(starts)\n\tsort.Ints(ends)\n\trooms, maxRooms, e := 0, 0, 0\n\tfor _, s := range starts {\n\t\tif s < ends[e] {\n\t\t\trooms++\n\t\t} else {\n\t\t\te++\n\t\t}\n\t\tif rooms > maxRooms { maxRooms = rooms }\n\t}\n\treturn maxRooms\n}`,
    },
  },
  'minimum-interval-to-include-each-query': {
    javascript: {
      code: `function minInterval(intervals, queries) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const res = {};\n  const heap = [];\n  let i = 0;\n  const sortedQ = [...queries].sort((a, b) => a - b);\n  for (const q of sortedQ) {\n    while (i < intervals.length && intervals[i][0] <= q) {\n      const [l, r] = intervals[i];\n      heap.push([r - l + 1, r]);\n      heap.sort((a, b) => a[0] - b[0]);\n      i++;\n    }\n    while (heap.length && heap[0][1] < q) heap.shift();\n    res[q] = heap.length ? heap[0][0] : -1;\n  }\n  return queries.map(q => res[q]);\n}`,
    },
    go: {
      code: `func minInterval(intervals [][]int, queries []int) []int {\n\tsort.Slice(intervals, func(i, j int) bool {\n\t\treturn intervals[i][0] < intervals[j][0]\n\t})\n\tres := map[int]int{}\n\th := &MinHeap{}\n\theap.Init(h)\n\ti := 0\n\tsortedQ := make([]int, len(queries))\n\tcopy(sortedQ, queries)\n\tsort.Ints(sortedQ)\n\tfor _, q := range sortedQ {\n\t\tfor i < len(intervals) && intervals[i][0] <= q {\n\t\t\tl, r := intervals[i][0], intervals[i][1]\n\t\t\theap.Push(h, [2]int{r - l + 1, r})\n\t\t\ti++\n\t\t}\n\t\tfor h.Len() > 0 && (*h)[0][1] < q {\n\t\t\theap.Pop(h)\n\t\t}\n\t\tif h.Len() > 0 {\n\t\t\tres[q] = (*h)[0][0]\n\t\t} else {\n\t\t\tres[q] = -1\n\t\t}\n\t}\n\tans := make([]int, len(queries))\n\tfor idx, q := range queries {\n\t\tans[idx] = res[q]\n\t}\n\treturn ans\n}`,
    },
  },
};
