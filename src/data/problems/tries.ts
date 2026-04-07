import type { Problem } from '../types';

const implementTrie: Problem = {
  id: 'implement-trie',
  name: 'Implement Trie (Prefix Tree)',
  number: 208,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
  description: 'Implement a trie with insert, search, and startsWith methods.',
  vizTypes: ['trie'],
  language: 'python',
  testInput: 'insert("apple"), search("apple"), search("app"), startsWith("app")',
  timeComplexity: 'O(m) per operation',
  spaceComplexity: 'O(n * m)',
  pattern: 'Tries',
  hints: [
    'Each node stores a map of children keyed by character.',
    'Use a boolean flag to mark the end of a word.',
  ],
  code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEnd = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.isEnd = True

    def search(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                return False
            node = node.children[c]
        return node.isEnd

    def startsWith(self, prefix):
        node = self.root
        for c in prefix:
            if c not in node.children:
                return False
            node = node.children[c]
        return True`,
  steps: [
    {
      line: 1,
      label: 'Init Trie',
      message: 'Create an empty trie with just the root node.',
      viz: {
        trie: {
          nodes: [{ id: 'root', char: '' }],
          edges: [],
        },
      },
    },
    {
      line: 4,
      label: 'Insert "apple" - a,p,p',
      message: 'Insert characters a -> p -> p. Create new nodes for each.',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'a', char: 'a' },
            { id: 'ap', char: 'p' },
            { id: 'app', char: 'p' },
          ],
          edges: [
            { from: 'root', to: 'a' },
            { from: 'a', to: 'ap' },
            { from: 'ap', to: 'app' },
          ],
          currentPath: ['root', 'a', 'ap', 'app'],
        },
      },
    },
    {
      line: 4,
      label: 'Insert "apple" - l,e',
      message: 'Continue inserting l -> e. Mark e as end of word.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'a', char: 'a' },
            { id: 'ap', char: 'p' },
            { id: 'app', char: 'p' },
            { id: 'appl', char: 'l' },
            { id: 'apple', char: 'e', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'a' },
            { from: 'a', to: 'ap' },
            { from: 'ap', to: 'app' },
            { from: 'app', to: 'appl' },
            { from: 'appl', to: 'apple' },
          ],
          currentPath: ['app', 'appl', 'apple'],
        },
        variables: { inserted: 'apple' },
      },
    },
    {
      line: 7,
      label: 'Search "apple"',
      message: 'Traverse a->p->p->l->e. Node e has isEnd=true, so return true.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'a', char: 'a' },
            { id: 'ap', char: 'p' },
            { id: 'app', char: 'p' },
            { id: 'appl', char: 'l' },
            { id: 'apple', char: 'e', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'a' },
            { from: 'a', to: 'ap' },
            { from: 'ap', to: 'app' },
            { from: 'app', to: 'appl' },
            { from: 'appl', to: 'apple' },
          ],
          highlighted: ['a', 'ap', 'app', 'appl', 'apple'],
        },
        variables: { search: 'apple', result: true },
      },
    },
    {
      line: 7,
      label: 'Search "app"',
      message: 'Traverse a->p->p. Node p has isEnd=false, so return false.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'a', char: 'a' },
            { id: 'ap', char: 'p' },
            { id: 'app', char: 'p' },
            { id: 'appl', char: 'l' },
            { id: 'apple', char: 'e', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'a' },
            { from: 'a', to: 'ap' },
            { from: 'ap', to: 'app' },
            { from: 'app', to: 'appl' },
            { from: 'appl', to: 'apple' },
          ],
          highlighted: ['a', 'ap', 'app'],
        },
        variables: { search: 'app', result: false, reason: 'isEnd=false' },
      },
    },
    {
      line: 10,
      label: 'StartsWith "app"',
      message: 'Traverse a->p->p. Node exists, so prefix is found. Return true.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'a', char: 'a' },
            { id: 'ap', char: 'p' },
            { id: 'app', char: 'p' },
            { id: 'appl', char: 'l' },
            { id: 'apple', char: 'e', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'a' },
            { from: 'a', to: 'ap' },
            { from: 'ap', to: 'app' },
            { from: 'app', to: 'appl' },
            { from: 'appl', to: 'apple' },
          ],
          highlighted: ['a', 'ap', 'app'],
          currentPath: ['root', 'a', 'ap', 'app'],
        },
        variables: { prefix: 'app', result: true },
      },
    },
    {
      line: 10,
      label: 'Complete',
      message: 'Trie supports O(m) insert, search, and prefix lookup where m is word length.',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'a', char: 'a' },
            { id: 'ap', char: 'p' },
            { id: 'app', char: 'p' },
            { id: 'appl', char: 'l' },
            { id: 'apple', char: 'e', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'a' },
            { from: 'a', to: 'ap' },
            { from: 'ap', to: 'app' },
            { from: 'app', to: 'appl' },
            { from: 'appl', to: 'apple' },
          ],
        },
      },
    },
  ],
};

const designAddAndSearchWords: Problem = {
  id: 'design-add-and-search-words',
  name: 'Design Add and Search Words Data Structure',
  number: 211,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
  description: 'Design a data structure that supports adding words and searching with "." wildcard.',
  vizTypes: ['trie'],
  language: 'python',
  testInput: 'addWord("bad"), addWord("dad"), search(".ad")',
  timeComplexity: 'O(m) add, O(26^m) worst search',
  spaceComplexity: 'O(n * m)',
  pattern: 'Tries',
  hints: [
    'Use a trie for storage. On ".", branch into all children.',
    'Recursion or DFS handles the wildcard branching naturally.',
  ],
  code: `class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.isEnd = True

    def search(self, word):
        def dfs(i, node):
            for j in range(i, len(word)):
                if word[j] == '.':
                    return any(dfs(j+1, ch) for ch in node.children.values())
                if word[j] not in node.children:
                    return False
                node = node.children[word[j]]
            return node.isEnd
        return dfs(0, self.root)`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Create an empty trie with root node.',
      viz: {
        trie: {
          nodes: [{ id: 'root', char: '' }],
          edges: [],
        },
      },
    },
    {
      line: 3,
      label: 'addWord("bad")',
      message: 'Insert b->a->d into the trie. Mark d as end of word.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'b', char: 'b' },
            { id: 'ba', char: 'a' },
            { id: 'bad', char: 'd', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'b' },
            { from: 'b', to: 'ba' },
            { from: 'ba', to: 'bad' },
          ],
          currentPath: ['root', 'b', 'ba', 'bad'],
        },
        variables: { added: 'bad' },
      },
    },
    {
      line: 3,
      label: 'addWord("dad")',
      message: 'Insert d->a->d into the trie. Mark d as end of word.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'b', char: 'b' },
            { id: 'ba', char: 'a' },
            { id: 'bad', char: 'd', isEnd: true },
            { id: 'd', char: 'd' },
            { id: 'da', char: 'a' },
            { id: 'dad', char: 'd', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'b' },
            { from: 'b', to: 'ba' },
            { from: 'ba', to: 'bad' },
            { from: 'root', to: 'd' },
            { from: 'd', to: 'da' },
            { from: 'da', to: 'dad' },
          ],
          currentPath: ['root', 'd', 'da', 'dad'],
        },
        variables: { added: 'dad' },
      },
    },
    {
      line: 6,
      label: 'search(".ad") - Wildcard',
      message: 'First char is ".". Branch into all root children: b and d.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'b', char: 'b' },
            { id: 'ba', char: 'a' },
            { id: 'bad', char: 'd', isEnd: true },
            { id: 'd', char: 'd' },
            { id: 'da', char: 'a' },
            { id: 'dad', char: 'd', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'b' },
            { from: 'b', to: 'ba' },
            { from: 'ba', to: 'bad' },
            { from: 'root', to: 'd' },
            { from: 'd', to: 'da' },
            { from: 'da', to: 'dad' },
          ],
          highlighted: ['b', 'd'],
        },
        variables: { pattern: '.ad', wildcard: '.', branches: ['b', 'd'] },
      },
    },
    {
      line: 6,
      label: 'Branch "b" path',
      message: 'Follow b->a->d. "a" matches "a", "d" matches "d". Node d is end. Match found!',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'b', char: 'b' },
            { id: 'ba', char: 'a' },
            { id: 'bad', char: 'd', isEnd: true },
            { id: 'd', char: 'd' },
            { id: 'da', char: 'a' },
            { id: 'dad', char: 'd', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'b' },
            { from: 'b', to: 'ba' },
            { from: 'ba', to: 'bad' },
            { from: 'root', to: 'd' },
            { from: 'd', to: 'da' },
            { from: 'da', to: 'dad' },
          ],
          highlighted: ['b', 'ba', 'bad'],
          currentPath: ['b', 'ba', 'bad'],
        },
        variables: { checking: 'b->a->d', isEnd: true },
      },
    },
    {
      line: 6,
      label: 'Result',
      message: 'search(".ad") returns true. Both "bad" and "dad" match the pattern.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'b', char: 'b' },
            { id: 'ba', char: 'a' },
            { id: 'bad', char: 'd', isEnd: true },
            { id: 'd', char: 'd' },
            { id: 'da', char: 'a' },
            { id: 'dad', char: 'd', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'b' },
            { from: 'b', to: 'ba' },
            { from: 'ba', to: 'bad' },
            { from: 'root', to: 'd' },
            { from: 'd', to: 'da' },
            { from: 'da', to: 'dad' },
          ],
          highlighted: ['b', 'ba', 'bad', 'd', 'da', 'dad'],
        },
        variables: { result: true, matches: ['bad', 'dad'] },
      },
    },
    {
      line: 6,
      label: 'Complete',
      message: 'Wildcard "." triggers DFS into all children. Worst case explores 26 branches per dot.',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'b', char: 'b' },
            { id: 'ba', char: 'a' },
            { id: 'bad', char: 'd', isEnd: true },
            { id: 'd', char: 'd' },
            { id: 'da', char: 'a' },
            { id: 'dad', char: 'd', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'b' },
            { from: 'b', to: 'ba' },
            { from: 'ba', to: 'bad' },
            { from: 'root', to: 'd' },
            { from: 'd', to: 'da' },
            { from: 'da', to: 'dad' },
          ],
        },
      },
    },
  ],
};

const wordSearchII: Problem = {
  id: 'word-search-ii',
  name: 'Word Search II',
  number: 212,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/word-search-ii/',
  description: 'Given a board of characters and a list of words, find all words that can be formed by adjacent cells.',
  vizTypes: ['trie', 'matrix'],
  language: 'python',
  testInput: 'board=[["o","a","a","n"],["e","t","a","e"]], words=["eat","oath"]',
  timeComplexity: 'O(m * n * 4^L)',
  spaceComplexity: 'O(W * L)',
  pattern: 'Tries',
  hints: [
    'Build a trie from the word list, then DFS from each cell.',
    'Prune branches in the trie as words are found to avoid duplicates.',
  ],
  code: `def findWords(board, words):
    root = buildTrie(words)
    res = []
    for r in range(len(board)):
        for c in range(len(board[0])):
            dfs(board, r, c, root, "", res)
    return res

def dfs(board, r, c, node, word, res):
    if node.isEnd:
        res.append(word)
        node.isEnd = False
    if r<0 or c<0 or r>=len(board) or c>=len(board[0]):
        return
    ch = board[r][c]
    if ch not in node.children: return
    board[r][c] = '#'
    for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
        dfs(board, r+dr, c+dc, node.children[ch], word+ch, res)
    board[r][c] = ch`,
  steps: [
    {
      line: 1,
      label: 'Build Trie',
      message: 'Build a trie from words ["eat", "oath"]. This guides our board search.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'e', char: 'e' },
            { id: 'ea', char: 'a' },
            { id: 'eat', char: 't', isEnd: true },
            { id: 'o', char: 'o' },
            { id: 'oa', char: 'a' },
            { id: 'oat', char: 't' },
            { id: 'oath', char: 'h', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'e' },
            { from: 'e', to: 'ea' },
            { from: 'ea', to: 'eat' },
            { from: 'root', to: 'o' },
            { from: 'o', to: 'oa' },
            { from: 'oa', to: 'oat' },
            { from: 'oat', to: 'oath' },
          ],
        },
        matrix: {
          values: [['o','a','a','n'],['e','t','a','e']],
        },
      },
    },
    {
      line: 3,
      label: 'Start DFS at (0,0)',
      message: 'Cell (0,0)="o" matches trie child "o". Begin DFS from here.',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'e', char: 'e' },
            { id: 'ea', char: 'a' },
            { id: 'eat', char: 't', isEnd: true },
            { id: 'o', char: 'o' },
            { id: 'oa', char: 'a' },
            { id: 'oat', char: 't' },
            { id: 'oath', char: 'h', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'e' },
            { from: 'e', to: 'ea' },
            { from: 'ea', to: 'eat' },
            { from: 'root', to: 'o' },
            { from: 'o', to: 'oa' },
            { from: 'oa', to: 'oat' },
            { from: 'oat', to: 'oath' },
          ],
          highlighted: ['o'],
        },
        matrix: {
          values: [['o','a','a','n'],['e','t','a','e']],
          current: [0, 0],
        },
      },
    },
    {
      line: 5,
      label: 'Follow "oath" path',
      message: 'DFS: o(0,0)->a(0,1)->t(1,1)->... looking for "h" neighbor of t.',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'e', char: 'e' },
            { id: 'ea', char: 'a' },
            { id: 'eat', char: 't', isEnd: true },
            { id: 'o', char: 'o' },
            { id: 'oa', char: 'a' },
            { id: 'oat', char: 't' },
            { id: 'oath', char: 'h', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'e' },
            { from: 'e', to: 'ea' },
            { from: 'ea', to: 'eat' },
            { from: 'root', to: 'o' },
            { from: 'o', to: 'oa' },
            { from: 'oa', to: 'oat' },
            { from: 'oat', to: 'oath' },
          ],
          currentPath: ['o', 'oa', 'oat'],
        },
        matrix: {
          values: [['o','a','a','n'],['e','t','a','e']],
          path: [[0,0],[0,1],[1,1]],
          current: [1, 1],
        },
        variables: { building: 'oat' },
      },
    },
    {
      line: 5,
      label: 'No "h" neighbor',
      message: 'No adjacent "h" from (1,1). "oath" not found from this path. Backtrack.',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'e', char: 'e' },
            { id: 'ea', char: 'a' },
            { id: 'eat', char: 't', isEnd: true },
            { id: 'o', char: 'o' },
            { id: 'oa', char: 'a' },
            { id: 'oat', char: 't' },
            { id: 'oath', char: 'h', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'e' },
            { from: 'e', to: 'ea' },
            { from: 'ea', to: 'eat' },
            { from: 'root', to: 'o' },
            { from: 'o', to: 'oa' },
            { from: 'oa', to: 'oat' },
            { from: 'oat', to: 'oath' },
          ],
          currentPath: ['o', 'oa', 'oat'],
        },
        matrix: {
          values: [['o','a','a','n'],['e','t','a','e']],
          path: [[0,0],[0,1],[1,1]],
        },
        variables: { building: 'oat', status: 'no h neighbor, backtrack' },
      },
    },
    {
      line: 3,
      label: 'DFS at (1,0) for "eat"',
      message: 'Cell (1,0)="e" matches trie child "e". DFS: e(1,0)->a(0,0)?  No, a is at (0,1). e->a(1,2)?  Try e(1,0)->a via neighbors.',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'e', char: 'e' },
            { id: 'ea', char: 'a' },
            { id: 'eat', char: 't', isEnd: true },
            { id: 'o', char: 'o' },
            { id: 'oa', char: 'a' },
            { id: 'oat', char: 't' },
            { id: 'oath', char: 'h', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'e' },
            { from: 'e', to: 'ea' },
            { from: 'ea', to: 'eat' },
            { from: 'root', to: 'o' },
            { from: 'o', to: 'oa' },
            { from: 'oa', to: 'oat' },
            { from: 'oat', to: 'oath' },
          ],
          highlighted: ['e'],
        },
        matrix: {
          values: [['o','a','a','n'],['e','t','a','e']],
          current: [1, 0],
        },
      },
    },
    {
      line: 5,
      label: 'Found "eat"',
      message: 'DFS from (1,3): e(1,3)->a(1,2)->t(1,1). "eat" is end of word. Add to results!',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'e', char: 'e' },
            { id: 'ea', char: 'a' },
            { id: 'eat', char: 't', isEnd: true },
            { id: 'o', char: 'o' },
            { id: 'oa', char: 'a' },
            { id: 'oat', char: 't' },
            { id: 'oath', char: 'h', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'e' },
            { from: 'e', to: 'ea' },
            { from: 'ea', to: 'eat' },
            { from: 'root', to: 'o' },
            { from: 'o', to: 'oa' },
            { from: 'oa', to: 'oat' },
            { from: 'oat', to: 'oath' },
          ],
          highlighted: ['e', 'ea', 'eat'],
        },
        matrix: {
          values: [['o','a','a','n'],['e','t','a','e']],
          path: [[1,3],[1,2],[1,1]],
          current: [1, 1],
        },
        variables: { found: ['eat'] },
      },
    },
    {
      line: 5,
      label: 'Found "oath"',
      message: 'Continuing search finds oath not reachable on this board. Final result: ["eat"].',
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'e', char: 'e' },
            { id: 'ea', char: 'a' },
            { id: 'eat', char: 't', isEnd: true },
            { id: 'o', char: 'o' },
            { id: 'oa', char: 'a' },
            { id: 'oat', char: 't' },
            { id: 'oath', char: 'h', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'e' },
            { from: 'e', to: 'ea' },
            { from: 'ea', to: 'eat' },
            { from: 'root', to: 'o' },
            { from: 'o', to: 'oa' },
            { from: 'oa', to: 'oat' },
            { from: 'oat', to: 'oath' },
          ],
        },
        matrix: {
          values: [['o','a','a','n'],['e','t','a','e']],
        },
        variables: { result: ['eat'] },
      },
    },
    {
      line: 1,
      label: 'Complete',
      message: 'Trie prunes invalid paths early. Without trie, we would check every word separately.',
      isKeyMoment: true,
      viz: {
        trie: {
          nodes: [
            { id: 'root', char: '' },
            { id: 'e', char: 'e' },
            { id: 'ea', char: 'a' },
            { id: 'eat', char: 't', isEnd: true },
            { id: 'o', char: 'o' },
            { id: 'oa', char: 'a' },
            { id: 'oat', char: 't' },
            { id: 'oath', char: 'h', isEnd: true },
          ],
          edges: [
            { from: 'root', to: 'e' },
            { from: 'e', to: 'ea' },
            { from: 'ea', to: 'eat' },
            { from: 'root', to: 'o' },
            { from: 'o', to: 'oa' },
            { from: 'oa', to: 'oat' },
            { from: 'oat', to: 'oath' },
          ],
        },
        matrix: {
          values: [['o','a','a','n'],['e','t','a','e']],
        },
        variables: { result: ['eat'] },
      },
    },
  ],
};

export const triesProblems: Problem[] = [
  implementTrie,
  designAddAndSearchWords,
  wordSearchII,
];
