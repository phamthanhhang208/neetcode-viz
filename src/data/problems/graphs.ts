import type { Problem } from '../types';

const numberOfIslands: Problem = {
  id: 'number-of-islands',
  name: 'Number of Islands',
  number: 200,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/number-of-islands/',
  description: 'Given an m x n 2D binary grid which represents a map of "1"s (land) and "0"s (water), return the number of islands.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'grid = [["1","1","0","0"],["1","1","0","0"],["0","0","1","0"],["0","0","0","1"]]',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'Graphs',
  hints: [
    'Iterate through the grid; when you find a "1", run BFS/DFS to mark all connected land.',
    'Each time you trigger a new traversal, increment the island count.',
  ],
  code: `def numIslands(grid):
    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == "1":
                bfs(grid, r, c)
                count += 1
    return count`,
  steps: [
    {
      line: 3, label: 'Scan Grid', message: 'Start scanning. Cell (0,0) is "1" -- begin BFS for island #1.',
      viz: { matrix: { values: [['1','1','0','0'],['1','1','0','0'],['0','0','1','0'],['0','0','0','1']], current: [0,0] }, variables: { count: 0 } },
    },
    {
      line: 6, label: 'BFS Island 1', message: 'BFS visits all connected "1"s at (0,0),(0,1),(1,0),(1,1). Mark visited.', isKeyMoment: true,
      viz: { matrix: { values: [['V','V','0','0'],['V','V','0','0'],['0','0','1','0'],['0','0','0','1']], highlights: [[0,0],[0,1],[1,0],[1,1]] }, variables: { count: 1 } },
    },
    {
      line: 4, label: 'Continue Scan', message: 'Continue scanning. Skip visited and "0" cells until (2,2) which is "1".',
      viz: { matrix: { values: [['V','V','0','0'],['V','V','0','0'],['0','0','1','0'],['0','0','0','1']], current: [2,2] }, variables: { count: 1 } },
    },
    {
      line: 6, label: 'BFS Island 2', message: 'BFS from (2,2) -- only one cell. Island #2 found.', isKeyMoment: true,
      viz: { matrix: { values: [['V','V','0','0'],['V','V','0','0'],['0','0','V','0'],['0','0','0','1']], highlights: [[2,2]] }, variables: { count: 2 } },
    },
    {
      line: 4, label: 'Find Island 3', message: 'Continue scanning. Cell (3,3) is "1" -- BFS for island #3.',
      viz: { matrix: { values: [['V','V','0','0'],['V','V','0','0'],['0','0','V','0'],['0','0','0','1']], current: [3,3] }, variables: { count: 2 } },
    },
    {
      line: 8, label: 'Result', message: 'All cells visited. Found 3 islands total.', isKeyMoment: true,
      viz: { matrix: { values: [['V','V','0','0'],['V','V','0','0'],['0','0','V','0'],['0','0','0','V']], highlights: [[3,3]] }, variables: { count: 3 } },
    },
  ],
};

const maxAreaOfIsland: Problem = {
  id: 'max-area-of-island',
  name: 'Max Area of Island',
  number: 695,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/max-area-of-island/',
  description: 'Given a binary grid, return the area of the largest island (connected component of 1s).',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'grid = [[0,0,1,0],[0,1,1,0],[0,0,0,0]]',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'Graphs',
  hints: [
    'Use DFS to explore each island and count its area.',
    'Track the maximum area seen so far.',
  ],
  code: `def maxAreaOfIsland(grid):
    maxArea = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == 1:
                area = dfs(grid, r, c)
                maxArea = max(maxArea, area)
    return maxArea`,
  steps: [
    {
      line: 3, label: 'Scan Grid', message: 'Start scanning. First "1" found at (0,2).',
      viz: { matrix: { values: [[0,0,1,0],[0,1,1,0],[0,0,0,0]], current: [0,2] }, variables: { maxArea: 0 } },
    },
    {
      line: 6, label: 'DFS Island 1', message: 'DFS from (0,2). Visits (0,2),(1,1),(1,2). Area = 3.', isKeyMoment: true,
      viz: { matrix: { values: [[0,0,'V',0],[0,'V','V',0],[0,0,0,0]], highlights: [[0,2],[1,1],[1,2]] }, variables: { area: 3, maxArea: 3 } },
    },
    {
      line: 7, label: 'Update Max', message: 'area=3 > maxArea=0. Update maxArea to 3.',
      viz: { matrix: { values: [[0,0,'V',0],[0,'V','V',0],[0,0,0,0]], highlights: [[0,2],[1,1],[1,2]] }, variables: { area: 3, maxArea: 3 } },
    },
    {
      line: 3, label: 'Continue Scan', message: 'Continue scanning remaining cells. No more "1"s found.',
      viz: { matrix: { values: [[0,0,'V',0],[0,'V','V',0],[0,0,0,0]], current: [2,3] }, variables: { maxArea: 3 } },
    },
    {
      line: 8, label: 'Done', message: 'All cells visited. Only one island with area 3.', isKeyMoment: true,
      viz: { matrix: { values: [[0,0,'V',0],[0,'V','V',0],[0,0,0,0]], highlights: [[0,2],[1,1],[1,2]] }, variables: { maxArea: 3 } },
    },
    {
      line: 8, label: 'Result', message: 'Return maxArea = 3.',
      viz: { matrix: { values: [[0,0,'V',0],[0,'V','V',0],[0,0,0,0]] }, variables: { result: 3 } },
    },
  ],
};

const cloneGraph: Problem = {
  id: 'clone-graph',
  name: 'Clone Graph',
  number: 133,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/clone-graph/',
  description: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
  timeComplexity: 'O(V + E)',
  spaceComplexity: 'O(V)',
  pattern: 'Graphs',
  hints: [
    'Use a hashmap to map original nodes to clones.',
    'BFS or DFS to traverse and clone each neighbor.',
  ],
  code: `def cloneGraph(node):
    if not node: return None
    clone_map = {node: Node(node.val)}
    queue = deque([node])
    while queue:
        curr = queue.popleft()
        for nei in curr.neighbors:
            if nei not in clone_map:
                clone_map[nei] = Node(nei.val)
                queue.append(nei)
            clone_map[curr].neighbors.append(clone_map[nei])
    return clone_map[node]`,
  steps: [
    {
      line: 3, label: 'Clone Root', message: 'Clone node 1. Add to hashmap: {1: clone(1)}.',
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 150, y: 50 },{ id: '3', value: 3, x: 150, y: 150 },{ id: '4', value: 4, x: 50, y: 150 }],
          edges: [{ from: '1', to: '2' },{ from: '2', to: '3' },{ from: '3', to: '4' },{ from: '4', to: '1' }],
          visited: ['1'], current: '1',
        },
        variables: { cloneMap: '{1: clone(1)}' },
      },
    },
    {
      line: 7, label: 'Process Node 1', message: 'Dequeue node 1. Visit neighbors 2 and 4. Clone both.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 150, y: 50 },{ id: '3', value: 3, x: 150, y: 150 },{ id: '4', value: 4, x: 50, y: 150 }],
          edges: [{ from: '1', to: '2' },{ from: '2', to: '3' },{ from: '3', to: '4' },{ from: '4', to: '1' }],
          visited: ['1','2','4'], current: '1', queue: ['2','4'],
        },
        variables: { cloneMap: '{1,2,4}' },
      },
    },
    {
      line: 7, label: 'Process Node 2', message: 'Dequeue node 2. Neighbor 3 is new -- clone it. Neighbor 1 already cloned.',
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 150, y: 50 },{ id: '3', value: 3, x: 150, y: 150 },{ id: '4', value: 4, x: 50, y: 150 }],
          edges: [{ from: '1', to: '2' },{ from: '2', to: '3' },{ from: '3', to: '4' },{ from: '4', to: '1' }],
          visited: ['1','2','4','3'], current: '2', queue: ['4','3'],
        },
        variables: { cloneMap: '{1,2,3,4}' },
      },
    },
    {
      line: 7, label: 'Process Node 4', message: 'Dequeue node 4. Neighbors 1 and 3 both already cloned. Link them.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 150, y: 50 },{ id: '3', value: 3, x: 150, y: 150 },{ id: '4', value: 4, x: 50, y: 150 }],
          edges: [{ from: '1', to: '2' },{ from: '2', to: '3' },{ from: '3', to: '4' },{ from: '4', to: '1' }],
          visited: ['1','2','3','4'], current: '4', queue: ['3'],
        },
        variables: { cloneMap: '{1,2,3,4}' },
      },
    },
    {
      line: 7, label: 'Process Node 3', message: 'Dequeue node 3. Neighbors 2 and 4 already cloned. Link them.',
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 150, y: 50 },{ id: '3', value: 3, x: 150, y: 150 },{ id: '4', value: 4, x: 50, y: 150 }],
          edges: [{ from: '1', to: '2' },{ from: '2', to: '3' },{ from: '3', to: '4' },{ from: '4', to: '1' }],
          visited: ['1','2','3','4'], current: '3', queue: [],
        },
        variables: { cloneMap: '{1,2,3,4}' },
      },
    },
    {
      line: 12, label: 'Result', message: 'Queue empty. All 4 nodes cloned with correct neighbor links. Return clone of node 1.', isKeyMoment: true,
      viz: {
        graph: {
          nodes: [{ id: '1', value: 1, x: 50, y: 50 },{ id: '2', value: 2, x: 150, y: 50 },{ id: '3', value: 3, x: 150, y: 150 },{ id: '4', value: 4, x: 50, y: 150 }],
          edges: [{ from: '1', to: '2' },{ from: '2', to: '3' },{ from: '3', to: '4' },{ from: '4', to: '1' }],
          visited: ['1','2','3','4'],
        },
        variables: { result: 'cloned graph with 4 nodes' },
      },
    },
  ],
};

const INF = 2147483647;

const wallsAndGates: Problem = {
  id: 'walls-and-gates',
  name: 'Walls and Gates',
  number: 286,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/walls-and-gates/',
  description: 'Fill each empty room with the distance to its nearest gate. -1 is a wall, 0 is a gate, INF is an empty room.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'rooms = [[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]]',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'Graphs',
  hints: [
    'Start BFS from all gates simultaneously (multi-source BFS).',
    'Each level of BFS represents one step further from a gate.',
  ],
  code: `def wallsAndGates(rooms):
    q = deque()
    for r in range(len(rooms)):
        for c in range(len(rooms[0])):
            if rooms[r][c] == 0:
                q.append((r, c))
    while q:
        r, c = q.popleft()
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<len(rooms) and 0<=nc<len(rooms[0]) and rooms[nr][nc]==INF:
                rooms[nr][nc] = rooms[r][c] + 1
                q.append((nr, nc))`,
  steps: [
    {
      line: 3, label: 'Find Gates', message: 'Scan grid for gates (0). Found at (0,2) and (3,0). Add to queue.',
      viz: { matrix: { values: [[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]], highlights: [[0,2],[3,0]] }, variables: { queue: '[(0,2),(3,0)]' } },
    },
    {
      line: 12, label: 'BFS Level 1', message: 'Process gates. Update neighbors: (0,3)=1, (1,2)=1, (2,0)=1.', isKeyMoment: true,
      viz: { matrix: { values: [[INF,-1,0,1],[INF,INF,1,-1],[1,-1,INF,-1],[0,-1,INF,INF]], highlights: [[0,3],[1,2],[2,0]] }, variables: { distance: 1 } },
    },
    {
      line: 12, label: 'BFS Level 2', message: 'Process distance-1 cells. Update: (1,1)=2, (1,0)=2, (3,2)=2 (from different paths).',
      viz: { matrix: { values: [[INF,-1,0,1],[2,2,1,-1],[1,-1,INF,-1],[0,-1,INF,INF]], highlights: [[1,0],[1,1]] }, variables: { distance: 2 } },
    },
    {
      line: 12, label: 'BFS Level 3', message: 'Process distance-2 cells. Update: (0,0)=3, (2,2)=2, (3,2)=3.', isKeyMoment: true,
      viz: { matrix: { values: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,INF]], highlights: [[0,0],[2,2],[3,2]] }, variables: { distance: 3 } },
    },
    {
      line: 12, label: 'BFS Level 4', message: 'Process distance-3 cells. Update: (3,3)=4.',
      viz: { matrix: { values: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]], highlights: [[3,3]] }, variables: { distance: 4 } },
    },
    {
      line: 13, label: 'Result', message: 'Queue empty. Every reachable room now has its shortest distance to a gate.', isKeyMoment: true,
      viz: { matrix: { values: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]] }, variables: { result: 'all rooms filled' } },
    },
  ],
};

const rottingOranges: Problem = {
  id: 'rotting-oranges',
  name: 'Rotting Oranges',
  number: 994,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/rotting-oranges/',
  description: 'Return the minimum number of minutes until no fresh orange remains. 0=empty, 1=fresh, 2=rotten.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'grid = [[2,1,1],[1,1,0],[0,1,1]]',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'Graphs',
  hints: [
    'Use multi-source BFS starting from all rotten oranges.',
    'Each BFS level = 1 minute of rotting.',
  ],
  code: `def orangesRotting(grid):
    q = deque()
    fresh = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == 2: q.append((r,c))
            elif grid[r][c] == 1: fresh += 1
    minutes = 0
    while q and fresh > 0:
        for _ in range(len(q)):
            r, c = q.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r+dr, c+dc
                if 0<=nr<len(grid) and 0<=nc<len(grid[0]) and grid[nr][nc]==1:
                    grid[nr][nc] = 2
                    q.append((nr,nc))
                    fresh -= 1
        minutes += 1
    return minutes if fresh == 0 else -1`,
  steps: [
    {
      line: 4, label: 'Init', message: 'Find rotten orange at (0,0). Count 7 fresh oranges.',
      viz: { matrix: { values: [[2,1,1],[1,1,0],[0,1,1]], highlights: [[0,0]] }, variables: { fresh: 7, minutes: 0 } },
    },
    {
      line: 15, label: 'Minute 1', message: 'Rotten (0,0) spreads to (0,1) and (1,0). fresh=5.', isKeyMoment: true,
      viz: { matrix: { values: [[2,2,1],[2,1,0],[0,1,1]], highlights: [[0,1],[1,0]] }, variables: { fresh: 5, minutes: 1 } },
    },
    {
      line: 15, label: 'Minute 2', message: 'Rot spreads to (0,2), (1,1). fresh=3.',
      viz: { matrix: { values: [[2,2,2],[2,2,0],[0,1,1]], highlights: [[0,2],[1,1]] }, variables: { fresh: 3, minutes: 2 } },
    },
    {
      line: 15, label: 'Minute 3', message: 'Rot spreads to (2,1). fresh=2.', isKeyMoment: true,
      viz: { matrix: { values: [[2,2,2],[2,2,0],[0,2,1]], highlights: [[2,1]] }, variables: { fresh: 2, minutes: 3 } },
    },
    {
      line: 15, label: 'Minute 4', message: 'Rot spreads to (2,2). fresh=1... then 0 after full level.',
      viz: { matrix: { values: [[2,2,2],[2,2,0],[0,2,2]], highlights: [[2,2]] }, variables: { fresh: 0, minutes: 4 } },
    },
    {
      line: 19, label: 'Result', message: 'No fresh oranges left. Return 4 minutes.', isKeyMoment: true,
      viz: { matrix: { values: [[2,2,2],[2,2,0],[0,2,2]] }, variables: { result: 4 } },
    },
  ],
};

const pacificAtlantic: Problem = {
  id: 'pacific-atlantic-water-flow',
  name: 'Pacific Atlantic Water Flow',
  number: 417,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
  description: 'Return all cells where water can flow to both the Pacific and Atlantic oceans.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'heights = [[1,2,2],[3,2,3],[2,4,5]]',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'Graphs',
  hints: [
    'DFS/BFS from ocean borders inward (reverse flow direction).',
    'Cells reachable from both oceans are the answer.',
  ],
  code: `def pacificAtlantic(heights):
    pac, atl = set(), set()
    def dfs(r, c, visit, prevH):
        if (r,c) in visit or r<0 or c<0 or r>=ROWS or c>=COLS or heights[r][c]<prevH:
            return
        visit.add((r,c))
        for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            dfs(r+dr,c+dc, visit, heights[r][c])
    # Run DFS from Pacific and Atlantic borders
    for c in range(COLS): dfs(0,c,pac,0); dfs(ROWS-1,c,atl,0)
    for r in range(ROWS): dfs(r,0,pac,0); dfs(r,COLS-1,atl,0)
    return list(pac & atl)`,
  steps: [
    {
      line: 10, label: 'Pacific Top', message: 'DFS from top row (Pacific). Cells reachable: (0,0),(0,1),(0,2).',
      viz: { matrix: { values: [[1,2,2],[3,2,3],[2,4,5]], highlights: [[0,0],[0,1],[0,2]] }, variables: { ocean: 'Pacific top' } },
    },
    {
      line: 11, label: 'Pacific Left', message: 'DFS from left col (Pacific). Adds (1,0),(2,0). Pacific set = top+left borders reachable.', isKeyMoment: true,
      viz: { matrix: { values: [[1,2,2],[3,2,3],[2,4,5]], highlights: [[0,0],[0,1],[0,2],[1,0],[2,0],[1,1],[2,1],[2,2],[1,2]] }, variables: { pacific: 'all cells reachable' } },
    },
    {
      line: 10, label: 'Atlantic Bottom', message: 'DFS from bottom row (Atlantic). Cells: (2,0),(2,1),(2,2).',
      viz: { matrix: { values: [[1,2,2],[3,2,3],[2,4,5]], highlights: [[2,0],[2,1],[2,2]] }, variables: { ocean: 'Atlantic bottom' } },
    },
    {
      line: 11, label: 'Atlantic Right', message: 'DFS from right col (Atlantic). Adds (0,2),(1,2). Atlantic reaches most cells.', isKeyMoment: true,
      viz: { matrix: { values: [[1,2,2],[3,2,3],[2,4,5]], highlights: [[0,2],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1]] }, variables: { atlantic: 'reachable cells' } },
    },
    {
      line: 12, label: 'Intersection', message: 'Intersect Pacific and Atlantic sets to find cells reaching both oceans.', isKeyMoment: true,
      viz: { matrix: { values: [[1,2,2],[3,2,3],[2,4,5]], highlights: [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]] }, variables: { result: 'pac & atl' } },
    },
    {
      line: 12, label: 'Result', message: 'Return cells that can flow to both oceans.',
      viz: { matrix: { values: [[1,2,2],[3,2,3],[2,4,5]], highlights: [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]] }, variables: { result: '7 cells' } },
    },
  ],
};

const surroundedRegions: Problem = {
  id: 'surrounded-regions',
  name: 'Surrounded Regions',
  number: 130,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/surrounded-regions/',
  description: 'Capture all regions of "O" that are surrounded by "X" (not connected to the border).',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
  pattern: 'Graphs',
  hints: [
    'DFS from border "O"s to mark them safe.',
    'Everything else that is "O" gets captured to "X".',
  ],
  code: `def solve(board):
    for r in range(ROWS):
        for c in range(COLS):
            if (r in [0,ROWS-1] or c in [0,COLS-1]) and board[r][c]=="O":
                dfs(board, r, c)  # mark border-connected O's as T
    for r in range(ROWS):
        for c in range(COLS):
            if board[r][c] == "O": board[r][c] = "X"
            elif board[r][c] == "T": board[r][c] = "O"`,
  steps: [
    {
      line: 2, label: 'Scan Borders', message: 'Scan border cells for "O". Found border "O" at (3,1).',
      viz: { matrix: { values: [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']], current: [3,1] }, variables: { phase: 'border scan' } },
    },
    {
      line: 5, label: 'Mark Safe', message: 'DFS from (3,1). It has no "O" neighbors on border side. Mark (3,1) as "T" (safe).', isKeyMoment: true,
      viz: { matrix: { values: [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','T','X','X']], highlights: [[3,1]] }, variables: { phase: 'marking safe' } },
    },
    {
      line: 5, label: 'Border Done', message: 'No more border "O"s. Only (3,1) is marked safe. Interior "O"s are surrounded.',
      viz: { matrix: { values: [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','T','X','X']] }, variables: { phase: 'border complete' } },
    },
    {
      line: 8, label: 'Capture O', message: 'Scan grid: convert remaining "O" to "X". Cells (1,1),(1,2),(2,2) are captured.', isKeyMoment: true,
      viz: { matrix: { values: [['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','T','X','X']], highlights: [[1,1],[1,2],[2,2]] }, variables: { phase: 'capture' } },
    },
    {
      line: 9, label: 'Restore Safe', message: 'Convert "T" back to "O". Cell (3,1) restored.',
      viz: { matrix: { values: [['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']], highlights: [[3,1]] }, variables: { phase: 'restore' } },
    },
    {
      line: 9, label: 'Result', message: 'Done. Interior "O"s captured. Border-connected "O"s preserved.', isKeyMoment: true,
      viz: { matrix: { values: [['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']] }, variables: { result: 'board updated' } },
    },
  ],
};


const courseSchedule: Problem = {
  id: 'course-schedule',
  name: 'Course Schedule',
  number: 207,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/course-schedule/',
  description: 'Determine if you can finish all courses given prerequisite pairs. Detect cycles in a directed graph using DFS.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
  timeComplexity: 'O(V + E)',
  spaceComplexity: 'O(V + E)',
  pattern: 'Graph - Cycle Detection (DFS)',
  hints: [
    'Build an adjacency list from prerequisites.',
    'Use DFS with a visiting set to detect cycles.',
    'A cycle means a course depends on itself transitively.',
  ],
  code: `def canFinish(numCourses, prerequisites):
    adj = {i: [] for i in range(numCourses)}
    for crs, pre in prerequisites:
        adj[crs].append(pre)
    visiting = set()
    visited = set()
    def dfs(crs):
        if crs in visiting: return False
        if crs in visited: return True
        visiting.add(crs)
        for pre in adj[crs]:
            if not dfs(pre): return False
        visiting.remove(crs)
        visited.add(crs)
        return True
    return all(dfs(c) for c in range(numCourses))`,
  steps: [
    {
      line: 1,
      label: 'Build graph',
      message: 'Build adjacency list: 0->[], 1->[0], 2->[0], 3->[1,2].',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: [],
        },
      },
    },
    {
      line: 7,
      label: 'DFS course 0',
      message: 'Visit course 0. No prerequisites, mark visited.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0'],
          current: '0',
        },
      },
    },
    {
      line: 10,
      label: 'DFS course 1',
      message: 'Visit course 1. Prereq 0 already visited, mark 1 visited.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0', '1'],
          current: '1',
        },
      },
    },
    {
      line: 10,
      label: 'DFS course 2',
      message: 'Visit course 2. Prereq 0 already visited, mark 2 visited.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0', '1', '2'],
          current: '2',
        },
      },
    },
    {
      line: 10,
      label: 'DFS course 3',
      message: 'Visit course 3. Prereqs 1 and 2 already visited, mark 3 visited.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0', '1', '2', '3'],
          current: '3',
        },
      },
    },
    {
      line: 16,
      label: 'No cycle',
      message: 'All courses visited with no cycle detected. Return True.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0', '1', '2', '3'],
        },
        variables: { result: 'True' },
      },
    },
  ],
};

const courseScheduleII: Problem = {
  id: 'course-schedule-ii',
  name: 'Course Schedule II',
  number: 210,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/course-schedule-ii/',
  description: 'Return the ordering of courses you should take to finish all courses. Topological sort via DFS.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
  timeComplexity: 'O(V + E)',
  spaceComplexity: 'O(V + E)',
  pattern: 'Graph - Topological Sort',
  hints: [
    'Use DFS and add nodes to the result after visiting all neighbors.',
    'The result is built in reverse postorder.',
    'Detect cycles the same way as Course Schedule.',
  ],
  code: `def findOrder(numCourses, prerequisites):
    adj = {i: [] for i in range(numCourses)}
    for crs, pre in prerequisites:
        adj[crs].append(pre)
    output = []
    visited, cycle = set(), set()
    def dfs(crs):
        if crs in cycle: return False
        if crs in visited: return True
        cycle.add(crs)
        for pre in adj[crs]:
            if not dfs(pre): return False
        cycle.remove(crs)
        visited.add(crs)
        output.append(crs)
        return True
    for c in range(numCourses):
        if not dfs(c): return []
    return output`,
  steps: [
    {
      line: 1,
      label: 'Build graph',
      message: 'Build adjacency list from prerequisites. Order output will be built via DFS postorder.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: [],
        },
        variables: { output: '[]' },
      },
    },
    {
      line: 7,
      label: 'DFS 0',
      message: 'DFS on course 0. No prereqs, append 0 to output.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0'],
          current: '0',
        },
        variables: { output: '[0]' },
      },
    },
    {
      line: 10,
      label: 'DFS 1',
      message: 'DFS on course 1. Prereq 0 already visited. Append 1.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0', '1'],
          current: '1',
        },
        variables: { output: '[0, 1]' },
      },
    },
    {
      line: 10,
      label: 'DFS 2',
      message: 'DFS on course 2. Prereq 0 already visited. Append 2.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0', '1', '2'],
          current: '2',
        },
        variables: { output: '[0, 1, 2]' },
      },
    },
    {
      line: 10,
      label: 'DFS 3',
      message: 'DFS on course 3. Prereqs 1,2 visited. Append 3.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0', '1', '2', '3'],
          current: '3',
        },
        variables: { output: '[0, 1, 2, 3]' },
      },
    },
    {
      line: 18,
      label: 'Result',
      message: 'Valid topological order: [0, 1, 2, 3]. All courses can be completed.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 300, y: 150 },
            { id: '3', value: 3, x: 200, y: 250 },
          ],
          edges: [
            { from: '1', to: '0', directed: true },
            { from: '2', to: '0', directed: true },
            { from: '3', to: '1', directed: true },
            { from: '3', to: '2', directed: true },
          ],
          visited: ['0', '1', '2', '3'],
        },
        variables: { output: '[0, 1, 2, 3]' },
      },
    },
  ],
};

const graphValidTree: Problem = {
  id: 'graph-valid-tree',
  name: 'Graph Valid Tree',
  number: 261,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/graph-valid-tree/',
  description: 'Given n nodes and edges, check if the graph is a valid tree (connected, no cycles, n-1 edges).',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]',
  timeComplexity: 'O(V + E)',
  spaceComplexity: 'O(V + E)',
  pattern: 'Graph - Valid Tree (DFS/Union-Find)',
  hints: [
    'A tree has exactly n-1 edges and is fully connected.',
    'Use DFS or Union-Find to verify connectivity and no cycles.',
    'If edges != n-1, immediately return False.',
  ],
  code: `def validTree(n, edges):
    if len(edges) != n - 1:
        return False
    adj = {i: [] for i in range(n)}
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    visited = set()
    def dfs(node):
        visited.add(node)
        for nei in adj[node]:
            if nei not in visited:
                dfs(nei)
    dfs(0)
    return len(visited) == n`,
  steps: [
    {
      line: 2,
      label: 'Check edges',
      message: '4 edges == n-1 = 4. Edge count valid for a tree.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 200, y: 150 },
            { id: '3', value: 3, x: 300, y: 150 },
            { id: '4', value: 4, x: 100, y: 250 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '0', to: '2' },
            { from: '0', to: '3' },
            { from: '1', to: '4' },
          ],
          visited: [],
        },
        variables: { edgeCount: 4, 'n-1': 4 },
      },
    },
    {
      line: 9,
      label: 'DFS from 0',
      message: 'Start DFS from node 0. Mark 0 visited.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 200, y: 150 },
            { id: '3', value: 3, x: 300, y: 150 },
            { id: '4', value: 4, x: 100, y: 250 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '0', to: '2' },
            { from: '0', to: '3' },
            { from: '1', to: '4' },
          ],
          visited: ['0'],
          current: '0',
        },
      },
    },
    {
      line: 11,
      label: 'Visit 1',
      message: 'DFS to neighbor 1. Mark visited.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 200, y: 150 },
            { id: '3', value: 3, x: 300, y: 150 },
            { id: '4', value: 4, x: 100, y: 250 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '0', to: '2' },
            { from: '0', to: '3' },
            { from: '1', to: '4' },
          ],
          visited: ['0', '1'],
          current: '1',
        },
      },
    },
    {
      line: 11,
      label: 'Visit 4',
      message: 'DFS to neighbor 4 (from 1). Mark visited. Backtrack.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 200, y: 150 },
            { id: '3', value: 3, x: 300, y: 150 },
            { id: '4', value: 4, x: 100, y: 250 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '0', to: '2' },
            { from: '0', to: '3' },
            { from: '1', to: '4' },
          ],
          visited: ['0', '1', '4'],
          current: '4',
        },
      },
    },
    {
      line: 11,
      label: 'Visit 2, 3',
      message: 'Back to 0, visit neighbors 2 and 3. All nodes now visited.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 200, y: 150 },
            { id: '3', value: 3, x: 300, y: 150 },
            { id: '4', value: 4, x: 100, y: 250 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '0', to: '2' },
            { from: '0', to: '3' },
            { from: '1', to: '4' },
          ],
          visited: ['0', '1', '4', '2', '3'],
          current: '3',
        },
      },
    },
    {
      line: 14,
      label: 'Valid tree',
      message: 'visited.size == n (5 == 5). Graph is connected with n-1 edges. Valid tree!',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 200, y: 50 },
            { id: '1', value: 1, x: 100, y: 150 },
            { id: '2', value: 2, x: 200, y: 150 },
            { id: '3', value: 3, x: 300, y: 150 },
            { id: '4', value: 4, x: 100, y: 250 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '0', to: '2' },
            { from: '0', to: '3' },
            { from: '1', to: '4' },
          ],
          visited: ['0', '1', '4', '2', '3'],
        },
        variables: { result: 'True' },
      },
    },
  ],
};

const connectedComponents: Problem = {
  id: 'number-of-connected-components',
  name: 'Number of Connected Components in an Undirected Graph',
  number: 323,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/',
  description: 'Given n nodes and edges, find the number of connected components using Union-Find.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
  timeComplexity: 'O(V + E)',
  spaceComplexity: 'O(V)',
  pattern: 'Graph - Union-Find',
  hints: [
    'Initialize each node as its own parent.',
    'Union nodes connected by edges.',
    'Count distinct roots at the end.',
  ],
  code: `def countComponents(n, edges):
    parent = list(range(n))
    rank = [0] * n
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(a, b):
        pa, pb = find(a), find(b)
        if pa == pb: return 0
        if rank[pa] < rank[pb]: pa, pb = pb, pa
        parent[pb] = pa
        if rank[pa] == rank[pb]: rank[pa] += 1
        return 1
    components = n
    for a, b in edges:
        components -= union(a, b)
    return components`,
  steps: [
    {
      line: 2,
      label: 'Init',
      message: 'Each node is its own component. 5 components total.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 50, y: 100 },
            { id: '1', value: 1, x: 150, y: 100 },
            { id: '2', value: 2, x: 250, y: 100 },
            { id: '3', value: 3, x: 350, y: 100 },
            { id: '4', value: 4, x: 450, y: 100 },
          ],
          edges: [],
          visited: [],
        },
        variables: { components: 5 },
      },
    },
    {
      line: 17,
      label: 'Union 0-1',
      message: 'Union(0,1). Merge components. Components = 4.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 50, y: 100 },
            { id: '1', value: 1, x: 150, y: 100 },
            { id: '2', value: 2, x: 250, y: 100 },
            { id: '3', value: 3, x: 350, y: 100 },
            { id: '4', value: 4, x: 450, y: 100 },
          ],
          edges: [{ from: '0', to: '1' }],
          visited: ['0', '1'],
          current: '0',
        },
        variables: { components: 4 },
      },
    },
    {
      line: 17,
      label: 'Union 1-2',
      message: 'Union(1,2). Node 2 joins component of 0,1. Components = 3.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 50, y: 100 },
            { id: '1', value: 1, x: 150, y: 100 },
            { id: '2', value: 2, x: 250, y: 100 },
            { id: '3', value: 3, x: 350, y: 100 },
            { id: '4', value: 4, x: 450, y: 100 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '1', to: '2' },
          ],
          visited: ['0', '1', '2'],
          current: '2',
        },
        variables: { components: 3 },
      },
    },
    {
      line: 17,
      label: 'Union 3-4',
      message: 'Union(3,4). Merge into one component. Components = 2.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 50, y: 100 },
            { id: '1', value: 1, x: 150, y: 100 },
            { id: '2', value: 2, x: 250, y: 100 },
            { id: '3', value: 3, x: 350, y: 100 },
            { id: '4', value: 4, x: 450, y: 100 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '1', to: '2' },
            { from: '3', to: '4' },
          ],
          visited: ['0', '1', '2', '3', '4'],
          current: '3',
        },
        variables: { components: 2 },
      },
    },
    {
      line: 18,
      label: 'All edges done',
      message: 'No more edges. Two disconnected groups: {0,1,2} and {3,4}.',
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 50, y: 100 },
            { id: '1', value: 1, x: 150, y: 100 },
            { id: '2', value: 2, x: 250, y: 100 },
            { id: '3', value: 3, x: 350, y: 100 },
            { id: '4', value: 4, x: 450, y: 100 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '1', to: '2' },
            { from: '3', to: '4' },
          ],
          visited: ['0', '1', '2', '3', '4'],
        },
        variables: { components: 2 },
      },
    },
    {
      line: 18,
      label: 'Result',
      message: 'Return 2 connected components.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '0', value: 0, x: 50, y: 100 },
            { id: '1', value: 1, x: 150, y: 100 },
            { id: '2', value: 2, x: 250, y: 100 },
            { id: '3', value: 3, x: 350, y: 100 },
            { id: '4', value: 4, x: 450, y: 100 },
          ],
          edges: [
            { from: '0', to: '1' },
            { from: '1', to: '2' },
            { from: '3', to: '4' },
          ],
          visited: ['0', '1', '2', '3', '4'],
        },
        variables: { result: 2 },
      },
    },
  ],
};

const redundantConnection: Problem = {
  id: 'redundant-connection',
  name: 'Redundant Connection',
  number: 684,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/redundant-connection/',
  description: 'Find the edge that, if removed, makes the graph a tree. Use Union-Find to detect the cycle-causing edge.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'edges = [[1,2],[1,3],[2,3]]',
  timeComplexity: 'O(V + E)',
  spaceComplexity: 'O(V)',
  pattern: 'Graph - Union-Find (Cycle Edge)',
  hints: [
    'Process edges one by one with Union-Find.',
    'The first edge where both nodes share the same root creates a cycle.',
    'That edge is the redundant connection.',
  ],
  code: `def findRedundantConnection(edges):
    parent = list(range(len(edges) + 1))
    rank = [0] * (len(edges) + 1)
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(a, b):
        pa, pb = find(a), find(b)
        if pa == pb: return False
        if rank[pa] < rank[pb]: pa, pb = pb, pa
        parent[pb] = pa
        if rank[pa] == rank[pb]: rank[pa] += 1
        return True
    for a, b in edges:
        if not union(a, b):
            return [a, b]`,
  steps: [
    {
      line: 2,
      label: 'Init',
      message: 'Initialize Union-Find. Each node is its own parent.',
      viz: {
        graph: {
          nodes: [
            { id: '1', value: 1, x: 100, y: 50 },
            { id: '2', value: 2, x: 250, y: 50 },
            { id: '3', value: 3, x: 175, y: 180 },
          ],
          edges: [],
          visited: [],
        },
      },
    },
    {
      line: 16,
      label: 'Edge [1,2]',
      message: 'Union(1,2). Different roots, merge successfully.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '1', value: 1, x: 100, y: 50 },
            { id: '2', value: 2, x: 250, y: 50 },
            { id: '3', value: 3, x: 175, y: 180 },
          ],
          edges: [{ from: '1', to: '2' }],
          visited: ['1', '2'],
        },
      },
    },
    {
      line: 16,
      label: 'Edge [1,3]',
      message: 'Union(1,3). Different roots, merge successfully.',
      viz: {
        graph: {
          nodes: [
            { id: '1', value: 1, x: 100, y: 50 },
            { id: '2', value: 2, x: 250, y: 50 },
            { id: '3', value: 3, x: 175, y: 180 },
          ],
          edges: [
            { from: '1', to: '2' },
            { from: '1', to: '3' },
          ],
          visited: ['1', '2', '3'],
        },
      },
    },
    {
      line: 10,
      label: 'Edge [2,3]',
      message: 'Union(2,3). Both share root 1. Same component! Cycle detected.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '1', value: 1, x: 100, y: 50 },
            { id: '2', value: 2, x: 250, y: 50 },
            { id: '3', value: 3, x: 175, y: 180 },
          ],
          edges: [
            { from: '1', to: '2' },
            { from: '1', to: '3' },
            { from: '2', to: '3' },
          ],
          visited: ['1', '2', '3'],
          current: '2',
        },
      },
    },
    {
      line: 17,
      label: 'Redundant found',
      message: 'Edge [2,3] causes a cycle. This is the redundant connection.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: '1', value: 1, x: 100, y: 50 },
            { id: '2', value: 2, x: 250, y: 50 },
            { id: '3', value: 3, x: 175, y: 180 },
          ],
          edges: [
            { from: '1', to: '2' },
            { from: '1', to: '3' },
            { from: '2', to: '3' },
          ],
          visited: ['1', '2', '3'],
          current: '3',
        },
        variables: { result: '[2, 3]' },
      },
    },
    {
      line: 17,
      label: 'Result',
      message: 'Return [2,3]. Removing this edge makes the graph a valid tree.',
      viz: {
        graph: {
          nodes: [
            { id: '1', value: 1, x: 100, y: 50 },
            { id: '2', value: 2, x: 250, y: 50 },
            { id: '3', value: 3, x: 175, y: 180 },
          ],
          edges: [
            { from: '1', to: '2' },
            { from: '1', to: '3' },
          ],
          visited: ['1', '2', '3'],
        },
        variables: { result: '[2, 3]' },
      },
    },
  ],
};

const wordLadder: Problem = {
  id: 'word-ladder',
  name: 'Word Ladder',
  number: 127,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/word-ladder/',
  description: 'Find the shortest transformation from beginWord to endWord, changing one letter at a time. BFS on word graph.',
  vizTypes: ['graph'],
  language: 'python',
  testInput: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
  timeComplexity: 'O(M^2 * N)',
  spaceComplexity: 'O(M^2 * N)',
  pattern: 'Graph - BFS Shortest Path',
  hints: [
    'Model words as nodes; edges connect words differing by one letter.',
    'Use BFS from beginWord to find shortest path.',
    'Use wildcard patterns (e.g., h*t) to find neighbors efficiently.',
  ],
  code: `def ladderLength(beginWord, endWord, wordList):
    wordSet = set(wordList)
    if endWord not in wordSet:
        return 0
    queue = deque([(beginWord, 1)])
    visited = {beginWord}
    while queue:
        word, steps = queue.popleft()
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = word[:i] + c + word[i+1:]
                if next_word == endWord:
                    return steps + 1
                if next_word in wordSet and next_word not in visited:
                    visited.add(next_word)
                    queue.append((next_word, steps + 1))
    return 0`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Build word graph. BFS from "hit" to "cog".',
      viz: {
        graph: {
          nodes: [
            { id: 'hit', value: 'hit', x: 50, y: 100 },
            { id: 'hot', value: 'hot', x: 150, y: 50 },
            { id: 'dot', value: 'dot', x: 250, y: 50 },
            { id: 'lot', value: 'lot', x: 250, y: 150 },
            { id: 'dog', value: 'dog', x: 350, y: 50 },
            { id: 'log', value: 'log', x: 350, y: 150 },
            { id: 'cog', value: 'cog', x: 450, y: 100 },
          ],
          edges: [
            { from: 'hit', to: 'hot' },
            { from: 'hot', to: 'dot' },
            { from: 'hot', to: 'lot' },
            { from: 'dot', to: 'dog' },
            { from: 'lot', to: 'log' },
            { from: 'dog', to: 'cog' },
            { from: 'log', to: 'cog' },
            { from: 'dot', to: 'lot' },
            { from: 'dog', to: 'log' },
          ],
          visited: [],
          queue: ['hit'],
        },
      },
    },
    {
      line: 7,
      label: 'BFS: hit',
      message: 'Dequeue "hit" (step 1). Neighbor "hot" added to queue.',
      viz: {
        graph: {
          nodes: [
            { id: 'hit', value: 'hit', x: 50, y: 100 },
            { id: 'hot', value: 'hot', x: 150, y: 50 },
            { id: 'dot', value: 'dot', x: 250, y: 50 },
            { id: 'lot', value: 'lot', x: 250, y: 150 },
            { id: 'dog', value: 'dog', x: 350, y: 50 },
            { id: 'log', value: 'log', x: 350, y: 150 },
            { id: 'cog', value: 'cog', x: 450, y: 100 },
          ],
          edges: [
            { from: 'hit', to: 'hot' },
            { from: 'hot', to: 'dot' },
            { from: 'hot', to: 'lot' },
            { from: 'dot', to: 'dog' },
            { from: 'lot', to: 'log' },
            { from: 'dog', to: 'cog' },
            { from: 'log', to: 'cog' },
            { from: 'dot', to: 'lot' },
            { from: 'dog', to: 'log' },
          ],
          visited: ['hit'],
          current: 'hit',
          queue: ['hot'],
        },
        variables: { steps: 1 },
      },
    },
    {
      line: 7,
      label: 'BFS: hot',
      message: 'Dequeue "hot" (step 2). Neighbors "dot","lot" added.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: 'hit', value: 'hit', x: 50, y: 100 },
            { id: 'hot', value: 'hot', x: 150, y: 50 },
            { id: 'dot', value: 'dot', x: 250, y: 50 },
            { id: 'lot', value: 'lot', x: 250, y: 150 },
            { id: 'dog', value: 'dog', x: 350, y: 50 },
            { id: 'log', value: 'log', x: 350, y: 150 },
            { id: 'cog', value: 'cog', x: 450, y: 100 },
          ],
          edges: [
            { from: 'hit', to: 'hot' },
            { from: 'hot', to: 'dot' },
            { from: 'hot', to: 'lot' },
            { from: 'dot', to: 'dog' },
            { from: 'lot', to: 'log' },
            { from: 'dog', to: 'cog' },
            { from: 'log', to: 'cog' },
            { from: 'dot', to: 'lot' },
            { from: 'dog', to: 'log' },
          ],
          visited: ['hit', 'hot'],
          current: 'hot',
          queue: ['dot', 'lot'],
        },
        variables: { steps: 2 },
      },
    },
    {
      line: 7,
      label: 'BFS: dot',
      message: 'Dequeue "dot" (step 3). Neighbor "dog" added.',
      viz: {
        graph: {
          nodes: [
            { id: 'hit', value: 'hit', x: 50, y: 100 },
            { id: 'hot', value: 'hot', x: 150, y: 50 },
            { id: 'dot', value: 'dot', x: 250, y: 50 },
            { id: 'lot', value: 'lot', x: 250, y: 150 },
            { id: 'dog', value: 'dog', x: 350, y: 50 },
            { id: 'log', value: 'log', x: 350, y: 150 },
            { id: 'cog', value: 'cog', x: 450, y: 100 },
          ],
          edges: [
            { from: 'hit', to: 'hot' },
            { from: 'hot', to: 'dot' },
            { from: 'hot', to: 'lot' },
            { from: 'dot', to: 'dog' },
            { from: 'lot', to: 'log' },
            { from: 'dog', to: 'cog' },
            { from: 'log', to: 'cog' },
            { from: 'dot', to: 'lot' },
            { from: 'dog', to: 'log' },
          ],
          visited: ['hit', 'hot', 'dot'],
          current: 'dot',
          queue: ['lot', 'dog'],
        },
        variables: { steps: 3 },
      },
    },
    {
      line: 7,
      label: 'BFS: lot',
      message: 'Dequeue "lot" (step 3). Neighbor "log" added.',
      viz: {
        graph: {
          nodes: [
            { id: 'hit', value: 'hit', x: 50, y: 100 },
            { id: 'hot', value: 'hot', x: 150, y: 50 },
            { id: 'dot', value: 'dot', x: 250, y: 50 },
            { id: 'lot', value: 'lot', x: 250, y: 150 },
            { id: 'dog', value: 'dog', x: 350, y: 50 },
            { id: 'log', value: 'log', x: 350, y: 150 },
            { id: 'cog', value: 'cog', x: 450, y: 100 },
          ],
          edges: [
            { from: 'hit', to: 'hot' },
            { from: 'hot', to: 'dot' },
            { from: 'hot', to: 'lot' },
            { from: 'dot', to: 'dog' },
            { from: 'lot', to: 'log' },
            { from: 'dog', to: 'cog' },
            { from: 'log', to: 'cog' },
            { from: 'dot', to: 'lot' },
            { from: 'dog', to: 'log' },
          ],
          visited: ['hit', 'hot', 'dot', 'lot'],
          current: 'lot',
          queue: ['dog', 'log'],
        },
        variables: { steps: 3 },
      },
    },
    {
      line: 11,
      label: 'BFS: dog',
      message: 'Dequeue "dog" (step 4). Try neighbors: "cog" == endWord!',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: 'hit', value: 'hit', x: 50, y: 100 },
            { id: 'hot', value: 'hot', x: 150, y: 50 },
            { id: 'dot', value: 'dot', x: 250, y: 50 },
            { id: 'lot', value: 'lot', x: 250, y: 150 },
            { id: 'dog', value: 'dog', x: 350, y: 50 },
            { id: 'log', value: 'log', x: 350, y: 150 },
            { id: 'cog', value: 'cog', x: 450, y: 100 },
          ],
          edges: [
            { from: 'hit', to: 'hot' },
            { from: 'hot', to: 'dot' },
            { from: 'hot', to: 'lot' },
            { from: 'dot', to: 'dog' },
            { from: 'lot', to: 'log' },
            { from: 'dog', to: 'cog' },
            { from: 'log', to: 'cog' },
            { from: 'dot', to: 'lot' },
            { from: 'dog', to: 'log' },
          ],
          visited: ['hit', 'hot', 'dot', 'lot', 'dog'],
          current: 'dog',
          queue: ['log'],
        },
        variables: { steps: 4 },
      },
    },
    {
      line: 12,
      label: 'Found!',
      message: 'Return steps+1 = 5. Path: hit->hot->dot->dog->cog.',
      isKeyMoment: true,
      viz: {
        graph: {
          nodes: [
            { id: 'hit', value: 'hit', x: 50, y: 100 },
            { id: 'hot', value: 'hot', x: 150, y: 50 },
            { id: 'dot', value: 'dot', x: 250, y: 50 },
            { id: 'lot', value: 'lot', x: 250, y: 150 },
            { id: 'dog', value: 'dog', x: 350, y: 50 },
            { id: 'log', value: 'log', x: 350, y: 150 },
            { id: 'cog', value: 'cog', x: 450, y: 100 },
          ],
          edges: [
            { from: 'hit', to: 'hot' },
            { from: 'hot', to: 'dot' },
            { from: 'hot', to: 'lot' },
            { from: 'dot', to: 'dog' },
            { from: 'lot', to: 'log' },
            { from: 'dog', to: 'cog' },
            { from: 'log', to: 'cog' },
            { from: 'dot', to: 'lot' },
            { from: 'dog', to: 'log' },
          ],
          visited: ['hit', 'hot', 'dot', 'dog', 'cog'],
          current: 'cog',
        },
        variables: { result: 5 },
      },
    },
  ],
};


export const graphsProblems: Problem[] = [numberOfIslands, maxAreaOfIsland, cloneGraph, wallsAndGates, rottingOranges, pacificAtlantic, surroundedRegions, courseSchedule, courseScheduleII, graphValidTree, connectedComponents, redundantConnection, wordLadder];
