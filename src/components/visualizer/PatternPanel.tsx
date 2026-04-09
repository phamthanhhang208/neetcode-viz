import { useState } from 'react';
import { ChevronDown, Puzzle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  pattern: string;
  timeComplexity: string;
  spaceComplexity: string;
}

const PATTERN_DETAILS: Record<string, { why: string; when: string[]; keyInsight: string }> = {
  'Hash Map Lookup': {
    why: 'Trade O(n) space for O(1) lookups. Instead of searching the entire array for a complement, store seen values in a hash map for instant access.',
    when: ['Need to find pairs/complements', 'Checking if a value exists quickly', 'Counting frequencies'],
    keyInsight: 'Ask yourself: "What am I searching for at each step?" If you can precompute or cache it, use a hash map.',
  },
  'Frequency Count': {
    why: 'Count occurrences of each element to detect patterns like anagrams, duplicates, or most frequent elements.',
    when: ['Comparing character/element frequencies', 'Detecting anagrams or permutations', 'Finding top-K frequent elements'],
    keyInsight: 'Two strings are anagrams if and only if their character frequency maps are identical.',
  },
  'Hash Set Lookup': {
    why: 'Use a set for O(1) membership testing when you only need to know if an element exists, not its count or position.',
    when: ['Detecting duplicates', 'Checking membership in a collection', 'Building sequences from unique elements'],
    keyInsight: 'Sets are hash maps without values — perfect when you only care about existence.',
  },
  'Hash Map Grouping': {
    why: 'Group elements by a computed key. Elements with the same key belong to the same group.',
    when: ['Grouping anagrams by sorted characters', 'Categorizing data by a property', 'Bucketing elements'],
    keyInsight: 'The key to grouping is choosing the right key function — what makes two elements "equivalent"?',
  },
  'Bucket Sort / Frequency Count': {
    why: 'When you need top-K elements, count frequencies first, then use bucket sort (index = frequency) for O(n) retrieval.',
    when: ['Finding top K frequent elements', 'When values have bounded frequency', 'Avoiding O(n log n) sort'],
    keyInsight: 'Bucket sort turns a frequency map into a position map — frequency becomes the index.',
  },
  'Prefix/Suffix Products': {
    why: 'Compute products except self without division by building prefix products (left-to-right) and suffix products (right-to-left).',
    when: ['Product of array except self', 'Prefix sums/products', 'When division is not allowed'],
    keyInsight: 'Any element\'s answer = product of everything to its left × product of everything to its right.',
  },
  'Length Prefix Encoding': {
    why: 'Encode strings with their length as a prefix so the decoder knows exactly how many characters to read, handling any character content.',
    when: ['Encoding/decoding strings with arbitrary characters', 'Serialization where delimiters might appear in data'],
    keyInsight: 'The length prefix makes parsing unambiguous — you always know where each string ends.',
  },
  'Hash Set Validation': {
    why: 'Use multiple sets to track constraints across different dimensions (rows, columns, boxes in Sudoku).',
    when: ['Validating constraints across multiple dimensions', 'Checking uniqueness in overlapping groups'],
    keyInsight: 'Each constraint dimension gets its own set. A violation is when a value already exists in any relevant set.',
  },
  'Hash Set + Sequence Building': {
    why: 'Build sequences by identifying starting points (elements with no predecessor) and extending from each start.',
    when: ['Finding longest consecutive sequence', 'Building chains from scattered elements'],
    keyInsight: 'Only start counting from sequence beginnings (elements where n-1 is NOT in the set) to avoid redundant work.',
  },
  'Two Pointers (Opposite Direction)': {
    why: 'Two pointers moving inward from both ends eliminate possibilities efficiently on sorted or symmetric data.',
    when: ['Palindrome checks', 'Finding pairs in sorted arrays', 'Container problems'],
    keyInsight: 'At each step, you can safely eliminate one end because the answer cannot be there.',
  },
  'Two Pointers on Sorted Array': {
    why: 'On a sorted array, if the sum is too large, move the right pointer left; if too small, move the left pointer right.',
    when: ['Two-sum on sorted data', 'Finding pairs with target sum', 'Narrowing a search range'],
    keyInsight: 'Sorting gives you a direction to move — the sum tells you which pointer to adjust.',
  },
  'Sort + Two Pointers': {
    why: 'Fix one element, then use two pointers on the remaining sorted subarray to find complementary pairs.',
    when: ['3Sum, 4Sum problems', 'Finding triplets with target sum', 'Multi-element combinations'],
    keyInsight: 'Reduce k-Sum to (k-1)-Sum by fixing elements one at a time.',
  },
  'Two Pointers (Greedy)': {
    why: 'Move the pointer at the shorter side — the only way to potentially increase the area is to find a taller wall.',
    when: ['Container with most water', 'Maximizing area between two boundaries'],
    keyInsight: 'Moving the taller pointer can never increase the area, so always move the shorter one.',
  },
  'Two Pointers with Max Tracking': {
    why: 'Track the maximum height seen from each side. Water at any position = min(leftMax, rightMax) - height.',
    when: ['Trapping rain water', 'Problems where capacity depends on surrounding maximums'],
    keyInsight: 'Water is trapped by the minimum of the two maximum walls. Process from the side with the smaller maximum.',
  },
  'Min Tracking': {
    why: 'Track the minimum seen so far and calculate the maximum difference (profit) at each step.',
    when: ['Best time to buy/sell stock', 'Maximum difference in an array', 'Running minimum problems'],
    keyInsight: 'You can only sell after buying — so track the minimum price seen, and check profit at each new price.',
  },
  'Sliding Window + Set': {
    why: 'Expand the window right; when a duplicate is found, shrink from the left until the duplicate is removed.',
    when: ['Longest substring without repeating characters', 'Windows with unique element constraints'],
    keyInsight: 'The set tracks what\'s in the current window. Shrink the window until the constraint is satisfied again.',
  },
  'Sliding Window + Frequency': {
    why: 'Track character frequencies in the window. The window is valid when (window size - max frequency) ≤ k.',
    when: ['Character replacement problems', 'Windows where most elements are the same', 'Allowing k modifications'],
    keyInsight: 'You need to replace (windowLen - maxFreq) characters. If that exceeds k, shrink the window.',
  },
  'Fixed Sliding Window': {
    why: 'Window size is fixed (equal to the pattern length). Slide it one position at a time, comparing frequency maps.',
    when: ['Permutation in string', 'Fixed-size substring matching', 'Anagram search'],
    keyInsight: 'Instead of recomputing the frequency map, add the new character and remove the old one as the window slides.',
  },
  'Variable Sliding Window': {
    why: 'Expand right until valid, then shrink left to minimize. Track the best valid window found.',
    when: ['Minimum window substring', 'Smallest window containing all required elements'],
    keyInsight: 'Two phases in each iteration: expand to satisfy, shrink to optimize.',
  },
  'Monotonic Deque': {
    why: 'Maintain a deque where elements are always decreasing. The front is always the current window maximum.',
    when: ['Sliding window maximum/minimum', 'Next greater element in a window'],
    keyInsight: 'Remove elements from the back that are smaller than the new element — they can never be the maximum.',
  },
  'Stack Matching': {
    why: 'Push opening brackets onto the stack. When a closing bracket appears, check if it matches the top of the stack.',
    when: ['Bracket matching/validation', 'Nested structure validation', 'Undo operations'],
    keyInsight: 'The stack naturally handles nesting — the most recent unmatched opening bracket is always on top.',
  },
  'Two Stacks': {
    why: 'Use a second stack to track the running minimum alongside the main stack.',
    when: ['Min stack / max stack', 'Tracking extremes in a stack efficiently'],
    keyInsight: 'The min stack is always in sync — push the current minimum whenever you push to the main stack.',
  },
  'Stack Evaluation': {
    why: 'Push operands onto the stack. When an operator appears, pop two operands, compute, and push the result.',
    when: ['Reverse Polish Notation', 'Expression evaluation', 'Calculator problems'],
    keyInsight: 'The stack naturally handles operator precedence in postfix notation — no parentheses needed.',
  },
  'Backtracking with Stack': {
    why: 'Build valid combinations by tracking open/close counts. Only add a closing bracket if open count > close count.',
    when: ['Generate parentheses', 'Building all valid combinations', 'Constrained generation'],
    keyInsight: 'At each position, you have at most 2 choices (open or close). Prune invalid paths early.',
  },
  'Monotonic Stack': {
    why: 'Maintain a stack of indices in decreasing order. When a larger element appears, pop and calculate for all smaller elements.',
    when: ['Daily temperatures', 'Next greater/smaller element', 'Histogram problems'],
    keyInsight: 'Each element is pushed and popped at most once — the amortized time is O(n).',
  },
  'Binary Search': {
    why: 'Halve the search space each step by comparing with the middle element.',
    when: ['Searching in sorted data', 'Finding boundaries', 'Optimization on monotonic functions'],
    keyInsight: 'Binary search works whenever you can determine which half to eliminate based on a condition.',
  },
  'Binary Search on Virtual Array': {
    why: 'Treat a 2D sorted matrix as a virtual 1D sorted array using index math: row = mid/cols, col = mid%cols.',
    when: ['Search in sorted matrix', 'Flattening 2D to 1D for binary search'],
    keyInsight: 'Any 2D index can be converted to 1D and back: idx = row*cols + col.',
  },
  'Binary Search on Answer': {
    why: 'Binary search on the answer space when the problem has a monotonic predicate (if speed k works, k+1 also works).',
    when: ['Koko eating bananas', 'Minimum speed/capacity problems', 'Optimization with monotonic feasibility'],
    keyInsight: 'Don\'t search the input — search the answer. Use binary search on "what\'s the minimum X such that..."',
  },
  'Modified Binary Search': {
    why: 'In a rotated sorted array, one half is always sorted. Determine which half, then decide direction.',
    when: ['Rotated sorted arrays', 'Find minimum in rotated array', 'Search in rotated array'],
    keyInsight: 'Compare mid with the rightmost element to determine which half is sorted.',
  },
  'Backtracking': {
    why: 'Explore all candidates by building solutions incrementally. Abandon paths that can\'t lead to valid solutions.',
    when: ['Generating subsets/permutations/combinations', 'Constraint satisfaction', 'Path finding with constraints'],
    keyInsight: 'Choose → Explore → Unchoose. The key is knowing when to prune.',
  },
};

const DEFAULT_DETAIL = {
  why: 'This pattern solves the problem efficiently by leveraging specific properties of the data structure or algorithm.',
  when: ['When the problem matches the pattern\'s constraints', 'When brute force is too slow'],
  keyInsight: 'Identify the core pattern and apply the standard technique.',
};

export default function PatternPanel({ pattern, timeComplexity, spaceComplexity }: Props) {
  const [open, setOpen] = useState(false);
  const detail = PATTERN_DETAILS[pattern] ?? DEFAULT_DETAIL;

  return (
    <div className="border-t border-editor-border bg-editor-sidebar">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
      >
        <Puzzle size={12} />
        <span>Pattern: <span className="text-accent-cyan">{pattern}</span></span>
        <ChevronDown size={12} className={cn('ml-auto transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="px-4 pb-3 space-y-3">
          {/* Why this pattern */}
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-1 font-semibold">Why this pattern?</h4>
            <p className="text-xs text-text-primary leading-relaxed">{detail.why}</p>
          </div>

          {/* When to use */}
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-1 font-semibold">When to use</h4>
            <ul className="space-y-0.5">
              {detail.when.map((item, i) => (
                <li key={i} className="text-xs text-text-secondary flex items-start gap-1.5">
                  <span className="text-accent-green mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Key insight */}
          <div className="bg-editor-bg rounded p-2.5 border-l-2 border-accent-yellow">
            <p className="text-xs text-accent-yellow/90 font-medium">Key Insight</p>
            <p className="text-xs text-text-primary mt-0.5 leading-relaxed">{detail.keyInsight}</p>
          </div>
        </div>
      )}
    </div>
  );
}
