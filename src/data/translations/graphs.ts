import type { TranslationMap } from './index';

export const graphsTranslations: TranslationMap = {
  'number-of-islands': {
    javascript: {
      code: `function numIslands(grid) {\n  let count = 0;\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === "1") {\n        bfs(grid, r, c);\n        count++;\n      }\n    }\n  }\n  return count;\n}`,
    },
    go: {
      code: `func numIslands(grid [][]byte) int {\n\tcount := 0\n\tfor r := 0; r < len(grid); r++ {\n\t\tfor c := 0; c < len(grid[0]); c++ {\n\t\t\tif grid[r][c] == '1' {\n\t\t\t\tbfs(grid, r, c)\n\t\t\t\tcount++\n\t\t\t}\n\t\t}\n\t}\n\treturn count\n}`,
    },
  },
  'max-area-of-island': {
    javascript: {
      code: `function maxAreaOfIsland(grid) {\n  let maxArea = 0;\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === 1) {\n        const area = dfs(grid, r, c);\n        maxArea = Math.max(maxArea, area);\n      }\n    }\n  }\n  return maxArea;\n}`,
    },
    go: {
      code: `func maxAreaOfIsland(grid [][]int) int {\n\tmaxArea := 0\n\tfor r := 0; r < len(grid); r++ {\n\t\tfor c := 0; c < len(grid[0]); c++ {\n\t\t\tif grid[r][c] == 1 {\n\t\t\t\tarea := dfs(grid, r, c)\n\t\t\t\tif area > maxArea {\n\t\t\t\t\tmaxArea = area\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn maxArea\n}`,
    },
  },
  'clone-graph': {
    javascript: {
      code: `function cloneGraph(node) {\n  if (!node) return null;\n  const cloneMap = new Map();\n  cloneMap.set(node, new Node(node.val));\n  const queue = [node];\n  while (queue.length) {\n    const curr = queue.shift();\n    for (const nei of curr.neighbors) {\n      if (!cloneMap.has(nei)) {\n        cloneMap.set(nei, new Node(nei.val));\n        queue.push(nei);\n      }\n      cloneMap.get(curr).neighbors.push(cloneMap.get(nei));\n    }\n  }\n  return cloneMap.get(node);\n}`,
    },
    go: {
      code: `func cloneGraph(node *Node) *Node {\n\tif node == nil {\n\t\treturn nil\n\t}\n\tcloneMap := map[*Node]*Node{node: {Val: node.Val}}\n\tqueue := []*Node{node}\n\tfor len(queue) > 0 {\n\t\tcurr := queue[0]\n\t\tqueue = queue[1:]\n\t\tfor _, nei := range curr.Neighbors {\n\t\t\tif _, ok := cloneMap[nei]; !ok {\n\t\t\t\tcloneMap[nei] = &Node{Val: nei.Val}\n\t\t\t\tqueue = append(queue, nei)\n\t\t\t}\n\t\t\tcloneMap[curr].Neighbors = append(cloneMap[curr].Neighbors, cloneMap[nei])\n\t\t}\n\t}\n\treturn cloneMap[node]\n}`,
    },
  },
  'walls-and-gates': {
    javascript: {
      code: `function wallsAndGates(rooms) {\n  const INF = 2147483647;\n  const q = [];\n  for (let r = 0; r < rooms.length; r++) {\n    for (let c = 0; c < rooms[0].length; c++) {\n      if (rooms[r][c] === 0) q.push([r, c]);\n    }\n  }\n  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];\n  while (q.length) {\n    const [r, c] = q.shift();\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < rooms.length && nc >= 0 && nc < rooms[0].length && rooms[nr][nc] === INF) {\n        rooms[nr][nc] = rooms[r][c] + 1;\n        q.push([nr, nc]);\n      }\n    }\n  }\n}`,
    },
    go: {
      code: `func wallsAndGates(rooms [][]int) {\n\tconst INF = 2147483647\n\tqueue := [][2]int{}\n\tfor r := 0; r < len(rooms); r++ {\n\t\tfor c := 0; c < len(rooms[0]); c++ {\n\t\t\tif rooms[r][c] == 0 {\n\t\t\t\tqueue = append(queue, [2]int{r, c})\n\t\t\t}\n\t\t}\n\t}\n\tdirs := [][2]int{{1,0},{-1,0},{0,1},{0,-1}}\n\tfor len(queue) > 0 {\n\t\tcell := queue[0]\n\t\tqueue = queue[1:]\n\t\tfor _, d := range dirs {\n\t\t\tnr, nc := cell[0]+d[0], cell[1]+d[1]\n\t\t\tif nr >= 0 && nr < len(rooms) && nc >= 0 && nc < len(rooms[0]) && rooms[nr][nc] == INF {\n\t\t\t\trooms[nr][nc] = rooms[cell[0]][cell[1]] + 1\n\t\t\t\tqueue = append(queue, [2]int{nr, nc})\n\t\t\t}\n\t\t}\n\t}\n}`,
    },
  },
  'rotting-oranges': {
    javascript: {
      code: `function orangesRotting(grid) {\n  const q = [];\n  let fresh = 0;\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === 2) q.push([r, c]);\n      else if (grid[r][c] === 1) fresh++;\n    }\n  }\n  let minutes = 0;\n  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];\n  while (q.length && fresh > 0) {\n    const size = q.length;\n    for (let i = 0; i < size; i++) {\n      const [r, c] = q.shift();\n      for (const [dr, dc] of dirs) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 1) {\n          grid[nr][nc] = 2;\n          q.push([nr, nc]);\n          fresh--;\n        }\n      }\n    }\n    minutes++;\n  }\n  return fresh === 0 ? minutes : -1;\n}`,
    },
    go: {
      code: `func orangesRotting(grid [][]int) int {\n\tqueue := [][2]int{}\n\tfresh := 0\n\tfor r := 0; r < len(grid); r++ {\n\t\tfor c := 0; c < len(grid[0]); c++ {\n\t\t\tif grid[r][c] == 2 {\n\t\t\t\tqueue = append(queue, [2]int{r, c})\n\t\t\t} else if grid[r][c] == 1 {\n\t\t\t\tfresh++\n\t\t\t}\n\t\t}\n\t}\n\tminutes := 0\n\tdirs := [][2]int{{1,0},{-1,0},{0,1},{0,-1}}\n\tfor len(queue) > 0 && fresh > 0 {\n\t\tsize := len(queue)\n\t\tfor i := 0; i < size; i++ {\n\t\t\tcell := queue[0]\n\t\t\tqueue = queue[1:]\n\t\t\tfor _, d := range dirs {\n\t\t\t\tnr, nc := cell[0]+d[0], cell[1]+d[1]\n\t\t\t\tif nr >= 0 && nr < len(grid) && nc >= 0 && nc < len(grid[0]) && grid[nr][nc] == 1 {\n\t\t\t\t\tgrid[nr][nc] = 2\n\t\t\t\t\tqueue = append(queue, [2]int{nr, nc})\n\t\t\t\t\tfresh--\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tminutes++\n\t}\n\tif fresh == 0 {\n\t\treturn minutes\n\t}\n\treturn -1\n}`,
    },
  },
  'pacific-atlantic-water-flow': {
    javascript: {
      code: `function pacificAtlantic(heights) {\n  const ROWS = heights.length, COLS = heights[0].length;\n  const pac = new Set(), atl = new Set();\n  function dfs(r, c, visit, prevH) {\n    const key = r + ',' + c;\n    if (visit.has(key) || r < 0 || c < 0 || r >= ROWS || c >= COLS || heights[r][c] < prevH) return;\n    visit.add(key);\n    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];\n    for (const [dr, dc] of dirs) dfs(r+dr, c+dc, visit, heights[r][c]);\n  }\n  for (let c = 0; c < COLS; c++) { dfs(0, c, pac, 0); dfs(ROWS-1, c, atl, 0); }\n  for (let r = 0; r < ROWS; r++) { dfs(r, 0, pac, 0); dfs(r, COLS-1, atl, 0); }\n  const result = [];\n  for (let r = 0; r < ROWS; r++) {\n    for (let c = 0; c < COLS; c++) {\n      if (pac.has(r+','+c) && atl.has(r+','+c)) result.push([r, c]);\n    }\n  }\n  return result;\n}`,
    },
    go: {
      code: `func pacificAtlantic(heights [][]int) [][]int {\n\tROWS, COLS := len(heights), len(heights[0])\n\tpac := map[[2]int]bool{}\n\tatl := map[[2]int]bool{}\n\tvar dfs func(r, c int, visit map[[2]int]bool, prevH int)\n\tdfs = func(r, c int, visit map[[2]int]bool, prevH int) {\n\t\tkey := [2]int{r, c}\n\t\tif visit[key] || r < 0 || c < 0 || r >= ROWS || c >= COLS || heights[r][c] < prevH {\n\t\t\treturn\n\t\t}\n\t\tvisit[key] = true\n\t\tdirs := [][2]int{{1,0},{-1,0},{0,1},{0,-1}}\n\t\tfor _, d := range dirs {\n\t\t\tdfs(r+d[0], c+d[1], visit, heights[r][c])\n\t\t}\n\t}\n\tfor c := 0; c < COLS; c++ { dfs(0, c, pac, 0); dfs(ROWS-1, c, atl, 0) }\n\tfor r := 0; r < ROWS; r++ { dfs(r, 0, pac, 0); dfs(r, COLS-1, atl, 0) }\n\tresult := [][]int{}\n\tfor r := 0; r < ROWS; r++ {\n\t\tfor c := 0; c < COLS; c++ {\n\t\t\tif pac[[2]int{r,c}] && atl[[2]int{r,c}] {\n\t\t\t\tresult = append(result, []int{r, c})\n\t\t\t}\n\t\t}\n\t}\n\treturn result\n}`,
    },
  },
  'surrounded-regions': {
    javascript: {
      code: `function solve(board) {\n  const ROWS = board.length, COLS = board[0].length;\n  function dfs(r, c) {\n    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== 'O') return;\n    board[r][c] = 'T';\n    dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1);\n  }\n  for (let r = 0; r < ROWS; r++) {\n    for (let c = 0; c < COLS; c++) {\n      if ((r === 0 || r === ROWS-1 || c === 0 || c === COLS-1) && board[r][c] === 'O') {\n        dfs(r, c);\n      }\n    }\n  }\n  for (let r = 0; r < ROWS; r++) {\n    for (let c = 0; c < COLS; c++) {\n      if (board[r][c] === 'O') board[r][c] = 'X';\n      else if (board[r][c] === 'T') board[r][c] = 'O';\n    }\n  }\n}`,
    },
    go: {
      code: `func solve(board [][]byte) {\n\tROWS, COLS := len(board), len(board[0])\n\tvar dfs func(r, c int)\n\tdfs = func(r, c int) {\n\t\tif r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] != 'O' {\n\t\t\treturn\n\t\t}\n\t\tboard[r][c] = 'T'\n\t\tdfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)\n\t}\n\tfor r := 0; r < ROWS; r++ {\n\t\tfor c := 0; c < COLS; c++ {\n\t\t\tif (r == 0 || r == ROWS-1 || c == 0 || c == COLS-1) && board[r][c] == 'O' {\n\t\t\t\tdfs(r, c)\n\t\t\t}\n\t\t}\n\t}\n\tfor r := 0; r < ROWS; r++ {\n\t\tfor c := 0; c < COLS; c++ {\n\t\t\tif board[r][c] == 'O' { board[r][c] = 'X' }\n\t\t\tif board[r][c] == 'T' { board[r][c] = 'O' }\n\t\t}\n\t}\n}`,
    },
  },
  'course-schedule': {
    javascript: {
      code: `function canFinish(numCourses, prerequisites) {\n  const adj = Array.from({length: numCourses}, () => []);\n  for (const [crs, pre] of prerequisites) adj[crs].push(pre);\n  const visiting = new Set(), visited = new Set();\n  function dfs(crs) {\n    if (visiting.has(crs)) return false;\n    if (visited.has(crs)) return true;\n    visiting.add(crs);\n    for (const pre of adj[crs]) {\n      if (!dfs(pre)) return false;\n    }\n    visiting.delete(crs);\n    visited.add(crs);\n    return true;\n  }\n  for (let c = 0; c < numCourses; c++) {\n    if (!dfs(c)) return false;\n  }\n  return true;\n}`,
    },
    go: {
      code: `func canFinish(numCourses int, prerequisites [][]int) bool {\n\tadj := make([][]int, numCourses)\n\tfor _, p := range prerequisites {\n\t\tadj[p[0]] = append(adj[p[0]], p[1])\n\t}\n\tvisiting := map[int]bool{}\n\tvisited := map[int]bool{}\n\tvar dfs func(int) bool\n\tdfs = func(crs int) bool {\n\t\tif visiting[crs] { return false }\n\t\tif visited[crs] { return true }\n\t\tvisiting[crs] = true\n\t\tfor _, pre := range adj[crs] {\n\t\t\tif !dfs(pre) { return false }\n\t\t}\n\t\tdelete(visiting, crs)\n\t\tvisited[crs] = true\n\t\treturn true\n\t}\n\tfor c := 0; c < numCourses; c++ {\n\t\tif !dfs(c) { return false }\n\t}\n\treturn true\n}`,
    },
  },
  'course-schedule-ii': {
    javascript: {
      code: `function findOrder(numCourses, prerequisites) {\n  const adj = Array.from({length: numCourses}, () => []);\n  for (const [crs, pre] of prerequisites) adj[crs].push(pre);\n  const output = [];\n  const visited = new Set(), cycle = new Set();\n  function dfs(crs) {\n    if (cycle.has(crs)) return false;\n    if (visited.has(crs)) return true;\n    cycle.add(crs);\n    for (const pre of adj[crs]) {\n      if (!dfs(pre)) return false;\n    }\n    cycle.delete(crs);\n    visited.add(crs);\n    output.push(crs);\n    return true;\n  }\n  for (let c = 0; c < numCourses; c++) {\n    if (!dfs(c)) return [];\n  }\n  return output;\n}`,
    },
    go: {
      code: `func findOrder(numCourses int, prerequisites [][]int) []int {\n\tadj := make([][]int, numCourses)\n\tfor _, p := range prerequisites {\n\t\tadj[p[0]] = append(adj[p[0]], p[1])\n\t}\n\toutput := []int{}\n\tvisited := map[int]bool{}\n\tcycle := map[int]bool{}\n\tvar dfs func(int) bool\n\tdfs = func(crs int) bool {\n\t\tif cycle[crs] { return false }\n\t\tif visited[crs] { return true }\n\t\tcycle[crs] = true\n\t\tfor _, pre := range adj[crs] {\n\t\t\tif !dfs(pre) { return false }\n\t\t}\n\t\tdelete(cycle, crs)\n\t\tvisited[crs] = true\n\t\toutput = append(output, crs)\n\t\treturn true\n\t}\n\tfor c := 0; c < numCourses; c++ {\n\t\tif !dfs(c) { return []int{} }\n\t}\n\treturn output\n}`,
    },
  },
  'graph-valid-tree': {
    javascript: {
      code: `function validTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const adj = Array.from({length: n}, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  const visited = new Set();\n  function dfs(node) {\n    visited.add(node);\n    for (const nei of adj[node]) {\n      if (!visited.has(nei)) dfs(nei);\n    }\n  }\n  dfs(0);\n  return visited.size === n;\n}`,
    },
    go: {
      code: `func validTree(n int, edges [][]int) bool {\n\tif len(edges) != n-1 {\n\t\treturn false\n\t}\n\tadj := make([][]int, n)\n\tfor _, e := range edges {\n\t\tadj[e[0]] = append(adj[e[0]], e[1])\n\t\tadj[e[1]] = append(adj[e[1]], e[0])\n\t}\n\tvisited := map[int]bool{}\n\tvar dfs func(int)\n\tdfs = func(node int) {\n\t\tvisited[node] = true\n\t\tfor _, nei := range adj[node] {\n\t\t\tif !visited[nei] {\n\t\t\t\tdfs(nei)\n\t\t\t}\n\t\t}\n\t}\n\tdfs(0)\n\treturn len(visited) == n\n}`,
    },
  },
  'number-of-connected-components': {
    javascript: {
      code: `function countComponents(n, edges) {\n  const parent = Array.from({length: n}, (_, i) => i);\n  const rank = new Array(n).fill(0);\n  function find(x) {\n    while (parent[x] !== x) {\n      parent[x] = parent[parent[x]];\n      x = parent[x];\n    }\n    return x;\n  }\n  function union(a, b) {\n    let pa = find(a), pb = find(b);\n    if (pa === pb) return 0;\n    if (rank[pa] < rank[pb]) [pa, pb] = [pb, pa];\n    parent[pb] = pa;\n    if (rank[pa] === rank[pb]) rank[pa]++;\n    return 1;\n  }\n  let components = n;\n  for (const [a, b] of edges) components -= union(a, b);\n  return components;\n}`,
    },
    go: {
      code: `func countComponents(n int, edges [][]int) int {\n\tparent := make([]int, n)\n\trank := make([]int, n)\n\tfor i := range parent { parent[i] = i }\n\tvar find func(int) int\n\tfind = func(x int) int {\n\t\tfor parent[x] != x {\n\t\t\tparent[x] = parent[parent[x]]\n\t\t\tx = parent[x]\n\t\t}\n\t\treturn x\n\t}\n\tunion := func(a, b int) int {\n\t\tpa, pb := find(a), find(b)\n\t\tif pa == pb { return 0 }\n\t\tif rank[pa] < rank[pb] { pa, pb = pb, pa }\n\t\tparent[pb] = pa\n\t\tif rank[pa] == rank[pb] { rank[pa]++ }\n\t\treturn 1\n\t}\n\tcomponents := n\n\tfor _, e := range edges {\n\t\tcomponents -= union(e[0], e[1])\n\t}\n\treturn components\n}`,
    },
  },
  'redundant-connection': {
    javascript: {
      code: `function findRedundantConnection(edges) {\n  const parent = Array.from({length: edges.length + 1}, (_, i) => i);\n  const rank = new Array(edges.length + 1).fill(0);\n  function find(x) {\n    while (parent[x] !== x) {\n      parent[x] = parent[parent[x]];\n      x = parent[x];\n    }\n    return x;\n  }\n  function union(a, b) {\n    let pa = find(a), pb = find(b);\n    if (pa === pb) return false;\n    if (rank[pa] < rank[pb]) [pa, pb] = [pb, pa];\n    parent[pb] = pa;\n    if (rank[pa] === rank[pb]) rank[pa]++;\n    return true;\n  }\n  for (const [a, b] of edges) {\n    if (!union(a, b)) return [a, b];\n  }\n}`,
    },
    go: {
      code: `func findRedundantConnection(edges [][]int) []int {\n\tparent := make([]int, len(edges)+1)\n\trank := make([]int, len(edges)+1)\n\tfor i := range parent { parent[i] = i }\n\tvar find func(int) int\n\tfind = func(x int) int {\n\t\tfor parent[x] != x {\n\t\t\tparent[x] = parent[parent[x]]\n\t\t\tx = parent[x]\n\t\t}\n\t\treturn x\n\t}\n\tunion := func(a, b int) bool {\n\t\tpa, pb := find(a), find(b)\n\t\tif pa == pb { return false }\n\t\tif rank[pa] < rank[pb] { pa, pb = pb, pa }\n\t\tparent[pb] = pa\n\t\tif rank[pa] == rank[pb] { rank[pa]++ }\n\t\treturn true\n\t}\n\tfor _, e := range edges {\n\t\tif !union(e[0], e[1]) {\n\t\t\treturn e\n\t\t}\n\t}\n\treturn nil\n}`,
    },
  },
  'word-ladder': {
    javascript: {
      code: `function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n  const queue = [[beginWord, 1]];\n  const visited = new Set([beginWord]);\n  while (queue.length) {\n    const [word, steps] = queue.shift();\n    for (let i = 0; i < word.length; i++) {\n      for (let c = 97; c <= 122; c++) {\n        const nextWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);\n        if (nextWord === endWord) return steps + 1;\n        if (wordSet.has(nextWord) && !visited.has(nextWord)) {\n          visited.add(nextWord);\n          queue.push([nextWord, steps + 1]);\n        }\n      }\n    }\n  }\n  return 0;\n}`,
    },
    go: {
      code: `func ladderLength(beginWord string, endWord string, wordList []string) int {\n\twordSet := map[string]bool{}\n\tfor _, w := range wordList { wordSet[w] = true }\n\tif !wordSet[endWord] { return 0 }\n\ttype pair struct { word string; steps int }\n\tqueue := []pair{{beginWord, 1}}\n\tvisited := map[string]bool{beginWord: true}\n\tfor len(queue) > 0 {\n\t\tcurr := queue[0]\n\t\tqueue = queue[1:]\n\t\tword := curr.word\n\t\tfor i := 0; i < len(word); i++ {\n\t\t\tfor c := byte('a'); c <= 'z'; c++ {\n\t\t\t\tnext := word[:i] + string(c) + word[i+1:]\n\t\t\t\tif next == endWord { return curr.steps + 1 }\n\t\t\t\tif wordSet[next] && !visited[next] {\n\t\t\t\t\tvisited[next] = true\n\t\t\t\t\tqueue = append(queue, pair{next, curr.steps + 1})\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn 0\n}`,
    },
  },
};
