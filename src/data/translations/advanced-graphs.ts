import type { TranslationMap } from './index';

export const advancedGraphsTranslations: TranslationMap = {
  'reconstruct-itinerary': {
    javascript: {
      code: `function findItinerary(tickets) {\n  const graph = {};\n  tickets.sort().reverse();\n  for (const [src, dst] of tickets) {\n    if (!graph[src]) graph[src] = [];\n    graph[src].push(dst);\n  }\n  const route = [];\n  function dfs(airport) {\n    while (graph[airport] && graph[airport].length) {\n      dfs(graph[airport].pop());\n    }\n    route.push(airport);\n  }\n  dfs("JFK");\n  return route.reverse();\n}`,
    },
    go: {
      code: `func findItinerary(tickets [][]string) []string {\n\tgraph := map[string][]string{}\n\tsort.Slice(tickets, func(i, j int) bool {\n\t\tif tickets[i][0] == tickets[j][0] {\n\t\t\treturn tickets[i][1] > tickets[j][1]\n\t\t}\n\t\treturn tickets[i][0] > tickets[j][0]\n\t})\n\tfor _, t := range tickets {\n\t\tgraph[t[0]] = append(graph[t[0]], t[1])\n\t}\n\troute := []string{}\n\tvar dfs func(string)\n\tdfs = func(airport string) {\n\t\tfor len(graph[airport]) > 0 {\n\t\t\tnext := graph[airport][len(graph[airport])-1]\n\t\t\tgraph[airport] = graph[airport][:len(graph[airport])-1]\n\t\t\tdfs(next)\n\t\t}\n\t\troute = append(route, airport)\n\t}\n\tdfs("JFK")\n\tfor i, j := 0, len(route)-1; i < j; i, j = i+1, j-1 {\n\t\troute[i], route[j] = route[j], route[i]\n\t}\n\treturn route\n}`,
    },
  },
  'min-cost-to-connect-all-points': {
    javascript: {
      code: `function minCostConnectPoints(points) {\n  const n = points.length;\n  const visited = new Set();\n  const heap = [[0, 0]]; // [cost, pointIdx]\n  let total = 0;\n  while (visited.size < n) {\n    heap.sort((a, b) => a[0] - b[0]);\n    const [cost, i] = heap.shift();\n    if (visited.has(i)) continue;\n    visited.add(i);\n    total += cost;\n    for (let j = 0; j < n; j++) {\n      if (!visited.has(j)) {\n        const d = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);\n        heap.push([d, j]);\n      }\n    }\n  }\n  return total;\n}`,
    },
    go: {
      code: `func minCostConnectPoints(points [][]int) int {\n\tn := len(points)\n\tvisited := map[int]bool{}\n\th := &IntHeap{{0, 0}}\n\theap.Init(h)\n\ttotal := 0\n\tfor len(visited) < n {\n\t\titem := heap.Pop(h).([2]int)\n\t\tcost, i := item[0], item[1]\n\t\tif visited[i] { continue }\n\t\tvisited[i] = true\n\t\ttotal += cost\n\t\tfor j := 0; j < n; j++ {\n\t\t\tif !visited[j] {\n\t\t\t\td := abs(points[i][0]-points[j][0]) + abs(points[i][1]-points[j][1])\n\t\t\t\theap.Push(h, [2]int{d, j})\n\t\t\t}\n\t\t}\n\t}\n\treturn total\n}`,
    },
  },
  'network-delay-time': {
    javascript: {
      code: `function networkDelayTime(times, n, k) {\n  const graph = {};\n  for (const [u, v, w] of times) {\n    if (!graph[u]) graph[u] = [];\n    graph[u].push([v, w]);\n  }\n  const dist = {};\n  const heap = [[0, k]];\n  while (heap.length) {\n    heap.sort((a, b) => a[0] - b[0]);\n    const [d, node] = heap.shift();\n    if (node in dist) continue;\n    dist[node] = d;\n    if (graph[node]) {\n      for (const [nei, w] of graph[node]) {\n        if (!(nei in dist)) heap.push([d + w, nei]);\n      }\n    }\n  }\n  if (Object.keys(dist).length === n) {\n    return Math.max(...Object.values(dist));\n  }\n  return -1;\n}`,
    },
    go: {
      code: `func networkDelayTime(times [][]int, n int, k int) int {\n\tgraph := map[int][][2]int{}\n\tfor _, t := range times {\n\t\tgraph[t[0]] = append(graph[t[0]], [2]int{t[1], t[2]})\n\t}\n\tdist := map[int]int{}\n\th := &IntHeap{{0, k}}\n\theap.Init(h)\n\tfor h.Len() > 0 {\n\t\titem := heap.Pop(h).([2]int)\n\t\td, node := item[0], item[1]\n\t\tif _, ok := dist[node]; ok { continue }\n\t\tdist[node] = d\n\t\tfor _, edge := range graph[node] {\n\t\t\tif _, ok := dist[edge[0]]; !ok {\n\t\t\t\theap.Push(h, [2]int{d + edge[1], edge[0]})\n\t\t\t}\n\t\t}\n\t}\n\tif len(dist) != n { return -1 }\n\tmax := 0\n\tfor _, v := range dist {\n\t\tif v > max { max = v }\n\t}\n\treturn max\n}`,
    },
  },
  'swim-in-rising-water': {
    javascript: {
      code: `function swimInWater(grid) {\n  const n = grid.length;\n  let lo = grid[0][0], hi = n * n - 1;\n  while (lo < hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (canReach(grid, mid)) {\n      hi = mid;\n    } else {\n      lo = mid + 1;\n    }\n  }\n  return lo;\n}\n\nfunction canReach(grid, t) {\n  const n = grid.length;\n  if (grid[0][0] > t) return false;\n  const visited = new Set();\n  const stack = [[0, 0]];\n  visited.add('0,0');\n  while (stack.length) {\n    const [r, c] = stack.pop();\n    if (r === n - 1 && c === n - 1) return true;\n    for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {\n      const nr = r + dr, nc = c + dc;\n      const key = nr + ',' + nc;\n      if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited.has(key) && grid[nr][nc] <= t) {\n        visited.add(key);\n        stack.push([nr, nc]);\n      }\n    }\n  }\n  return false;\n}`,
    },
    go: {
      code: `func swimInWater(grid [][]int) int {\n\tn := len(grid)\n\tlo, hi := grid[0][0], n*n-1\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\tif canReach(grid, mid) {\n\t\t\thi = mid\n\t\t} else {\n\t\t\tlo = mid + 1\n\t\t}\n\t}\n\treturn lo\n}\n\nfunc canReach(grid [][]int, t int) bool {\n\tn := len(grid)\n\tif grid[0][0] > t { return false }\n\tvisited := map[[2]int]bool{{0, 0}: true}\n\tstack := [][2]int{{0, 0}}\n\tfor len(stack) > 0 {\n\t\tcell := stack[len(stack)-1]\n\t\tstack = stack[:len(stack)-1]\n\t\tif cell[0] == n-1 && cell[1] == n-1 { return true }\n\t\tfor _, d := range [][2]int{{1,0},{-1,0},{0,1},{0,-1}} {\n\t\t\tnr, nc := cell[0]+d[0], cell[1]+d[1]\n\t\t\tkey := [2]int{nr, nc}\n\t\t\tif nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[key] && grid[nr][nc] <= t {\n\t\t\t\tvisited[key] = true\n\t\t\t\tstack = append(stack, key)\n\t\t\t}\n\t\t}\n\t}\n\treturn false\n}`,
    },
  },
  'alien-dictionary': {
    javascript: {
      code: `function alienOrder(words) {\n  const graph = {};\n  const indegree = {};\n  for (const w of words) {\n    for (const c of w) {\n      if (!(c in graph)) { graph[c] = new Set(); indegree[c] = 0; }\n    }\n  }\n  for (let i = 0; i < words.length - 1; i++) {\n    const w1 = words[i], w2 = words[i + 1];\n    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {\n      if (w1[j] !== w2[j]) {\n        if (!graph[w1[j]].has(w2[j])) {\n          graph[w1[j]].add(w2[j]);\n          indegree[w2[j]]++;\n        }\n        break;\n      }\n    }\n  }\n  const q = Object.keys(indegree).filter(c => indegree[c] === 0);\n  const result = [];\n  while (q.length) {\n    const c = q.shift();\n    result.push(c);\n    for (const nei of graph[c]) {\n      indegree[nei]--;\n      if (indegree[nei] === 0) q.push(nei);\n    }\n  }\n  return result.length === Object.keys(indegree).length ? result.join('') : '';\n}`,
    },
    go: {
      code: `func alienOrder(words []string) string {\n\tgraph := map[byte]map[byte]bool{}\n\tindegree := map[byte]int{}\n\tfor _, w := range words {\n\t\tfor i := 0; i < len(w); i++ {\n\t\t\tif _, ok := graph[w[i]]; !ok {\n\t\t\t\tgraph[w[i]] = map[byte]bool{}\n\t\t\t\tindegree[w[i]] = 0\n\t\t\t}\n\t\t}\n\t}\n\tfor i := 0; i < len(words)-1; i++ {\n\t\tw1, w2 := words[i], words[i+1]\n\t\tfor j := 0; j < len(w1) && j < len(w2); j++ {\n\t\t\tif w1[j] != w2[j] {\n\t\t\t\tif !graph[w1[j]][w2[j]] {\n\t\t\t\t\tgraph[w1[j]][w2[j]] = true\n\t\t\t\t\tindegree[w2[j]]++\n\t\t\t\t}\n\t\t\t\tbreak\n\t\t\t}\n\t\t}\n\t}\n\tqueue := []byte{}\n\tfor c, deg := range indegree {\n\t\tif deg == 0 { queue = append(queue, c) }\n\t}\n\tresult := []byte{}\n\tfor len(queue) > 0 {\n\t\tc := queue[0]\n\t\tqueue = queue[1:]\n\t\tresult = append(result, c)\n\t\tfor nei := range graph[c] {\n\t\t\tindegree[nei]--\n\t\t\tif indegree[nei] == 0 { queue = append(queue, nei) }\n\t\t}\n\t}\n\tif len(result) != len(indegree) { return "" }\n\treturn string(result)\n}`,
    },
  },
  'cheapest-flights-within-k-stops': {
    javascript: {
      code: `function findCheapestPrice(n, flights, src, dst, k) {\n  let prices = new Array(n).fill(Infinity);\n  prices[src] = 0;\n  for (let i = 0; i <= k; i++) {\n    const tmp = [...prices];\n    for (const [u, v, w] of flights) {\n      if (prices[u] !== Infinity) {\n        tmp[v] = Math.min(tmp[v], prices[u] + w);\n      }\n    }\n    prices = tmp;\n  }\n  return prices[dst] !== Infinity ? prices[dst] : -1;\n}`,
    },
    go: {
      code: `func findCheapestPrice(n int, flights [][]int, src int, dst int, k int) int {\n\tconst inf = 1<<31 - 1\n\tprices := make([]int, n)\n\tfor i := range prices { prices[i] = inf }\n\tprices[src] = 0\n\tfor i := 0; i <= k; i++ {\n\t\ttmp := make([]int, n)\n\t\tcopy(tmp, prices)\n\t\tfor _, f := range flights {\n\t\t\tu, v, w := f[0], f[1], f[2]\n\t\t\tif prices[u] != inf && prices[u]+w < tmp[v] {\n\t\t\t\ttmp[v] = prices[u] + w\n\t\t\t}\n\t\t}\n\t\tprices = tmp\n\t}\n\tif prices[dst] == inf { return -1 }\n\treturn prices[dst]\n}`,
    },
  },
};
