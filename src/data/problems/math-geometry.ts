import type { Problem } from '../types';

const rotateImage: Problem = {
  id: 'rotate-image',
  name: 'Rotate Image',
  number: 48,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/rotate-image/',
  description: 'Rotate an n x n 2D matrix 90 degrees clockwise in-place.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
  timeComplexity: 'O(n^2)',
  spaceComplexity: 'O(1)',
  pattern: 'Transpose + Reverse',
  hints: [
    'Transpose the matrix (swap rows and columns).',
    'Reverse each row to complete the 90-degree rotation.',
  ],
  code: `def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()`,
  steps: [
    { line: 1, label: 'Init', message: 'Original 3x3 matrix.', viz: { matrix: { values: [[1,2,3],[4,5,6],[7,8,9]] }, variables: { n: 3 } } },
    { line: 4, label: 'Transpose', message: 'Swap (0,1)/(1,0), (0,2)/(2,0), (1,2)/(2,1).', viz: { matrix: { values: [[1,4,7],[2,5,8],[3,6,9]], highlights: [[0,1],[1,0],[0,2],[2,0]] }, variables: {} } },
    { line: 4, label: 'After T', message: 'Transposed: rows became columns.', viz: { matrix: { values: [[1,4,7],[2,5,8],[3,6,9]] }, variables: {} } },
    { line: 6, label: 'Rev Row 0', message: 'Reverse [1,4,7] -> [7,4,1].', viz: { matrix: { values: [[7,4,1],[2,5,8],[3,6,9]], highlights: [[0,0],[0,2]] }, variables: {} } },
    { line: 6, label: 'Rev Row 1-2', message: 'Reverse remaining rows.', viz: { matrix: { values: [[7,4,1],[8,5,2],[9,6,3]], highlights: [[1,0],[1,2],[2,0],[2,2]] }, variables: {} } },
    { line: 6, label: 'Result', message: 'Rotated 90 degrees clockwise.', isKeyMoment: true, viz: { matrix: { values: [[7,4,1],[8,5,2],[9,6,3]] }, variables: { result: 'rotated' } } },
  ],
};

const spiralMatrix: Problem = {
  id: 'spiral-matrix',
  name: 'Spiral Matrix',
  number: 54,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/spiral-matrix/',
  description: 'Return all elements of the matrix in spiral order.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
  timeComplexity: 'O(m*n)',
  spaceComplexity: 'O(1)',
  pattern: 'Layer-by-Layer',
  hints: [
    'Use four boundaries: top, bottom, left, right.',
    'Shrink boundaries after traversing each side.',
  ],
  code: `def spiralOrder(matrix):
    res = []
    top, bot, left, right = 0, len(matrix)-1, 0, len(matrix[0])-1
    while top <= bot and left <= right:
        for i in range(left, right+1): res.append(matrix[top][i])
        top += 1
        for i in range(top, bot+1): res.append(matrix[i][right])
        right -= 1
    return res`,
  steps: [
    { line: 1, label: 'Init', message: 'Boundaries: top=0, bot=2, left=0, right=2.', viz: { matrix: { values: [[1,2,3],[4,5,6],[7,8,9]] }, variables: { top: 0, bot: 2, left: 0, right: 2 } } },
    { line: 4, label: 'Top Row', message: 'Traverse right: 1,2,3. top becomes 1.', viz: { matrix: { values: [[1,2,3],[4,5,6],[7,8,9]], path: [[0,0],[0,1],[0,2]] }, variables: { res: '[1,2,3]' } } },
    { line: 6, label: 'Right Col', message: 'Traverse down: 6,9. right becomes 1.', viz: { matrix: { values: [[1,2,3],[4,5,6],[7,8,9]], path: [[1,2],[2,2]] }, variables: { res: '[1,2,3,6,9]' } } },
    { line: 6, label: 'Bottom Row', message: 'Traverse left: 8,7. bot becomes 1.', viz: { matrix: { values: [[1,2,3],[4,5,6],[7,8,9]], path: [[2,1],[2,0]] }, variables: { res: '[1,2,3,6,9,8,7]' } } },
    { line: 6, label: 'Left Col', message: 'Traverse up: 4. left becomes 1.', viz: { matrix: { values: [[1,2,3],[4,5,6],[7,8,9]], path: [[1,0]] }, variables: { res: '[1,2,3,6,9,8,7,4]' } } },
    { line: 8, label: 'Result', message: 'Center: 5. Spiral: [1,2,3,6,9,8,7,4,5].', isKeyMoment: true, viz: { matrix: { values: [[1,2,3],[4,5,6],[7,8,9]], current: [1,1] }, variables: { result: '[1,2,3,6,9,8,7,4,5]' } } },
  ],
};

const setMatrixZeroes: Problem = {
  id: 'set-matrix-zeroes',
  name: 'Set Matrix Zeroes',
  number: 73,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/set-matrix-zeroes/',
  description: 'If an element is 0, set its entire row and column to 0. Do it in-place.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
  timeComplexity: 'O(m*n)',
  spaceComplexity: 'O(1)',
  pattern: 'First Row/Col as Markers',
  hints: [
    'Use first row and column as markers for which rows/cols to zero.',
    'Process from bottom-right to avoid overwriting markers.',
  ],
  code: `def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    rowZero = any(matrix[0][j] == 0 for j in range(n))
    for i in range(1, m):
        for j in range(n):
            if matrix[i][j] == 0:
                matrix[0][j] = 0
                matrix[i][0] = 0`,
  steps: [
    { line: 1, label: 'Init', message: 'Find zeros. matrix[1][1]=0.', viz: { matrix: { values: [[1,1,1],[1,0,1],[1,1,1]], highlights: [[1,1]] }, variables: {} } },
    { line: 3, label: 'Mark', message: 'Mark row 1 and col 1: matrix[0][1]=0, matrix[1][0]=0.', viz: { matrix: { values: [[1,0,1],[0,0,1],[1,1,1]], highlights: [[0,1],[1,0]] }, variables: {} } },
    { line: 5, label: 'Scan', message: 'Check markers in first row and column.', viz: { matrix: { values: [[1,0,1],[0,0,1],[1,1,1]], highlights: [[0,1],[1,0]] }, variables: { 'row1': true, 'col1': true } } },
    { line: 7, label: 'Zero Col 1', message: 'Col 1 marker is 0. Set entire column 1 to 0.', viz: { matrix: { values: [[1,0,1],[0,0,1],[1,0,1]], highlights: [[0,1],[1,1],[2,1]] }, variables: {} } },
    { line: 7, label: 'Zero Row 1', message: 'Row 1 marker is 0. Set entire row 1 to 0.', viz: { matrix: { values: [[1,0,1],[0,0,0],[1,0,1]], highlights: [[1,0],[1,1],[1,2]] }, variables: {} } },
    { line: 7, label: 'Result', message: 'Final: row 1 and col 1 are all zeros.', isKeyMoment: true, viz: { matrix: { values: [[1,0,1],[0,0,0],[1,0,1]] }, variables: { result: 'done' } } },
  ],
};

const happyNumber: Problem = {
  id: 'happy-number',
  name: 'Happy Number',
  number: 202,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/happy-number/',
  description: 'Determine if a number is happy (sum of squares of digits eventually reaches 1).',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'n = 19',
  timeComplexity: 'O(log n)',
  spaceComplexity: 'O(1)',
  pattern: 'Floyd Cycle / HashSet',
  hints: [
    'Repeatedly sum the squares of digits.',
    'Use a set to detect cycles, or use slow/fast pointers.',
  ],
  code: `def isHappy(n):
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = sum(int(d)**2 for d in str(n))
    return n == 1`,
  steps: [
    { line: 1, label: 'Init', message: 'n=19. Compute sum of squared digits.', viz: { array: { values: [19] }, variables: { n: 19 } } },
    { line: 4, label: 'Step 1', message: '1^2 + 9^2 = 1 + 81 = 82.', viz: { array: { values: [19, 82], highlights: [1] }, variables: { n: 82 } } },
    { line: 4, label: 'Step 2', message: '8^2 + 2^2 = 64 + 4 = 68.', viz: { array: { values: [19, 82, 68], highlights: [2] }, variables: { n: 68 } } },
    { line: 4, label: 'Step 3', message: '6^2 + 8^2 = 36 + 64 = 100.', viz: { array: { values: [19, 82, 68, 100], highlights: [3] }, variables: { n: 100 } } },
    { line: 4, label: 'Step 4', message: '1^2 + 0^2 + 0^2 = 1. Reached 1!', viz: { array: { values: [19, 82, 68, 100, 1], highlights: [4] }, variables: { n: 1 } } },
    { line: 5, label: 'Result', message: '19 is a happy number.', isKeyMoment: true, viz: { array: { values: [19, 82, 68, 100, 1], found: [4] }, variables: { result: true } } },
  ],
};

const plusOne: Problem = {
  id: 'plus-one',
  name: 'Plus One',
  number: 66,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/plus-one/',
  description: 'Given a number represented as an array of digits, add one to it.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'digits = [1, 2, 3]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Right-to-Left Carry',
  hints: [
    'Start from the last digit and handle carry.',
    'If carry propagates past the first digit, prepend 1.',
  ],
  code: `def plusOne(digits):
    for i in range(len(digits)-1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits`,
  steps: [
    { line: 1, label: 'Init', message: 'digits=[1,2,3]. Add 1 to last digit.', viz: { array: { values: [1,2,3] }, variables: {} } },
    { line: 2, label: 'i=2', message: 'digits[2]=3 < 9. No carry needed.', viz: { array: { values: [1,2,3], highlights: [2] }, variables: { i: 2, 'digits[2]': 3 } } },
    { line: 3, label: 'Add', message: 'digits[2] = 3 + 1 = 4.', viz: { array: { values: [1,2,4], highlights: [2] }, variables: { 'digits[2]': 4 } } },
    { line: 4, label: 'Done', message: 'No carry. Return immediately.', viz: { array: { values: [1,2,4] }, variables: {} } },
    { line: 4, label: 'Check', message: 'If it were [9,9], we would carry and prepend 1.', viz: { array: { values: [1,2,4], sorted: [0,1,2] }, variables: {} } },
    { line: 4, label: 'Result', message: 'Result: [1,2,4].', isKeyMoment: true, viz: { array: { values: [1,2,4], found: [0,1,2] }, variables: { result: '[1,2,4]' } } },
  ],
};

const powXN: Problem = {
  id: 'pow-x-n',
  name: 'Pow(x, n)',
  number: 50,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/powx-n/',
  description: 'Implement pow(x, n), computing x raised to the power n.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'x = 2, n = 10',
  timeComplexity: 'O(log n)',
  spaceComplexity: 'O(log n)',
  pattern: 'Fast Exponentiation',
  hints: [
    'x^n = (x^(n/2))^2 if n is even.',
    'Handle negative n by computing 1/x^(-n).',
  ],
  code: `def myPow(x, n):
    if n == 0: return 1
    if n < 0: return 1 / myPow(x, -n)
    if n % 2 == 0:
        half = myPow(x, n // 2)
        return half * half
    return x * myPow(x, n - 1)`,
  steps: [
    { line: 1, label: 'Init', message: 'Compute 2^10 using fast exponentiation.', viz: { array: { values: [2, 10] , labels: { 0: 'x', 1: 'n' } }, variables: { x: 2, n: 10 } } },
    { line: 4, label: 'n=10', message: '10 is even. Compute 2^5 first, then square it.', viz: { array: { values: [10, 5], labels: { 0: 'n', 1: 'n/2' } }, variables: { n: 10 } } },
    { line: 4, label: 'n=5', message: '5 is odd. 2^5 = 2 * 2^4. Compute 2^4.', viz: { array: { values: [5, 4], labels: { 0: 'n', 1: 'n-1' } }, variables: { n: 5 } } },
    { line: 4, label: 'n=4->2->1', message: '2^4=(2^2)^2=16. 2^2=(2^1)^2=4. 2^1=2.', viz: { array: { values: [2, 4, 16], labels: { 0: '2^1', 1: '2^2', 2: '2^4' } }, variables: {} } },
    { line: 6, label: 'Combine', message: '2^5 = 2*16 = 32. 2^10 = 32*32 = 1024.', viz: { array: { values: [32, 1024], labels: { 0: '2^5', 1: '2^10' } }, variables: {} } },
    { line: 6, label: 'Result', message: '2^10 = 1024. Only ~4 multiplications instead of 10.', isKeyMoment: true, viz: { array: { values: [1024], found: [0] }, variables: { result: 1024 } } },
  ],
};

const multiplyStrings: Problem = {
  id: 'multiply-strings',
  name: 'Multiply Strings',
  number: 43,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/multiply-strings/',
  description: 'Multiply two non-negative integers represented as strings.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'num1 = "123", num2 = "456"',
  timeComplexity: 'O(m*n)',
  spaceComplexity: 'O(m+n)',
  pattern: 'Grade School Multiplication',
  hints: [
    'Result of num1[i]*num2[j] goes to position i+j and i+j+1.',
    'Use an array of size m+n to accumulate products.',
  ],
  code: `def multiply(num1, num2):
    m, n = len(num1), len(num2)
    res = [0] * (m + n)
    for i in range(m-1, -1, -1):
        for j in range(n-1, -1, -1):
            mul = int(num1[i]) * int(num2[j])
            res[i+j+1] += mul
            res[i+j] += res[i+j+1] // 10
            res[i+j+1] %= 10
    return str(int(''.join(map(str, res))))`,
  steps: [
    { line: 1, label: 'Init', message: '"123" x "456". Result array of size 6.', viz: { array: { values: [0,0,0,0,0,0] }, variables: { num1: '123', num2: '456' } } },
    { line: 5, label: '3x6', message: '3*6=18. res[5]=8, carry 1 to res[4].', viz: { array: { values: [0,0,0,0,1,8], highlights: [4,5] }, variables: { i: 2, j: 2 } } },
    { line: 5, label: '3x5,3x4', message: '3*5=15+1=16, 3*4=12+1=13. Partial: [0,1,3,6,8,8].', viz: { array: { values: [0,1,3,6,8,8], highlights: [1,2,3] }, variables: {} } },
    { line: 5, label: '2x col', message: 'Process digit 2 against 4,5,6. Accumulate+carry.', viz: { array: { values: [0,4,7,0,8,8], highlights: [1,2,3] }, variables: {} } },
    { line: 5, label: '1x col', message: 'Process digit 1 against 4,5,6. Final carries.', viz: { array: { values: [0,5,6,0,8,8], highlights: [0,1,2] }, variables: {} } },
    { line: 9, label: 'Result', message: '"123" x "456" = "56088".', isKeyMoment: true, viz: { array: { values: [0,5,6,0,8,8], found: [1,2,3,4,5] }, variables: { result: '56088' } } },
  ],
};

const detectSquares: Problem = {
  id: 'detect-squares',
  name: 'Detect Squares',
  number: 2013,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/detect-squares/',
  description: 'Design a data structure to add points and count axis-aligned squares.',
  vizTypes: ['matrix'],
  language: 'python',
  testInput: 'add points (3,10),(11,1),(3,1),(11,10), count from (11,10)',
  timeComplexity: 'O(n) per count',
  spaceComplexity: 'O(n)',
  pattern: 'HashMap Diagonal Check',
  hints: [
    'For a query point, check all points with same x to get side length.',
    'Then check if the other two corners exist in the map.',
  ],
  code: `class DetectSquares:
    def __init__(self):
        self.counts = defaultdict(int)
    def add(self, point):
        self.counts[tuple(point)] += 1
    def count(self, point):
        res = 0
        px, py = point
        for (x, y), cnt in self.counts.items():
            if abs(px-x) != abs(py-y) or x == px and y == py:
                continue
            res += cnt * self.counts[(x,py)] * self.counts[(px,y)]
        return res`,
  steps: [
    { line: 1, label: 'Init', message: 'Empty point map. Will add points.', viz: { matrix: { values: [[0]] }, variables: {} } },
    { line: 4, label: 'Add', message: 'Add (3,10),(11,1),(3,1),(11,10). 4 points forming a square.', viz: { matrix: { values: [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,1]], highlights: [[0,3],[3,0],[0,0],[3,3]] }, variables: { points: 4 } } },
    { line: 8, label: 'Query', message: 'Count squares from (11,10). Check diagonal points.', viz: { matrix: { values: [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,1]], current: [3,3] }, variables: { px: 11, py: 10 } } },
    { line: 10, label: 'Diagonal', message: 'Point (3,1): |11-3|=|10-1|=8. Valid diagonal.', viz: { matrix: { values: [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,1]], highlights: [[0,0],[3,3]] }, variables: { sideLen: 8 } } },
    { line: 11, label: 'Corners', message: 'Check (3,10) and (11,1). Both exist! Square found.', viz: { matrix: { values: [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,1]], highlights: [[0,3],[3,0],[0,0],[3,3]] }, variables: { count: 1 } } },
    { line: 12, label: 'Result', message: 'Count = 1 square containing (11,10).', isKeyMoment: true, viz: { matrix: { values: [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,1]] }, variables: { result: 1 } } },
  ],
};

export const mathGeometryProblems: Problem[] = [
  rotateImage,
  spiralMatrix,
  setMatrixZeroes,
  happyNumber,
  plusOne,
  powXN,
  multiplyStrings,
  detectSquares,
];
