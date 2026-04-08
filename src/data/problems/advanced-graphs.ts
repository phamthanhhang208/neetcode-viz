import type { Problem } from '../types';

const reconstructItinerary: Problem = {
  id: 'reconstruct-itinerary',
  name: 'Reconstruct Itinerary',
  number: 332,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/reconstruct-itinerary/',
  description: 'Given a list of airline tickets represented as [from, to] pairs, reconstruct the itinerary in order starting from "JFK". Use all tickets exactly once.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]',
  timeComplexity: 'O(E log E)',
  spaceComplexity: 'O(E)',
  pattern: 'Advanced Graphs',
  hints: [
    'Sort destinations so you always pick the lexicographically smallest next.',
    'Use DFS post-order to build the route in reverse.',
  ],
  code: `def findItinerary(tickets):
    graph = defaultdict(list)
    for src, dst in sorted(tickets, reverse=True):
        graph[src].append(dst)
    route = []
    def dfs(airport):
        while graph[airport]:
            dfs(graph[airport].pop())
        route.append(airport)
    dfs("JFK")
    return route[::-1]`,
  steps: [
    {
      line: 3, label: 'Build Adj List', message: 'Build sorted adjacency list from tickets. JFK->[ATL,SFO], SFO->[ATL], ATL->[JFK,SFO].',
      viz: {
        graph: {
          nodes: [{ id: 'JFK', value: 'JFK', x: 50, y: 100 },{ id: 'SFO', value: 'SFO', x: 200, y: 50 },{ id: 'ATL', value: 'ATL', x: 200, y: 150 }],
          edges: [{ from: 'JFK', to: 'ATL', directed: true },{ from: 'JFK', to: 'SFO', directed: true },{ from: 'SFO', to: 'ATL', directed: true },{ from: 'ATL', to: 'JFK', directed: true },{ from: 'ATL', to: 'SFO', directed: true }],
          current: 'JFK',
        },
        variables: { route: [] },
      },
    },
    {
      line: 7, label: 'DFS from JFK', message: 'DFS from JFK. Pop ATL (smallest). Move to ATL.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: 'JFK', value: 'JFK', x: 50, y: 100 },{ id: 'SFO', value: 'SFO', x: 200, y: 50 },{ id: 'ATL', value: 'ATL', x: 200, y: 150 }],
          edges: [{ from: 'JFK', to: 'SFO', directed: true },{ from: 'SFO', to: 'ATL', directed: true },{ from: 'ATL', to: 'JFK', directed: true },{ from: 'ATL', to: 'SFO', directed: true }],
          visited: ['JFK'], current: 'ATL',
        },
        variables: { route: [] },
      },
    },
    {
      line: 7, label: 'DFS ATL->JFK', message: 'From ATL pop JFK. From JFK pop SFO. From SFO pop ATL.',
      viz: {
        graph: {
          nodes: [{ id: 'JFK', value: 'JFK', x: 50, y: 100 },{ id: 'SFO', value: 'SFO', x: 200, y: 50 },{ id: 'ATL', value: 'ATL', x: 200, y: 150 }],
          edges: [{ from: 'ATL', to: 'SFO', directed: true }],
          visited: ['JFK', 'ATL', 'SFO'], current: 'ATL',
        },
        variables: { route: [] },
      },
    },
    {
      line: 7, label: 'ATL->SFO', message: 'From ATL pop SFO. SFO has no more edges.',
      viz: {
        graph: {
          nodes: [{ id: 'JFK', value: 'JFK', x: 50, y: 100 },{ id: 'SFO', value: 'SFO', x: 200, y: 50 },{ id: 'ATL', value: 'ATL', x: 200, y: 150 }],
          edges: [],
          visited: ['JFK', 'ATL', 'SFO'], current: 'SFO',
        },
        variables: { route: [] },
      },
    },
    {
      line: 8, label: 'Backtrack', message: 'SFO dead-end. Append SFO, ATL, SFO, ATL, JFK, JFK to route (post-order).', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: 'JFK', value: 'JFK', x: 50, y: 100 },{ id: 'SFO', value: 'SFO', x: 200, y: 50 },{ id: 'ATL', value: 'ATL', x: 200, y: 150 }],
          edges: [],
          visited: ['JFK', 'ATL', 'SFO'],
        },
        variables: { route: ['SFO', 'ATL', 'SFO', 'JFK', 'ATL', 'JFK'] },
      },
    },
    {
      line: 10, label: 'Reverse Route', message: 'Reverse route to get itinerary: JFK->ATL->JFK->SFO->ATL->SFO.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: 'JFK', value: 'JFK', x: 50, y: 100 },{ id: 'SFO', value: 'SFO', x: 200, y: 50 },{ id: 'ATL', value: 'ATL', x: 200, y: 150 }],
          edges: [{ from: 'JFK', to: 'ATL', directed: true },{ from: 'ATL', to: 'JFK', directed: true },{ from: 'JFK', to: 'SFO', directed: true },{ from: 'SFO', to: 'ATL', directed: true },{ from: 'ATL', to: 'SFO', directed: true }],
          visited: ['JFK', 'ATL', 'SFO'],
        },
        variables: { result: ['JFK','ATL','JFK','SFO','ATL','SFO'] },
      },
    },
  ],
};

const minCostConnectPoints: Problem = {
  id: 'min-cost-to-connect-all-points',
  name: 'Min Cost to Connect All Points',
  number: 1584,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/',
  description: 'Given an array of points, return the minimum cost to connect all points. The cost of connecting two points is the Manhattan distance.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
  timeComplexity: 'O(N^2 log N)',
  spaceComplexity: 'O(N^2)',
  pattern: 'Advanced Graphs',
  hints: [
    'Use Prim\'s algorithm with a min-heap to greedily pick cheapest edges.',
    'Track visited nodes to avoid cycles.',
  ],
  code: `def minCostConnectPoints(points):
    n = len(points)
    visited = set()
    heap = [(0, 0)]  # (cost, point_idx)
    total = 0
    while len(visited) < n:
        cost, i = heappop(heap)
        if i in visited: continue
        visited.add(i)
        total += cost
        for j in range(n):
            if j not in visited:
                d = abs(points[i][0]-points[j][0]) + abs(points[i][1]-points[j][1])
                heappush(heap, (d, j))
    return total`,
  steps: [
    {
      line: 3, label: 'Init', message: 'Start Prim\'s from point 0 (0,0). Push (cost=0, idx=0) into heap.',
      viz: {
        graph: {
          nodes: [{ id: '0', value: '(0,0)', x: 30, y: 150 },{ id: '1', value: '(2,2)', x: 80, y: 110 },{ id: '2', value: '(3,10)', x: 100, y: 30 },{ id: '3', value: '(5,2)', x: 150, y: 110 },{ id: '4', value: '(7,0)', x: 200, y: 150 }],
          edges: [], current: '0',
        },
        variables: { total: 0, visited: [] },
      },
    },
    {
      line: 8, label: 'Visit 0', message: 'Pop (0,0). Visit point 0. Push edges to all others. Cheapest neighbor is point 1 (cost=4).', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '0', value: '(0,0)', x: 30, y: 150 },{ id: '1', value: '(2,2)', x: 80, y: 110 },{ id: '2', value: '(3,10)', x: 100, y: 30 },{ id: '3', value: '(5,2)', x: 150, y: 110 },{ id: '4', value: '(7,0)', x: 200, y: 150 }],
          edges: [], visited: ['0'], current: '0',
        },
        variables: { total: 0, visited: [0] },
      },
    },
    {
      line: 8, label: 'Visit 1', message: 'Pop (4,1). Visit point 1 (2,2). total=4. Add edge 0->1.',
      viz: {
        graph: {
          nodes: [{ id: '0', value: '(0,0)', x: 30, y: 150 },{ id: '1', value: '(2,2)', x: 80, y: 110 },{ id: '2', value: '(3,10)', x: 100, y: 30 },{ id: '3', value: '(5,2)', x: 150, y: 110 },{ id: '4', value: '(7,0)', x: 200, y: 150 }],
          edges: [{ from: '0', to: '1', weight: 4 }], visited: ['0', '1'], current: '1',
        },
        variables: { total: 4, visited: [0, 1] },
      },
    },
    {
      line: 8, label: 'Visit 3', message: 'Pop (3,3). Visit point 3 (5,2). total=7. Add edge 1->3.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '0', value: '(0,0)', x: 30, y: 150 },{ id: '1', value: '(2,2)', x: 80, y: 110 },{ id: '2', value: '(3,10)', x: 100, y: 30 },{ id: '3', value: '(5,2)', x: 150, y: 110 },{ id: '4', value: '(7,0)', x: 200, y: 150 }],
          edges: [{ from: '0', to: '1', weight: 4 },{ from: '1', to: '3', weight: 3 }], visited: ['0', '1', '3'], current: '3',
        },
        variables: { total: 7, visited: [0, 1, 3] },
      },
    },
    {
      line: 8, label: 'Visit 4', message: 'Pop (4,4). Visit point 4 (7,0). total=11. Add edge 3->4.',
      viz: {
        graph: {
          nodes: [{ id: '0', value: '(0,0)', x: 30, y: 150 },{ id: '1', value: '(2,2)', x: 80, y: 110 },{ id: '2', value: '(3,10)', x: 100, y: 30 },{ id: '3', value: '(5,2)', x: 150, y: 110 },{ id: '4', value: '(7,0)', x: 200, y: 150 }],
          edges: [{ from: '0', to: '1', weight: 4 },{ from: '1', to: '3', weight: 3 },{ from: '3', to: '4', weight: 4 }], visited: ['0', '1', '3', '4'], current: '4',
        },
        variables: { total: 11, visited: [0, 1, 3, 4] },
      },
    },
    {
      line: 15, label: 'Visit 2 & Done', message: 'Pop (9,2). Visit point 2 (3,10). total=20. MST complete.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '0', value: '(0,0)', x: 30, y: 150 },{ id: '1', value: '(2,2)', x: 80, y: 110 },{ id: '2', value: '(3,10)', x: 100, y: 30 },{ id: '3', value: '(5,2)', x: 150, y: 110 },{ id: '4', value: '(7,0)', x: 200, y: 150 }],
          edges: [{ from: '0', to: '1', weight: 4 },{ from: '1', to: '3', weight: 3 },{ from: '3', to: '4', weight: 4 },{ from: '1', to: '2', weight: 9 }], visited: ['0', '1', '2', '3', '4'],
        },
        variables: { total: 20, result: 20 },
      },
    },
  ],
};

const networkDelayTime: Problem = {
  id: 'network-delay-time',
  name: 'Network Delay Time',
  number: 743,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/network-delay-time/',
  description: 'Given a network of n nodes and weighted directed edges, find the time it takes for a signal sent from node k to reach all nodes. Return -1 if impossible.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2',
  timeComplexity: 'O(E log V)',
  spaceComplexity: 'O(V + E)',
  pattern: 'Advanced Graphs',
  hints: [
    'Use Dijkstra\'s algorithm starting from node k.',
    'The answer is the maximum distance among all reachable nodes.',
  ],
  code: `def networkDelayTime(times, n, k):
    graph = defaultdict(list)
    for u, v, w in times:
        graph[u].append((v, w))
    dist = {}
    heap = [(0, k)]
    while heap:
        d, node = heappop(heap)
        if node in dist: continue
        dist[node] = d
        for nei, w in graph[node]:
            if nei not in dist:
                heappush(heap, (d + w, nei))
    return max(dist.values()) if len(dist) == n else -1`,
  steps: [
    {
      line: 4, label: 'Build Graph', message: 'Build adjacency list. Node 2->(1,1),(3,1). Node 3->(4,1).',
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 50, y: 150 },{ id: '3', value: 3, x: 175, y: 150 },{ id: '4', value: 4, x: 175, y: 50 }],
          edges: [{ from: '2', to: '1', weight: 1, directed: true },{ from: '2', to: '3', weight: 1, directed: true },{ from: '3', to: '4', weight: 1, directed: true }],
          current: '2',
        },
        variables: { dist: {} },
      },
    },
    {
      line: 9, label: 'Visit Node 2', message: 'Pop (0,2). dist[2]=0. Push neighbors 1 and 3.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 50, y: 150 },{ id: '3', value: 3, x: 175, y: 150 },{ id: '4', value: 4, x: 175, y: 50 }],
          edges: [{ from: '2', to: '1', weight: 1, directed: true },{ from: '2', to: '3', weight: 1, directed: true },{ from: '3', to: '4', weight: 1, directed: true }],
          visited: ['2'], current: '2',
        },
        variables: { dist: { 2: 0 } },
      },
    },
    {
      line: 9, label: 'Visit Node 1', message: 'Pop (1,1). dist[1]=1. Node 1 has no outgoing edges.',
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 50, y: 150 },{ id: '3', value: 3, x: 175, y: 150 },{ id: '4', value: 4, x: 175, y: 50 }],
          edges: [{ from: '2', to: '1', weight: 1, directed: true },{ from: '2', to: '3', weight: 1, directed: true },{ from: '3', to: '4', weight: 1, directed: true }],
          visited: ['2', '1'], current: '1',
        },
        variables: { dist: { 2: 0, 1: 1 } },
      },
    },
    {
      line: 9, label: 'Visit Node 3', message: 'Pop (1,3). dist[3]=1. Push neighbor 4 with cost 2.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 50, y: 150 },{ id: '3', value: 3, x: 175, y: 150 },{ id: '4', value: 4, x: 175, y: 50 }],
          edges: [{ from: '2', to: '1', weight: 1, directed: true },{ from: '2', to: '3', weight: 1, directed: true },{ from: '3', to: '4', weight: 1, directed: true }],
          visited: ['2', '1', '3'], current: '3',
        },
        variables: { dist: { 2: 0, 1: 1, 3: 1 } },
      },
    },
    {
      line: 9, label: 'Visit Node 4', message: 'Pop (2,4). dist[4]=2. All nodes visited.',
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 50, y: 150 },{ id: '3', value: 3, x: 175, y: 150 },{ id: '4', value: 4, x: 175, y: 50 }],
          edges: [{ from: '2', to: '1', weight: 1, directed: true },{ from: '2', to: '3', weight: 1, directed: true },{ from: '3', to: '4', weight: 1, directed: true }],
          visited: ['2', '1', '3', '4'], current: '4',
        },
        variables: { dist: { 2: 0, 1: 1, 3: 1, 4: 2 } },
      },
    },
    {
      line: 14, label: 'Result', message: 'All 4 nodes reached. max(dist.values()) = 2.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 50, y: 150 },{ id: '3', value: 3, x: 175, y: 150 },{ id: '4', value: 4, x: 175, y: 50 }],
          edges: [{ from: '2', to: '1', weight: 1, directed: true },{ from: '2', to: '3', weight: 1, directed: true },{ from: '3', to: '4', weight: 1, directed: true }],
          visited: ['2', '1', '3', '4'],
        },
        variables: { result: 2 },
      },
    },
  ],
};

const swimInRisingWater: Problem = {
  id: 'swim-in-rising-water',
  name: 'Swim in Rising Water',
  number: 778,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/swim-in-rising-water/',
  description: 'Given an n x n grid of elevations, find the minimum time t such that you can swim from (0,0) to (n-1,n-1). At time t, water level is t and you can swim through cells with elevation <= t.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'grid = [[0,2],[1,3]]',
  timeComplexity: 'O(N^2 log N)',
  spaceComplexity: 'O(N^2)',
  pattern: 'Advanced Graphs',
  hints: [
    'Binary search on the answer t, then BFS/DFS to check reachability.',
    'Alternatively use a min-heap (modified Dijkstra).',
  ],
  code: `def swimInWater(grid):
    n = len(grid)
    lo, hi = grid[0][0], n * n - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if canReach(grid, mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
  steps: [
    {
      line: 3, label: 'Init Search', message: 'Grid is [[0,2],[1,3]]. Binary search range lo=0, hi=3.',
      viz: {
        matrix: { values: [[0, 2], [1, 3]], current: [0, 0] },
        variables: { lo: 0, hi: 3 },
      },
    },
    {
      line: 5, label: 'Try t=1', message: 'mid=1. Can we reach (1,1) with water level 1? BFS from (0,0): can visit cells <=1.', isKeyMoment: true,
      viz: {
        matrix: { values: [[0, 2], [1, 3]], highlights: [[0, 0], [1, 0]], current: [1, 0] },
        variables: { lo: 0, hi: 3, mid: 1 },
      },
    },
    {
      line: 8, label: 't=1 Fails', message: 'From (1,0) can\'t reach (1,1) since grid[1][1]=3 > 1. lo = mid+1 = 2.',
      viz: {
        matrix: { values: [[0, 2], [1, 3]], highlights: [[0, 0], [1, 0]] },
        variables: { lo: 2, hi: 3, mid: 1, reachable: false },
      },
    },
    {
      line: 5, label: 'Try t=2', message: 'mid=2. BFS with water level 2: can visit (0,0),(0,1),(1,0) -- cells <=2.', isKeyMoment: true,
      viz: {
        matrix: { values: [[0, 2], [1, 3]], highlights: [[0, 0], [0, 1], [1, 0]], current: [0, 1] },
        variables: { lo: 2, hi: 3, mid: 2 },
      },
    },
    {
      line: 8, label: 't=2 Fails', message: 'Still can\'t reach (1,1) since grid[1][1]=3 > 2. lo = mid+1 = 3.',
      viz: {
        matrix: { values: [[0, 2], [1, 3]], highlights: [[0, 0], [0, 1], [1, 0]] },
        variables: { lo: 3, hi: 3, mid: 2, reachable: false },
      },
    },
    {
      line: 10, label: 'Result', message: 'lo == hi == 3. At t=3 all cells reachable. Return 3.', isKeyMoment: true,
      viz: {
        matrix: { values: [[0, 2], [1, 3]], highlights: [[0, 0], [0, 1], [1, 0], [1, 1]], path: [[0, 0], [0, 1], [1, 1]] },
        variables: { result: 3 },
      },
    },
  ],
};

const alienDictionary: Problem = {
  id: 'alien-dictionary',
  name: 'Alien Dictionary',
  number: 269,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/alien-dictionary/',
  description: 'Given a sorted list of words in an alien language, derive the order of characters in that language. Return "" if invalid.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'words = ["wrt","wrf","er","ett","rftt"]',
  timeComplexity: 'O(C)',
  spaceComplexity: 'O(U + E)',
  pattern: 'Advanced Graphs',
  hints: [
    'Compare adjacent words to find character ordering constraints.',
    'Build a directed graph and perform topological sort.',
  ],
  code: `def alienOrder(words):
    graph = defaultdict(set)
    indegree = {c: 0 for w in words for c in w}
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i+1]
        for j in range(min(len(w1), len(w2))):
            if w1[j] != w2[j]:
                if w2[j] not in graph[w1[j]]:
                    graph[w1[j]].add(w2[j])
                    indegree[w2[j]] += 1
                break
    q = deque([c for c in indegree if indegree[c] == 0])
    result = []
    while q:
        c = q.popleft()
        result.append(c)
        for nei in graph[c]:
            indegree[nei] -= 1
            if indegree[nei] == 0: q.append(nei)
    return "".join(result) if len(result) == len(indegree) else ""`,
  steps: [
    {
      line: 5, label: 'Compare Words', message: 'Compare "wrt" vs "wrf": t->f. "wrf" vs "er": w->e. "er" vs "ett": r->t. "ett" vs "rftt": e->r.',
      viz: {
        graph: {
          nodes: [{ id: 'w', value: 'w', x: 30, y: 50 },{ id: 'e', value: 'e', x: 110, y: 50 },{ id: 'r', value: 'r', x: 190, y: 50 },{ id: 't', value: 't', x: 110, y: 150 },{ id: 'f', value: 'f', x: 190, y: 150 }],
          edges: [{ from: 't', to: 'f', directed: true },{ from: 'w', to: 'e', directed: true },{ from: 'r', to: 't', directed: true },{ from: 'e', to: 'r', directed: true }],
        },
        variables: { indegree: { w: 0, e: 1, r: 1, t: 1, f: 1 } },
      },
    },
    {
      line: 12, label: 'Init Queue', message: 'Chars with indegree 0: [w]. Start topological sort.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: 'w', value: 'w', x: 30, y: 50 },{ id: 'e', value: 'e', x: 110, y: 50 },{ id: 'r', value: 'r', x: 190, y: 50 },{ id: 't', value: 't', x: 110, y: 150 },{ id: 'f', value: 'f', x: 190, y: 150 }],
          edges: [{ from: 't', to: 'f', directed: true },{ from: 'w', to: 'e', directed: true },{ from: 'r', to: 't', directed: true },{ from: 'e', to: 'r', directed: true }],
          current: 'w', queue: ['w'],
        },
        variables: { result: [] },
      },
    },
    {
      line: 15, label: 'Process w', message: 'Dequeue w. Append to result. Decrement indegree of e to 0. Enqueue e.',
      viz: {
        graph: {
          nodes: [{ id: 'w', value: 'w', x: 30, y: 50 },{ id: 'e', value: 'e', x: 110, y: 50 },{ id: 'r', value: 'r', x: 190, y: 50 },{ id: 't', value: 't', x: 110, y: 150 },{ id: 'f', value: 'f', x: 190, y: 150 }],
          edges: [{ from: 't', to: 'f', directed: true },{ from: 'w', to: 'e', directed: true },{ from: 'r', to: 't', directed: true },{ from: 'e', to: 'r', directed: true }],
          visited: ['w'], current: 'e', queue: ['e'],
        },
        variables: { result: ['w'] },
      },
    },
    {
      line: 15, label: 'Process e,r', message: 'Process e -> enqueue r. Process r -> enqueue t.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: 'w', value: 'w', x: 30, y: 50 },{ id: 'e', value: 'e', x: 110, y: 50 },{ id: 'r', value: 'r', x: 190, y: 50 },{ id: 't', value: 't', x: 110, y: 150 },{ id: 'f', value: 'f', x: 190, y: 150 }],
          edges: [{ from: 't', to: 'f', directed: true },{ from: 'w', to: 'e', directed: true },{ from: 'r', to: 't', directed: true },{ from: 'e', to: 'r', directed: true }],
          visited: ['w', 'e', 'r'], current: 'r', queue: ['t'],
        },
        variables: { result: ['w', 'e', 'r'] },
      },
    },
    {
      line: 15, label: 'Process t,f', message: 'Process t -> enqueue f. Process f -> no neighbors.',
      viz: {
        graph: {
          nodes: [{ id: 'w', value: 'w', x: 30, y: 50 },{ id: 'e', value: 'e', x: 110, y: 50 },{ id: 'r', value: 'r', x: 190, y: 50 },{ id: 't', value: 't', x: 110, y: 150 },{ id: 'f', value: 'f', x: 190, y: 150 }],
          edges: [{ from: 't', to: 'f', directed: true },{ from: 'w', to: 'e', directed: true },{ from: 'r', to: 't', directed: true },{ from: 'e', to: 'r', directed: true }],
          visited: ['w', 'e', 'r', 't', 'f'], current: 'f',
        },
        variables: { result: ['w', 'e', 'r', 't', 'f'] },
      },
    },
    {
      line: 20, label: 'Result', message: 'All chars processed. Alien order: "wertf".', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: 'w', value: 'w', x: 30, y: 50 },{ id: 'e', value: 'e', x: 110, y: 50 },{ id: 'r', value: 'r', x: 190, y: 50 },{ id: 't', value: 't', x: 110, y: 150 },{ id: 'f', value: 'f', x: 190, y: 150 }],
          edges: [{ from: 'w', to: 'e', directed: true },{ from: 'e', to: 'r', directed: true },{ from: 'r', to: 't', directed: true },{ from: 't', to: 'f', directed: true }],
          visited: ['w', 'e', 'r', 't', 'f'],
        },
        variables: { result: 'wertf' },
      },
    },
  ],
};

const cheapestFlightsK: Problem = {
  id: 'cheapest-flights-within-k-stops',
  name: 'Cheapest Flights Within K Stops',
  number: 787,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
  description: 'Find the cheapest price from src to dst with at most k stops. Return -1 if no such route exists.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1',
  timeComplexity: 'O(K * E)',
  spaceComplexity: 'O(V)',
  pattern: 'Advanced Graphs',
  hints: [
    'Use Bellman-Ford limited to k+1 iterations.',
    'Copy prices array each round to avoid using updates from the same iteration.',
  ],
  code: `def findCheapestPrice(n, flights, src, dst, k):
    prices = [float('inf')] * n
    prices[src] = 0
    for i in range(k + 1):
        tmp = prices[:]
        for u, v, w in flights:
            if prices[u] != float('inf'):
                tmp[v] = min(tmp[v], prices[u] + w)
        prices = tmp
    return prices[dst] if prices[dst] != float('inf') else -1`,
  steps: [
    {
      line: 2, label: 'Init Prices', message: 'Initialize prices = [0, inf, inf, inf]. Source node 0 has cost 0.',
      viz: {
        graph: {
          nodes: [{ id: '0', value: 0, x: 30, y: 100 },{ id: '1', value: 1, x: 120, y: 50 },{ id: '2', value: 2, x: 120, y: 150 },{ id: '3', value: 3, x: 210, y: 100 }],
          edges: [{ from: '0', to: '1', weight: 100, directed: true },{ from: '1', to: '2', weight: 100, directed: true },{ from: '2', to: '0', weight: 100, directed: true },{ from: '1', to: '3', weight: 600, directed: true },{ from: '2', to: '3', weight: 200, directed: true }],
          current: '0',
        },
        variables: { prices: [0, 'inf', 'inf', 'inf'], k: 1 },
      },
    },
    {
      line: 4, label: 'Round 0 Start', message: 'Round 0 (i=0): relax all edges using current prices.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '0', value: 0, x: 30, y: 100 },{ id: '1', value: 1, x: 120, y: 50 },{ id: '2', value: 2, x: 120, y: 150 },{ id: '3', value: 3, x: 210, y: 100 }],
          edges: [{ from: '0', to: '1', weight: 100, directed: true },{ from: '1', to: '2', weight: 100, directed: true },{ from: '2', to: '0', weight: 100, directed: true },{ from: '1', to: '3', weight: 600, directed: true },{ from: '2', to: '3', weight: 200, directed: true }],
          visited: ['0'], current: '0',
        },
        variables: { round: 0, prices: [0, 'inf', 'inf', 'inf'] },
      },
    },
    {
      line: 7, label: 'Round 0 Done', message: 'Edge 0->1: tmp[1]=min(inf,0+100)=100. Other edges from inf nodes skip. prices=[0,100,inf,inf].',
      viz: {
        graph: {
          nodes: [{ id: '0', value: 0, x: 30, y: 100 },{ id: '1', value: 1, x: 120, y: 50 },{ id: '2', value: 2, x: 120, y: 150 },{ id: '3', value: 3, x: 210, y: 100 }],
          edges: [{ from: '0', to: '1', weight: 100, directed: true },{ from: '1', to: '2', weight: 100, directed: true },{ from: '2', to: '0', weight: 100, directed: true },{ from: '1', to: '3', weight: 600, directed: true },{ from: '2', to: '3', weight: 200, directed: true }],
          visited: ['0', '1'], current: '1',
        },
        variables: { round: 0, prices: [0, 100, 'inf', 'inf'] },
      },
    },
    {
      line: 4, label: 'Round 1 Start', message: 'Round 1 (i=1): relax edges again. Node 1 now reachable.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '0', value: 0, x: 30, y: 100 },{ id: '1', value: 1, x: 120, y: 50 },{ id: '2', value: 2, x: 120, y: 150 },{ id: '3', value: 3, x: 210, y: 100 }],
          edges: [{ from: '0', to: '1', weight: 100, directed: true },{ from: '1', to: '2', weight: 100, directed: true },{ from: '2', to: '0', weight: 100, directed: true },{ from: '1', to: '3', weight: 600, directed: true },{ from: '2', to: '3', weight: 200, directed: true }],
          visited: ['0', '1'],
        },
        variables: { round: 1, prices: [0, 100, 'inf', 'inf'] },
      },
    },
    {
      line: 7, label: 'Round 1 Relax', message: '1->2: tmp[2]=200. 1->3: tmp[3]=700. prices=[0,100,200,700].',
      viz: {
        graph: {
          nodes: [{ id: '0', value: 0, x: 30, y: 100 },{ id: '1', value: 1, x: 120, y: 50 },{ id: '2', value: 2, x: 120, y: 150 },{ id: '3', value: 3, x: 210, y: 100 }],
          edges: [{ from: '0', to: '1', weight: 100, directed: true },{ from: '1', to: '2', weight: 100, directed: true },{ from: '2', to: '0', weight: 100, directed: true },{ from: '1', to: '3', weight: 600, directed: true },{ from: '2', to: '3', weight: 200, directed: true }],
          visited: ['0', '1', '2', '3'], current: '3',
        },
        variables: { round: 1, prices: [0, 100, 200, 700] },
      },
    },
    {
      line: 9, label: 'Result', message: 'k+1=2 rounds done. prices[3]=700. Cheapest flight to dst 3 with at most 1 stop is 700.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '0', value: 0, x: 30, y: 100 },{ id: '1', value: 1, x: 120, y: 50 },{ id: '2', value: 2, x: 120, y: 150 },{ id: '3', value: 3, x: 210, y: 100 }],
          edges: [{ from: '0', to: '1', weight: 100, directed: true },{ from: '1', to: '3', weight: 600, directed: true }],
          visited: ['0', '1', '3'],
        },
        variables: { result: 700, path: '0 -> 1 -> 3' },
      },
    },
  ],
};

export const advancedGraphsProblems: Problem[] = [reconstructItinerary, minCostConnectPoints, networkDelayTime, swimInRisingWater, alienDictionary, cheapestFlightsK];
